import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "../components/image";
import Skeleton from "./skeleton";

function Images() {
    const { response, isLoading } = useContext(ImageContext);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Check if response is an array before calling map
    if (!Array.isArray(response)) {
        return <p>Error: Response is not an array</p>;
    }

    return (
        <>
            <h1 className="text-center mt-6 underline text-2xl">
                Result for cats
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto">
                {isLoading?<Skeleton item={100} />:response.map((data, key) => (
                    <Image key={key} data={data} />
                ))}
            </div>
        </>
    );
}

export default Images;
