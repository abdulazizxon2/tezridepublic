import React from "react";
import OverviewAbout from "@/src/container/form/OverviewAbout";
import OverwievForm from "@/src/container/form/OverwievForm";
import OverviewHeader from "@/src/container/form/OverviewHeader";
import OverviewChance from "@/src/container/form/OverviewChance";

export default function () {
  return (
    <div>
      <OverviewHeader />
      <OverviewAbout />
      <OverviewChance />
      <OverwievForm />
    </div>
  );
}
