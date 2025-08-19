// import { useTheme } from "@/contexts/ThemeCtx";

// type Props = {
//   label: string;
//   onClick: () => void;
// };

// export const Button = ({ label, onClick }: Props) => {
//   const ThemeCtx = useTheme(); 

//   return (
//     <button
//       className={`border px-4 py-3 rounded-md ${
//         ThemeCtx?.theme === 'dark'
//           ? 'bg-white text-black'
//           : 'bg-black text-white'
//       }`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// };
////////////////////////////////////////////////////////////////////////


import { useTheme } from "@/contexts/ThemeCtx";

type Props = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  const ThemeCtx = useTheme(); 

  return (
    <button
      className={`border px-4 py-3 rounded-md ${
        ThemeCtx?.theme === 'dark'
          ? 'bg-white text-black'
          : 'bg-black text-white'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

