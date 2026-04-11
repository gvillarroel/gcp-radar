---
title: "Turn off Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/gemini/turn-off-gemini
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/gemini/turn-off-gemini
  title: "Turn off Gemini Cloud Assist in Cloud Billing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Turn off Gemini Cloud Assist in Cloud Billing
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document explains how to turn off Gemini Cloud Assist in
Cloud Billing. To turn off all Gemini for Google Cloud
products, including BigQuery, Gemini Code Assist, or
Looker see
Turn off Gemini for Google Cloud products .
Limit user access to Gemini Cloud Assist in Cloud Billing
To turn off Gemini Cloud Assist in Cloud Billing, so
that Gemini Cloud Assist features aren't available for use
in Cloud Billing, limit Gemini access for specific
Cloud Billing users.
To limit Gemini Cloud Assist access for specific users, you can
remove Identity and Access Management project permissions for the feature. For a list of
project permissions required to use Gemini Cloud Assist in
Cloud Billing, see
Grant IAM roles on a
Google Cloud project
in "Set up Gemini Cloud Assist in Cloud Billing."
Note: It's possible to enable the Gemini for Google Cloud API in more than one
Google Cloud project. If users with Cloud Billing account access
have Gemini permissions granted on more than one project where
the Gemini for Google Cloud API is enabled, you need to remove their
IAM project permissions for Gemini access on
each project.
To turn off all Gemini for Google Cloud
products including Gemini Cloud Assist in Cloud Billing,
see Turn off the Gemini for Google Cloud API .
Turn off the Gemini for Google Cloud API
To turn off the Gemini for Google Cloud API, use the
Disabling services instructions
for the following services:
The Gemini for Google Cloud API ( cloudaicompanion.googleapis.com ).
If enabled, the Gemini Cloud Assist API
( geminicloudassist.googleapis.com )
In some cases, such as projects which enabled Gemini Cloud Assist
prior to April 2025, this API might already be disabled.
Caution: If you turn off the Gemini for Google Cloud API, then you disable all
Gemini for Google Cloud features for all Google Cloud
users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
