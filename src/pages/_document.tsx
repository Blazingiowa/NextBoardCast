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

                </Head>
                <body className="theme-dark">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}