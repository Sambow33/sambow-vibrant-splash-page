
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create CNAME file for custom domain
echo 'www.sambow.net' > CNAME

# create 404.html file for SPA routing
cp index.html 404.html

# initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'deploy'

# replace with your actual GitHub username and repository name
# example: git push -f git@github.com:username/repository-name.git main:gh-pages
git push -f git@github.com:USERNAME/REPO.git main:gh-pages

cd -
