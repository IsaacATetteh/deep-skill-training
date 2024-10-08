"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Partnerships = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Partnerships</h2>
        <div className="flex flex-col items-center md:flex-row ">
          <div className="md:w-1/3">
            <a
              href="https://www.gripworx.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isDarkMode ? "GRIPWORX.avif" : "GRIPWORX_Dark.avif"}
                alt="GRIPWORX"
                className="md:scale-50 scale-75"
                loading="lazy"
              />
            </a>
          </div>
          <div className="md:w-1/3">
            <a
              href="https://oliversports.ai/oliver-pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  isDarkMode
                    ? "OLIVERSPORTS.avif"
                    : "OLIVER SPORTS Light Mode.avif"
                }
                alt="OLIVER SPORTS"
                className="md:scale-50 scale-50"
                loading="lazy"
              />
            </a>
          </div>
          <div className="md:w-1/3">
            <a
              href="https://vx-3.com/?tw_source=google&tw_adid=&tw_campaign=20152902661&gad_source=1&gbraid=0AAAAABdkOVCbxAVKWtdLODhk2GHQG-FUo&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnAnfPt5BtshgBrQhaOIb98V5rlRUJlK8I2e80LmYML3cUZHEeMABzgaAq7YEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isDarkMode ? "VX3.avif" : "VX3_Dark.avif"}
                alt="VX3"
                className="md:scale-50 scale-50"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">
          &copy; 2024. Deep Skill Training All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
