import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from "next/script";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

eexport const metadata: Metadata = {
  title: {
    default: "Prepare for Amazon Interviews",
    template: "%s | Always Day One",
  },
  description: "Prepare for Amazon Interviews with a Former Amazon Manager
Ex-Amazon manager. 200 interviews led. Now on your side. 1:1 Preparation, Interview Simulation, STAR Method, Direct Feedback",
  icons: {
    icon: "Always_Day_1_favicon.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="font-sans bg-background text-foreground">
        {children}

        {/* Cal.com embed global (element-click + floating button) */}
        <Script id="cal-embed" strategy="afterInteractive">
          {`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            // Namespace "introduction" (même que ton bouton CTA)
            Cal("init", "introduction", { origin: "https://app.cal.com" });

            // Bouton flottant (couleur et texte configurables)
            Cal.ns.introduction("floatingButton", {
              calLink: "tomlouvieaux/introduction",
              config: { layout: "month_view" },
              buttonText:"Book my call",
              buttonColor: "#FF6600",
              buttonTextColor: "#ffffff"
            });

            // UI par défaut (mois)
            Cal.ns.introduction("ui", { hideEventTypeDetails: false, layout: "month_view" });
          `}
        </Script>
      </body>
    </html>
  );
}
