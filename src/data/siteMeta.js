
import logoSkyblock from '../images/logos/skb.jpg'
import logoMatysko from '../images/logos/matysko.png'
import logoStrefa from '../images/logos/strefa rp.jpg'
import logoFlaffr from '../images/logos/flaffr.jpg'
import logoSkole from '../images/logos/skole.jpg'

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
      'Public-facing website integrated with game servers, admin tools, game server software.',
    link: { href: 'https://mc.skyblock.pl', label: 'mc.skyblock.pl' },
    logo: logoSkyblock,
  },
  {
    name: 'Matysko',
    description:
      'Company website + a back-end system for tracking appointments and crew availability, CRM system.',
    link: { href: 'https://www.matysko.com', label: 'matysko.com' },
    logo: logoMatysko,
  },
  {
    name: 'Strefa RP',
    description:
      'Project website and forums for a GTA V game server network, various back-end tools, game server software ran in clustered environment.',
    link: { href: 'https://github.com/itsmichalprusak/strefa-fivem', label: 'github.com' },
    logo: logoStrefa,
  },
  {
    name: 'Flaffr',
    description:
      'Web + mobile client for an online dating app, RESTful API, Firebase and GCP integration, backed by sharded Cassandra.',
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

]

export default siteMeta;