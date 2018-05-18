import React from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}₺`}
      visible={dragging}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default props => {
  return (
    <Slider
      min={5}
      max={100}
      dots={true}
      handleStyle={{
        borderColor: "#e41e35",
        backgroundColor: "#e41e35"
      }}
      trackStyle={{ backgroundColor: "#e41e35" }}
      activeDotStyle={{ borderColor: "#e41e35" }}
      step={5}
      handle={handle}
      onChange={props.onChange}
      defaultValue={props.value}
    />
  );
};
