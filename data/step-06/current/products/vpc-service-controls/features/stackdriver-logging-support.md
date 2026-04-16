---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.575Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Stackdriver Logging support"
feature_slug: "stackdriver-logging-support"
latest_feature_date: "2018-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer"
keywords:
  - "stackdriver"
  - "logging"
  - "vpc"
  - "controls"
  - "supports"
  - "protecting"
  - "resources"
---

# Stackdriver Logging support

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports protecting Stackdriver Logging resources.

## Extended Definition

VPC Service Controls supports protecting Stackdriver Logging resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Service name krmapihosting.googleapis.com Details To use Config Controller with VPC Service Controls, you must enable the following APIs inside your perimeter: Cloud Monitoring API ( monitoring.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Google Cloud Observability API ( logging.googleapis.com ) Security Token Service API ( sts.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) If you provision resources with Config Controller, you must enable the API for those resources in your service perimeter.
- Limitations To fully protect your AI Platform Training training jobs, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Training .
- Limitations To fully protect AI Platform Prediction, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Prediction .
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.

### VPC Service Controls audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC Service Controls audit logging Stay organized with collections Save and categorize content based on your preferences.
- To find audit logs for VPC Service Controls, use the following queries in the Logs Explorer: Query description Expression Violation details based on a denial ID log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . metadata . vpcServiceControlsUniqueId = " UNIQUE ID " Replace UNIQUE ID with the unique ID of the denial.
- For more information, see VPC networks . status The overall status of handling an operation described in the record. metadata The information about the security policy violation. metadata.resourceNames The names of resources involved in the security policy violation described in the record. metadata.dryRun A boolean value that is True if the audit log is for a dry run policy check.
- For more information, see Dry run mode for service perimeters . metadata.vpcServiceControlsTroubleshootToken A troubleshooting token that lets you diagnose the violation using the violation analyzer . metadata.vpcServiceControlsUniqueId The Unique Identifier of the VPC Service Controls violation described in the record. metadata.violationReason The reason for the violation.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose the following command is used: gcloud logging sinks describe example-sink The command returns the following output: destination : bigquery . googleapis . com / projects / corp - resources - public / datasets / logs filter : - resource . type = "audited resource" resource . labels . service = "bigquery.googleapis.com" name : example - sink outputVersionFormat : V2 writerIdentity : serviceAccount : p927005422713 - 439672 @ gcp - sa - logging . iam.gserviceaccount.com The following audit log record is generated: { insertId : "e5i2i8cbqw" logName : "projects/perimeter-network/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "p927005422713-439672@gcp-sa-logging.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "corp-resources-public" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.cloud.bigquery.v2.TableDataService.InsertAll" requestMetadata : { callerIp : "2002:a49:8c51::" destinationAttributes : { } requestAttributes : { } } resourceName : "projects/927005422713" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-29T17:32:19.287138882Z" resource : { labels : { method : "google.cloud.bigquery.v2.TableDataService.InsertAll" project id : "perimeter-network" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-29T17:32:19.054662413Z" } The audit log record is generated for BigQuery, not for Logging.
- Operation ID: c00dbc44-460f-4bd0-9d09-cda98ac800f9 The following audit log record is generated: { insertId : "146o5fd2hbp" logName : "projects/perimeter-network/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/117961063178" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "bigquery.googleapis.com/bigquery.tables.get" requestMetadata : { callerIp : "131.201.221.16" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/927005422713" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-28T00:27:05.688803777Z" resource : { labels : { method : "bigquery.googleapis.com/bigquery.tables.get" project id : "perimeter-network" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-28T00:27:05.378584819Z" } In this example, there is no single underlying API action that shows all the resources at play in this request due to limitations of the logging mechanism and the distributed architecture of BigQuery.
- The audit log record for the destination service (Cloud Storage) contains detailed reasons for the failure: { insertId : "1bq397kcfj1" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "storage-accessing@example.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/1004338142803" 1 : "projects/ /buckets/corp-resources-public-1" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.5.0.4" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-12-01T19:03:05.617451586Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-12-01T19:03:05.420005215Z" } From this log, it is clear that the two projects 1004338142803 ( corp-resources-private-1 ) and corp-resources-public are both being used to complete the command.
- In the audit logs for the perimeter-network project, where the command was executed, there is an audit log record for the saveAsTextFile operation: { insertId : "qdj1o9d1run" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com%2Fpolicy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "1004338142803-compute@developer.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/ /buckets/corp-resources-public-1/objects/out.txt" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.246.0.3" callerNetwork : "//compute.googleapis.com/projects/corp-resources-private/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-29T00:31:43.666227930Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-29T00:31:43.608250320Z" } Due to audit log limitations, the methodName for Cloud Storage is listed as Read even though it is actually a write operation.

### "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to use the violation analyzer, ask your administrator to grant you the following IAM roles: To diagnose an access denial event using the violation analyzer: Access Context Manager Reader ( roles/accesscontextmanager.policyReader ) on your organization-level access policy To fetch the troubleshooting token from Cloud Audit Logs: Logs Viewer ( roles/logging.viewer ) on the projects that have VPC Service Controls audit logs For more information about granting roles, see Manage access to projects, folders, and organizations .
- The troubleshooting result of an access denial event can have the following sections: Violation details Violation evaluation Restricted resources Restricted services Ingress Egress VPC accessible services To view the assessment of a specific perimeter component, select the perimeter component from the list or click the arrow right expander arrow next to the perimeter component.
- What's next Diagnose an access denial and view the classic report Debugging requests blocked by VPC Service Controls Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

