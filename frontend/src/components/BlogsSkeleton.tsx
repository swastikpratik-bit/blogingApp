import { AppBar } from "./AppBar"

export const BlogsSkeleton = () => {
    return (
        <div>      
            <AppBar/>
            <div className="flex justify-center  ">
                <div className="w-full lg:w-[60vw] px-4">
                <SkeltonPart/>
                <SkeltonPart/>
                <SkeltonPart/>
                <SkeltonPart/>
                <SkeltonPart/>
                {/* <SkeltonPart/> */}
               
                </div>
           </div>
        </div>
    )

}


const SkeltonPart = () => {
    return (
        <div className="flex justify-center ">
            <div className="w-full lg:w-[60vw] px-4">
                <div role="status" className="animate-pulse">
                <div className="p-4 border-b border-slate-200 pb-4 w-full cursor-pointer">
                    <div className="flex">
                        <div className="h-6 w-6 bg-gray-200 rounded-full  mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="flex justify-center flex-col pl-2 ">

                        </div>
                        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold pt-2">
                        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-md font-thin">
                        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-slate-500 text-sm font-thin pt-4">
                        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
                </div>  
            </div>
        </div>
    )
}


