import React from "react";

export default function App() {
  const textString = `"
Awesome! Here’s a step-by-step guide to **set up a React + Webpack project locally** based on your resume skills. This will help you build optimized, performant frontend apps with Webpack — just like you described in your experience.

---

# Step 1: Prerequisites

* Install [Node.js](https://nodejs.org/) (v16 or above recommended)
* Have a code editor (like VSCode)
* Basic terminal/command line knowledge

---

# Step 2: Create project folder & initialize npm

Open your terminal and run:

"""bash
mkdir react-webpack-starter
cd react-webpack-starter
npm init -y
"""

---

# Step 3: Install dependencies

Install React, ReactDOM, Webpack, Babel, and supporting loaders/plugins:

"""bash
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin css-loader style-loader
"""

---

# Step 4: Create basic project files

Create this folder structure:

"""
react-webpack-starter/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── index.jsx
├── webpack.config.js
└── babel.config.json
"""

---

### "public/index.html"

"""html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React Webpack Starter</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
"""

---

### "src/index.jsx"

"""jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
"""

---

### "src/App.jsx"

"""jsx
import React from "react";

export default function App() {
  return (
    <div>
      <h1>React + Webpack Starter</h1>
      <p>Hello from your Webpack & React setup!</p>
    </div>
  );
}
"""

---

### "webpack.config.js"

"""js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
  devtool: "inline-source-map",
};
"""

---

### "babel.config.json"

"""json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
"""

---

# Step 5: Add scripts to "package.json"

Edit your "package.json" scripts to add:

"""json
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack --mode production"
}
"""

---

# Step 6: Run the project

Start development server:

"""bash
npm start
"""

This will:

* Build your React app using Webpack
* Launch "http://localhost:3000" with hot reload
* Serve your app with source maps for debugging

---

# Step 7: Build production bundle

When ready for production:

"""bash
npm run build
"""

This will create an optimized, minified bundle in the "dist" folder.

---

# Optional Step 8: Add SCSS or other loaders

Since your resume mentions SCSS and Tailwind, you can install and configure those later by adding:

"""bash
npm install --save-dev sass sass-loader
"""

And update "webpack.config.js" with SCSS rules.

---

# Final Notes:

* This setup aligns with your experience in React, JavaScript, CSS, and performance optimizations.
* From here you can extend with Redux, Next.js, Tailwind, code splitting, etc.
* Feel free to ask if you want me to help add advanced features!

---

Ready to try? If you hit any issue, just tell me your OS & Node version, I’ll help troubleshoot!

"
`;
  return (
    <div>
      <h1>React + Webpack Starter</h1>
      <p>Hello from your Webpack & React setup!</p>
      <pre>{textString}</pre>
    </div>
  );
}
