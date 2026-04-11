---
title: "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email
  title: "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\
    \ \_|\_ Google Cloud Documentation"
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
Listen to Cloud Pub/Sub topic and send an email
Learn how to create a sample integration using Application Integration and the Cloud Pub/Sub trigger .
The following steps describe how to configure the trigger, tasks, variables, and data mappings required
to run a complete integration.
Overview
In this quickstart, you will create an integration with a Cloud Pub/Sub trigger to listen to an existing Pub/Sub topic that receives temperature readings in degrees Kelvin from a IOT device. You can then use the Data Mapping task to transform the Pub/Sub message to celsius and send the value in an email.
Before you begin
Assign the following Identity and Access Management (IAM) roles to the Application Integration Service Agent ( service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) in your Google Cloud project:
Pub/Sub Editor
Application Integration Invoker
For more information about assigning IAM roles, see
IAM roles and permissions .
Set up environment
Create a new Cloud Pub/Sub topic
This quickstart assumes that you have a Pub/Sub topic that
receives temperature readings in degrees Kelvin from a IOT device. It is not necessary to actually have
the topic connected to a device. This quickstart tests the integration's ability to listen to the topic and perform
tasks when triggered.
To create a sample topic for the purposes of this quickstart:
Go to the Pub/Sub topics page in the Cloud console .
Go to the Pub/Sub topics page
Click Create a topic .
In the Topic ID field, provide a unique topic name. For example, temperaturesensor
Click Save .
Note: You don't have to create a subscription for the trigger to work.
Application Integration automatically creates a subscription for a topic when you publish your integration, and you can view all your
subscriptions in the Pub/Sub subscription page .
Starting with the Application Integration
December 01 2023 release , you will be
billed for your subscriptions as per the Pub/Sub billing rates . Subscriptions
for your existing Cloud Pub/Sub trigger will continue to work as before, and they aren't billed. However, if you
update the topic of an existing Cloud Pub/Sub trigger, Pub/Sub billing will be applied to the updated Cloud Pub/Sub trigger.
Create a new integration
To create a new integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Click Create integration .
Enter a name and description in the Create Integration dialog. For example,
my-test-integration .
Note: Integration names must meet the following requirements:
Names must start and end with letters or numbers.
Names cannot contain spaces or more than one dash or underscore in a row.
Select a region for the integration. Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
Click Create to open the integration editor.
Add a Cloud Pub/Sub trigger
To add a Cloud Pub/Sub trigger to the integration, follow the steps below:
In the integration editor, select Triggers to display a list of available triggers.
Click and place the Cloud Pub/Sub trigger element to the designer.
Configure a Cloud Pub/Sub trigger
Click the Cloud Pub/Sub trigger element in the integration editor to view the trigger configuration
pane.
Specify the topic the trigger should listen to in the Pub/Sub topic field in the following format:
projects/ PROJECT_ID /topics/ TOPIC_ID
where:
PROJECT_ID is the Google Cloud project where your topic is created.
TOPIC_ID is the ID of the Cloud Pub/Sub topic you created in Before you begin .
For example, if your project is named my-project and you named your topic temperaturesensor , enter:
projects/ my-project /topics/ temperaturesensor .
To view all the available topics in your Google Cloud project, see the Topic name column in
Topics .
The Cloud Pub/Sub trigger configuration pane will automatically populate the Trigger Output field with a variable to hold
the Pub/Sub message.
Add and configure the Data Mapping task
To configure the Data Mapping task:
Select Tasks to display a list of available tasks.
Click and place the Data Mapping element in the integration editor.
Click on the Data Mapping task on the designer to open the configuration pane for
the task.
Click Open Data Mapping Editor .
The Data Mapping Editor lets you map input variables to the desired output variables,
using the available transform functions. The output is then
available as a variable to any other integration task or trigger. For more details on
passing data as variables, see
Using variables in Application Integration .
For this quickstart, follow these steps to create a mapping using the CloudPubSubMessage as
input:
Expand the CloudPubSubMessage JSON variable in the Variables list and drag the CloudPubSubMessage. data variable
to the first Input row.
Click + (Add a function) next to the CloudPubSubMessage. data variable to view the drop-down list of available
functions.
Select TO_DOUBLE() to convert the CloudPubSubMessage. data value
to a data type of double .
Click + (Add a function) again to select and chain the SUBTRACT function.
Enter 273.15 as the SUBTRACT function value. This is to convert the Kelvin
temperature to degrees Celsius.
Click the first row in the Output column to create a new output variable to hold the value of the transformed
data. Complete the following fields:
Name: Enter TempInCelsius .
Check Use as an output of integration .
Click Create to create the variable and close the pane. The new TempInCelsius variable will appear in the
Variables list.
Drag the TempInCelsius variable from the Variables list to the second
row in the Input column.
Click + (Add a function) in the TempInCelsius variable to view the drop-down list of available
functions.
Click TO_STRING() to transform the data type of the variable from double to
string .
Click the second row in the Output column to create a new variable to hold the value of the transformed
data. Complete the following fields:
Name: Enter TempInCelsiusString .
Blank default value means: Select Empty String .
Select the Use as an output of integration checkbox.
Click Create to create the variable and close the pane. The new variable will appear in the
Variables list on the left side of the data mapping editor.
Close the Data Mapping Editor once your mapping is complete. Any changes will be autosaved.
Add and configure the Send Email task
To configure the Send Email task:
Select Tasks in the integration editor to display the list of available tasks.
Click and place the Send Email element in the integration editor.
Click the Send Email element on the designer to open the configuration pane
of the task. Set the following properties:
To Recipient(s): Enter your email address. You will use this email to confirm
the successful completion of the integration.
Subject: Enter Temperature in Celsius .
Body in Plain Text: Select the TempInCelsiusString variable created earlier
in the Data Mapping task.
The remaining options can be left in the default configuration.
Your changes to the properties are saved automatically.
Add the required edge connections
An edge is a connection between any two elements in an integration. The connection denotes the direction of the control flow from one element(task or trigger) to another. For more information on edges, see Edges .
Add an edge connection from the Cloud Pub/Sub trigger element to the
Data Mapping element by hovering over a control point on the Cloud Pub/Sub trigger element, then
clicking and dragging a line to a control point on the Data Mapping task element. This edge denotes the flow
of control from the Cloud Pub/Sub trigger task to the Data Mapping task.
Add an edge connection from the Data Mapping element to the
Send Email element by hovering over a control point on the Data Mapping element, then
clicking and dragging a line to a control point on the Send Email task element. This edge denotes the flow of control from the Data Mapping
task to the Send Email task.
The completed connection should appear as shown in the figure below:
Publish the integration
To publish the integration, click Publish in the integration editor toolbar.
Upon successfully publishing your integration, you can view and inspect the execution logs of the published integration. To view logs, click View execution logs for this integration . The Execution Logs page appears.
Test the integration using Cloud Pub/Sub
To test the new integration from the Pub/Sub topics page, do the following steps:
Go to the Pub/Sub topics page in the Cloud console .
Go to the Pub/Sub topics page
Search for and then select the temperaturesensor topic that you created.
From the topic details page, click + Publish Message to open the Publish Message configuration pane.
In the Message body field, enter 307.15 .
Creating this message simulates the publication of a temperature reading
in Kelvin received by Pub/Sub from an IOT device.
Click Publish to publish the message to the topic and trigger your integration.
Upon successful completion, the integration sends an email with the Kelvin temperature converted to degrees Celsius to the email address
specified in the Send Email task. Confirm receipt of the email in your email client.
The email sent by the integration should have a message body containing the value 34 .
In addition to verifying the contents of the email, you can inspect the logs to view the status
and payload of a given integration. To view logs:
In the integration editor, click View execution logs for this integration . The Execution Logs page appears.
For more information about execution logs, see View integration execution logs .
On the Execution Logs page, you can view details about each attempt to run an integration.
Each entry includes details for the execution attempt, including:
Integration name
Execution ID
Status
Start time
Duration
Integration Version
Trigger ID
Click the expander arrow ( > ) next to the executed integration to view an expanded list of
tasks and variables in the integration, along with task status and variable payloads.
Quotas and limits
For information about quotas and limits, see Quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
