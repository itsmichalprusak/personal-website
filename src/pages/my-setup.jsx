import { NextSeo } from 'next-seo';
import  siteMeta from '../data/siteMeta'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { SimpleLayout } from '../components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function MySetup() {
  return (
    <>
    <NextSeo
      title="My Setup - Michał Prusak"
      description={siteMeta.description}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/my-setup`}
    />
      <SimpleLayout
        title="Software and hardware I use"
        intro="I get asked this rather a lot, so here's a hefty list!"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1, 16GB RAM (2020)">
              I was using a PC based on Intel Core i7-4790k and MSI GTX 770, but those days are long gone.
              I ditched the idea of working on a PC in favor of being flexible - my MacBook serves just that purpose and more.
              It also plays great with my other Apple devices.
            </Tool>
            <Tool title="EIZO Foris FS2434 x2">
              The best multi-purpose monitor I could think of. Great colors, low input lag.
              Ideal for a combination of graphic design, video editing and long hours of coding.
            </Tool>
            <Tool title="Wacom Cintiq Pro 16">
              I was skeptic at first when moving to a graphic tablet with a screen, but this transition was definitely
              worth it. The best pen display I could ever go for.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="JetBrains IntelliJ IDEA">
              My long-term favorite IDE when it comes to Java, and basically everything else. While I also use
              other JetBrains products for different purposes, like WebStorm or PhpStorm, they are all built on the same
              platform as IDEA.
            </Tool>
            <Tool title="DBngin">
              One-click provisioning of all possible databases I could need for my project, all through Homebrew.
            </Tool>
            <Tool title="TablePlus">
              This elephant-iconed app is great for working with databases. Makes admin work a lot easier,
              especially when there's not enough time to create various admin interfaces for the same purpose.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Adobe Photoshop">
              For day-to-day graphic design purposes and photo editing. Looks complicated at first, but
              it definitely is powerful once you master it.
            </Tool>
            <Tool title="Adobe Illustrator">
              When there's need for vector graphics, or as the name suggests, illustrations, there's Illustrator.
              Fun to work with!
            </Tool>
            <Tool title="Adobe Premiere Pro">
              One of the best video editing software I came across.
            </Tool>
            <Tool title="Adobe After Effects">
              For that sprinkle of VFX and more sophisticated transitions in my video projects.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
