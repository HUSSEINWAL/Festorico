import FESTOLOGO from './assets/FESTOLOGO.png'

function Bottom() {
    return (
        <div className="bottoms">
            <div className="logo-name-contact">
                <img src={FESTOLOGO} alt="" />
                <h1>FESTORICO</h1>
                <pre>
                    <p1>TEL: 256 304 699 465</p1>
                    <p2>Email: festorico@restgmail.com</p2>
                    <h2> follow us on</h2>
                </pre>
                <ul>
                    <li><a href="">fb</a></li>
                    <li><a href="">x</a></li>
                    <li><a href="">inst</a></li>
                    <li><a href="">utube</a></li>
                </ul>
            </div>
            <div className="location">
                <iframe src="" frameborder="0"> LOCATION </iframe>
            </div>
        </div>
    );
}

export default Bottom