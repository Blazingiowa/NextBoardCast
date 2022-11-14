import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";
import {Toaster} from "react-hot-toast";

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <link rel="stylesheet" href="assets/css/siqtheme.css"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png"/>
                    <link rel="stylesheet" href="assets/css/pages/dashboard1.css"/>
                </Head>
                <body className="theme-dark">
                <Toaster/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}