openapi-generator generate -g typescript-angular -c config.json -i spec.json

git add --all
git commit -m "update api client"
git push
