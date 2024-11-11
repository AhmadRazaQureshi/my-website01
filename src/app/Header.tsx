import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="  mt-2 bg-emerald-600 flex justify-between">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-semibold"> My Website
 
       </h2>

      
      </div>
    
  
      {/* Links */}

      <nav>

    
        
        <li className=" mt-2 flex gap-x-9">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/about" className="font-semibold">About</Link>
            <Link href="/contact" className=" mr-6 font-semibold">Contact</Link>
        </li>
      
  
      </nav>


    </header>
  

  
    );
}


