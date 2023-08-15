import React, { useEffect } from 'react';

const Wrapper = ({ children }) => {
  useEffect(() => {
    // Load the Tawk.to widget script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/64cbb56dcc26a871b02d0d74/1h6trpd23';
    script.async = true;
    document.head.appendChild(script);

    // Clean up the Tawk.to widget when unmounting
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  return <>{children}</>;
};

export default Wrapper;
