import './Netfilx.css'
let Netfilx=()=>{
    const student=[
        {
            id:1,
            name:"Zahir",
            city:"Delhi"
        },
        {
            id:2,
            name:"Heet",
            city:"Agra"
        },
{
            id:3,
            name:"suresh",
            city:"Agra"
        }
    ]
    return(
        <>
         <div className="parent">
             {student.map((e)=>{
            return(
                <div className="child" key={e.id}>
                    <h4>{e.id}</h4>
                    <h1>{e.name}</h1>
                    <p>{e.city}</p>
                </div>
            )
          })}
         </div>
        </>
    )
}
export default Netfilx