import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, isVisible, delay]);

  return {
    ref,
    isVisible: isVisible || inView,
    inView
  };
};

export const useStaggeredAnimation = (items: any[], baseDelay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getStaggerDelay = (index: number) => {
    return baseDelay + (index * 100);
  };

  return {
    ref,
    isVisible,
    getStaggerDelay
  };
};