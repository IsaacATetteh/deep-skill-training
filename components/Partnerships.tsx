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
        <h2 className="text-3xl font-bold mb-8 text-center">Partnerships</h2>
        <ul className="flex flex-col md:flex-row justify-between items-center w-full">
          <li className="mb-4 md:mb-0">
            <a href="https://www.gripworx.co.uk/">
              <img
                src={isDarkMode ? "GRIPWORX_Dark" : "GRIPWORX.PNG"}
                alt="GRIPWORX_Dark"
                className="md:scale-75 scale-75"
              />
            </a>
          </li>
          <li className="mb-4 md:mb-0">
            <a href="https://oliversports.ai/oliver-pro">
              <img
                src={
                  isDarkMode ? "OLIVER_SPORTS_Light.png" : "OLIVERSPORTS.png"
                }
                alt="OLIVER SPORTS"
                className="md:scale-75 scale-50"
              />
            </a>
          </li>
          <li className="mb-4 md:mb-0">
            <a href="https://vx-3.com/?tw_source=google&tw_adid=&tw_campaign=20152902661&gad_source=1&gbraid=0AAAAABdkOVCbxAVKWtdLODhk2GHQG-FUo&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnAnfPt5BtshgBrQhaOIb98V5rlRUJlK8I2e80LmYML3cUZHEeMABzgaAq7YEALw_wcB">
              <img
                src={isDarkMode ? "VX3_Light.png" : "VX3.png"}
                alt="VX3"
                className="md:scale-75 scale-50"
              />
            </a>
          </li>
        </ul>
        <p className="text-xs text-gray-500 text-center">
          &copy; 2024. Deep Skill Training All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
