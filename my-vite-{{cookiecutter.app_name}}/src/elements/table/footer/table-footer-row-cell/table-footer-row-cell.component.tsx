import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE FOOTER ROW CELL COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableFooterRowCellProps = React.HTMLAttributes<HTMLTableCellElement>;

const TableFooterRowCell: React.FC<TTableFooterRowCellProps> = ({
  className,
  children,
  ...otherProps
}) => (
  <td
    className={cn(
      "border-b border-l last:border-r group-last/table-footer-row:first:rounded-bl-sm group-last:last:rounded-br-sm",
      className,
      "group/table-footer-row-cell"
    )}
    {...otherProps}
  >
    {children}
  </td>
);
TableFooterRowCell.displayName = "TableFooterRowCellComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableFooterRowCell };
