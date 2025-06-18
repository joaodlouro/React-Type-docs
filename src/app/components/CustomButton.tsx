type Props = {
  label: string;
  onClick: () => void;
};

export const CustomButton = ({ label, onClick }: Props) => {
  const handleClick = () => {
    //alguma coisa
    onClick(); // chama a função
    //depois alguma
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 rounded-md text-white bg-blue-700 hover:bg-blue-800 transition"
    >
      {label}
    </button>
  );
};
