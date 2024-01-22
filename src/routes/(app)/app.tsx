import { RouteSectionProps } from "@solidjs/router";
import SideBar from "~/components/SideBar";


export default function App(props: RouteSectionProps) {
    
    return (
        <div class="antialiased bg-gray-50 dark:bg-gray-900">
            <SideBar />
            <main class="p-4 md:ml-64 min-h-screen pt-20 dark:text-white">
                {props.children}
            </main>
        </div>
    );
}
