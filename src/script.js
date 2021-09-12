window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-t'; else nav.className = 'navbar navbar-expand-lg fixed-top navbar-light bg-light';
};



