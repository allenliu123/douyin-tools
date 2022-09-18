
/**
 * 解析 url 里面的 sec_id https://www.douyin.com/user/MS4wLjABAAAA7pHW32vyOVNmUjzv3ze0Dt_9l-czozeBGzWzxmyCZn_3rbgHa_V5OSjUWPxzJQCx
 * @param url 抖音用户首页 url
 * @returns sec_id
 */
export function parseHomeUrl(url: string): string {
  const reg = new RegExp('https:\/\/www.douyin.com/user/(.*)[?|\/]?')
  const matchResult = url.match(reg)
  if (!matchResult) {
    return ''
  }
  return matchResult[1]
}

/**
 * 解析分享口令和链接里面的链接地址
 * 如 5.10 OKW:/ 美食这么多！一定要好好爱生活哦～# 生活 # vlog日常 # 当然要拍照记录啊 https://v.douyin.com/6aqTHHa/ 复制此链接，打开Dou音搜索，直接观看视频！
 * 提取出 https://v.douyin.com/6aqTHHa/
 * @param text 分享口令和链接
 * @returns 链接地址
 */
export function parseShareUrl(text: string): string {
  const reg = new RegExp('.*(https://v.douyin.com/[A-Za-z0-9_]+/).*')
  const matchResult = text.match(reg)
  if (!matchResult) {
    return ''
  }
  return matchResult[1]
}