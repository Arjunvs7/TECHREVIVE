// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the TechRevive Home Page</h1>
//     </div>
//   );  
// };

// export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <HomeContent />
    </div>
  );
};

export default Home;
