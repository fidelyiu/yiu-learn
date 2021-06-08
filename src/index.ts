// import * as a from 'lib/a'
// import * as b from 'lib/b'

import { sayAny, sayHello } from './lib/a'
import { isBoolean, merge } from 'lodash-es'

export function yiuIsBoolean(b: any): boolean {
    return isBoolean(b)
}

export function yiuMerge(a: any, b: any): any {
    return merge(a, b)
}

export {
    sayAny,
    sayHello,
}
