import { getImagePath } from "../../utils"

export const hearAboutUsOptions = [
    {
      label: "Facebook/Instagram",
      value: "facebook/instagram"
    },
    {
      label: "Friend",
      value: "friend"
    },
    {
      label: "Google",
      value: "google"
    },
    {
      label: "LinkedIn",
      value: "linkedIn"
    },
    {
      label: "Youtube",
      value: "youtube"
    },
    {
      label: "News article/TV",
      value: "news article/tv"
    },
  ]
export const investOptions = [
    {
      label: "Less than ₹1 Lakh",
      value: "1"
    },
    {
      label: "₹1-5 Lakh",
      value: "1-5"
    },
    {
      label: "More than ₹5 Lakh",
      value: "5"
    },
  ]
export const bannerSlides = [
    {
      img: getImagePath("assetImg.svg"),
      title: "₹ 1,185+ Crs ",
      subTitle: "Asset Under Management"
    },
    {
      img: getImagePath("defaultsImg.svg"),
      title: "0%",
      subTitle: "Defaults till date"
    },
    {
      img: getImagePath("returnsImg.svg"),
      title: "10%-12% XIRR ",
      subTitle: "Avg. Returns Earned"
    },
    {
      img: getImagePath("paymentsImg.svg"),
      title: "100%",
      subTitle: "On Time Payments"
    },
  ]