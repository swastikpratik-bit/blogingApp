import { AppBar } from "./AppBar"

export const BlogSkeleton = () => {
  return (
    <div>
          <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="grid grid-row-12 lg:grid-cols-12 px-10 w-full pt-16 max-w-screen-2xl">
                    <div className="col-span-2 ">
                        <div className="text-5xl font-extrabold">
                          <div className="h-20 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="text-slate-500 pt-4">
                          <div className="h-1 bg-gray-100 rounded-full mb-2.5"></div>
                        </div>
                        <div className="text-2xl pt-8">
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                            <div className="h-2 bg-gray-100 rounded-full mb-2.5 pt-10 mt-6"></div>
                        </div>
                    </div>

                    <div className="w-[80vw] py-10 lg:">
                    <div className="row-span-2 gap-2 lg:col-span-4 lg:pl-20 ">
                        <div className="text-slate-600">
                          <div className="h-4 w-20 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="pr-8 flex flex-col justify-center">
                              <div className="h-12 w-12 bg-gray-200 rounded-full  mb-4"></div>
                            </div>
                            <div className="h-12 w-full bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}






