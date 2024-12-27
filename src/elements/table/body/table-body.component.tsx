import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE BODY COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

const TableBody: React.FC<TTableBodyProps> = ({ className, ...otherProps }) => (
  <tbody
    className={cn(className, "group/table-body")}
    {...otherProps}
  />
);
TableBody.displayName = "TableBodyComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableBody };
