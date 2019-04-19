import React,{useState,useEffect} from 'react'

export default props => {
    const value = 0
    const [contador,setContador] = useState(value)    
    const [status,setStatus] = useState(value % 2 === 0 ? 'Par' : 'Impar')    
    // Similar ao componentDidMount e componentDidUpdate
    useEffect(()=> {
        contador % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return (
        <div>
            <h1>{contador} é {status}</h1>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
        )
}