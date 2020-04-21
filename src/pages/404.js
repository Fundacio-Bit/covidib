import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";
import errorImage from "../static/404Error.svg";

// import './index.css'

export default () => (
  <Styled.root>
    <main class="errorContainer">
      <div class="errorDiv">
        <div>
          <img src={errorImage} alt="Error 404" height="200" width="200" />
        </div>
        <div>
          <Styled.h1>No s'ha trobat aquesta pàgina</Styled.h1>
        </div>
        <div>
          <p>Pot tornar a la pàgina d'inici seguint l'enllaç:</p>
        </div>
        <div>
          <Link to="/">Tornar a Inici</Link>
        </div>
      </div>
    </main>
  </Styled.root>
);
