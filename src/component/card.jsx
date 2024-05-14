import { Typography } from "@material-tailwind/react";

export default function Card({ image, title, description, year, link }) {
  return (
    <div className="relative w-full mb-20 cursor-pointer laptop:mb-52 group">
      <div className="relative overflow-hidden border laptop:w-[95%]  mx-auto">
        <img
          src={image}
          alt={title}
          className="object-cover object-top transition duration-500 ease-in-out transform rounded-lg laptop:w-full laptop:h-full group-hover:scale-105 group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full laptop:w-52 laptop:h-52 ">
            <a href={link} target="_blank">
              <Typography
                variant="h4"
                className="text-black text-md laptop:text-3xl"
              >
                View Project
              </Typography>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full pt-5 ">
        <div className="w-full laptop:pl-10">
          <Typography
            variant="h2"
            className="w-2/3 text-lg font-normal font-poppins laptop:text-3xl"
          >
            {title}
          </Typography>
          <Typography
            variant="small"
            className="font-normal font-poppins laptop:text-xl"
          >
            {description}
          </Typography>
        </div>
        <Typography
          variant="h5"
          className="font-normal font-poppins laptop:pr-20 laptop:text-3xl"
        >
          {year}
        </Typography>
      </div>
    </div>
  );
}
