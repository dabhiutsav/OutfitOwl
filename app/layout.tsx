import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ProfileProvider } from "../context/profileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileProvider>
      <html lang="en">
        <body className="bg-zinc-200">
          <div className="container">
            {/* Navbar */}
            <div className="h-16">
              <nav className="fixed inset-x-0 bg-white shadow dark:bg-gray-950">
                <div className="container">
                  <div className="flex h-16 items-center">
                    <Link
                      className="mr-auto flex items-center text-2xl font-semibold"
                      href="/"
                    >
                      <Image
                        src="/outfitOwlLogo.png"
                        alt="Outfit Owl Logo"
                        width={50}
                        height={50}
                      />
                      <span>Outfit Owl</span>
                    </Link>
                    <nav className="ml-auto flex items-center space-x-6">
                      <Link
                        className="font-medium text-xl border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                        href="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="font-medium text-xl border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                        href="/preferences"
                      >
                        Preferences
                      </Link>
                      <Link
                        className="font-medium text-xl border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                        href="/wardrobe"
                      >
                        Wardrobe
                      </Link>
                    </nav>
                  </div>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <main className="">{children}</main>
          </div>
        </body>
      </html>
    </ProfileProvider>
  );
}
