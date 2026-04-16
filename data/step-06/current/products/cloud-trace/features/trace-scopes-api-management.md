---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.997Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace scopes API management"
feature_slug: "trace-scopes-api-management"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/trace/docs/setup/cpp-ot"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
keywords:
  - "trace"
  - "scopes"
  - "api"
  - "management"
  - "can"
  - "be"
  - "created"
  - "and"
---

# Trace scopes API management

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Trace scopes can be created and managed programmatically through an API.

## Extended Definition

Trace scopes can be created and managed programmatically through an API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view trace data by using the Google Cloud console and to or select a trace scope: To select a trace scope: cloudtrace.traceScopes.[get, list] To read the default trace scope: observability.scopes.get You might also be able to get these permissions with custom roles or other predefined roles .
- What's next Create and manage trace scopes Share traces and spans Troubleshoot Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console and to or select a trace scope, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on your project.
- To view an aggregate representation of your trace data, or to find and explore individual traces or traces that contain specific labels, use the Trace Explorer page.

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To grant this role to the service account, run the following gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID --member "serviceAccount: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" --role="roles/cloudtrace.agent" You can then run the gcloud projects get-iam-policy command to verify that the change has been made: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" The output now includes roles/cloudtrace.agent : ROLE roles/cloudtrace.agent roles/logging.logWriter roles/monitoring.metricWriter For more information about managing IAM roles, see Manage access to project, folders, and organizations .
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Benefits Before the availability of the OTLP plugin for the Ops Agent, the primary ways to instrument your applications to collect user-defined metrics and traces included the following: Using client libraries that implement the Monitoring API or the Trace API.
- This document describes how can use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect user-defined metrics and traces from applications instrumented by using OpenTelemetry and running on Compute Engine.

### C++ and OpenTelemetry \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to create a GKE cluster with only the Cloud Trace API enabled, do the following: gcloud container clusters create example-cluster-name --scopes=https://www.googleapis.com/auth/trace.append Running locally and elsewhere If your application is running outside of Google Cloud, then you must provide authentication credentials in the form of a service account to the client library.
- For the following configurations, the default access-scope settings enable the Cloud Trace API: App Engine flexible environment App Engine standard environment Google Kubernetes Engine (GKE) Note: If you use Autopilot or if you enable Workload Identity Federation for GKE for your GKE cluster, then ensure that you configure your application to use Workload Identity Federation for GKE .
- For gcloud users, specify access scopes using the --scopes flag and include the trace.append Cloud Trace API access scope.
- The following lists the default paths for Windows and Linux: Windows: %APPDATA%/gcloud/application default credentials.json Linux: $HOME/.config/gcloud/application default credentials.json Set the GOOGLE APPLICATION CREDENTIALS environment variable to the path to your service account: Linux/macOS export GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key Windows set GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = "path-to-your-service-accounts-private-key" View traces In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- It also describes how you can view, analyze, and evaluate your stored multimodal media: Use the Trace Explorer page to view individual prompts or responses or to view an entire conversation.
- Enable the APIs To get the permissions that you need to configure the system so that you can view your multimodal prompts and responses in BigQuery, ask your administrator to grant you the following IAM roles on project: Logs Configuration Writer ( roles/logging.configWriter ) Storage Admin ( roles/storage.admin ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Studio User ( roles/bigquery.studioUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, the following example illustrates how prompts and responses appear, and how OpenTelemetry: Attributes are summarized: Before you begin To get the permissions that you need to view your multimodal prompts and responses, ask your administrator to grant you the following IAM roles on project: Cloud Trace User ( roles/cloudtrace.user ) Logs Viewer ( roles/logging.viewer ) Storage Object Viewer ( roles/storage.objectViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .

