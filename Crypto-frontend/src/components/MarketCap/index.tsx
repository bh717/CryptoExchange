import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Moeda from "./Moeda";
import {useTranslation} from 'react-i18next';

import {ServicesContainer, ServicesH1,TitleDiv,Marketp} from './marketCapElements';
const MarketCap = () => {
  const [moedas, setMoedas] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const { t } = useTranslation(['marketcap']);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setMoedas(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = ({e}:any) => {
    setSearch(e.target.value);
  };

  const filteredMoedas = moedas.filter((moeda) =>
    moeda.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ServicesContainer>
      <ServicesH1>{t("Market Trend")}</ServicesH1>
      <TitleDiv>
          <Marketp>{t("Markets")}</Marketp>
          <Marketp>{t("Last Price")}</Marketp>
          <Marketp>{t("24h Change")}</Marketp>
      </TitleDiv>
      <div style={{alignItems:'center'}}>
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

export default MarketCap;
