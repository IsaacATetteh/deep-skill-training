"use client";

import React from "react";
import { FlipWords } from "./ui/flip-words";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import PulsatingButton from "@/components/ui/pulsating-button";

const Cal = () => {
  const words = ["skill?", "technique?", "intelligence?", "positioning?"];
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
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "enqui" });
      cal("ui", {
        styles: { branding: { brandColor: "#38b6ff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div
      id="cal-section"
      className="h-[25rem] flex flex-col items-center px-4 bg-gray-50 dark:bg-background"
    >
      <div className="text-[28px] md:text-4xl text-center mx-auto font-semibold text-neutral-600 dark:text-neutral-400 mb-14 ">
        Ready to improve your <br />
        <FlipWords words={words} />
      </div>
      <div className="flex flex-col gap-7 md:gap-10 items-center justify-center">
        <PulsatingButton
          className=""
          data-cal-namespace="call"
          data-cal-link="deepskilltraining/call"
          data-cal-config='{"layout":"month_view"}'
        >
          <p className="font-bold text-lg">Book A Free Consultation Call</p>
        </PulsatingButton>
        <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">
          Or
        </h3>
        <PulsatingButton
          data-cal-namespace="enqui"
          data-cal-link="forms/116951f1-00d2-446d-8950-27ba6d975235"
          data-cal-config='{"layout":"month_view"}'
          className=""
        >
          <p className="font-bold text-lg md:text-xl">Send An Enquiry</p>
        </PulsatingButton>
      </div>
    </div>
  );
};

export default Cal;
