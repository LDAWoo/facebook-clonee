

function SelectBirth({option =[] , month,onChange }) {
    return ( 
        <select onChange={onChange} className="w-full border-gray-300 p-1 focus:outline-none border-2 rounded-lg">
                {         
                    option.map((opt,index)  => {    
                            let value = opt      
                            if(month){
                                value = parseInt(value.split(" ")[1])
                            }                          
                            return (
                                <option key={index} value={value}>{opt}</option>
                            )
                        })    
                }
        </select>
     );
}

export default SelectBirth;{}