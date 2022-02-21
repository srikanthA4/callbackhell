function one(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 1;
    callback();
  }, 1000);
};
function two(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 2;
    callback();
  }, 1000);
};
function three(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 3;
    callback();
  }, 1000);
};
function four(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 4;
    callback();
  }, 1000);
};
function five(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 5;
    callback();
  }, 1000);
};

function six(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 6;
    callback();
  }, 1000);
};

function seven(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 7;
    callback();
  }, 1000);
};

function eight(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 8;
    callback();
  }, 1000);
};

function nine(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 9;
    callback();
  }, 1000);
};

function ten(callback) {
  setTimeout(() => {
      document.getElementById("myid").innerHTML = 10;
    callback();
  }, 1000);
};

ten(() => {
  nine(() => {
      eight (() => {
          seven(() => {
              six(() => {
                  five(() => {
                      four(() => {
                          three(() => {
                              two(() => {
                                  one(() => {
                                      setTimeout(() =>{
                                          document.getElementById("myid").innerHTML = "well come full stack developer world";
                                      }, 2000);                                        
                                  })
                              })
                          })
                      })
                  })
              })
          })
      })
  })
});
