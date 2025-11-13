"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Mail, Sparkles, Instagram } from "lucide-react";
import { FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "Examples", href: "/examples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact-us" },
      { label: "Custom pages", href: "mailto:hello@heartfelt-pages.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/heartfeltpages.co.uk",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/heartfeltpages.co.uk",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@heartfeltpages.co.uk",
    icon: FaTiktok,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/heartfelt_pages",
    icon: FaXTwitter,
  },
  { label: "Email", href: "mailto:hello@heartfelt-pages.com", icon: Mail },
];

const motionFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/40 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <motion.div
          {...motionFade}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5"
        >
          <div className="pointer-events-none absolute -right-12 top-0 hidden h-48 w-48 rounded-full bg-primary/20 blur-3xl md:block" />
          <Card className="border-none bg-transparent p-0 shadow-none">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Stay in touch
                </p>
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Need something more bespoke?
                  <br className="hidden sm:block" /> Let’s craft it together.
                </h3>
                <p className="max-w-2xl text-base text-muted-foreground">
                  Tell us about the story you want to tell—whether it’s for a
                  proposal, a milestone celebration, or a one-off activation.
                  We’ll help you create a tailored Heartfelt Page.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-center sm:flex-row">
                <Link
                  href="/create-your-page/wizard"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    data-cta="footer-create"
                    className="w-full cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <Sparkles className="h-5 w-5" />
                      Create your page
                    </span>
                  </Button>
                </Link>
                <Link
                  href="mailto:hello@heartfeltpages.co.uk"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    data-cta="footer-contact"
                    className="w-full cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <HeartHandshake className="h-5 w-5" />
                      Talk to us
                    </span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          {...motionFade}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex flex-row gap-3 text-foreground"
            >
              <Image
                src="/logo.svg"
                alt="Heartfelt Pages logo"
                width={140}
                height={140}
                priority
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold tracking-tight">
                heartfelt<span className="text-primary">pages</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Personal pages made easy — share memories, messages, and moments
              all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <motion.div
              key={group.title}
              {...motionFade}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
                {group.title}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...motionFade}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col gap-4 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {currentYear}{" "}
            <Link
              href="/"
              className="font-semibold text-foreground hover:underline"
            >
              Heartfelt Pages
            </Link>{" "}
            · All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="https://stripe.com/" target="_blank" rel="noreferrer">
              <Image
                src="/stripe.png"
                alt="Stripe"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
