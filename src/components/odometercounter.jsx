import Odometer from 'react-odometerjs';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';  // Import useInView

function OdometerCounter({ value, showPlus = false, duration = 500 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });  // Use the Intersection Observer

  // Trigger the counter animation when the component is in view
  useEffect(() => {
    if (inView) {
      setCount(value);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-8xl font-bold text-[#e4e4e4]  text-center">
        
<div className='flex items-center justify-center '>

      <Odometer value={count} format="d" duration={duration} />
      {showPlus && <span className="text-16xl px-2">+</span>}
</div>
        
    </div>
  );
}

export default OdometerCounter;
