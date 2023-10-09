'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
});

type NewsletterSchemaType = typeof newsletterSchema;
const Newsletter = () => {
  const form = useForm<z.infer<NewsletterSchemaType>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });
  function onSubmit(values: z.infer<NewsletterSchemaType>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full gap-4">
                  <Input className="w-3/4" placeholder="Enter your email" {...field} />
                  <Button variant="ghost" className="w-1/4">
                    Subscribe
                  </Button>
                </div>
              </FormControl>
              <FormDescription className="text-center text-xs">
                By signing up to our newsletter you agree to our{' '}
                <Link href={'/privacy-policy'}>Privacy Policy.</Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Newsletter;
