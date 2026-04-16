---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.995Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Observability bucket default settings"
feature_slug: "observability-bucket-default-settings"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/trace/docs/analytics"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "observability"
  - "bucket"
  - "default"
  - "settings"
  - "let"
  - "organizations"
  - "folders"
  - "and"
---

# Observability bucket default settings

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Default settings let organizations, folders, and projects preconfigure location and Cloud KMS key values for new observability buckets.

## Extended Definition

Default settings let organizations, folders, and projects preconfigure location and Cloud KMS key values for new observability buckets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.

### Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- To make this change, in the toolbar of the Query pane, click settings Settings and then select Analytics (default) .
- To make this change, in the toolbar of the Query pane, click settings Settings and then select Analytics (default) .
- To make this change, in the toolbar of the Query pane, click settings Settings and then select Analytics (default) .
- For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- When a log bucket is upgraded for Observability Analytics, the results of the describe command include the following statement: analyticsEnabled: true If your log bucket isn't upgraded, then run the following command: gcloud logging buckets update LOG BUCKET ID --location = LOCATION --enable-analytics --async The upgrade can take several minutes to complete.
- Enable the APIs To get the permissions that you need to configure the system so that you can view your multimodal prompts and responses in BigQuery, ask your administrator to grant you the following IAM roles on project: Logs Configuration Writer ( roles/logging.configWriter ) Storage Admin ( roles/storage.admin ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Studio User ( roles/bigquery.studioUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- CONNECTION ID The response to this command lists the connection ID, and it lists a service account: { "serviceAccountId" : "bqcx-151560119848-s1pd@gcp-sa-bigquery-condel.iam.gserviceaccount.com" } Grant the service account for the BigQuery connection an IAM role that lets it read data stored in your Cloud Storage bucket: gcloud storage buckets add-iam-policy-binding gs:// STORAGE BUCKET \ --member = serviceAccount: SERVICE ACCT EMAIL \ --role = roles/storage.objectViewer Replace the following before you run the command: STORAGE BUCKET : The name of your Cloud Storage bucket.
- For example, the following example illustrates how prompts and responses appear, and how OpenTelemetry: Attributes are summarized: Before you begin To get the permissions that you need to view your multimodal prompts and responses, ask your administrator to grant you the following IAM roles on project: Cloud Trace User ( roles/cloudtrace.user ) Logs Viewer ( roles/logging.viewer ) Storage Object Viewer ( roles/storage.objectViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you are using an app-enabled folder and if you don't have an organization-level aggregated sink or nested folders, then we recommend following: Create an intercepting aggregated sink for your app-enabled folder , and route those logs to the Default log bucket of the management project for your app-enabled folder.
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Configure and set the default log scope Do one of the following: If you have an organization-level aggregated sink that routes all log data in your organization to a centralized log bucket, then we recommend the following: Create a log view on the centralized log bucket for your application logs.

