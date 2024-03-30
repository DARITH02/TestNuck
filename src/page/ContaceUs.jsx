const ContaceUs = () => {
  return (
    <div className="container-width contact">
      <img
        src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
        alt=""
      />
      <article className="contact-grid-1x2">
        <div className="contact-box">
          <h2>TALK TO US TODAY</h2>
          <form>
            <input type="email" placeholder="Input Email......." />
            <input type="text" placeholder="Input your name....." />
            <input type="text" placeholder="Input Subjuct........" />
          </form>
          <button className="btn btn-submit">Submit</button>
        </div>
        <div className="contact-box">
          <h2>CONTACT INFO</h2>
          <span className="address-contact">
            <span>
              <address>
                <strong>Address: </strong>
                Building 17, Street 163, Sangkat Olympic, Khan Boeng Keng Kang,
                Phnom Penh
              </address>
            </span>
          </span>
          <span className="socail-media">
            <h2>SOCIAL MEDIA</h2>
            <ul>
              <li>
                FACEBOOK PAGE:
                <a href="">
                  University of Cheasim Kamchaymear(សាកលវិទ្យាល័យ ជាស៊ីម
                  កំចាយមា)
                </a>
              </li>
              <li>
                WEBSITE:
                <a href="">www//https/nock.edu.kh</a>
              </li>
              <li>
                TELEGRAM:
                <a href="">@nuckEduKh</a>
              </li>
            </ul>
          </span>
        </div>
      </article>
    </div>
  );
};

export default ContaceUs;
