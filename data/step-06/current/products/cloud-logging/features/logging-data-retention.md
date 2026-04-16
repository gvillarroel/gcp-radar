---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.472Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging data retention"
feature_slug: "logging-data-retention"
latest_feature_date: "2018-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "logging"
  - "retention"
  - "retains"
  - "30"
  - "days"
  - "all"
  - "projects"
---

# Logging data retention

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging retains logging data for 30 days for all projects.

## Extended Definition

Cloud Logging retains logging data for 30 days for all projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you want to create a bucket with the BUCKET ID my-bucket in the global region, your command would look like the following: gcloud logging buckets create my-bucket --location global --description "My first bucket" For example, to create a bucket with the BUCKET ID my-upgraded-bucket in the global location, and then upgrade the log bucket to use Observability Analytics, your command would look like the following: gcloud logging buckets create my-upgraded-bucket --location global \ --description "My first upgraded bucket" \ --enable-analytics --retention-days=45 Note: After you create your log bucket, you can't change your bucket's region.
- Your new retention duration appears in the Logs bucket list. gcloud To update the retention period for a log bucket, run the gcloud logging buckets update command, after setting a value for RETENTION DAYS : gcloud logging buckets update BUCKET ID --location= LOCATION --retention-days= RETENTION DAYS For example, to retain the logs in the Default bucket in the global location for a year, your command would look like the following: gcloud logging buckets update Default --location=global --retention-days=365 If you extend a bucket's retention period, then the retention rules apply going forward and not retroactively.
- For example, the following command reports the details of the Default bucket: gcloud logging buckets describe Default --location=global You see the following attributes for the log bucket: createTime : A timestamp that indicates when the bucket was created. description : The description of the log bucket. lifecycleState : Indicates whether the bucket is pending deletion by Cloud Logging. name : The name of the log bucket. retentionDays : The number of days that the bucket's data will be stored by Cloud Logging. updateTime : A timestamp that indicates when the bucket was last modified.
- In the Retention period field, enter the number of days, between 1 day and 3650 days, that you want Cloud Logging to retain your logs.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following command extends the retention of log entries stored in the log bucket to 365 days: gcloud logging buckets update BUCKET NAME \ --location= LOCATION --project= PROJECT ID \ --retention-days= 365 For more information about options, see gcloud logging buckets update .
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create SINK NAME \ logging.googleapis.com/projects/ PROJECT ID \ --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ --organization= ORGANIZATION ID \ --include-children The --include-children option is important.
- The destination path format for a log bucket is the following: logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET NAME PROJECT ID : The identifier of the project in which to create the log sink.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- My query is correct but I still don't see log entries You can't see log entries that are older than the Logging retention period.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Get Google Cloud project or organization ID To get a Google Cloud project or organization ID from anywhere in the Google Cloud console, expand the list of Google Cloud projects from the Google Cloud project and organization selector and find the Google Cloud project ID in the ID column.

