---
title: "Call Integration task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-call-integration-task
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-call-integration-task
  title: "Call Integration task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Call Integration task
The Call Integration task lets you invoke or call other integrations created within your Google Cloud project.
The Call Integration task is useful in scenarios where you need to define multiple small integrations (sub-integrations) that is controlled using a main integration (parent integration). After running a sub-integration, you can also
read the response of the sub-integration in your main integration.
Before you begin
The Call Integration task uses the API trigger to identify and call other integrations and sub-integrations. Therefore, you must ensure that the integrations you want to call are configured using the API trigger. For information about configuring an API trigger see API trigger .
Ensure that you have attached a user-managed service account to your integration. If your integration does not have user-managed service account configured, then by default the default service account ( service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used for authentication.
Ensure that your service account has the Application Integration Invoker IAM role. For information about granting roles to a service account, see Manage access to service accounts .
Configure the Call Integration task
To configure the Call Integration task:
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
Click and place the Call Integration element in the integration editor.
Click the Call Integration task element on the designer to view the Call Integration
task configuration pane.
Configure the following sub integration details:
API Trigger ID: Type the API trigger ID of the integration that you want to call. You can call a single integration or multiple integrations with the same trigger ID.
Run all integrations with this API Trigger ID: Select this option to call all the integrations
that have the same API Trigger ID .
For example, if integration
A and integration B , have the same API
Trigger ID , both the integrations A and B
are run.
Note : If you select this option, the response from the sub-integrations
will not be available in the main integration. If you want to access the response of the
sub-integrations, select the Run a single integration option.
Run a single integration : Select this option to call only the integration specified in the
Integration name field. You can access and map the response from the sub-integration
by configuring the fields detailed in Map sub-integration response variables .
Execution strategy: Select the execution modes for the sub-integrations that you want to call.
SYNC : Runs the sub-integration in synchronous mode. In this mode, the main integration
waits for the sub-integrations to complete before continuing with the downstream tasks.
ASYNC : Runs the sub-integration in asynchronous mode. In this mode, the main integration
does not wait for the sub-integrations to complete. Immediately after calling the sub
integrations, the main integration runs the downstream tasks.
If this option is selected, set the Execution delay (in milliseconds) . When set, this specifies the
time delay until the integration is run.
All changes to the properties are saved automatically.
Map sub-integration response variables
The following table describes the configuration properties to map variables between the main integration and sub-integrations:
Property
Description
Map to sub-integration input(s)
Maps values from the main integration to the sub-integration. This field takes
values in the form of key-value pairs, where the key is a variable in the main integration, and
the value is the corresponding input variable in the sub-integration.
For example, if you want to map the main integration's productID variable to the
subIntProductID sub-integration variable,
select productID from the Integration variable to map from
field and enter subIntProductID in the Subintegration input
to map to field.
Map values to sub-integration output(s)
Maps the sub-integration output variables to the main integration variables.
Click Subintegration output to map from and select the
sub-integration. Click Integration variable to map to and select the corresponding main integration variable.
Note: This field is only displayed when the Run a single integration option is selected with the SYNC execution strategy.
Best practices
For information about the usage limits that apply to the Call Integration task, see Usage limits .
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
