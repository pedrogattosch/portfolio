import { LanguageProvider } from '../contexts/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}