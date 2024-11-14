import { groq } from "next-sanity";
import { client } from "./sanityClient";

const fetchPrivacyPolicy = async () => {
  const query = groq`
    *[_type == "privacyPolicy"][0] {
      title,
      content
    }
  `;
  const privacyPolicy = await client.fetch(query);
  return privacyPolicy;
};

const fetchTermsOfService = async () => {
  const query = groq`
    *[_type == "termsOfService"][0] {
      title,
      content
    }
  `;
  const termsOfService = await client.fetch(query);
  return termsOfService;
};

const fetchPartnerRequests = async () => {
  const query = groq`
    *[_type == "partnerRequest"] {
      _id,
      name,
      email,
      message
    }
  `;
  const partnerRequests = await client.fetch(query);
  return partnerRequests;
};

const fetchContactMessages = async () => {
  const query = groq`
    *[_type == "contactMessage"] {
      _id,
      name,
      email,
      message,
      date
    }
  `;
  const contactMessages = await client.fetch(query);
  return contactMessages;
};

const fetchHomeSection = async () => {
  const query = groq`
    *[_type == "home"][0] {
      title,
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
        title,
        description,
        image
      }
    }
  `;
  const homeSection = await client.fetch(query);
  return homeSection;
};

const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  const { name, email, message } = data;

  try {
    const response = await client.create({
      _type: 'contactMessage',
      name,
      email,
      message,
      date: new Date().toISOString(),
    });

    return response;
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    throw error;
  }
};

const submitPartnerRequestForm = async (data: { name: string; email: string; message: string }) => {
  const { name, email, message } = data;

  try {
    const response = await client.create({
      _type: 'partnerRequest',
      name,
      email,
      message,
    });

    return response;
  } catch (error) {
    console.error("Error submitting partner request form: ", error);
    throw error;
  }
};

export {
  fetchPrivacyPolicy,
  fetchTermsOfService,
  fetchPartnerRequests,
  fetchContactMessages,
  fetchHomeSection,
  submitContactForm,
  submitPartnerRequestForm
};


