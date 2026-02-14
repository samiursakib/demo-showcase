import { ChartConfig } from "@/components/ui/chart";
import {
  BiBarChartAlt2,
  BiBriefcase,
  BiCalendar,
  BiClipboard,
  BiCog,
  BiCreditCard,
  BiGroup,
  BiHistory,
  BiShieldQuarter,
  BiSolidDashboard,
  BiTask,
  BiUserCircle,
  BiVideo,
  BiWallet,
} from "react-icons/bi";
import { Contributor } from "./types";

export const contributors: Contributor[] = [
  {
    name: "Pablo Picasso",
    designation: "Painter, Sculptor",
    imageUrl: "/images/premium_photo-1664536392896-cd1743f9c02c.jpg",
  },
  {
    name: "Frida Kahlo",
    designation: "Painter",
    imageUrl: "/images/photo-1445053023192-8d45cb66099d.jpg",
  },
  {
    name: "Vincent van Gogh",
    designation: "Painter",
    imageUrl: "/images/premium_photo-1678197937465-bdbc4ed95815.jpg",
  },
  {
    name: "Georgia O'Keeffe",
    designation: "Painter",
    imageUrl: "/images/photo-1542385262-cdf06b302c2c.jpg",
  },
  {
    name: "Jackson Pollock",
    designation: "Abstract Painter",
    imageUrl: "/images/premium_photo-1675130119373-61ada6685d63.jpg",
  },
  {
    name: "Andy Warhol",
    designation: "Filmmaker",
    imageUrl: "/images/photo-1444720895098-cbd6b640c909.jpg",
  },
  {
    name: "Yayoi Kusama",
    designation: "Sculptor",
    imageUrl: "/images/photo-1505682614136-0a12f9f7beea.jpg",
  },
  {
    name: "Jean-Michel Basquiat",
    designation: "Painter",
    imageUrl: "/images/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg",
  },
];

export const chartData = [
  { year: 2018, web: 2, mobile: 5, desktop: 3 },
  { year: 2019, web: 3, mobile: 1, desktop: 3 },
  { year: 2020, web: 6, mobile: 2, desktop: 2 },
  { year: 2021, web: 2, mobile: 4, desktop: 3 },
  { year: 2022, web: 5, mobile: 3, desktop: 2 },
  { year: 2023, web: 3, mobile: 1, desktop: 4 },
];

export const chartConfig = {
  web: {
    label: "Web",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const sideMenuButtons = [
  { label: "Overview", Icon: BiSolidDashboard },
  { label: "Projects", Icon: BiBriefcase },
  { label: "Task Management", Icon: BiTask },
  { label: "Schedule", Icon: BiCalendar },
  { label: "Team Members", Icon: BiGroup },
  { label: "Client Portal", Icon: BiUserCircle },
  { label: "Analytics", Icon: BiBarChartAlt2 },
  { label: "Reports", Icon: BiClipboard },
  { label: "Global Settings", Icon: BiCog },
];

export const projectOverview = [
  { label: "Total", count: 124, rate: 21 },
  { label: "Ongoing", count: 19, rate: 25 },
  { label: "Pending", count: 44, rate: -31 },
];

export const notifications = [
  {
    label: "New client onboarded",
    time: "5m ago",
    Icon: BiUserCircle,
  },
  {
    label: "Project reached 80% completion",
    time: "12m ago",
    Icon: BiBarChartAlt2,
  },
  {
    label: "Budget limit exceeded",
    time: "45m ago",
    Icon: BiWallet,
  },
  {
    label: "Performance report ready",
    time: "2h ago",
    Icon: BiClipboard,
  },
  {
    label: "Login attempt detected",
    time: "3h ago",
    Icon: BiShieldQuarter,
  },
  {
    label: "New team meeting scheduled",
    time: "9h ago",
    Icon: BiVideo,
  },
  {
    label: "Invoice #4402 has been paid",
    time: "23h ago",
    Icon: BiCreditCard,
  },
  {
    label: "System backup completed successfully",
    time: "2d ago",
    Icon: BiHistory,
  },
  {
    label: "Task 'API Integration' marked as 'Overdue'",
    time: "2d ago",
    Icon: BiTask,
  },
];
