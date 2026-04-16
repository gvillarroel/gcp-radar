---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.576Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "dataproc:alpha.state.shuffle.hcfs.enabled property"
feature_slug: "dataproc-alpha-state-shuffle-hcfs-enabled-property"
latest_feature_date: "2020-05-21"
deprecation_date: "2020-05-21"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "dataproc"
  - "alpha"
  - "state"
  - "shuffle"
  - "hcfs"
  - "enabled"
  - "property"
  - "cluster"
---

# dataproc:alpha.state.shuffle.hcfs.enabled property

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The dataproc:alpha.state.shuffle.hcfs.enabled cluster property was used to configure shuffle behavior before being replaced by Enhanced Flexibility Mode properties; deprecated on 2020-05-21.

## Extended Definition

The dataproc:alpha.state.shuffle.hcfs.enabled cluster property was used to configure shuffle behavior before being replaced by Enhanced Flexibility Mode properties; deprecated on 2020-05-21.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- The cluster must be in a [ RUNNING ][google.cloud.dataproc.v1.ClusterStatus.State] state or an error is returned.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict]] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict]] The request object.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- The cluster must be in a [ RUNNING ][google.cloud.dataproc.v1.ClusterStatus.State] state or an error is returned.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict] The request object.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).

