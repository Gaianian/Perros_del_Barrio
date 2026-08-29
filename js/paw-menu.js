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


    /* =========================================
       SET MENU STATE
       ========================================= */

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


    /* =========================================
       TOGGLE MENU
       ========================================= */

    function toggleMenu(event) {

      event.stopPropagation();

      const isOpen =
        pawMenu.classList.contains(
          "open"
        );

      setMenuState(!isOpen);

    }


    /* =========================================
       CLICK MAIN PAW
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
       CLICK INSIDE MENU
       ========================================= */

    pawMenu.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

      }
    );


    /* =========================================
       CLICK OUTSIDE MENU
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
