---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.576Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Resource Usage page"
feature_slug: "resource-usage-page"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "resource"
  - "usage"
  - "page"
  - "the"
  - "in"
  - "logs"
  - "viewer"
  - "breaks"
---

# Resource Usage page

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Resource Usage page in Logs Viewer breaks down log volume by resource type.

## Extended Definition

The Resource Usage page in Logs Viewer breaks down log volume by resource type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- In the following expression, paste the copied ID into the PROJECT ID field, and then copy the expression into the query editor: resource.type = "gce instance" logName =( "projects/ PROJECT ID /logs/apache access" OR "projects/ PROJECT ID /logs/apache error" ) When the previous query is run, only apache access and apache error log entries are shown.
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- You can also examine the logs and ensure there are no errors: tail / var / log / google - fluentd / google - fluentd . log If you have trouble with the installation, refer to the Troubleshooting page.
- Run the following PowerShell command: Restart-Service -Name StackdriverLogging Upgrade the agent To upgrade the Logging agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- To reach this dashboard, do the following: In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- If your VMs are running in Google Kubernetes Engine or App Engine , the agent is already included in the VM image, so you can skip this page.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?
- Examples List all the resource types that have instance in their names: gcloud logging resource - descriptors list -- filter = "type:instance" Result: TYPE DESCRIPTION KEY gce instance A virtual machine instance hosted in Compute Engine . project id , instance id , zone spanner instance A Cloud Spanner instance . project id , instance id , location , instance config redis instance A Redis instance hosted on Google Cloud MemoryStore . project id , region , instance id , node id gce instance group A Compute Engine instance group resource . project id , instance group id , instance group name , location gce instance group manager A Compute Engine instance group manager resource . project id , instance group manager id , instance group manager name , location gce instance template A Compute Engine instance template resource . project id , instance template id , instance template name Routing logs You route logs by creating sinks that send certain log entries to supported destinations.
- Examples Create a distribution metric to record request latencies: gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat where logmetric.dat contains the following: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : App Engine Request Latency filter : resource . type = "gae app" logName = "projects/ PROJECT ID /logs/appengine.googleapis.com %2F nginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : labels : - description : HTTP Path key : path metricKind : DELTA name : projects / PROJECT ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric type : logging . googleapis . com / user / my - distribution - metric valueType : DISTRIBUTION name : my - distribution - metric valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Result: Created [my-distribution-metric].
- You must also have the IAM role that corresponds to the log's location, and to your use case: Use case IAM role List logs Logging/Logs Viewer Tail logs Logging/Logs Viewer Delete logs Logging/Logging Admin Write logs Logging/Logs Writer Read logs Logging/Logs Viewer Read Data Access audit logs Logging/Private Logs Viewer List sinks Logging/Logs Viewer Create sinks Logging/Logs Configuration Writer Update sinks Logging/Logs Configuration Writer Delete sinks Logging/Logs Configuration Writer List metrics Logging/Logs Viewer Create basic metrics Logging/Logs Configuration Writer Create advanced metrics Logging/Logs Configuration Writer Update metrics Logging/Logs Configuration Writer Delete metrics Logging/Logs Configuration Writer Create log scopes Logging/Logs Configuration Writer For additional information on required Logging IAM roles and permissions, go to Access control .

