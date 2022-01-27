import { Container } from "./style";

const Table: React.FC = () =>{
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R$12000,00</td>  
                        <td>Desenvolvimento</td>
                        <td>02/01/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1100,00</td>  
                        <td>Despesa</td>
                        <td>05/01/2022</td>
                    </tr><tr>
                        <td>Desenvolvimento mobile</td>
                        <td className="deposit">R$20000,00</td>  
                        <td>Desenvolvimento</td>
                        <td>17/01/2022</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    )
}
export default Table;