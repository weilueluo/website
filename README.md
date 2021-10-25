# website

#### Postcss
```
postcss ./src/public/css/scss-generated --watch --use autoprefixer -d ./src/public/css/postcss-generated
```

#### Pug
```
pug -w src/public/pug -o src/public
```

#### Scss
```
sass --watch --no-source-map ./src/public/scss:./src/public/css/scss-generated
```