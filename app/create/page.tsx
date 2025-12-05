"use client";

import { useMemo, useState, type ReactNode } from "react";

import { Navbar } from "@/components/site/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Copy,
  Eye,
  Feather,
  GalleryHorizontalEnd,
  Heart,
  Image as ImageIcon,
  LayoutTemplate,
  Music2,
  Share2,
  Sparkles,
  Wand2,
} from "lucide-react";

type ThemeOption =
  | "valentines"
  | "mothers"
  | "fathers"
  | "birthday"
  | "anniversary"
  | "neutral";

type FormState = {
  theme: ThemeOption;
  occasion:
    | "Valentine's Day"
    | "Mother's Day"
    | "Father's Day"
    | "Birthday"
    | "Anniversary"
    | "Other";
  accentIntensity: number;
  title: string;
  message: string;
  showHero: boolean;
  specialDateTitle: string;
  specialDate: string;
  showSpecialDate: boolean;
  youtubeLink: string;
  showSong: boolean;
  reasonsTitle: string;
  reasons: string;
  showReasons: boolean;
  handwrittenTitle: string;
  handwrittenMessage: string;
  showHandwritten: boolean;
  photosOfUs: string;
  showPhotosOfUs: boolean;
  photosOfYou: string;
  showPhotosOfYou: boolean;
  customUrl: string;
};

type SectionCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  controls?: ReactNode;
  children: ReactNode;
};

type PreviewPanelProps = {
  form: FormState;
  palette: ThemeAccent;
  accentBorder: string;
  accentBackground: string;
  accentUnderline: string;
  reasonList: string[];
  photosOfUs: string[];
  photosOfYou: string[];
  previewLink: string;
  completion: number;
  scrollAreaClassName?: string;
  className?: string;
};

const photoSeeds = (seeds: string[]) =>
  seeds.map((seed) => `https://picsum.photos/seed/${seed}/600/400`).join("\n");

const createDefaultState = (): FormState => ({
  theme: "valentines",
  occasion: "Valentine's Day",
  accentIntensity: 70,
  title: "For someone truly special",
  message:
    "From the first moment we met, you’ve filled my life with colour, warmth, and the kind of laughter that makes everything feel lighter. This page is a little corner of the internet dedicated to all the ways you make the world better just by being you.",
  showHero: true,
  specialDateTitle: "How long I’ve loved you",
  specialDate: "13th November 2025",
  showSpecialDate: true,
  youtubeLink: "https://youtu.be/example-love-song",
  showSong: true,
  reasonsTitle: "Why I love you",
  reasons: [
    "You see the good in every situation.",
    "You champion everyone you care about.",
    "Your laughter is my favourite soundtrack.",
    "You make ordinary days feel cinematic.",
  ].join("\n"),
  showReasons: true,
  handwrittenTitle: "A little note…",
  handwrittenMessage:
    "I hope this page feels like a warm blanket, a sunset walk, and a whispered secret all in one. Thank you for being the reason I write softer, kinder stories about life.",
  showHandwritten: true,
  photosOfUs: photoSeeds(["heartfelt1", "heartfelt2", "heartfelt3"]),
  showPhotosOfUs: true,
  photosOfYou: photoSeeds(["portrait1", "portrait2"]),
  showPhotosOfYou: false,
  customUrl: "",
});

const themeAccents: Record<
  ThemeOption,
  { rgb: string; badge: string; label: string }
> = {
  valentines: {
    rgb: "244, 114, 182",
    badge: "bg-rose-100 text-rose-900",
    label: "Rose quartz",
  },
  mothers: {
    rgb: "214, 162, 232",
    badge: "bg-purple-100 text-purple-900",
    label: "Wild lavender",
  },
  fathers: {
    rgb: "96, 125, 139",
    badge: "bg-slate-100 text-slate-900",
    label: "Slate dusk",
  },
  birthday: {
    rgb: "251, 191, 36",
    badge: "bg-amber-100 text-amber-900",
    label: "Soft confetti",
  },
  anniversary: {
    rgb: "251, 146, 60",
    badge: "bg-orange-100 text-orange-900",
    label: "Golden hour",
  },
  neutral: {
    rgb: "148, 163, 184",
    badge: "bg-gray-100 text-gray-900",
    label: "Calm linen",
  },
};

