import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBarButton() {
    return (
        <Button>
            <Search className="h-4 w-4" />
        </Button>
    );
}
