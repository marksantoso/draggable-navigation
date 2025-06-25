"use client"
import React from "react";
import { Plus } from "lucide-react";

interface CircleButtonProps {
    onClick: () => void;
    ariaLabel?: string;
}

const CircleButton: React.FC<CircleButtonProps> = ({
    onClick,
    ariaLabel = "Add",
}) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className="w-[16px] h-[16px] flex items-center justify-center rounded-full border border-gray-300 shadow-sm bg-white hover:bg-gray-100 hover:cursor-pointer focus:outline-none transition-colors duration-150"
        >
            <Plus className="text-gray-500" />
        </button>
    );
};

export default CircleButton;
