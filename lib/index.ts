
export const Greeter = (name: string) => `Hello ${name}`;

import {
  parseHomeUrl,
  parseShareUrl,
  matchIdFromShareUrl
} from '@/utils/parse'
import {
  shareUrl
} from '@/utils/index'
import generateSignature from './js/generateSignature.js'

export {
  parseHomeUrl,
  parseShareUrl,
  shareUrl,
  matchIdFromShareUrl,
  generateSignature
}