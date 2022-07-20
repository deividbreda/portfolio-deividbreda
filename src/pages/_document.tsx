import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render(){
        return(           
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@200;400;600;700&display=swap" rel="stylesheet" />

                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/62572750?v=4" type="image/png" />

                </Head>
                <body>
                    <Main />
                    <NextScript /> 
                </body>    
            </Html>
        )
    }
}