import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE FOOTER COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableFooterProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableFooter: React.FC<TTableFooterProps> = ({ className, ...otherProps }) => (
  <tfoot
    className={cn(className, "group/table-footer")}
    {...otherProps}
  />
);
TableFooter.displayName = "TableFooterComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableFooter };
