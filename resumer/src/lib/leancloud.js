//配置leancloud
import AV from 'leancloud-storage'

const appId = 'nNguzyNBNM07xuzlWRhUyYTl-gzGzoHsz'
const appKey = '4cQ7JYsnLv8lBGSWfcA5uTFk'

AV.init({
  appId,
  appKey
})

export default AV
