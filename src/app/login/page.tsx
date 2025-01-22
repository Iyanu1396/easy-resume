"use client";


import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24"
    height="24"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);

export default function LogInPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-gray-100">
      {/* Form Section */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600 text-sm">Enter your credentials to access your account</p>
        </div>


          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="rounded-lg border border-gray-300 focus:border-[#3A5B22] focus:ring focus:ring-[#3A5B22]"
              />

            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>


            <Button
            type="submit"
            className="w-full bg-[#3A5B22] text-white py-2 rounded-lg font-medium hover:bg-[#2A4418] active:bg-[#1C3410] focus:ring focus:ring-[#3A5B22]"
            >
             Login
            </Button>


            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm text-gray-500 bg-white px-2">
                or
              </div>
            </div>


            <Button
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 focus:ring focus:ring-[#3A5B22]"
            >
            <GoogleIcon />
            <span>Sign in with Google</span>
            </Button>


            <p className="text-center text-sm text-muted-foreground">
              Don't Have an account?{" "}
              <Link href="/signup" className="text-[#3A5B22] hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block relative bg-gradient-to-br from-gray-200 to-gray-100">
        <Image
          src="/illustration-signup.png"
          alt="Welcome illustration"
          className="object-cover object-center"
          fill
          priority
          sizes="(max-width: 1024px) 0vw, 50vw"
      />
      </div>

    </main>
  );
}
