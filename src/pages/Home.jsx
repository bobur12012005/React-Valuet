import './pages-css/home.css'

function Home() {
    return (
        <div className="container">
            <div className="top-container">
                <div className="wallet-stats">
                    <div className="total-balance-holder">
                        <span className="stats-text">Balance</span>
                        <div className="stats">
                            <canvas id="total-balance"></canvas>
                            <div className="balance-view">
                                <span className="baln-text">BALANCE</span>
                                <span className="fund">$0</span>
                            </div>
                        </div>
                        <div className="other"></div>
                    </div>

                    <div className="total-spending-holder">
                        <div className="stats">
                            <span className="stats-text">Spending</span>
                            <select name="months-1">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="spent">
                            <span className="spending">$0</span>
                            <b>Total Spending</b>
                        </div>
                        <div className="box-t-s">
                            <canvas id="total-spending"></canvas>
                        </div>
                    </div>
                </div>

                <div className="wallets"></div>
            </div>

            <div className="bottom-container">
                <div className="transaction-flactuations">
                    <div className="top-canvas">
                        <span>Stats of Transactions</span>
                        <select name="months-2">
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div className="tr-plc">
                        <canvas id="transaction-stat"></canvas>
                    </div>
                </div>

                <div className="transactions-side">
                    <div className="transactions-text">
                        <span>Recent Transactions</span>
                    </div>
                    <div className="transactions"></div>
                </div>
            </div>
        </div>
    )
}

export default Home