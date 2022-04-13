# yarn build
git checkout --orphan gh-pages
git --work-tree build add --all
git --work-tree build commit -m 'gh-pages'
git push origin HEAD:gh-pages --force
git checkout -f main
git branch -D gh-pages