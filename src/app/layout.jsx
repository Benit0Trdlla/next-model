import { Inter } from "next/font/google";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/InstallBootstrap";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Genius",
  description: "Proyecto Genius, developed by developers from Caribe Enseña",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  // themeColor: "#f69435",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/ImgLogoPestaña.png" />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <InstallBootstrap />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
