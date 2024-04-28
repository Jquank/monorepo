interface ArrItemType {
  children?: ArrItemType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any
}
export const splicePath = (arr: ArrItemType[], previousPath = '/') => {
  arr.forEach((v) => {
    if (!v.path.startsWith('/')) {
      v.path = previousPath + v.path
    }
    if (v.children && v.children.length) splicePath(v.children, v.path + (v.path === '/' ? '' : '/'))
  })
}

export const loadView = (view: string, modules: Record<string, Function>) => {
  let res
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0]
    if (dir === view) {
      res = () => modules[path]()
    }
  }
  return res
}
