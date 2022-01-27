import logo from '../../assets/logo.svg'
import { Container, Content } from './style';

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logo} alt='self money' />
                <button type='button'>
                    Nova Transação
                </button>
            </Content>
        </Container>

    )
}

export default Header;