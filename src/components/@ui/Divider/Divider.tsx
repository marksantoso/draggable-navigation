import CircleButton from "../Button/CircleButton";
import { useNavigationStore } from "@/store/NavigationStore";

const Divider = ({ order }: { order: number }) => {
    
    const { addPage } = useNavigationStore();

    const handleNewPage = () => {
        addPage(order)
    }

    return (
        <div className="relative group w-full">
            <div className="w-10 h-0.5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CircleButton onClick={handleNewPage} />
            </div>
        </div>
    );
};

export default Divider;