import Gallery from "./pages/Gallery";

function Places() {

    return (
        <>
            <section className="place-label">
                <article>
                    <img src="/images/business.jpg" width="650px" height="650px" alt="" />
                    <label>Business Class</label>
                </article>
                <aside>
                    <img src="/images/usualclass.png" alt="" />
                    <label>Usual class</label>
                </aside>
            </section>
            <div className="seemore">
                <button id="seemore">See more splaces</button>{/* goes to gallery page*/}
            </div>
        </>
    );
}
export default Places