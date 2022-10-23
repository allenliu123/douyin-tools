
export const Greeter = (name: string) => `Hello ${name}`;

import {
  parseHomeUrl,
  parseShareUrl,
  matchIdFromShareUrl
} from '@/utils/parse'
import {
  shareUrl
} from '@/utils/index'

export {
  parseHomeUrl,
  parseShareUrl,
  shareUrl,
  matchIdFromShareUrl
}