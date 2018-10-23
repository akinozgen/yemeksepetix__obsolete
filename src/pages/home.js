import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components";

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <div className="red-flat">
          <Header />
          <section className="section">
            <div className="container mb40">
              <div className="col-12 text-center">
                <h1 className="heading-lrg primary-color launchaco-builder-hoverable">
                  <span className="branding-name"> yemekX </span> sizi seçmekle
                  uğraştırmaz.
                </h1>
                <h2 className="subheading secondary-color mt20 launchaco-builder-hoverable">
                  Rastgele bir yemek öneri zinciri ile yemek seçme sürecini
                  hızlandırırsınız.
                </h2>
                <div className="mt40">
                  <Link
                    to="/basla"
                    className="button mobile-text-center mt10 launchaco-builder-hoverable mobile-text-center accent-bg primary-color"
                  >
                    <span className="lh30">
                      <img
                        className="button-icon"
                        src="static/favicon-white.png"
                        alt="yemeksepetiX"
                      />
                      Kullanmaya Başla
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="container-lrg">
              <div className="col-12">
                <div className="browserphone launchaco-builder-hoverable">
                  <div className="browserphone-browser ">
                    <div className="mask mask__noimage">
                      <img
                        src="./static/desktop.png"
                        alt="yemeksepetiX - Web App"
                      />
                    </div>
                  </div>
                  <div className="browserphone-iphone">
                    <div className="mask mask__noimage">
                      <img
                        src="./static/mobil.png"
                        alt="yemeksepetiX - Mobile App"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          id="feature-1"
          className="section red-white"
          sitemeta="[object Object]"
          activepage="Landing"
        >
          <div className="container-lrg flex">
            <div className="col-4 text-center flex flex-column center-horizontal">
              <i className="icon mobile-center-icon secondary-bg launchaco-builder-hoverable">
                <img
                  src="static/001.png"
                  alt="yemeksepetiX - Seç - Rastgele öneri zincirinden bir yemek seç. Sende bizim gibi acıktığında ne söylesek girdabına düşüp aç kalanlardansan kullanmaya başla."
                />
              </i>
              <h3 className="bold primary-color launchaco-builder-hoverable">
                Seç.
              </h3>
              <p className="paragraph secondary-color launchaco-builder-hoverable">
                Rastgele öneri zincirinden bir yemek seç.Sende bizim gibi
                acıktığında ne söylesek girdabına düşüp aç kalanlardansan
                kullanmaya başla.
              </p>
            </div>
            <div className="col-4 text-center flex flex-column center-horizontal">
              <i className="icon mobile-center-icon secondary-bg launchaco-builder-hoverable">
                <img
                  src="static/003.png"
                  alt="yemeksepetiX - Beğen - Beğenene kadar öneri zincirinde ilerle. Beğenmezsen tekrar dene."
                />
              </i>
              <h3 className="bold primary-color launchaco-builder-hoverable">
                Beğen
              </h3>
              <p className="paragraph secondary-color launchaco-builder-hoverable">
                Beğenene kadar öneri zincirinde ilerle.Beğenmezsen tekrar dene.
              </p>
            </div>
            <div className="col-4 text-center flex flex-column center-horizontal">
              <i className="icon mobile-center-icon secondary-bg launchaco-builder-hoverable">
                <img
                  src="static/002.png"
                  alt="yemeksepetiX - Gerisi Bildiğin Gibi - Gerisini yemeksepeti üzerinde devam edeceksin. Biz sadece öneri yapıyoruz."
                />
              </i>
              <h3 className="bold primary-color launchaco-builder-hoverable">
                Gerisi Bildiğin Gibi
              </h3>
              <p className="paragraph secondary-color launchaco-builder-hoverable">
                Gerisini yemeksepeti üzerinde devam edeceksin.Biz sadece öneri
                yapıyoruz.
              </p>
            </div>
          </div>
          <div className="container-lrg">
            <div className="col-12">
              <div className="browserphone launchaco-builder-hoverable">
                <div className="browserphone-browser ">
                  <div className="mask mask__noimage">
                    <img
                      src="./static/desktop.png"
                      alt="yemeksepetiX - Web App"
                    />
                  </div>
                </div>
                <div className="browserphone-iphone">
                  <div className="mask mask__noimage">
                    <img
                      src="./static/mobil.png"
                      alt="yemeksepetiX - Mobile App"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing-2"
          className="section red-white"
          sitemeta="[object Object]"
          activepage="Landing"
        >
          <div className="container text-center mb75">
            <div className="col-12 text-center">
              <h4 className="heading primary-color launchaco-builder-hoverable">
                Fiyatlandırma
              </h4>
              <p className="subheading secondary-color mt20 launchaco-builder-hoverable">
                Ne fiyatı bir de para mı alacağız ?
              </p>
            </div>
          </div>
          <div className="container flex center-vertical">
            <div className="col-6">
              <div className="card pad30 launchaco-builder-hoverable">
                <div className="mb20">
                  <div className="text-center">
                    <b className="bold primary-color"> Bedava </b>
                    <div className="mt10">
                      <b className="heading primary-color"> 0₺ </b>
                      <span className="paragraph secondary-color" />
                    </div>
                  </div>
                  <ul className="mt20">
                    <li className="flex mb20">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        className="svg-fill mr20 noshrink"
                      >
                        <g transform="translate(4.000000, 5.000000)">
                          <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                        </g>
                      </svg>
                      <span className="span secondary-color">
                        Türkiye 'deki listelenen tüm restoranlar
                      </span>
                    </li>
                    <li className="flex mb20">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        className="svg-fill mr20 noshrink"
                      >
                        <g transform="translate(4.000000, 5.000000)">
                          <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                        </g>
                      </svg>
                      <span className="span secondary-color">
                        Limitsize yakın öneri zinciri(tabi ki bir limiti var)
                      </span>
                    </li>
                    <li className="flex mb20">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        className="svg-fill mr20 noshrink"
                      >
                        <g transform="translate(4.000000, 5.000000)">
                          <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                        </g>
                      </svg>
                      <span className="span secondary-color">
                        Daha özellikler var.
                      </span>
                    </li>
                    <li className="flex mb20">
                      <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 22 22"
                        version="1.1"
                        className="svg-fill mr20 noshrink"
                      >
                        <g transform="translate(4.000000, 5.000000)">
                          <path d="M5.24961475,8.39956394 L2.16512063,5.35475362 C1.74038521,4.93548271 1.05017933,4.9352057 0.624646383,5.35526395 C0.199019838,5.77541456 0.198881924,6.45614266 0.624129379,6.8759191 L4.35212111,10.555948 C4.38658274,10.6034965 4.42544251,10.6488955 4.46870038,10.6915969 C4.70907746,10.9288814 5.03375662,11.0320952 5.3475228,11.0013023 C5.59592563,10.9812599 5.83876209,10.8774981 6.02880771,10.6898975 C6.06831079,10.6509027 6.10414872,10.6096632 6.13632157,10.5665961 L13.9850992,2.81879759 C14.4107939,2.39857976 14.410861,1.71746456 13.985328,1.29740632 C13.5597015,0.8772557 12.8697673,0.877449143 12.444108,1.29763217 L5.24961475,8.39956394 Z" />
                        </g>
                      </svg>
                      <span className="span secondary-color">
                        Arkadaşlarını da getir.
                      </span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/basla"
                  className="button mobile-text-center mt10 launchaco-builder-hoverable button__full mobile-text-center accent-bg primary-color"
                >
                  <span className="lh30">
                    <img
                      className="button-icon"
                      src="static/favicon-white.png"
                      alt="yemeksepetiX"
                    />
                    Kullanmaya Başla
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="team-3"
          className="section red-white"
          sitemeta="[object Object]"
          activepage="Landing"
        >
          <div className="container text-center mb75">
            <h3 className="heading primary-color launchaco-builder-hoverable">
              Siz Kimsiniz ?
            </h3>
            <p className="subheading secondary-color mt20 launchaco-builder-hoverable">
              Ya da ben kimim ?
            </p>
          </div>
          <div className="container-sml flex text-center">
            <div className="col-12 launchaco-builder-hoverable flex">
              <div className="team-card flex flex-column center-vertical center-horizontal w100">
                <div className="user-image mb20 avatar" />
                <div>
                  <b className="bold primary-color"> Akın Özgen </b>
                  <p className="paragraph primary-color mt10">
                    Front - End Developer(Antalya)
                  </p>
                  <p className="paragraph secondary-color mt20">
                    8 yıllık kod yazıcısı 2 yıldır profesyonel yazılım
                    geliştiricisi.Yüksek okul mezunu, askerliği kısaltmak için
                    açık öğretim öğrencisi Şimdilik bu kadar
                  </p>
                </div>
                <div className="mt30">
                  <a
                    href="https://twitter.com/akinozgen17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialicons accent-bg twitter"
                  />
                  <a
                    href="https://medium.com/@akinozgen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialicons accent-bg medium"
                  />
                  <a
                    href="https://github.com/akinozgen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialicons accent-bg github"
                  />
                  <a
                    href="https://linkedin.com/in/akinozgen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialicons accent-bg linkedin"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    );
  }
}
