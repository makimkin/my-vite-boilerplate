import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE BODY ROW CELL COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableBodyRowCellProps = React.TableHTMLAttributes<HTMLTableCellElement>;

const TableBodyRowCell: React.FC<TTableBodyRowCellProps> = ({ className, ...otherProps }) => (
  <td
    className={cn(
      "border-l border-t last:border-r group-last/table-body-row:border-b",
      "group-data-clickable/table-body-row:cursor-pointer",
      "group-data-clickable/table-body-row:group-hover/table-body-row:bg-background-200",
      className,
      "group/table-body-row-cell"
    )}
    {...otherProps}
  />
);
TableBodyRowCell.displayName = "TableBodyRowCellComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableBodyRowCell };
