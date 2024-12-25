import Link from "next/link";

type TListItemsProps = {
  title: string;
  links: {
    title: string;
    path: string;
  }[];
};

const FooterListItems = ({ title, links }: TListItemsProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b-[3px] inline-block pb-2">
        {title}
      </h3>

      <ul className="list-inside list-disc font-medium mt-5 space-y-2">
        {links?.map(({ title, path }, idx) => (
          <li key={idx}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListItems;
