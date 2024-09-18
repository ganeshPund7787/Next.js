"use client";
import { CardWrapper } from "@/components/auth/Card-Wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { RegisterSchema } from "@/schemas/index";
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error!);
        setSuccess(data.success!);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create new account"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormInput
              control={form.control}
              label="Name"
              name="name"
              placeholder="Enter your name : "
              disabled={isPending}
            />
            <FormInput
              control={form.control}
              label="Email"
              name="email"
              placeholder="example@gmail.com"
              type={"email"}
              disabled={isPending}
            />
            <FormInput
              control={form.control}
              label="Password"
              name="password"
              placeholder="******"
              type={"password"}
              disabled={isPending}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
