import "react";

const FooterLinks = [
  {
    head: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    head: "Contact",
    links: ["Help/FAQ", "Press", "Affiliates"],
  },
  {
    head: "More",
    links: ["Airliefees", "Airline", "Low fare tips"],
  },
];
function Footer() {
  return (
    <div className="container mx-auto grid md:grid-cols-10 md:grid-rows-2 md:items-start mt-20 md:mt-28 lg:mt-40">
      <div className="md:col-span-4 lg:col-span-3">
        <Logo2 className="mx-auto md:mx-0" />
      </div>
      <div className="md:col-span-5 md:row-span-2 lg:col-span-4 flex flex-col md:flex-row items-center justify-around mb-2">
        {FooterLinks.map((link,i) => {
          return (
            <div className="text-center md:text-left" key={i}>
              <h1 className="font-bold">{link.head}</h1>
              <div className="flex flex-col gap-2 mt-4">
                {link.links.map((link,index) => {
                  return (
                    <a href="#" className="font-light " key={index}>
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center md:col-span-4  md:block lg:col-span-3">
        <div className="flex gap-2">
          <div className="w-10 h-10 shadow-md bg-white grid place-items-center rounded-full">
            <Facebook />
          </div>
          <div className="w-10 h-10 shadow-md angular grid place-items-center rounded-full">
            <Instagram />
          </div>
          <div className="w-10 h-10 shadow-md bg-white grid place-items-center rounded-full">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
      }

function StoreBtn({ Icon, headText, footText, play = true }) {
  return (
    <div className="rounded-3xl bg-black text-white flex py-1 px-3 items-center gap-0.5">
      {Icon}
      <div className="flex flex-col">
        <h3 className={`${play ? "uppercase text-bold text-xs" : "text-xs font-bold"}`}>
          {headText}
        </h3>
        <h2 className={`${play ? "font-light text-xs" : "font-bold text-xs"}`}>
          {footText}
        </h2>
      </div>
    </div>
  );
}
export default Footer;
