import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 min-h-[100vh]">
      <h1 className="title1">¡Oops!</h1>
      <p className="paragraph text-center">
        Parece que te has perdido. ¡No te preocupes, estamos trabajando en ello!
      </p>
      <Link to="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
}

export default NotFound;
