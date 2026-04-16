---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.205Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Stackdriver monitoring agent"
feature_slug: "stackdriver-monitoring-agent"
latest_feature_date: "2016-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "agent"
  - "stackdriver"
  - "monitoring"
  - "installed"
  - "default"
  - "clusters"
---

# Stackdriver monitoring agent

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties.

## Extended Definition

The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### Managed Service for Apache Spark metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Note: monitoring-agent-defaults are not available in 2.2 image version clusters unless the Ops Agent is installed.
- The metric source name is case insensitive, for example, either "yarn" or "YARN" is acceptable. monitoring-agent-defaults are not available in 2.2 image version clusters.
- Note: The monitoring-agent-defaults setting is not available for 2.2 image version clusters.
- Statistical measure Sample metric Sample metric name Max hivemetastore:API:GetDatabase:Max hivemetastore/get database/max Min hivemetastore:API:GetDatabase:Min hivemetastore/get database/min Mean hivemetastore:API:GetDatabase:Mean hivemetastore/get database/mean Count hivemetastore:API:GetDatabase:Count hivemetastore/get database/count 50thPercentile hivemetastore:API:GetDatabase:50thPercentile hivemetastore/get database/median 75thPercentile hivemetastore:API:GetDatabase:75thPercentile hivemetastore/get database/75th percentile 95thPercentile hivemetastore:API:GetDatabase:95thPercentile hivemetastore/get database/95th percentile 98thPercentile hivemetastore:API:GetDatabase:98thPercentile hivemetastore/get database/98th percentile 99thPercentile hivemetastore:API:GetDatabase:99thPercentile hivemetastore/get database/99th percentile 999thPercentile hivemetastore:API:GetDatabase:999thPercentile hivemetastore/get database/999th percentile StdDev hivemetastore:API:GetDatabase:StdDev hivemetastore/get database/stddev FifteenMinuteRate hivemetastore:API:GetDatabase:FifteenMinuteRate hivemetastore/get database/15min rate FiveMinuteRate hivemetastore:API:GetDatabase:FiveMinuteRate hivemetastore/get database/5min rate OneMinuteRate hivemetastore:API:GetDatabase:OneMinuteRate hivemetastore/get database/1min rate MeanRate hivemetastore:API:GetDatabase:MeanRate hivemetastore/get database/mean rate Managed Service for Apache Spark monitoring agent metrics Managed Service for Apache Spark collects the following Managed Service for Apache Spark monitoring agent metrics when you set --metric-sources=monitoring-agent-defaults .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- MONITORING AGENT DEFAULTS Monitoring agent metrics.
- If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an agent.googleapis.com prefix.
- It is set to true by default in clusters created with image versions 2.2.x.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Using optional components: 2.2 and earlier base images: By default, all of the Managed Service for Apache Spark optional components (OS packages and configs) are installed on the custom image.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.

