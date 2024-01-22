// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense, onMount } from "solid-js";
import "./app.css";
import 'flowbite';
import ThemeHandler from "./utilities/themeHandler";

export default function App() {
  onMount(() => {
    const currentTheme = ThemeHandler.getTheme();
    ThemeHandler.setTheme(currentTheme);
  });

  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
