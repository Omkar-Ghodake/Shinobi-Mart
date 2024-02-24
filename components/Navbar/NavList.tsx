import { Sheet } from '../ui/sheet'
import ControlPanelLinks from './ControlPanelLinks'
import DefaultLinks from './DefaultLinks'
import PrimaryLinks from './PrimaryLinks'
import SecondaryLinks from './SecondaryLinks'

const NavList = () => {
  const user: { username?: string; role?: string } = {
    // username: 'User',
    // role: 'admin',
  }

  return (
    <div className='nav-list flex items-center gap-14'>
      <ul className='flex justify-center items-center gap-10 flex-1'>
        <PrimaryLinks />
      </ul>

      {user.username ? (
        <ul className='flex justify-center items-center gap-10'>
          <ControlPanelLinks user={user} />
        </ul>
      ) : (
        <ul className='flex justify-center items-center gap-10'>
          <SecondaryLinks />
        </ul>
      )}

      <Sheet>
        <ul className='flex justify-center items-center gap-10'>
          <DefaultLinks />
        </ul>
      </Sheet>
    </div>
  )
}

export default NavList
