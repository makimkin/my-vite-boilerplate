import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE FOOTER ROW COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableFooterRowProps = React.HTMLAttributes<HTMLTableRowElement>;

const TableFooterRow: React.FC<TTableFooterRowProps> = ({ className, ...otherProps }) => (
  <tr
    className={cn(className, "group/table-footer-row")}
    {...otherProps}
  />
);
TableFooterRow.displayName = "TableFooterRowComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableFooterRow };
