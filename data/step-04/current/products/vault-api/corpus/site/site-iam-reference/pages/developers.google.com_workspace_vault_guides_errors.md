---
title: "Error handling \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/guides/errors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/auth
source_metadata:
  url: https://developers.google.com/workspace/vault/guides/errors
  title: "Error handling \_|\_ Google Vault \_|\_ Google for Developers"
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
Error handling
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the error codes you might get when using the Google Vault API,
how to interpret them, and what to do when you get them. If you need more help
with an error, review the support resources .
Error code
Description
Action
400: Bad Request
This error code is returned when there is an error in the input
request.
Check the request, make required changes to the request, and try again.
401: Invalid Credentials
The access token is invalid or expired.
Refresh the access token and try again.
404
The specified resource was not found. This error code is returned when the
request has a matter, hold, or account that doesn't exist.
None.
409
The specified resource already exists.
Try to get the resource again, and, if needed, perform an update.
429
The request exceeds a Vault API quota.
Review the
Vault API usage limits and use
an exponential backoff algorithm as described on that page.
500
An unexpected error happened while processing the request.
Retry with exponential backoff.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
