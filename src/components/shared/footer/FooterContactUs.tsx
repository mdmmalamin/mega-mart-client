import Image from "next/image";
import mega_mart_logo from "@/assets/images/footer/mega-mart-footer-logo.png";
import Link from "next/link";
import { contactInfo, downloadApps } from "@/constants";

const FooterContactUs = () => {
  return (
    <div className="space-y-8">
      <Image
        alt="Mega Mart Logo."
        src={mega_mart_logo}
      />

      <div className="space-y-5">
        <h3 className="text-xl font-bold">Contact Us</h3>

        {contactInfo?.map(({ icon, title, phone, link }, idx) => (
          <div className="flex items-start gap-3" key={idx}>
            <Image alt={`${title} icon.`} src={icon} width={24} height={24} />

            <div>
              <h4 className="font-medium">{title}</h4>
              <Link href={link} target="_blank" className="font-semibold">
                {phone}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <h3 className="text-xl font-bold">Download App</h3>

        <div className="flex items-center gap-5">
          {downloadApps?.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <Image
                alt={`${item.title} Logo.`}
                src={item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
