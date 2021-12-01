/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"

import "../assets/scss/style.scss"
import Footer from "./footer"

const LayoutNoNav = ({ children, className, props }) => {

  const [colorMode, setColorMode] = useColorMode();
  setColorMode("default");

  return (
    <div className="primary-container">
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutNoNav
