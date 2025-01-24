"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GoogleIcon from "@/_ui/GoogleIcon";
import { useLogin } from "@/_features/auth/useLogin";

interface SignUpFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Page() {

 const { login, isLoadingLogin } =  useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = (data: SignUpFormInputs) => {
    login({ 
      email: data?.email, 
      password: data?.password
    });
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back!</h1>
            <p className="font-medium">
              Enter your Credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          

            <div className="space-y-2">
              <Label htmlFor="email">
                Email
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Password
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 8 characters",
                  },
                })}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  {...register("rememberMe")}
                  className="h-4 w-4 accent-black text-[#3A5B22] focus:ring-[#3A5B22]"
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#3A5B22] hover:bg-[#2A4418] text-white rounded-md"
            >
            { isLoadingLogin ? "Loggging In" : "Login"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center space-x-2"
            >
              <GoogleIcon />
              <span>Sign in with Google</span>
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Dont Have an account?{" "}
              <Link href="/signup" className="text-[#3A5B22] hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block relative bg-gray-50">
        <Image
          src="/illustration-signup.png"
          alt="illustration"
          className="object-cover object-center"
          fill
          priority
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
      </div>
    </main>
  );
}
