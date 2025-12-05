import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Copy,
  Feather,
  GalleryHorizontalEnd,
  Gift,
  Heart,
  Image as ImageIcon,
  Music2,
  Play,
  Quote,
  Share,
  Sparkles,
} from "lucide-react";
import { OrderNavbar } from "@/components/site/order-navbar";

type Theme =
  | "valentines"
  | "mothers"
  | "fathers"
  | "birthday"
  | "anniversary"
  | "neutral";

type Reason = {
  id: number;
  text: string;
};

type Photo = {
  id: number;
  imageUrl: string;
  caption?: string;
  location?: string;
  month?: string;
  year?: string;
  orientation?: "landscape" | "portrait";
};

type Order = {
  slug: string;
  customerName: string;
  recipientName: string;
  occasion: string;
  theme: Theme;
  title: string;
  message: string;
  specialDateTitle: string;
  specialDate: string;
  specialDateMessage: string;
  songTitle: string;
  songMessage: string;
  youTubeSongTitle: string;
  youtubeLink?: string;
  reasonsTitle: string;
  reasons: Reason[];
  handwrittenTitle: string;
  handwrittenMessage: string;
  photosOfUs: Photo[];
  photosOfYou: Photo[];
};

type PhotoSeed = Omit<Photo, "imageUrl" | "orientation"> & {
  seed: string;
  dimensions?: {
    width: number;
    height: number;
  };
};

const DEFAULT_PHOTO_SIZE = { width: 600, height: 400 };

const photoSeeds = (seeds: PhotoSeed[]): Photo[] =>
  seeds.map(({ seed, dimensions, ...photo }) => {
    const { width, height } = dimensions ?? DEFAULT_PHOTO_SIZE;
    const orientation = height > width ? "portrait" : "landscape";

    return {
      ...photo,
      orientation,
      imageUrl: `https://picsum.photos/seed/${seed}/${width}/${height}`,
    };
  });

const SAMPLE_ORDER: Order = {
  slug: "for-mum",
  customerName: "Lena",
  recipientName: "Mum",
  occasion: "Mother's Day",
  theme: "anniversary",
  title: "For the woman who made home feel magical",
  message:
    "I drafted and redrafted these words to capture just a fraction of the softness you’ve poured into my life. Thank you for late-night talks, surprise tea breaks, and for believing in my wildest dreams long before I did.",
  specialDateTitle: "The day everything began",
  specialDate: "14 May 1995",
  specialDateMessage:
    "You have been my mum for 1,259 days or 30,226 hours, or 1,813,583 minutes or 108,123,456 seconds",
  songTitle: "Our song",
  songMessage: "A soundtrack we keep returning to.",
  youtubeLink: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  youTubeSongTitle: "Guess the song",
  reasonsTitle: "Why you mean the world",
  reasons: [
    { id: 1, text: "You never stop listening, even when words feel messy." },
    { id: 2, text: "You make ordinary Sundays feel like tiny celebrations." },
    { id: 3, text: "You taught me how resilience can sound like laughter." },
    { id: 4, text: "You send handwritten notes when texts would be easier." },
    { id: 5, text: "You remind me to pause, breathe, and find the light." },
    { id: 6, text: "You remind me to pause, breathe, and find the light." },
    { id: 7, text: "You remind me to pause, breathe, and find the light." },
    { id: 8, text: "You remind me to pause, breathe, and find the light." },
    { id: 9, text: "You remind me to pause, breathe, and find the light." },
    { id: 10, text: "You remind me to pause, breathe, and find the light." },
  ],
  handwrittenTitle: "A little note for you",
  handwrittenMessage:
    "Dear Mum,\n\nI keep learning that love can be soft and powerful all at once, mostly because you showed me. Thank you for the warm toast in winter, for the porch swing confessions, for every time you told me I was already enough. I hope this page makes you feel even a hint of the safety you’ve given me. I love you more than these lines could ever hold.\n\nAlways,\nLena",
  photosOfUs: photoSeeds([
    {
      id: 1,
      seed: "heartfelt-us-1",
      caption: "Morning walks in Cornwall",
      location: "St. Ives",
      month: "June",
      year: "2018",
    },
    {
      id: 2,
      seed: "heartfelt-us-2",
      caption: "Laughing over burnt pancakes",
      location: "Home",
      month: "February",
      year: "2020",
    },
    {
      id: 3,
      seed: "heartfelt-us-3",
      caption: "Garden party sunshine",
      location: "Norwich",
      month: "July",
      year: "2023",
    },
  ]),
  photosOfYou: photoSeeds([
    {
      id: 1,
      seed: "heartfelt-you-1",
      caption: "Your favourite reading nook",
      month: "April",
      year: "2022",
    },
    {
      id: 2,
      seed: "heartfelt-you-2",
      caption: "Chef extraordinaire",
      month: "October",
      year: "2021",
    },
  ]),
};

