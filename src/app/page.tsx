// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { CalendarDemo } from "@/components/CalenderDemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <CalendarDemo />
    </div>
  );
}
