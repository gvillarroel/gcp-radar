---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.971Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Trace exemplars in charts"
feature_slug: "trace-exemplars-in-charts"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "trace"
  - "exemplars"
  - "charts"
  - "can"
  - "viewed"
  - "monitoring"
---

# Trace exemplars in charts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace exemplars can be viewed in Cloud Monitoring charts.

## Extended Definition

Cloud Trace exemplars can be viewed in Cloud Monitoring charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- To grant this role to the service account, run the following gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID --member "serviceAccount: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" --role="roles/cloudtrace.agent" You can then run the gcloud projects get-iam-policy command to verify that the change has been made: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" The output now includes roles/cloudtrace.agent : ROLE roles/cloudtrace.agent roles/logging.logWriter roles/monitoring.metricWriter For more information about managing IAM roles, see Manage access to project, folders, and organizations .
- Determine the roles granted to to the service account To see the roles granted to a service account, run the following gcloud projects get-iam-policy command: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" You might see output like the following: ROLE roles/logging.logWriter roles/monitoring.metricWriter If the output includes either roles/cloudtrace.agent or roles/cloudtrace.admin , then the service account has sufficient permission to write traces.
- Benefits Before the availability of the OTLP plugin for the Ops Agent, the primary ways to instrument your applications to collect user-defined metrics and traces included the following: Using client libraries that implement the Monitoring API or the Trace API.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- Investigate an application To investigate the health of an application, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.

