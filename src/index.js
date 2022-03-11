const {Wechaty} = require('wechaty');
const WechatyWebPanelPlugin = require('wechaty-web-panel');

const name = 'wechat-assistant-pro-ipad';
let bot = '';
let padLocalToken = '' // 如果申请了ipadlocal的token,可以直接填入

if (process.env['PAD_LOCAL_TOKEN']) {
    console.log('读取到环境变量中的ipadLocalToken')
    padLocalToken = process.env['PAD_LOCAL_TOKEN']
}

bot = new Wechaty({
    name,
    puppet: 'wechaty-puppet-padlocal',
    puppetOptions: {
        token: padLocalToken
    }
});


bot
    .use(
        WechatyWebPanelPlugin({
            apiKey: '智能微秘书平台的apiKey',
            apiSecret: '智能微秘书平台的apiSecret',
        })
    )
    .start()
    .catch((e) => console.error(e));

