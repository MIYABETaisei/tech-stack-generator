import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <title>技術スタックジェネレーター</title>
        <Head>
          <meta
            name="description"
            content="お好みの技術スタックを簡単に画像に"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href={process.env.NEXT_PUBLIC_FAVICON_HREF}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument
