(function(l) {
  if (l.search[1] === '/' ) {
    const decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.history.replaceState(null, null as any,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

export {}