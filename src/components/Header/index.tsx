import logo from '../../assets/logo.svg'
import { Container, Content } from './style';

interface IOpenModal {
    handleOpenModal: () => void
}

const Header = ({handleOpenModal}: IOpenModal) => {
    return (
        <Container>
            <Content>
                <img src={logo} alt='self money' />
                <button type='button' onClick={handleOpenModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>

    )
}

export default Header;