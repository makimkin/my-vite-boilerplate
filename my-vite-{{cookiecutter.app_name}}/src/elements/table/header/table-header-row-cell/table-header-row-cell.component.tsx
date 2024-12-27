import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE HEADER ROW CELL COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableHeaderRowCellProps = React.HTMLAttributes<HTMLTableCellElement>;

const TableHeaderRowCell: React.FC<TTableHeaderRowCellProps> = ({ className, ...otherProps }) => (
  <th
    className={cn(
      "border-l border-t last:border-r group-first/table-header-row:first:rounded-tl-sm group-first/table-header-row:last:rounded-tr-sm",
      className,
      "group/table-header-row-cell"
    )}
    {...otherProps}
  />
);
TableHeaderRowCell.displayName = "TableHeaderRowCellComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableHeaderRowCell };
