
type Props = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: Props) => {


  return (
    <button
      className="border px-4 py-3 rounded-md
        bg-black text-white
        dark:bg-white dark:text-black" 
      onClick={onClick}
    >
      {label}
    </button>
  );
};


//usando o tailwind, mas está quebrado! olhar as versões 
// para evitar essas dores de cabeça use a versão sem fazer a mudança diretamente usando o tailwind