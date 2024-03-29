import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap"
import Cookies from "cookie-universal";
import { useEffect } from 'react';
import "./dashboard.css"
import axios from 'axios';


function Dashbord() {

    async function GetAllUser() {
        const cookies = Cookies()
        const token = await cookies.get('token');
        await axios.get('https://backfood2-1traner.onrender.com/api/allusers', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        GetAllUser()
    }, [])

    return (
        <Container>

            <Table striped className='mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER</th>
                        <th>Gmail</th>
                        <th>Username</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@twitter</td>


                    </tr>
                </tbody>
            </Table>

        </Container>
    );
}

export default Dashbord