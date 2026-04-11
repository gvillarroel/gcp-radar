---
title: "The Commit Details view \_|\_ Cloud Source Repositories \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/commit-details-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/commit-details-overview
  title: "The Commit Details view \_|\_ Cloud Source Repositories \_|\_ Google Cloud\
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
The Commit Details view
Stay organized with collections
Save and categorize content based on your preferences.
As your codebase changes, you may find it useful to view specific commits to
better understand what code changes occurred and why those changes were made. To
do this in Cloud Source Repositories, use the Commit Details view.
This view displays detailed information about a specific commit to a repository,
such as:
Who made the commit.
What time the commit was made.
What files were changed.
What specific changes were made.
Components of the Commit Details view
The top left of the Commit Details view displays the hash of the
commit and the parent hash. On the right, you can choose to browse
the repository or copy the full hash of the commit.
You can use this information to perform tasks such as copying the full hash of a
commit or browsing to the parent commit.
Directly below this section you can find details such as:
The commit message description.
The author of the commit.
The account that submitted the commit (if different from the author).
The date of a commit to the repository.
To learn which files were affected and what was changed, see the
Files Changed section.
In this section you can see the number of files that changed in the commit,
along with a list of those files. The right side of this section displays a
graphical representation of the changes made to the files:
Red represents deletions.
Blue represents modifications.
Green represents additions.
A small bar provides a visual representation of the distribution of these
changes within a file. Next to this bar are the specific number of lines
deleted, modified, or added.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
