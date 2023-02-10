import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-4">
      <button
        type="button"
        onClick={toTop}
        className={`bg-[#3498db]/[0.5] hover:bg-[#3498db] inline-flex items-center rounded-sm p-3 text-white shadow-sm transition-opacity  ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
};
export default ScrollToTop;
