import React from 'react'
import { HeroInfo, HeroTitle, HeroWrapper } from './Hero.style'
import Button from 'ui/components/Button'

export type HeroProps = {
  title: string
  textButton: string
  background: string
}

export default function Hero({ title, textButton, background }: HeroProps) {
  return (
    <HeroWrapper>
      <HeroInfo>
        <HeroTitle variant="h2">{title}</HeroTitle>
        <Button variant="contained">{textButton}</Button>
      </HeroInfo>
    </HeroWrapper>
  )
}
