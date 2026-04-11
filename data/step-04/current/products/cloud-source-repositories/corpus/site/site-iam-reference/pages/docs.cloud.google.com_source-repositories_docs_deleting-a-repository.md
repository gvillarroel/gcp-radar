---
title: "Deleting repositories \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/deleting-a-repository
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/deleting-a-repository
  title: "Deleting repositories \_|\_ Cloud Source Repositories \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Guides
Send feedback
Deleting repositories
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes how to delete a repository by using the
Google Cloud console or the command line.
To delete a repository, follow these steps.
console
In the Google Cloud console, open the All repositories page for
Cloud Source Repositories.
Open Cloud Source Repositories
Hold the pointer over the repository you want to delete and click
Settings settings .
The General settings page opens.
Click Delete this repository
delete .
The Remove repository dialog opens.
Type the name of the repository you want to delete.
Click Delete .
gcloud
From a terminal window, enter the following commands:
gcloud init
gcloud source repos delete [ REPOSITORY_NAME ]
Where [REPOSITORY_NAME] is the name of your repository.
The response looks like the following:
If [ REPOSITORY_NAME ] is deleted , the name cannot be reused for up to
seven days .
Delete "[REPOSITORY_NAME]" in project "gcloud-test" ( Y / n ) ? y
Deleted [ REPOSITORY_NAME ] .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
