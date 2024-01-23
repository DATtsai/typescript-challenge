/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼
export const fetchData = (url: string): Promise<number> => {
    return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('get', url, true)
            xhr.send()
            xhr.onload = () => {
                if(xhr.status !== 200) reject('error')
                resolve(JSON.parse(xhr.responseText))
            }
    })
}