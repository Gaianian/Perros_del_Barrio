document.addEventListener(
  "DOMContentLoaded",
  function () {

    const pawMenu =
      document.getElementById("pawMenu");

    const pawButton =
      document.getElementById("pawMenuButton");


    if (!pawMenu) {
      return;
    }


    /* =========================================
       DESKTOP

       Keep paw permanently open.
       ========================================= */

    function setDesktopMenu() {

      if (window.innerWidth > 750) {

        pawMenu.classList.add("open");


        if (pawButton) {

          pawButton.setAttribute(
            "aria-expanded",
            "true"
          );

          pawButton.setAttribute(
            "aria-label",
            "Menú principal"
          );

        }

      }

    }


    setDesktopMenu();


    window.addEventListener(
      "resize",
      setDesktopMenu
    );

  }
);
