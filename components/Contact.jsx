function Contact(props) {
  return (
    <a target="_blank" href={props.redirects}>
      <div className="max-w-[25rem] p-6 text-center flex mx-8 flex-wrap h-[15rem] bor">
        <h1>{props.info}</h1>
      </div>
    </a>
  );
}
export default Contact;
