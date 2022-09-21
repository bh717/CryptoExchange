import React from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper,NavBtnLink, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import {useTranslation} from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(['footer']);
  return (
    <FooterContainer>
      <FooterWrapper>
      <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t("Start Trading")}</FooterLinkTitle>
              <NavBtnLink to="/login">{t("Get started now")}</NavBtnLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>{t("Community")}</FooterLinkTitle>
              <FooterLink to='/'>{t("Facebook")}</FooterLink>
              <FooterLink to='/'>{t("Twitter")}</FooterLink>
              <FooterLink to='/'>{t("Telegram")}</FooterLink>
              <FooterLink to='/'>{t("Discord")}</FooterLink>
              <FooterLink to='/'>{t("Rebbit")}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t("Support")}</FooterLinkTitle>
              <FooterLink to='/'>{t("Announcements")}</FooterLink>
              <FooterLink to='/'>{t("Super Center")}</FooterLink>
              <FooterLink to='/'>{t("Contact Us")}</FooterLink>
              <FooterLink to='/'>{t("Exchange Application")}</FooterLink>
              <FooterLink to='/'>{t("Referrals")}</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>{t("Trade")}</FooterLinkTitle>
              <FooterLink to='/'>{t("Deposits")}</FooterLink>
              <FooterLink to='/'>{t("Assets")}</FooterLink>
              <FooterLink to='/'>{t("Stake & Earn")}</FooterLink>
              <FooterLink to='/'>{t("Coin Launch")}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <WebsiteRights>BXO Pro © {new Date().getFullYear()} {t("All rights reserved")}.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
