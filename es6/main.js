import { myModule } from "./module.js";

/**
 * Remember, need to set 'type': module in package.json
 */
(() => {
  myModule.myFunc("es6");
})();
