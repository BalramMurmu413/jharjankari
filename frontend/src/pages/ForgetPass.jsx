import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, ArrowRight, KeyRound, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // सिमुलेटेड API कॉल
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 text-slate-800 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* ----------------- LEFT SIDE (Branding & Hero) ----------------- */}
      <div className="hidden lg:relative lg:flex lg:w-1/2 flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
          alt="Abstract Background"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to from-emerald-950/90 via-slate-900/70 to-teal-950/50 backdrop-blur-[2px]" />

        {/* Brand Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to from-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/30">
            <span className="text-xl font-bold tracking-wider text-white">⚡</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight">
              Jhar<span className="text-emerald-400">Jankari</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Account Security Portal
            </span>
          </div>
        </div>

        {/* Security Info Card */}
        <div className="relative z-10 max-w-md space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>End-to-End Secure Reset</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Don't worry, we've got your back.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Enter your registered email address and we will immediately send you a secure verification link to reset your credentials.
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-slate-400">
          © {new Date().getFullYear()} JharJankari. All rights reserved.
        </div>
      </div>

      {/* ----------------- RIGHT SIDE (Form / Confirmation) ----------------- */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center px-6 py-12 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="w-full max-w-md space-y-8">
          
          {/* Back to Login link */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to sign in</span>
          </Link>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 shadow-sm dark:bg-emerald-950/40 dark:border-emerald-800/60 dark:text-emerald-400 mb-2">
                  <KeyRound className="h-6 w-6" />
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Forgot Password?
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No worries! Enter your email address and we'll send you recovery instructions.
                </p>
              </div>

              {/* Reset Request Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Registered Email
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-emerald-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-4 text-sm font-semibold text-white shadow-md shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-[0.99] disabled:opacity-70"
                >
                  <span>{loading ? "Sending link..." : "Send Reset Link"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="space-y-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Check your email
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We have sent password recovery instructions to:
                </p>
                <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm">
                  {email}
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Did not receive email? Resend
                </button>

                <Link
                  to="/login"
                  className="block w-full rounded-xl bg-emerald-600 py-2.5 px-4 text-sm font-semibold text-white shadow-md shadow-emerald-600/30 transition hover:bg-emerald-700"
                >
                  Return to Login
                </Link>
              </div>
            </div>
          )}

          {/* Need assistance */}
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            Need help?{" "}
            <a href="#support" className="font-semibold text-emerald-600 hover:underline dark:text-emerald-400">
              Contact Support
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}