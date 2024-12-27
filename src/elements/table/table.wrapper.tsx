import { Table } from "./table.component";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE WRAPPER COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableWrapperProps = React.ComponentProps<typeof Table>;

const TableWrapper = ({ ...otherProps }: TTableWrapperProps) => <Table {...otherProps} />;
TableWrapper.displayName = "TableWrapperComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableWrapper };
