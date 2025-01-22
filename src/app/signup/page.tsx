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

export default function SignUpPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-gray-100">
      {/* Form Section */}
      <div className="flex items-center justify-center p-8 bg-white shadow-md">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Get Started Now</h1>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="First name"
                  className="rounded-lg border border-gray-300 focus:ring focus:ring-[#3A5B22] focus:border-[#3A5B22]"
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle name (optional)</Label>
                <Input
                  id="middleName"
                  name="middleName"
                  type="text"
                  placeholder="Middle name"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-[#3A5B22]"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last name"
                className="rounded-md border-gray-300 focus:ring-2 focus:ring-[#3A5B22]"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-md border-gray-300 focus:ring-2 focus:ring-[#3A5B22]"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="rounded-md border-gray-300 focus:ring-2 focus:ring-[#3A5B22]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms & policy
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#3A5B22] text-white rounded-md hover:bg-[#2A4418] active:bg-[#1C3410] focus:ring focus:ring-offset-2 focus:ring-[#3A5B22]"
            >
              Sign Up
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm text-gray-500 bg-gray-100 px-2">
                or
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 border-gray-300 hover:border-[#3A5B22] focus:ring-2 focus:ring-[#3A5B22]"
            >
              <GoogleIcon />
              <span>Sign up with Google</span>
            </Button>

            <p className="text-center text-sm text-gray-500">
              Have an account?{" "}
              <Link href="/login" className="text-[#3A5B22] hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block relative">
        <Image
          src="/illustration.png"
          alt="Sign up illustration"
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>
    </main>
  );
}
