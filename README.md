# website

#### Postcss
```
postcss .\src\public\css\*.css --watch --use autoprefixer -d .\src\public\css\
```

#### Pug
```
pug -w src/public/pug -o src/public
```

#### Scss
```
sass --watch .\src\public\scss\index\index.scss:./src/public/css/index.css .\src\public\scss\about\about.scss:./src/public/css/about.css
```