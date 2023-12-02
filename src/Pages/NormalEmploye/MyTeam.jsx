import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import UpcommingEvents from "./UpcommingEvents";

const MyTeam = () => {
  const axiospublic = useAxiosPublic();
  const { user } = useAuth();
  console.log(user);
  const cur = user?.email;
  console.log(cur);
  // console.log(currentUser);

  const { data: yours = [] } = useQuery({
    queryKey: ["usersDD"],
    queryFn: async () => {
      const res = await axiospublic.get(`/add-team-one?email=${cur}`);
      console.log('your adminEmail', res.data.adminEmail);
      return res.data;
    },
  });


  /* admin api */
  const { data: teamMember = [], isLoading: teamLoading } = useQuery({
    queryKey: ["teams", yours?.adminEmail],
    queryFn: async () => {
      const res = await axiospublic.get(`/add-team?email=${yours?.adminEmail}`);
      console.log('your data', res.data);
      return res.data;
    },
  });
  if (teamLoading) {
    return <p>Team Member is Loading...</p>
  }
  console.log(teamMember);






  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      {/* Upcoming Evends */}
      <div className="flex  justify-evenly gap-4 b">
        <section className="w-7/12 ">
          <SectionTiltle subHeading={"All of my team member -"} heading={"upcomming events"} />
          <UpcommingEvents teamMember={teamMember} />
        </section>


        {/* My team */}
        <section className="row-span-">
          <SectionTiltle subHeading={"All of my team member -"} />

          <div className="md:grid-cols-1   lg:grid-cols-1 grid gap-10  " >
            {
              teamMember?.map((teamMember, index) =>
                <div
                  key={teamMember?._id} className="w-full h-34">

                  <div className="   w-full-col justify-center items-center gap-6   p-6 shadow-md shadow-[#296835] rounded-xl sm:px-12 bg-[#ecfdef5e]">
                    <th className="w-10 h-10 text-center pt-2 bg-gray-700 text-xl font-bold rounded-full text-white">{index + 1}</th>
                    <img
                      src={teamMember?.image ? teamMember.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU'}
                      alt=""
                      className="w-24 h-24 mx-auto rounded-full "
                    />
                    <div className="space-y-4 text-center divide-y ">
                      <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl"><span className="font-bold"></span>{teamMember.name}</h2>
                        <h2 className="px-5 text-xs sm:text-base "><span className="font-bold px-2">Role:</span>{teamMember.role}</h2>

                        {teamMember.bithdayDate ?
                          <p className="px-5 text-xs sm:text-base "><span className="font-bold">Birth:</span>{teamMember.bithdayDate}</p>
                          :
                          <p><span className="font-bold">Birth:</span> Empty  </p>
                        }

                      </div>
                      {/*  */}
                    </div>

                  </div>

                </div>)
            }
          </div>

        </section>
      </div>

    </div>
  );
};

export default MyTeam;
