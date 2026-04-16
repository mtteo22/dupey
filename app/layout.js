export const metadata = {
  title: "Dupey",
  description: "Find your perfect beauty and wellness dupes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
