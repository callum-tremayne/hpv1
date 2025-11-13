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
import { Gift, HelpCircle } from "lucide-react";
import { Footer } from "@/components/site/footer";

const checklist = [
  "Unlimited saved drafts and preview links.",
  "Track every edit request in one place.",
  "Get reminders for upcoming special dates.",
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

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Start with Heartfelt Pages
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Create an account to craft keepsake webpages
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Share thoughtful stories, upload photos, and surprise the people
              you love with a dedicated digital page.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Gift className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              It only takes a moment to join Heartfelt Pages.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button variant="outline" className="w-full gap-3" type="button">
              <GoogleIcon />
              Sign up with Google
            </Button>
            <div className="relative">
              <Separator />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-3 text-xs uppercase tracking-wide text-muted-foreground">
                  or sign up with email
                </span>
              </span>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="signup-first" className="text-sm font-medium">
                    First name
                  </label>
                  <Input
                    id="signup-first"
                    placeholder="Amelia"
                    autoComplete="given-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="signup-last" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input
                    id="signup-last"
                    placeholder="Hart"
                    autoComplete="family-name"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="signup-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="signup-password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="signup-confirm"
                    className="text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                  />
                </div>
              </div>
              <Button className="w-full">Create account</Button>
            </form>
            <p className="text-sm text-muted-foreground">
              By continuing you agree to the{" "}
              <Link href="/terms" className="text-primary underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="rounded-lg bg-muted/60 p-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <HelpCircle className="h-4 w-4 text-primary" />
                Already have an account?
              </div>
              <Link
                href="/sign-in"
                className="font-medium text-primary underline-offset-4"
              >
                Sign in instead
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
