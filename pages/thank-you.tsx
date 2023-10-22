/* eslint-disable jsx-a11y/alt-text */
import Layout from "../components/Layout";
import Link from "next/link";

const IndexPage = () => (
  <Layout title="Luxedefrance.fr - Site en maintenance">
    {/* <img
      src="/images/xera5.png"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    /> */}
    {/* {<img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />} */}
    <img src="/images/logo-marbre.svg" className="w-48 md:w-48" />
    <div className="relative z-10 py-6 space-y-16 text-gray-900 flex items-center flex-col">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold font-sans text-black">
          Merci ! Votre adresse email a bien été enregistrée.
        </h1>
      </div>
      <Link href="/">
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
          Retourner sur le site
        </button>
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
