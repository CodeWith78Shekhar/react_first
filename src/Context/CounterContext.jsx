import { createContext, useContext, useState } from "react"

const counterContext = createContext();
export const useCounter = () => useContext(counterContext)

export const CounterProvider = ({children}) =>{

    const[count, setcount] = useState(0)

    const increment = ()=>{
        setcount((prev)=>{
            if(prev>4){
                setcount(5)
            }else{
                return   prev+1;
            }
        
        })
    }
    
    const decrement = ()=>{
             setcount((prev)=>{
                if(prev<-4){
                    setcount(-5)
                }else{
                    return      prev-1;
                }
                }
             )
    }

    const reset = ()=>{
        setcount(0)
    }

    return (
        <counterContext.Provider value={{count , increment , decrement , reset}}>
            {children}
        </counterContext.Provider>
    )

}


