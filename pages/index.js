import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Franco | francoj22 (/francoj22) · solo.to</title>
      <meta
        property="og:title"
        content="Franco | francoj22 (/francoj22) · solo.to"
      />
      <meta
        name="description"
        content="Dublin, Ireland 🇮🇪 · 👨🏻‍💻 • Senior Software Engineer
📸 • Content Creation / Tech"
      />
      <meta
        property="og:description"
        content="Dublin, Ireland 🇮🇪 · 👨🏻‍💻 • Senior Software Engineer
📸 • Content Creation / Tech"
      />
      <meta property="og:image" content="profileImage2.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3673FC" />
      <link
        href="https://cdn.solo.to/images/favicon.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link href="#" rel="apple-touch-icon" />
      <link href="francoj22.html" rel="canonical" />
      <link
        href="css/vendor.css%3Fid=74ce1f16fcc59f942e27e3dd269a4873.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="css/app.css%3Fid=f1ae8800803575469bdaf99d4db17b62.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".profile-bkg-hero-wrapper{background-image:url('francoProfile.png')}}",
        }}
      />
      <div className="page-wrapper page-wrapper-linkpage">
        <div className="profile-bkg-hero-wrapper">
          <div className="slice-div slice-div-large" />
        </div>
        <div className="section info-card">
          <div className="section-container">
            <div className="profile-info-wrapper">
              <div className="profile-info-top-wrapper">
                <div className="profile-image-wrapper">
                  <picture>
                    <source
                      media="(max-width:479px)"
                      srcSet="profileImage2.png"
                    />
                    <img
                      src="profileImage2.png"
                      decoding="async"
                      className="profile-image"
                    />
                  </picture>
                </div>
              </div>
              <div className="profile-info-bottom-wrapper">
                <div className="profile-name-wrapper">
                  <h1 className="profile-name">Franco | francoj22</h1>
                </div>
                <div className="profile-location-box">
                  <img
                    src="https://cdn.solo.to/images/map-pin.svg"
                    alt="Location"
                    className="location-icon"
                  />
                  <div className="profile-location-text">
                    Dublin, Ireland 🇮🇪
                  </div>
                </div>
                <p className="profile-bio">
                  👨🏻‍💻 • Senior Software Engineer
                  <br />
                  📸 • Content Creation / Tech
                </p>
              </div>
              <div className="contact-button-wrapper">
                <a
                  href="https://resolvebyme.com/"
                  data-em="YXNoZXJfMyU0MGhvdG1haWwuY28udWs="
                  className="contact-button w-inline-block"
                >
                  <img
                    src="https://cdn.solo.to/images/contact/email-min.svg"
                    className="contact-button-image"
                  />
                  <div className="contact-button-text">Email</div>
                </a>
              </div>
              <div className="social-button-wrapper">
                <div className="social-button-wrapper-row">
                  <a
                    href="https://instagram.com/francojg22"
                    id="ist"
                    className="minimal-button w-inline-block soc-instagram"
                  >
                    <img
                      src="https://cdn.solo.to/images/social/instagram-min.svg"
                      alt="Instagram"
                      className="minimal-button-icon"
                    />
                  </a>
                  {/* <a
                    href="https://tiktok.com/@francojg22"
                    id="ttk"
                    className="minimal-button w-inline-block soc-tiktok"
                  >
                    <img
                      src="https://cdn.solo.to/images/social/tiktok-min.svg"
                      alt="TikTok"
                      className="minimal-button-icon"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section link-section">
          <div className="section-container">
            <div className="profile-link-wrapper">
              <div className="divider-wrapper divider-wrapper-title divider-wrapper-top">
                <h2 style={{ color: "#3673FC" }} className="divider-title">
                  Building .. in progress
                </h2>
              </div>
              <div className="link-item-wrapper link-item-wrapper-full-width">
                <a
                  href="https://resolvebyme.com"
                  id="NjEyNjk5Mw"
                  className="link-button link-button-full-width w-inline-block"
                >
                  <div
                    className="link-icon-float"
                    style={{ boxShadow: "0 8px 14px -4px rgba(80,80,80,0.65)" }}
                  >
                    <img
                      src="pencil-308509_640.png"
                      className="link-icon-float-image"
                    />
                  </div>
                  <div className="link-block-text-wrapper">
                    <div className="link-name link-name-xs">
                      Landing pages contact
                    </div>
                    <div className="link-url">https://resolvebyme.com</div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://cdn.solo.to/images/link-button-arrow.svg"
                      class="link-arrows"
                    />
                  </div>
                </a>
              </div>

              <div className="link-item-wrapper link-item-wrapper-full-width">
                <a
                  href="http://resolvebyme.blogspot.com"
                  id="NjEyNjk5Mw"
                  className="link-button link-button-full-width w-inline-block"
                >
                  <div
                    className="link-icon-float"
                    style={{ boxShadow: "0 8px 14px -4px rgba(80,80,80,0.65)" }}
                  >
                    <img
                      src="pencil-308509_640.png"
                      className="link-icon-float-image"
                    />
                  </div>
                  <div className="link-block-text-wrapper">
                    <div className="link-name link-name-xs">Updates post</div>
                    <div className="link-url">
                      http://resolvebyme.blogspot.com
                    </div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://cdn.solo.to/images/link-button-arrow.svg"
                      class="link-arrows"
                    />
                  </div>
                </a>
              </div>

              <div className="link-item-wrapper link-item-wrapper-full-width">
                <a
                  href="https://www.amazon.co.uk/dp/B0C2JN6GYD"
                  id="NjEyNjk5Mw"
                  className="link-button link-button-full-width w-inline-block"
                >
                  <div
                    className="link-icon-float"
                    style={{ boxShadow: "0 8px 14px -4px rgba(80,80,80,0.65)" }}
                  >
                    <img
                      src="pencil-308509_640.png"
                      className="link-icon-float-image"
                    />
                  </div>
                  <div className="link-block-text-wrapper">
                    <div className="link-name link-name-xs">
                      How to become a software developer
                    </div>
                    <div className="link-url">
                      https://www.amazon.co.uk/Becoming-Software-Developer-2023-2024-become-ebook/
                    </div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://cdn.solo.to/images/link-button-arrow.svg"
                      class="link-arrows"
                    />
                  </div>
                </a>
              </div>
              <div className="link-item-wrapper link-item-wrapper-full-width">
                <a
                  href="https://resolvebyme.ghost.io/chat-gpt-on-news-now/"
                  id="NjEyNjk5Mw"
                  className="link-button link-button-full-width w-inline-block"
                >
                  <div
                    className="link-icon-float"
                    style={{ boxShadow: "0 8px 14px -4px rgba(80,80,80,0.65)" }}
                  >
                    <img
                      src="pencil-308509_640.png"
                      className="link-icon-float-image"
                    />
                  </div>
                  <div className="link-block-text-wrapper">
                    <div className="link-name link-name-xs">
                      Tech news and AI
                    </div>
                    <div className="link-url">
                      https://resolvebyme.ghost.io/chat-gpt-on-news-now/
                    </div>
                  </div>
                  <div className="link-arrow-wrapper">
                    <img
                      src="https://cdn.solo.to/images/link-button-arrow.svg"
                      class="link-arrows"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <a href="" className="linkpage-cta w-inline-block">
          <img src="146065399.png" width={500} className="footer-brand-image" />
          Want to create your own bio page ? contact me for more at{" "}
          <spa>franco@resolvebyme.com</spa>
        </a>
      </div>
      {/* design © 2023 by  franco@resolvebyme.com */}
    </div>
  );
}
