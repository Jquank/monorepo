import { reactive } from 'vue'

interface ReactiveData {
  userInfo: {
    avatar: string
    [props: string]: any
  }
}
export const useReactiveData = reactive<ReactiveData>({
  userInfo: {
    avatar: ''
  }
})
