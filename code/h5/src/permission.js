import router from './router'
import BWbridge from 'bw-bridge-wx'

router.beforeEach(async (to, from, next) => {
  try {
    if (to.fullPath == '/') {
    } else {
      BWbridge.bridge.onHistoryBack()
    }
    to.fullPath == '/' ? BWbridge.bridge.onHistoryBack(() => { BWbridge.bridge.close() }) : BWbridge.bridge.onHistoryBack()
  } catch (err) {

  }
  next()
})

router.afterEach(() => {
})
