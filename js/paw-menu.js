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


    const MOBILE_MAX = 750;


    function isMobile() {

      return window.innerWidth <= MOBILE_MAX;

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


      if (isMobile()) {

        pawButton.setAttribute(
          "aria-label",
          open
            ? "Cerrar menú"
            : "Abrir menú"
        );

      } else {

        pawButton.setAttribute(
          "aria-label",
          "Menú principal"
        );

      }

    }


    function applyResponsiveState() {

      if (isMobile()) {

        /*
          Phone starts closed.
        */

        setMenuState(false);

      } else {

        /*
          Desktop always open.
        */

        setMenuState(true);

      }

    }


    function toggleMobileMenu(event) {

      if (!isMobile()) {
        return;
      }


      event.preventDefault();
      event.stopPropagation();


      const isOpen =
        pawMenu.classList.contains(
          "open"
        );


      setMenuState(!isOpen);

    }


    /*
      On phone, tapping the central paw
      opens/closes the menu.

      On desktop it remains permanently open.
    */

    pawButton.addEventListener(
      "click",
      toggleMobileMenu
    );


    pawButton.addEventListener(
      "keydown",
      function (event) {

        if (!isMobile()) {
          return;
        }


        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();
          event.stopPropagation();

          const isOpen =
            pawMenu.classList.contains(
              "open"
            );

          setMenuState(!isOpen);

        }


        if (event.key === "Escape") {

          setMenuState(false);

        }

      }
    );


    /*
      Clicking elsewhere closes only
      the phone menu.
    */

    document.addEventListener(
      "click",
      function (event) {

        if (!isMobile()) {
          return;
        }


        if (
          !pawMenu.contains(
            event.target
          )
        ) {

          setMenuState(false);

        }

      }
    );


    document.addEventListener(
      "keydown",
      function (event) {

        if (
          isMobile() &&
          event.key === "Escape"
        ) {

          setMenuState(false);

        }

      }
    );


    /*
      Re-evaluate only when crossing
      between desktop and mobile.
    */

    let previousMobileState =
      isMobile();


    window.addEventListener(
      "resize",
      function () {

        const currentMobileState =
          isMobile();


        if (
          currentMobileState !==
          previousMobileState
        ) {

          previousMobileState =
            currentMobileState;

          applyResponsiveState();

        }

      }
    );


    applyResponsiveState();

  }
);
