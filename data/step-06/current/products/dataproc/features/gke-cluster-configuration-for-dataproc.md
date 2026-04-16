---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.647Z"
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
  - "gke"
  - "cluster"
  - "configuration"
  - "dataproc"
  - "supports"
  - "creating"
  - "clusters"
  - "specifying"
---

# GKE cluster configuration for Dataproc

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Extended Definition

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)

## Supporting Pages

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- System information Item Archive location GKE node metrics where virtual Managed Service for Apache Spark on GKE pods run: CPU usage Memory usage /system/ NODE NAME .json Network metrics and file system status of running pods: CPU usage Memory usage Network status Filesystem status /system/ POD NAME .json Configuration information Item Archive location Cluster configmap /conf/configmap Kubernetes deployment /conf/deployment Role Based Access Control (RBAC) /conf/role /conf/rolebind /conf/serviceaccount Logs Item Archive location Agent log /logs/agent.log Spark engine log /logs/sparkengine.log Spark driver running and completed job logs over the last 24 hours /logs/ DRIVER ID Job and pod information Item Archive location JobAttempt object /jobattempts Kubernetes Pod object /pods What's next See Diagnose Managed Service for Apache Spark clusters .
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.
- Diagnose archive file The following tables list metrics and other information included in the dataproc clusters diagnose command archive file.
- This command gathers and archives cluster-related configuration files, logs, and outputs into an archive file. and then uploads the archive to the Cloud Storage staging bucket you specified when you created your Managed Service for Apache Spark on GKE cluster .

### "Enum AuthenticationConfig.AuthenticationType (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTHENTICATION TYPE UNSPECIFIED If AuthenticationType is unspecified then END USER CREDENTIALS is used for 3.0 and newer runtimes, and SERVICE ACCOUNT is used for older runtimes.

### "Interface AuthenticationConfigOrBuilder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description AuthenticationConfig.AuthenticationType The userWorkloadAuthenticationType. getUserWorkloadAuthenticationTypeValue() public abstract int getUserWorkloadAuthenticationTypeValue () Optional.
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for userWorkloadAuthenticationType.

