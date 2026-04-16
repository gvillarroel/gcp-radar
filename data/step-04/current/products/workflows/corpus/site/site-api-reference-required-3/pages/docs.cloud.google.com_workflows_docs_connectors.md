---
title: "Understand connectors \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/connectors
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/connectors
  title: "Understand connectors \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Understand connectors
Stay organized with collections
Save and categorize content based on your preferences.
Workflows publishes connectors to make it easier to access other
Google Cloud products within a workflow. For a detailed reference of available
connectors, see the
Connectors reference .
Connectors can be used to connect to other Google Cloud APIs within
a workflow, and to integrate your workflows with those Google Cloud
products. For example, you can use connectors to publish Pub/Sub
messages, read or write data to a Firestore database, or retrieve
authentication keys from Secret Manager.
Learn how to use a connector .
Connectors simplify calling services because they handle the formatting of
requests for you, providing methods and arguments so that you don't need to know
the details of a Google Cloud API.
Connectors have built-in behavior for handling retries and
long-running operations .
Note: API operations that are facilitated by Workflows connectors
should not be confused with calling or invoking a Google Cloud
service—such as Cloud Run functions or Cloud Run—which is done
through an HTTP request .
Authentication
Connectors use built-in Identity and Access Management authentication to interact with other
Google Cloud products. Note that a workflow using a connector still
needs to have proper permissions assigned to its service account to properly
authenticate to a given API. For example, to publish a message to
Pub/Sub, the service account associated with your workflow needs to be
granted the roles/pubsub.publisher role .
To learn more about authenticating to other Google Cloud products, see
Grant a workflow permission to access Google Cloud resources .
Retries
All connectors apply the following
retry policy and error
handling configurations:
Workflows uses an
idempotent retry policy
for GET requests.
Workflows uses a
non-idempotent retry policy
for all other HTTP methods.
By default, requests time out after 30 minutes. Note that for long-running
operations, this applies to individual requests (for example, starting the
operation or checking its status) within the long-running operation. The
timeout for the entire operation can be configured using the
connector_params field. See the Connectors reference .
Long-running operations
For calls performing a long-running operation, the following behaviors apply:
Workflows blocks the workflow execution until the operation
completes successfully or fails.
By default, calls time out after 30 minutes. The timeout of the call can be
changed using the connector_params field (to a maximum of one year). See the
Connectors reference .
Connectors poll long-running operations periodically. By default,
Workflows uses an exponential backoff of 1.25 when polling,
starting with 1 second and slowing to 60 seconds between polls.
Each polling attempt counts as a billable step. The polling parameters can be
changed using the connector_params field. See the Connectors reference .
The preceding retry mechanism applies to a failed polling attempt.
Poll responses are checked and if the response payload is invalid, a
ResponseTypeError error is returned.
When an error occurs during a long-running operation, Workflows
raises an OperationError error. The error includes an additional attribute,
error , which contains operation-specific details.
If a long-running operation fails, the connector call throws an exception with
the following attributes:
message : Human-readable error message.
tags : A list of tags. For a long-running operation connector call, the list
includes OperationError .
operation : The failed long-running operation object.
For a detailed list of supported long-running operation types, see the
Connectors reference .
What's next
Tutorial: Run a batch translation using the Cloud Translation connector
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
