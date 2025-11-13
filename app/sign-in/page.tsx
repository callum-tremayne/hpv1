import Link from "next/link";

import { Navbar } from "@/components/site/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Footer } from "@/components/site/footer";

const perks = [
  {
    title: "Save every update",
    description: "Resume drafts, track edits, and view your order history.",
  },
  {
    title: "Priority support",
    description: "Get concierge help with page tweaks and gift ideas.",
  },
];

function GoogleIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15.64 8.205c0-.546-.049-1.07-.141-1.571H8v2.972h4.31a3.688 3.688 0 0 1-1.6 2.42v1.992h2.59c1.517-1.397 2.34-3.457 2.34-5.813Z"
        fill="#4285F4"
      />
      <path
        d="M8 16c2.16 0 3.978-.717 5.304-1.952l-2.59-1.992c-.72.486-1.641.772-2.714.772-2.085 0-3.854-1.408-4.482-3.3H.802v2.073A7.998 7.998 0 0 0 8 16Z"
        fill="#34A853"
      />
      <path
        d="M3.518 9.528A4.807 4.807 0 0 1 3.267 8a4.807 4.807 0 0 1 .25-1.528V4.399H.802A7.998 7.998 0 0 0 0 8c0 1.286.308 2.503.802 3.601l2.716-2.073Z"
        fill="#FBBC05"
      />
      <path
        d="M8 3.182c1.175 0 2.231.404 3.063 1.197l2.298-2.298C11.975.816 10.157 0 8 0A7.998 7.998 0 0 0 .802 4.399l2.716 2.073C4.146 4.59 5.915 3.182 8 3.182Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Heartfelt Pages
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sign in to continue crafting thoughtful moments
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Manage your personalised pages, download receipts, and request
              edits from one calm dashboard.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium">{perk.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              Welcome back. Enter your details to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button variant="outline" className="w-full gap-3" type="button">
              <GoogleIcon />
              Continue with Google
            </Button>
            <div className="relative">
              <Separator />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-3 text-xs uppercase tracking-wide text-muted-foreground">
                  or continue with email
                </span>
              </span>
            </div>
            <form className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="signin-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="signin-password"
                  className="text-sm font-medium"
                >
                  Password
                </label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
              <Button className="w-full">Sign in</Button>
            </form>
            <div className="flex items-center justify-between text-sm">
              <Link href="/forgot-password" className="text-primary underline">
                Forgot password?
              </Link>
              <div className="text-muted-foreground">
                New here?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-primary underline-offset-4"
                >
                  Create an account
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-muted/60 p-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Secure & private
              </div>
              We use encrypted sessions to keep your memories safe.
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
