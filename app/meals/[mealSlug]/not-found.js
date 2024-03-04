'use client';
import { usePathname } from "next/navigation";

export default function MealNotFound() {
  const path = usePathname();
  return (
    <>
    <main className="not-found">
      <h1>Meal not found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
      <p>{path}</p>
    </main>
    </>
  );
}