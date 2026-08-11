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



    /* Click or tap center paw */

    pawButton.addEventListener(
      "click",
      toggleMenu
    );



    /* Keyboard */

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



    /*
      Prevent clicks on toe links from
      triggering the outside-click listener.
    */

    pawMenu.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

      }
    );



    /* Click elsewhere closes menu */

    document.addEventListener(
      "click",
      function () {

        setMenuState(false);

      }
    );



    /* Escape closes menu */

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
