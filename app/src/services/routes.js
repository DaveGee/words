import React from 'react'
import WordList from '../components/WordList'
import Card from '../components/Card'
import { TiDocumentText, TiInputChecked } from 'react-icons/lib/ti'

export const routes = [
  {
    label: <TiInputChecked />,
    screen: Card,
  },
  {
    label: <TiDocumentText />,
    screen: WordList,
  }
]

export default routes