import type { Metadata, NextPage } from "next";
import '../index.css';
import LayoutMarketPlaceOrderView from "./layout";
export const metadata: Metadata = {
  title: "Stockeado - Orden",
  description: "Mira tu orden en linea con Stockeado",
  // other metadata
};
const Page: NextPage = () => {
    return <>
        <LayoutMarketPlaceOrderView />      
  </>
}
export default Page;