---
title: "Google Vault API Overview \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/guides
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/auth
source_metadata:
  url: https://developers.google.com/workspace/vault/guides
  title: "Google Vault API Overview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Guides
Send feedback
Google Vault API Overview
Stay organized with collections
Save and categorize content based on your preferences.
With the Vault API, you can manage eDiscovery projects.
You can perform the following tasks:
Create matters and set who has access to them.
Place data on hold.
Create and edit saved search queries.
Start and monitor exports.
To set retention rules or audit Google Vault activity, use the
Vault app. For details, see
the Vault Help Center .
The following list describes common terms used in the Vault API.
Matter
A container for eDiscovery activity related to a specific case or
investigation. A matter includes saved search queries, a list of accounts
with data on hold, data exports, and a list of the accounts that can access
the matter. A matter is represented by a
Matter resource .
Hold
A policy that prevents Google Workspace services from deleting data. Holds
are typically used to preserve data for legal or investigation purposes.
Holds override
retention rules .
A hold is represented by a
Hold resource .
Saved search query
A query that you save in a matter. You can re-run a saved query to get data
that changed since the last the query was run. You can also copy saved
queries and reuse them in other matters. A saved query is represented by a
Saved query resource .
Export
A downloadable set of Google Workspace data that match your search
query. An export is represented by an
Export resource .
Next steps
To work with Vault resources, the account must have the
required Vault privileges
and access to the matter. To access a matter, the account must have created
the matter, have the matter shared with them, or have the View All
Matters privilege. For example, to download an export, an account needs
the Manage Exports privilege and the matter shared with them.
To learn about developing with Google Workspace APIs, including handling
authentication and authorization, see
Get started as a Workspace developer .
To learn how to configure and run a small Vault app, try
a quickstart in Python or
Java .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
