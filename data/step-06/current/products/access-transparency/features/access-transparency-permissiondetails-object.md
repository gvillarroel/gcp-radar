---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.556Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Access Transparency permissionDetails object"
feature_slug: "access-transparency-permissiondetails-object"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/release-notes"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs"
keywords:
  - "permission context fields"
  - "permissionDetails.permissionType"
  - "permissionDetails.logAccessed"
  - "permissionDetails object"
  - "permission details"
  - "Access Transparency permissionDetails"
  - "permissionDetails"
---

# Access Transparency permissionDetails object

Product: Access Transparency
Coverage: HIGH

## Step 02 Summary

Access Transparency logs now include a permissionDetails object with permissionType and logAccessed fields to provide administrator access permission context.

## Extended Definition

Access Transparency logs include a `permissionDetails` object to provide permission context for administrator access events. This object includes a `permissionType` field (indicating the IAM permission type associated with the access) and a `logAccessed` field, both shown as part of Access Transparency log entries to describe administrator access permissions.

## Evidence Summary

The release notes confirm the feature launch date and field availability, while the Access Transparency logs documentation defines `permissionDetails` and explains the permission context fields with examples.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/release-notes)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)

## Supporting Pages

### Release notes \_|\_ Access Transparency \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that logs now include a permissionDetails object with permissionType and logAccessed fields.

Evidence snippets:
- November 18, 2025 Feature Access Transparency logs include a permissionDetails object with the permissionType and logAccessed fields to provide details about administrator access permissions.

### Understanding and using Access Transparency logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: It describes log entry content and includes a sample log fragment with a `permissionDetail` field, but does not document the specific `permissionDetails` object details (`permissionType` or `logAccessed`).

Evidence snippets:
- Values for permissionDetails fields The following permission details are available in Access Transparency logs: permissionType : Indicates the Identity and Access Management (IAM) Permission type associated with the data access by the Google administrator.
- Sample Access Transparency log entry The following is an example of an Access Transparency log entry: { insertId : "abcdefg12345" jsonPayload : { @ type : "type.googleapis.com/google.cloud.audit.TransparencyLog" location : { principalOfficeCountry : "US" principalEmployingEntity : "Google LLC" principalPhysicalLocationCountry : "CA" } principalJobTitle : "Engineering" product : [ 0 : "Cloud Storage" ] reason : [ detail : "Case number: bar123" type : "CUSTOMER INITIATED SUPPORT" ] permissionDetails :[ 0 : { permissionType : "DATA READ" logAccessed : true } 1 : { permissionType : "ADMIN READ" } ] eventId : "asdfg12345asdfg12345asdfg12345" accesses : [ 0 : { methodName : "GoogleInternal.Read" resourceName : "//googleapis.com/storage/buckets/ BUCKET NAME /objects/foo123" } ] accessApprovals : [ 0 : "projects/123/approvalRequests/abcdef12345" ] } logName : "projects/ PROJECT ID /logs/cloudaudit.googleapis.com %2F access transparency" operation : { id : "12345xyz" } receiveTimestamp : "2017-12-18T16:06:37.400577736Z" resource : { labels : { project id : "1234567890" } type : "project" } severity : "NOTICE" timestamp : "2017-12-18T16:06:24.660001Z" } Log field descriptions Field Description insertId Unique identifier for the log. @type Access Transparency log identifier. principalOfficeCountry ISO 3166-1 alpha-2 country code of country in which the accessor has a permanent desk, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalEmployingEntity The entity that employs the Google personnel making the access (for example, Google LLC ). principalPhysicalLocationCountry ISO 3166-1 alpha-2 country code of country from which access was made, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalJobTitle The job family of the Google personnel making the access. product Customer's Google Cloud product that was accessed. reason:detail Details of the reason, for example, a support ticket ID. reason:type Access reason type (for example, CUSTOMER INITIATED SUPPORT) . permissionDetails Details about permissions linked to an access.
- For more information, see Values for permission details. accesses:methodName What type of access was made.

