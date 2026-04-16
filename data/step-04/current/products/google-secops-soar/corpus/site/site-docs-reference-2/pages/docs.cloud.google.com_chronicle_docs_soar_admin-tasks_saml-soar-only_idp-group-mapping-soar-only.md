---
title: "Map IdP groups to SOAR roles \_|\_ Google Security Operations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/saml-soar-only/idp-group-mapping-soar-only
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/release-notes
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/saml-soar-only/idp-group-mapping-soar-only
  title: "Map IdP groups to SOAR roles \_|\_ Google Security Operations \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Map IdP groups to SOAR roles
Supported in:
SOAR
Note: This document applies only to the standalone Google SecOps SOAR platform.
This document explains how to automatically create users in the Google Security Operations SOAR platform based on their Identity Provider (IdP) group assignments.
Note: This feature is only available when a single provider is defined.
Before you begin
Read through and complete the instructions in
Authenticate users using SSO .
Set up the IdP group mapping
The following procedure assumes you're setting up the IdP group mapping
in the Google SecOps SOAR-only platform:
Select the IdP group mapping option. This opens an advanced tab where you can configure parameters based on the fields in your SAML provider.
First Name Attribute : Name of the attribute that contains the
given name (for example, first name in Google Workspace).
Last Name Attribute : Name of the attribute that contains the
user's family name (for example, last name in Google Workspace).
Login ID Attribute : Name of the attribute that contains the
user's unique ID (for example, subject in Google Workspace).
Email Attribute : Name of the attribute that contains the user's
primary address (for example, primary email in Google Workspace).
Group Name Attribute : Name of the attribute that contains the
groups to which the user belongs within the organization (for example, groups in Google Workspace).
After you've defined the attributes, click add Add IDP Group .
Complete the IdP group mapping table. For each IdP group from your SAML provider, you must assign the following:
A SOAR SOC role
A permission group
An environment or environment group (you can assign both at the same time.
For more information about these fields, see
Control access to platform .
When you're finished mapping the IdP groups, click Save .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
