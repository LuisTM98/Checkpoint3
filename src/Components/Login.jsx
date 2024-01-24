import { useState } from "react"

export function Login(){
    const [ Data, setData ] = useState({
        username: '',
        password:'',
    })

    function handleInputChange(event){
        setData({...Data, [event.target.name]: event.target.value})
    }
    
    console.log(Data)

    function handleSubmit(event){
        event.preventDefault()
        if(!Data.username || !Data.password) {
            console.log('Algun campo no esta escrito')
            alert("Hay que poner credenciales validas")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={Data.username} onChange={handleInputChange}/>
            <input type="password" name="password" value={Data.password} onChange={handleInputChange}/>
            <button>SUBMIT</button>
        </form>
    )
}