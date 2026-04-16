---
title: "Uploading your viz \_|\_ Community Visualizations \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/upload-viz
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/upload-viz
  title: "Uploading your viz \_|\_ Community Visualizations \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Uploading your viz
Stay organized with collections
Save and categorize content based on your preferences.
Now that your visualization code is written, Looker Studio needs to be able to
access your resources. For Looker Studio to load a community visualization, all
of your resources must be publicly available in a Google Cloud Storage bucket .
Create a bucket and upload files using either the web interface or the
gsutil command-line tool .
If your visualization files are in your current working directory, you can use
the following command to upload your files to your storage bucket.
gsutil cp -a public-read * gs://MY_GOOGLE_CLOUD_STORAGE_BUCKET
Next steps
Now that your visualization resources are uploaded, learn how to
use your visualization in a Looker Studio report.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
