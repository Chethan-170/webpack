# 🛠 Webpack Learning

A structured and practical guide as I learn **Webpack** from scratch, with real questions and answers along the way.
This repo documents both **theory** and **hands-on** lessons, including key insights from errors and debugging.

> This is a practical learning guide for understanding how Webpack works, especially when building your own custom config.
> It combines real developer questions, debug insights, and step-by-step concepts that anyone can follow.

---

## 📆 Basics

### ✅ What is Webpack?

Webpack is a **JavaScript module bundler**. It:

- Starts from an entry JS file (`src/index.js`)
- Follows all `import` and `require()` calls
- Bundles everything (JS, CSS, images, fonts) into a single/minified output (like `dist/bundle.js`)

But by default:

- ❌ It only understands `.js` files
- ❌ It does **not** convert modern JS (e.g., `?.`, `async/await`) for old browsers

#### 📁 Basic Project Structure

```bash
project-root/
├── src/
│   └── index.js
├── dist/
│   └── index.html (optional if using HtmlWebpackPlugin)
├── webpack.config.js
├── .babelrc
└── package.json
```

---

### 🔌 Loaders

Loaders help Webpack understand **non-JS files** (like `.css`, `.html`, `.png`, `.svg`, `.scss`, `.jsx`, etc.)

Examples:

- `css-loader` — allows importing CSS
- `babel-loader` — connects Babel to Webpack to transpile modern JS

---

### 🧐 Babel

Webpack **bundles** JS. Babel **transpiles** modern JS into older JS that older browsers can run.

Example:

```js
const name = user?.name ?? "Guest";
```

→ Babel will convert this to compatible ES5 code for browsers that don’t support `?.` or `??`.

You connect Babel to Webpack using `babel-loader`.

> Babel is usually configured in a `.babelrc` or `babel.config.js` file in the project root.

---

### ⚠️ When Do You Need Webpack?

You need Webpack when:

- ✅ Running a build: `npm run build`
- ✅ Using a dev server like `webpack-dev-server` or Vite
- ✅ Working with `import`, JSX, SCSS, etc.

---

### ❌ What Happens Without Webpack?

If you skip Webpack:

- Browsers can’t understand:

  - `import` / `require()`
  - JSX, SCSS, font/image imports
  - Optional chaining, `async/await`, etc.

- Result: **Syntax errors**, broken UI, or blank screens

---

### 🏠 HTML Files in Webpack

Browsers need an `index.html` to load the app. Webpack doesn’t generate this by default.

You have 2 options:

1. Manually create `dist/index.html` and link the script
2. Use **HtmlWebpackPlugin** to:

   - Auto-generate `dist/index.html`
   - Inject the bundled script tag (`<script src="bundle.js">`) for you
   - Use a custom HTML template with `template: './src/template.html'`

---

## ❓ Doubts & Clarifications (Q\&A Style)

> These are real questions and clarifications raised while learning Webpack. They’re grouped by topic for easy reference.

### 📥 Entry & Output

> 💬 **Q: Why does Webpack expect a `.js` file as entry, not `.html`?** > **A:** Because Webpack bundles _JavaScript modules_, not HTML. `index.html` is the container, but `index.js` is the starting point of the app logic.

### 🧠 Babel & Modern JS

> 💬 **Q: I wrote modern JS (like optional chaining). It failed in the browser but worked in Node. Why?** > **A:** Node (with `"type": "module"` or `.mjs`) supports many modern features directly. But the browser may not, especially if it's older or strict. That's why Babel is needed for compatibility.

> 💬 **Q: What does `"presets": ["@babel/preset-env"]` do in `.babelrc`?** > **A:** It tells Babel to figure out **which modern JS features need transpiling**, based on the target environments (like older browsers or Node versions). It's a smart preset.

> 💬 **Q: Does Babel check the browser and transpile accordingly at runtime?** > **A:** ❌ No. Babel transpiles at **build time**, based on what **you configure** (like `targets: "> 0.25%"`). The browser just receives already-converted JS.

> 💬 **Q: I removed Babel loader and used modern JS. Build worked, but browser gave syntax error. Why?** > **A:** Because Webpack **only bundles** — it doesn’t convert JS. You need Babel to make the syntax compatible. Without it, the browser crashes at runtime if it can't understand the code.

---

## 📚 Coming Next

- [ ] HtmlWebpackPlugin: using a custom template
- [ ] CSS + style-loader
- [ ] File loader (for fonts, images)
- [ ] Dev server + hot reload
- [ ] Code splitting & optimization
- [ ] Production builds & env variables
- [ ] Using Webpack with React from scratch

---

## 🔁 How to Run This

```bash
npm install
npx webpack          # bundle the app
npx webpack serve    # run dev server (if installed)
```

---

## 💡 Tip

Test what happens when things are **removed or misconfigured** — you’ll learn much faster from those mistakes.
