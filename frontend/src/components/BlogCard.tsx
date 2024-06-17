import { Link } from "react-router-dom";


interface blogcardInterface{
    id: string,
    authorName: string,
    title: string, 
    content: string,
    publishedDate :string
}

export const BlogCard = ({
    id,
    authorName, 
    title, 
    content, 
    publishedDate
}: blogcardInterface) => {

    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-300 pb-2 pt-8 w-full cursor-pointer">
                <div className="flex">
                    <Avatar name={authorName} ww={"6"} hh={"6"} />
                    <div className="mx-2">
                        <span className="text-slate-600 text-sm">{ authorName}</span> . <span className="text-slate-900 text-xs" >{publishedDate}</span>
                    </div>
                
                </div>   
                <div className="font-bold text-2xl pt-4">
                    {title}
                </div>
                <div className="text-lg text-slate-600 pt-4">
                    {`${content.slice(0,Math.min(content.length, 200))}...`}
                </div>

                <div className="text-slate-400 text-xs pt-6">
                    {`${Math.ceil(content.length/80)} minute(s) read`}
                </div>
            </div>
        </Link>
    )
}


function Avatar({ name , ww , hh}: { name: string , ww: string, hh : string}){
    return (
            
        <div className={"relative inline-flex items-center justify-center overflow-hidden bg-gray-500 rounded-full " + `w-${ww} h-${hh}`} >
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
        </div>
    )
}

 export {Avatar};
