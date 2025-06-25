import React, { forwardRef } from 'react';
import Button from '@/components/@ui/Button/Button';
import Settings from './Settings/Menu';
import { CSS } from '@dnd-kit/utilities';
import { INavigationItem } from '@/config/navigation';
import {
    useSortable,
} from '@dnd-kit/sortable';

const SortableNavigationItem = forwardRef(({ item, onNavigate, index, isLastItem }: { item: INavigationItem, onNavigate: (pageId: string) => void, index: number, isLastItem: boolean }, ref) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : 0,
        opacity: isDragging ? 0.8 : 1,
    };

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>}>
            <div
                ref={setNodeRef}
                style={style}
                className="relative touch-none flex items-center justify-center"
                {...attributes}
            >
                <div className="relative">
                    {item.isSettingsActive && <Settings settings={item.settings} />}
                    <div className="flex flex-row items-center w-full" {...listeners} >
                        <Button
                            text={item.name}
                            icon={item.icon}
                            iconColor={item.isActive ? item.activeIconColor : item.iconColor}
                            isActive={item.isActive}
                            onClick={() => onNavigate(item.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});


SortableNavigationItem.displayName = 'SortableNavigationItem';

export default SortableNavigationItem