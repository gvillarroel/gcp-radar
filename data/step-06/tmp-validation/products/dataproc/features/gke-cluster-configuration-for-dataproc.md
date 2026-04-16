---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.171Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "GKE cluster configuration for Dataproc"
feature_slug: "gke-cluster-configuration-for-dataproc"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder"
keywords:
  - "specifying"
  - "configuration"
  - "creating"
  - "clusters"
  - "supports"
  - "cluster"
---

# GKE cluster configuration for Dataproc

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Extended Definition

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)

## Supporting Pages

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- System information Item Archive location GKE node metrics where virtual Managed Service for Apache Spark on GKE pods run: CPU usage Memory usage /system/ NODE NAME .json Network metrics and file system status of running pods: CPU usage Memory usage Network status Filesystem status /system/ POD NAME .json Configuration information Item Archive location Cluster configmap /conf/configmap Kubernetes deployment /conf/deployment Role Based Access Control (RBAC) /conf/role /conf/rolebind /conf/serviceaccount Logs Item Archive location Agent log /logs/agent.log Spark engine log /logs/sparkengine.log Spark driver running and completed job logs over the last 24 hours /logs/ DRIVER ID Job and pod information Item Archive location JobAttempt object /jobattempts Kubernetes Pod object /pods What's next See Diagnose Managed Service for Apache Spark clusters .
- This command gathers and archives cluster-related configuration files, logs, and outputs into an archive file. and then uploads the archive to the Cloud Storage staging bucket you specified when you created your Managed Service for Apache Spark on GKE cluster .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Diagnose GKE clusters Stay organized with collections Save and categorize content based on your preferences.
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.

### "Enum AuthenticationConfig.AuthenticationType (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- Source ID: `site-java-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Interface AuthenticationConfigOrBuilder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)
- Source ID: `site-java-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

