export const OPEN_COMMAND_EVENT = "open-command-palette";

/** Fire from anywhere (buttons, shortcuts) to open the ⌘K palette. */
export function openCommandPalette() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event(OPEN_COMMAND_EVENT));
}

/** Smooth-scroll to an in-page anchor, or navigate to it if not present. */
export function goToSection(hash: string) {
    const id = hash.replace(/^\/?#/, "");
    const el =
        typeof document !== "undefined" ? document.getElementById(id) : null;
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
        return true;
    }
    return false;
}
