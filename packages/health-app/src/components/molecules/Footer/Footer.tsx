import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "ui-components";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const FooterSx = {
    width: "100%",
    height: "128px",
    minHeight: "128px",
    backgroundColor: "dark.500",

    paddingLeft: "160px",
    alignItems: "center",
    gap: "45px",

    "& a": {
      fontFamily: "NotosanJP",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "11px",
      letterSpacing: "0.033px",
      lineHeight: "16px",
      color: "light.main",
      textDecoration: "none",
    },

    "& a:hover, & a.active": {
      color: "primary.main",
    },
  };

  return (
    <Stack sx={FooterSx} flexDirection="row">
      <Link to={"/"}>会員登録</Link>
      <Link to={"/"}>運営会社</Link>
      <Link to={"/"}>利用規約</Link>
      <Link to={"/"}>個人情報の取扱について</Link>
      <Link to={"/"}>特定商取引法に基づく表記</Link>
      <Link to={"/"}>お問い合わせ</Link>
    </Stack>
  );
};
