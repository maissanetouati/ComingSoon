import Link from "next/link";
import Layout from "../components/Layout";

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
    <img src="images/logo-marbre.svg"
    className="w-48 md:w-48 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10 text-center space-y-6 md:space-y-8">
        <h3 className="font-light font-sans text-black text-xl uppercase tracking-wider">
          Nous revenons bientôt
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-black">EN MAINTENANCE</h1>
        <p className="text-lg md:text-xl font-sans lg:text-2xl tracking-wide mx-4 md:mx-10 lg:max-w-4xl lg:mx-auto font-light">
        LUXEDEFRANCE.FR est actuellement en maintenance pour vous offrir une expérience améliorée.  
        Merci pour votre patience et à très bientôt sur notre nouveau site.
        </p>
        <p className="text-lg md:text-xl font-sans tracking-wide mx-4 md:mx-10 lg:max-w-xl lg:mx-auto font-bold">Veuillez noter que toutes vos commandes sont toujours traitées et expédiées sans délai. </p>
        <p className="text-md md:text-lg font-sans tracking-wide mx-4 md:mx-10 lg:max-w-xl lg:mx-auto font-light">N&apos;hésitez pas à nous contacter via Email ou Whatsapp.</p>
      </div>
      {/* <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
        <input
          type="text"
          placeholder="hi@themeptation.net"
          className="w-full text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
        />
        <button className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
          Notify me
        </button>
      </form> */}
    </div>
    <div className="bottom-5">
  <ul className="flex space-x-3">
    <li>
      <Link 
        href="https://wa.me/+33603978674"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8  h-8" />
      </Link>
    </li>
    <li>
      <Link 
        href="mailto:luxedefrance1@gmail.com"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg"
      >
        <img src="/images/mail.png" alt="Email us" className="w-8 h-8" />
      </Link>
    </li>
  </ul>
</div>
  </Layout>
);

export default IndexPage;
