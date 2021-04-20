import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { Button, ProductCard, CuelinksProductCard, Text, ThemeButton } from "../../../../components";
import { COLORS } from "../../../../theme/mainTheme";
import axios from "axios";
import { useHistory } from "react-router-dom";
import _ from 'lodash';

const downArrow = () => {
  return (
    <svg
      style={{ color: COLORS.primary }}
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
      />
    </svg>
  );
};

const Coupons = () => {
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);
  const [couponsData, setCouponsData] = React.useState([]);
  const [couponsHeadings, setCouponsHeadings] = React.useState([]);
  const [hardcodedCouponsData, setHardcodedCouponsData] = React.useState([
    {
      "productName": "2 Sunglasses Rs.640 + Rs.50 FreeCharge Cashback",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2567/medium/download.png?1463142913",
      "companyName": "Coolwinks",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.coolwinks.com%2Fsunglasses%2F%3Futm_source%3Domg%26utm_medium%3Dcps%26utm_campaign%3D20210406_sunglasses"
    },
    {
      "productName": "20% Off on Contact Lenses",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2567/medium/download.png?1463142913",
      "companyName": "Coolwinks",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.coolwinks.com%2Fcontact-lenses%2F%3Futm_source%3Domg%26utm_medium%3Dcps%26utm_campaign%3D20210406_cl20"
    },
    {
      "productName": "Amazonliss After Care Anti Frizz Shampoo and Conditioner Set 8.45 fl.oz Just $39.99",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4266/medium/New_Project_%2876%29_%281%29.png?1608101129",
      "companyName": "Nutree Cosmetics",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fnutreecosmetics.com%2Fproducts%2Famazonliss-home-care-kit-anti-frizz-shampoo-and-conditioner-8-45-fl-oz-250-ml"
    },
    {
      "productName": "Amazonliss Keratin Smoothing Treatment Hair Straightening Set 8.45 fl.oz / 250 ml Just $99.00",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4266/medium/New_Project_%2876%29_%281%29.png?1608101129",
      "companyName": "Nutree Cosmetics",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fnutreecosmetics.com%2Fproducts%2Famazonliss-professional-treatment-kit-3-steps-8-45-fl-oz-250-ml-good-for-5-services"
    },
    {
      "productName": "Base Of Glory Pore Minimizing Primer Just Rs.799",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3666/medium/Sugar.png?1531909049",
      "companyName": "Sugar Cosmetics",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fin.sugarcosmetics.com%2Fcollections%2Ffeatured-collection%2Fproducts%2Fbase-of-glory-pore-minimizing-primer"
    },
    {
      "productName": "Buy Auto Accessory starting from Rs.355",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DAuto+Accessory%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Auto Accessory starting from Rs.474",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DAuto+Accessory%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Backpack Under Rs.599",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fb%2Fref%3Dluggage_gw_feb20%3Fnode%3D20472969031%26pf_rd_r%3D02T1NWFAB8J0X9QHJJZ9%26pf_rd_p%3D6352ce23-c872-477c-9741-fca5508835ea%26pd_rd_r%3D2335a1be-49c6-42a8-845a-5a07dd2e5c60%26pd_rd_w%3De0KtJ%26pd_rd_wg%3Dh1N9i%26ref_%3Dpd_gw_unk"
    },
    {
      "productName": "Buy Footwear Under Rs.599",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fb%2Fref%3Dssh_gw_feb20%3Fie%3DUTF8%26node%3D14311960031%26pf_rd_r%3D02T1NWFAB8J0X9QHJJZ9%26pf_rd_p%3D6352ce23-c872-477c-9741-fca5508835ea%26pd_rd_r%3D2335a1be-49c6-42a8-845a-5a07dd2e5c60%26pd_rd_w%3De0KtJ%26pd_rd_wg%3Dh1N9i%26ref_%3Dpd_gw_unk"
    },
    {
      "productName": "Buy Grocery starting from Rs.429",
      "category": "Categories : Food & Grocery",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DGrocery%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Grocery starting from Rs.429",
      "category": "Categories : Food & Grocery",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DPersonal+Care+Appliances%26ref%3Dnb_sb_noss_2"
    },
    {
      "productName": "Buy Personal Care Appliances starting from Rs.289",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DPersonal+Care%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Personal Care Products starting from Rs.559",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DPet+Supplies%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Pet Supplies starting from Rs.540",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fb%2Fref%3Ddvm_crs_gat_dk_hero5_thematichero%3Fnode%3D22937061031%26pf_rd_r%3D5CD56P41XCAGQYM8K5MZ%26pf_rd_p%3D78099605-5a57-462d-b3de-d1074a4d051f"
    },
    {
      "productName": "Buy Pocket Friendly Books Under Rs.199",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fb%2Fref%3Ddvm_crs_gat_dk_hero5_thematichero%3Fnode%3D22937061031%26pf_rd_r%3DGT1FV1K0C0N4PV0NBQVD%26pf_rd_p%3D78099605-5a57-462d-b3de-d1074a4d051f"
    },
    {
      "productName": "Buy Pocket Friendly Books Under Rs.199",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1/medium/Flipkart_logo.jpg?1433139772",
      "companyName": "Flipkart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.flipkart.com%2Fsearch%3Fq%3DTools+%26+Hardware%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Don%26as%3Doff"
    },
    {
      "productName": "Buy Tools & Hardware starting from Rs.354",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/201/medium/Croma_Retail.png?1493190022",
      "companyName": "Croma Retail",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.croma.com%2Flp-cool-life%3Futm_source%3Domg%26utm_medium%3Daffiliates%26utm_campaign%3D5hon15kcoollife"
    },
    {
      "productName": "Buy Women Kurtas Under Rs.599",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/101/medium/myntra.jpg?1613124982",
      "companyName": "Myntra",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.myntra.com%2Fwomens-western-wear%3FplaEnabled%3Dfalse%26rf%3DDiscount+Range%3A10.0_100.0_10.0+TO+100.0"
    },
    {
      "productName": "Computer Glasses Starting Rs.640 + Rs.50 FreeCharge Cashback",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2567/medium/download.png?1463142913",
      "companyName": "Coolwinks",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.coolwinks.com%2Fcollections%2Fcomputer-glasses%2F%3Futm_source%3Domg%26utm_medium%3Dcps%26utm_campaign%3D20210406_compglasses"
    },
    {
      "productName": "Computer Glasses Starting Rs.640 + Rs.50 FreeCharge Cashback",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4359/medium/New_Project_-_2021-04-06T151341.032_%281%29.png?1617703208",
      "companyName": "Damensch",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.damensch.com%2Fmen%2Funderwear%2Fboxer-briefs%3Froot%3Dmenu"
    },
    {
      "productName": "DEO-SOFT Boxer Briefs Just Rs.540",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3522/medium/pharmeasy.png?1520335659",
      "companyName": "PharmEasy - Healthcare",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fpharmeasy.in"
    },
    {
      "productName": "Flat 20% off on Medicines on New user",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4253/medium/New_Project_%2867%29_%281%29.png?1605867377",
      "companyName": "Vmart",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.vmartretail.com%2Fss-21-flat-30.html%3Fsort_by%3Dbestsellers%26sort_order%3Ddesc"
    },
    {
      "productName": "Flat 40% off on New Style",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/101/medium/myntra.jpg?1613124982",
      "companyName": "Myntra",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.myntra.com%2Ffusion-wear%3Ff%3DBrand%3AAnouk%2CHERE%26NOW%2CHouse+of+Pataudi%2CModa+Rapido%2CSangria%2CTaavi%26plaEnabled%3Dfalse%26rf%3DDiscount+Range%3A50.0_100.0_50.0+TO+100.0"
    },
    {
      "productName": "Flat 50% Off Sitewide",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2567/medium/download.png?1463142913",
      "companyName": "Coolwinks",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.coolwinks.com%2Foffers%2Fextra-50-off%2F%3Futm_source%3Domg%26utm_medium%3Dcps%26utm_campaign%3D20210406_cool50"
    },
    {
      "productName": "Flat 50% off Store",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3570/medium/Jack___Jones.png?1579161240",
      "companyName": "Jack & Jones",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.jackjones.in%2Fupto-50-jj"
    },
    {
      "productName": "Flat 50% off Store",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1653/medium/Pizzahut_%281%29.png?1498201337",
      "companyName": "Pizza Hut",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.pizzahut.co.in%2F"
    },
    {
      "productName": "Get Flat INR 125 OFF on minimum order of INR 500 at Hut Premier League",
      "category": "Categories : Food & Grocery",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/1653/medium/Pizzahut_%281%29.png?1498201337",
      "companyName": "Pizza Hut",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.pizzahut.co.in%2F"
    },
    {
      "productName": "Get Upto 15-70% OFF on Work From Home Essentials",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2536/medium/Shop_online_for_Industrial___Home_Products__Tools__Electricals__Safety_Equipment___more.___Moglix.png?1461231343",
      "companyName": "Moglix",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.moglix.com%2Fstore%2Foffice-stationery-supplies"
    },
    {
      "productName": "Get Upto 40% OFF on Refrigerators",
      "category": "Categories : Electronics",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/201/medium/Croma_Retail.png?1493190022",
      "companyName": "Croma Retail",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.croma.com%2Flp-cool-life%3Futm_source%3Domg%26utm_medium%3Daffiliates%26utm_campaign%3D5hon15kcoollife"
    },
    {
      "productName": "Get flat 15% off + Additional INR 150 off on prescribed Medicines for New User",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3522/medium/pharmeasy.png?1520335659",
      "companyName": "PharmEasy - Healthcare",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fpharmeasy.in"
    },
    {
      "productName": "Get upto 40%-70% off on ROADSTER",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/101/medium/myntra.jpg?1613124982",
      "companyName": "Myntra",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.myntra.com%2Froadster%3Ff%3DCategories%3ABackpacks%2CBelts%2CBoxers%2CBra%2CBriefs%2CCaps%2CCasual+Shoes%2CClutches%2CDresses%2CDungarees%2CFlats%2CFlip+Flops%2CFormal+Shoes%2CGloves%2CHandbags%2CHeels%2CJeans%2CJeggings%2CJumpsuit%2CLounge+Shorts%2COutdoor+Masks%2CSandals%2CShirts%2CShorts%2CShrug%2CSkirts%2CSocks%2CSports+Sandals%2CSunglasses%2CTops%2CTrousers%2CTrunk%2CTshirts%2CWallets%2CWatches%26plaEnabled%3Dfalse%26rf%3DDiscount+Range%3A40.0_100.0_40.0+TO+100.0"
    },
    {
      "productName": "Get upto 40%-70% off on Sarees",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/101/medium/myntra.jpg?1613124982",
      "companyName": "Myntra",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.myntra.com%2Fclothing%3Ff%3DCategories%3ASarees%26plaEnabled%3Dfalse%26rf%3DDiscount+Range%3A40.0_100.0_40.0+TO+100.0"
    },
    {
      "productName": "Get upto 40%-70% off on Sarees",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/101/medium/myntra.jpg?1613124982",
      "companyName": "Myntra",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.myntra.com%2Ffootwear%3FplaEnabled%3Dfalse%26rf%3DDiscount+Range%3A40.0_100.0_40.0+TO+100.0"
    },
    {
      "productName": "Get upto 45% off on Pantry",
      "category": "Categories : Food & Grocery",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fb%3Fnode%3D9574332031%26pf_rd_r%3DWTC1EAWT47VBJ5FSJ0WQ%26pf_rd_p%3D173673ad-476a-4511-8994-b756acab7071"
    },
    {
      "productName": "Get upto 50% off Store",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4116/medium/boddes.png?1594902862",
      "companyName": "Boddess",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.boddess.com%2Fcatalog%2Fcategory%2Fview%2Fs%2Fbrands%2Fid%2F5%2F"
    },
    {
      "productName": "Grab Flat INR 200 OFF on Minimum Order Value of INR 1000",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4116/medium/boddes.png?1594902862",
      "companyName": "Boddess",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.boddess.com%2F"
    },
    {
      "productName": "Grab INR 200 OFF per passenger on Vistara Flight Bookings",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/29/medium/cleartrip_logo_medium.gif?1342766947",
      "companyName": "Cleartrip",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.cleartrip.com%2Foffers%2Findia%2Fctvistara"
    },
    {
      "productName": "Grab Latest trends Fashion Steals Under 699",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3941/medium/Pantaloons.png?1577453778",
      "companyName": "Pantaloons",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.pantaloons.com%2Fc%2Fcollections-483%3Fsource%3DPT_D_H_FS_699%26page%3D1%26orderway%3Dasc%26orderby%3Dpopular%26fp%5B%5D%3DPrice__fq%3A0+TO+699"
    },
    {
      "productName": "Grab Latest trends Fashion Steals Under 999",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3941/medium/Pantaloons.png?1577453778",
      "companyName": "Pantaloons",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.pantaloons.com%2Fc%2Fcollections-483%3Fsource%3DPT_D_H_FS_999%26page%3D1%26orderway%3Dasc%26orderby%3Dpopular%26fp%5B%5D%3DPrice__fq%3A0+TO+999"
    },
    {
      "productName": "Grab Latest trends Fashion Steals Under 999",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/4177/medium/pg-shop.jpg?1599220250",
      "companyName": "PG Shop",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fpgshop.in%2Fhead-shoulders-neem-anti-dandruff-shampoo-180ml%2F"
    },
    {
      "productName": "Head & Shoulders Neem, Anti Dandruff Shampoo, 650ml Just Rs.750",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DMobile+Accessories%26ref%3Dnb_sb_noss"
    },
    {
      "productName": "Sale on Mobile Accessories",
      "category": "Categories : Electronics",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DMobile+Accessories%26ref%3Dnb_sb_noss_2"
    },
    {
      "productName": "Sale on Mobile Accessories",
      "category": "Categories : Electronics",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DMusical+Instruments%26ref%3Dnb_sb_noss_2"
    },
    {
      "productName": "Sale on Musical Instruments",
      "category": "Categories : Others",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/3666/medium/Sugar.png?1531909049",
      "companyName": "Sugar Cosmetics",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fin.sugarcosmetics.com%2Fcollections%2Ffeatured-collection%2Fproducts%2Fsmudge-me-not-liquid-lipstick-minis-set"
    },
    {
      "productName": "Smudge Me Not Liquid Lipstick Minis Set Just Rs.799",
      "category": "Categories : Health & Beauty",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/2172/medium/Biba.png?1516178938",
      "companyName": "Biba",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.biba.in%2Fnew-arrivals%2Fgirls%3FPageNo%3D2"
    },
    {
      "productName": "Spring Summer Fashion for Girls",
      "category": "Categories : Fashion",
      "campaignImage": "https://cdn0.cuelinks.com/campaigns/817/medium/Amazon.in__Online_Shopping_for_Books__Kindle_E_Readers__Kindle_accessories__E_Books_and_Movies___TV.png?1371175177",
      "companyName": "Amazon India",
      "productUrl": "https://linksredirect.com/?pub_id=117743&amp;url=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3DMobile+Accessories%26ref%3Dnb_sb_noss"
    }
  ]);
  const [couponsCardData, setCouponsCardData] = React.useState([]);

  const getCoupons = async () => {
    try {
      const result = await axios.get("http://couponsoupon.com/api/v1/base");
      setCouponsData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterCueLinksData = () => {
    let result = _.uniqBy(hardcodedCouponsData, 'category');
    let tempArry = [];
    result.map((el, index) => {
      tempArry.push(el.category);
    });
    setCouponsHeadings(tempArry);
    console.log('tempArry', tempArry);
    let groupBy_result = _.groupBy(hardcodedCouponsData, 'category');
    console.log('groupBy_result',groupBy_result);
    setCouponsCardData(groupBy_result);
  }

  useEffect(() => {
    // getCoupons();
    filterCueLinksData();
  }, []);

  const handleChange = (panel) => {
    setExpanded(panel);
  };

  const handleProductClick = (productId) => {
    console.log(productId);
    history.push("/product/" + productId);
  };

  return (
    <React.Fragment>
      <div className="px-2 shadow-lg py-2 space-y-8">
        {couponsHeadings &&
          couponsHeadings.map((el, index) => (
            <React.Fragment key={index}>
              <div className="px-2 mt-6 flex justify-between items-center">
                <div style={{ color: COLORS.primary }}>
                  <Text
                    weight="700"
                    size="lg"
                    isTitle={true}
                    classes="capitalize"
                  >
                    {'Best of ' + el.split(':')[1].trim()}
                  </Text>
                </div>
                <div
                  onClick={() => history.push("/products?company=" + el)}
                  style={{ backgroundColor: COLORS.primary }}
                  className="p-1 px-4 cursor-pointer text-center"
                >
                  <Text
                    weight="600"
                    size="xs"
                    variant="white"
                    isTitle={true}
                    classes="uppercase"
                  >
                    View All
                  </Text>
                </div>
              </div>
              <div className="py-2">
                <CuelinksProductCard
                  // getProductId={handleProductClick}
                  coupons={couponsCardData[el] && couponsCardData[el].slice(0, 5)}
                />
              </div>
              {/* <Accordion
                expanded={expanded === index}
                elevation={0}
                style={expanded ? { margin: 0 } : { margin: 0 }}
              >
                <AccordionSummary>
                  <ProductCard
                    handleProduct={handleProductClick}
                    coupons={couponsData[el].slice(0, 4)}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <ProductCard
                    handleProduct={handleProductClick}
                    coupons={couponsData[el].slice(4, 21)}
                  />
                </AccordionDetails>
              </Accordion> */}

              {/* <div
                className="bg-gray-100 py-2 flex items-center justify-center space-x-4"
                onClick={() => handleChange(index)}
              >
                <div>{downArrow()}</div>
                <div>
                  <Button capitalize={true} bold={true}>
                    view all
                  </Button>
                </div>
              </div> */}
            </React.Fragment>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Coupons;
