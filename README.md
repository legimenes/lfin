# Lfin

## Layout

https://github.com/themesberg/flowbite-admin-dashboard/
https://flowbite-admin-dashboard.vercel.app/

## Tailwind installation and configuration

In the project root directory initialize npm:
```
npm init -y
```

Install Tailwind CSS:
```
npm install -D tailwindcss
```
When Tailwind CLI builds the CSS, it internally uses "postcss" to process the Tailwind directives and "autoprefixer" to including vendor prefixing. So there is no need to explicitly install or configure postcss or autoprefixing for basic usage.

Create the tailwind.config.json:
```
npx tailwindcss init
```

Update tailwind.config.json:
```
module.exports = {
  content: [
    './Pages/**/*.cshtml'
],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

At wwwroot/css create app.css file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In the package.json add:
```
"scripts": {
  "css:build": "npx tailwindcss -i ./wwwroot/css/app.css -o ./wwwroot/css/site.css --minify"
}
```

In the .csproj add itemgroups file for building the css before deploying:
```
<ItemGroup>
  <UpToDateCheckBuilt Include="wwwroot/css/app.css" Set="Css" />
  <UpToDateCheckBuilt Include="tailwind.config.js" Set="Css" />
</ItemGroup>

<Target Name="Tailwind" BeforeTargets="Build">
  <Exec Command="npm run css:build"/>
</Target>
```

Update _Layout.cshtml
```
<link rel="stylesheet" href="~/css/site.css" asp-append-version="true" />
```

### Flowbite installation and configuration

Install Flowbite:
```
npm install flowbite
```

Update tailwind.config.js to include Flowbite as a plugin, allowing Flowbite to extend Tailwind's functionality:
```
module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ]

    plugins: [
        require('flowbite/plugin')
    ]

}
```

Copy Flowbite's JavaScript file node_modules/flowbite/dist/flowbite.min.js to wwwroot/lib/flowbite/js/ folder and reference it locally:
```
cp node_modules/flowbite/dist/flowbite.min.js wwwroot/lib/flowbite/dist/js/
```

Update _Layout.cshtml
```
<script src="~/lib/flowbite/js/flowbite.min.js"></script>
```
