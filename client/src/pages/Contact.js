import React from "react";
import Jumbotron from "../components/Jumbotron";
import darrin from "../assets/Darrin.jpg";
import anita from "../assets/Anita.png";
import matt from "../assets/Matt.jpg";
import inaia from "../assets/Inaia.jpg";

const Contact = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Contact the Mother Ship</h1>
        <h5>No Returns...</h5>
        <div>
          Project Repository:
          <a href="https://github.com/darrinling/real-fake-store">
            The Real Fake Store
          </a>
        </div>

        <div>
          <img src={anita} height={250} />
          <img src={darrin} height={250} />
          <img src={inaia} height={250} />
          <img src={matt} height={250} />
        </div>
        <div>
          Anita's Github:
          <a href="https://github.com/Neeta525"> Neeta525</a>
        </div>
        <div>
          Darrin's Github:
          <a href="https://github.com/darrinling"> darrinling</a>
        </div>
        <div>
          Inaia's Github:
          <a href="https://github.com/InaiaK"> InaiaK</a>
        </div>
        <div>
          Matt's Github:
          <a href="https://github.com/MattP303"> MattP303</a>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Contact;
