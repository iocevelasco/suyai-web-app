import React from 'react'
import ActivitiesSection from './ActivitiesSection'
import { LadingPageWrapper } from './Home.style'
import Hero from 'ui/components/Hero'
import LayoutLadingSection from 'ui/Layouts/LayoutLadingSection'
import { HomeMessage } from './Home.utils'
import LadingLayout from 'ui/Layouts/LadingLayout'

export default function LadingPage() {
  return (
    <LadingLayout>
      <LadingPageWrapper>
        <Hero
          title={HomeMessage.HeroTitle}
          textButton={HomeMessage.HeroButtonText}
          background={HomeMessage.HeroBackground}
        />
        <LayoutLadingSection title={HomeMessage.TitleActivitiesSection}>
          <ActivitiesSection />
        </LayoutLadingSection>
      </LadingPageWrapper>
    </LadingLayout>
  )
}
