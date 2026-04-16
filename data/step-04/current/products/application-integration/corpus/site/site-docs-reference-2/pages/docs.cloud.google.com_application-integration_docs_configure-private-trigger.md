---
title: "Private triggers \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-private-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-private-trigger
  title: "Private triggers \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Private triggers
Private triggers enable you to break large flows into various subflows. You can invoke private triggers only from other integration flows within Application Integration. Being invokable only from other integrations increases security and reduces the risk. You can view the execution logs for a private task in the execution logs of the invoker integration.
The following list states the benefits of using private triggers:
Minimize cost: Private triggers are not counted towards execution run pricing.
Increases security: Restrict flows to be invoked only from other integrations as private triggers cannot be triggered independently from public APIs.
Improve performance: Private triggers reduces the latency between sub-integration callout.
Add a Private trigger
To add a private trigger, perform the following steps:
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
Click and place the Private element to the designer.
Configure a Private trigger
Click the Private Trigger element in the integration editor to view the trigger configuration pane.
The configuration panel displays the Trigger ID , which is a
machine-generated ID in the format private_trigger/ TRIGGER_NAME .
No further configuration is required for this trigger.
Test Private trigger
You cannot test a published private trigger workflow. You must unpublish the integration to test the private trigger workflow.
Invoke Private trigger from another integration
After you have published an integration that has a private trigger configured, you can invoke this trigger from another integration. You can have more than one private trigger in your integration. Each private trigger is assigned a unique Trigger ID .
You can view the execution logs for a private trigger in the logs of the main execution workflow.
Private triggers can be invoked from the following flow control tasks:
Call Integration
For Each Loop
For Each Parallel
While Loop
Quotas and limits
The execution of private triggers shares the Maximum cumulative size of all the integration data limit, which is set to 30 MB, with the parent integration. For more information about limits, see Usage limits .
Limitation
If your private trigger workflow contains any of the following async tasks, then you can't trigger the private workflow from the main workflow with the SYNC execution strategy:
Timer task
Suspend task
Approval task
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
