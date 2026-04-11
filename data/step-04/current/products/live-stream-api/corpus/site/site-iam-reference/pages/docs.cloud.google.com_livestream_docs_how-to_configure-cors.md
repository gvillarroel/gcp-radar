---
title: "Configure cross-origin resource sharing (CORS) \_|\_ Live Stream API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/how-to/configure-cors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/how-to/configure-cors
  title: "Configure cross-origin resource sharing (CORS) \_|\_ Live Stream API \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Guides
Send feedback
Configure cross-origin resource sharing (CORS)
Stay organized with collections
Save and categorize content based on your preferences.
Cross Origin Resource Sharing (CORS) allows interactions between resources from
different origins, something that is normally prohibited in order to prevent
malicious behavior. This page explains how to configure CORS on a
Cloud Storage bucket for a sample origin, the origin of the online
Shaka media player.
To enable cross-origin resource
sharing (CORS) on a Cloud Storage bucket , do the following:
Create a JSON file that contains the following:
[
{
"origin": ["https://shaka-player-demo.appspot.com/"],
"responseHeader": ["Content-Type", "Range"],
"method": ["GET", "HEAD"],
"maxAgeSeconds": 3600
}
]
Run the following command after replacing JSON_FILE_NAME with
the name of the JSON file you created in the previous step:
gcloud storage buckets update gs:// BUCKET_NAME --cors-file= JSON_FILE_NAME .json
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
