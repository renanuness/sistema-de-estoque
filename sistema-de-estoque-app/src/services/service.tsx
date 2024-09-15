import axios from "axios";



export function getAllProducts(page: number, pageSize: number){
        return axios.get('https://dummyjson.com/products?skip='+(page-1)*pageSize+'&limit='+pageSize)
        .then(res => {return res.data})
        .catch(er =>{
            console.log(er);
        })
}


export function getProductById(id: number){
    return axios.get('https://dummyjson.com/products/'+id)
    .then(res => {return res.data()})
    .catch(er =>{
        console.log(er);
    })
}