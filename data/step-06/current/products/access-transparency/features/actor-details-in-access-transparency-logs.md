---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.878Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Actor details in Access Transparency logs"
feature_slug: "actor-details-in-access-transparency-logs"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs"
keywords:
  - "actor"
  - "details"
  - "access"
  - "transparency"
  - "logs"
  - "include"
  - "about"
  - "such"
---

# Actor details in Access Transparency logs

Product: Access Transparency
Coverage: MEDIUM

## Step 02 Summary

Access Transparency logs include details about the actor, such as physical location, job category, and employer.

## Extended Definition

Access Transparency logs include details about the actor, such as physical location, job category, and employer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs)

## Supporting Pages

### Understanding and using Access Transparency logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample Access Transparency log entry The following is an example of an Access Transparency log entry: { insertId : "abcdefg12345" jsonPayload : { @ type : "type.googleapis.com/google.cloud.audit.TransparencyLog" location : { principalOfficeCountry : "US" principalEmployingEntity : "Google LLC" principalPhysicalLocationCountry : "CA" } principalJobTitle : "Engineering" product : [ 0 : "Cloud Storage" ] reason : [ detail : "Case number: bar123" type : "CUSTOMER INITIATED SUPPORT" ] permissionDetails :[ 0 : { permissionType : "DATA READ" logAccessed : true } 1 : { permissionType : "ADMIN READ" } ] eventId : "asdfg12345asdfg12345asdfg12345" accesses : [ 0 : { methodName : "GoogleInternal.Read" resourceName : "//googleapis.com/storage/buckets/ BUCKET NAME /objects/foo123" } ] accessApprovals : [ 0 : "projects/123/approvalRequests/abcdef12345" ] } logName : "projects/ PROJECT ID /logs/cloudaudit.googleapis.com %2F access transparency" operation : { id : "12345xyz" } receiveTimestamp : "2017-12-18T16:06:37.400577736Z" resource : { labels : { project id : "1234567890" } type : "project" } severity : "NOTICE" timestamp : "2017-12-18T16:06:24.660001Z" } Log field descriptions Field Description insertId Unique identifier for the log. @type Access Transparency log identifier. principalOfficeCountry ISO 3166-1 alpha-2 country code of country in which the accessor has a permanent desk, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalEmployingEntity The entity that employs the Google personnel making the access (for example, Google LLC ). principalPhysicalLocationCountry ISO 3166-1 alpha-2 country code of country from which access was made, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalJobTitle The job family of the Google personnel making the access. product Customer's Google Cloud product that was accessed. reason:detail Details of the reason, for example, a support ticket ID. reason:type Access reason type (for example, CUSTOMER INITIATED SUPPORT) . permissionDetails Details about permissions linked to an access.
- Values for permissionDetails fields The following permission details are available in Access Transparency logs: permissionType : Indicates the Identity and Access Management (IAM) Permission type associated with the data access by the Google administrator.
- Access Transparency log entries include the following types of details: The affected resource and action.
- Access Transparency logs published before the date March 24, 2021 won't have this field populated. logName Name of the log location. operation:id Log cluster ID. receiveTimestamp Time the access was received by the logging pipeline. project id Project associated with the resource that was accessed. type Type of resource that was accessed (for example, project ). eventId Unique event ID associated with a single access event justification (for example, a single support case).

### "Viewing Access Transparency logs for Google Workspace \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/understanding-workspace-logs)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample Access Transparency log for Google Workspace The following sample is an example of the Access Transparency log for Google Workspace. { "insertId" : "-6x8cuqc3rk" , "jsonPayload" : { "activityId" : { "uniqQualifier" : "1720950322606095479" , "timeUsec" : "1621441673703908" }, "@type" : "type.googleapis.com/ccc hosted reporting.ActivityProto" , "event" : [ { "status" : { "success" : true }, "eventType" : "GSUITE RESOURCE" , "parameter" : [ { "multiStrValue" : [ "GMAIL" ], "name" : "GSUITE PRODUCT NAME" , }, { "name" : "RESOURCE NAME" , "multiStrValue" : [ "//googleapis.com/gmail/users/owner@example.com" ], }, { "name" : "LOG ID" , "value" : "Qt8v90c0fAEy SyaOplDvJc" , }, { "multiStrValue" : [ "Google Initiated Service - For details, please refer to the documentation." ], "name" : "JUSTIFICATIONS" , }, { "name" : "ACTOR HOME OFFICE" , "value" : "US" , }, { "value" : "owner@example.net" , "name" : "OWNER EMAIL" , } ], "eventName" : "ACCESS" } ] }, "resource" : { "type" : "organization" , "labels" : { "organization id" : "12345" } }, "timestamp" : "2021-05-19T16:27:53.703908Z" , "severity" : "NOTICE" , "logName" : "organizations/12345/logs/cloudaudit.googleapis.com%2Faccess transparency" , "receiveTimestamp" : "2021-05-19T16:28:52.867650088Z" } For information about the event and parameters that can appear in the jsonPayload field of the Access Transparency logs generated when Google personnel access Google Workspace resources, see Access Transparency Activity Events .
- For information about all the other fields in the Access Transparency logs for Google Workspace, see LogEntry .
- What's next Learn more about Access Transparency audit logs .
- Go to Logs Explorer Enter the following query in the Logs Explorer: logName = "organizations/ ORG ID /logs/cloudaudit.googleapis.com %2F access transparency" jsonPayload . @ type = "type.googleapis.com/ccc hosted reporting.ActivityProto" Replace ORG ID with the unique identifier of your Google Cloud organization.

### Overview of Access Transparency \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access Transparency log entries include details such as the affected resource and action, the time of the action, the reason for the action, and information about the accessor.
- For more information about the details covered in Access Transparency logs, see Log field descriptions .
- When to use Access Transparency You might need Access Transparency logs for the following reasons: Verifying that Google personnel are accessing your content only for valid business reasons, such as fixing an outage or attending to your support requests.
- By ingesting Access Transparency logs into your security information and event management (SIEM) tools for compliance or auditing purposes, you can augment any existing data, such as Security Command Center security findings.

