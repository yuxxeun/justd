"use client"

import type { FC, SVGProps } from "react"

import { Logo } from "@/components/logo"
import {
  IconBell,
  IconBrandAdobe,
  IconBrandFramer,
  IconBrandGithub,
  IconBrandJustd,
  IconChartBar,
  IconCommandFill,
} from "justd-icons"
import { ListBox, ListBoxItem } from "react-aria-components"

function getComponentName(url: string): string {
  const lastSegment = url.split("/").pop()
  return lastSegment?.split("#")[0].replace(".html", "") || ""
}

export function DocRefs({ references }: { references: string[] }) {
  const urls = references.map((url: string) => {
    let title = ""
    let icon: FC<SVGProps<SVGSVGElement>>

    switch (true) {
      case url.includes("react-spectrum"):
        title = getComponentName(url)
        icon = IconBrandAdobe
        break
      case url.includes("icons"):
        title = "Explore"
        icon = IconBrandJustd
        break
      case url.includes("recharts"):
        title = "Props"
        icon = IconChartBar
        break
      case url.includes("framer"):
        title = "Motion"
        icon = IconBrandFramer
        break
      case url.includes("docs/2.x/components"):
        title = "Internal"
        icon = Logo
        break
      case url.includes("sonner"):
        title = "Sonner"
        icon = IconBell
        break
      case url.includes("cmdk"):
        title = "Cmdk"
        icon = IconCommandFill
        break
      case url.includes("github"):
        title = "Github"
        icon = IconBrandGithub
        break
      case url.includes("embla-carousel"):
        title = "Props"
        icon = IconEmblaCarousel
        break
      default:
        icon = () => null
    }

    return {
      url,
      title,
      icon,
    }
  })

  return (
    <ListBox
      orientation="horizontal"
      className="not-prose mt-6 flex gap-x-2"
      aria-label="Link References"
      items={urls}
    >
      {(item: { url: string; title: string; icon: FC<SVGProps<SVGSVGElement>> }) => (
        <ListBoxItem
          textValue={item.title}
          target="_blank"
          className="flex items-center rounded-full bg-fg/5 px-4 py-2 font-mono text-xs uppercase ring-1 ring-fg/10 duration-200 data-hovered:bg-fg/10 data-hovered:ring-fg/15"
          id={item.url}
          href={item.url}
        >
          {item.icon && <item.icon className="-ml-0.5 mr-2 size-4 shrink-0" />}

          {item.title === "Props Reference" ? (
            <span>
              Props <span className="hidden sm:inline">Reference</span>
            </span>
          ) : (
            <span>{item.title}</span>
          )}
        </ListBoxItem>
      )}
    </ListBox>
  )
}

