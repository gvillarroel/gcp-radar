---
title: "Cloud Service Mesh audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/audit-logging
  title: "Cloud Service Mesh audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Service Mesh audit logging
This document describes audit logging for Cloud Service Mesh. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Service Mesh audit logs use the service name meshconfig.googleapis.com .
Filter for this service:
protoPayload . serviceName = "meshconfig.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Service Mesh generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
ADMIN_WRITE
google.cloud.meshconfig.v1alpha1.Admin.Initialize
DATA_READ
envoy.service.discovery.v3.AggregatedDiscoveryService.StreamAggregatedResources google.cloud.meshconfig.v1alpha1.Webhook.Call google.cloud.meshconfig.v1alpha1.Webhook.GatewayInject google.cloud.meshconfig.v1alpha1.Webhook.Inject google.cloud.meshconfig.v1alpha1.Webhook.ProxylessBootstrapInject google.cloud.meshconfig.v1alpha1.Webhook.TDInject google.cloud.meshconfig.v1alpha1.Webhook.Validate
DATA_WRITE
envoy.service.load_stats.v3.LoadReportingService.StreamLoadStats
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Service Mesh.
envoy.service.discovery.v3.AggregatedDiscoveryService
The following audit logs are associated with methods belonging to
envoy.service.discovery.v3.AggregatedDiscoveryService .
StreamAggregatedResources
Method : envoy.service.discovery.v3.AggregatedDiscoveryService.StreamAggregatedResources
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="envoy.service.discovery.v3.AggregatedDiscoveryService.StreamAggregatedResources"
envoy.service.load_stats.v3.LoadReportingService
The following audit logs are associated with methods belonging to
envoy.service.load_stats.v3.LoadReportingService .
StreamLoadStats
Method : envoy.service.load_stats.v3.LoadReportingService.StreamLoadStats
Audit log type : Data access
Permissions : meshconfig.projects.report - DATA_WRITE
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="envoy.service.load_stats.v3.LoadReportingService.StreamLoadStats"
google.cloud.meshconfig.v1alpha1.Admin
The following audit logs are associated with methods belonging to
google.cloud.meshconfig.v1alpha1.Admin .
Initialize
Method : google.cloud.meshconfig.v1alpha1.Admin.Initialize
Audit log type : Admin activity
Permissions : meshconfig.projects.init - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Admin.Initialize"
google.cloud.meshconfig.v1alpha1.Webhook
The following audit logs are associated with methods belonging to
google.cloud.meshconfig.v1alpha1.Webhook .
Call
Method : google.cloud.meshconfig.v1alpha1.Webhook.Call
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.Call"
GatewayInject
Method : google.cloud.meshconfig.v1alpha1.Webhook.GatewayInject
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.GatewayInject"
Inject
Method : google.cloud.meshconfig.v1alpha1.Webhook.Inject
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.Inject"
ProxylessBootstrapInject
Method : google.cloud.meshconfig.v1alpha1.Webhook.ProxylessBootstrapInject
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.ProxylessBootstrapInject"
TDInject
Method : google.cloud.meshconfig.v1alpha1.Webhook.TDInject
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.TDInject"
Validate
Method : google.cloud.meshconfig.v1alpha1.Webhook.Validate
Audit log type : Data access
Permissions : meshconfig.projects.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.meshconfig.v1alpha1.Webhook.Validate"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
