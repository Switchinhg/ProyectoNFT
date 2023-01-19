let nfts =  [ 
    {"id":1,"name":"NFT N°1", "desc":"HECHO POR SWICHO OBVIO","price":"200ETH","img":"./imgs/cup.png","owner":"swicho"},
    {"id":2,"name":"NFT N°2", "desc":"secon EPIC","price":"150ETH","img":"./imgs/glasses.png","owner":"swicho"},
    {"id":3,"name":"NFT N°3", "desc":"Epic thing","price":"20ETH","img":"./imgs/house.png","owner":"swicho"},
]


export const getFetch = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            
            if(id){
                resolve(nfts.filter(e=>e.id==id))
                return
            }
            resolve(nfts)
        }, 1000);
    })
}