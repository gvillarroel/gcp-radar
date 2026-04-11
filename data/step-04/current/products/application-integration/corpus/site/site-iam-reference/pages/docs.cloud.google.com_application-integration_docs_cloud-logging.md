---
title: "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/application-integration/docs/cloud-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/cloud-logging
  title: "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\
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
View logs in Cloud Logging
In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations. For more information about execution logs in Cloud Logging, see Integration execution logs in Cloud Logging . For information about limitations and pricing, see Limitations and Pricing .
By default, Cloud Logging is disabled for integrations. You can enable
logging for an integration by editing the unpublished version of the integration.
Before you begin
To store integration execution logs in Cloud Logging, you must first enable Cloud Logging for your integration. To do so, follow these steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations .
The Integrations page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or create a new integration for which you want to enable Cloud Logging.
This opens the integration in the integration editor .
Select the DRAFT version of your integration. You can't modify the settings for a published or an unpublished version that isn't in the draft mode. For a list of integration versions, see Versions .
Click settings ( Integration summary ) in the designer toolbar. The integration summary page appears.
In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging:
Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY_ON_HOLD , and CANCELLED .
Error : Select this option to capture the following execution statuses: FAILED and CANCELLED .
Warning : Select this option to capture the following execution statuses: FAILED and CANCELLED .
Note: Currently, both Error and Warning severity levels capture FAILED and CANCELLED execution states.
For a list of integration execution states, see Execution states .
Click Save .
View logs
To view logs in Cloud Logging, you must first enable Cloud Logging and then follow these steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
To view the integration execution logs in Cloud Logging, use one of the following methods:
In the navigation menu, click Logs , and then, click View Cloud Logs .
In the navigation menu, click Logs , and then in the Cloud Logging field, click View . If Cloud Logging is enabled, this field provides a link to view logs in Cloud Logging. If Cloud Logging is not enabled, this field is set to Disabled .
In the Integration editor, after you test an integration , in the Test integration pane, click View Cloud Logs .
The Logs Explorer page appears. Logs are displayed for the last three hours for the following default query:
resource.type=integrations.googleapis.com/IntegrationVersion
To understand the log format of Application Integration logs , see the log_entries payload .
Sample queries
You can use the following queries to view logs in Cloud Logging:
To view all integration execution logs:
resource.type="integrations.googleapis.com/IntegrationVersion"
You can view integration execution logs for a specific execution ID:
Searches only the parents executions with the given execution ID:
resource.type="integrations.googleapis.com/IntegrationVersion"
jsonPayload.executionId=" EXECUTION_ID "
Searches for both parent and child executions launched from the given execution ID:
resource.type="integrations.googleapis.com/IntegrationVersion"
" EXECUTION_ID "
To view integration execution logs for a specific integration:
resource.type="integrations.googleapis.com/IntegrationVersion"
" INTEGRATION_NAME "
Or
resource.type="integrations.googleapis.com/IntegrationVersion"
jsonPayload.integration=" INTEGRATION_NAME "
To view failed integration executions for a specific integration:
resource.type="integrations.googleapis.com/IntegrationVersion"
jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED"
jsonPayload.integration=" INTEGRATION_NAME "
To view logs with specific request param name. For example, the following query requests logs for the requestUrl parameter:
resource.type="integrations.googleapis.com/IntegrationVersion"
"requestUrl"
For more sample queries, see Cloud Logging sample queries .
Limitations
Integration logs in Cloud Logging are subject to the following limitations:
Cloud Logging only supports log entries that are up to 256 KiB in size. If your logs exceed this limit, the request and response parameters are not shown in the logging details. For information about Cloud Logging quotas and limits, see Quotas and limits . To resolve this error, update the integration variables so that the value doesn't exceed the limit. Alternatively, you can also view these logs in Application Integration .
If local logging is disabled, the execution logs are not sent to Cloud Logging even if Cloud Logging is enabled.
Pricing
For information about pricing for Cloud Logging, see Cloud Logging pricing .
What's next
Learn about execution logs in Cloud Logging .
Learn how to query and view logs .
Learn about log based metrics .
Learn how logs are stored, routed and how you can export to different destinations .
Learn how to create alerts on log-based metrics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
