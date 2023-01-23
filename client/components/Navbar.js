import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/next.svg' width={90} height={20} />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/list'>List</Link>
    </nav>
  );
};

export default Navbar;
