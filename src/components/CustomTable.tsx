import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
import Checkbox from "./Checkbox";

interface TableProps {
  columns: string[];
  rows: any[];
  page: number;
  rowsPerPage: number;
  onChangePage: (page: number) => void;
  handleEdit: (row: any) => void;
  handleDelete: (row: any) => void;
}

export default function CustomTable({
  columns,
  rows,
  page,
  rowsPerPage,
  onChangePage,
  handleEdit,
  handleDelete,
}: TableProps) {
  const pages = Math.ceil(rows.length / rowsPerPage);

  return (
    <div className="w-full h-full p-4 flex flex-col border border-gray-300 rounded-md">
      <div className="w-full flex-1">
        <table className="w-full text-left">
          <thead className="border-spacing-y-2">
            <tr className="font-semibold">
              <th>
                <Checkbox id="select-all" />
              </th>
              {columns.map((column) => {
                return (
                  <th className="font-semibold text-blue-950" key={column}>
                    {column}
                  </th>
                );
              })}
              <th className="font-semibold text-blue-950 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row, i) => {
                return (
                  <tr
                    key={i}
                    className="py-1 birder-t border-b border-gray-400"
                  >
                    <td>
                      <Checkbox id={`${i}`} />
                    </td>
                    {columns.map((column, i) => {
                      return (
                        <td className="text-sm" key={i}>
                          {row[column]}
                        </td>
                      );
                    })}
                    <td>
                      <div className="flex justify-center items-center gap-1">
                        <button
                          onClick={() => handleEdit(row)}
                          className="rounded-full p-2 transition-all hover:bg-gray-300"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(row)}
                          className="rounded-full p-2 transition-all hover:bg-gray-300"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-end gap-1">
          {page - 1 === 0 ? null : (
            <button onClick={() => onChangePage(page - 1)} className="pr-1">
              <ChevronLeft />
            </button>
          )}

          {Array.from({ length: pages }).map((_, i) => {
            return (
              <button
                onClick={() => onChangePage(i + 1)}
                className="text-blue-950 text-lg p-2 font-medium hover:underline"
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
          {page === pages ? null : (
            <button onClick={() => onChangePage(page + 1)} className="pl-1">
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
