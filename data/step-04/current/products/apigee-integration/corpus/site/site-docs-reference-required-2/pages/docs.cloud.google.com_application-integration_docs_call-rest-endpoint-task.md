---
title: "Call REST Endpoint task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/vpc-service-controls
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task
  title: "Call REST Endpoint task \_|\_ Application Integration \_|\_ Google Cloud\
    \ Documentation"
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
Call REST Endpoint task
The Call REST Endpoint task lets you call any third-party REST
API from your integration. The response from the REST API call will be available to
you in an integration variable and can be used in other down-stream tasks.
Note:
The network configuration of the Call REST Endpoint task allows it to call
endpoints only available over the public internet. Hence, the task can't connect to hosts
or IPs that reside only within a private network such as a VPC, even if that
VPC is peered with your other Google Cloud services such as Apigee X.
This task can process a maximum of 50 MB of REST response.
Before you begin
To connect to an authentication endpoint for the REST API call, ensure that you have either created
an OAuth 2.0 profile or attached a user-managed service account to your integration. If your API does not require authentication, then the Authentication profile field in the task configuration pane can be left empty. To see a list of configurations, see Configuration properties .
If your integration has both OAuth 2.0 profile and a user-managed service account configured, then by default the OAuth 2.0 profile is used for authentication. If neither OAuth 2.0 profile nor user-managed service account is configured, then the execution fails.
If your integration has a service account attached, then based on the REST endpoint URL, grant the required IAM role to that service account. For example, if your REST endpoint URL calls a Cloud Storage service, then grant the required IAM role for the Cloud Storage service.
For information about granting roles to a service account, see Manage access to service accounts .
Ensure that VPC Service Controls is NOT setup for Application Integration in your Google Cloud project.
Warning: Cloud Function does not function or stops functioning if VPC Service Controls is setup for Application Integration in your Google Cloud project.
Configure the Call REST Endpoint task
To configure the Call REST Endpoint task:
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
Click and place the Call REST Endpoint element in the integration editor.
Click the Call REST Endpoint element on the designer to view the Call REST Endpoint task
configuration pane.
Configure the displayed fields using the configuration properties of the task as detailed in the table below.
Changes to the properties are saved automatically.
Note: If you update the authentication profile for a Call REST Endpoint task,
and test the integration without publishing the changes, the integration uses the old
authentication profile. To ensure that the integration uses the updated authentication profile, you must
publish the integration before testing.
Configuration properties
The following table describes the configuration properties of the Call REST Endpoint task.
Property
Data type
Description
Label
String
Optional: add a label for your task.
Authentication
String
Optional: configures and stores the authentication details for connections to external
systems. For more information, see Create authentication profiles in Application Integration .
Endpoint base URL
String
REST endpoint URL without the query parameters.
HTTP method
NA
HTTP method to use.
You can select any of the following HTTP methods:
DELETE
GET
HEAD
PATCH
POST
PUT
URL query string parameters
Query string key : String
Value: String
Query parameters required for the REST API call.
The query parameters are in the form of key-value pairs where key is the key name
and the value is the corresponding key value. You can enter more than one key-value
pair by clicking on the plus icon.
HTTP headers
HTTP header key: String
Value: String
HTTP headers required for the REST API call.
The HTTP headers are in the form of key-value pairs where key is the key name and the
value is the corresponding key value. You can enter more than one key-value pair
by clicking on the plus icon.
Follow redirects
Boolean
Follow URL redirects.
You can select any one of the values:
True : Calls the redirected URL if the Endpoint base URL
is forwarded to another URL.
False : Does not call the redirected URL if the Endpoint base URL
is forwarded to another URL.
Task should fail on HTTP error
Boolean
Exception handling strategy when the REST API call fails.
The Call REST Endpoint fails if the HTTP response code is 4xx or 5xx . For a list of error codes, see Error codes . For other HTTP response codes, return error code and error message in the response.
Note: For errors that are not related to REST API call, such as incorrect URL, the task always fail irrespective of what this option is set to.
You can select any one of the values:
True : Throws an exception.
False : Does not throw an exception. But returns the
error code and the error message in the response.
Response header (<Task name>)
String
Uncompressed response header from the REST APIs response.
Response body (<Task name>)
String
Uncompressed response body from the REST APIs response.
Response status (<Task name>)
String
HTTP response code and the corresponding code text from the REST APIs response.
Best practices
For information about the usage limits that apply to the Call REST Endpoint task, see Usage limits .
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
To learn how to handle retry strategies for 4xx or 5xx errors, see the How to retry Rest Caller Task based on Response Status blog.
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
