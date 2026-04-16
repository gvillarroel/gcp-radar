---
title: "Admin settings - Actions \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/chart-config-editor
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-actions
  title: "Admin settings - Actions \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Actions
Stay organized with collections
Save and categorize content based on your preferences.
The Actions page in the Platform section of the Admin menu lets you enable services that are integrated with Looker. For information about building and testing actions to add to the Looker Action Hub or your own private action hub server, see the Sharing data through an action hub documentation page.
This page described how to enable an individual action in the Looker Action Hub.
Before you begin
Note: To use Looker integrations, the Looker Action Hub must be able to communicate with the Looker instance and fulfill these Looker Action Hub requirements . Admins of customer-hosted instances may need to consider additional factors when choosing to enable Looker integrations from the Looker Action Hub, especially integrations that support streamed results or that use OAuth .
To access the Actions page in the Platform section of the Admin menu, your user must have the Admin role .
Test the Looker Action Hub connection
Note: This option is available only for the Looker Action Hub. It is not available for custom action hubs .
To test your instance's connection to the Looker Action Hub, select Test Connection . A "Health check passed" message indicates a successful connection. If your instance can't connect to the Looker Action Hub, Looker displays a health check authentication error message.
Enable an action
Tip: To prompt Looker to check the Looker Action Hub server for new actions, select Refresh at the top of the actions list.
Each service that is integrated into Looker's Actions page has its own requirements. The list of integrations has a table of all the available services. See the How to use this integration column for links to articles about setting up and using each service.
First perform any setup steps required on the integrated service. Then enable the integration in Looker, specifying any required information for that service.
To enable an integration, perform the following steps:
On the Platform page of the Admin , select Actions .
Find the service that you want to enable, and select the Enable button to the right of the service.
Looker then displays the enablement page for the selected service.
If applicable, enter the required information to configure this action. You should be able to gather this information from your account with the service that you're enabling.
Turn on the Enabled switch. Looker automatically tests the action's configuration and displays an error if the action is configured incorrectly. Once you've made changes, select Test Again to retest the action's configuration.
Select Save to save the action's configuration and close the action enablement page. The action is now available as a destination in the Looker Scheduler .
List of integrated services
To view the list of integrated services, see the Actions overview documentation page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
