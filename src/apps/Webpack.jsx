import React from "react";

const Webpack = () => {
  const reqStr = `
        This is a **Webpack configuration file** for a React app using JSX, CSS, and Babel for transpiling. Here's a breakdown of each section:

---

### 🔹 'const path = require("path");'

Used to handle and transform file paths. It's a Node.js built-in module.

---

### 🔹 'const HtmlWebpackPlugin = require("html-webpack-plugin");'

Imports a plugin that creates an HTML file and automatically injects the output bundle(s) into it.

---

## 🔧 'module.exports = { ... }'

Exports the Webpack configuration object.

---

### ✅ 'entry'

'''js
entry: "./src/index.jsx",
'''

* **Entry point** of your app – Webpack starts bundling from here.

---

### ✅ 'output'

'''js
output: {
  filename: "bundle.[contenthash].js",
  path: path.resolve(__dirname, "dist"),
  clean: true,
  publicPath: "/",
}
'''

* 'filename': Output JS file with a unique hash ('[contenthash]') for cache busting.
* 'path': Directory for output ('dist').
* 'clean': Clears old files in 'dist' before building.
* 'publicPath': Ensures proper loading of files (especially for routing in SPAs).

---

### ✅ 'resolve'

'''js
resolve: {
  extensions: [".js", ".jsx"],
}
'''

* Allows importing '.js' or '.jsx' files without specifying extensions:

  '''js
  import App from './App'; // will match App.jsx or App.js
  '''

---

### ✅ 'module.rules'

'''js
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader",
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
},
'''

#### ➤ Rule 1: Babel Loader

* For '.js' or '.jsx' files.
* Skips 'node_modules'.
* Uses 'babel-loader' to transpile JSX and modern JavaScript.

#### ➤ Rule 2: CSS Loader

* For '.css' files.
* 'css-loader': Resolves '@import' and 'url()'.
* 'style-loader': Injects CSS into the DOM via '<style>' tags.

---

### ✅ 'plugins'

'''js
plugins: [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
],
'''

* Generates 'index.html' using your custom template.
* Automatically injects the bundled JS ('bundle.[hash].js') into it.

---

### ✅ 'devServer'

'''js
devServer: {
  static: path.join(__dirname, "dist"),
  port: 3000,
  hot: true,
  historyApiFallback: true,
},
'''

* **'static'**: Serves static files from 'dist'.
* **'port: 3000'**: Local server runs on port 3000.
* **'hot: true'**: Enables **Hot Module Replacement** (live updates without full reload).
* **'historyApiFallback: true'**: Ensures SPA routes work (e.g., '/about', '/profile') by redirecting unknown routes to 'index.html'.

---

### ✅ 'mode' and 'devtool'

'''js
mode: "development",
devtool: "inline-source-map",
'''

* 'mode': Optimizes for **development** (faster builds, better debugging).
* 'devtool': Adds inline source maps for better debugging in browser dev tools.

---

## 🧩 Summary

| Feature                   | Purpose                                                            |
| ------------------------- | ------------------------------------------------------------------ |
| 'babel-loader'            | Transpile JSX and ES6+ to browser-compatible JS                    |
| 'style-loader/css-loader' | Handle CSS imports and inject into DOM                             |
| 'HtmlWebpackPlugin'       | Generates 'index.html' with injected script                        |
| 'devServer'               | Starts a development server with live reloading and route handling |
| 'contenthash'             | Adds cache-busting to bundle names                                 |
| 'historyApiFallback'      | Enables client-side routing in SPA apps                            |

Let me know if you want a **production-ready version** of this config or an example 'package.json'.

    `;
  return (
    <div>
      <pre>{reqStr}</pre>
    </div>
  );
};

export default Webpack;
