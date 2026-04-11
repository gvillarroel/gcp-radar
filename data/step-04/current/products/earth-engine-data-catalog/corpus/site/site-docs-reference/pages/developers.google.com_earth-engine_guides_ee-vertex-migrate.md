---
title: "Cloud AI Platform Migration Guide \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/guides/ee-vertex-migrate
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/getstarted
source_metadata:
  url: https://developers.google.com/earth-engine/guides/ee-vertex-migrate
  title: "Cloud AI Platform Migration Guide \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Cloud AI Platform Migration Guide
Stay organized with collections
Save and categorize content based on your preferences.
Cloud AI Platform is deprecated and access will be discontinued January 31 2025.
The easiest way to migrate is to following Vertex AI's
migration page in the Cloud Console .
Otherwise you can manually migrate with the following steps.
Manual Migration
Re-upload your Cloud AI Platform model to Vertex AI. Be careful to ensure
that the uploaded model is using the same ML library when choosing the
container image to use otherwise the model may not successfully deploy at a
later step.
Create a new Vertex AI endpoint for your hosted model.
Deploy your uploaded model to the new Vertex AI endpoint.
Update any references from ee.Model.fromAiPlatformPredictor to
ee.Model.fromVertexAi in all of your code using Earth Engine and in the
endpoint field use the new endpoint name that you created in step 2.
Tip: When re-deploying your model to Vertex AI consider using a
gRPC prediction format .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-01-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-01-08 UTC."],[],[]]