type ThemeAccent = (typeof themeAccents)[ThemeOption];

const parseLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default function CreatePage() {
  const [form, setForm] = useState<FormState>(() => createDefaultState());

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => setForm(createDefaultState());

  const photosOfUs = useMemo(
    () => parseLines(form.photosOfUs),
    [form.photosOfUs]
  );
  const photosOfYou = useMemo(
    () => parseLines(form.photosOfYou),
    [form.photosOfYou]
  );
  const reasonList = useMemo(() => parseLines(form.reasons), [form.reasons]);

  const palette = themeAccents[form.theme];
  const accentStrength = Math.min(Math.max(form.accentIntensity / 100, 0.1), 1);
  const accentBorder = `rgba(${palette.rgb}, ${0.4 + accentStrength * 0.4})`;
  const accentBackground = `rgba(${palette.rgb}, ${
    0.15 + accentStrength * 0.25
  })`;
  const accentUnderline = `linear-gradient(90deg, rgba(${palette.rgb}, ${
    0.3 + accentStrength * 0.3
  }), transparent)`;

  const completion = useMemo(() => {
    const toggles = [
      form.showHero,
      form.showSpecialDate,
      form.showSong,
      form.showReasons,
      form.showHandwritten,
      form.showPhotosOfUs,
      form.showPhotosOfYou,
    ];
    return Math.round(
      ((toggles.filter(Boolean).length + (form.customUrl ? 1 : 0)) / 8) * 100
    );
  }, [form]);

  const previewLink =
    form.customUrl.trim() !== ""
      ? `https://heartfelt-pages.com/${form.customUrl.trim().toLowerCase()}`
      : "https://heartfelt-pages.com/abc123";

  const previewProps = {
    form,
    palette,
    accentBorder,
    accentBackground,
    accentUnderline,
    reasonList,
    photosOfUs,
    photosOfYou,
    previewLink,
    completion,
  };

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10">
        <header className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              Create your page
            </h1>
            <p className="text-muted-foreground">
              Fill in your details on the left. See your page come to life on
              the right.
            </p>
          </div>
          <div className="lg:hidden">
            <div className="flex justify-end pr-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="w-1/2 min-w-[160px] justify-center gap-2"
                    variant="outline"
                  >
                    <Eye className="h-4 w-4" />
                    Live preview
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full overflow-y-auto sm:max-w-md"
                >
                  <SheetHeader className="text-left">
                    <SheetTitle>Live preview</SheetTitle>
                    <SheetDescription>
                      Swipe through the preview without leaving the form.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4">
                    <PreviewPanel
                      {...previewProps}
                      className="border border-border/60 shadow-none"
                      scrollAreaClassName="h-[65vh]"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <LayoutTemplate className="h-5 w-5 text-primary" />
                  Theme & Occasion
                </CardTitle>
                <CardDescription>
                  Choose the tone, occasion, and how strong the accents should
                  feel.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Theme</Label>
                    <Select
                      value={form.theme}
                      onValueChange={(value: ThemeOption) =>
                        updateField("theme", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pick a theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="valentines">
                          Valentine vibes
                        </SelectItem>
                        <SelectItem value="mothers">Mum’s embrace</SelectItem>
                        <SelectItem value="fathers">Dad’s wisdom</SelectItem>
                        <SelectItem value="birthday">
                          Birthday confetti
                        </SelectItem>
                        <SelectItem value="anniversary">
                          Anniversary glow
                        </SelectItem>
                        <SelectItem value="neutral">Neutral & calm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Occasion</Label>
                    <Select
                      value={form.occasion}
                      onValueChange={(value) =>
                        updateField("occasion", value as FormState["occasion"])
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Valentine's Day">
                          Valentine&apos;s Day
                        </SelectItem>
                        <SelectItem value="Mother's Day">
                          Mother&apos;s Day
                        </SelectItem>
                        <SelectItem value="Father's Day">
                          Father&apos;s Day
                        </SelectItem>
                        <SelectItem value="Birthday">Birthday</SelectItem>
                        <SelectItem value="Anniversary">Anniversary</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <Label htmlFor="accent-slider">Accent intensity</Label>
                    <span className="text-muted-foreground">
                      {form.accentIntensity}%
                    </span>
                  </div>
                  <Slider
                    id="accent-slider"
                    value={[form.accentIntensity]}
                    onValueChange={(value) =>
                      updateField("accentIntensity", value[0] ?? 50)
                    }
                    min={10}
                    max={100}
                    step={5}
                  />
                  <p className="text-sm text-muted-foreground">
                    Softens or amplifies highlight colours throughout the page.
                  </p>
                </div>
              </CardContent>
            </Card>

            <SectionCard
              icon={<Sparkles className="h-5 w-5 text-primary" />}
              title="Hero"
              description="Headline and opening message."
              controls={
                <Switch
                  checked={form.showHero}
                  onCheckedChange={(checked) =>
                    updateField("showHero", checked)
                  }
                />
              }
            >
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="hero-title">Title</Label>
                  <Input
                    id="hero-title"
                    value={form.title}
                    onChange={(event) =>
                      updateField("title", event.target.value)
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="hero-message">Message</Label>
                  <Textarea
                    id="hero-message"
                    rows={4}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard
              icon={<ImageIcon className="h-5 w-5 text-primary" />}
              title="Photos of us"
              description="Share happy snapshots together."
              controls={
                <Switch
                  checked={form.showPhotosOfUs}
                  onCheckedChange={(checked) =>
                    updateField("showPhotosOfUs", checked)
                  }
                />
              }
            >
              <div className="space-y-1.5">
                <Label htmlFor="photos-us">Image URLs (one per line)</Label>
                <Textarea
                  id="photos-us"
                  rows={3}
                  value={form.photosOfUs}
                  onChange={(event) =>
                    updateField("photosOfUs", event.target.value)
                  }
                />
                <p className="text-sm text-muted-foreground">
                  Use hosted image links. We&apos;ll format them beautifully on
                  the page.
                </p>
              </div>
            </SectionCard>

            <SectionCard
              icon={<Calendar className="h-5 w-5 text-primary" />}
              title="Special date"
              description="Celebrate a timeline or milestone."
              controls={
                <Switch
                  checked={form.showSpecialDate}
                  onCheckedChange={(checked) =>
                    updateField("showSpecialDate", checked)
                  }
                />
              }
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="special-date-title">Section title</Label>
                  <Input
                    id="special-date-title"
                    value={form.specialDateTitle}
                    onChange={(event) =>
                      updateField("specialDateTitle", event.target.value)
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="special-date">Special date</Label>
                  <Input
                    id="special-date"
                    type="date"
                    value={form.specialDate}
                    onChange={(event) =>
                      updateField("specialDate", event.target.value)
                    }
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard
              icon={<Music2 className="h-5 w-5 text-primary" />}
              title="Song"
              description="Link a soundtrack that captures the feeling."
              controls={
                <Switch
                  checked={form.showSong}
                  onCheckedChange={(checked) =>
                    updateField("showSong", checked)
                  }
                />
              }
            >
              <div className="space-y-1.5">
                <Label htmlFor="song-link">YouTube link</Label>
                <Input
                  id="song-link"
                  placeholder="https://youtu.be/..."
                  value={form.youtubeLink}
                  onChange={(event) =>
                    updateField("youtubeLink", event.target.value)
                  }
                />
              </div>
            </SectionCard>

            <SectionCard
              icon={<GalleryHorizontalEnd className="h-5 w-5 text-primary" />}
              title="Photos of you"
              description="Solo shots that make them grin."
              controls={
                <Switch
                  checked={form.showPhotosOfYou}
                  onCheckedChange={(checked) =>
                    updateField("showPhotosOfYou", checked)
                  }
                />
              }
            >
              <div className="space-y-1.5">
                <Label htmlFor="photos-you">Image URLs (one per line)</Label>
                <Textarea
                  id="photos-you"
                  rows={3}
                  value={form.photosOfYou}
                  onChange={(event) =>
                    updateField("photosOfYou", event.target.value)
                  }
                />
              </div>
            </SectionCard>

            <SectionCard
              icon={<Heart className="h-5 w-5 text-primary" />}
              title="Reasons"
              description="List the reasons that make them smile."
              controls={
                <Switch
                  checked={form.showReasons}
                  onCheckedChange={(checked) =>
                    updateField("showReasons", checked)
                  }
                />
              }
            >
              <div className="space-y-1.5">
                <Label htmlFor="reasons-title">Section title</Label>
                <Input
                  id="reasons-title"
                  value={form.reasonsTitle}
                  onChange={(event) =>
                    updateField("reasonsTitle", event.target.value)
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reasons-list">Reasons (one per line)</Label>
                <Textarea
                  id="reasons-list"
                  rows={4}
                  value={form.reasons}
                  onChange={(event) =>
                    updateField("reasons", event.target.value)
                  }
                />
              </div>
            </SectionCard>

            <SectionCard
              icon={<Feather className="h-5 w-5 text-primary" />}
              title="Handwritten note"
              description="A soft note to close the page."
              controls={
                <Switch
                  checked={form.showHandwritten}
                  onCheckedChange={(checked) =>
                    updateField("showHandwritten", checked)
                  }
                />
              }
            >
              <div className="space-y-1.5">
                <Label htmlFor="handwritten-title">Section title</Label>
                <Input
                  id="handwritten-title"
                  value={form.handwrittenTitle}
                  onChange={(event) =>
                    updateField("handwrittenTitle", event.target.value)
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="handwritten-message">Message</Label>
                <Textarea
                  id="handwritten-message"
                  rows={4}
                  value={form.handwrittenMessage}
                  onChange={(event) =>
                    updateField("handwrittenMessage", event.target.value)
                  }
                />
              </div>
            </SectionCard>

            <SectionCard
              icon={<Share2 className="h-5 w-5 text-primary" />}
              title="Link & share"
              description="Choose your custom URL and share options."
            >
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="custom-url">Custom address</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      heartfelt-pages.com/
                    </span>
                    <Input
                      id="custom-url"
                      value={form.customUrl}
                      onChange={(event) =>
                        updateField("customUrl", event.target.value)
                      }
                      placeholder="nickname"
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="gap-2">
                    <Copy className="h-4 w-4" />
                    Copy link
                  </Button>
                  <Button variant="ghost" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Preview full page
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share options
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Email a link</DropdownMenuItem>
                      <DropdownMenuItem>Schedule send</DropdownMenuItem>
                      <DropdownMenuItem>Download QR poster</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-muted-foreground">
                  Links stay live for 90 days on Basic and indefinitely on
                  Premium.
                </p>
              </div>
            </SectionCard>

            <Card className="border-dashed border-border/70 bg-muted/40">
              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <Button className="gap-2">
                  <Wand2 className="h-4 w-4" />
                  Looks good
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Reset all
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="hidden lg:block lg:sticky lg:top-6">
            <PreviewPanel {...previewProps} scrollAreaClassName="h-[70vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  description,
  icon,
  controls,
  children,
}: SectionCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-xl">
            {icon}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {controls}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

function PreviewPanel({
  form,
  palette,
  accentBorder,
  accentBackground,
  accentUnderline,
  reasonList,
  photosOfUs,
  photosOfYou,
  previewLink,
  className,
}: PreviewPanelProps) {
  return (
    <Card className={cn("shadow-lg", className)}>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            Live preview
          </CardTitle>
          <Badge variant="outline" className={palette.badge}>
            {palette.label}
          </Badge>
        </div>
        <CardDescription>
          Everything updates in real-time as you craft your message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea
          className={cn("h-full rounded-2xl border border-border/60 p-6")}
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge className="bg-background/60 text-sm font-semibold text-foreground">
                {form.occasion}
              </Badge>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                Accent strength {form.accentIntensity}%
              </div>
            </div>
            {form.showHero && (
              <section
                className="space-y-3 rounded-2xl bg-background/80 p-6 shadow-sm"
                style={{ border: `1px solid ${accentBorder}` }}
              >
                <h2 className="text-3xl font-semibold">{form.title}</h2>
                <p className="text-muted-foreground">{form.message}</p>
              </section>
            )}

            {form.showPhotosOfUs && photosOfUs.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ImageIcon
                    className="h-4 w-4"
                    style={{ color: accentBorder }}
                  />
                  Photos of us
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {photosOfUs.map((src, index) => (
                    <div
                      key={src + index}
                      className="overflow-hidden rounded-xl bg-muted"
                      style={{ border: `1px solid rgba(15,15,15,0.05)` }}
                    >
                      <img
                        src={src}
                        alt={`Us ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {form.showSpecialDate && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar
                    className="h-4 w-4"
                    style={{ color: accentBorder }}
                  />
                  {form.specialDateTitle}
                </div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: accentBackground,
                    color: "#0f0f0f",
                  }}
                >
                  <Heart className="h-4 w-4" />
                  {new Date(form.specialDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </section>
            )}

            {form.showSong && (
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Music2 className="h-4 w-4" style={{ color: accentBorder }} />
                  Our soundtrack
                </div>
                <div
                  className="space-y-3 rounded-2xl border bg-card/30 p-4"
                  style={{ borderColor: accentBorder }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: accentBorder }}
                    >
                      <Music2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">
                        Shared melody
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {form.youtubeLink}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: "65%",
                          backgroundColor: accentBorder,
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>0:38</span>
                      <span>2:41</span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {form.showPhotosOfYou && photosOfYou.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <GalleryHorizontalEnd
                    className="h-4 w-4"
                    style={{ color: accentBorder }}
                  />
                  Photos of you
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {photosOfYou.map((src, index) => (
                    <div
                      key={src + index}
                      className="overflow-hidden rounded-xl"
                    >
                      <img
                        src={src}
                        alt={`You ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {form.showReasons && (
              <section className="space-y-3">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold"
                  style={{ backgroundImage: accentUnderline }}
                >
                  <Sparkles className="h-4 w-4" />
                  {form.reasonsTitle}
                </div>
                <ul className="space-y-3">
                  {reasonList.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: accentBorder }}
                      />
                      <p className="text-sm text-muted-foreground">{reason}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {form.showHandwritten && (
              <section
                className="space-y-3 rounded-2xl bg-background/80 p-6 shadow-sm"
                style={{ border: `1px dashed ${accentBorder}` }}
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Feather className="h-4 w-4" />
                  {form.handwrittenTitle}
                </div>
                <p className="text-lg italic leading-relaxed text-muted-foreground">
                  “{form.handwrittenMessage}”
                </p>
              </section>
            )}

            <section className="space-y-3 rounded-2xl border border-dashed border-border/60 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="gap-1 text-foreground">
                  <Share2 className="h-3.5 w-3.5" />
                  Share ready
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {previewLink}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy link
                </Button>
                <Button variant="ghost" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Preview full page
                </Button>
              </div>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
