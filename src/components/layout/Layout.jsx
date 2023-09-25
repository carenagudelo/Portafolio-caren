import Header from "../commons/header/header";
import Footer from "../commons/footer/footer";
import "./Layout.scss";

const Layout = ({children}) => {
  return (
    <div className="layout_container">
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
