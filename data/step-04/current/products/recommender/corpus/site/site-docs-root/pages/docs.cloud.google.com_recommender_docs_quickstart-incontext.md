---
title: "Quickstart: Find and apply recommendations in context \_|\_ Recommender \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/quickstart-incontext
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/quickstart-incontext
  title: "Quickstart: Find and apply recommendations in context \_|\_ Recommender\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quickstart: Find and apply recommendations in context
Learn how to find and apply recommendations from
recommenders that support viewing and managing recommendations in context
(that is, using a service's user interface in the Google Cloud console). For details
about recommenders and supported clients, see Recommenders .
Before you begin
For this quickstart, you need a Google Cloud project with a virtual machine running on Compute Engine.
Go to the Google Cloud console.
Select your Google Cloud project. If you don't have a Google Cloud project, create a new project.
Ensure you have sufficient Identity and Access Management (IAM) permissions to view the project's recommendations. If you don have sufficient permission, you might not be able to view some recommendations in detail. Refer to the IAM guide for more information.
Note: If you're starting with a new project, you may not see any recommendations. You might use the concepts taught in this quickstart for other recommendations in the future as well.
Find VM resource recommendations in context
In this guide, we will use Compute Engine to find recommendations to reduce VM resource costs. Use the next section to find a full list of products with recommendations available in context.
Navigate to the VM Instances dashboard in Compute Engine.
Go to VM Instances
Find the recommendation column under the Recommendation header in the table.
Note: You might not have any recommendations in this table. If you don't see any
recommendations, check the Active Assist
documentation to see what other products you might have recommendations for or
whether the recommender supports another client such as
Active Assist or the Recommender API.
Apply recommendations
This process might look different for some recommendations, which require you to visit product pages and make the changes there. However, the process is largely the same and can be applied to most recommendations.
Click a recommendation in the Recommendation column in the table to open the detail panel.
In the detail panel, click apply.
Warning:
Before applying recommendations in the Google Cloud console or
using the API, ensure that impacts are assessed by a reviewer within your organization.
The reviewer should have the knowledge to assess impacts identified in
recommendations, as well as impacts specific to your infrastructure and
business. Applying recommendations without proper assessment could result in
unexpected changes, such as issues with system performance, poor reliability, or
loss of required permissions. If you choose to apply recommendations without
human review, ensure that you have set up a rollback process before making any
changes.
Other ways to apply recommendations
You can also use the Active Assist to find a centralized collection of recommendations available to you.
Finding and applying recommendations in the Active Assist
You can also batch process recommendations using the Google Cloud CLI or REST API. To learn more, refer to the following guide:
Using the API - Recommendations
What's next
Finding and applying recommendations in the Active Assist
Enabling the API
Using the API
Export recommendations to BigQuery
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
