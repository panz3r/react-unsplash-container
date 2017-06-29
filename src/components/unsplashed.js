// @flow
import React, { Component } from 'react'
import type { Children, Element } from 'react'

type Source = {
  username?: string,
  likes?: boolean,
  collectionId?: string
}

type SizingProps = {
  height: number,
  width: number
}

export type Props = {
  children: Children,
  style: Object,
  src?: Source,
  size?: SizingProps,
  keywords?: string | Array<string>
}

export default ({ children, src, size, keywords, style }: Props): Element<any> => {
  const { unsplashedContainerStyle } = styles

  let sourceUrl: string = '//source.unsplash.com'
  if (src) {
    const { username, likes, collectionId } = src
    if (username) {
      sourceUrl = `${sourceUrl}/user/${username}${likes ? '/likes' : ''}`
    }
    else if (collectionId) {
      sourceUrl = `${sourceUrl}/collection/${collectionId}`
    }
    else {
      sourceUrl = `${sourceUrl}/random`
    }
  }
  else {
    sourceUrl = `${sourceUrl}/random`
  }

  if (size) {
    const { width, height } = size
    sourceUrl = `${sourceUrl}/${width}x${height}`
  }

  if (keywords) {
    if (typeof keywords === 'string') {
      sourceUrl = `${sourceUrl}/?${keywords}`
    } else if (Array.isArray(keywords)) {
      sourceUrl = `${sourceUrl}/?${keywords.join(',')}`
    }
  }

  return (
    <div style={{ ...style, ...unsplashedContainerStyle, backgroundImage: `url(${sourceUrl})` }}>
      {children}
    </div>
  )
}

const styles = {
  unsplashedContainerStyle: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}