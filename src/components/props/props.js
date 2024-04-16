const ListImages =()=>{
    const Listitems=[{
name:"one",
imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
id:1 },{

    name:"two",
    imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    id:2
}]
return(

    <div>
        <ol>
            {
                Listitems.map((eachobject)=>{
                    return(
                        <Listitems imageUrl={eachobject.imageUrl}/>
                    )

                })
            }
        </ol>
    </div>
)
    



    
}
export default ListImages;