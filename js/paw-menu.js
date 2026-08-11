document.addEventListener("DOMContentLoaded", function () {

  const pawMenu = document.getElementById("pawMenu");
  const pawButton = document.getElementById("pawMenuButton");

  if (!pawMenu || !pawButton) {
    return;
  }


  function setMenuState(open) {

    pawMenu.classList.toggle("open", open);

    pawButton.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

    pawButton.setAttribute(
      "aria-label",
      open ? "Cerrar menú" : "Abrir menú"
    );

  }


  function toggleMenu(event) {

    event.stopPropagation();

    const isOpen =
      pawMenu.classList.contains("open");

    setMenuState(!isOpen);

  }


  /* Click / tap center pad */

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


  /* Clicking inside the menu should not
     immediately trigger outside-click close */

  pawMenu.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

    }
  );


  /* Click elsewhere to close */

  document.addEventListener(
    "click",
    function () {

      setMenuState(false);

    }
  );


  /* Escape closes from anywhere */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        setMenuState(false);

      }

    }
  );

});
