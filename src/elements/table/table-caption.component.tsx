import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region TABLE CAPTION COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TTableCaptionProps = React.TableHTMLAttributes<HTMLTableCaptionElement>;

const TableCaption: React.FC<TTableCaptionProps> = ({ className, ...otherProps }) => (
  <caption
    className={cn("caption-bottom", className)}
    {...otherProps}
  />
);
TableCaption.displayName = "TableCaptionComponent";
// #endregion --------------------------------------------------------------------------------------
export { TableCaption };
