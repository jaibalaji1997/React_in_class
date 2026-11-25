import CarList2 from "./function_Connect2"
function CarList1() {
    let carlist = [{ name: 'suzuki', seatType: '4seater' },
    { name: 'audi', seatType: '7seater' },
    { name: 'BMW', seatType: '10seater' }
    ]
    return (
        <>
        <CarList2 data={carlist} />
        </>
    )
}
export default CarList1;