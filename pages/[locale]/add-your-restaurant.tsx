import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Layout from '@/components/layout'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getTitle } from '@/lib/getTitle';
import { submitPartnerRequestForm } from '@/lib/queries';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Head from 'next/head';

const points = [
  {
    point: "financial_gain",
    desc: "financial_gain_desc",
  },
  {
    point: "wide_recognition",
    desc: "wide_recognition_desc",
  },
  {
    point: "direct_communication",
    desc: "direct_communication_desc",
  },
  {
    point: "ease_of_use",
    desc: "ease_of_use_desc",
  },
  {
    point: "continuous_support",
    desc: "continuous_support_desc",
  },
];

const activityType = [
  {
    key: "homeKitchen",
    ar: "مطبخ منزلي",
    en: "Home Kitchen",
  },
  {
    key: "restaurantCafe",
    ar: "مطعم ومقهى",
    en: "Restaurant and cafe",
  },
  {
    key: "bakery",
    ar: "معمل",
    en: "Bakery",
  },
  {
    key: "company",
    ar: "شركة",
    en: "Company",
  }

]
const cuisineType = [
  {
    key: "hot",
    ar: "حار",
    en: "Hot",
  },
  {
    key: "sweet",
    ar: "حلو",
    en: "Sweet",
  },

  {
    key: "juice",
    ar: "عصائر",
    en: "Juice",
  },
  {
    key: "hotSweet",
    ar: "حار وحلو",
    en: "Hot and sweet",
  }
]

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "fullName_required" }),
  restaurantName: z
    .string()
    .min(1, { message: "restaurantname_required" }),
  restaurantDescription: z
    .string()
    .min(1, { message: "restaurantname_required" }),
  email: z
    .string()
    .email({ message: "email_invalid" })
    .min(1, { message: "email_required" }),
  phone: z
    .string()
    .min(1, { message: "phone_required" }),
  country: z
    .string()
    .min(1, { message: "country_required" }),
  city: z
    .string()
    .min(1, { message: "city_required" }),
  area: z
    .string()
    .min(1, { message: "area_required" }),
  activityType: z.enum(["homeKitchen", "restaurantCafe", "bakery", "company"], {
    errorMap: () => ({ message: "activityType_required" }),
  }),
  cuisineType: z.enum(["hot", "sweet", "juice", "hotSweet"], {
    errorMap: () => ({ message: "cuisineType_required" }),
  }),
});

type FormValues = z.infer<typeof formSchema>

const AddRestaurantPage = () => {
  const { t, i18n } = useTranslation("common");

  const defaultValues: Partial<FormValues> = {
    fullName: "",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (data: FormValues) => {
    try {
      await submitPartnerRequestForm(data);
    } catch (error) {
      console.log("submitPartnerRequestForm", error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>
          {t("restaurant_title")}
        </title>
        <meta name="description" content={`${t("add_restaurant_title")} ${t("add_restaurnat_desc")}`} />
      </Head>
      <section className="section-dark">
        <div className='container'>
          <div>
            <h2 className='section-title'>{t('add_your_restaurant')}</h2>
          </div>
        </div>
      </section>
      <div className="container grid gap-4 grid-cols-2 my-4">
        <div className="grid gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>{t("add_restaurant_title")}</CardTitle>
                  <CardDescription>
                    {t("add_restaurnat_desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("full_name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("enter_full_name")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="restaurantName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("restaurant_name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("enter_restaurant_name")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("email")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("enter_email")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("phone")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("enter_phone")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("country")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("enter_country")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("city")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("entrt_city")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("area")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("entrt_area")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="activityType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("activity_type")}</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                              }}
                              value={field.value}
                              defaultValue={activityType[0].key}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder />
                              </SelectTrigger>
                              <SelectContent>
                                {activityType.map((type) => (
                                  <SelectItem key={type.key} value={type.key}>
                                    {getTitle(type, i18n.language)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cuisineType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("cuisine_type")}</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                              }}
                              value={field.value}
                              defaultValue={cuisineType[0].key}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder />
                              </SelectTrigger>
                              <SelectContent>
                                {cuisineType.map((type) => (
                                  <SelectItem key={type.key} value={type.key}>
                                    {getTitle(type, i18n.language)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="restaurantDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("restaurant_desc")}</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-32" placeholder={t("entrt_restaurant_desc")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">{t("save")}</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </Form>

        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-pretty text-lg font-bold">
              {t("add_restaurant_sec1_title")}
            </h2>
            <p className="text-pretty text-md font-medium">
              {t("add_restaurant_sec1_desc")}
            </p>
          </div>
          <Separator />

          <div className="flex flex-col gap-3">
            <div className="w-full relative flex-1 mx-auto flex-grow">
              <Image
                src={require("@/public/images/iphone-3.png")}
                alt="iphone"
                className="w-full object-contain relative top-0"
              />
            </div>
            <h2 className="text-pretty text-lg font-bold">
              {t("add_restaurant_sec2_title")}
            </h2>
            <ul className="flex flex-col gap-3">
              {points.map((point) => (
                <li key={point.point}>
                  <p className="text-pretty text-md font-medium">
                    <strong>{t(point.point)}:</strong> {" "}
                    {t(point.desc)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default AddRestaurantPage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
