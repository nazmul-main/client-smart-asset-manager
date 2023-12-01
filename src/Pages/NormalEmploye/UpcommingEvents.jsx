

/* eslint-disable react/prop-types */

const UpcomingEvents = ({ teamMember }) => {
  const teamMembersWithBirthdays = teamMember?.filter(member => {
    if (member?.bithdayDate) {
      const birthdayMonth = new Date(member.bithdayDate).getMonth();
      console.log(birthdayMonth);
      const currentMonth = new Date().getMonth();
      return birthdayMonth === currentMonth;
    }
    return false;
  });
  console.log(teamMembersWithBirthdays);

  const today = new Date();
  const birthdayInfo = teamMembersWithBirthdays.map(member => {
    const memberBirthday = new Date(member.bithdayDate);
    console.log(memberBirthday);
    const currentYear = memberBirthday.setFullYear(today.getFullYear());
    if (today > memberBirthday) {
      currentYear
    }
    const timeDiff = memberBirthday.getTime() - today.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log(remainingDays);





    if (remainingDays > 0) {
      return {
        image: member.image,
        name: member.name,
        birthdayDate: member.bithdayDate,
        remainingDays: `Remaining days: ${remainingDays} days`,
      };
    } else {
      return {
        image: member.image,
        name: member.name,
        birthdayDate: member.bithdayDate,
        message: 'Happy Birthday!',
      };
    }
  });
  console.log(birthdayInfo);


  return (
    <div>

      <div className=" rounded-3xl ">
        {birthdayInfo.map((info, index) => (
          <div key={index} className="flex justify-center items-center my-7 rounded-3xl bg-[#334d39]">
            <div className="w-4/12  p-4">
              <img className=" w-2/3 object-cover rounded-full shadow-lg shadow-slate-200" src={info.image} alt={`${info.name}'s profile`} />
            </div>
            <div className="w7/12 p-4 text-gray-50 space-y-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">Upcoming  𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 </h2>
              <div className="space-y- py-5">
                <p className="md:text-xl font-semibold">Name: {info.name}</p>
                <p>Date of Birth: {info.birthdayDate}</p>
                {info.remainingDays ? <p>{info.remainingDays}</p> : <p>{info.message}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
