// import the slide show image in assets
import FESTOLOGO from './assets/FESTOLOGO.png'
function SlideShow() {
    return (
        <section>
            <article>
                <img src="images/usualclass.png" width="650px" height="650px" alt="" />
            </article>
            <aside>
                <div className="fine-dining">
                    <img src={FESTOLOGO} />
                    <h1> Fine Dining</h1>
                </div>
                <button>Our Menu</button>
            </aside>
        </section>
    );
}

export default SlideShow