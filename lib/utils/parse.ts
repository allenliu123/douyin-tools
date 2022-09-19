
/**
 * 解析 url 里面的 sec_id https://www.douyin.com/user/MS4wLjABAAAA7pHW32vyOVNmUjzv3ze0Dt_9l-czozeBGzWzxmyCZn_3rbgHa_V5OSjUWPxzJQCx
 * @param url 抖音用户首页 url
 * @returns sec_id
 */
export function parseHomeUrl(url: string): string {
  const reg = new RegExp('https:\/\/www.douyin.com/user/(.*)[?|\/]?')
  const matchResult = url.match(reg)
  return matchResult ? matchResult[1] : ''
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
  return matchResult ? matchResult[1] : ''
}

/**
 *  解析分享链接里面的视频id
 * 如 https://www.iesdouyin.com/share/video/7142877698929511688/?region=CN&mid=7142877745805036295&u_code=16l9j553a&did=MS4wLjABAAAAh5lpZ8ZVqkizwfpcrq_vmfuzd7pyt56z7xXK4IM2H_xFh-Lzn9Jd-fNfj_YwOGwN&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&from=web_code_link
 * 提取出 7142877698929511688
 * @param text 
 * @returns 
 */
export function matchIdFromShareUrl(text: string): string {
  const reg = new RegExp('https://www.iesdouyin.com/share/video/([A-Za-z0-9]+)/.*')
  const matchResult = text.match(reg)
  return matchResult ? matchResult[1] : ''
}