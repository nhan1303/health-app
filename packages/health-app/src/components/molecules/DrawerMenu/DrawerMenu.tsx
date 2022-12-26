import { CloseIcon, MenuIcon } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, MenuItem, MenuList, Popover, Stack } from "ui-components";

export interface IMenuItemData {
  label: string;
  value: string;
  url: string;
}

export interface IDrawerMenuProps {}

export const DrawerMenu: React.FC<IDrawerMenuProps> = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const IconButtonSx = {
    padding: 0,
    minWidth: "auto",
  };

  const DividerSx = {
    display: "block",
    content: '""',
    width: "100%",
    height: "1px",
    mixBlendMode: "normal",
  };

  const MenuListSx = {
    paddingTop: 0,
    paddingBottom: 0,

    "& .MuiMenuItem-root a": {
      color: "light.main",
      textDecoration: "none",
    },

    "& .MuiMenuItem-root:hover a, & .MuiMenuItem-root.Mui-selected a": {
      color: "primary.main",
    },
  };

  const MenuItemSx = {
    width: "280px",
    height: "72px",

    padding: 0,

    display: "flex",
    flexDirection: "column",
    backgroundColor: "gray.main",

    "&::before": {
      ...DividerSx,

      backgroundColor: "light.main",
      opacity: "0.15",
    },

    "&::after": {
      ...DividerSx,

      backgroundColor: "dark.600",
      opacity: "0.25",
    },
  };

  const MenuItemContentSx = {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    padding: "22px 0px 22px 32px",
  };

  const TextSx = {
    fontFamily: "NotoSanJP",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "26px",
  };

  const menuItems: IMenuItemData[] = [
    {
      label: "体重グラフ",
      value: "1",
      url: "/my-record",
    },
    {
      label: "体重グラフ",
      value: "2",
      url: "/top",
    },
    {
      label: "目標",
      value: "3",
      url: "/target",
    },
    {
      label: "選択中のコース",
      value: "4",
      url: "/selected-course",
    },
    {
      label: "コラム一覧",
      value: "5",
      url: "/column",
    },
    {
      label: "設定",
      value: "6",
      url: "/setting",
    },
  ];

  return (
    <Stack>
      <Button sx={IconButtonSx} aria-describedby={id} onClick={handleClick}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList sx={MenuListSx}>
          {menuItems.map((menuItem, index) => {
            return (
              <MenuItem
                key={index}
                selected={activeIndex === index}
                sx={MenuItemSx}
                onClick={() => {
                  setActiveIndex(index);
                  handleClose();
                }}
              >
                <Stack sx={MenuItemContentSx}>
                  <Link to={menuItem.url}>
                    <Box component="span" sx={TextSx}>
                      {menuItem.label}
                    </Box>
                  </Link>
                </Stack>
              </MenuItem>
            );
          })}
        </MenuList>
      </Popover>
    </Stack>
  );
};
