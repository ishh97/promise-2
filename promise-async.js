const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function GetAllCookies() {
  setTimeout(() => {
    let str = '';
    cookies.forEach((cookie) => {
      str += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = str;
  }, 1000);
}
// Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.

// Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list

function CreateNewCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cookies.push(newCookie);
      const flag = true;

      if (flag == true) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
// Progression 7: creating a new async function
async function asyncFun() {
  await CreateNewCookie(newCookie);
  GetAllCookies();
}
// calling the new async function

asyncFun();
