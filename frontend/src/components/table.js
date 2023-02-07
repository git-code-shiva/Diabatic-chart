import './table.css'
const Table=()=>{
    return(
        <>
        <h2>Diabatic Chart</h2>
            <table>
                <thead>
                    <tr>
                        <th>सुबह खाली  पेट</th>
                        <th>नाश्ता के बाद</th>
                        <th>दोपहर में खाना के बाद</th>
                        <th>रात में खाना के बाद</th>
                    </tr>
                </thead>

                <tbody id='main-body'>

                </tbody>
            </table>
        </>
    )
}
export default Table;