---
title: "Choose a region for app creation \_|\_ Vertex AI Vision \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/app-supported-regions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/app-supported-regions
  title: "Choose a region for app creation \_|\_ Vertex AI Vision \_|\_ Google Cloud\
    \ Documentation"
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
Choose a region for app creation
Stay organized with collections
Save and categorize content based on your preferences.
When you create an app in the App Studio, you must choose a region. The region determines where your app's underlying elements, such as inputs, models, and warehouses, are stored.
All resources in the same region
After you choose a region, resources you select and those you create in the App Studio remain there. This includes inputs, models, warehouses, and any other resources that your app uses.
The region you select is always highlighted in our guides. This ensures that you're aware of the region your resources are stored in, and you can make an informed decision about where to create your app.
Supported regions
The following regions are currently supported:
us-central1
europe-west4
Limitation :
Your data for a regionalized resource may not be physically located in the region that you specified when you created the resource. If you have regulatory or compliance requirements mandating your data is stored in a specific region, do not use Vertex AI Vision.
While Google Data Residency requirements do not apply to all Vertex AI Vision regionalized resources, we deploy those resources in regions that provide high availability and fault tolerance. They may even be replicated to other regions for redundancy and disaster recovery.
How to choose a region
To choose a region during app creation, follow these steps:
Console
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
In the Region drop-down, select the region where you want to create your app.
Click Create .
What's next
Read instructions about how to begin data ingestion from an app's input
stream in Create and manage streams .
Learn how to list apps and view a deployed app's instances in
Managing applications .
Learn how to read app input data from an ingestion stream or analyzed
model output data in Read stream data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
