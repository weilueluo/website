# use by deploy script

set -xoe pipefail

# check nvm
if [ ! command -v nvm ]; then
    echoerr "nvm cli not found"
    exit 1
fi

nvm use
npm i
npm install pug-cli -g

# compile sass
npx sass --no-source-map ./src/public/scss:./src/public/css/scss-generated

# apply postcss
npx postcss ./src/public/css/scss-generated --use autoprefixer --base ./src/public/css/scss-generated --dir ./src/public/css/postcss-generated

# compile pug to html
pug src/public/pug -o src/public