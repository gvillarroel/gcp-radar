---
title: "Checking Status \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/checking-status
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/checking-status
  title: "Checking Status \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Checking Status
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Service Infrastructure for checking
status on managed services ,
service producers ,
service consumers , and API keys.
When a service producer offers a service to its service consumers, it needs to
ensure that various preconditions are met, such as whether:
A service consumer has been deleted.
The service consumer has enabled the service.
An API key is valid.
The Service Control API provides a simple
services.check
method to check such preconditions. A managed service should call this method on
a regular basis to ensure the preconditions are met. The activity between the
service producer and the service consumer is represented by an
Operation .
The services.check method performs the following checks on the operation:
The service producer project is live and in a healthy state.
The service consumer project is live and in a healthy state.
The managed service is enabled on the service consumer project.
The API key is valid.
The use of the API key satisfies restrictions associated with the API key,
such as IP or HTTP referrer restrictions.
The services.check method is typically called from the servers that actually
implement the service. For security and privacy purposes,
the Service Control API uses Identity and Access Management to verify the
caller has the proper permission to call the method. For details, see
Service Control API Access Control .
Checking status
After you roll out a managed service, you can call the
services.check method on the service without additional configuration. See the
services.check
reference for details.
To quickly experiment with the method, you can use the gcurl command to call
the services.check method. See
Getting Started with the Service Control API
for the initial setup steps.
gcurl -d '{
"operation": {
"operationId": "123e4567-e89b-12d3-a456-426655440000",
"consumerId": "project:endpointsapis-consumer",
"startTime":"2016-07-31T05:20:00Z",
"operationName":"google.example.hello.v1.HelloService.GetHello"
}
}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check
{
"operationId": "123e4567-e89b-12d3-a456-426655440000"
}
The response from the check method indicates whether all checks succeeded or
some checks failed. Success is indicated by the absence of
checkErrors
field. Otherwise, the checkErrors field lists the failed checks.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
