import {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
        <div 
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img alt='logo' src={Logo} />

               {/*Right side  */}
              {
                isAboveMediumScreens ? (
                  <div className={`${flexBetween} w-full `}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page = "Home" />
                    <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page = "Benifits" />
                    <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page = "Our Classes" />
                    <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page = "Contact Us" />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Become a Member</button>
                  </div>
                </div>
                ):(
                  <div>
                    <Bars3Icon className="h-8 w-8" />
                  </div>
                )
              }
                
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar