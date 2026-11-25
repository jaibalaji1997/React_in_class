function CarList2(merge){
    let carMerge = merge.data
    return(
        <>
        {carMerge.map(getCarList=>
            <h1>{getCarList.name},{getCarList.seatType}</h1>
        )}
        </>
    )
}
export default CarList2;