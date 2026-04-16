---
title: "Application Integration release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/release-notes
  title: "Application Integration release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Resources
Send feedback
Application Integration release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Application Integration.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 02, 2026
Feature
FIFO message processing with Pub/Sub ordering keys
Application Integration now supports publishing messages to Google Cloud Pub/Sub topics using ordering keys, enabling First-In, First-Out (FIFO) message processing. By setting an ordering key in the Pub/Sub trigger's Publish Message action, you can ensure messages are received in the correct order, enhancing reliability for integrations requiring ordered message processing. For more information on how to use ordering keys to publish messages, see Using ordering keys .
October 31, 2025
Feature
Troubleshoot failed execution logs using AI
You can now use AI-powered troubleshooting with Google Gemini to analyze failed execution logs, identify root causes, and receive precise, actionable steps to resolve errors. To use this feature, you must enable AI capabilities in your Google Cloud region. For more information, see Troubleshoot failed execution logs using AI .
October 10, 2025
Feature
Manage Application Integration resources using custom constraints
You can now use custom constraints with Organization Policy to provide more granular control over specific fields for some Application Integration resources. For more information, see Manage Application Integration resources using custom constraints . This feature is now available in Preview .
September 16, 2025
Change
Salesforce connected app requires installation for OAuth 2.0 authentication
A new security requirement from Salesforce restricts the use of uninstalled connected apps. To ensure your Salesforce triggers remain functional, you must install the connected app in your Salesforce account.
When establishing a new Salesforce trigger using OAuth 2.0 authentication, you are now required to install the connected app within your Salesforce account. This step is also necessary for existing triggers using OAuth 2.0 authentication if the connected app is not already installed, as failure to do so may cause them to stop working.
For more information, see Install the OAuth 2.0 connected app .
August 18, 2025
Change
Standard canvas view
The integration editor now features a single, standard canvas view . The legacy canvas is no longer available.
May 05, 2025
Change
Cloud Function Task adds support for Cloud Functions v2 API
The Cloud Function task in Application Integration now lets you create, link, and run the latest generation of serverless functions, called Cloud Run functions, using the Cloud Functions v2 API.
For more information, see Cloud Function Task .
Change
Control HTTP call access by region in Application Integration
Application Integration now offers a new control within the Regions page to enable or disable HTTP calls for integrations on a per-region basis.
For more information, see Manage regions .
April 21, 2025
Change
New Canvas View is enabled by default in the Integration Editor
The new Canvas View is now enabled by default in the integration editor. This change is a default setting and no manual enablement is required. You can switch to the old canvas view by disabling the New canvas view toggle.
For more information, see Use the new canvas view .
April 02, 2025
Feature
Build Conversational Agents with Dialogflow CX ( Preview )
Application Integration now simplifies the creation of conversational experiences with direct integration with Conversational Agents (Dialogflow CX). Using API triggers, you can now build intelligent chatbots and automated tools directly within your integration workflows, enhancing user interactions and automating tasks.
For more information, see Build conversational agents with Application Integration .
Change
Enhancements to Replay Execution
Application Integration Replay Execution now provides the following enhancements:
Modify input parameters on replay: You can now modify the input parameters of an integration execution when initiating a replay. This provides greater flexibility in fixing failed executions.
Continue execution from point of failure: When replaying an integration, you can now choose to continue the execution from the point of the last failure. This will retry the failed task and, upon success, continue the execution from that point, saving time and effort.
For more information, see Introduction to replay executions .
February 19, 2025
Change
Enhancements to Execution Logs
Application Integration Execution Logs now provides the following enhancements:
View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.
Download execution logs in JSON format: You can now download integration execution logs as structured JSON files, facilitating easier log analysis.
View sub-integration execution logs: The Execution Logs page now displays all sub-integration execution logs within the same stack trace as the main integration, simplifying troubleshooting of complex integration flows.
For more information, see View execution logs .
January 23, 2025
Deprecated
Deprecation of Rhino engine for JavaScript Task
Effective January 24, 2025, Application Integration will no longer support Rhino as the JavaScript execution engine. All existing published JavaScript tasks will continue to use Rhino and can be migrated to V8 manually . Newly created JavaScript tasks will exclusively use V8.
For more information, see JavaScript execution engine . This deprecation is related with CVE-2025-0982 .
Change
You will not be able to use the Send email task in your integrations if you have enabled VPC service perimeter for the Application Integration service.
January 13, 2025
Change
Config variables pane ( Preview )
You can now view and edit all the config variables defined within your integration using the new Config Variables pane. For more information, See View and edit config variables .
December 20, 2024
Change
Dynamic Backend Authentication support for Connectors
Application Integration now supports dynamic backend authentication for connectors. Enable Authentication Override in Integration Connectors to allow your connections to seamlessly switch between authentication methods during runtime.
For more information, see Configure authentication override .
December 19, 2024
Feature
You can now build and publish custom connectors for Google Cloud Marketplace . This feature is in preview .
The following connectors built by partners are available in the Google Cloud Marketplace. You can use these connectors to create connections and use them in Application Integration.
Exact HR
Openlegacy IBMi/AS/400 API
Salesforce Commerce Cloud B2B
December 13, 2024
Feature
Integration templates ( Preview )
Save time and effort building integrations with integration templates. These pre-defined blueprints provide a starting point for common integration flows, allowing you to quickly create and customize integrations without starting from scratch.
For more information, see Templates .
Feature
Generate and view OpenAPI Specification ( Preview )
You can now generate and view the OpenAPI Specification for any published integration that uses API triggers. This allows for greater understanding and analysis of your integration's API interactions.
For more information, see View OpenAPI Specification for your integration .
Change
API trigger input and output variables
You can now set request and response payloads for an API trigger using trigger specific input and output variables. For more information, see API trigger .
November 18, 2024
Feature
JavaScript task using Gemini
If your integration flow requires any complex data mapping logic, Gemini can now recommend a JavaScript task. For more information, see Create an integration using Gemini .
You can add a JavaScript task, edit an existing task, or use Gemini to help understand the JavaScript code. For more information, see Configure JavaScript tasks .
October 28, 2024
Feature
Add failure policy ( Generally available (GA) )
You can now configure more complicated retry strategies for tasks , such as retries based on the error codes or the variable values during the execution:
Configure multiple ordered conditional failure policies for each task.
Configure a default failure policy that will be applied if no conditional failure policies matches.
Use system auto-generated variables in the failure policies. For example, ExecutionMode and ErrorInfo .
For more information, see Example for error handling .
October 08, 2024
Feature
Build integrations with Gemini Code Assist (GA)
Building integrations with Gemini Code Assist is now generally available (GA) .
Additionally, if you have API Hub enabled in your project, then Gemini can assist you to provide contextually appropriate Call REST Endpoint tasks and task configuration recommendations based on the logical flow of your existing integration. For more information see, Configure Call REST API tasks .
October 06, 2024
Feature
Diagram mode in the Data Transformer Task ( Preview )
The Diagram mode provides a console-based experience to select the input and output variables and perform transformations in the data transformation editor. For more information, see the Data Transformer task .
Feature
Replay execution ( Preview )
You can now rerun a failed integration with the same parameters as the previous execution. For more information, see Replay executions .
Cancel execution ( Preview )
If you have executions that are suspended due to an approval task or a technical issue, you can now choose to cancel those executions. For more information, see Cancel executions .
Feature
Test cases ( Preview )
You can now test if your integration is working as intended by creating and running test cases on your complex integrations.
For information about test case, see Introduction to test cases . Learn how to do the following:
Create test cases
Configure test cases
Manage test cases
Run test cases
Upload and download test cases
Feature
Local logging in async mode ( Generally available (GA) )
By default, local logging for new integrations is now enabled in async mode. With this change, the log data is persisted (written) at fixed intervals or after the completion of the integration's execution, whichever is earlier. You can change the default settings by editing the integration details .
For more information, see Local logging .
September 25, 2024
Feature
View logs in Cloud Logging
Viewing integration execution logs in Cloud Logging is now generally available (GA) . For more information, see View logs in Cloud Logging
September 24, 2024
Feature
The Resolve JSON Path data transformer function is now available. This function resolves a JSON path on a given JSON object by using the JSONPath reference.
September 12, 2024
Feature
The XSLT Transform data transformer function is now available. This function transforms the specified XML string using the specified XSL string.
August 22, 2024
Feature
New canvas view
In the integration editor layout, you can try the new canvas view to create integration flows. This feature is in preview . The canvas view offers the following benefits:
Improved responsiveness of the canvas interaction
Clearer view of your integration
Minimap view
Easier to build integrations
August 18, 2024
Feature
In the Application Integration editor, you can now search, browse, and select tasks and connectors in the Tasks list. For more information, see Add a Connectors task .
July 22, 2024
Feature
The Solace trigger is now available in preview .
July 15, 2024
Feature
You can now share custom connectors between different Google Cloud projects by exporting and importing the connector specification . This feature is in preview .
July 11, 2024
Feature
The following Connector Event triggers are generally available :
SAP ERP trigger
SAP Gateway trigger
May 26, 2024
Feature
The TIBCO EMS trigger is now available in preview .
May 21, 2024
Announcement
Application Integration is now available in Milan ( europe-west8 ). For a list of supported regions, see Application Integration locations .
May 20, 2024
Feature
Terraform support
You can now use Terraform to provision new regions and create authentication profiles . For a detailed reference document about terraform resources, see google_integrations_client and google_integrations_auth_config .
May 03, 2024
Issue
Loop Metadata variables are changing
In the For each loop and While loop tasks, there's a Loop metadata variable in which you will find duplicate keys for the output variable–for example, Current Iteration Count and current_iteration_count . We recommend you to use the variables that contain the underscore ( _ ) symbol because the other keys are being deprecated.
For more information, see Known issue: Duplicate keys in the Loop metadata .
April 29, 2024
Feature
With Gemini, you can now build integrations in Application Integration :
Create and build integrations
Configure connector tasks in an integration
Add edge conditions and append additional tasks to an integration
Generate integration description
This feature is in preview .
April 28, 2024
Feature
While configuring a Cloud Pub/Sub trigger , you can now add a config variable for your service account. Config variables let you externalize configuration for integrations.
April 24, 2024
Change
For Cloud Pub/Sub triggers , the default value of the expiration period option for subscriptions is changed from 31 days to never expire . If you want to change the value of the expiration period, then you must update the Cloud Pub/Sub subscription in the Google Cloud console.
April 21, 2024
Feature
Apache Kafka trigger is now in preview .
March 06, 2024
Feature
Application Integration now supports config variables . Config variables let you to build CICD for your integration . This feature is in preview .
February 23, 2024
Feature
Application Integration now supports private triggers that enable you to break large flows into various subflows. This feature is in preview .
February 19, 2024
Feature
Data masking in logs
You can now prevent sensitive data from appearing the integration execution logs. For more information, see Mask sensitive data in logs .
February 12, 2024
Feature
You can now also view the integration execution logs in Cloud Logging. For more information, see View logs in Cloud Logging .
January 24, 2024
Feature
Custom connectors [Preview]
Application Integration now supports custom connectors. The custom connectors feature (based on the Open API specification) lets you create your own connectors that aren't a part of the standard connectors provided by Integration Connectors. You can use these connectors in your integrations. For more information, see Custom connectors .
January 23, 2024
Feature
The following new data transformer functions are available:
getIntegrationVersionId () : Get the integration version ID of the current integration.
getIntegrationVersionNumber() : Get the version number of the current integration.
January 16, 2024
Feature
Webhook triggers are now supported in preview . With webhook triggers, you can build integrations for your data sources that don't have specific triggers but support webhook for event listening.
December 13, 2023
Announcement
Application Integration is now available in the following regions:
asia-east2 (Taiwan)
asia-northeast2 (Osaka)
asia-northeast3 (Seoul)
asia-south2 (Delhi)
asia-southeast2 (Jakarta)
europe-central2 (Warsaw)
europe-west10 (Berlin)
europe-west12 (Turin)
northamerica-northeast2 (Toronto)
southamerica-west1 (Santiago)
us-east5 (Columbus)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
us-south1 (Dallas)
For the list of all the supported regions, see Locations .
December 01, 2023
Feature
Cloud Pub/Sub trigger supports cross-project topics
You can now configure your Cloud Pub/Sub trigger for a Pub/Sub topic that isn't in the same Google Cloud project as your integration. The Pub/Sub topic can be in any Google Cloud project.
Starting with this release, you must specify a service account when configuring the Cloud Pub/Sub trigger. Your existing Cloud Pub/Sub triggers, that don't have any service account associated with them, will continue to work as before. However, if you want to modify the Pub/Sub topic in any of the existing Cloud Pub/Sub triggers, you must also configure a service account for those triggers to continue using them.
November 29, 2023
Change
The Database persistence feature is now renamed to Local logging , which also supports logging in ASYNC mode. For more information, see Local logging .
Announcement
Application Integration is now available in the Dammam ( me-central2 ) region.
For the list of all the supported regions, see Locations .
November 23, 2023
Feature
HubSpot trigger is now available in preview .
November 21, 2023
Feature
The following Connector Event triggers are available in preview :
IBM MQ trigger
Rabbit MQ trigger
October 19, 2023
Announcement
The maximum memory available for script evaluation in the Data Transformer Script task is 300 MB. For the list of all the applicable limits, see Quotas and Limits .
October 10, 2023
Feature
The following new data transformer functions are available:
Manifest XML - Converts the specified input JSON object into an XML string.
Parse XML - Parses the specified input XML string into a JSON object.
Feature
IAM Conditions for fine-grained access
IAM Conditions lets you define and enforce conditional, attribute-based access control for Google Cloud resources, including Application Integration resources. For more information, see Add IAM conditions .
Feature
You can now view the detailed summary of an integration from the Integration designer. For more information, see View integration details .
Change
Support for user-defined service account
You can now configure a service account of your choice for an integration. The option to select a service account is displayed to you during the integration creation step.
September 22, 2023
Feature
Vertex AI - Predict task
Starting with this release, Application Integration provides the Vertex AI - Predict task that lets you perform online predictions on your ML models.
September 06, 2023
Feature
Application Integration Quick setup ( GA )
Application Integration Quick setup is now generally available in all the supported Google Cloud locations .
Quick setup is a single-click operation that automatically provisions Application Integration with the default configurations needed to get you started with the product.
For more information, see Set up Application Integration .
July 20, 2023
Feature
Connector Event triggers ( Preview )
Application Integration introduces Connector Event triggers ; specialized triggers that let you invoke an integration based on the event subscriptions created in various business applications using Integration Connectors .
The following Connector Event triggers are available in preview :
Jira Cloud trigger
ServiceNow trigger
Zendesk trigger
For more information, see Connector Event triggers .
Issue
Known issues
Integration fails to publish when duplicate Connector Event triggers are configured
Event subscription error when an integration containing Connector Event triggers is uploaded
For more information, see Application Integration known issues .
July 05, 2023
Fixed
The issue relating to Application Integration setup failure in a new Google Cloud project has been resolved.
June 26, 2023
Feature
Data Transformer Script task ( Preview )
The Data Transformer Script task is a template engine based data mapping feature available in Application Integration. With the Data Transformer Script task and the supported Data Transformer functions , you can create and evaluate custom Jsonnet templates in order to perform data mapping in your integration.
For more information, see Data Transformer Script task .
June 13, 2023
Announcement
Application Integration is now generally available (GA)
Application Integration is now generally available in all the supported Google Cloud locations .
Preview features such as Cloud Scheduler trigger , Error catcher trigger , JavaScript task , Return task , and Google-managed encryption keys are now moved to GA.
Important: The billing cycle for Application Integration will start from July 1, 2023 .
Change
Integration designer changes
Several styling and user experience enhancements have been made to the integration designer layout and user interface. The new enhancements include a new variable pane that lets you create and manage all your integration variables in one place, a revamped designer toolbar and navigation bar design, and a refreshed Integration designer canvas .
For more information, see Integration designer .
Feature
The following new features are added in this GA release:
Cloud Monitoring
Application Integration is integrated with Cloud Monitoring to provide visibility into the usage, performance, alerts, and the overall health of your integration resources.
For more information, see Monitor Application Integration resources .
Inline connection creation
You can now use the Connectors task in Application Integration to directly create a new connection in the Integration Connectors platform.
For more information, see Connectors task .
Issue
Known issues
Application Integration fails to set up in a new Google Cloud project
Integration designer screen compatibility issue
For more information, see Application Integration known issues .
Libraries
Application Integration v2 REST API is available in preview .
For more information, see REST API reference (v2) .
May 23, 2023
Feature
New tasks for Google Cloud services
The following new integration tasks are available in preview :
AI Platform - Prediction
Cloud KMS - encrypt
Cloud KMS - decrypt
Dataflow - Create Job
Drive - List
Doc AI - Batch Process
Doc AI - Process
Doc AI - Operation
Firestore - Batch Get
Firestore - Batch Write
Firestore - Document Get
Language - Annotate Text
Language - Classify Text
Sheets - Append
Sheets - Batch Get
Sheets - Get
Translate - Document
Translate - Text
Workflows - Execute
May 22, 2023
Feature
Support for Google-managed encryption keys
Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions. You can optionally modify your encryption method with customer-managed encryption keys (CMEK).
For more information, see Encryption methods .
Feature
Return task
The Return task lets you customize the error messages corresponding to the HTTP response codes that are returned during an integration execution failure.
For more information, see Return task .
Feature
Error catcher trigger
The Error Catcher trigger lets you invoke an error catcher that is defined or customized to handle the failure of an identified trigger, task, or edge condition in your integration.
For more information, see Error catcher trigger .
May 09, 2023
Feature
Cloud logs support for Connectors tasks
You can now view the execution logs of a failed Connectors task in Application Integration.
For more information, see Execution Logs .
Fixed
The issue relating to the validation of incorrect variable assignments in an integration has been resolved.
May 01, 2023
Feature
Application Integration is now available in the following locations:
Melbourne ( australia-southeast2 )
Finland ( europe-north1 )
Paris ( europe-west9 )
Madrid ( europe-southwest1 )
Doha ( me-central1 )
Tel Aviv ( me-west1 )
For more information about the supported locations, see Application Integration locations .
April 20, 2023
Issue
Application Integration fails to validate incorrect variable assignments in an integration. For example, you can currently assign a JSON value to an unassigned variable of String data type. This behaviour might cause data mapping and integration failures.
Until this issue is resolved, we recommend that you do the following:
Assign values to an integration variable as per the variable data type.
Verify and update existing integration variable values as per its respective variable data type.
April 03, 2023
Feature
Secret Manager - Access task
The Secret Manager - Access task lets you access secret versions that are stored in Cloud Secret Manager from your integration.
For more information, see Secret Manager - Access task .
Note: Rollouts of this feature will begin on April 3, 2023, and may take four or more business days to be completed across all Google Cloud zones. You may not be able to provision Application Integration until the rollout is complete.
February 09, 2023
Change
Data Mapping Editor improvements
Transform expression changes:
You can now add, modify, or remove a function or a function parameter in-between an existing transform expression without losing the subsequent transform functions in the expression.
When applying a pre-defined transform function to a variable in the Data Mapping Editor , the function selection menu now displays the list of functions as per the return type of the preceding function or the data type of the preceding parameter.
Data Mapping Editor UI changes:
Input rows are updated to display indent guides to improve readability and structure recognition.
Mapping validation errors are now highlighted for each function in an Input row.
For more information, see Data Mapping editor .
February 06, 2023
Feature
JavaScript task
The JavaScript task lets you write custom JavaScript code snippets for your integration.
Using the JavaScript Editor, you can code complex data mapping logic for your integration, perform variable assignments, and add or modify integration variables.
For more information, see JavaScript task .
Feature
Delete integration
You can now delete an entire integration without the need to individually delete all the respective integration versions.
When you delete an integration, you permanently delete all the versions of that integration, including all the integration variables, configured triggers, tasks, and data mappings.
For more information, see Delete integrations .
Change
New Overview page
A new Overview page is now introduced in Application Integration. It's the first place you land when opening Application Integration in your Google Cloud console, and helps you understand and get started with setting up Application Integration in your Google Cloud project.
Note: Rollouts of this release will begin on February 6, 2023, and may take four or more business days to be completed across all Google Cloud zones. You may not be able to provision Application Integration until the rollout is complete.
January 10, 2023
Feature
Cloud Scheduler trigger
The Cloud Scheduler trigger lets you schedule your integration executions for defined time periods or regular intervals across multiple regions. Cloud Scheduler triggers leverage the Cloud Scheduler services to provide a fully managed enterprise-grade cron job scheduler within Application Integration.
For more information, see Cloud Scheduler trigger .
December 26, 2022
Feature
Test without publishing an integration
You can now test your integration without the need to publish or create a new integration version. Testing an integration lets you experiment with the integration input variable values, and helps in identifying any faults in the integration connection flow before you finalize and publish the integration.
For more information, see Test and publish integrations .
September 28, 2022
Announcement
Application Integration Preview Release
Application Integration is now available in preview . Application Integration is an Integration-Platform-as-a-Service (iPaaS) solution in Google Cloud that offers a comprehensive set of core integration tools to connect and manage the multitude of applications and data required to support various business operations.
For more information about the Application Integration features and functionalities, see Application Integration documentation .
Note: Rollouts of this release will begin today and may take four or more business days to be completed across all Google Cloud zones. You may not be able to provision Application Integration until the rollout is complete.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
