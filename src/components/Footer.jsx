import { Facebook, Factory, Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer container-width">
      <h2>University</h2>
      <div className="fooer-grid-1x2">
        <span className="footer-left">
          <h2>OUR ADDREES</h2>
          <p>
            National Road 8, Thnal Keng Village, Smoang Cheung
            Commune,Kamchaymear District, Prey Veng Province, CAMBODIA.
          </p>
        </span>
        <span className="footer-right">
          <h2>OUR ADDREES</h2>
          <ul>
            <li>
              <a href="">
                <Facebook size={32} />
              </a>
            </li>
            <li>
              <a href="">
                <Globe />
              </a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Footer;
