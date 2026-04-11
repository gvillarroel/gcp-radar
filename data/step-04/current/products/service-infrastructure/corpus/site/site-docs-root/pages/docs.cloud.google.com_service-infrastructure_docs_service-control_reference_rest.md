---
title: "Service Control API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest
  title: "Service Control API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Infrastructure
Reference
Send feedback
Service Control API
Stay organized with collections
Save and categorize content based on your preferences.
Provides admission control and telemetry reporting for services integrated with Service Infrastructure.
REST Resource: v3
REST Resource: v2.services
REST Resource: v1.services
Service: servicecontrol.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://servicecontrol.googleapis.com/$discovery/rest?version=v2
https://servicecontrol.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://servicecontrol.googleapis.com
REST Resource: v2.services
Methods
check
POST /v2/services/{serviceName}:check
This method provides admission control for services that are integrated with Service Infrastructure .
report
POST /v2/services/{serviceName}:report
This method provides telemetry reporting for services that are integrated with Service Infrastructure .
REST Resource: v1.services
Methods
allocateQuota
POST /v1/services/{serviceName}:allocateQuota
Attempts to allocate quota for the specified consumer.
check
POST /v1/services/{serviceName}:check
Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies.
report
POST /v1/services/{serviceName}:report
Reports operation results to Google Service Control, such as logs and metrics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
