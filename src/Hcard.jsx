import Hcard from './Hcardcss.module.css'

let Hcards=()=>{
    let data=[
        {
            Imageurl:"./image.png",
            Description:"i am fellow developer",
        },
                {
            Imageurl:"./image1.png",
            Description:"i am fellow app developer",
        },
          {
            Imageurl:"./image.png",
            Description:"i am fellow web developerzzzzzz",
        }

    ];




    return(
        <>
        { <div className={Hcard.grid}>
            {data.map((e,i)=>{
                return <div key={i}>
                    <img src={e.Imageurl} alt="" />
                    <p>{e.Description}</p>
                    <button>click</button>
                </div>
            })}
      
        </div> }

        {
            <div className={Hcard.grid}>
                {data.map((e,a)=>{
                    return <div className={Hcard.dis} key={a}>
                        <img width="200" src={e.Imgurl} alt="" />
                        <p>{e.Discription}</p>
                        <button className={Hcard.cbtn}>Explore Now</button>
                    </div>

                })}

            </div>
        }
        
        </>
    )
}
export default Hcards