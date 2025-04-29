
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you're deploying to a custom domain
echo 'www.sambow.net' > CNAME

# initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'deploy'

# if you're deploying to https://<USERNAME>.github.io/<REPO>
# replace USERNAME with your GitHub username and REPO with the repository name
git push -f git@github.com:USERNAME/REPO.git main:gh-pages

cd -
