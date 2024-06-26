#!/usr/bin/zsh

# Enable error checking and pipefail
set -o pipefail

# Load nvm
export NVM_DIR="$HOME/.nvm"
{
    set +x  # Disable command tracing
    if [ -s "$NVM_DIR/nvm.sh" ]; then
        . "$NVM_DIR/nvm.sh"
        # Source bash_completion to ensure nvm functions are available
        [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" > /dev/null 2>&1
    else
        echo "nvm.sh not found"
        exit 1
    fi
} 2>/dev/null

# Re-enable error checking and pipefail without tracing
set -o pipefail

# Check if nvm command is available
if ! command -v nvm &> /dev/null; then
    echo "nvm cli not found"
    exit 1
fi

nvm use

# Run npm commands
npm ci
npm install pug-cli -g

# compile sass
npx sass --no-source-map ./src/public/scss:./src/public/css/scss-generated

# apply postcss
npx postcss ./src/public/css/scss-generated --use autoprefixer --base ./src/public/css/scss-generated --dir ./src/public/css/postcss-generated

# compile pug to html
pug src/public/pug -o src/public