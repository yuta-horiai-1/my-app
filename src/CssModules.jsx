import classes from "./CssModules.module.css";

export const CssModules = () => {
  return (
    <li className={classes.cssStylesItems}>
      <div className={classes.cssStylesHead}>
        <h2 className={classes.cssStylesHeadHeading}>CSS Modules</h2>
      </div>
      <div className={classes.cssStylesBody}>
        <p className={classes.cssStylesBodyText}>
          CSS Modulesの特徴をここに書く。CSS Modulesの特徴をここに書く。CSS
          Modulesの特徴をここに書く。CSS Modulesの特徴をここに書く。CSS
          Modulesの特徴をここに書く。CSS Modulesの特徴をここに書く。CSS
          Modulesの特徴をここに書く。CSS Modulesの特徴をここに書く。CSS
          Modulesの特徴をここに書く。CSS Modulesの特徴をここに書く。
        </p>
      </div>
    </li>
  );
};

export default CssModules;
