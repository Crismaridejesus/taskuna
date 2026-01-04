import Header from "@/components/shared/header/Header";
import SidebarLeft from "@/components/shared/sidebar/sidebarLeft/SideBarLeft";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function PagesLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <div className="grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[70px_1fr]">
                <header className="col-span-1 col-start-2 row-span-1">
                    <Header />
                </header>
                <aside className="col-span-1 row-span-2 row-start-1">
                    <SidebarLeft />
                </aside>
                <main className="col-span-1 row-span-1 row-start-2 h-full w-full">{children}</main>
            </div>
        </SidebarProvider>
    );
}
