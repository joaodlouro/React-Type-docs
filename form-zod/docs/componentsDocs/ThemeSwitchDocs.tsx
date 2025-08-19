import { useTheme } from "@/contexts/ThemeCtx";

export const ThemeSwitch = () => {
  const ThemeCtx = useTheme();

  const HandleThemeToggle = () => {
    if (ThemeCtx) {
      ThemeCtx.setTheme(ThemeCtx.theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 p-3 text-center cursor-pointer"
      onClick={HandleThemeToggle}
    >
      {ThemeCtx?.theme === 'dark' && 'Mudar para Light'}
      {ThemeCtx?.theme === 'light' && 'Mudar para Dark'}
    </div>
  );
};
