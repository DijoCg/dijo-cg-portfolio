import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-ink/80 backdrop-blur-xl">
            <nav className="wrap flex h-[74px] items-center justify-between">
                <a href="#home" className="font-mono text-lg font-medium">
                    Dijo C<span className="text-violet">.</span>G
                </a>
                <div className="hidden items-center gap-6 lg:flex">
                    {links.map(([n, h]) => (
                        <a className="navlink" href={h} key={n}>
                            {n}
                        </a>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="hidden rounded-full border border-violet/40 px-4 py-2 text-xs text-violet transition hover:bg-violet hover:text-white sm:block"
                >
                    Let's talk ↗
                </a>
                <button
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </nav>
            {open && (
                <div className="wrap flex flex-col gap-4 border-t border-white/10 py-5 lg:hidden">
                    {links.map(([n, h]) => (
                        <a
                            key={n}
                            href={h}
                            onClick={() => setOpen(false)}
                            className="text-sm text-zinc-300"
                        >
                            {n}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
