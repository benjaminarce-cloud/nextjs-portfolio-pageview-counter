import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function ContactPage() {
  const socials = [
    {
      name: "Email",
      href: "mailto:arceb3013@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/benjaminarce-cloud",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "www.linkedin.com/in/arcebenjamin",
      icon: Linkedin,
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact
          </h1>
          <p className="text-zinc-400">
            Easiest way to reach me is email. You can also see what I’m building
            on GitHub or connect on LinkedIn.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {socials.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.name === "Email" ? undefined : "_blank"}
              rel={item.name === "Email" ? undefined : "noreferrer"}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900 transition"
            >
              <item.icon className="h-5 w-5 text-zinc-400" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
