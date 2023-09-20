import Head from "next/head";
import { Col, Container } from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <>
        <Head>
            <title key='title'>Page not found</title>
        </Head>
        <Container>
            <h1>Not Found</h1>
            <p>Looks like this page does not exists. Please try of the pages that exist.</p>
        </Container>
        </>
    );
}

export default NotFoundPage;