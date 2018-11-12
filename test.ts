import Sms from ".";

(async () => {
    const sms = new Sms('Aliyun', {

    });
    // 发送短信
    sms.send(18081246031, { Code: 123456 })
})()