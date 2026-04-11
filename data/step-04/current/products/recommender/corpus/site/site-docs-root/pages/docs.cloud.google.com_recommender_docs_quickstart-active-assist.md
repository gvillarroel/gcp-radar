---
title: "Find recommendations with Active Assist \_|\_ Recommender \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/recommender/docs/quickstart-active-assist
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/quickstart-active-assist
  title: "Find recommendations with Active Assist \_|\_ Recommender \_|\_ Google Cloud\
    \ Documentation"
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
Find recommendations with Active Assist
This page shows you how to use Active Assist to find and apply
recommendations from recommenders that support
Active Assist. For details about recommenders and supported
clients, see Recommenders .
Before you begin
For this quickstart, you need a Google Cloud project.
Go to the Google Cloud console.
Select a Google Cloud project, folder, or organization.
You can only see recommendations at an organization or folder level if you
have permissions for that organization or folder, regardless of your
permissions for folders or projects within it.
Ensure you have sufficient Identity and Access Management (IAM) permissions to view
the project's recommendations. If you don't have sufficient permission, you
might not be able to view some recommendations, and Active Assist
might appear empty. To see recommendations for
all Google Cloud products and services, grant or request the
Recommender Viewer Role .
Alternatively, you can grant viewer roles for individual recommenders, such
as the IAM Recommender Viewer role .
See recommenders for links to information
about individual recommenders.
Note: If you are starting with a new project, you won't see any recommendations.
Find recommendations
Navigate to Active Assist.
Go to Active Assist
This page displays an overview of all recommendations categorized by
value pillar (Cost, Security, Performance, Reliability, Management, and
Sustainability).
Note: If you have sufficient permissions and your Active Assist is
still empty, you may have no active services that have recommenders that
support Active Assist or your services may not have been in
use long enough to generate recommendations.
Select the All recommendations tab.
This page displays a table of every recommendation that you can filter, sort,
and share. You can explore recommendations in detail, see what resources are
affected, and what impact applying a recommendation might have.
Apply and dismiss recommendations
In the Recommendation column, click the recommendation you want to learn
more about. A details panel opens that shows the observation that led to the
recommendation, as well as relevant data that might help you decide whether
to apply or dismiss it.
Apply or dismiss recommendations that you have permission to using the apply
or dismiss buttons.
Note that some recommendations might not be directly applicable in the
details panel. Follow the instructions listed in the details panel to apply
them.
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
Restore dismissed recommendations
The Applied and dismissed page
contains a record of all of the recommendations you have applied or dismissed.
You can only restore a recommendation that has the status Dismissed. To restore
a dismissed recommendation, click RESTORE in the restore column.
Recommendations that you can't find
Not every recommendation can be found in Active Assist. You can
also find and apply recommendations in service pages
or using the API . For details about recommenders
and supported clients, see Recommenders .
What's next
Finding and applying recommendations in context
Enabling the API
Using the API
Export recommendations to BigQuery
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
