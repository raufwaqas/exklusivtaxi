import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../../utils/image';
export const Header: React.FC = () => (
  <header
    className='bg-black text-white w-full'
    aria-label='Huvudnavigering inklusive sajtlogo och bokningsknapp'
  >
    <div className='mx-auto max-w-screen-xl p-3 flex justify-center items-center'>
      <figure
        className='w-3/12 relative'
        aria-label='Skåne Exklusiv Taxi Lund Logo'
      >
        <Image
          src={getImagePath('desktop', 'Skane-Exklusiv-Taxi-logo', 'png')}
          alt='Skåne Exklusiv Taxi Lund'
          objectFit='contain'
          width={250}
          height={300}
        />
      </figure>
      <nav className='w-6/12' aria-label='Huvudnavigering'>
        <ul
          className='flex justify-center px-2.5 space-x-8 '
          aria-label='navigering till olika sidor'
        >
          <li>
            <Link href='/' passHref>
              <p className='cursor-pointer text-sm font-normal hover:opacity-75'>
                Startsida
              </p>
            </Link>
          </li>
          <li>
            <Link href='/priser' passHref>
              <p className='cursor-pointer text-sm font-normal hover:opacity-75'>
                Priser
              </p>
            </Link>
          </li>
          <li>
            <Link href='/tjanster' passHref>
              <p className='cursor-pointer text-sm font-normal hover:opacity-75'>
                Tjänster
              </p>
            </Link>
          </li>
          <li>
            <Link href='/kundtjanst' passHref>
              <p className='cursor-pointer text-sm font-normal hover:opacity-75'>
                Kundtjänst
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='w-1/12' aria-label='Boka Taxi'>
        <button className='w-full py-2 px-4 rounded-full font-medium bg-white text-black hover:border-white hover:border-2 hover:bg-black hover:text-white'>
          BOKA NU
        </button>
      </div>
      <div className='w-1/12 relative'>
        <Image
          src={getImagePath('desktop', 'Logo', 'svg')}
          alt='Language Switcher'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  </header>
);

export default Header;
