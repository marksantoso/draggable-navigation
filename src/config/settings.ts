import { Flag, Edit, Copy, Layers, Trash } from 'lucide-react';
import { IMenuItem } from './navigation';

export const settingsMenuItems: IMenuItem[] = [
	{
		id: 'set-first-page',
		label: 'Set as first page',
		icon: Flag,
		color: 'text-blue-600'
	},
	{
		id: 'rename',
		label: 'Rename',
		icon: Edit,
		color: 'text-gray-500'
	},
	{
		id: 'copy',
		label: 'Copy',
		icon: Copy,
		color: 'text-gray-500'
	},
	{
		id: 'duplicate',
		label: 'Duplicate',
		icon: Layers,
		color: 'text-gray-500'
	},
	{
		id: 'divider',
		label: '',
		icon: null,
		divider: true
	},
	{
		id: 'delete',
		label: 'Delete',
		icon: Trash,
		color: 'text-red-500'
	}
]; 