import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className='bg-primary'>
          <Main />
          <NextScript />
          <h1 className='flex justify-center pt-4'>Welcome</h1>
        </body>
      </Html>
    );
  }
}

export default MyDocument;