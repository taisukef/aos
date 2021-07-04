import AOS from "./src/js/aos.js";
import { css } from "https://js.sabae.cc/stdom.js";

css("../aos.css");
AOS.init();

class AOSJS extends HTMLElement {
  constructor() {
    super();
    const options = {};
    const keys = Object.keys(AOS.options);
    for (let i = 0; i < this.attributes.length; i++) {
      const a = this.attributes[i];
      if (a.name.startsWith("aos-")) {
        const an = a.name.substring(4);
        const key = keys.find(k => k.toLowerCase() == an);
        if (key) {
          options[key] = a.value;
        }
      }
    }
    AOS.init(options);
  }
}

customElements.define("aos-js", AOSJS);

export { AOS };
