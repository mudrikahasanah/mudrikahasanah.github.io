/**
 * @author [Muhammad Daffa Ilhami]
 * @email [mdaffailhami@gmail.com]
 * @create date 2021-02-08 | 21:04:27
 * @modify date 2021-02-10 | 17:08:19
 * @desc [description]
 */

const elementBasedOnPlatform = [
  document.getElementById("content"),
  document.getElementById("profile"),
  document.getElementById("banner"),
];

function webBasedOnPlatform() {
  // Jika lebar layarnya ukuran mobile
  if (window.innerWidth <= 766) {
    elementBasedOnPlatform.forEach((element) => {
      element.classList.add("mobile");
      element.classList.remove("desktop");
    });
  } else {
    // Jika lebar layarnya ukuran desktop
    elementBasedOnPlatform.forEach((element) => {
      element.classList.add("desktop");
      element.classList.remove("mobile");
    });
  }
}

// Web Berdasarkan Platform (default)
webBasedOnPlatform();
// Web Berdasarkan Platform (on resize)
window.addEventListener("resize", () => {
  webBasedOnPlatform();
});
