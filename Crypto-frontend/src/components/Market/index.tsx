import { useState, useEffect } from 'react';
import { Table} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Styles} from './marketElement';
import axios from "axios";
import Moeda from "./Moeda";
import {useTranslation} from 'react-i18next';
import './styles.css';
import {ServicesContainer, Marketp, Marketp1 , Marketp2,TitleDiv} from './marketElement';
const MarketPage = () =>{
  const [moedas, setMoedas] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const { t } = useTranslation(['marketcap']);
  useEffect(() => {
    console.log("123213");
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
    .then((res) => {
      setMoedas(res.data);
      console.log(res.data);
    })
    .catch((error) => console.log(error));

    // const interval = setInterval(() =>{
    //   console.log("12");
    //   axios
    //     .get(
    //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    //     )
    //     .then((res) => {
    //       setMoedas(res.data);
    //       console.log(res.data);
    //     })
    //     .catch((error) => console.log(error));
    //   }, 60000);
  }, []);

  // const simulation = () => {
  //   if (!running) {
  //     console.log('hit');
  //     return

  //   } else {
  //     // console.log(grid);
  //     console.log('hey');
  //     setTimeout(simulation, 1000)
  //   }
  // }
  const handleChange = ({e}:any) => {
    setSearch(e.target.value);
  };

  const filteredMoedas = moedas.filter((moeda) =>
    moeda.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ServicesContainer>
      <TitleDiv>
          <Marketp>{t("Markets")}</Marketp>
          <Marketp1>{t("Last Price")}</Marketp1>
          <Marketp2>{t("24h Change")}</Marketp2>
      </TitleDiv>
      <div className="moeda-app">
        {filteredMoedas.map((moeda) => {
          return (
              <Moeda
                key={moeda.id}
                name={moeda.name}
                price={moeda.current_price}
                symbol={moeda.symbol}
                marketcap={moeda.total_volume}
                volume={moeda.market_cap}
                image={moeda.image}
                priceChange={moeda.price_change_percentage_24h}
              />
          );
        })}
      </div>
    </ServicesContainer>
  );

};

export default MarketPage;