
import logoSkyblock from '../images/logos/skb.png'
import logoMatysko from '../images/logos/matysko.png'
import logoStrefa from '../images/logos/strefa rp.png'
import logoFlaffr from '../images/logos/flaffr.png'
import logoSkole from '../images/logos/skole.png'
import logoProaudio from '../images/logos/proaudio.png'
import logoPersonal from '../images/logos/personal.png'

const siteMeta = {
    title: "Michał Prusak",
    description: "Michał Prusak is a software engineer, passionate about all things tech. Proficient with Java, PHP, C# and ready to pick up on any other tech!",
    copyright: "Michał Prusak",
    author: {
        name: "Michał Prusak",
        email: "michalprusak@hotmail.com",
        github: "https://github.com/itsmichalprusak",
        linkedin: "https://linkedin.com/in/michałprusak",
    },
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL
}

export const projects = [
  {
    name: 'SkyBlock',
    description:
      'Public-facing website integrated with game servers, admin tools in PHP (basing on Laravel), game server software (Java).',
    link: { href: 'https://mc.skyblock.pl', label: 'mc.skyblock.pl' },
    logo: logoSkyblock,
  },
  {
    name: 'Matysko',
    description:
      'Company website + a back-end system for tracking appointments and crew availability (PHP, Laravel), CRM system (C#).',
    link: { href: 'https://www.matysko.com', label: 'matysko.com' },
    logo: logoMatysko,
  },
  {
    name: 'Strefa RP',
    description:
      'Project website and forums for a GTA V game server network, various back-end tools (Node, PHP, C#), game server software ran in clustered environment (C#, MongoDB).',
    link: { href: 'https://github.com/itsmichalprusak/strefa-fivem', label: 'github.com' },
    logo: logoStrefa,
  },
  {
    name: 'Flaffr',
    description:
      'Web + mobile client for an online dating app, RESTful API (Java), Firebase and GCP integration, backed by sharded Cassandra.',
    link: { href: 'https://github.com/itsmichalprusak/flaffr-web/', label: 'github.com' },
    logo: logoFlaffr,
  },
  {
    name: 'Skole',
    description:
      'Full software suite for tracking grades, lessons, and student documentation, adapted for polish schools. Web + mobile client, backend in Elixir, with Cassandra for database.',
    link: { href: 'https://github.com/itsskole', label: 'github.com' },
    logo: logoSkole,
  },
  {
    name: 'ProAudio',
    description:
      'Interactive website for a polish company specialized in professional HiFi equipment installation. iPad app (Swift) for use in local store, allowing customers to pick their configuration + Java backend for syncing customer info.',
    link: { href: 'http://homeaudio.pro-audio.pl/', label: 'homeaudio.pro-audio.pl' },
    logo: logoProaudio,
  },
  {
    name: 'Personal website',
    description:
      'My portfolio - the very website you are on right now! NextJS, MDX, Tailwind CSS, Headless UI.',
    link: { href: 'https://github.com/itsmichalprusak/personal-website', label: 'github.com' },
    logo: logoPersonal,
  },

]

export default siteMeta;