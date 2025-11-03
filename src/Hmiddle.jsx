import Middles from './Hmiddlecss.module.css'

let Middle=()=>{
    return(
        <>
        <div className={Middles.headd}>

            <h2>Lorem ipsum dolor sit amet consectetur adipisicing<br></br> elit. Dolore, ratione! Nobis delectus.</h2>

           <div className="inbtn"> <input className={Middles.inputt} type="text"  placeholder="search over 20,000 ressources"/>
           <button className={Middles.btnin}>Search</button>
           </div>
        </div>
        
        
        </>
    )
}

export default Middle