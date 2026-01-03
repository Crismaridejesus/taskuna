import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBarInput() {
    return (
        <div className="flex w-3/4 items-center rounded-md border border-gray-600 bg-white px-2 py-1">
            <Input
                type="text"
                placeholder="Search anything.."
                className="flex-1 border-none! shadow-none! ring-0! outline-none!"
            />
            <Search className="h-6 w-10 text-gray-500" />
        </div>
    );
}
