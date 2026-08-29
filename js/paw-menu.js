document.addEventListener(
  "DOMContentLoaded",
  function () {

    /* =========================================
       PAW MENU
       ========================================= */

    const pawMenu =
      document.getElementById("pawMenu");

    const pawButton =
      document.getElementById("pawMenuButton");


    if (pawMenu && pawButton) {

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


      /* -----------------------------------------
         OPEN / CLOSE WITH MOUSE
         ----------------------------------------- */

      pawButton.addEventListener(
        "click",
        toggleMenu
      );


      /* -----------------------------------------
         KEYBOARD CONTROL
         ----------------------------------------- */

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


      /* -----------------------------------------
         DO NOT CLOSE WHEN CLICKING INSIDE MENU
         ----------------------------------------- */

      pawMenu.addEventListener(
        "click",
        function (event) {

          event.stopPropagation();

        }
      );


      /* -----------------------------------------
         CLOSE WHEN CLICKING ELSEWHERE
         ----------------------------------------- */

      document.addEventListener(
        "click",
        function () {

          setMenuState(false);

        }
      );


      /* -----------------------------------------
         CLOSE WITH ESCAPE
         ----------------------------------------- */

      document.addEventListener(
        "keydown",
        function (event) {

          if (event.key === "Escape") {

            setMenuState(false);

          }

        }
      );

    }


    /* =========================================
       FILTER CUE
       ========================================= */

    const filterCue =
      document.getElementById("filterCue");


    if (filterCue) {

      /*
        The filter cue begins fully visible.

        After 7 seconds it becomes quieter so it
        continues to identify the filter without
        competing visually with the application.
      */

      window.setTimeout(
        function () {

          filterCue.classList.add(
            "filter-cue--quiet"
          );

        },
        7000
      );

    }

  }
);
