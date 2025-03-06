import React, { useEffect, useState } from 'react';

function GlobalSuspense() {
    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${
        isVisible ? '' : 'fade-out'
      }`}
    >
          <div className="text-center">
    
    <div className="card-body pt-0 pb-2">
                                    
                                    <div className="spinner-border spinner-border-customglobal-3 border-success" ></div>
                                    </div>
                                    <div>loading</div>
                                </div>
                                </div>
  )
}

export default GlobalSuspense