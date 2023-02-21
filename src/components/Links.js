import React from "react";

function Links(props) {
  return (
    <h3>
      Links
      <a href={props.git}>https://github.com/liza</a>
      <a href={props.link}>https://www.linkedin.com/in/liza/</a>
    </h3>
  );
}

export default Links;
