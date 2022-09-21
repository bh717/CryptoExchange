  import React from 'react';
import Icon1 from '../../image/pic01.webp';
import Icon2 from '../../image/pic02.webp';
import Icon3 from '../../image/pic03.webp';
import Icon4 from '../../image/pic04.webp';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './serviceElements';
import {useTranslation} from 'react-i18next';

const Services = () => {
  const { t } = useTranslation(['services']);
  return (
    <ServicesContainer id='services'>
      <ServicesH1>{t("Digital assets")}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>{t("Easy to Use")}</ServicesH2>
          <ServicesP>{t("A Wide range of order systems and trading tools for risk")}</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>{t("Top Performance")}</ServicesH2>
          <ServicesP>{t("Using LSEG Technology, BXO Pro is able to match orders with low latency")}</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>{t("Deep Liquidity")}</ServicesH2>
          <ServicesP>{t("Trade futures with leverage with maximum efficiency and minimal slippage")}</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>{t("Trade Anywhere")}</ServicesH2>
          <ServicesP>{t("BXO Pro is abailable on website, mobile app, API and FIX")}</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
