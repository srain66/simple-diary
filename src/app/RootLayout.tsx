import { inter } from "./layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentLayout>{children}</ContentLayout>
      </body>
    </html>
  );
}
