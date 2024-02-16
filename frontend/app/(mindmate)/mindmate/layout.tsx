import State from "@/context/State";

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <State>{children}</State>
      </body>
    </html>
  );
}
