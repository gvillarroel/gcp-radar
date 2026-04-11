---
title: "Demote media recommendations \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/demote-recommendations
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/demote-recommendations
  title: "Demote media recommendations \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Demote media recommendations
Stay organized with collections
Save and categorize content based on your preferences.
When you use media recommendations, you can demote recommendations based on
viewer data or content age. Recommendations that meet the demotion criteria that
you specify are demoted to the bottom of the results list. This feature is
available only for media recommendations, not for custom search and recommendations.
Demotion is set on the serving config level. You can have multiple
serving configs per media recommendations app, each with a different
demotion setting. For more information about serving configs, see
Create and manage serving configs .
Demote based on viewer data
You can demote recommendations based on how an end user has recently interacted
with the recommended content.
If your recommended content has a detail page, then you can demote it if the
user has recently viewed it. If your content is playable media, then you can
demote it depending on the amount of time the user played it or the percentage
of the content that the user played.
To demote recommendations based on viewer data:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to configure recommendations for.
Go to the Configurations > Control tab.
If you have more than one serving config, select the serving config that you
plan to set demotion for.
In the Recommendation demotion section, turn on the
Demote recommendations based on viewer data toggle to see the available demotion
options.
Select your demotion option and, if prompted, enter a threshold value for
when to trigger demotion.
Click Save and publish .
Demote based on content age
You can demote playable content based on its age. You set the age threshold in
days, and any content that reaches that age is demoted to the bottom of the
results list.
To demote recommendations based on content age:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to configure recommendations for.
Go to the Configurations > Control tab.
If you have more than one serving config, select the serving config that you
plan to set demotion for.
In the Recommendation demotion section, turn on the
Demote recommendations based on content age toggle.
Enter a content age threshold value for when to trigger demotion.
Click Save and publish .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
