export function Template({ children, darkMode }) {
  return (
    <div className={`  ${darkMode ? "dark" : ""} `}>
      <div className="w-full h-full bg-[#fffff] over text-black dark:bg-black dark:text-white px-4  md:px-5 lg:px-10">
        {children}
      </div>
    </div>
  );
}
