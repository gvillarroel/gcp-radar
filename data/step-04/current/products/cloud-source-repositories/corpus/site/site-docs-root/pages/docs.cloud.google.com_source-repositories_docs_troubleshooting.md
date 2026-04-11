---
title: "Troubleshooting \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/troubleshooting
  title: "Troubleshooting \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
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
Support
Send feedback
Troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
This page describes tips, troubleshooting, and known issues that you might find
helpful if you run into problems using Cloud Source Repositories.
Search results don't match expectations
It can take several hours for a newly added repository or large commit to be
indexed for search. Try again after a few hours. If no changes have been
made in the last 24 hours or if this issue persists for over 24 hours, please
contact support .
Users are unable to perform actions such as viewing or creating repositories
Cloud Source Repositories uses Identity and Access Management to grant permissions to users. If
a user cannot perform a specific action, such as create a new repository, check
to ensure they have the correct IAM permissions. To learn more
about these permissions, see Configuring Access to Repositories .
For example, if a user has the source.repos.read permission to a repository,
but does not have the source.repos.list permission on the project, the user
cannot see the repository in the Repository view.
You can resolve this issue by granting the source.repos.list permission to the
user on the project. Alternatively, the user can also access the repository
through a direct hyperlink; however, the user can't search the
repository without being granted the source.repos.list permission on the
project.
Cannot find newly-added project
If you just created a project, it can take a few minutes for the project
information to update. Wait 10 minutes and refresh your browser. If the problem
persists, please contact support .
Contents of deleted repositories still visible
It can take a few minutes for deleted content to get removed from the user
interface. Refreshing your browser should resolve this issue.
Cannot locate commits
Cloud Source Repositories only displays the most recent commits during searches. To
find older commits, use the History panel .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
