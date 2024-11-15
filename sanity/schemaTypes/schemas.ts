import { defineField, defineType } from 'sanity';

export default [
  defineType({
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Privacy Policy',
        readOnly: true,
      }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'object',
        fields: [
          defineField({
            name: 'ar',
            title: 'Arabic Content',
            type: 'array',
            of: [{ type: 'block' }],
          }),
          defineField({
            name: 'en',
            title: 'English Content',
            type: 'array',
            of: [{ type: 'block' }],
          }),
        ],
      }),
    ],
  }),

  defineType({
    name: 'termsOfService',
    title: 'Terms of Service',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Terms of Service',
        readOnly: true,
      }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'object',
        fields: [
          defineField({
            name: 'ar',
            title: 'Arabic Content',
            type: 'array',
            of: [{ type: 'block' }],
          }),
          defineField({
            name: 'en',
            title: 'English Content',
            type: 'array',
            of: [{ type: 'block' }],
          }),
        ],
      }),
    ],
  }),
  defineType({
    name: "partnerRequest",
    title: "Become a Partner Request",
    type: "document",
    fields: [
      defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required().error("fullName_required"),
      }),
      defineField({
        name: "restaurantName",
        title: "Restaurant Name",
        type: "string",
        validation: (Rule) => Rule.required().error("restaurantname_required"),
      }),
      defineField({
        name: "restaurantDescription",
        title: "Restaurant Description",
        type: "text",
        validation: (Rule) => Rule.required().error("restaurantdescription_required"),
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) =>
          Rule.required()
            .error("email_required")
      }),
      defineField({
        name: "phone",
        title: "Phone",
        type: "string",
        validation: (Rule) => Rule.required().error("phone_required"),
      }),
      defineField({
        name: "country",
        title: "Country",
        type: "string",
        validation: (Rule) => Rule.required().error("country_required"),
      }),
      defineField({
        name: "city",
        title: "City",
        type: "string",
        validation: (Rule) => Rule.required().error("city_required"),
      }),
      defineField({
        name: "area",
        title: "Area",
        type: "string",
        validation: (Rule) => Rule.required().error("area_required"),
      }),
      defineField({
        name: "activityType",
        title: "Activity Type",
        type: "string",
        options: {
          list: [
            { title: "Home Kitchen", value: "homeKitchen" },
            { title: "Restaurant or Cafe", value: "restaurantCafe" },
            { title: "Bakery", value: "bakery" },
            { title: "Company", value: "company" },
          ],
        },
        validation: (Rule) => Rule.required().error("activityType_required"),
      }),
      defineField({
        name: "cuisineType",
        title: "Cuisine Type",
        type: "string",
        options: {
          list: [
            { title: "Hot", value: "hot" },
            { title: "Sweet", value: "sweet" },
            { title: "Juice", value: "juice" },
            { title: "Hot & Sweet", value: "hotSweet" },
          ],
        },
        validation: (Rule) => Rule.required().error("cuisineType_required"),
      }),
    ],
  }),

  defineType({
    name: "contactMessage",
    title: "Contact Us Message",
    type: "document",
    fields: [
      defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required().error("fullName_required"),
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) =>
          Rule.required()
            .error("email_required")
      }),
      defineField({
        name: "phone",
        title: "Phone",
        type: "string",
        validation: (Rule) => Rule.required().error("phone_required"),
      }),
      defineField({
        name: "country",
        title: "Country",
        type: "string",
        validation: (Rule) => Rule.required().error("country_required"),
      }),
      defineField({
        name: "message",
        title: "Message",
        type: "text",
        validation: (Rule) => Rule.required().error("message_required"),
      }),
      defineField({
        name: "date",
        title: "Date",
        type: "datetime",
        initialValue: new Date().toISOString(),
      }),
    ],
  }),

  defineType({
    name: 'home',
    title: 'Home Section',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Home Sections',
        readOnly: true,
      }),
      defineField({
        name: 'restaurants',
        title: 'Featured Restaurants',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'name',
                title: 'Name',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Name',
                    type: 'string',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Name',
                    type: 'string',
                  }),
                ],
              }),
              defineField({
                name: 'logo',
                title: 'Logo',
                type: 'image',
                options: { hotspot: true },
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Description',
                    type: 'text',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Description',
                    type: 'text',
                  }),
                ],
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'name',
                title: 'Name',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Name',
                    type: 'string',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Name',
                    type: 'string',
                  }),
                ],
              }),
              defineField({
                name: 'feedback',
                title: 'Feedback',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Feedback',
                    type: 'text',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Feedback',
                    type: 'text',
                  }),
                ],
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Title',
                    type: 'string',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Title',
                    type: 'string',
                  }),
                ],
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'object',
                fields: [
                  defineField({
                    name: 'ar',
                    title: 'Arabic Description',
                    type: 'text',
                  }),
                  defineField({
                    name: 'en',
                    title: 'English Description',
                    type: 'text',
                  }),
                ],
              }),
              defineField({
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
              }),
            ],
          },
        ],
      }),
    ],
  }),
  defineType({
    name: 'faq',
    title: 'Frequently Asked Questions',
    type: 'document',
    fields: [
      defineField({
        name: 'question',
        title: 'Question',
        type: 'object',
        fields: [
          defineField({
            name: 'ar',
            title: 'Arabic Question',
            type: 'string',
            validation: (Rule) => Rule.required().error('arabic_question_required'),
          }),
          defineField({
            name: 'en',
            title: 'English Question',
            type: 'string',
            validation: (Rule) => Rule.required().error('english_question_required'),
          }),
        ],
      }),
      defineField({
        name: 'answer',
        title: 'Answer',
        type: 'object',
        fields: [
          defineField({
            name: 'ar',
            title: 'Arabic Answer',
            type: 'text',
            validation: (Rule) => Rule.required().error('arabic_answer_required'),
          }),
          defineField({
            name: 'en',
            title: 'English Answer',
            type: 'text',
            validation: (Rule) => Rule.required().error('english_answer_required'),
          }),
        ],
      }),
    ],
  }),
];

