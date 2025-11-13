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
import {
  BarChart3,
  Download,
  LayoutDashboard,
  MoreHorizontal,
  NotebookTabs,
  PoundSterling,
  Settings,
  ShoppingBag,
  Sparkles,
  User,
  Users as UsersIcon,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Users", icon: UsersIcon },
  { label: "Orders", icon: ShoppingBag },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const stats = [
  {
    label: "Users",
    value: "128",
    helper: "People with an account on Heartfelt Pages.",
    badge: "+12 this month",
    icon: User,
  },
  {
    label: "Orders",
    value: "74",
    helper: "Total personalised pages created.",
    icon: NotebookTabs,
  },
  {
    label: "Active pages",
    value: "53",
    helper: "Currently live and shareable.",
    icon: Sparkles,
  },
  {
    label: "Revenue (est.)",
    value: "£1,120",
    helper: "Approximate based on orders created.",
    badge: "Sample data",
    icon: PoundSterling,
  },
];

const orders = [
  {
    id: "ORD-3021",
    customer: "Sophie Turner",
    occasion: "Anniversary",
    status: "Active",
    createdAt: "13 Nov 2025",
  },
  {
    id: "ORD-3018",
    customer: "Jonas Minh",
    occasion: "Birthday",
    status: "Draft",
    createdAt: "11 Nov 2025",
  },
  {
    id: "ORD-3015",
    customer: "Ava Patel",
    occasion: "Graduation",
    status: "Pending payment",
    createdAt: "09 Nov 2025",
  },
  {
    id: "ORD-3009",
    customer: "Eden Shaw",
    occasion: "New baby",
    status: "Active",
    createdAt: "05 Nov 2025",
  },
  {
    id: "ORD-3003",
    customer: "Mateo Ruiz",
    occasion: "Engagement",
    status: "Expired",
    createdAt: "01 Nov 2025",
  },
  {
    id: "ORD-2998",
    customer: "Harper Lee",
    occasion: "Retirement",
    status: "Draft",
    createdAt: "28 Oct 2025",
  },
];

const statusStyles: Record<string, string> = {
  Active: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Draft: "border-muted text-muted-foreground",
  Expired: "border-destructive/40 text-destructive",
  "Pending payment": "border-amber-200 bg-amber-50 text-amber-700",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 lg:flex-row">
        <Card className="h-full shrink-0 lg:w-64">
          <CardHeader className="space-y-3">
            <CardTitle className="text-xl">Admin • Heartfelt Pages</CardTitle>
            <CardDescription>
              Tools to manage users, orders, and pages.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Separator />
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
                    item.active
                      ? "bg-background text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Admin dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor Heartfelt Pages orders, users, and page activity at a
                glance.
              </p>
            </div>
            <Button className="w-full sm:w-auto gap-2">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download report
            </Button>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div className="space-y-1">
                    <CardDescription>{stat.label}</CardDescription>
                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  </div>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.helper}</p>
                  {stat.badge ? (
                    <Badge variant="outline">{stat.badge}</Badge>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader className="flex flex-col gap-4 space-y-0 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <CardTitle>Recent orders</CardTitle>
                  <CardDescription>
                    Latest personalised pages being crafted.
                  </CardDescription>
                </div>
                <Input
                  type="search"
                  placeholder="Search by customer or occasion..."
                  className="w-full lg:w-64"
                />
              </CardHeader>
              <CardContent className="px-0">
                <div className="w-full overflow-x-auto">
                  <div className="min-w-[720px] px-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Occasion</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">
                              {order.id}
                            </TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell className="text-muted-foreground">
                              {order.occasion}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`text-xs font-medium ${
                                  statusStyles[order.status] ?? ""
                                }`}
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{order.createdAt}</TableCell>
                            <TableCell className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
