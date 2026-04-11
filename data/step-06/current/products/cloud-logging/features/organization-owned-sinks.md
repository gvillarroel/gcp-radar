---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.580Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Organization-owned sinks"
feature_slug: "organization-owned-sinks"
latest_feature_date: "2016-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
keywords:
  - "organization"
  - "owned"
  - "sinks"
  - "the"
  - "logging"
  - "api"
  - "allows"
  - "organizations"
---

# Organization-owned sinks

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logging API allows organizations as well as projects to own sinks and export logs to destinations in other projects.

## Extended Definition

The Logging API allows organizations as well as projects to own sinks and export logs to destinations in other projects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)

## Supporting Pages

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- The destination is a new Pub/Sub topic in the current project, and the sink service account, shown in the output of the logging sinks create command, is granted an IAM role that lets the service account publish content to the topic. gcloud pubsub topics create syslog-sink-topic gcloud logging sinks create syslog-sink pubsub.googleapis.com/projects/MY-PROJECT/topics/syslog-sink-topic \ --log-filter="severity>=WARNING" gcloud pubsub topics add-iam-policy-binding syslog-sink-topic \ --member serviceAccount:LOG-SINK-SERVICE-ACCOUNT --role roles/pubsub.publisher Create a sink, folder-logs in a folder FOLDER ID that routes the Admin Activity audit logs from the folder.
- Examples Update the destination of a project sink: gcloud logging sinks update PROJECT ID storage.googleapis.com/my-second-gcs-bucket Deleting sinks Use the gcloud logging sinks delete command, corresponding to the API method projects.sinks.delete : You stop routing its log entries when you delete a sink: gcloud logging sinks delete SINK NAME Examples Delete sink syslog-sink-1 in the current project: gcloud logging sinks delete syslog-sink-1 Log-based metrics To manage log-based metrics, use the gcloud logging metrics command group, corresponding to the API methods at projects.metrics .

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2016 Feature Sinks : The Stackdriver Logging API now allows both projects and organizations to own sinks.
- Feature Organizations : The Stackdriver Logging API now allows both projects and organizations to own logs.
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.
- Feature List logs : the Stackdriver Logging API now has "list logs" methods: organizations.logs.list and projects.logs.list .

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.organizations Methods getCmekSettings GET /v2/{name=organizations/ }/cmekSettings Gets the Logging CMEK settings for the given resource. getSettings GET /v2/{name=organizations/ }/settings Gets the settings for the given resource. updateCmekSettings PATCH /v2/{name=organizations/ }/cmekSettings Updates the Log Router CMEK settings for the given resource. updateSettings PATCH /v2/{name=organizations/ }/settings Updates the settings for the given resource.
- REST Resource: v2.organizations.locations.buckets.views Methods create POST /v2/{parent=organizations/ /locations/ /buckets/ }/views Creates a view over log entries in a log bucket. delete DELETE /v2/{name=organizations/ /locations/ /buckets/ /views/ } Deletes a view on a log bucket. get GET /v2/{name=organizations/ /locations/ /buckets/ /views/ } Gets a view on a log bucket. getIamPolicy POST /v2/{resource=organizations/ /locations/ /buckets/ /views/ }:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent=organizations/ /locations/ /buckets/ }/views Lists views on a log bucket. patch PATCH /v2/{name=organizations/ /locations/ /buckets/ /views/ } Updates a view on a log bucket. setIamPolicy POST /v2/{resource=organizations/ /locations/ /buckets/ /views/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v2/{resource=organizations/ /locations/ /buckets/ /views/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2.organizations.locations.savedQueries Methods create POST /v2/{parent=organizations/ /locations/ }/savedQueries Creates a new SavedQuery for the user making the request. delete DELETE /v2/{name=organizations/ /locations/ /savedQueries/ } Deletes an existing SavedQuery that was created by the user making the request. get GET /v2/{name=organizations/ /locations/ /savedQueries/ } Returns all data associated with the requested query. list GET /v2/{parent=organizations/ /locations/ }/savedQueries Lists the SavedQueries that were created by the user making the request. patch PATCH /v2/{savedQuery.name=organizations/ /locations/ /savedQueries/ } Updates an existing SavedQuery.

