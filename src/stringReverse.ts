/**
 * 反轉輸入的字串
 * @param str - 要反轉的字串
 * 
 * 這個函式需要將輸入的字串反轉。你可以使用 JavaScript 的 String 和 Array 方法來完成這個任務。
 * 首先，使用 split 方法將字串轉換為字元陣列。然後，使用 reverse 方法將陣列反轉。最後，使用 join 方法將反轉後的陣列轉換回字串。
 */
export function reverseString(str: string): string {
    // 在此實現函式
    if(!str) return ''
    // method 1 不用reverse()
    // let stringList: string[] = str.split('')
    // let reverseList: string[] = []
    // let length: number = stringList.length
    // for(let i=0; i<length; i++) {
    //     reverseList.push(stringList.pop() as string)
    // }
    // return reverseList.join('')

    // method 2 使用reverse()
    return str.split('').reverse().join('')

    // method 3 使用spread展開字串
    // return [...str].reverse().join('')

    // method 4 for loop 遞減
    // let reverseString = ''
    // for(let i = str.length - 1; i > -1; i--) {
    //     reverseString+=str[i]
    // }
    // return reverseString

    // method 5 Recursion
    // if(!str) return ''
    // else return reverseString(str.substring(1)) + str.charAt(0)
}