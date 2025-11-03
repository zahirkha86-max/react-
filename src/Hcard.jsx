import Hcard from './Hcardcss.module.css'

let Hcards=()=>{
    // let data=[
    //     {
    //         Imageurl:"./image.png",
    //         Description:"i am fellow developer",
    //     },
    //             {
    //         Imageurl:"./image1.png",
    //         Description:"i am fellow app developer",
    //     },
    //       {
    //         Imageurl:"./image.png",
    //         Description:"i am fellow web developer",
    //     }

    // ];

let data=[
{
    Imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2aITKEes3IYig_VkU7s5sfK6hwuSroaTfA&s",

    Discription:"Holiday-Themed Resources"
},

{
    Imgurl:"https://daily.jstor.org/wp-content/uploads/2015/07/school_1050x700.jpg",
    Discription:"Project-Based Learing"
},
{
    Imgurl:"https://www.thegaudium.com/wp-content/uploads/2016/08/Pooja0002.jpg",
    Discription:"Professional Devlopment"
},

{
    Imgurl:"https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/2023-09/school%20girl%20thailand.jpg?itok=QSNKTR12",
    Discription:"Straegies For the Classroom"
}

]


    return(
        <>
        {/* <div className={Hcard.grid}>
            {data.map((e,i)=>{
                return <div key={i}>
                    <img src={e.Imageurl} alt="" />
                    <p>{e.Description}</p>
                    <button>click</button>
                </div>
            })}
      
        </div> */}

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