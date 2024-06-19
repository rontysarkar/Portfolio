import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Ronty Sarkar",
	authors: {
		name: "Ronty Sarkar",
	},

	description:
		"Based in Bangladesh, I'am a Front End developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Ronty Sarkar",
		description:
			"Based in Bangladesh, I'am a Front End developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "Ronty Sarkar",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "Ronty Sarkar", "protfolio"],
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
