import "../../../(website)/globals.css";
import State from "../../../../context/State";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <State>{children}</State>
      </body>
    </html>
  );
}