function IconEmblaCarousel() {
  return (
    <svg
      data-slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-5 -5 160 160"
    >
      <defs>
        <linearGradient id="dark-theme-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8ab4f8" />
          <stop offset="100%" stopColor="#c1a8e2" />
        </linearGradient>
        <path
          id="dark-theme-logo"
          d="M93 .03l.46.06.47.08.24.05.23.05.23.07.24.07.47.16.23.1.24.1.45.2.23.1.44.24.44.26L98 2l.6.48.38.34.36.36.17.2.1.12.1.13.1.12.1.14.1.12.2.26.1.14.1.13.17.27.18.3.16.3.16.32.08.17.15.36.07.2.1.2.07.2.08.2.07.23.08.23.07.23.16.5.08.26.08.28.1.3.63 2.35.1.4.14.54.13.55.24 1.13.1.58.12.57.1.6.18 1.2.1.6.08.63.07.62.07.64.06.64.06.65.05.65.04.67.05.67.1 2.06.04 2.87-.03 2.23-.06 1.53-.02.78-.05.78-.04.8-.1 1.6-.07.82-.06.82-.26 2.8-.02.26-.03.26-.02.27-.04.52-.04.5-.02.24-.03.48-.02.22-.01.23v.23l-.02.2-.01.22v.4l-.03.37v.17l-.01.18-.02.32v.3.13.25l-.01.2.01.1V46v.08.06.05.05l.01.03.01.02h.01.02l.03.01h.67l.13-.01h.14.15.16l.34-.02.37-.02.2-.01h.42l.46-.04h.24l.23-.02.25-.02.26-.02.27-.02h.27l.26-.02.28-.02.3-.03.3-.02h.28l.6-.04.3-.03.62-.05.3-.03 1.4-.1 1.37-.1 1.36-.08 2.64-.1 1.3-.03 1.26-.02h1.25 1.22l1.2.02 1.17.03 2.27.1 1.1.08 1.07.08 1.05.1 1.03.1 1 .12.97.13.94.15.93.16.88.17.87.2.83.2.8.2.78.22.75.24.72.24.7.26.67.27.63.28.6.3.58.3.54.32.5.33.5.35.45.35.42.36.38.38.36.4.14.17.27.33.12.16.12.17.1.17.1.16.2.3.1.17.25.47.08.16.07.15.06.17.16.47.1.33.06.33.03.16.02.18.02.16v.17l.02.36v.18l-.02.36-.01.2-.02.2-.01.2-.06.4-.04.2-.04.22-.03.2-.08.35-.1.35-.12.36-.13.36-.15.37-.17.38-.18.37-.2.4-.22.38-.24.4-.25.4-.26.4-.6.8-.64.82-.36.4-.35.42-1.18 1.24-.42.43-.88.84-.46.43-.96.84-.5.43-1.03.84-.53.43-.55.4-1.7 1.25-.6.4-1.22.8-.62.4-.63.4-.38.24-.4.24-.42.25-.42.26-.45.26-.46.26-.96.54-.5.3-.5.27-.5.28-.5.3-1.03.56-.52.27-.5.28-.52.27-1 .53-.5.26-.5.25-.48.25-.92.46-.86.42-.42.2-.38.2-.37.17-.35.17-.32.15-.3.13-.27.1-.26.1-.2.1-.2.06-.17.06-.12.03-.1.02-.05-.02-.04-.04-.04-.06-.03-.08-.03-.1-.02-.1-.01-.13-.02-.14v-.15l.01-.17v-.2l.01-.18.02-.2.01-.2.05-.44.03-.22.1-.7.04-.24.1-.47.05-.24.1-.45.06-.22.05-.22.07-.2.05-.2.07-.2.07-.18.12-.32.06-.15.07-.13.07-.12.06-.1.07-.1.06-.06.06-.05.1-.04.1-.05.05-.04.07-.04.06-.03.07-.03.08-.04.16-.1.18-.08.1-.06.1-.04.2-.12.32-.16.22-.12.23-.13.24-.12.37-.2.12-.07.25-.13.13-.07.25-.13.14-.06.12-.07.13-.06.13-.07.13-.06 1.37-.7.67-.36.67-.38.66-.36.65-.36.64-.37 1.26-.75.6-.36 1.2-.75.58-.38.57-.36.57-.38.55-.37.54-.38.53-.36.52-.37 1-.74.47-.35.46-.37.45-.36.44-.36.84-.7.4-.35.74-.68.67-.67.6-.65.28-.32.27-.3.24-.3.23-.3.2-.3.36-.58.14-.28.14-.3.12-.27.1-.27.08-.27.06-.26.04-.26.02-.26v-.5l-.03-.25-.05-.24-.07-.22-.08-.23-.1-.23-.12-.22-.14-.2-.32-.42-.4-.4-.48-.38-.26-.18-.28-.18-.6-.34-.68-.33-.37-.15-.4-.15-.4-.14-.42-.14-.43-.14-.46-.14-.47-.13-.5-.12-.5-.1-.52-.1-.47-.1-.5-.1-.53-.08-.58-.06-.6-.08-.63-.06-.65-.06-.67-.05-.7-.05-.72-.05-.74-.04-1.52-.06-.8-.03-.8-.02h-.8l-1.67-.02-.83.01h-.85l-2.57.03-.85.03-.86.03-.86.02-.84.05-.85.03-.84.06-.82.05-.83.06-.8.05-1.57.14-.76.07-.75.08-.72.08-1.4.2-.65.1-3.42.52-1.4 7.83-1.46 7.83 6.8 7.94 1.04 1.25 1.03 1.23 1 1.2.98 1.2.95 1.2.93 1.18.9 1.16.88 1.15.87 1.13.84 1.13.82 1.1.8 1.1.78 1.1.75 1.07.73 1.07 1.4 2.1.67 1.03.65 1.02.62 1 .6 1 .58.98.56.98.54.95.52.96.5.95.48.93.45.92.43.9.42.9.4.9.37.88.36.9.33.86.32.86.3.86.28.84.25.83.23.83.15.52.12.5.14.5.1.48.1.46.1.45.1.44.08.44.08.4.06.4.07.4.04.4.04.37.03.37.02.36.02.34v.67l-.03.64-.03.3-.04.3-.05.3-.12.58-.08.27-.1.28-.2.52-.12.26-.12.25-.13.26-.14.25-.3.5-.17.24-.18.24-.2.24-.2.23-.2.24-.3.33-.3.3-.32.3-.34.26-.35.24-.36.23-.38.2-.4.2-.4.17-.42.14-.43.13-.92.2-.5.07-.5.05h-.5-1.08l-.56-.04-.57-.04-.6-.08-.6-.1-.62-.1-.66-.13-.65-.15-.68-.16-1.4-.4-.73-.22-.75-.25-.77-.26-.78-.3-.8-.3-.82-.32-.84-.34-.86-.37-1.8-.8-.92-.43-.93-.45-.33-.15-.34-.17-.37-.2-.4-.2-.42-.22-.43-.25-.45-.25-.46-.26-.48-.28-1.5-.9-.5-.32-.53-.3-1.04-.65-.53-.32-.53-.33-.5-.34-.52-.32-1-.64-.5-.33-.47-.3-.46-.3-.45-.3-.42-.3-.4-.28-.4-.27-.36-.24-.34-.25-.3-.23-.3-.2-.25-.2-.22-.17-.18-.17-.16-.13-.1-.12-.08-.1-.04-.07h0l.01-.04.02-.06.05-.05v-.04l.06-.06.1-.07.2-.16.06-.04.07-.05.06-.04.07-.04.07-.05.08-.05.08-.04.07-.05.16-.1.1-.05.1-.04.08-.06.4-.2.1-.06.1-.05.1-.04.22-.1.2-.1 2.62-1.1 9.13 5.35.92.52.9.5.88.5.87.47.84.44.83.43 1.6.8.78.37.74.34.74.33.72.3.7.28.68.27.66.24.63.22.63.2.6.18.58.16.56.14.54.12.52.1.5.08.48.07.46.03h.43.43l.4-.03.38-.04.35-.06.34-.1.32-.1.3-.13.27-.15.25-.17.23-.18.2-.22.18-.23.16-.26.22-.44.16-.5.1-.53.06-.6.02-.63-.03-.7-.08-.72-.12-.78-.18-.8-.2-.86-.26-.9-.3-.93-.35-.97-.38-1-.43-1.04-.47-1.07-.5-1.1-.55-1.14-.6-1.17-.63-1.18-.66-1.23-.7-1.24-.74-1.27-.77-1.3-1.64-2.65-.87-1.35-.9-1.37-.93-1.4-.97-1.4-2.03-2.84-1.05-1.43-1.1-1.46-1.1-1.45-1.15-1.48-1.16-1.47-1.2-1.48-1.22-1.48-1.23-1.5-4.17-4.9-2.05 7.54-.74 2.67-.76 2.65-.78 2.62-.8 2.57-.8 2.55-.84 2.5-.84 2.46-.87 2.43-.88 2.38-.88 2.35-.9 2.3-.9 2.25-.92 2.2-.94 2.14-.93 2.1-.95 2.05-.96 1.98-.96 1.93-.98 1.88-.96 1.82-.98 1.74-.98 1.7-.98 1.63-.98 1.56-1 1.5-.97 1.42-.98 1.35-.97 1.28-.98 1.2-.97 1.13-.96 1.05-.95.97-.96.88-.94.8-.93.73-.92.64-.92.55-.9.46-.88.37-.88.28-.2.05-.42.08-.22.02-.43.04h-.68l-.23-.02-.24-.02-.23-.03-.23-.04-.47-.1-.23-.06-.24-.06-.23-.08-.23-.07-.47-.18-.7-.3-.44-.22-.23-.12-.65-.4-.2-.14-.6-.45-.57-.5-.18-.17-.34-.38-.18-.2-.2-.25-.18-.26-.17-.28-.2-.3-.17-.32-.18-.33-.18-.36-.34-.76-.34-.82-.16-.43-.32-.9-.32-.94-.14-.5-.15-.5-.28-1.02-.26-1.06-.13-.54-.23-1.1-.22-1.12-.1-.56-.18-1.12-.08-.57-.14-1.12-.05-.56-.1-1.13-.08-1.1-.01-.54-.02-.4-.02-.44v-4.98l.03-1.26.01-.64.02-.64.01-.65.06-1.92.05-1.25.03-.6.02-.6.03-.58.02-.56.04-.54.06-1 .03-.47.03-.43.03-.4.03-.37.04-.34.03-.3.03-.26.04-.22.03-.18.03-.13.03-.08.03-.04.02.01.02-.01.03.02h.03l.03.02.03.01.1.05.03.03.16.1.05.03.12.08.07.04.07.05.3.2.1.06.07.05.1.06.1.07.08.05.2.14.1.06.3.2.3.22.2.14.2.16 2.5 1.85-.24 5.9-.03.64-.01.66v.65l-.02 1.3v1.3l.03 1.93.04 1.28.03.63.02.62.04.6.04.62.12 1.8.1 1.14.06.56.05.55.13 1.06.14 1.02.08.48.07.47.08.46.08.43.1.44.1.4.08.4.1.37.1.36.1.34.2.6.2.55.22.52.2.5.22.45.23.42.24.38.24.36.24.32.26.3.26.26.28.22.27.2.28.15.3.13.3.08.3.06.3.02h.33l.33-.05.34-.08.36-.12.35-.14.38-.18.38-.22.4-.24.4-.3.42-.32.42-.35.44-.4.44-.42.45-.46.47-.5.48-.53.5-.56.5-.6.5-.63.53-.67.55-.7.55-.73.57-.77.6-.87.63-.9.62-.95.63-.97.62-1.02.63-1.05.64-1.1.63-1.13.64-1.15.63-1.2.63-1.23.64-1.26 1.25-2.6.63-1.35.63-1.37.63-1.4.63-1.42.62-1.46.62-1.47.6-1.5.6-1.52.6-1.54.6-1.56 1.2-3.2.6-1.62.57-1.64.58-1.64.57-1.67.56-1.67.55-1.7.54-1.7.53-1.7.52-1.73.52-1.74.5-1.74.5-1.75.96-3.52 2.2-8.17-5.1-5.15-2.6-2.6-.4-.38-.18-.2-.2-.18-.2-.2-.18-.17-.18-.2-.36-.35-.16-.17-.66-.62-.14-.14-.14-.15-.28-.26-.12-.13-.12-.12-.12-.1-.3-.3-.1-.08-2.14-1.95-18.45 5.42-1.48.46-1.46.44-1.43.46-1.4.44-1.38.45-1.36.44-1.34.45-1.32.45-1.3.45-2.52.88-1.23.46-1.2.44-1.2.45-1.18.46-1.15.45-1.14.46-1.13.47-2.2.92-1.08.47-1.06.47-1.05.47-2.06.96-2 1-1.96 1-1.92 1.02-.95.52-.93.5-.93.54-1.97.98-.9.55-.9.56-.86.53-.82.53-.8.53-.76.52-.72.5-.7.5-.68.5-.63.5-.6.48-.58.5-.54.48-.5.46-.48.47-.45.45-.4.45-.4.44-.35.43-.32.43-.3.42-.26.4-.22.4-.2.4-.16.4-.13.38-.1.36-.07.36-.04.35v.35l.03.33.07.33.1.3.13.3.17.3.2.3.23.28.26.26.3.25.33.25.36.24.4.22.3.16.32.15.35.15.36.15.37.13.4.14.42.13.42.12.45.13.47.12.48.1 1 .2.52.1.54.1.56.1.57.08.58.08.6.08.6.07 1.25.13.64.05 1.32.1.67.04.68.03.7.04.7.02.72.02 1.44.02h2.22l.75-.02.76-.01.76-.02.77-.03.78-.04.14-.01.15-.01h.14l.15-.01.28-.02.28-.01h.15.56.13l.14-.01.52-.01.12-.01h.26l.1-.01h.24l.1-.01h.1l.2-.01.1-.01.1.01h.08l.08-.01h.5l.1.03.1.04.1.06.1.07.12.08.12.1.14.1.15.1.14.12.15.14.16.15.63.63.16.17.48.54.16.2.3.37.14.18.28.35.12.18.12.17.22.32.1.16.1.14.13.26.05.12.04.1.03.1.01.1v.07l-.02.06-.03.03-.25.07h-.08l-.2.02-.3.06h-.13l-.28.03-.14.02-.16.01-.16.02h-.17l-.35.03-.37.04-.2.01-.2.03-.62.04-.22.02-.45.04h-.23l-.23.02-.72.04h-.25l-.23.01-.25.02-1.03.05-1 .06-1 .03-.98.04-.97.03-1.9.02H26.3l-.9-.02h-.9l-.87-.04-.87-.03-1.67-.1-.82-.07-.8-.06-.8-.08-1.54-.18-1.48-.2-.7-.1-1.4-.26-.67-.14-.66-.15-.63-.15-.63-.17-1.2-.34-.58-.2-.55-.2-.54-.2-.53-.2-.52-.22-.5-.23-.48-.22-.46-.24-.45-.26-.4-.23-.4-.25-.38-.25-.35-.25-.34-.25-.33-.27-.6-.52-.28-.27-.25-.27-.24-.28-.23-.28-.4-.6-.18-.3-.16-.3-.14-.3-.13-.3-.1-.3-.17-.63-.05-.32-.05-.33-.03-.34-.01-.33.01-.35.02-.35.04-.34.05-.36.07-.36.08-.37.1-.37.12-.37.13-.38.15-.4.17-.4.18-.4.4-.8.22-.4.74-1.17.4-.57.44-.6.47-.58.5-.6.53-.6 1.14-1.18.62-.6.64-.6.68-.6.7-.6.73-.6.76-.6 1.6-1.2.84-.6.9-.6 1.83-1.2.96-.6 1-.6 1.02-.6 1.04-.6 1.08-.6 1.1-.6 1.13-.6 1.15-.6 1.2-.6 1.22-.6 1.23-.6 1.27-.6 1.3-.6 1.32-.6 1.35-.6 1.38-.6 1.4-.6 1.43-.6 1.46-.6.65-.27.7-.28.77-.3 1.67-.62.9-.34 1.9-.7 1-.35 1.03-.37 1.07-.37 1.07-.38 1.1-.37 1.1-.38 1.12-.38 1.14-.38 1.13-.38 2.26-.75 5.45-1.76 1.04-.32 1-.3.96-.3 1.83-.55.85-.25.8-.23.75-.2.7-.2.63-.17.58-.14.5-.13.44-.1.37-.08.3-.05.22-.01 1.55-.03-1.57-1.52-.26-.24-.3-.28-.32-.28-.36-.3-.38-.34-.4-.35-.45-.38-.46-.4-.5-.4-.5-.42-.54-.43-.54-.45-.58-.46-1.2-.94-.6-.48-1.28-1-.65-.5-1.32-1.02-1.34-1.02-.7-.5-.67-.5-.68-.5-1.34-1-.66-.5-.66-.48-.65-.47-.64-.46-.63-.46-.6-.43-.6-.42-.58-.42-.56-.4-.56-.38-.52-.36-.52-.34-1.54-1-.78-.5-.76-.48-1.54-.92-.77-.45-.76-.43-1.52-.84-.75-.4-.74-.4-.74-.38-.72-.36-1.44-.68-.7-.32-1.38-.6-.67-.27-.66-.27-.65-.25-.64-.23-.6-.22-1.2-.4-.58-.17-.55-.15-.54-.14-.53-.12-.5-.1-.48-.08-.48-.07-.44-.05-.43-.03h-.78l-.36.03-.34.04-.3.07-.35.1-.33.14-.3.2-.27.22-.23.25-.2.28-.18.32-.15.35-.13.38-.1.42-.06.44-.04.48-.01.5.02.53.05.56.06.6.1.62.12.63.15.67.18.7.2.73.22.73.55 1.57.3.8.33.83.36.86.4.88.4.9.43.9.47.94.48.94.5.97.53.98.56 1 .58 1.02.6 1.03.64 1.04.65 1.06.67 1.07 2.8 4.43-1.25 2.86-.05.12-.1.22-.05.13-.1.23-.06.1-.05.12-.05.1-.05.12-.04.1-.1.2-.04.1-.1.2-.03.1-.05.1-.1.24-.05.08-.03.07-.13.26-.1.16-.02.04-.03.04-.05.1-.07.07h-.05l-.16-.16-.12-.13-.13-.18-.16-.2-.18-.24-.2-.28-.22-.3-.23-.33-.5-.75-.27-.4-.28-.43-.3-.45L30 56l-.63-1-.66-1.03-1-1.6-.34-.56-.33-.55-.34-.54-.65-1.1-.33-.54-.3-.53-.32-.53-.58-1-.28-.5-.27-.47-.25-.46-.25-.43-.22-.4-.4-.76-.26-.48-.25-.5-.24-.5-.48-1.02-.22-.52-.45-1.05-.6-1.6-.2-.54-.18-.53-.2-.53-.34-1.06-.16-.54-.3-1.04-.28-1.03-.24-1-.1-.5-.2-.96-.08-.47-.14-.9-.06-.43-.04-.42-.04-.4-.02-.4v-.38l-.01-.36.01-.36v-.33l.06-.62.05-.27.1-.5.07-.24.08-.24.08-.25.08-.23.2-.48.2-.46.24-.46.12-.2.27-.44.14-.2.44-.6.16-.2.32-.37.17-.17.17-.18.17-.16.18-.17.37-.3.18-.14.2-.14L22 19l.38-.24.6-.3.4-.16.4-.13.73-.15.77-.1.8-.07.86-.01.9.03.94.1.96.13 1 .2 1.04.22 1.07.27 1.12.33 1.14.36 1.17.42 1.2.44 1.24.5 1.26.54 1.3.6 1.3.63 1.34.66 1.37.7 1.38.74 1.4.78 1.43.83 1.45.86 1.46.9 1.48.94 1.5.98 1.5 1 1.53 1.05 1.54 1.08 1.55 1.12 1.56 1.15 1.58 1.17 1.58 1.22 1.6 1.25 1.6 1.28 1.6 1.3 1.6 1.34 1.6 1.37 1.6 1.4 5.42 4.82L88.7 49l1.12-.2 1.07-.2.52-.1.75-.15.24-.03.46-.1.22-.04.43-.07.4-.07.2-.03.18-.03.35-.05.16-.02.15-.03.15-.02.27-.04.12-.01h.1.56l.08-.02.1-.04.08-.04.1-.06.16-.16.07-.1.08-.1.07-.13.07-.15.06-.16.08-.18.07-.2.06-.22.06-.23.06-.25.06-.27.07-.28.05-.3.06-.32.05-.34.06-.36.05-.4.06-.4.05-.43.05-.44.06-.47.05-.5.04-.5.05-.53.05-.56.05-.58.05-.6.05-.63.04-.65.05-.68.05-.7.05-.73.04-.75.06-1.1.05-1.1.04-1.06.06-2.1v-3l-.02-.97-.02-.96-.08-1.85-.05-.9-.07-.88-.07-.86-.08-.84-.1-.82-.1-.8-.1-.77-.1-.75-.13-.72-.12-.7-.14-.67-.15-.65-.15-.62-.16-.6-.17-.57-.17-.54-.2-.52-.2-.48-.2-.47-.2-.42-.22-.4-.22-.37-.23-.34-.23-.3-.24-.27-.25-.24-.25-.2-.27-.17-.26-.13-.3-.1-.3-.11-.3-.05-.3-.02-.3.01L92 6l-.33.05-.34.1-.34.12-.35.14-.72.4-.37.24-.38.26-.38.3-.4.32-.4.35-.4.38-.4.4-.4.44-.44.46-.43.48-.44.5-.45.55-.46.56-.45.6-.47.62-.48.64-.47.7-.5.7-.5.72-.5.77-.5.78-.5.8-.5.84-.53.86-1.06 1.8-.54.95-4.72 8.25-3.1.4-.1.01-.12.01h-.1-.12-.1-.1-.1-.8-.08-.07l-.1-.01h-.07l-.07-.01-.2-.04h-.1l-.1-.04h-.04l-.1-.06-.03-.02-.01-.03-.02-.02-.01-.04v-.03l.02-.12.03-.15.06-.2.07-.22.1-.24.1-.28.12-.3.15-.32L68 29l.17-.37.18-.4.2-.4.2-.43.2-.44.22-.45.24-.47.47-.98.5-1 .26-.5.26-.52.8-1.52.28-.5.27-.5.26-.5.28-.5.52-.94.26-.45.25-.44.25-.42.25-.4.23-.4.22-.36.22-.34.2-.33.2-.3.44-.65.88-1.27.43-.6.86-1.18.83-1.1.42-.54 1.22-1.53.4-.48.4-.46.4-.45.4-.43.78-.82.4-.4.76-.74.38-.34.74-.66.74-.6.37-.28.36-.27L87 2l.7-.45.36-.2.35-.2.35-.18.34-.16.36-.15.33-.15.34-.12.34-.1.33-.1.42-.1.22-.04.2-.02.22-.02.44-.02h.23l.23.01.22.02zM93.4 54l-1.16.23-1.25.3-1.2.35-1 .34-.76.3-.45.26-.08.2 1.14 1.27 1.7 1.75 1.82 1.78 1.48 1.37.7.54.16-.26.22-.63.26-.95.3-1.2.28-1.37.28-1.57.15-1.23v-.87l-.13-.56-.27-.24-.44-.04-.75.06-1 .15zm-48.7-.1l-4.34 1.68 1.3-2.42c1.68-3.17 5.8-7.83 9.24-10.44.18-.15 1.08-.86 2.72-2.15l2.32 1.64c1.27.9 2.35 1.77 2.4 2 .05.18-.83 1-1.94 1.7-1.16.76-3.28 2.5-4.73 3.86-1.84 1.8-3.86 2.98-6.97 4.14zm24.9 58.64c-10.8-1.44-21.16-8-27.37-17.4-2.63-4.02-5.8-12.95-6-16.85-.12-2.35.07-2.6 2.43-3.7 1.4-.63 2.62-1.1 2.76-1.06.1.1.5 2.38.8 5.16 1.1 8.96 6.72 17.88 14.56 22.95 4.32 2.86 10.6 5 15.18 5.26 1.78.1 3.3.4 3.33.6.07.25-.43 1.54-1.1 2.95l-1.18 2.6-3.43-.5zm4.3-76.72c-1.95-1.94 9.3-.5 15.27 2 3.42 1.4 3.68 1.6 3.44 3.15-.18 1.3-5.97 1.87-9.46.92-2.5-.68-6.43-3.26-9.25-6.06zm24.78 60.43c1.57-1.66 3.27-3.8 3.7-4.6 1.06-2.1 1.5-2.1 2.76-.36.56.88 1.35 1.9 1.74 2.45.5.64.01 1.67-1.63 3.8-3.97 5.2-13.04 12.18-12.28 9.44 1.38-4.5 3.2-8.05 5.72-10.72zm11.5-24.45c-1.94-2.4-2.9-4.28-3.57-6.82-1.68-6.27.9-12.08 3.24-7.47 1.32 2.5 3.28 10.33 3.57 14.07.17 1.83.08 3.4-.1 3.46-.24.06-1.6-1.45-3.13-3.24z"
        />
      </defs>
      <g fill="url(#dark-theme-gradient)">
        <use xlinkHref="#dark-theme-logo" />
      </g>
    </svg>
  )
}
