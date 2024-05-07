import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="backdrop-blur bg-neutral-100/50 w-full py-2 sticky top-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link href='/'>
        <h1 className="font-bold text-xl text-primary">EduTrack</h1>
        </Link>
        <ul className='space-x-4'>
        <Link href='/test'>
          <span className='hover:underline'>
            Try Now
          </span>
          </Link>
        <Link target='_blank' href='https://www.kaggle.com/code/classikh/student-performance'>
          <span className='hover:underline'>
            View on Kaggle
          </span>
        </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
