import "./NavLinks.css";

const NavLinks = (props) => {
  const refs = {
    Home: props.navigationRefs.homeSectionRef,
    About: props.navigationRefs.aboutSectionRef,
    Skills: props.navigationRefs.skillsSectionRef,
    Contact: props.navigationRefs.contactSectionRef,
  };
  const executeScroll = (e) => {
    e.preventDefault();
    refs[e.target.innerText].current.scrollIntoView();
    props.toggleNavLinksDisplay();
  };

  return (
    <ul className="nav-links">
      <li className="nav-link" onClick={executeScroll}>
        Home
      </li>
      <li className="nav-link" onClick={executeScroll}>
        About
      </li>
      <li className="nav-link" onClick={executeScroll}>
        Skills
      </li>
      <li className="nav-link" onClick={executeScroll}>
        Projects
      </li>
      <li className="nav-link" onClick={executeScroll}>
        Contact
      </li>
    </ul>
  );
};

export default NavLinks;
