import "../Css/Community.css";
import vector from "../Img/vector-2.svg";
import gif from "../Img/643c6fcf3feedf8ecbd4fb7e78521840.gif";

function Community() {
  return (
    <>
      <div className="jumbotron jumbotronbir">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex flex-column">
                <h1 className="display-3 display-3bir">
                  <b className="write writebir">Teknoloji Tutkunlarının</b>
                  <span className="MuiTypography-root MuiTypography-h4 css-z4rs7f css-z4rs7fbir">
                    <b className="down downbir">Komünite</b>
                  </span>
                  <b className="fall fallbir"> Noktası</b>
                </h1>
                <p className="pbir">
                  Teknoloji Komünitesi ile hayalindeki işi bulabilir,
                  <br />
                  kendini geliştiricek eğitimlere katılabilir ve teknoloji
                  <br />
                  uzmanlarıyla tanışabilirsin!
                </p>
                <button className="btn btnbir">Şimdi Keşfet</button>
              </div>
            </div>
            <br />
            <div className="col-lg-4">
              <img className="gif gifbir" src={gif} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;