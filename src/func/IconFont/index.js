import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import iconfont from "../../Asset/font/iconfont";

const IconFont = createFromIconfontCN({
  scriptUrl: iconfont,
});

const IconWrapper = (props) => {
  return <IconFont {...props} />;
};

export default IconWrapper;
