import { Button, Typography } from "@material-tailwind/react";

export default function ComponentButton({ children }) {
  return (
    <Button
      className="rounded-full h-[5rem] group relative inline-flex items-center justify-center overflow-hidden  border-2 border-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-300 before:ease-out hover:before:h-72 before:z-1 hover:before:w-full laptop:w-1/3 laptop:h-[7rem]"
      variant="filled"
      ripple={false}
      color="white"
    >
      <Typography
        variant="h1"
        className="cursor-pointer uppercase font-poppins font-semibold text-black group-hover:text-white transition-all duration-500 absolute  z-20 destop:text-7xl laptop:text-[3rem] "
      >
        {children}
      </Typography>
    </Button>
  );
}
