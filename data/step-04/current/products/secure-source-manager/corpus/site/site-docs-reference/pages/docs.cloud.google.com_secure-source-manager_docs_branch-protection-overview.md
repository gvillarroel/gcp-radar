---
title: "Branch protection overview \_|\_ Secure Source Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview
  title: "Branch protection overview \_|\_ Secure Source Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Branch protection overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes branch protection in Secure Source Manager for
administrators.
To learn how to set up branch protection, follow the instructions in
Configure branch protection .
Branch protection prevents users from accidentally or maliciously pushing bad
code to an important branch. Repository administrators can configure branch
protection to block code submission to specific branches based on the following
criteria.
Require a pull request before merging
When enabled, a pull request must be created and approved by a configurable
number of reviewers and approvers to merge into protected branches.
Reviewers and approvers are configured using IAM roles.
Reviewers
Must have at least the Secure Source Manager Repository Writer role
( roles/securesourcemanager.repoWriter ) on the protected repository.
Approvers
Must have either the Repository Admin role
( roles/securesourcemanager.repoAdmin ) or both the Repository Writer role
( roles/securesourcemanager.repoWriter ) and the Repository Pull Request
Approver role ( roles/securesourcemanager.repoPullRequestApprover ) on the
protected repository.
Users with the Repository Admin role or the Repository Writer role who also have
the Repository Pull Request Approver role count as both an approver and reviewer
when they approve a pull request.
Block merge on stale reviews
When enabled, commits added to a pull request after a review or approval has
been granted will block the merge. New reviews and approvals must be granted
before the pull request can be merged into the protected branch.
Enabled by default in all branch protection rules.
Require review comments to be resolved before merging
When enabled, all comments and requests for changes on the pull request must be
resolved before it can be merged into the protected branch.
Require linear history
When enabled, pull requests that would introduce merge commits are blocked.
Maintaining a linear Git history has many benefits, including making it simpler
to understand what each commit does.
Require status checks
When enabled, you can require a successful build status for
triggers defined in your triggers file before a pull
request can be merged into a protected branch.
What's next
Configure branch protection
Connect to Cloud Build
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
