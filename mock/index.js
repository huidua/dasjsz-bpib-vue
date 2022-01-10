 // 引入mockjs
 const Mock = require('mockjs')
 // 获取 mock.Random 对象
 const Random = Mock.Random
 // mock一组数据
 console.log("💨Mockjs成功引入");

 const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
 }
 // 拦截ajax请求，配置mock的数据
 Mock.mock( process.env.BASE_API+ '/api/userInfo', 'get', produceNewsData)

 // mock的优化可以参考vue-admin-template项目
