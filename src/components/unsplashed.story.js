// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs'

import UnsplashedContainer from './unsplashed'

const stories = storiesOf('UnsplashedContainer', module)
stories.addDecorator(withKnobs)

stories.add(
  'default usage',
  () => (
    <UnsplashedContainer style={{ height: 500 }}>
      <br />
    </UnsplashedContainer>
  )
)

stories.add(
  'from a specific user',
  () => (
    <UnsplashedContainer src={{ username: text('username', 'erondu') }} style={{ height: 500 }}>
      <br />
    </UnsplashedContainer>
  )
)

stories.add(
  'from a specific user likes',
  () => (
    <UnsplashedContainer src={{ username: text('username', 'erondu'), likes: true }} style={{ height: 500 }}>
      <br />
    </UnsplashedContainer>
  )
)

stories.add(
  'from a specific collection',
  () => (
    <UnsplashedContainer src={{ collectionId: text('collectionId', '190727') }} style={{ height: 500 }}>
      <br />
    </UnsplashedContainer>
  )
)

stories.add(
  'with custom dimensions',
  () => (
    <UnsplashedContainer size={{ width: number('width', 1600), height: number('height', 900) }} style={{ height: number('height', 900) }}>
      <br />
    </UnsplashedContainer>
  )
)

stories.add(
  'with keywords',
  () => (
    <UnsplashedContainer keywords={array('keywords', ['nature', 'water'])} style={{ height: 500 }}>
      <br />
    </UnsplashedContainer>
  )
)
