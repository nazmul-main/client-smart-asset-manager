import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const MyTeam = () => {
  const axiospublic = useAxiosPublic();
  const { user } = useAuth();
  const email = user?.email;
  // console.log(currentUser);

  const { data: yours = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiospublic.get(`/add-team-one?email=${email}`);
      console.log('your data', res.data);
      return res.data;
    },
  });

  const adminEmail = yours?.adminEmail

  /* admin apo */
  const { data: teamMember = [] } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const res = await axiospublic.get(`/add-team?email=${adminEmail}`);
      console.log('your data', res.data);
      return res.data;
    },
  });






  return (
    <div className="max-w-screen-xl px-4 md:px-12 mx-auto">
      {/* Upcoming Evends */}
      <section>
        <SectionTiltle subHeading={"All of my team member"} heading={"My team"} />
   
        <div className="md:grid-cols-1  lg:grid-cols-2 grid gap-10  " >
          {
            teamMember?.map((teamMember, index) =>
              <div key={teamMember?._id} className="w-full h-34">

                <div className="   w-full-col justify-center items-center gap-6   p-6 shadow-md shadow-[#296835] rounded-xl sm:px-12 bg-[#ecfdef5e]">
                <h2 className="w-10 h-10 text-center pt-2 bg-gray-700 text-xl font-bold rounded-full text-white">{index +1}</h2>
                  <img
                    src="https://source.unsplash.com/150x150/?portrait?3"
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full "
                  />
                  <div className="space-y-4 text-center divide-y ">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl"><span className="font-bold">Name:</span>{teamMember.name}</h2>
                      <h2 className="px-5 text-xs sm:text-base "><span className="font-bold px-2">Role:</span>{teamMember.role}</h2>
                      
                      {teamMember.bithdayDate ?
                        <p className="px-5 text-xs sm:text-base "><span className="font-bold">Birth:</span>{teamMember.bithdayDate}</p>
                        :
                        <p><span className="font-bold">Birth:</span> Empty  </p>
                      }
                      <button></button>
                    </div>
                    {/*  */}
                  </div>

                </div>

              </div>)
          }
        </div>

      </section>
    </div>
  );
};

export default MyTeam;
