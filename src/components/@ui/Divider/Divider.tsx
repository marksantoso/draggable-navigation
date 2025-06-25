import { useState } from "react";
import CircleButton from "../Button/CircleButton";
import { useNavigationStore } from "@/store/NavigationStore";

const Divider = ({ order }: { order: number }) => {
    const [isHovered, setIsHovered] = useState(false)
    const { addPage } = useNavigationStore();

    const handleNewPage = () => {
        addPage(order)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className="relative group w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`transition-[width] duration-500 ease-in-out ${isHovered ? "w-[40px]" : "w-[20px]" } h-[20px]`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
                <CircleButton onClick={handleNewPage} />
            </div>
        </div>
    );
};

export default Divider;

 