import axois from 'axios'

const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes'

export const postData = async (newItem)=>{
    try {
        axois.post(`${url}`, newItem)
        alert(`The req sent to ${url}`)
    } catch (error) {
        alert(`Sorry something went wrong: ${error}`)
    }
}