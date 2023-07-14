import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="content">
      <div className="text-7xl text-center pt-32 pb-12 lg:pt-48 lg:pb-12 font-bold tracking-tighter leading-tight">
        <h1>Bi Nguyen.</h1>
        <h1>Software Engineer.</h1>
      </div>
      <div className="text-center px-12">
        <p>I'm passionate about creating things for others to enjoy.</p>
      </div>
      <div className="cards my-24 px-24">
        <div className="cards-content grid grid-cols-24 gap-y-16 max-w-screen-2xl mx-auto w-full">
          <Card
            bg={'bg-[#40e2a1]'}
            projectName={'3.16'}
            projectCompany={'K4'}
            imageSrc={'/system-agent.svg'}
            imageW={810}
            imageH={422}
            imageAlt={'System Agent'}
            start={'col-start-1'}
            end={'col-end-11'}
          />
          <Card
            bg={'bg-[#ff6666]'}
            projectName={'IoT Devices'}
            projectCompany={'K4'}
            imageSrc={'/iot-devices.svg'}
            imageW={1300}
            imageH={600}
            imageAlt={'K4 IoT Devices'}
            start={'col-start-12'}
            end={'col-end-24'}
          />
          <Card
            bg={'bg-[#7cb2e8]'}
            projectName={'Cloud Mapping'}
            projectCompany={'K4'}
            imageSrc={'/cloud-mapping.svg'}
            imageW={1300}
            imageH={600}
            imageAlt={'Cloud Mapping'}
            start={'col-start-1'}
            end={'col-end-16'}
          />
          <Card
            bg={'bg-[#ff69f8]'}
            projectName={'Thingsboard migration'}
            projectCompany={'K4'}
            imageSrc={'/thingsboard-migration.svg'}
            imageW={810}
            imageH={422}
            imageAlt={'Thingsboard migration'}
            start={'col-start-17'}
            end={'col-end-24'}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
