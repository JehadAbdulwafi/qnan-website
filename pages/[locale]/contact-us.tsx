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
import { submitContactForm } from '@/lib/queries';
import Head from 'next/head';

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "fullName_required" }),
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
  message: z
    .string()
    .min(1, { message: "message_required" }),
});

type FormValues = z.infer<typeof formSchema>

const AddRestaurantPage = () => {
  const { t } = useTranslation("common");

  const defaultValues: Partial<FormValues> = {
    fullName: "",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (data: FormValues) => {
    try {
      await submitContactForm(data);
    } catch (error) {
      console.log("submitPartnerRequestForm", error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>
          {t("contact_title")}
        </title>
        <meta name="description" content={`${t("contact_us")} ${t("contact_us_desc")}`} />
      </Head>
      <section className="section-dark">
        <div className='container'>
          <div>
            <h2 className='section-title'>{t('contact_us')}</h2>
          </div>
        </div>
      </section>
      <div className="container my-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>{t("contact_us")}</CardTitle>
                <CardDescription>
                  {t("contact_us_desc")}
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("message")}</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-32" placeholder={t("enter_message")} {...field} />
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
    </Layout>
  )
}

export default AddRestaurantPage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

