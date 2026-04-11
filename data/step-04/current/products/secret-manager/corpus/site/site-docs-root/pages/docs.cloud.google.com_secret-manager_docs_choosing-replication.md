---
title: "Choose a secret replication policy \_|\_ Secret Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/choosing-replication
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/choosing-replication
  title: "Choose a secret replication policy \_|\_ Secret Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Choose a secret replication policy
Stay organized with collections
Save and categorize content based on your preferences.
This page describes secret replication policies in Secret Manager. A
replication policy lets you choose the locations where you store your secret
payload data. You can configure each secret with either automatic replication or
user-managed replication when you create a secret. The locations in the
replication policy can't be updated.
Regardless of the replication policy you select, Secret Manager ensures
strong consistency of your
data. Replication is a synchronous process. Secret Manager immediately
makes the data available across all configured replicas when a secret is created
or updated.
Automatic secret replication policy
A secret with an automatic replication policy has its payload data replicated
without restriction. This is the simplest configuration and is recommended for
most users. When creating a secret using the Google Cloud CLI or the web
UI, this is the default replication policy.
When you choose automatic replication, Secret Manager replicates the
secret across multiple regions globally. Google Cloud manages the distribution
of your data across these regions to ensure high availability. Automatic
replication provides robust protection against single-region failures without
requiring manual configuration.
For billing purposes , a secret with an automatic
replication policy is considered to be stored in a single location.
For purposes of
resource location organization policy
evaluation, a secret with an automatic replication policy can only be created
if resource creation in global is allowed.
User-managed secret replication policy
A secret with a user-managed replication policy has its payload data replicated
to a user configured set of locations. The secret can be replicated to any
number of supported locations . This may be
useful if there are requirements around where the secret payload data can be
stored.
If you configure replication to multiple regions and one or more regions
experience an outage, the create or update action fails. This ensures that your
data remains consistent. Secret Manager
returns an error message confirming the failure.
For billing purposes , each location in the
user-managed replication policy is considered a separate location.
For purposes of
resource location organization policy
evaluation, a secret with a user-managed replication policy can only be created
if resource creation is allowed in all the selected locations.
What's next
Learn more about editing a secret .
Learn more about managing access to secrets .
Learn more about setting up rotation policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
