import Container from "@/components/layouts/Container";
import Image from "next/image";
import location from "@/assets/icons/navBanner/location.svg";
import delivery_truck from "@/assets/icons/navBanner/delivery-truck.svg";
import discount from "@/assets/icons/navBanner/discount.svg";

const items = [
  { icon: location, title: "Deliver to", call: "423651" },
  { icon: delivery_truck, title: "Track your order" },
  { icon: discount, title: "All Offers" },
];

const NavbarBanner = () => {
  return (
    <div className="bg-light py-3 text-sm text-accent text-nowrap hidden md:block">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <h3>Welcome to worldwide Megamart!</h3>

          <div className="flex items-center gap-4 justify-end">
            {items?.map((item, idx) => (
              <>
                <div className="flex items-center gap-1.5" key={idx}>
                  <Image
                    alt={`${item.title} icon`}
                    src={item.icon}
                    width={18}
                    height={18}
                  />
                  <p>
                    {item.title}
                    {item?.call && (
                      <span className="font-semibold"> {item?.call}</span>
                    )}
                  </p>
                </div>

                {idx !== items.length - 1 ? (
                  <div
                    className="h-[18px] border-r border-line"
                    key={idx + 10}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarBanner;
