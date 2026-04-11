---
title: "Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/cancel-executions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/cancel-executions
  title: "Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Cancel executions
If you have an execution that is suspended due to an approval task or a technical issue, you can choose to cancel the execution. You can cancel an integration execution if the integration is in one of the following execution states :
Suspended
On hold
Retry on hold
Cancel an execution
To cancel an execution, select one of the following options:
Console
In Application Integration , go to the Logs page.
Go to Application Integration Logs
In the navigation menu, click Logs . The Execution Logs page appears.
For the execution that you want to cancel, click more_vert and then cancel Cancel . The Cancel execution pane appears.
Add the reason to replay the execution.
Click Cancel Execution .
API
Call the projects.locations.integrations.executions.cancel method and provide the ID of the execution that you want to cancel:
curl -X POST https://integrations.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /integrations/ INTEGRATION_NAME /executions/ EXECUTION_ID :cancel -H "Authorization: Bearer $TOKEN"
Limitations
Cancel execution is subject to the following limitations:
Canceling an execution that is triggered by a Schedule trigger isn't supported.
You can't cancel an integration execution if the integration is in one of the following states:
In process
Succeeded
Failed
Canceled
What's next
Learn about logs in Application Integration .
Learn how to test and publish integrations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
