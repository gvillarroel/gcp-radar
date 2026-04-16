---
title: "Error catcher trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-error-catcher-trigger
  title: "Error catcher trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Error catcher trigger
The Error Catcher trigger lets you invoke an error catcher that is defined or customized to handle the failure of an identified trigger, task, or edge condition in your integration.
Add an Error Catcher trigger
To add an Error Catcher trigger in your integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations
The Integrations List page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create .
The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Triggers to view the list of available triggers.
Click and place the Error Catcher trigger element in the integration designer.
Configure the Error Catcher trigger
Click the Error Catcher trigger element in the integration designer to view the trigger configuration
pane.
The Configuration tab displays the Error catcher ID , which is auto-generated when you add the trigger in your integration designer. You can optionally edit the auto-generated ID if needed. No further configuration is required for this trigger.
Note: Error catcher IDs are unique to each Error Catcher trigger, therefore you can't have more than one Error Catcher trigger with the same Error catcher ID .
Create the error catcher logic
Once you have added the Error Catcher trigger in the integration designer, you can create your custom error catcher logic using the available tasks in Application Integration. Click and place the desired
integration tasks
elements in the integration designer and connect them with your Error Catcher trigger.
Attach the error catcher
Once you have created your custom error catcher logic, you can use it to handle the errors or execution failures at both, the task and event levels. To use or attach an error catcher in your main integration, perform the following steps:
Click the existing trigger or task in your main integration to open the trigger or task configuration
pane.
In the configuration pane, expand the Error handling section and go to Error catcher .
Click Select error catcher and select the Error Catcher trigger ID that you want to use.
A red indicator appears on the respective trigger or task element indicating that the element is attached to an error catcher.
Notes:
You can't attach multiple error catchers to the same task or trigger in your main integration.
Error catchers can't be nested. This means that you cannot invoke an Error catcher trigger using another Error catcher trigger in your integration.
You cannot establish an edge connection between the tasks configured inside an error catcher and the tasks or triggers used in your main integration flow.
The following image shows a sample integration flow that uses error catcher:
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about all tasks and triggers .
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
