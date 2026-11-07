import { about } from "./about";
import { common } from "./common";
import { contact } from "./contact";
import { home } from "./home";
import { industries } from "./industries";
import { products } from "./products";
import { quote } from "./quote";
import { resources } from "./resources";
import { services } from "./services";

/**
 * All site copy in one place. Pages and components import it directly rather
 * than receiving it as a prop, so editing text never means touching markup.
 */
export const content = {
  common,
  home,
  products,
  industries,
  services,
  resources,
  about,
  contact,
  quote,
};

export type Content = typeof content;

export default content;
