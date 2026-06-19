const SkillCard = ({ label }: { label: string }) => (
  <div className="relative mt-2 inline-flex">
    {/* glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xs opacity-10 rounded-xl animate-pulse"></div>

    {/* content */}
    <div className="relative bg-white px-6 py-4 rounded-xl">
      <h1 className="font-semibold text-zinc-700 whitespace-nowrap text-sm">
        {label}
      </h1>
    </div>
  </div>
);

export default SkillCard;