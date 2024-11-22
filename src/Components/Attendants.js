import React from "react";
import erkek1 from "../Img/erkek1.jpg";
import erkek2 from "../Img/erkek2.jpg";
import erkek3 from "../Img/erkek3.jpg";
import kiz1 from "../Img/kiz1.jpg";
import kiz2 from "../Img/kiz2.jpg";
import kiz3 from "../Img/kiz3.jpg";
import "../Css/Attendants.css";

const Attendants = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="text-center mb-4">Bizi Katılımcılarımızdan Dinle</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={kiz3} alt="" />
              <div>
                <h5>Elif Parmaksız</h5>
                <p>
                  Bu eğitim, kariyerim için dönüm noktası oldu. Aldığım dersler,
                  öğrendiğim yeni beceriler ve kazandığım tecrübelerle kendi
                  potansiyelimi daha net bir şekilde görmeye başladım. Önceden
                  sadece teorik bilgim varken, artık gerçek dünya projelerinde
                  uygulamalı deneyim kazandım.Bu eğitim bana, sadece teknik
                  bilgiyi değil, aynı zamanda problem çözme ve takım çalışması
                  gibi önemli becerileri de kazandırdı.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={erkek1} alt="" />
              <div>
                <h5>Ahmet Canbaş</h5>
                <p>
                  Öğrenme süreci boyunca karşılaştığım zorluklar, aslında
                  gelişimim için büyük fırsatlar sundu. Her yeni sorun, daha
                  önce öğrendiğim teorik bilgileri pratikte nasıl kullanacağımı
                  görmek için bir fırsat oldu. Özellikle yazılım geliştirme ve
                  front-end teknolojileri konusunda kendimi çok geliştirdim.
                  Eğitimde öğrendiklerimi projelere uygulamak, gerçek iş
                  ortamına adım attığımda daha güçlü bir başlangıç yapmamı
                  sağladı.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={erkek2} alt="" />
              <div>
                <h5>Emre Tanrıkulu</h5>
                <p>
                  Kariyerime bu eğitimle yön vermek, bana büyük bir güven
                  kazandırdı. Artık sadece bir yazılım geliştirici olarak değil,
                  aynı zamanda projelerin yönetilmesi, takım içi işbirliği ve
                  müşterilerin ihtiyaçlarına yönelik çözümler üretme konusunda
                  da kendime güveniyorum. Her bir modül, bana sadece teknik
                  bilgi değil, aynı zamanda iş dünyasında nasıl daha etkili
                  olabileceğimi öğretti.
                </p>
                <div className="nav-buttons">
                  <button className="prev">&lt;</button>
                  <button className="next">&gt;</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={erkek3} alt="" />
              <div>
                <h5>Hasancan Yaşar</h5>
                <p>
                  Takım çalışması ve işbirliği bu eğitimdeki en önemli
                  unsurlardan biriydi. Diğer katılımcılarla birlikte çalışarak,
                  farklı bakış açılarıyla problemlere yaklaşmayı öğrendim.
                  Ayrıca, projeleri zamanında teslim etmek ve hedeflere ulaşmak
                  için nasıl verimli çalışacağımızı, birbirimizin güçlü
                  yönlerinden nasıl yararlanacağımızı keşfettik. Bu süreç,
                  gerçek iş dünyasına daha hazır olmamı sağladı.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={kiz2} alt="" />
              <div>
                <h5>Aslıhan Umutlu</h5>
                <p>
                  Eğitim süresince edindiğim yeni beceriler, gelecekteki iş
                  fırsatlarım için büyük bir avantaj olacak. Özellikle React,
                  JavaScript, C# ve .NET gibi popüler teknolojilerdeki
                  derinlemesine bilgim, iş arayışımda bana önemli bir fark
                  yaratacak. Eğitimin sonunda kazandığım sertifikalar ve
                  portföydeki projeler, iş görüşmelerinde güçlü bir referans
                  olacak.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card">
              <img src={kiz3} alt="" />
              <div>
                <h5>Selin Çalışkan</h5>
                <p>
                  {" "}
                  Bu eğitimi tavsiye etmemin en büyük sebebi, bana sadece teknik
                  bilgi değil, aynı zamanda kariyerime nasıl yön vereceğimi de
                  öğretiyor olmasıdır. Eğitim süreci boyunca edindiğim
                  deneyimler, gelecekteki hedeflerime ulaşmamda önemli bir rol
                  oynayacak. Eğer bu alanda kariyer yapmak istiyorsanız, bu
                  eğitimi kesinlikle değerlendirmelisiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-button">
          <button>Tüm Yorumları Gör</button>
        </div>
      </div>
    </section>
  );
};

export default Attendants;
