import { useState } from "react";

export default function HomePage() {

  const [count, setCount] = useState(0); 

  // useEffect(() => {}, []);

  return (
    <div className="w-full h-full flex bg-amber-100 justify-center items-center">
      
      <div className="flex w-125 h-125  bg-amber-300 justify-center items-center">
        <button className="w-50 h-20 bg-amber-500 rounded-lg text-white font-bold text-lg hover:bg-amber-600" onClick={() => setCount(count + 1)}>+</button>
        <p className="text-2xl font-bold text-white">{count}</p>
        <button className="w-50 h-20 bg-amber-500 rounded-lg text-white font-bold text-lg hover:bg-amber-600" onClick={() => setCount(count - 1)}>-</button>

      </div>
    </div>
  )
}
