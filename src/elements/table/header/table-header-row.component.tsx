import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE HEADER ROW COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableHeaderRowProps = React.TableHTMLAttributes<HTMLTableRowElement>;

const TableHeaderRow: React.FC<TTableHeaderRowProps> = ({ className, ...otherProps }) => (
  <tr
    className={cn(className, "group/table-header-row")}
    {...otherProps}
  />
);
TableHeaderRow.displayName = "TableHeaderRowComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableHeaderRow };
