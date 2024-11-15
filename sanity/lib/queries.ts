import { defineQuery } from "next-sanity";

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type == "privacyPolicy"][0]{
  title_ar,
  title_en,
  content
}`);

export const TERMS_OF_SERVICE_QUERY = defineQuery(`*[_type == "termsOfService"][0]{
  title_ar,
  title_en,
  content
}`);

export const PARTNER_REQUESTS_QUERY = defineQuery(`*[_type == "partnerRequest"]{
  _id,
  name,
  email,
  message
}`);

export const CONTACT_MESSAGES_QUERY = defineQuery(`*[_type == "contactMessage"]{
  _id,
  name,
  email,
  message,
  date
}`);

export const HOME_SECTION_QUERY = defineQuery(`*[_type == "home"][0]{
  title_ar,
  title_en,
  restaurants[] {
    name,
    logo,
    description
  },
  testimonials[] {
    name,
    feedback
  },
  benefits[] {
    title_ar,
    title_en,
    description,
    image
  }
}`);

export const FAQ_QUERY = defineQuery(`*[_type == "faq"]{
  question {
    ar,
    en
  },
  answer {
    ar,
    en
  }
}`);
