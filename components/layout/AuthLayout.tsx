import Head from "next/head";

export default function AuthLayout({children}: any) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
                <link rel="stylesheet" href={"css/style.css"}/>
            </Head>

            {children}
        </>
    )
}