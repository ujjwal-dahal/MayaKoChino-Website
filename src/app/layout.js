import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import { Space_Grotesk } from 'next/font/google';


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  weight: ['400'], 
});

export const metadata = {
  title: "Maya को चिनो",
  description: "Mayakochino Website | This is Maya ko chino Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className} >
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
