import { useEffect, useState } from 'react'
import react from 'react-dom'
import './form.css'

const Form=()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=> clearInterval(interval);
    },[]);

    let displayComponent;
    const currentHour = new Date().getHours();

    if(currentHour >=6 && currentHour <=9){
        displayComponent = <label>सुबह खाली  पेट </label>;
    }
    else if(currentHour >9 && currentHour <= 12){
        displayComponent = <label>नाश्ता के बाद  </label>
    }
    else if(currentHour >12 && currentHour <=15){
        displayComponent = <label>दोपहर में खाना के बाद  </label>
    }
    else{
        displayComponent = <label>रात में खाना के बाद </label>
    }
    return(
        <>
            <h2><u>Diabatic Chart</u></h2>
            {displayComponent}
            <input type="number" value = {time}/>
        </>
    )
}
export default Form;