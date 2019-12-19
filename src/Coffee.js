import React,{useState, useEffect} from 'react'

export default function Coffee() {
    const [order, setOrder]= useState('');

    useEffect(()=>{
        const interval =  setInterval(() => {
            setOrder('completed');
          }, 3000);
          return () => clearInterval(interval);

    },[order])


    function handelCLicked(e){
        setOrder(e.target.name)
        if(e.target.name ==='Mocha'){
           
        }
        
        console.log(order);
    }

    function handleChanged(e){
        setTimeout(()=>{
           var show = document.getElementById('show')
           show.innerText('complete')
           console.log()
        },3000)
    }

    return (
        <div>
            <button onClick= {handelCLicked} name="Mocha">Mocha</button>
            <button onClick= {handelCLicked} name="Chai">Chai</button>
            <button onClick= {handelCLicked} name="Latte">Latte</button>


            <h1>OrderSummary</h1>
            <span>{order}</span>
        </div>
    )
}
