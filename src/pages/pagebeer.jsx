import { getCookie } from "cookies-next";
import { verifica } from "../../services/user";
import BeerList from "../components/beerlist/Beerlist";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
export default function pagebeer() {
  return (
    <div>
      <Header title="Página de Bebidas" />
      <BeerList />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("invalid token");
    verifica(token);

    return { props: {} };
  } catch (err) {
    // return { props: {} };
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },

      props: {},
    };
  }
};
