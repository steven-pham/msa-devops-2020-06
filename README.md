# msa-devops-2020-06

URL of my website: https://msa-devops1.azurewebsites.net

##**Build & Release Pipeline Description**: I enabled the pipeline to be triggered when a commit is pushed to the master branch but also a branch named "develop". I did this by including descriptions of "master" and "develop" in the trigger section of the YAML file. In the trigger section, I added "READ.md" file in the 'exclude' section to let the pipeline know not to trigger if the only changes were made to the READ.md file regardless of on which branch the changes were made.
The release deployment to Azure is made continuous whenever new commits are made to the master branch, this will help me be able to add new features to my web app.


##**Web Application Description**: I changed the default logo to an masking emoji svg (because it's corona time). I changed the hyperlink to a youtube page and also changed the hyperlink's name to match the content of the youtube page.
