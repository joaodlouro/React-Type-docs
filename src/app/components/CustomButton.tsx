type Props = {
  label: string;
  onClick: () => void;
};

export const CustomButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow transition duration-200"
    >
      {label}
    </button>
  );
};
