
const Label = ({ type } : {type : "signup" | "signin"}) => {
  return (
    <div className="bg-slate-200 h-[25vh] flex flex-col justify-center lg:h-screen">
        <div className="flex justify-center">
              <div className="text-xl font-bold max-w-2xl lg:text-3xl">
                Your voice matters.  <br />
                Unlock the power of your words. <br />
                Transform your thoughts into impact  <br />
                  <span className="bg-black text-slate-200 rounded-md px-1 pb-1 ">{ type === 'signup' ? "Sign up" : "Sign in"}</span> to start blogging. 
                     
            </div>
        </div>
          
    </div>
  )
}

export default Label;