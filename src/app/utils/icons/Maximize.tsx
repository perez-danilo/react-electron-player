import { SvgIcon, SvgIconTypeMap } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

export default function MaximizeIcon(
  props: DefaultComponentProps<SvgIconTypeMap<{}, "svg">>
) {
  return (
    <SvgIcon {...props}>
      <path d="M24 22h-24v-20h24v20zm-7-1v-15h-16v15h16zm1 0h5v-18h-22v2h17v16zm-6-6h-1v-3.241l-7.241 7.241-.759-.759 7.241-7.241h-3.241v-1h5v5z" />
    </SvgIcon>
  );
}