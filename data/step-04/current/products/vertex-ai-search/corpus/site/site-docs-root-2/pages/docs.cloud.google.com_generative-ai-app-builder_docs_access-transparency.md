---
title: "Enable Access Transparency in Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency
  title: "Enable Access Transparency in Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Enable Access Transparency in Vertex AI Search
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the support that Access Transparency
provides for Vertex AI Search.
Overview
Access Transparency provides you with logs that capture the actions that Google
personnel take when accessing your content.
Similar to the way audit logs show when members of your organization access
content in your Google Cloud projects, Access Transparency
logs show when Google
personnel take action.
Limitations of Access Transparency in Vertex AI Search
All access to your data in Vertex AI Search by Google personnel is
logged, except for the following:
Multi-region data stores: You must use multi-region data stores and apps
(not global ones).
For more information about multi-regions, including limits
associated with using non-global locations, see
Vertex AI Search locations .
Data associated with preview features: In the documentation, preview
features are marked with disclaimers. In the Google Cloud console,
preview features have preview labels.
Search analytics: Access Transparency logs do not record when Google
personnel view or take action on your analytics data. For general information
about analytics, including how to create a search app where analytics is
disabled, see View analytics .
Enable Access Transparency
To enable Access Transparency for a Google Cloud project, do the following:
Confirm that the project resides in an organization. Only projects in
organizations can use Access Transparency.
Follow the instructions in Enabling
Access Transparency .
What's next
Learn about the content of Access Transparency
logs .
Learn when you might want to use
Access Transparency .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
