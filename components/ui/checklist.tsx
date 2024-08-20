export default function Checklist() {
  const items = [
    "1 to 1",
    "Small groups",
    "Goalkeepers",
    "UEFA Qualified",
    "PVG Certified",
    "First Aid Trained",
  ];

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="w-5 h-5 flex justify-center items-center bg-blue-500 rounded-full">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="ml-2 text-xs xs:text-sm md:text-base">{item}</span>
        </div>
      ))}
    </div>
  );
}
