import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NewNavbar from "./(home)/component/NewNavbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
	metadataBase: new URL("https://ronty-sarkar.vercel.app/"),

	title: "Ronty Sarkar",
	authors: {
		name: "Ronty Sarkar",
	},

	description:
		"Hi, I'm Ronty Sarkar, a passionate Full Stack Developer dedicated to building modern, responsive, and user-friendly web applications. I enjoy turning ideas into scalable digital products using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, and Tailwind CSS.",
	openGraph: {
		title: "Ronty Sarkar",
		description:
			"Hi, I'm Ronty Sarkar, a passionate Full Stack Developer dedicated to building modern, responsive, and user-friendly web applications. I enjoy turning ideas into scalable digital products using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, and Tailwind CSS.",
		url: "https://ronty-sarkar.vercel.app/",
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
			<NewNavbar className="hidden lg:flex"/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
