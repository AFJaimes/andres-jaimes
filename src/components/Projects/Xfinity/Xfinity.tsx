import { FunctionComponent } from "react";
import css from "./Xfinity.module.scss";

const Xfinity: FunctionComponent = () => {
  return (
    <section className={`${css.root}`}>
      <p className={css.text}>
        Defined and worked as dev leader on the architecture of the Comcast
        Xfinity minigames showcase room
      </p>
      <a
        title="Abbvie Global"
        href="https://www.lbbonline.com/news/xfinitys-new-in-store-gaming-experience-aims-to-change-the-way-customers-interact-with-xfinity-retail-stores/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        Xfinity's New In-Store Gaming Experience Aims to Change the Way
        Customers Interact with Xfinity Retail Stores
      </a>
      <br />
      <a
        title="Abbvie Global"
        href="https://elephant.is/article/xfinity-campaign/"
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        Xfinity Gamifies In-Person Shopping in over 150 Stores
      </a>

      <img alt="Xfinity minigames" className={css.images} src="xfinity.jpeg" />
      <video width="600" controls loop muted className={css.images}>
        <source src="xfinity1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="600" controls loop muted className={css.images}>
        <source src="xfinity2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Xfinity;
