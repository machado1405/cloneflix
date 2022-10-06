import React from "react";

export default function Head(props) {
  React.useEffect(() => {
    document.title = "CloneFlix | " + props.titulo;
  }, [props]);

  return <></>;
}
