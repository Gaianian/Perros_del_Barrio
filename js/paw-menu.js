document.addEventListener(
  "DOMContentLoaded",
  function () {

    const pawMenu =
      document.getElementById("pawMenu");

    const pawButton =
      document.getElementById("pawMenuButton");


    if (!pawMenu || !pawButton) {
      return;
    }


    function setMenuState(open) {

      pawMenu.classList.toggle(
        "open",
        open
      );


      pawButton.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );


      pawButton.setAttribute(
        "aria-label",
        open
          ? "Cerrar menú"
          : "Abrir menú"
      );

    }


    function toggleMenu(event) {

      event.stopPropagation();

      const isOpen =
        pawMenu.classList.contains(
          "open"
        );

      setMenuState(!isOpen);

    }


    /* =========================================
       OPEN / CLOSE PAW
       ========================================= */

    pawButton.addEventListener(
      "click",
      toggleMenu
    );


    /* =========================================
       KEYBOARD CONTROL
       ========================================= */

    pawButton.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          toggleMenu(event);

        }


        if (event.key === "Escape") {

          setMenuState(false);

        }

      }
    );


    /* =========================================
       CLICKING INSIDE MENU
       ========================================= */

    pawMenu.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

      }
    );


    /* =========================================
       CLICKING OUTSIDE MENU
       ========================================= */

    document.addEventListener(
      "click",
      function () {

        setMenuState(false);

      }
    );


    /* =========================================
       ESCAPE CLOSES MENU
       ========================================= */

    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {

          setMenuState(false);

        }

      }
    );

  }
);
