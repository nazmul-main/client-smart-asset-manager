// About.js

import SectionTiltle from "../../../Components/SectionTiltle";


const About = () => {
  return (
    <section className=" min-h-screen my-12 max-w-screen-lg mx-auto px-4 ">
      <SectionTiltle subHeading={'some details our project'} heading={'Our Project'} className="my-12"></SectionTiltle>
      <div className="  ">
        <div className="mx-auto md:flex justify-evenly gap-6 items-center">
          <div className=" md:w-1/2 ">
            <img
              src={'https://i.ibb.co/XYKHRpR/undraw-Scrum-board-re-wk7v.png'}
              alt="Project Image"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <span className=" font-bold">Our Project:</span>
              <p>i have a sowtwere onths sowftwew a employee handle his companny so, ,eny aset like [i have a sowtwere onths sowftwew a employee handle his companny so, ,eny aset like] on this porject habe a so meny feature as anyrequest acepet and so many thinh ...its totaly comforytablke for a company andamin also benifit a company emplouee like that ....</p>
            </p>
          </div>


        </div>
        <div className="mx-auto md:flex  md:flex-row-reverse my-10  justify-evenly gap-6 items-center">
          <div className="md:w-1/2 ">
            <img
              src={'https://i.ibb.co/RSYhfDZ/undraw-Designer-re-5v95-1.png'}
              alt="Project Image"
              className="rounded-lg  w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <span className=" font-bold">Our Target:</span>
              <p>
                Introducing our advanced Asset Management Software, a comprehensive solution tailored to optimize your companys resource management. This innovative software encompasses a range of powerful features designed to streamline operations and enhance efficiency. With a centralized asset repository, users can effortlessly store and organize assets, facilitating easy access and tracking. The inclusion of barcode and QR code scanning capabilities ensures quick identification and updates, simplifying the management process. ....</p>
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
