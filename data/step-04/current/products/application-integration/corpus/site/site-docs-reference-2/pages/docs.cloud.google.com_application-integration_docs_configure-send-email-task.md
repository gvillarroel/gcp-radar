---
title: "Send Email task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-send-email-task
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-send-email-task
  title: "Send Email task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Send Email task
The Send Email task lets you send custom email notifications from your integration.
You can email one or more recipients with a custom subject and a custom message.
Configure the Send Email task
To configure the Send Email task:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create . The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Tasks to view the list of available tasks and connectors.
Click and place the Send Email task element in the integration editor.
Click the Send Email task element on the designer to open the Send Email task
configuration pane.
Configure the displayed fields using the Configuration properties for the task
as detailed in the tables below.
All changes to the properties are saved automatically.
Configuration properties
The following table describes the configuration properties of the Send Email task.
Property
Data type
Description
Recipients
String
Email address of the recipient(s). You can specify multiple email addresses separated by a comma. For example, test1@gmail.com,test2@gmail.com .
Alternatively, you can also create a variable of type String Array and add comma separated emails in the value.
Note: You can only add a maximum of 30 recipients to the task.
Subject
String
Email subject line.
Body
String
Email body in plaintext.
You can set the properties to any of the following values:
A literal
An integration variable
A combination of a literal and an integration variable
For the Subject and Body fields, you can enter combinations of literals and integration variables for the string values. Use dollar sign notation for variable names, that is, precede and follow the variable name with a $ sign.
For example, if you want to use a variable $varSubject$ in the email Subject , you will enter text similar to Test $varSubject$ where Test is a literal and $varSubject$ is the variable.
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
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
