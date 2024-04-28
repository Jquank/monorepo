interface MicroAppType {
  getData: () => { permissions: any[]; authInfo: any[]; userId: number }
  setData: (data: any) => void
}
interface WxLogin {
  new (...args: any[]): any
}
declare global {
  interface Window {
    microApp: MicroAppType
    WxLogin: WxLogin
  }
}

declare module '*.js'
declare module '*.mjs'
