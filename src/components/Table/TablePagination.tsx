import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface PaginationProps {
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  count: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (value: string) => void;
}

export default function Pagination({
  rowsPerPageOptions,
  rowsPerPage,
  count,
  page,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) {
  const pages = Math.ceil(count / rowsPerPage);

  return (
    <div className="flex w-full items-center justify-end gap-4 border-t px-6 py-4">
      <div className="flex items-center gap-2">
        <span>Linhas por Página</span>
        <Select.Root
          onValueChange={onRowsPerPageChange}
          value={String(rowsPerPage)}
        >
          <Select.Trigger className="w-14">
            <Select.Value placeholder={rowsPerPage} />
          </Select.Trigger>
          <Select.Content>
            <ScrollArea.Root>
              {rowsPerPageOptions.map((rowsPerPageOption, i) => (
                <Select.Item
                  value={String(rowsPerPageOption)}
                  key={`option-${rowsPerPageOption}`}
                >
                  {rowsPerPageOption}
                </Select.Item>
              ))}
            </ScrollArea.Root>
          </Select.Content>
        </Select.Root>
      </div>
      <div>
        {count === 0 ? (
          <>{`${count}-${count} de ${count}`}</>
        ) : (
          <>
            {count < rowsPerPage ? (
              <>{`${page * rowsPerPage + 1}-${count} de ${count}`}</>
            ) : (
              <>
                {`${page * rowsPerPage + 1}-${
                  (page + 1) * rowsPerPage
                } de ${count}`}
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          className="cursor-pointer rounded-full p-1 transition-all hover:bg-slate-200"
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft />
        </button>
        <button
          className="cursor-pointer rounded-full p-1 transition-all hover:bg-slate-200"
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === pages - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
