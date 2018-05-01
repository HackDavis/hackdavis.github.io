# hackdavis.io

HackDavis main website repository

# Deployment

Do Not directly edit index.html !!

*First copy token.js into the scripts/ directory*

`node scripts/sync.js` to pull sponsors information from trello and link it to the static images already present in the img/ folder

`node scripts/deploy_map.js` to render the sponsors information available in generate_map.json into index.html using template.html as a template

`node scripts/deploy_recruitment.js` is identical to `deploy_map.js` except the template it renders onto is recruitment.html

After that do `git commit -am "a message" ; git push` 
