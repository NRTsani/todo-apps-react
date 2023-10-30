import ModalLogin from "./ModalLogin"

export const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img style={{width: "240px"}} src="./icons/logo.png" /></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                {/* <div>
                    <a style={{textDecoration: "none", color: "black", cursor: "pointer"}} id="login" className="user" title="Login or Sign up to Save List" aria-label="Login or Sign up to photo editor"><img src="./icons/user.png" className="ic" width="36" height="36" alt="Login / singn up" title="Login / singn up" />Sign up / Log in</a>
                </div> */}
                </div>
            </div>
            </nav>      
        
        </>
    )
}

export default Navbar