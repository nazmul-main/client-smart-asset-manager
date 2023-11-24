// About.js


const About = () => {
  return (
    <section className=" min-h-screen my-12 max-w-screen-lg mx-auto px-4">
      <div className=" mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">About Our Project</h2>
        <div className="max-w-2xl mx-auto mb-8">
          <img
            src={'https://img.freepik.com/premium-vector/giveaway-concept-illustration_188398-472.jpg?w=996'}
            alt="Project Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default About;
