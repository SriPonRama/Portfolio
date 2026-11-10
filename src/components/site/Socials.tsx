import { Mail } from "lucide-react";
import { site, socials } from "@/content/profile";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "@/components/ui/icons";

const links = [
  { href: socials.github.url, label: "GitHub", Icon: GitHubIcon },
  { href: socials.linkedin.url, label: "LinkedIn", Icon: LinkedInIcon },
  { href: socials.leetcode.url, label: "LeetCode", Icon: LeetCodeIcon },
];

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`} aria-label="Social links">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-subtle transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
      <li>
        <a
          href={`mailto:${site.email}`}
          aria-label={`Email ${site.email}`}
          title="Email"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-subtle transition-colors hover:bg-surface-2 hover:text-fg"
        >
          <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
