---
title: "Connect and store data to a warehouse \_|\_ Vertex AI Vision \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/connect-warehouse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/connect-warehouse
  title: "Connect and store data to a warehouse \_|\_ Vertex AI Vision \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Connect and store data to a warehouse
Stay organized with collections
Save and categorize content based on your preferences.
One of the data destination components you can add to your app is a
Vision Warehouse to store streamed and processed data.
Caution : Vertex AI Vision doesn't support a
stream's usage in multiple apps connected to a warehouse ; one stream can be associated with
only one warehouse export destination.
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Select View app next to the name of your application from the list.
From the side list of components, choose Vision AI Warehouse from the
list of Connectors . The warehouse node is added to the app graph and a
side Vision AI Warehouse menu opens.
Select Connect warehouse .
If you choose to
radio_button_checked Create a new
warehouse , enter a warehouse name and select a
[time to live (TTL)][ttl-link]{: .external}. Then click Create .
If you choose to
radio_button_checked Select from
existing warehouses , select the button next to your warehouse and
click Connect .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
