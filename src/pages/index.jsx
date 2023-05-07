import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '../components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '../components/SocialIcons'
import portraitImage from '../images/portrait.jpg'
import siteMeta from '../data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Index() {
  return (
    <>
      <NextSeo
        title="Michał Prusak"
        description={siteMeta.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Michał Prusak"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey there! 👋
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
                Thank you for stopping by. My name is Michał Prusak and I'm a proudly self-taught software engineer!
                I've been passionate about all things tech ever since.
              </p>
              <p>
                My programming journey began when I was 13 - I was in love with <a href="https://www.minecraft.net/en-us">Minecraft</a> (to be fair, I still am!) and
                my technical nature nurtured me to modify the game. Fast forward 2 years, I got proficient with Java, and started
                coding Minecraft server plugins commercially. At this point in time, I was also experimenting with
                graphic design and web development, which ultimately gave me total confidence in those fields.
              </p>
              <p>
                I currently work at <a href="https://att.com">AT&T Services, Inc</a>.
              </p>
              <p>
                Some highlights about myself:
              </p>
              <p>
                <b>Freelance graphic designer and web developer.</b> I am a professional graphic designer and video editor. While I am a generalist programmer, I specialize in web apps, desktop apps, backend systems and MMOG development.
              </p>
              <p>
                <b>Lead developer at the </b> <a href="https://mc.skyblock.pl">SkyBlock Network</a>, the biggest polish Minecraft server network launched in 2012.
              </p>
              <p>
                <b>Co-founded </b> <a href="https://xqode.pro">xQode</a>, an international Software House shipping top-notch web solutions, headquartered in Gdynia, Poland.
              </p>
              <p>
                <b>Managed </b> <a href="https://nastoletni.pl/">Nastoletni Programiści</a>, a community uniting teenage, hobbyist developers from Poland.
              </p>
              <p>
                <b>Head of development at </b> <a href="https://strefarp.pl">Strefa RP</a>, the biggest polish Grand Theft Auto V server network launched in 2017.
              </p>
              <p>
                <b>Co-founded </b> <a href="https://itsailors.tech">IT Sailors</a>, a small, polish Digital Agency specialized in UI/UX and web development.
              </p>
              <p>
                I love learning and tinkering with new technologies. My analytical mind is super quick to pick up on anything!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
