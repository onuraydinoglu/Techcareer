import "../Css/Contact.css";

function Contact() {
  return (
    <>
      <section className="c-bg py-5">
        <div className="d-flex flex-column align-items-center text-center text-white">
          <h2 className="text-sir mb-3">
            Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?
          </h2>
          <h3 className="text-bir mb-4">
            Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail
            adresinizi girin! 🚀
          </h3>

          <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-4">
              <div className="col-md-6">
                <div className="search">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Şirket E-Mail Adresiniz"
                  />
                  <button className="btn btn-primary">Gönder</button>
                </div>
              </div>
            </div>
          </div>

          <p className="s-item-t">Tüm soru ve önerileriniz için;</p>

          <div className="d-flex align-items-center">
            <div className="list-inline-item m-0">
              <a href="#" className="s-item-info">
                hello@techcareer.net
              </a>
            </div>
            <div className="border-start border-1 mx-3"></div>
            <div className="list-inline-item">
              <a href="#" className="s-item-info">
                0216 468 76 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
