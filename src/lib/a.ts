import { SayType } from '../type'

export function sayAny(str: string) {
    console.log(str)
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
