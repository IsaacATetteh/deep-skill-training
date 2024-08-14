"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "call" });
      cal("ui", {
        styles: { branding: { brandColor: "#38b6ff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return <button>Click me</button>;
}
