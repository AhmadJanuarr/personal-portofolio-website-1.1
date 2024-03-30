import { Typography } from "@material-tailwind/react";

export default function Card({ image, title, description, year }) {
  return (
    <div className="w-full mb-10 cursor-pointer">
      <img
        src={image}
        alt=""
        className="rounded-lg
         mx-auto xl:w-[1780px] xl:h-[800px] object-cover object-top"
      />
      <div className="w-full flex justify-between pt-5  ">
        <div className="w-full xl:pl-10">
          <Typography
            variant="h2"
            className="font-poppins font-normal text-lg w-2/3  xl:text-3xl"
          >
            {title}
          </Typography>
          <Typography
            variant="small"
            className="font-poppins font-normal xl:text-xl"
          >
            {description}
          </Typography>
        </div>
        <Typography
          variant="h5"
          className="font-poppins font-normal xl:pr-20 xl:text-3xl"
        >
          {year}
        </Typography>
      </div>
    </div>
  );
}
