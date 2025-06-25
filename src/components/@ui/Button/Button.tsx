import React from 'react';
import { MoreVertical } from 'lucide-react';

const Button = ({
	ref,
	text,
	icon: Icon,
	iconColor,
	isActive = false,
	disabled = false,
	onClick = () => { }
}: {
	ref?: React.RefObject<HTMLDivElement>,
	text: string,
	icon?: React.ComponentType<{ className?: string }>,
	iconColor: string,
	isActive?: boolean,
	disabled?: boolean,
	onClick?: () => void
}) => {
	const hoverStyles = "hover:cursor-pointer hover:bg-gray-100"
	const activeStyles = "bg-gray-100"
	const disabledStyles = "opacity-50 cursor-not-allowed"
	const defaultStyles = "bg-white shadow-md rounded-lg p-1.5 border border-gray-300"

	return (
		<div
			ref={ref}
			onClick={onClick}
			className={`
        flex items-center justify-between 
        h-[32px]
        ${defaultStyles}
        ${!disabled && hoverStyles}
        ${isActive && activeStyles}
        ${disabled && disabledStyles}
      `}
		>
			<div className="flex items-center space-x-1.5">
				<div className="flex items-center justify-center w-[20px] h-[20px]">
					{Icon && <Icon className={`${iconColor}`} />}
				</div>
				<span className="text-sm font-medium text-gray-900 whitespace-nowrap">{text}</span>
				<div className={`flex items-center justify-center w-[16px] h-[16px] ${isActive ? "block" : "hidden"}`}>
					<MoreVertical className="text-gray-500" />
				</div>
			</div>
		</div>
	);
};

export default Button;