function getThemeStyles(theme: Theme) {
  switch (theme) {
    case "valentines":
      return {
        accentBorder: "border-rose-200",
        accentBadge: "bg-rose-100 text-rose-700",
        accentSoft: "bg-rose-50",
      };
    case "mothers":
      return {
        accentBorder: "border-pink-200",
        accentBadge: "bg-pink-100 text-pink-700",
        accentSoft: "bg-pink-50",
      };
    case "fathers":
      return {
        accentBorder: "border-slate-300",
        accentBadge: "bg-slate-100 text-slate-700",
        accentSoft: "bg-slate-50",
      };
    case "birthday":
      return {
        accentBorder: "border-amber-200",
        accentBadge: "bg-amber-100 text-amber-700",
        accentSoft: "bg-amber-50",
      };
    case "anniversary":
      return {
        accentBorder: "border-yellow-200",
        accentBadge: "bg-yellow-100 text-yellow-800",
        accentSoft: "bg-yellow-50",
      };
    default:
      return {
        accentBorder: "border-zinc-200",
        accentBadge: "bg-zinc-100 text-zinc-700",
        accentSoft: "bg-zinc-50",
      };
  }
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function HeartfeltPage({ params }: PageProps) {
  const order = SAMPLE_ORDER;
  const theme = getThemeStyles(order.theme);
  const featuredPhoto = order.photosOfUs[0] ?? order.photosOfYou[0];

  return (
    <div className="min-h-screen bg-muted">
      <OrderNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <div className="space-y-8">
          <Card
            className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
          >
            <CardContent className="flex flex-col gap-8 p-6 md:flex-row">
              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                    {order.title}
                  </h1>
                </div>
                <p className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground">
                  <Quote className="mt-1 h-10 w-10 text-muted-foreground/70" />
                  {order.message}
                </p>
                <Separator />
              </div>
              {featuredPhoto ? (
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative h-64 w-full max-w-sm rounded-4xl bg-background p-4 shadow-lg">
                    <div className="h-full w-full rounded-2xl bg-muted/70 p-1">
                      <img
                        src={featuredPhoto.imageUrl}
                        alt="Photo from our memories"
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>

          {order.photosOfUs.length ? (
            <Card
              className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Moments we’ve shared</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="md:hidden">
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                    {order.photosOfUs.map((photo) => (
                      <div
                        key={photo.id}
                        className="w-64 flex-shrink-0 snap-center space-y-2 rounded-xl bg-background p-3 shadow-sm"
                      >
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={photo.imageUrl}
                            alt="Photo from our memories"
                            className={`h-60 w-full ${
                              photo.orientation === "portrait"
                                ? "object-contain"
                                : "object-cover"
                            }`}
                          />
                        </div>
                        <div className="space-y-1 text-sm">
                          <p className="text-xs text-muted-foreground">
                            {photo.location ? `${photo.location} · ` : ""}
                            {photo.month} {photo.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden grid-cols-2 gap-3 md:grid md:grid-cols-3">
                  {order.photosOfUs.map((photo) => (
                    <div
                      key={photo.id}
                      className="space-y-2 rounded-xl bg-background p-2 shadow-sm"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={photo.imageUrl}
                          alt="Photo from our memories"
                          className={`h-full w-full ${
                            photo.orientation === "portrait"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-xs text-muted-foreground">
                          {photo.location ? `${photo.location} · ` : ""}
                          {photo.month} {photo.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}

          <Card
            className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
          >
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 justify-center">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <CardTitle>{order.specialDateTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex justify-center">
                <div
                  className={`w-fit px-3 py-1 rounded-full text-base font-medium ${theme.accentBadge}`}
                >
                  {order.specialDateMessage}
                </div>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <Sparkles className="h-4 w-4" />
                {order.specialDate}
              </p>
            </CardContent>
          </Card>

          {order.youtubeLink ? (
            <Card
              className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle>{order.songTitle}</CardTitle>
                    <CardDescription>{order.songMessage}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${theme.accentBadge}`}
                  >
                    <Play className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {order.youTubeSongTitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className={`h-2 rounded-full ${theme.accentBadge}`}
                      style={{
                        width: "65%",
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>0:38</span>
                    <span>2:41</span>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-row gap-2">
                  <p className="text-xs text-muted-foreground">
                    {order.youtubeLink}
                  </p>
                  <Copy className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ) : null}

          {order.photosOfYou.length ? (
            <Card
              className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GalleryHorizontalEnd className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Just you</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="md:hidden">
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                    {order.photosOfYou.map((photo) => (
                      <div
                        key={photo.id}
                        className="w-56 flex-shrink-0 snap-center space-y-2 rounded-xl bg-background p-3 shadow-sm"
                      >
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={photo.imageUrl}
                            alt="Photo from our memories"
                            className={`h-full w-full ${
                              photo.orientation === "portrait"
                                ? "object-contain"
                                : "object-cover"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-3">
                  {order.photosOfYou.map((photo) => (
                    <div
                      key={photo.id}
                      className="space-y-2 rounded-xl bg-background p-3 shadow-sm"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={photo.imageUrl}
                          alt="Photo from our memories"
                          className={`h-40 w-full ${
                            photo.orientation === "portrait"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                      </div>
                      {photo.caption ? (
                        <p className="text-sm text-muted-foreground">
                          {photo.caption}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}

          <Card
            className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-muted-foreground" />
                <div>
                  <CardTitle>{order.reasonsTitle}</CardTitle>
                  <CardDescription>
                    Little things that add up to you.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-row justify-center">
              <ul className="space-y-4 text-base leading-relaxed">
                {order.reasons.map((reason) => (
                  <li
                    key={reason.id}
                    className="flex gap-3 rounded-xl bg-background/70 p-4 shadow-sm"
                  >
                    <Sparkles className="h-5 w-5 text-muted-foreground" />
                    <span>{reason.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`rounded-2xl border ${theme.accentBorder} shadow-sm`}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <Feather className="h-5 w-5 text-muted-foreground" />
                <CardTitle>{order.handwrittenTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`rounded-2xl border ${theme.accentBorder} ${theme.accentSoft} p-6`}
              >
                <p className="whitespace-pre-line text-lg italic leading-relaxed text-foreground">
                  {order.handwrittenMessage}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center gap-3 pt-6 text-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2 text-base font-medium text-foreground">
              <Sparkles className="h-4 w-4" />
              Made with Heartfelt Pages
            </div>
            <p>The easiest way to gift a story that feels like them.</p>
            <Button size="sm" className="gap-2">
              <Gift className="h-4 w-4" />
              Create your own page
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
