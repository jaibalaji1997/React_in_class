function FunCar() {
    let cars = [
        { carName: 'jaguar', model: 2022 },
        { carName: 'kia', model: 2022 },
        { carName: 'hundai i10', model: 2026 }
    ]
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Car_Name</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((user) => (
                        <tr>
                            <td>{user.carName}</td>
                            <td>{user.model}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FunCar;