---
title: "Kubernetes Metadata API audit logging \_|\_ Google Distributed Cloud (software\
  \ only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-metadata-api
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging-metadata-api
  title: "Kubernetes Metadata API audit logging \_|\_ Google Distributed Cloud (software\
    \ only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Kubernetes Metadata API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Kubernetes Metadata API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Kubernetes Metadata API audit logs use the service name kubernetesmetadata.googleapis.com .
Filter for this service:
protoPayload . serviceName = "kubernetesmetadata.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Kubernetes Metadata API generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.cloud.kubernetesmetadata.v1.MetadataPublisher.RetrieveCollectorConfig
DATA_WRITE
google.cloud.kubernetesmetadata.v1.MetadataPublisher.PublishMetadata google.cloud.kubernetesmetadata.v1.MetadataPublisher.UploadSnapshot
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Kubernetes Metadata API.
google.cloud.kubernetesmetadata.v1.MetadataPublisher
The following audit logs are associated with methods belonging to
google.cloud.kubernetesmetadata.v1.MetadataPublisher .
PublishMetadata
Method : google.cloud.kubernetesmetadata.v1.MetadataPublisher.PublishMetadata
Audit log type : Data access
Permissions : kubernetesmetadata.metadata.publish - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kubernetesmetadata.v1.MetadataPublisher.PublishMetadata"
RetrieveCollectorConfig
Method : google.cloud.kubernetesmetadata.v1.MetadataPublisher.RetrieveCollectorConfig
Audit log type : Data access
Permissions : kubernetesmetadata.metadata.config - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kubernetesmetadata.v1.MetadataPublisher.RetrieveCollectorConfig"
UploadSnapshot
Method : google.cloud.kubernetesmetadata.v1.MetadataPublisher.UploadSnapshot
Audit log type : Data access
Permissions : kubernetesmetadata.metadata.snapshot - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kubernetesmetadata.v1.MetadataPublisher.UploadSnapshot"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
