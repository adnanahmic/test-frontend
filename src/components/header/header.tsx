import React from "react";
import "./styles.scss";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <p>{title}</p>
    </header>
  );
};

export default Header;
