import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";
import {
    BookOpen,
    Code,
    Github,
    Linkedin,
    Mail,
    Twitter,
    type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
    Github,
    Linkedin,
    Twitter,
    Code,
    BookOpen,
    Mail,
};

export function SocialLinks({
    className,
    iconSize = 18,
}: {
    className?: string;
    iconSize?: number;
}) {
    return (
        <div className={cn("flex items-center gap-1", className)}>
            {PORTFOLIO_DATA.socials.map((social) => {
                const Icon = ICONS[social.icon] ?? Code;
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="grid h-9 w-9 place-items-center rounded-full text-muted transition-[transform,color,background-color] duration-150 ease-out hover:bg-canvas-subtle hover:text-ink active:scale-90"
                    >
                        <Icon size={iconSize} />
                    </a>
                );
            })}
        </div>
    );
}
