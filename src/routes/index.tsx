import { A, Navigate } from "@solidjs/router";
import Counter from "~/components/Counter";


export default function Home() {
  return <Navigate href="/auth/" />;
}
