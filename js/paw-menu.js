document.addEventListener(
  "DOMContentLoaded",
  function () {

    const pawMenu =
      document.getElementById("pawMenu");

    if (!pawMenu) {
      return;
    }

    /*
      Desktop and phone are both intentionally
      open in this version.
    */
    pawMenu.classList.add("open");

  }
);
