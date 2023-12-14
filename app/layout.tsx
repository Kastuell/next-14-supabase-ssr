import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Инвентум',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		
		<html lang="en">
			<body className={inter.className}>
				<div className='grid min-h-screen '>
					<TheHeader />
					<div className='container'>
						{children}
					</div>
					<TheFooter />
				</div>
			</body>
		</html>


	);
}

{/* <html lang="en">
	<body className={inter.className}>
		<div className="flex flex-col">
			<Link href="/auth-server-action">Auth Server Action</Link>
			<Link href="/">home</Link>
			<Link href="/todo">Learn CRUD</Link>
		</div>
		{children} <Toaster />
	</body>
</html> */}
