type TTitleProps = { text: string; colorText: string };

const SectionTitle = ({ text, colorText }: TTitleProps) => {
  return (
    <h2 className="text text-nowrap text-2xl font-bold text-accent border-b-4 border-primary pb-2">
      {text} <span className="text-primary">{colorText}</span>
    </h2>
  );
};

export default SectionTitle;
