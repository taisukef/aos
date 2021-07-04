import AOS from "./src/js/aos.js";
import { css } from "https://js.sabae.cc/stdom.js";

css("../aos.css");
AOS.init();

class AOSES extends HTMLElement {
  constructor() {
    super();
    const options = {};
    const keys = Object.keys(AOS.options);
    const pres = ["aos-", "data-aos-", ""];
    for (let i = 0; i < this.attributes.length; i++) {
      const a = this.attributes[i];
      for (const pre of pres) {
        if (a.name.startsWith(pre)) {
          const an = a.name.substring(pre.length);
          const key = keys.find(k => k.toLowerCase() == an);
          if (key) {
            options[key] = a.value;
          }
          break;
        }
      }
    }
    AOS.init(options);
  }
}

customElements.define("aos-es", AOSES);

export { AOS };
