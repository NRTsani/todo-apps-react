const ModalLogin = () => {
    return (
        <>
        
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="col-md rounded-4 mx-2 vh-50">
              <div className="">
                <form id="login-form" action="index.html" className="">
                  <img src="./assets/logos/svg/nutrikid-text-only-blue-svg.svg" alt="" width="192" className="mx-auto my-4 d-block logo-custom" />
    
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control border-success" id="email" placeholder="Masukkan Email Anda" pattern=".+[a-zA-Z].+@.+\..{3}" required="" />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control border-success" id="password" placeholder="Masukkan Password Anda" required="" />
                  </div>
                  <div className="text-end">
                    <p>
                      <a className="link-offset-1" href="/ondevelopment-page">Lupa password ?</a>
                    </p>
                  </div>
                  <button className="btn btn-primary w-100 py-2" id="login-btn" type="submit">
                    Login
                  </button>
                  <div className="input-group mt-3">
                    <button className="btn btn-lg btn-light w-100 fs-6">
                      <img src="./assets/icon/google-32.png" style="width: 20px" className="me-2" /><small>Log In with Google</small>
                    </button> 
                  </div>
                  <div className="my-2 text-center">
                    <p>Belum memiliki akun? <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" href="/signup">Sign Up</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Sign Up</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="col-md rounded-4 mx-2">
              <div className="">
                <form id="signup-form" className="needs-validation">
                  <img src="./assets/logos/svg/nutrikid-text-only-blue-svg.svg" alt="" width="192" className="mx-auto my-2 d-block logo-custom" />    
                  <div className="mb-2 mt-2">
                    <label className="form-label mb-1">Nama</label>
                    <input id="name" type="text" name="name" className="form-control form-control-sm border-success" placeholder="Masukkan Nama Anda" required="" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label mb-1">Email</label>
                    <input id="email" type="email" name="email" className="form-control form-control-sm border-success" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Masukkan Email Anda" required="" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label mb-1">Password</label>
                    <input id="password" type="password" name="password" className="form-control form-control-sm border-success" placeholder="Buat Password Anda" required="" />
                    <p id="warning-msg" className="nutrikid-small-size">
                      Password harus memiliki minimal 8 karakter, terdiri dari huruf
                      kecil, huruf besar, dan angka.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mb-1">Verifikasi Password</label>
                    <input id="retypePassword" type="password" className="form-control form-control-sm border-success" name="retypePassword" placeholder="Konfirmasi Password Anda" required="" />
                    <p id="warning-pass-match-msg" className="nutrikid-small-size">
                      Password yang kamu masukkan salah
                    </p>
                  </div>
                  <button id="btn-submit" className="btn btn-primary w-100 py-2 mt-2" type="submit">
                    Sign Up
                  </button>
                  <div className="input-group mt-2">
                    <button className="btn btn-lg btn-light w-100 fs-6">
                      <img src="./assets/icon/google-32.png" style="width: 20px" className="me-2" /><small>Sign Up with Google</small>
                    </button>
                  </div>
                  <div className="my-2 text-center">
                    <p>Sudah memiliki akun? <a data-bs-target="#exampleModalToggle" data-bs-toggle="modal" href="/login">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
        
        </>
    )
}

export default ModalLogin