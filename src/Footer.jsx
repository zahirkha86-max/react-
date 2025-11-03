import Footercss from './Footercss.module.css'

let Footer=()=>{
    return(
        <>
        <section className={Footercss.footer}>
            <div>
        <h2>About Us</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro nesciunt corrupti<br></br>oluptate quas numquam at quidem aspernatur quae.</p>



<div className={Footercss.icons}>
    <a href="https://www.facebook.com/share/18ifhPbdkn/"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="https://x.com/00ZahirKhan00?t=6J1ph00Y5cCJnnSNx2g4AQ&amp;s=08"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://www.instagram.com/zahir_khan_2?utm_source=qr&amp;igsh=MXMzZTYyaG1ybGlrOQ=="><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><i class="fa-brands fa-linkedin-in"></i></a>
    <p>Made with <i class="fa-regular fa-heart"></i> by Zahir Khan</p>
</div>


            </div>
        </section>
        
        </>
    )
}

export default Footer