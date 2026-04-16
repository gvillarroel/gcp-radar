---
title: "Write your visualizations faster with dscc-gen \_|\_ Looker Studio \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/looker-studio/visualization/local-dev
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/local-dev
  title: "Write your visualizations faster with dscc-gen \_|\_ Looker Studio \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Visualize
Write your visualizations faster with dscc-gen
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
dscc-gen accelerates community visualization development in Looker Studio by enabling immediate visualization of code changes.
To utilize dscc-gen , ensure npm 5.2.0 or later and gsutil are installed, then execute the command npx @google/dscc-gen viz .
The initial setup involves configuring the local dataset, deploying a visualization to your dev bucket, and connecting to a representative dataset in Looker Studio.
Various scripts are provided for development, including start , update_message , build:dev , push:dev , build:prod , and push:prod , each serving specific functions in the workflow.
A detailed codelab is available to guide users through the process of using the dscc-gen tooling.
The typical workflow for seeing changes in your community visualization is to
upload your files to GCS, then refresh your Looker Studio report. This works,
but means that you can spend a lot of time waiting to see changes. dscc-gen
enables a workflow to immediately see your visualization code changes, reducing
the time it takes to write a community visualization.
To get started, make sure npm 5.2.0 or later and gsutil are installed. Then,
run:
npx @google/dscc-gen viz
Note: If you prefer to use yarn, pass --yarn as an argument.
First Time Configuration
dscc-gen comes with a default local dataset that's probably not representative
of the data you want to visualize. To update this dataset to meet your needs:
Update your config at src/index.json .
Run npm run update_message . This deploys a visualization to your
dev bucket that displays the message in a format that's easy to copy.
Create a new report and connect to a dataset that's representative of the
data you want to visualize.
Add a community visualization using your dev bucket as your component
ID.
Copy the contents of the visualization to scripts/data/localData.js . This
data will be used when you develop locally.
Scripts
The following scripts are available for visualization projects created with
dscc-gen .
Command
Action
npm run start
Start the local server and preview your
visualization
npm run update_message
Update the message using the objectFormat
npm run build:dev
Build files from ./src into ./build with
caching disabled.
npm run push:dev
Copy the files from build to your dev bucket.
npm run build:prod
Build files from ./src into ./build with
caching enabled.
npm run push:prod
Copy the files from build to your prod
bucket.
Caution: Before you build & deploy your viz, make sure you change const LOCAL=
in src/index.js to false .
The update_message command defaults to the objectFormat . To use the
tableFormat , edit the parameters in the update_message script in
package.json from -f object to -f table .
Codelab
To learn how to use the tooling, review the dscc-gen codelab .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
