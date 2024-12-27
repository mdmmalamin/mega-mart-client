import Image from "next/image";
import demoImg from "@/assets/images/demo/test-phone.png";

const CategoryCard = () => {
  return (
    <div>
      <div className="size-[132px] border border-transparent hover:border-primary duration-300 bg-light hover:shadow-lg rounded-full p-4">
        <Image
          src={demoImg}
          alt="smartphone"
          // width={200}
          // height={200}
          className="w-full h-full object-contain object-center rounded-full"
        />
      </div>
      <p className="text-center mt-5 text-sm capitalize">Smartphones</p>
    </div>
  );
};

export default CategoryCard;
