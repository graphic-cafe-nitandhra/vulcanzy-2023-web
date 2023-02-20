function Contact({ redirects, info, icon }) {
  return (
    <a target="_blank" href={redirects}>
      <div className="max-w-[24rem] p-12 text-center flex flex-col gap-3 items-center justify-between flex-wrap h-full bor">
        {icon}
        <h1>{info}</h1>
      </div>
    </a>
  );
}
export default Contact;
