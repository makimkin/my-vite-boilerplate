import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE HEADER COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableHeaderProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableHeader: React.FC<TTableHeaderProps> = ({ className, ...otherProps }) => (
  <thead
    className={cn(className, "group/table-header")}
    {...otherProps}
  />
);
TableHeader.displayName = "TableHeaderComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableHeader };
