import demoImg from "@/assets/images/demo/test-phone.png";
import Image from "next/image";

const SmartphoneCard = () => {
  return (
    <div className="max-w-60 min-w-[227px] h-[295px] bg-white rounded-2xl border hover:border-primary hover:shadow-lg duration-300 relative">
      <div className="absolute top-0 right-0 bg-primary text-white text-sm font-semibold leading-none p-2 rounded-tr-2xl rounded-bl-2xl uppercase">
        56% <br /> off
      </div>

      <div className="h-[188px] bg-light p-1.5 rounded-t-2xl">
        <Image
          src={demoImg}
          alt="smartphone"
          // width={200}
          // height={200}
          className="w-full h-full object-contain object-center rounded-2xl"
        />
      </div>

      <div className="h-[106px] p-2.5">
        <h1 className="font-semibold line-clamp-1">Galaxy S22 Ultra</h1>

        <div className="flex items-center gap-2.5 text-dark">
          <p className="font-bold">₹32999</p>
          <p className="line-through">₹74999</p>
        </div>

        <hr className="my-2" />
        <p className="font-semibold text-success">Save - ₹32999</p>
      </div>
    </div>
  );
};

export default SmartphoneCard;
