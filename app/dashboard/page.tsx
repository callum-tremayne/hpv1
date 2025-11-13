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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarHeart,
  Clock,
  Copy,
  Download,
  Edit3,
  FileText,
  HelpCircle,
  MoreHorizontal,
  Plus,
  Share2,
  Sparkles,
} from "lucide-react";

type PageItem = {
  id: string;
  title: string;
  occasion: string;
  status: "Active" | "Draft" | "Expired" | "Pending";
  createdAt: string;
  shareUrl: string;
};

type ReceiptItem = {
  id: string;
  item: string;
  amount: string;
  date: string;
};

const pages: PageItem[] = [
  {
    id: "pg-401",
    title: "For Mum",
    occasion: "Mother's Day",
    status: "Active",
    createdAt: "13 Nov 2025",
    shareUrl: "https://heartfelt.pages/mum-love",
  },
  {
    id: "pg-392",
    title: "To Noah",
    occasion: "Birthday",
    status: "Draft",
    createdAt: "04 Nov 2025",
    shareUrl: "https://heartfelt.pages/noah-8",
  },
  {
    id: "pg-388",
    title: "For Ella",
    occasion: "Anniversary",
    status: "Pending",
    createdAt: "27 Oct 2025",
    shareUrl: "https://heartfelt.pages/ella-forever",
  },
  {
    id: "pg-365",
    title: "Grandad Stories",
    occasion: "Memorial",
    status: "Expired",
    createdAt: "18 Sep 2025",
    shareUrl: "https://heartfelt.pages/grandad-stories",
  },
];

const receipts: ReceiptItem[] = [
  {
    id: "RCT-2083",
    item: "Mother's Day Page – Premium",
    amount: "£20",
    date: "12 Nov 2025",
  },
  {
    id: "RCT-2071",
    item: "Anniversary Edit Credit",
    amount: "£8",
    date: "29 Oct 2025",
  },
  {
    id: "RCT-2038",
    item: "Lifetime Page – Basic",
    amount: "£10",
    date: "14 Sep 2025",
  },
];

const statusVariants: Record<PageItem["status"], string> = {
  Active: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Draft: "border-muted text-muted-foreground",
  Expired: "border-destructive/40 text-destructive",
  Pending: "border-amber-200 bg-amber-50 text-amber-700",
};

const kpis = [
  {
    label: "Active pages",
    value: "2",
    helper: "Currently live and shareable.",
    icon: Share2,
  },
  {
    label: "Drafts",
    value: "1",
    helper: "Finish and publish when you’re ready.",
    icon: Edit3,
  },
  {
    label: "Next special date",
    value: "30 Mar 2026",
    helper: "Mother’s Day reminder.",
    icon: CalendarHeart,
  },
  {
    label: "Edit credits",
    value: "1",
    helper: "Use a credit to update a page.",
    icon: Sparkles,
  },
];

const firstName = "Amelia";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {firstName}. Manage your pages, edits, and receipts.
            </p>
          </div>
          <Button className="w-full gap-2 sm:w-auto">
            <Plus className="h-4 w-4" aria-hidden="true" />
            Create new page
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <Card key={item.label}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardDescription>{item.label}</CardDescription>
                  <CardTitle className="text-2xl">{item.value}</CardTitle>
                </div>
                <item.icon
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.helper}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-4 space-y-0 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <CardTitle>My pages</CardTitle>
              <CardDescription>
                All your live, draft, and pending creations.
              </CardDescription>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 lg:w-auto">
              <Input
                placeholder="Search by title or occasion…"
                className="w-full lg:w-64"
              />
              <Button variant="outline" className="sm:w-auto">
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <ScrollArea className="w-full">
              <div className="min-w-[860px] px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Occasion</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Link</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-medium">
                          {page.title}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {page.occasion}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={statusVariants[page.status]}
                          >
                            {page.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{page.createdAt}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="truncate text-muted-foreground">
                              {page.shareUrl}
                            </span>
                            <Button variant="ghost" size="icon">
                              <Copy className="h-4 w-4" aria-hidden="true" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap justify-end gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Share
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>
              Shortcuts based on what customers do most.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2 rounded-lg border border-dashed border-border p-4">
                <Button className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  Create new page
                </Button>
                <p className="text-sm text-muted-foreground">
                  Start from our templates with guided copy blocks.
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-dashed border-border p-4">
                <Button variant="outline" className="w-full gap-2">
                  <Edit3 className="h-4 w-4" />
                  Redeem edit credit
                </Button>
                <p className="text-sm text-muted-foreground">
                  Use a credit to request updates or new sections.
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-dashed border-border p-4">
                <Button variant="outline" className="w-full gap-2">
                  <Clock className="h-4 w-4" />
                  Extend page expiry
                </Button>
                <p className="text-sm text-muted-foreground">
                  Keep a page live for longer than the default 90 days.
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-dashed border-border p-4">
                <Button variant="secondary" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Upgrade to Premium
                </Button>
                <p className="text-sm text-muted-foreground">
                  Unlock theme swaps, video embeds, and faster edits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing & receipts</CardTitle>
            <CardDescription>
              Download receipts for your purchases.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="min-w-full px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Receipt ID</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {receipts.map((receipt) => (
                    <TableRow key={receipt.id}>
                      <TableCell className="font-medium">
                        {receipt.id}
                      </TableCell>
                      <TableCell>{receipt.item}</TableCell>
                      <TableCell>{receipt.amount}</TableCell>
                      <TableCell>{receipt.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need help?</CardTitle>
            <CardDescription>
              Questions about edits, expiry, or sharing? We’re here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Reach out anytime for help with edits, downloading receipts,
                  or keeping a page live. Our concierge team typically replies
                  within a few hours.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="w-full gap-2 sm:w-auto">
                    <HelpCircle className="h-4 w-4" />
                    Contact support
                  </Button>
                  <Button variant="outline" className="w-full gap-2 sm:w-auto">
                    <FileText className="h-4 w-4" />
                    View FAQ
                  </Button>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border border-dashed border-border p-4">
                <div>
                  <div className="flex items-center gap-2 font-medium">
                    <Edit3 className="h-4 w-4 text-primary" />
                    What counts as an edit?
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Adding new sections, changing photos, or updating copy all
                    count as edits.
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="h-4 w-4 text-primary" />
                    How long does a page stay live?
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Basic pages stay live for 90 days; Premium keeps them up
                    indefinitely.
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="flex items-center gap-2 font-medium">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Can I switch themes later?
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Yes, theme swaps are included with Premium or by using an
                    edit credit.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
