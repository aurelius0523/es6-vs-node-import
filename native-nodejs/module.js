const myModule = {
  myFunc: function (type) {
    console.log(`Imported using ${type} keywords`);
  },
};

// notice that the last export takes precedence
module.exports = myModule;
