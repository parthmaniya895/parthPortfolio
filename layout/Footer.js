const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>
            @ Parth-folio {new Date().getFullYear()}, Design By{" "}
            <a target="_blank" href="https://www.parthmaniya.com/">
              Parth Maniya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
