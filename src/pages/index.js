import { getCookie } from "cookies-next";
import { verifica } from "../../services/user";
import Header from "@/components/header/Header";
import BeerList from "@/components/beerlist/Beerlist";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BeerList />
      <Footer />
    </div>
  );
}
export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("invalid token");
    // console.log(token)
    verifica(token);
    return { props: {} };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },

      props: {},
    };
  }
};
