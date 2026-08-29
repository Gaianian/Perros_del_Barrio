document.addEventListener(
  "DOMContentLoaded",
  function () {

    const pawMenu =
      document.getElementById("pawMenu");

    const pawButton =
      document.getElementById("pawMenuButton");

    const filterButton =
      document.querySelector(".filter-button");


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


      pawButton.addEventListener(
        "click",
        toggleMenu
      );


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


      pawMenu.addEventListener(
        "click",
        function (event) {

          event.stopPropagation();

        }
      );


      document.addEventListener(
        "click",
        function () {

          setMenuState(false);

        }
      );


      document.addEventListener(
        "keydown",
        function (event) {

          if (event.key === "Escape") {

            setMenuState(false);

          }

        }
      );

    }


    /*
      The ArcGIS filter is inside an iframe,
      so the website cannot directly click it
      through normal DOM access.

      This button is therefore positioned over
      the existing ArcGIS filter control so the
      user's click passes visually to the same spot.
    */

    if (filterButton) {

      filterButton.addEventListener(
        "click",
        function () {

          filterButton.style.pointerEvents = "none";

          window.setTimeout(
            function () {

              filterButton.style.pointerEvents = "auto";

            },
            250
          );

        }
      );

    }

  }
);
