import './BookTable.css';
function BookTable() {
    return (
        <div className="book-table">
            <h1>Make your Reservation</h1>
            <div className="customer-info">
                <input type="text" placeholder="Name" />
                <input type="time" />
                <input type="date" />
                <input type="text" placeholder="Describe your reservation" />
                <input type="text" placeholder="phone-number" />
                <input type="text" placeholder="Email" />
                <input type="submit" placeholder="confirm" />
            </div>
            <div className="menu">
                <pre><h1>search from
                    ourmenu<br />
                </h1>
                </pre>

                <button id="menu">OUR MENU</button>

            </div>
        </div>
    );
}

export default BookTable