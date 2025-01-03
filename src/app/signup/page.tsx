import React from 'react';
import Image from 'next/image';

const Page = () => {
  // Custom color for our design system
  const PRIMARY_COLOR = '#3A5B22';
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F4F7F1] via-white to-[#F8FAF6]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3A5B22] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3A5B22] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Main container with glass effect */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-center py-12">
          
          {/* Form Section with enhanced styling */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
            <form className="space-y-8">
              {/* Enhanced header section */}
              <div className="text-center space-y-3 mb-10">
               
                <h1 className="text-4xl font-bold text-gray-900">Get Started Now</h1>
            
              </div>

              {/* Form fields with enhanced interactions */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3A5B22] focus:ring-4 focus:ring-[#3A5B22]/10 transition-all duration-200 ease-in-out placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3A5B22] focus:ring-4 focus:ring-[#3A5B22]/10 transition-all duration-200 ease-in-out placeholder-gray-400"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3A5B22] focus:ring-4 focus:ring-[#3A5B22]/10 transition-all duration-200 ease-in-out placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3A5B22] focus:ring-4 focus:ring-[#3A5B22]/10 transition-all duration-200 ease-in-out"
                    placeholder="••••••••"
                  />
                  <p className="mt-2 text-sm text-gray-500">Must be at least 8 characters long</p>
                </div>

                {/* Enhanced checkbox styling */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-5 w-5 rounded border-gray-300 text-[#3A5B22] focus:ring-[#3A5B22] cursor-pointer"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="font-semibold text-[#3A5B22] hover:text-[#2A4418] underline-offset-2 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-semibold text-[#3A5B22] hover:text-[#2A4418] underline-offset-2 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              {/* Enhanced primary button */}
              <button
                type="submit"
                className="w-full bg-[#3A5B22] text-white py-3.5 px-4 rounded-lg font-semibold text-base hover:bg-[#2A4418] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5B22] transform transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
              >
                Create Account
              </button>

              {/* Elegant divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-gray-500">or continue with</span>
                </div>
              </div>

              {/* Enhanced social login button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-base font-semibold text-gray-700 transition-all duration-200 ease-in-out hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5B22]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </button>

              {/* Enhanced sign-in link */}
              <p className="text-center text-base text-gray-600 mt-8">
                Already have an account?{' '}
                <a href="#" className="font-semibold text-[#3A5B22] hover:text-[#2A4418] underline-offset-2 hover:underline">
                  Sign In
                </a>
              </p>
            </form>
          </div>

          {/* Enhanced image section with decorative elements */}
          <div className="w-full md:w-1/2 hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A5B22]/10 to-transparent rounded-2xl"></div>
            <div className="relative w-full aspect-square">
              <Image
                src="/illustration.png"
                alt="Sign up illustration"
                fill
                className="object-contain p-8 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;