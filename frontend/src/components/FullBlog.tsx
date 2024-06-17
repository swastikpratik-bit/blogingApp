import { formatDate, capitalize } from "../utils"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"


interface blogInterface{
    id: string,
    authorName: string,
    title: string, 
    content: string,
    publishedDate :Date
}

export const FullBlog = ({
    authorName, 
    title, 
    content, 
    publishedDate
}: blogInterface) => {
    const publishDate = formatDate(publishedDate)
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="  grid grid-row-12 lg:grid-cols-12 px-10 w-full pt-16 max-w-screen-2xl">
                    <div className="col-span-8 ">
                        <div className="text-4xl lg:text-5xl font-extrabold">
                            {title}
                        </div>
                        <div className="text-slate-500 pt-4">
                           Posted on {publishDate}
                        </div>
                        <div className="text-2xl pt-8">
                            {content}
                        </div>
                    </div>

                    <div className="w-[80vw] py-10 lg:">
                    <div className="row-span-2 gap-2 lg:col-span-4 lg:pl-20 ">
                        <div className="text-slate-600 pt-4">
                            Author
                        </div>
                        <div className="flex">
                            <div className=" pr-8 flex flex-col justify-center">
                                <Avatar name={ authorName} ww={"12"} hh={"12"} />
                            </div>
                            <div>
                                <div className="text-4xl w-full ">
                                    {capitalize(authorName)}
                                </div>
                                <div>
                                    Other qualification or position of author .
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}