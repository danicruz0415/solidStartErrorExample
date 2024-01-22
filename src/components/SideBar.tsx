import { A } from "@solidjs/router";
import { For } from "solid-js";
import ThemeHandler from "~/utilities/themeHandler";

export default function SideBar() {

    function SideBarMenuItem(props: { text: string, href: string }) {

        return <>
            <li>
                <A
                    href={props.href}
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                    <span class="ml-3">{props.text}</span>
                </A>
            </li>
        </>;
    }
    
    return <>
        <aside
            class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <div class="overflow-y-auto py-5 px-3 bg-white dark:bg-gray-800 scrollbar-thin">
                <ul class="space-y-2">
                    <SideBarMenuItem text="Teachers with bug" href="/app/teachers/" />
                    <SideBarMenuItem text="Teachers without bug" href="/app/teachers2/" />
                </ul>
            </div>
        </aside>
    </>;
}