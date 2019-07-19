const mongoose = require('mongoose') //数据库驱动
const path = require('path')
const requireAll = require('require-all')

requireAll({
  dirname:path.join(__dirname,'./'),
  filter:/(.+)\.model\.js$/,
  recursive:true
})

const mongoUrl = `mongodb://127.0.0.1:27017/blog`
const user = mongoose.model('User')
mongoose.connection
  .openUri(mongoUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    user:'',
    pass:''
  })
  .once('open',async( ) => {
    console.log('数据库连接成功')
    let user = new user({
      role:'superAdmin',
      username:'root',
      password:'123456',
      email:'102@qq.com'
    })
    user.save()
  })