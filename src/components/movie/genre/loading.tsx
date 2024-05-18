import Skeleton from "@/components/skeleton";

function GenreSkeleton() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center py-20">
            {
                Array(2)
                    .fill(null)
                    .map((_, index) => (
                        <div className=" flex flex-col gap-5">
                            <Skeleton width='13rem' height='30px' />
                            <div className="flex flex-row gap-10">

                                {Array(5)
                                    .fill(null)
                                    .map((_, index) => (
                                        <Skeleton key={index} width='13rem' height='20rem' />
                                    ))}

                            </div>
                        </div>
                    ))
            }
        </div>


    )
}

export default GenreSkeleton;