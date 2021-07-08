import axois from 'axios'

const url = 'http://localhost:5000/t'
// https://frosty-wood-6558.getsandbox.com:443/dishes
export const postData = async (newItem)=>{
    try {
        axois.post(`${url}`, newItem)
        console.log(newItem);
    } catch (error) {
        alert(`Sorry something went wrong: ${error}`)
    }
}