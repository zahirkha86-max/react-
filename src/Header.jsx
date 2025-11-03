
import styly from './Headercss.module.css'

let Header=()=>{

    return(
        <>
        
    <section className={styly.head}>
        <div className={styly.header}>
            <h1><i className="fa-solid fa-cube"></i><span>TeacherVision</span></h1>

        <div className={styly.search}>
              <input className={styly.input} type="text" placeholder="Search"/><button className={styly.sbtn}>Search</button>
        </div>
         
        </div>
    </section>
        </>
    )
}
export default Header