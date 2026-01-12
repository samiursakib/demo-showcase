import { ChartConfig } from "@/components/ui/chart";

export type Artist = {
  name: string;
  designation: string;
  imageUrl: string;
};

export const artists: Artist[] = [
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
    name: "Leonardo da Vinci",
    designation: "Painter, Architect",
    imageUrl: "/images/photo-1609042759065-d8dad38f5a9f.jpg",
  },
  {
    name: "Claude Monet",
    designation: "Painter",
    imageUrl: "/images/photo-1542452376175-82b6fb643412.jpg",
  },
  {
    name: "Salvador Dalí",
    designation: "Surrealist Painter",
    imageUrl: "/images/premium_photo-1671656349322-41de944d259b.jpg",
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
  {
    name: "Henri Matisse",
    designation: "Painter, Sculptor",
    imageUrl: "/images/premium_photo-1674777843203-da3ebb9fbca0.jpg",
  },
  {
    name: "Banksy",
    designation: "Political Activist",
    imageUrl: "/images/photo-1461935793258-ac2ac2c930b2.jpg",
  },
  {
    name: "Marina Abramović",
    designation: "Performance Artist",
    imageUrl: "/images/X7L5hgFXQZazzPaK3goC_14084990857_88cabf3b6d_o.jpg",
  },
  {
    name: "Keith Haring",
    designation: "Graffiti Artist",
    imageUrl: "/images/premium_photo-1664541336896-b3d5f7dec9a3.jpg",
  },
  {
    name: "Egon Schiele",
    designation: "Painter, Draftsman",
    imageUrl: "/images/photo-1518611540400-6b85a0704342.jpg",
  },
  {
    name: "Gustav Klimt",
    designation: "Painter",
    imageUrl: "/images/photo-1533748430324-45f466e36937.jpg",
  },
  {
    name: "Takashi Murakami",
    designation: "Artist, Sculptor",
    imageUrl: "/images/premium_photo-1669138512601-e3f00b684edc.jpg",
  },
  {
    name: "Robert Rauschenberg",
    designation: "Painter, Printmaker",
    imageUrl: "/images/premium_photo-1673287635678-8d812deb4fc2.jpg",
  },
  {
    name: "Judy Chicago",
    designation: "Feminist Artist",
    imageUrl: "/images/43e39040.jpg",
  },
];

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
