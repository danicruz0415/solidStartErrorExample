import { createSignal, For } from 'solid-js'

import {
    flexRender,
    getCoreRowModel,
    ColumnDef,
    createSolidTable,
    getPaginationRowModel,
} from '@tanstack/solid-table'

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const defaultData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
];

const defaultColumns: ColumnDef<Person>[] = [
    {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        footer: info => info.column.id,
    },
    {
        accessorFn: row => row.lastName,
        id: 'lastName',
        cell: info => <b>{info.getValue<string>()}</b>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
    },
    {
        accessorKey: 'age',
        header: () => 'Age',
        footer: info => info.column.id,
    },
    {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        footer: info => info.column.id,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        footer: info => info.column.id,
    },
    {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: info => info.column.id,
    },
]

defaultColumns.unshift({
    id: 'selection',
    header: () => <div class="flex items-center">
        <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="checkbox-all" class="sr-only">checkbox</label>
    </div>,
    cell: () => <div class="flex items-center">
        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    </div>,
});

defaultColumns.push({
    id: 'actions',
    cell: (context) => <>
        <button id={`table${1}Cell${context.cell.id}DropdownButton`} data-dropdown-toggle={`table${1}Cell${context.cell.id}Dropdown`} class="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
        </button>
        <div id={`table${1}Cell${context.cell.id}Dropdown`} class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm" aria-labelledby={`table${1}Cell${context.cell.id}DropdownButton`}>
                <li>
                    <button type="button" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        Edit
                    </button>
                </li>
            </ul>
        </div>
    </>,
});

export default function Teachers() {

    const [data, setData] = createSignal(defaultData);

    const table = createSolidTable({
        get data() {
            return data()
        },
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return <>
        <div class="mx-auto overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <For each={table.getHeaderGroups()}>
                            {headerGroup => (
                                <tr>
                                    <For each={headerGroup.headers}>
                                        {header => (
                                            <th scope="col" class="px-4 py-3">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </th>
                                        )}
                                    </For>
                                </tr>
                            )}
                        </For>
                    </thead>
                    <tbody>
                        <For each={table.getRowModel().rows}>
                            {row => (
                                <tr class='border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'>
                                    <For each={row.getVisibleCells()}>
                                        {cell => (
                                            <td class="px-4 py-2">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        )}
                                    </For>
                                </tr>
                            )}
                        </For>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}