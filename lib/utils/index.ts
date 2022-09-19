
const request = require('request');

/**
 * 通过短链接获取分享真实链接
 * @param url 分享链接地址
 * @returns Promise<string>
 */
export function shareUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      followRedirect: false,
      headers: {
        'User-Agent': 'Request-Promise'
      }
    }, (error: any, response: any, body: any) => {
      if (error) {
        reject()
      } else {
        resolve(response.headers.location)
      }
    })
  })
}

