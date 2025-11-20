import HeaderList from './components/headerList'
import HeaderListItem from './components/headerListItem'
import HeaderLinks from './components/headerLinks'
import HeaderFormFilters from './components/headerFormFilters'
import HeaderActions from './components/headerActions'
import Logo from '../logo'

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="/logo/logo_preto.png"/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions/>
        </HeaderListItem>
      </HeaderList>
    </header>
  )
}

export default Header