import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taebin Kim · 김태빈",
  description:
    "ML Systems Engineer · Full-Stack Developer · École 42. Systems from first principles.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

const langInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("lang");
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    var lang = stored === "en" || stored === "ko" ? stored : (/^ko/i.test(nav) ? "ko" : "en");
    document.documentElement.lang = lang;
  } catch (e) {}
})();
`;

/* Compact project cards hide their evidence behind <details>. A closed one is
   collapsed by the user agent, which no print rule can reach — so open them
   all for the duration of the print and put them back afterwards. Runs for
   Ctrl+P as much as for the header's own button. */
const printInitScript = `
(function () {
  var opened = [];
  addEventListener("beforeprint", function () {
    opened = Array.prototype.slice.call(document.querySelectorAll("details:not([open])"));
    opened.forEach(function (d) { d.open = true; });
  });
  addEventListener("afterprint", function () {
    opened.forEach(function (d) { d.open = false; });
    opened = [];
  });
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: langInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: printInitScript }} />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
