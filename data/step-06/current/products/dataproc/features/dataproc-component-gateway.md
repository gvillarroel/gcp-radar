---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.633Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Component Gateway"
feature_slug: "dataproc-component-gateway"
latest_feature_date: "2020-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "dataproc"
  - "component"
  - "gateway"
  - "provides"
  - "secure"
  - "access"
  - "web"
  - "endpoints"
---

# Dataproc Component Gateway

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Component Gateway provides secure access to web endpoints for default and optional components; Dataproc Component Gateway provides secure access to web endpoints for default and optional components.

## Extended Definition

Dataproc Component Gateway provides secure access to web endpoints for default and optional components; Dataproc Component Gateway provides secure access to web endpoints for default and optional components.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Private Ipv6 Google Access PrivateIpv6GoogleAccess controls whether and how Dataproc cluster nodes can communicate with Google Services through gRPC over IPv6.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.

### Access gRPC endpoints for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Access gRPC endpoints for Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- Grant access at the table level To grant access to all Dataproc Metastore metadata in a specific table, you must grant a metadata role to your principal account. gcloud CLI To grant metadata roles at the granularity of a table, run the following gcloud metastore services databases tables add-iam-policy-binding command: gcloud metastore services databases tables add-iam-policy-binding TABLE ID \ --database= DATABASE ID \ --project= PROJECT \ --location= LOCATION \ --service= SERVICE ID \ --member= PRINCIPAL \ --role= METASTORE ROLE Replace the following: TABLE ID : The ID of the table that you're granting access to.
- Grant access at the database level To grant access to all Dataproc Metastore metadata in a specific database, you must add a metadata role to your principal account. gcloud CLI To grant metadata roles at the granularity of a specific database, run the following gcloud metastore services databases add-iam-policy-binding command: gcloud metastore services databases add-iam-policy-binding DATABASE ID \ --project= PROJECT \ --location= LOCATION \ --service= SERVICE ID \ --member= PRINCIPAL \ --role= METASTORE ROLE Replace the following: DATABASE ID : The ID of the database that you're granting metadata access to.
- Grant access at the service level To grant access to all Dataproc Metastore metadata at the service level, you must grant a metadata role to your principal account. gcloud CLI To grant metadata roles at the granularity of a single Dataproc Metastore metastore service, run the following gcloud metastore services add-iam-policy-binding command: gcloud metastore services add-iam-policy-binding SERVICE ID \ --location= LOCATION \ --member= PRINCIPAL \ --role= METASTORE ROLE Replace the following: SERVICE ID : The ID or fully qualified identifier for your Dataproc Metastore service.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- PrivateIpv6GoogleAccess PrivateIpv6GoogleAccess controls whether and how Dataproc cluster nodes can communicate with Google Services through gRPC over IPv6.
- The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.
- ANACONDA The Anaconda component is no longer supported or applicable to supported Dataproc on Compute Engine image versions .

