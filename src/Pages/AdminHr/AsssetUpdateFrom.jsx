import { useLoaderData } from "react-router-dom";


const AsssetUpdateFrom = () => {
    const id = useLoaderData()
    console.log(id);
    return (
        <div>
            From
        </div>
    );
};

export default AsssetUpdateFrom;