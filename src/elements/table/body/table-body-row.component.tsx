import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE BODY ROW COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableBodyRowProps = React.HTMLAttributes<HTMLTableRowElement>;

const TableBodyRow: React.FC<TTableBodyRowProps> = ({ onClick, className, ...otherProps }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region VARS
  // ---------------------------------------------------------------------------------------------*/
  const isClickable = !!onClick;

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <tr
      onClick={onClick}
      data-is-clickable={isClickable}
      className={cn(className, "group/table-body-row")}
      {...otherProps}
    />
  );
};
TableBodyRow.displayName = "TableBodyRowComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableBodyRow };
