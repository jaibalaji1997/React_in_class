import Click3 from "./Onclick_3";
function Click2(Data){
    let getData = Data.data
    console.log('message : ',getData)
    if(getData){
        return(
            <>
            <Click3 />
            </>
        )
    }
    return(
        <>
        <h1>Welcome Back Bala!!!</h1>
        </>
    )
}
export default Click2;