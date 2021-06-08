import { SayType } from './type'
import { isBoolean } from 'lodash-es'

export enum HelloType {
    HELLO = 'Hello',
    HEI = 'Hei',
}

export function sayAny(str: string) {
    console.log(str)
}

export function yiuIsBoolean(b: any): boolean {
    return isBoolean(b)
}

export function sayHello(sayType: SayType) {
    if (sayType === SayType.LOG) {
        console.log('hello')
    } else if (sayType === SayType.WARN) {
        console.warn('hello')
    } else if (sayType === SayType.ERROR) {
        console.error('hello')
    }
}
