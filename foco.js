 (function(){
    const el = document.getElementById('tickerNum');
    if(!el) return;
    let totalSeconds = 2*3600 + 47*60 + 13;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced) return;
    setInterval(function(){
      totalSeconds++;
      const h = String(Math.floor(totalSeconds/3600)).padStart(2,'0');
      const m = String(Math.floor((totalSeconds%3600)/60)).padStart(2,'0');
      const s = String(totalSeconds%60).padStart(2,'0');
      el.textContent = h+':'+m+':'+s;
    }, 1000);
  })();