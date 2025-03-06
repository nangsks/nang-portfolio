import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

 
type Props = {
  children: React.ReactNode;
  params: {locale: string};
  }
export default async function Layout({ children, params:{ locale }}: Props){
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}