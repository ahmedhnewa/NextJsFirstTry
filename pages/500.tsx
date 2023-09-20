import Head from "next/head";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
    return ( 
        <>
        <Head>
            <title key='title'>Unknown error</title>
        </Head>
        <Container>
            <h1>Unknown error</h1>
            <p>Sorry but something went wrong. Please try again later or contact the support.</p>
        </Container>
        </>
     );
}
 
export default ErrorPage;