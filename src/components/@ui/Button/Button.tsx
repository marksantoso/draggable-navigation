import React from 'react';
import { MoreVertical } from 'lucide-react';

const Button = ({
	ref,
	text,
	icon: Icon,
	iconColor,
	isActive = false,
	disabled = false,
	onClick = () => { },
	className = ""
}: {
	ref?: React.RefObject<HTMLDivElement>,
	text: string,
	icon?: React.ComponentType<{ className?: string }>,
	iconColor: string,
	isActive?: boolean,
	disabled?: boolean,
	onClick?: () => void,
	className?: string
}) => {
	const hoverStyles = `${isActive ? "bg-white" : "hover:bg-gray-500/35"} hover:cursor-pointer`
	const activeStyles = "bg-white"
	const disabledStyles = "opacity-50 cursor-not-allowed"
	const defaultStyles = "bg-grey-500/15 shadow-md rounded-lg p-1.5 border border-gray-300"

	return (
		<div
			ref={ref}
			onClick={onClick}
			className={`
				z-10
				flex items-center justify-between 
				h-[32px]
				transition-[width] duration-700 ease-in-out
				${defaultStyles}
				${!disabled && hoverStyles}
				${isActive && activeStyles}
				${disabled && disabledStyles}
				${className}
			`}
		>
			<div className="flex items-center space-x-1.5 transition-all duration-200 ease-in-out">
				<div className="flex items-center justify-center w-[20px] h-[20px]">
					{Icon && <Icon className={`${iconColor}`} />}
				</div>
				<span className="text-sm font-medium text-gray-700 whitespace-nowrap">{text}</span>

				{isActive && (
					<div className={`flex items-center justify-center w-[16px] h-[16px] transition-all duration-200 ease-in-out`}>
						<MoreVertical className="text-gray-500" />
					</div>
				)}
			</div>
		</div>
	);
};

export default Button;