---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.580Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Organization-owned logs"
feature_slug: "organization-owned-logs"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "organization"
  - "owned"
  - "logs"
  - "the"
  - "logging"
  - "api"
  - "allows"
  - "organizations"
---

# Organization-owned logs

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logging API allows organizations as well as projects to own logs with organization-scoped log names.

## Extended Definition

The Logging API allows organizations as well as projects to own logs with organization-scoped log names.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- It decides, based on the full resource name of a log, which of the following delete API commands to execute: projects.logs , organizations.logs , folders.logs , or billingAccounts.logs .
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- The following are the audit log names, including variables for the resource identifiers: projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Factivity projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fdata access projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event projects / PROJECT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Factivity folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fdata access folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fsystem event folders / FOLDER ID / logs / cloudaudit . googleapis . com % 2 Fpolicy billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Factivity billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fdata access billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fsystem event billingAccounts / BILLING ACCOUNT ID / logs / cloudaudit . googleapis . com % 2 Fpolicy organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Factivity organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fdata access organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fsystem event organizations / ORGANIZATION ID / logs / cloudaudit . googleapis . com % 2 Fpolicy Caller identities in audit logs Audit logs record the identity that performed the logged operations on the Google Cloud resource.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- Access control IAM permissions and roles determine your ability to access audit logs data in the Logging API , the Logs Explorer , and the Google Cloud CLI .

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature Organizations : The Stackdriver Logging API now allows both projects and organizations to own logs.
- Feature List logs : the Stackdriver Logging API now has "list logs" methods: organizations.logs.list and projects.logs.list .
- November 21, 2016 Feature Sinks : The Stackdriver Logging API now allows both projects and organizations to own sinks.
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.

