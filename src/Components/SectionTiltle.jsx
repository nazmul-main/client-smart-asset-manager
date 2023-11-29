/* eslint-disable react/prop-types */

const SectionTiltle = ({subHeading,heading }) => {
    return (
        <div className="md:w-7/12 mx-auto my-8">
        <p className="text-[#1d4124] text-center mb-2">{subHeading}</p>
        <h2 className=" text-center text-2xl uppercase border-y-4 py-2">{heading}</h2>
    </div>
    );
};

export default SectionTiltle;