---
title: "Clone integrations \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/clone-integrations
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/clone-integrations
  title: "Clone integrations \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Clone integrations
Cloning an integration creates a full copy of its original integration version. You can use cloning to create a new integration version within the same integration, or to create a completely new independent integration that is a full copy of the original integration version.
Clone within the same integration
To clone of an integration version within the same integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Select the existing integration that you want to clone.
Click the Versions dropdown and select the version you want to clone.
In the designer toolbar, click
more_vert
(Actions menu) and select Clone integration .
Select Create new version .
The Create new version pane appears.
(Optional) Enter a name for the new clone version.
Click OK .
A new clone of the integration version is created in the same integration.
Clone as a new integration
To create a new independent integration that is a full copy of the original integration version, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Select an existing integration that you want to clone.
Click the Versions dropdown and select the version you want to clone.
In the designer toolbar, click
more_vert
(Actions menu) and select Clone integration .
Select Create new integration from current version .
The Create new integration pane appears.
Enter a name and a description for the clone integration.
Select a Region for the clone integration from the list of supported regions .
Click Create .
A new cloned integration is created in the selected region.
Considerations
Cloning an integration doesn't clone the authentication profiles associated with that integration. You must manually create a copy of the associated authentication profiles in the same region as the cloned integration. For information about creating authentication profiles, see Create authentication profiles in Application Integration
You can't have two integrations with the same name in the same region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
