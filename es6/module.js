/**
 * Notice that by converting this to function instead of variable
 * you lose the ability to have internal state
 */
export const myModule = {
  myFunc: function (type) {
    console.log(`Imported using ${type} keywords`);
  },
};
