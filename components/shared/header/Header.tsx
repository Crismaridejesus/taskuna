import { SidebarTrigger } from "@/components/ui/sidebar";
import HeaderAction from "./components/headerAction/HeaderAction";
import SearchBar from "./components/searchBar/SearchBar";

export default function Header() {
    return (
        <div className="flex h-full w-full">
            <div className="relative flex flex-1 items-center pl-2">
                <div className="absolute scale-150">
                    <SidebarTrigger />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <SearchBar />
            </div>
            <div className="flex-1">
                <HeaderAction />
            </div>
        </div>
    );
}
