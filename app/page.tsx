"use client"
import { ApexChart } from "@/components/Chart";
import { useState } from "react";

const initData = [
  {
    x: new Date(Date.now()),
    y: [6629.81, 6650.5, 6623.04, 6633.33],
  },
];

export default function Home() {

  const [money, setMoney] = useState(100);
  const [bsData, setBsData] = useState(10);

  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold text-center mt-2">{ money } DFX</div>
      <ApexChart data={initData} />
      <div className="flex justify-center my-2">
        <input type="text" value={bsData} onChange={(e) => setBsData(parseInt(e.target.value))} />
      </div>
      <div className="flex justify-around">
        <button className="bg-green-600 w-1/3 h-[100px] rounded font-bold text-xl" >Buy</button>
        <button className="bg-red-600 w-1/3 h-[100px] rounded font-bold text-xl">Sold</button>
      </div>
    </div>
  );
}
