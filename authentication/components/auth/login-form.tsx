"use client";
import { CardWrapper } from "@/components/auth/Card-Wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormInput
              control={form.control}
              label="Email"
              name="email"
              placeholder="example@gmail.com"
              type={"email"}
            />
            <FormInput
              control={form.control}
              label="Password"
              name="password"
              placeholder="******"
              type={"password"}
            />
          </div>
          <FormError message="" />
          <FormSuccess message="ok" />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
