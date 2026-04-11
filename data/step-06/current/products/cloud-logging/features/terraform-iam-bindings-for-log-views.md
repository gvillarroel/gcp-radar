---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.526Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Terraform IAM bindings for log views"
feature_slug: "terraform-iam-bindings-for-log-views"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
keywords:
  - "terraform"
  - "iam"
  - "bindings"
  - "for"
  - "log"
  - "views"
  - "can"
  - "attach"
---

# Terraform IAM bindings for log views

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Terraform can attach IAM role bindings to log views to grant principals access.

## Extended Definition

Terraform can attach IAM role bindings to log views to grant principals access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2024 Feature You can now use Terraform commands to attach an IAM role binding to a log view that grants a principal access to the log view.
- January 20, 2025 Libraries Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) January 13, 2025 Feature You can now create analytics views, which let you transform your log data into a custom format.
- February 17, 2025 Libraries Java 3.21.3 (2025-02-12) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 ) Java 3.21.3 (2025-02-12) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 ) Java 3.21.3 (2025-02-12) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 ) February 06, 2025 Feature You can now create and manage your log views by using the Google Cloud console.
- April 18, 2023 Feature You can now configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets by using the following Terraform modules: google logging project bucket config google logging linked dataset April 11, 2023 Change The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: View logging.buckets.copyLogEntries logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.fields.access logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries. logging.logEntries.create logging.logEntries.download logging.logEntries.list logging.logEntries.route logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs. logging.logs.delete logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.privateLogEntries.list logging.queries. logging.queries.deleteShared logging.queries.getShared logging.queries.listShared logging.queries.share logging.queries.updateShared logging.queries.usePrivate logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.usage.get logging.views. logging.views.access logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.listLogs logging.views.listResourceKeys logging. views. listResourceValues logging.views.setIamPolicy logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Logs Bucket Writer ( roles/ logging.bucketWriter ) Ability to write logs to a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.create logging. buckets. createTagBinding logging.buckets.delete logging. buckets. deleteTagBinding logging.buckets.get logging.buckets.list logging. buckets. listEffectiveTags logging. buckets. listTagBindings logging.buckets.undelete logging.buckets.update logging.exclusions. logging.exclusions.create logging.exclusions.delete logging.exclusions.get logging.exclusions.list logging.exclusions.update logging.links. logging.links.create logging.links.delete logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logMetrics. logging.logMetrics.create logging.logMetrics.delete logging.logMetrics.get logging.logMetrics.list logging.logMetrics.update logging.logScopes. logging.logScopes.create logging.logScopes.delete logging.logScopes.get logging.logScopes.list logging.logScopes.update logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.notificationRules. logging. notificationRules. create logging. notificationRules. delete logging.notificationRules.get logging.notificationRules.list logging. notificationRules. update logging.operations. logging.operations.cancel logging.operations.get logging.operations.list logging.settings. logging.settings.get logging.settings.update logging.sinks. logging.sinks.create logging.sinks.delete logging.sinks.get logging.sinks.list logging.sinks.update logging.sqlAlerts. logging.sqlAlerts.create logging.sqlAlerts.update logging.views.create logging.views.delete logging.views.get logging.views.getIamPolicy logging.views.list logging.views.update observability.scopes.get resourcemanager.projects.get resourcemanager.projects.list Log Field Accessor ( roles/ logging.fieldAccessor ) Ability to read restricted fields in a log bucket.
- Lowest-level resources where you can grant this role: View logging.buckets.get logging.buckets.list logging.exclusions.get logging.exclusions.list logging.links.get logging.links.list logging.locations. logging.locations.get logging.locations.list logging.logEntries.list logging.logMetrics.get logging.logMetrics.list logging.logScopes.get logging.logScopes.list logging.logServiceIndexes.list logging.logServices.list logging.logs.list logging.operations.get logging.operations.list logging.queries.getShared logging.queries.listShared logging.queries.usePrivate logging.sinks.get logging.sinks.list logging.usage.get logging.views.get logging.views.list observability.scopes.get resourcemanager.projects.get Logs Configuration Writer ( roles/ logging.configWriter ) Provides permissions to read and write the configurations of logs-based metrics and sinks for exporting logs.
- Your IAM roles determine whether you can perform actions like create log sinks or log buckets, read log data stored in a log bucket, or access pages like the Logs Explorer .

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Verify that the sink was created: gcloud logging sinks list --organization= ORGANIZATION ID Get the name of the service account: gcloud logging sinks describe SINK NAME --organization= ORGANIZATION ID The output looks similar to the following: writerIdentity: serviceAccount:o1234567890- ORGANIZATION ID @gcp-sa-logging.iam.gserviceaccount.com Copy the value of the serviceAccount field into your clipboard.
- In the following steps, you grant a principal the role of roles/logging.viewAccessor along with an IAM condition that restricts the grant to the view named AllLogs : In the Google Cloud console, go to the IAM page: Go to IAM If you use the search bar to find this page, then select the result whose subheading is IAM & Admin .
- For example, the following command extends the retention of log entries stored in the log bucket to 365 days: gcloud logging buckets update BUCKET NAME \ --location= LOCATION --project= PROJECT ID \ --retention-days= 365 For more information about options, see gcloud logging buckets update .

