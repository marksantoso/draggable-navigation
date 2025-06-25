"use client"
import React, { useEffect, useRef, useState, useLayoutEffect, useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useNavigationStore } from '@/store/NavigationStore';
import Divider from '@/components/@ui/Divider/Divider';
import Button from '@/components/@ui/Button/Button';
import { Plus } from 'lucide-react';

import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
	DragStartEvent,
	DragOverEvent,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableNavigationItem from './SortableNavigationItem';
import { UniqueIdentifier } from '@dnd-kit/core';

const Navigation = () => {
	const pathname = usePathname();
	const router = useRouter();
	const firstBtnRef = useRef<HTMLDivElement | null>(null);
	const lastBtnRef = useRef<HTMLDivElement | null>(null);
	const [dividerStyle, setDividerStyle] = useState({});
	const { navigation, navigateTo, toggleSettings, setCurrentPage, addPage, reorderItems } = useNavigationStore();

	// Move useSensors to the top level
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	// Memoize callback functions
	const handleNavigation = useCallback((pageId: string) => {
		navigateTo(pageId);
		router.push(`/${pageId}`);
	}, [navigateTo, router]);

	const handleDragStart = useCallback((event: DragStartEvent) => {
		toggleSettings(event.active.id as string, false)
	}, [toggleSettings]);

	const reorderNavigationItems = useCallback((active: { id: UniqueIdentifier }, over: { id: UniqueIdentifier } | null) => {
		if (over && active.id !== over.id) {
			const oldIndex = navigation.findIndex((item) => item.id === active.id);
			const newIndex = navigation.findIndex((item) => item.id === over.id);
			const newOrder = arrayMove(navigation, oldIndex, newIndex);
			reorderItems(newOrder);
		}
	}, [navigation, reorderItems]);

	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;
		reorderNavigationItems(active, over);
	}, [reorderNavigationItems]);

	const handleDragOver = useCallback((event: DragOverEvent) => {
		const { active, over } = event;
		reorderNavigationItems(active, over);
		updateGap();
	}, [reorderNavigationItems]);

	const updateGap = useCallback(() => {
		requestAnimationFrame(() => {
			if (!firstBtnRef.current || !lastBtnRef.current) return;
			const firstRect = firstBtnRef.current.getBoundingClientRect();
			const lastRect = lastBtnRef.current.getBoundingClientRect();
			setDividerStyle({ width: `${(lastRect.right - firstRect.right) + 20}px`, left: `${firstRect.width}px` })
		});
	}, []);

	useEffect(() => {
		const currentPage = pathname?.replace('/', '');
		setCurrentPage(currentPage);
		toggleSettings(currentPage, true)
	}, [pathname, setCurrentPage, toggleSettings]);

	// Run *after* the DOM paints, so we get accurate dimensions
	useLayoutEffect(() => {
		updateGap();
		window.addEventListener("resize", updateGap);
		return () => window.removeEventListener("resize", updateGap);
	}, [navigation]);

	useEffect(() => {
		updateGap();
	}, [navigation])

	const handleAddPage = useCallback(() => {
		addPage(navigation.length + 1);
	}, [addPage]);

	// Memoize the navigation items mapping function
	const navigationItems = useMemo(() => 
		navigation.map((item, index) => {
			const isFirstItem = index === 0;
			const isLastItem = index === navigation.length - 1;

			return (
				<div key={item.id} className="flex flex-row items-center">
					<SortableNavigationItem
						ref={isFirstItem ? firstBtnRef : isLastItem ? lastBtnRef : null}
						item={item}
						index={index}
						isLastItem={isLastItem}
						onNavigate={handleNavigation}
					/>
					{!isLastItem && <Divider order={index + 1} />}
				</div>
			);
		}), [navigation, handleNavigation]);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
		>
			<div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
				<div className="flex items-center justify-start relative flex-1">
					<div className={`h-0.5 border-t border-dashed border-gray-400 absolute`} style={dividerStyle}></div>
					<SortableContext
						items={navigation}
						strategy={horizontalListSortingStrategy}
					>
						{navigationItems}
					</SortableContext>
					<div className="bg-gray-100 ml-[20px]"> 
						<Button text="Add Page" icon={Plus} iconColor="text-gray-900" className="bg-white" onClick={handleAddPage} />
					</div>
				</div>
			</div>
		</DndContext>
	);
};

// Memoize the entire component
export default React.memo(Navigation);