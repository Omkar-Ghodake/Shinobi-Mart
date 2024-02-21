import { defaultLinks } from '@/lib/data/navbar-links'
import ModalSheetContent from '../Modals/ModalSheetContent'
import { Sheet, SheetTrigger } from '../ui/sheet'
import NavItem from './NavItem'
import ThemeControl from './ThemeControl'

const DefaultLinks = () => {
  return (
    <>
      {defaultLinks.map((navItem, index) => {
        return navItem.item === 'Light Mode' || navItem.item === 'Dark Mode' ? (
          <ThemeControl navItem={navItem} key={index} />
        ) : (
          <li key={index} className='flex items-center'>
            {navItem.item === 'Cart' ? (
              <Sheet>
                <SheetTrigger asChild>
                  <div>
                    <NavItem
                      item={navItem.item}
                      link={navItem.link}
                      icon={navItem.icon}
                      isNotLink={navItem.isNotLink}
                    />
                  </div>
                </SheetTrigger>

                <ModalSheetContent />
              </Sheet>
            ) : (
              <NavItem
                item={navItem.item}
                link={navItem.link}
                icon={navItem.icon}
                isNotLink={navItem.isNotLink}
              />
            )}
          </li>
        )
      })}
    </>
  )
}

export default DefaultLinks
