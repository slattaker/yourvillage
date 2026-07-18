export const SITE_URL = "https://zoesvillage.com";

export const PHONE_NUMBER = "(803) 670-2596";
export const PHONE_NUMBER_RAW = "+18036702596";

export const TEXT_URL = `sms:${PHONE_NUMBER_RAW}`;
export const CALL_URL = `tel:${PHONE_NUMBER_RAW}`;

/*
 * Keeping this name prevents errors in components that
 * already import BOOKING_URL.
 */
export const BOOKING_URL = TEXT_URL;

export const BUSINESS = {
  name: "Zoë’s Village",
  legalName: "Zoes Village LLC",
  phoneDisplay: "(803) 670-2596",
  phoneHref: "+18036702596",
  email: "hello@zoesvillage.com",
  serviceArea: "The Carolinas and surrounding areas",
  description:
    "Compassionate postpartum doula and newborn care support for families throughout the Carolinas and surrounding areas.",
};