
import {
  parseHomeUrl,
  parseShareUrl
} from '../lib/utils/parse'

test('test function parseHomeUrl', () => {
  expect(parseHomeUrl('https://www.douyin.com/user/7144591342910344456')).toBe('7144591342910344456');
});

test('test function parseHomeUrl', () => {
  expect(parseHomeUrl('aaaa')).toBe('');
});

test('test function parseShareUrl', () => {
  const text = '5.10 OKW:/ 美食这么多！一定要好好爱生活哦～# 生活 # vlog日常 # 当然要拍照记录啊 https://v.douyin.com/6aqTHHa/ 复制此链接，打开Dou音搜索，直接观看视频！'
  expect(parseShareUrl(text)).toBe('https://v.douyin.com/6aqTHHa/')
})