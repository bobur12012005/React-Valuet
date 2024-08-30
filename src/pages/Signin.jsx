import './pages-css/signin.css'

function Signin() {
    return (
        <div className="sign-container">
            <div className="blue-cube">
                <img src="/images/blue-cube.svg" alt="Blue Cube" />
            </div>
            <div className="blue-triangle">
                <img src="/images/blue-triangle.svg" alt="Blue Triangle" />
            </div>
            <div className="orange-triangle">
                <img src="/images/orange-triangle.svg" alt="Orange Triangle" />
            </div>

            <div className="sign-in-side">
                <h2>Welcome!</h2>
                <form name="sign-in">
                    <div className="inputs">
                        <div className="inp email-input">
                            <div className="img-place">
                                <img src="/icons/personal-data.svg" alt="Personal Data Icon" />
                            </div>
                            <input type="email" placeholder="E-mail" name="email" />
                        </div>

                        <div className="inp password-input">
                            <div className="img-place">
                                <img src="/icons/password.svg" alt="Password Icon" />
                            </div>
                            <input type="password" placeholder="Password" name="password" />
                        </div>
                    </div>

                    <div className="buttons">
                        <button type="button" id="sign-up">Sign-up</button>
                        <button type="submit" id="sign-in" className="active-btn">Sign-in</button>
                    </div>
                </form>
                <a className="forgotten-password" href="#">Forgot your password?</a>
            </div>

            <div className="logo-side">
                <img src="/logotype/valuet.svg" alt="Logo" />
                <div className="logo-line"></div>
                <span>Your currency dashboard</span>
            </div>
        </div>
    )
}

export default Signin