# website

Source code for https://luoweilue.com

#### Postcss
```
postcss ./src/public/css/scss-generated --watch --use autoprefixer --base ./src/public/css/scss-generated --dir ./src/public/css/postcss-generated
```

#### Pug
```
pug -w src/public/pug -o src/public
```

#### Scss
```
sass --watch --no-source-map ./src/public/scss:./src/public/css/scss-generated
```

## Deploy
```
nvm use
npm i
npm install pug-cli -g
```
compile sass to css
```
npx sass --no-source-map ./src/public/scss:./src/public/css/scss-generated
```
apply postcss to compiled css
```
npx postcss ./src/public/css/scss-generated --use autoprefixer --base ./src/public/css/scss-generated --dir ./src/public/css/postcss-generated
```
compile pug to html
```
pug src/public/pug -o src/public
```
use whatever to serve `./src/public`