import React from "react"
import { ITwin } from "types/common"

export interface ITwoColumnWithVideo {
  heading?: string | React.ReactNode
  description?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  watchVideoButtonText?: string
  watchVideoYoutubeUrl?: string
  imageSrc?: string
  imageCss?: ITwin | null
  imageDecoratorBlob?: boolean
}
