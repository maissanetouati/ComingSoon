import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Fournisseur haut de gamme" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{`${title} | LUXEDEFRANCE.FR`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Luxedefrance.fr"
      />
      <meta property="og:title" content={`${title} | Votre fournisseur haut de gamme`} />
      <meta
        property="og:description"
        content="Slioth - is a One Page Saas Lading Page build with Tailwind CSS and NextJs created by themeptation"
      />
      <meta property="og:url" content="https://slioth.themepttation.net/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
