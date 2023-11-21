"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents, Plans. Unified. Welcome to Jotion
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where teams organize their work
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};