import "react";

function RoundedIcon({ img, className = "" }) {
  return (
    <div
      className={"rounded-full grid place-items-center " + className}
    >
      <img src={img} alt="" className="" />
    </div>
  );
}

export default RoundedIcon;
