# **Book-vibes**

## **install**

- **React Router**
in _cmd(terminal)_

```
i) npm create vite@latest name-of-your-project -- --template react

ii) cd <your new project directory>

ii)npm install react-router-dom

iv)npm install localforage match-sorter sort-by 
```

- **Tailwind** :
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files [i,ii].  Add the paths to all of your template files in your tailwind.config.js file[iii]. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file[iv]
```
i) npm install -D tailwindcss postcss autoprefixer

ii) npx tailwindcss init -p

iii)in tailwind.config.js file 
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

iv)in src/index.css file
@tailwind base;
@tailwind components;
@tailwind utilities; 
```

- **DaisyUi**
```
i)Install daisyUI as a Node package:
 npm i -D daisyui@latest


ii)Add daisyUI to tailwind.config.js:
in tailwind.config.js file 
  plugins: [
    require('daisyui'),
  ],

iv)in eslint.config.js file add _node:true_
languageOptions: {
      ecmaVersion: 2020,
      node: true,  //this line---->>>>
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
```

- **Again React Router**
in _in main.jsx file_
```

i) import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ii)const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

iv)npm run dev (in cmd terminal) and to see the website (o + enter)
```

