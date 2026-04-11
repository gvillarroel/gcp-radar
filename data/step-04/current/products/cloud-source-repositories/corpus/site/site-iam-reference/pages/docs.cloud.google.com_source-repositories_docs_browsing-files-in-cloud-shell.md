---
title: "Browsing files in Cloud Shell \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/browsing-files-in-cloud-shell
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/browsing-files-in-cloud-shell
  title: "Browsing files in Cloud Shell \_|\_ Cloud Source Repositories \_|\_ Google\
    \ Cloud Documentation"
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
Browsing files in Cloud Shell
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes how to browse files by using Cloud Shell.
Open a repository in Cloud Shell for the first time
In the Google Cloud console, open Cloud Source Repositories.
Open Cloud Source Repositories
Click the name of a repository.
A page opens, displaying the contents of the repository.
Click Edit code .
A new browser tab opens, containing the Cloud Shell environment. You're
also prompted to confirm whether you want to clone the repository into your
Cloud Shell.
Click Proceed .
A Cloud Shell environment opens, containing a clone of your repository.
By default, the location of the repository is ~/[repository name] . For
example, ~/hello-world .
Open an existing repository with Cloud Shell
If you have already cloned a repository into a Cloud Shell environment,
follow the steps in the preceding section. When the Cloud Shell environment
is ready, you're prompted to select from one of the following options:
Navigate into that directory. To automatically change directories to the one
containing your repository, choose this option. For example,
~/hello-world .
Navigate into that directory and run git pull . To automatically change
directories to the one containing your repository and pull the latest
version of the repository to the Cloud Shell environment, choose this
option.
Clone a new copy by using the git clone command. To create a new folder
containing the repository in the Cloud Shell environment, choose this
option. The new folder has the same name as the repository, with a
number appended to it. For example, a second copy of the repository,
hello-world , has the name ~/hello-world-2 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
