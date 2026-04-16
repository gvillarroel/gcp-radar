---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.199Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Minimum CPU platform selection"
feature_slug: "minimum-cpu-platform-selection"
latest_feature_date: "2017-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "minimum"
  - "choose"
  - "selection"
  - "platform"
  - "when"
  - "users"
  - "lets"
---

# Minimum CPU platform selection

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Minimum CPU platform selection lets users choose a minimum CPU platform when creating a Dataproc cluster.

## Extended Definition

Minimum CPU platform selection lets users choose a minimum CPU platform when creating a Dataproc cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- List of instance selection options that the group will use when creating new VMs. instanceSelectionResults[] object ( InstanceSelectionResult ) Output only.
- See Dataproc -> Minimum CPU Platform . minNumInstances integer Optional.
- Specifies the minimum cpu platform for the Instance Group.
- JSON representation { "numInstances" : integer , "instanceNames" : [ string ] , "imageUri" : string , "machineTypeUri" : string , "diskConfig" : { object ( DiskConfig ) } , "isPreemptible" : boolean , "preemptibility" : enum ( Preemptibility ) , "managedGroupConfig" : { object ( ManagedGroupConfig ) } , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "minCpuPlatform" : string , "minNumInstances" : integer , "instanceFlexibilityPolicy" : { object ( InstanceFlexibilityPolicy ) } , "startupConfig" : { object ( StartupConfig ) } } Fields numInstances integer Optional.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- JSON representation { "userServiceAccountMapping" : { string : string , ... } } Fields userServiceAccountMapping map (key: string, value: string) Required.
- The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp ).
- Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration ). idleStartTime string ( Timestamp format) Output only.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Under Instance Size , use the slider to choose a minimum and maximum instance size.
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.
- Note: If your Hive warehouse directory is already on Cloud Storage, then you should set a metastore configuration override when you create your Dataproc Metastore service.

