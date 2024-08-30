import './pages-css/signup.css'

function Signup() {
    return (
        <div className="sign-container">
            <div className="blue-cube">
                <img src='/images/blue-cube.svg' />
            </div>
            <div className="blue-triangle">
                <img src='/images/blue-triangle.svg' />
            </div>
            <div className="orange-triangle">
                <img src='/images/orange-triangle.svg' />
            </div>

            <div className="sign-up-side">
                <h2>Welcome!</h2>
                <form name="sign-up">
                    <div className="inputs">
                        <div className="inp email-input">
                            <div className="img-place">
                                <img src='/icons/personal-data.svg' />
                            </div>
                            <input type="email" placeholder="E-mail" name="email" />
                        </div>

                        <div className="inp name-input">
                            <div className="img-place">
                                <img src='/icons/personal-data.svg' />
                            </div>
                            <input type="text" placeholder="Name" name="name" />
                        </div>

                        <div className="inp surname-input">
                            <div className="img-place">
                                <img src='/icons/personal-data.svg' />
                            </div>
                            <input type="text" placeholder="Surname" name="surname" />
                        </div>

                        <div className="inp password-input">
                            <div className="img-place">
                                <img src='/icons/password.svg' />
                            </div>
                            <input type="password" placeholder="Password" name="password" />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="submit" id="sign-up" className="active-btn">Sign-up</button>
                        <button type="button" id="sign-in">Sign-in</button>
                    </div>
                </form>
            </div>

            <div className="logo-side">
                <img src='/logotype/valuet.svg' />
                <div className="logo-line"></div>
                <span>Your currency dashboard</span>
            </div>
        </div>
    )
}

export default Signup