import React from "react";
import "chart.js/auto";
import { Metadata } from "next";
import ReportForm from "./ReportForm";

export const metadata: Metadata = {
  title: "CMReport",
  description: "Report page",
};

export default function ReportPage() {
  return <ReportForm />;
}