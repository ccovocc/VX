/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf48a07f4980a3801',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '84498fc5440af344c974c2a53047b66e',

  USE_PASSAGE: 'wechat-test',
  
  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝1',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orB6S6e3xnZfdAP_9dGa3VHn8MrY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EFoM7an8WRXVz36eKcy7wT7agYGGXvkHrIwaQpKXHXY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '08-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2002', date: '10-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-14',
        },
        {
          type: '节日', name: '相恋1周年纪念日', year: '2024', date: '06-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-23' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '自己1',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orB6S6e3xnZfdAP_9dGa3VHn8MrY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'd9oLwh_kriMxDChPsyDIKv_ZH6QRTOEhyVNamcOoCHs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1998', date: '07-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '自己', year: '1998', date: '09-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        //{ keyword: 'love_day', date: '2023-06-23' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'aosPgQ4MyWjhzdCvd0rkL-x1B2e2yjs70qG6mUMcIYA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orB6S6e3xnZfdAP_9dGa3VHn8MrY',
    }
  ],

}

module.exports = USER_CONFIG

