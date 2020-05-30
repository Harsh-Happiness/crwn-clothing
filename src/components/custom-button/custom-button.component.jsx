import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignedIn,
  isInverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isInverted ? "isInverted" : " "}
                  ${isGoogleSignedIn ? "google-sign-in" : " "} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
