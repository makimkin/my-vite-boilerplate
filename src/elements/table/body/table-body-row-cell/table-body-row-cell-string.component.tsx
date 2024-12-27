import { cn } from "📖/tailwind.utils";

import { TableBodyRowCell } from "./table-body-row-cell.component";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE BODY ROW CELL STRING COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableBodyRowCellStringProps = React.ComponentProps<typeof TableBodyRowCell>;

const TableBodyRowCellString: React.FC<TTableBodyRowCellStringProps> = ({
  className,
  ...otherProps
}) => (
  <TableBodyRowCell
    className={cn("", className)}
    {...otherProps}
  />
);
TableBodyRowCellString.displayName = "TableBodyRowCellStringComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableBodyRowCellString };
