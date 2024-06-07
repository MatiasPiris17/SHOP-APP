import { titleFont } from "@/config/fonts";

export default function () {
  return (
    <main className="">
      <h1>Login Page</h1>
      <h1 className={titleFont.className}>Hola mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola mundo</h1>
    </main>
  );
}
