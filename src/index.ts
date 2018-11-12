import { SmsDriver } from 'castle-sms'
export default class Aliyun extends SmsDriver {
    constructor(config: Object) {
        super()
        //初始化类的数据
    }
    async send(Phone: number, Params: object) {
        // 发送一条短信
        console.log(`给${Phone}发送${Params}`)
        return;
    }
    async sendBatch(Phones: number[], Params: object) {
        //批量发送短信
        return;
    }

}