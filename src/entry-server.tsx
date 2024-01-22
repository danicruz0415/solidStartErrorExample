import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app" class="scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
