    function setMode(mode) {
      if (mode === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
        localStorage.setItem('theme', mode);
    }