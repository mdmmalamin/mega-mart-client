import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/icons/arrow.svg";

const ViewAll = () => {
  return <Link href="/" className="font-medium flex items-center gap-1.5 text-dark">View All <Image alt="Arrow icon." src={arrow} /> </Link>;
};

export default ViewAll;
