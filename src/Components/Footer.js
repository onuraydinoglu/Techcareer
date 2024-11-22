import "../Css/Footer.css";
import tech from "../Icons/techcareer-logo.svg";
import iskur from "../Img/iskur.webp";

function Footer() {
  return (
    <>
      <footer className="f-bg py-4">
        <div className="container">
          <div className="row border-bottom pb-4">
            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">TECHCAREER</h5>
              <ul className="nav flex-column d-lg-block d-none">
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Etkinliklerimiz
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Şirketler İçin
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Eğitmen Ol
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    İş Birliği
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">Başvur</h5>
              <ul className="nav flex-column d-lg-block d-none">
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Bootcamp
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Hackathon
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Hiring Challenge
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    İş İlanları
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">SENİN İÇİN</h5>
              <ul className="nav flex-column d-lg-block d-none">
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Komünite
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    TDC
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Podcast
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Kariyer Rehperi
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Teknik Sözlük
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">
                VERİ POLİTİKAMIZ
              </h5>
              <ul className="nav flex-column d-lg-block d-none">
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Aydınlatma Metni
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Hizmet Sözleşmesi
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Açık Rıza Metni
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="fw-semibold f-item">
                    Çerez Politikası
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="text-lg-start text-center mb-5">
                <img src={tech} alt="" />
                <p className="f-item-lg mt-3">
                  Türkiye’nin teknoloji kariyeri platformu
                </p>
              </div>
              <div>
                <div className="text-lg-start text-center">
                  <h5 className="f-header">SOSYAL MEDYA</h5>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="btn-social">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-social">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-social">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#" className="btn-social">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-social">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center my-4">
            <div className="col-lg-6 text-lg-start">
              <div className="list-inline d-flex align-items-center">
                <div className="list-inline-item list-leg m-0">
                  <a href="#" className="f-item-lg">
                    TR
                  </a>
                </div>
                <div className="border-start border-1 mx-3"></div>
                <div className="list-inline-item list-leg">
                  <a href="#" className="f-item-lg">
                    EN
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-lg-end">
              <div className="list-inline">
                <div className="list-inline-item">
                  <span className="list-text">Tüm hakları saklıdır</span>
                </div>
                <div className="list-inline-item">
                  <span className="list-text">© Copyright 2024</span>
                </div>
                <div className="list-inline-item">
                  <a href="#" className="list-text text-decoration-none">
                    support@techcareer.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="me-2 text-lg-start">
              <img src={iskur} alt="" />
            </div>
            <div>
              <p className="small text-lg-start mb-0">
                Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş.
                Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri
                arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından
                26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu
                belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş
                arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir.
                Şikayetleriniz için aşağıdaki telefon numaralarına
                başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212
                249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu
                Ümraniye Hizmet Merkezi : 0216 523 90 26
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
