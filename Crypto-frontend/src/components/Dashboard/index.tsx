import React, {useState} from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import {ACg,NavBtn, LabelBg, ImgCg,VirgocxDiv,ServicesH1,LineHR,DashboardBody, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, CoverContainer,DashFavourite, DashboardSpan,   DashboardOrder} from './DashboardElements';
import { Button } from '../ButtonElements';
import Icon1 from '../../image/USDT.jpg';
import Icon2 from '../../image/BTC.jpg';
import Icon3 from '../../image/ETH.jpg';
import { FiArrowRight } from "react-icons/fi";
import CIcon1 from '../../image/CIcon/CIcon1.png';
import CIcon2 from '../../image/CIcon/CIcon2.png';
import CIcon3 from '../../image/CIcon/CIcon3.png';
import CIcon4 from '../../image/CIcon/CIcon4.png';
import CIcon5 from '../../image/CIcon/CIcon5.png';
import CIcon6 from '../../image/CIcon/CIcon6.png';
import CIcon7 from '../../image/CIcon/CIcon7.png';
import CIcon8 from '../../image/CIcon/CIcon8.png';

import {useTranslation} from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <CoverContainer>
      <ServicesWrapper>
        <ServicesCard>  
          <ServicesIcon src={Icon1} />
          <ServicesH2>{t("USDT Recharge")}</ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>{t("BTC Recharge")}</ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>{t("ETH Recharge")}</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
      <LineHR/>
      <DashboardBody>  
        <VirgocxDiv>
          <ImgCg src={CIcon5}/>
          <LabelBg>{t("Virgocx Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://virgocx.com/">
            <FiArrowRight/>
            </ACg>
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon1}/>
          <LabelBg>{t("Coinbase Official Deposit Channel")}</LabelBg>
          <NavBtn>
            <ACg href="http://coinbase.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>

        <VirgocxDiv>
          <ImgCg src={CIcon2}/>
          <LabelBg>{t("Crypto Official Deposit Channel")}</LabelBg>
          <NavBtn > 
            <ACg href="http://crypto.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon6}/>
          <LabelBg>{t("Kraken Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://kraken.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon3}/>
          <LabelBg>{t("Trustwallet Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://trustwallet.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon7}/>
          <LabelBg>{t("Ndax Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://ndax.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon4}/>
          <LabelBg>{t("Coinsmart Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://coinsmart.com/"><FiArrowRight/></ACg>   
          </NavBtn>
        </VirgocxDiv>
        <VirgocxDiv>
          <ImgCg src={CIcon8}/>
          <LabelBg>{t("Netcoins Official Deposit Channel")}</LabelBg>
          <NavBtn >
            <ACg href="http://netcoin.com/"><FiArrowRight/></ACg>
          </NavBtn>
        </VirgocxDiv>
      </DashboardBody>
    </CoverContainer>
  );
};

export default Dashboard;
