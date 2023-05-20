import logo from '../../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-teal-100 text-base-content">
      <div>
        <img className='logo' src={logo} alt="" />
        <h1 className='font-bold text-2xl text-teal-900'>The ToyToy shop </h1>
        <p className='font-bold text-teal-900'>
        Come visit our toy shop today <br />  and let the magic of play inspire <br />  you. We can't wait to see the smiles <br />  on the faces of children and parents alike.
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
