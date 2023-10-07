import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const Reveal = ({ children, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const revealElement = ref.current;
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    observer.observe(revealElement);
    return () => observer.unobserve(revealElement);
  }, []);

  const revealClass = classNames('transition-transform duration-500', {
    'translate-x-10': direction === 'left',
    'translate-x--10': direction === 'right',
    'translate-y-10': direction === 'up',
    'translate-y--10': direction === 'down',
  });

  return (
    <div
      ref={ref}
      className={`transform ${revealClass} opacity-0 ${isVisible ? 'revealed' : ''}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
