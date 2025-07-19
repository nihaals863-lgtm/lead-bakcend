import React, { useState, useEffect } from 'react';

function HappyCustomer() {
  const [counts, setCounts] = useState({
    customers: 0,
    branches: 0,
    partners: 0,
    awards: 0,
  });

  useEffect(() => {
    const intervals = [];

    const updateCount = (key, targetCount, delay) => {
      const intervalId = setInterval(() => {
        if (counts[key] < targetCount) {
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: prevCounts[key] + 1,
          }));
        } else {
          clearInterval(intervalId);
          // Reset the count to 0 after reaching targetCount
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: 300,
          }));
        }
      }, delay);
      intervals.push(intervalId);
    };

    updateCount('customers', 300, 10); 
    updateCount('branches', 300, 20); 
    updateCount('partners', 300, 30); 
    updateCount('awards', 300, 40); 

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="happy-customer">
      <div className="count-container">
        <div className="count-item">
          <span className="count-number">{counts.customers}</span><br/>
          <span className="count-label">HAPPY CUSTOMERS</span>
        </div>
        <div className="count-item">
          <span className="count-number">{counts.branches}</span> <br/>
          <span className="count-label">BRANCHES</span>
        </div>
        <div className="count-item">
          <span className="count-number">{counts.partners}</span> <br/>
          <span className="count-label">PARTNERS</span>
        </div>
        <div className="count-item">
          <span className="count-number">{counts.awards}</span> <br />
          <span className="count-label">AWARDS</span>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomer;