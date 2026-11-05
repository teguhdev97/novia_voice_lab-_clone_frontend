import "~/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Novia Voice Lab — Frontend Demo",
  description: "Preview of the Novia Voice Lab audio studio. No login or backend required.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Toaster />{children}</body></html>;
}
