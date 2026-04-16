---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.490Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaling version selection for Serverless Spark"
feature_slug: "autoscaling-version-selection-for-serverless-spark"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest"
keywords:
  - "autoscaling"
  - "version"
  - "selection"
  - "serverless"
  - "spark"
  - "dataproc"
  - "supports"
  - "selecting"
---

# Autoscaling version selection for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports selecting the autoscaling version with the spark.dataproc.scaling.version property.

## Extended Definition

Dataproc Serverless for Spark supports selecting the autoscaling version with the spark.dataproc.scaling.version property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)

## Supporting Pages

### "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://dataproc.googleapis.com REST Resource: v1.projects.locations.autoscalingPolicies Methods create POST /v1/{parent=projects/ /locations/ }/autoscalingPolicies Creates new autoscaling policy. delete DELETE /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Deletes an autoscaling policy. get GET /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Retrieves autoscaling policy. getIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/autoscalingPolicies Lists autoscaling policies in the project. setIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{policy.name=projects/ /locations/ /autoscalingPolicies/ } Updates (replaces) autoscaling policy.
- REST Resource: v1.projects.locations.autoscalingPolicies REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.workflowTemplates REST Resource: v1.projects.regions.autoscalingPolicies REST Resource: v1.projects.regions.clusters REST Resource: v1.projects.regions.clusters.nodeGroups REST Resource: v1.projects.regions.jobs REST Resource: v1.projects.regions.operations REST Resource: v1.projects.regions.workflowTemplates Service: dataproc.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://dataproc.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- Autoscaling: If you stop a cluster that has autoscaling enabled, the Managed Service for Apache Spark autoscaler will stop scaling the cluster.
- Limitations You cannot stop: clusters with secondary workers clusters with local ssds When a cluster is stopped, you cannot: update the cluster submit jobs to the cluster access notebooks running on the cluster using the Managed Service for Apache Spark component gateway Starting a cluster When you restart a stopped cluster, any initialization actions won't be re-run.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.

