import { clientReviews } from "../constants"

function Clients() {
    return (
        <>
            <section className="my-20 c-space">
                <h3 className="head-text">Hear from My Clients</h3>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                    {clientReviews.map((item) => (
                        <div key={`review-${item.id}`} className="col-span-1 ">
                            <div className="text-white bg-neutral-100 bg-opacity-10  p-7">
                                <p className="text-sm m-2">{item.review}</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className=""><img src={item.img} className="h-16 w-16 m-2" alt="" /></div>
                                        <div className="text-white">
                                            <p>{item.name}</p>
                                            <p>{item.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex self-end items-center items-end gap-2">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Clients