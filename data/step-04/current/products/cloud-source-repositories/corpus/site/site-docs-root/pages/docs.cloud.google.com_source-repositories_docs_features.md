---
title: "Features \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/features
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/features
  title: "Features \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
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
Features
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Source Repositories provides fully featured, private
Git
repositories hosted on
Google Cloud .
You can use Cloud Source Repositories for collaborative, version-controlled
development of any app or service, including those that run on
App Engine
and
Compute Engine .
If you're familiar with Git, you can get started quickly with
Cloud Source Repositories. For example, you can add Cloud Source Repositories to a
local Git repository as a remote, or you can connect it to a hosted repository
on GitHub or Bitbucket. From a local repository, you can use the standard set of
Git commands to interact with the repository in the cloud, including push ,
pull , clone , and log .
Caution
Cloud Source Repositories are intended to store only the source code for your
app and not user or personal data. Don't store any Core App Engine
Customer Data (as defined in your
License Agreement )
in Cloud Source Repositories.
Multiple repositories
You can
create multiple repositories
for a single Google Cloud project, allowing you to organize the code
associated with your cloud project in whatever way works best for you.
Connected repositories
You can connect an existing
GitHub
or
Bitbucket
repository to Cloud Source Repositories. Connected repositories are synchronized
with Cloud Source Repositories automatically.
Editor support
Because repositories in Cloud Source Repositories are Git repositories, you can
continue to use the editor of your choice to work on your code. For a more
integrated experience, see
Cloud Code for IntelliJ
Source browser
Cloud Source Repositories also provide a
source browser
that you can use to view repository files from within the
Google Cloud console.
Automatic logging
Cloud Source Repositories automatically send logs on repository activity to
Cloud Logging to help track and troubleshoot data access.
You can use these logs to review recent repository synchronization, repository
access by other users, and administrative actions such as creations, deletions,
and permission changes. Moreover, you can configure notification settings such
that an alert is sent to you when an error is logged during a repository
synchronization.
For more information regarding reading and writing log entries in
Logging, see this
quickstart .
For information about possible billing configurations to manage storage of your
logs, see
Logging pricing .
Security key detection
Cloud Source Repositories offer security key detection to block git push
transactions that contain sensitive information. This feature is designed to
improve the security of your source code. Enabling it is a best practice. For
more information, see
Detecting security keys .
User data
Caution
Cloud Source Repositories are intended to store only the source code for your
app and not user or personal data. Don't store any Core App Engine
Customer Data (as defined in your
License Agreement )
in Cloud Source Repositories.
What's next
Learn how to set up a repository.
Learn how to add a repository as a remote.
Learn how to connect a repository hosted on GitHub or Bitbucket.
Learn how to use the source browser.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
