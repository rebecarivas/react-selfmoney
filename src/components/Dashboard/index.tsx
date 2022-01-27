import Summary from "../Summary";
import Table from "../Table";
import { Container } from "./style"

const Dashboard: React.FC = () => {
    return(
        <Container>
            <Summary />
            <Table />
        </Container>
    )
}
export default Dashboard;