import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableProps = React.TableHTMLAttributes<HTMLTableElement>;

const Table: React.FC<TTableProps> = ({ className, ...otherProps }) => (
  <table
    className={cn(className, "group/table relative", "w-full border-separate border-spacing-0")}
    {...otherProps}
  />
);
Table.displayName = "TableComponent";
// #endregion --------------------------------------------------------------------------------------
export { Table };
