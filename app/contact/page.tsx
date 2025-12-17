import { Mail, Github, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";

export default function ContactPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Easiest way to reach me is email. You can also see what I’m building
            on GitHub or connect with me on LinkedIn.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL_HERE"
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900 transition"
          >
            <Mail className="h-5 w-5 text-zinc-400" />
            <span>Email</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/manuelarceaguirre"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900 transition"
          >
            <Github className="h-5 w-5 text-zinc-400" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arcebenjamin/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900 transition"
          >
            <Linkedin className="h-5 w-5 text-zinc-400" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
