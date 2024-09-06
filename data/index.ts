export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I embrace global connectivity, fostering open dialogue and collaborative growth in every project. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I seamlessly accommodate diverse time zones, ensuring smooth collaboration across globe.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technical Proficiencies  ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 overlap-hidden",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Ardent technophile with an insatiable zeal for innovative development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Medium Blogging site clone ",
    description: "Inside Scooop ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-5 md:row-span-1 md:col-span-5",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-middle",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Anime Haven - Anime  Site",
    des: "Purpose behind it's creations was to provide new fans into the community with info like Free streaming licensed sites/channels, platforms that let you stream with subscriptions.",
    img: "/AnimeHaven.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://anime-haven-react.netlify.app",
  },
  {
    id: 2,
    title: "Modern UI DashBoard - ShadCN  ",
    des: "A modern dashboard application built with Next.js, TypeScript, and ShadCN UI library. This project features a responsive sidebar navigation and various data visualization components",
    img: "/UIdashboard.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.png"],
    link: "https://dashboard-ui-shadcn.netlify.app",
  },
  {
    id: 3,
    title: "WeBlog - Blogging site ",
    des: "A Blog site insoired by medium which does not have all content reserved for premium users only",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/image.avif"],
    link: "https://github.com/Allmight-456/Blog-site",
  },
  {
    id: 4,
    title: "Astra Dynamic- UI components",
    des: "AstraUI is a powerful toolkit for crafting stunning, responsive frontends using Next.js, ShadCN UI, and Framer Motion.",
    img: "/AstraDynamic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/image.avif","/shadcn.png"],
    link: "https://ad-astra-landing-page.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "When buying a product on Flipkart ,  goto the address selection and goto the payments page and then go back to previous page without payment , after this the only available option on Iphone’s Flipkart app is to buy it , no back button to the homepage or the cart is present , also the options at bottom cease to exist , only way to maybe add item or remove is to reopen the app or( if you know it) slide from the left edge towards right towards right.",
    name: "Flipkart IoS App",
    title: "Bug Alert",
  },
  {
    quote:
      "When opened for the first time the app simply refreshes on the first press/click  and shifts the page options to a position higher than before with new connect option (maybe this is causing this), happens every time I try to open folder , Problems for macbook .",
    name: "VSCode for Mac",
    title: "Bug Alert",
  },
  {
    quote:
      "ShadCN UI is a customizable and accessible component library built for React applications. It offers a modern design system with pre-built components, theming capabilities, and support for dark mode, all while maintaining high performance and responsiveness,Allows seamless integration with Tailwind CSS for consistent styling.",
    name: "ShadCN UI",
    title: "Developer Picks",
  },
  {
    quote:
      "Aceternity UI is a modern and highly flexible component library designed for building sleek and responsive user interfaces. It provides a wide range of UI components that are fully customizable, with a focus on performance, accessibility, and ease of integration. Aceternity UI is compatible with popular frameworks, allowing developers to create stunning interfaces efficiently.",
    name: "Aceternity UI",
    title: "Developer Picks",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "React Frontend for Anime Haven",
    desc: "Made an Anime recommendations Site with offerings for paid and unpaid sources",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI ChatBot with LangChain ",
    desc: "A chatbot to answer quieries on a avialable data set with LLM  ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app using figma and Flutter .Used APIs to integrate backend",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title:  "ReUsable Component libraries ",
    desc: "Developed and maintained user-facing features using modern frontend technologies in form reusable Components.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href:'https://github.com/Allmight-456'
  },
  {
    id: 2,
    img: "/twit.svg",
    href:'https://x.com/kuma10296'
  },
  {
    id: 3,
    img: "/link.svg",
    href:'https://www.linkedin.com/in/ishan-singh-bhardwaj-9b3511230/'
  },
];
