import React, { PropsWithChildren } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function loading() {
  function Box({ children }: PropsWithChildren<unknown>) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          display: "block",
          lineHeight: 2,
          padding: "1rem",
          marginBottom: "0.5rem",
          width: 100,
        }}
      >
        {children}
      </div>
    );
  }
}

export default loading;
