// import React from 'react'
interface ParentCompProps {
  childComp?: React.ReactNode;
  childComp2?: React.ReactNode;
  isBackground: boolean;
}

const HeaderLayout: React.FC<ParentCompProps> = (props) => {
  const { childComp, childComp2, isBackground } = props;
  return <div className={!isBackground ? "header" : "header banner-background"}>{childComp}{childComp2}</div>;
};

export default HeaderLayout;
