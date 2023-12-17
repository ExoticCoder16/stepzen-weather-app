import { SunIcon } from "@heroicons/react/solid";

export default function loading() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Your AR Guide
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are Generating your AR cooking Guide !
      </h2>
    </div>
  );
}
