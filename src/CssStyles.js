// import logo from './logo.svg';
import "./CssStyles.css";
import CssModules from "./CssModules";
import StyledComponents from "./StyledComponents";

function CssStyles() {
  const cssStylesItems = {
    boxShadow: "0 0 15px -5px #777777",
    borderRadius: 10,
    minWidth: 400,
  };

  const cssStylesHead = {
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#4faf48",
  };

  const cssStylesHeadHeading = {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    fontSize: 32,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  };

  const cssStylesBody = {
    padding: 20,
    borderRadius: "0 0 10px 10px",
  };

  const cssStylesBodyText = {
    fontSize: 16,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  };

  return (
    <div className="Css-styles">
      <div className="Css-styles-box">
        <ul className="Css-styles-list">
          <li className="Css-styles-items">
            <div className="Css-styles-head">
              <h2 className="Css-styles-head__heading">通常のCSS</h2>
            </div>
            <div className="Css-styles-body">
              <p className="Css-styles-body__text">
                通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。通常のCSSの特徴をここに書く。
              </p>
            </div>
          </li>
          <li style={cssStylesItems}>
            <div style={cssStylesHead}>
              <h2 style={cssStylesHeadHeading}>インラインスタイル</h2>
            </div>
            <div style={cssStylesBody}>
              <p style={cssStylesBodyText}>
                インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。インラインスタイルの特徴をここに書く。
              </p>
            </div>
          </li>
          <CssModules />
          <StyledComponents />
        </ul>
      </div>
    </div>
  );
}

export default CssStyles;
