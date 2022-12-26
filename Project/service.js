if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log("sw registered");
      console.log(reg);
    }).catch(error => {
      console.log("sw error");
      console.log(error);
    });
  }