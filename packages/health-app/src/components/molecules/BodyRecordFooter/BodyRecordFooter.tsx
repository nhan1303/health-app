import clsx from "clsx";

import React from "react";
import { Button, Stack } from "ui-components";

export interface IModeItem {
  label: string;
  value: string;
}

export interface IBodyRecordFooterProps {
  onModeChange?: (item: IModeItem, index: number) => void;
  initActiveIndex?: number;
}

export const BodyRecordFooter: React.FC<IBodyRecordFooterProps> = ({
  onModeChange,
  initActiveIndex = -1,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(initActiveIndex);

  const DefaultButtonSx = {
    "& .MuiButton-root": {
      color: "primary.main",
      backgroundColor: "light.main",
    },

    "& .MuiButton-root:hover, & .MuiButton-root.active": {
      backgroundColor: "primary.main",
      color: "light.main",
    },
  };

  const BodyRecordFooterSx = {
    ...DefaultButtonSx,
  };

  const ButtonSx = {
    width: "56px",
    height: "24px",
    borderRadius: "11px",
    marginRight: "16px",
    padding: "0 21px",
  };

  const handleClick = (item: IModeItem, index: number) => {
    setActiveIndex(index);

    if (!onModeChange) return;
    onModeChange(item, index);
  };

  const items: IModeItem[] = [
    {
      label: "日",
      value: "day",
    },
    {
      label: "週",
      value: "week",
    },
    {
      label: "月",
      value: "month",
    },
    {
      label: "年",
      value: "year",
    },
  ];

  const renderItems = React.useMemo(() => {
    return items.map((item, index: number) => (
      <Button
        onClick={() => handleClick(item, index)}
        key={item.value}
        color="inherit"
        variant="contained"
        className={clsx({
          active: activeIndex === index,
        })}
        sx={ButtonSx}
      >
        {item.label}
      </Button>
    ));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <Stack sx={BodyRecordFooterSx} direction="row" marginTop="8px">
      {renderItems}
    </Stack>
  );
};
