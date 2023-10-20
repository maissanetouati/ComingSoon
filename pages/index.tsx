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
    className="w-48 md:w-48"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10 text-center space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-black">EN MAINTENANCE</h1>
        <h3 className="font-bold font-sans text-black text-xl uppercase tracking-wider">
          Nous revenons le 11 Novembre
        </h3>

        <p className="text-md md:text-lg font-sans tracking-wide font-light mb-0">
              Soyez les premiers avertis de notre retour : 
          </p>
        <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
        <input
          type="text"
          placeholder="Entrez votre email"
          className="w-full text-sm font-light text-gray-900 placeholder-gray-500 py-3 pl-3 pr-24 rounded-xl"
        />
      <button className="absolute top-1 right-1 bottom-1 px-4 lg:px-8 text-md font-medium bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
      <img src="images/bell4.png" alt="Bell Icon" className="w-5 h-5"/>
      </button>
      </form>
        <p className="text-md md:text-md font-sans lg:text-md tracking-wide mx-4 md:mx-10 lg:max-w-4xl lg:mx-auto font-light">
        LUXEDEFRANCE.FR est actuellement en maintenance pour vous offrir une expérience améliorée.  
        Merci pour votre patience et à très bientôt sur notre nouveau site.
        </p>
        <p className="text-lg md:text-xl font-sans tracking-wide mx-4 md:mx-10 lg:max-w-xl lg:mx-auto font-bold">Veuillez noter que toutes les commandes déjà passées sont toujours traitées et expédiées sans délais. </p>


        

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <p className="text-md md:text-lg font-sans tracking-wide font-light mb-0">
              Nous contacter :
          </p>
          
      </div>

      </div>
      

    </div>

    <div className="bottom-5">
  <ul className="flex space-x-3">
    <li>
        <Link href="https://wa.me/+33603978674">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
            </span>
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
    <li>
      <Link 
        href="https://t.snapchat.com/dZ0hRisk"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg"
      >
        <img src="/images/snap.png" alt="Snapchat" className="w-8  h-8" />
      </Link>
    </li>
    
  </ul>
</div>
  </Layout>
);

export default IndexPage;
