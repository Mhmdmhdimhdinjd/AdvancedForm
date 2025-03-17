
import React, { useMemo, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { Table, Button } from "reactstrap";
import { useTheme } from '../../context/themecontext'


const DataTable = ({ data, onDelete, onView }) => {

    const { isDark } = useTheme();

    const columns = useMemo(
        () => [
            {
                id: "first_name", // اضافه کردن id
                header: "نام",
                accessor: "first__name",
                cell: ({ row }) => row.original.first__name
            },
            {
                id: "last_name", // اضافه کردن id
                header: "نام خانوادگی",
                accessor: "last__name",
                cell: ({ row }) => row.original.last__name
            },
            {
                id: "province", // اضافه کردن id
                header: "استان",
                accessorFn: (row) => row.Province?.label || "-"
            },
            {
                id: "city", // اضافه کردن id
                header: "شهر",
                accessorFn: (row) => row.city?.label || "-"
            },
            {
                id: "postal_code", // اضافه کردن id
                header: "کد پستی",
                accessor: "postal_code",
                cell: ({ row }) => row.original.postal_code
            },
            {
                id: "full_time_job", // اضافه کردن id
                header: "شغل تمام وقت",
                accessor: "full_time_job",
                cell: ({ row }) => (row.original.full_time_job ? "بله" : "خیر")
            },
            {
                id: "part_time_job", // اضافه کردن id
                header: "شغل پاره وقت",
                accessor: "part_time_job",
                cell: ({ row }) => (row.original.part_time_job ? "بله" : "خیر")
            },
            {
                id: "actions", // اضافه کردن id
                header: "عملیات",
                cell: ({ row }) => (
                    <div>
                        <Button color="info" onClick={() => onView(row.original)}>
                            مشاهده
                        </Button>{" "}
                        <Button color="danger" onClick={() => onDelete(row.original.id)}>
                            حذف
                        </Button>
                    </div>
                ),
            },
        ],
        [onDelete, onView]
    );

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (

        <div className="responsive-table-container" >

            <Table style={{overflow:'hidden'}} dark={isDark} striped bordered hover>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}

                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
};

export default DataTable