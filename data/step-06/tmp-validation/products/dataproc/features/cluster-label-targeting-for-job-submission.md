---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.146Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster label targeting for job submission"
feature_slug: "cluster-label-targeting-for-job-submission"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "targeting"
  - "label"
  - "specified"
  - "submission"
  - "supports"
  - "cluster"
---

# Cluster label targeting for job submission

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc job submission supports targeting a cluster by specified cluster labels.

## Extended Definition

Dataproc job submission supports targeting a cluster by specified cluster labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Filters are case-sensitive and have the following syntax: field = value [AND [field = value]] ... where field is one of status.state , clusterName , or labels.[KEY] , and [KEY] is a label key. value can be to match all values. status.state can be one of the following: ACTIVE , INACTIVE , CREATING , RUNNING , ERROR , DELETING , UPDATING , STOPPING , or STOPPED .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ClusterControllerTransport,Callable[..., ClusterControllerTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Filters are case-sensitive and have the following syntax: field = value [AND [field = value]] ... where field is one of status.state , clusterName , or labels.[KEY] , and [KEY] is a label key. value can be to match all values. status.state can be one of the following: ACTIVE , INACTIVE , CREATING , RUNNING , ERROR , DELETING , UPDATING , STOPPING , or STOPPED .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ClusterControllerTransport,Callable[..., ClusterControllerTransport]]] The transport to use, or a Callable that constructs and returns a new transport.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The cluster will be auto-stopped at the end of this period, calculated from the time of submission of the create or update cluster request.
- Enums CLUSTER TYPE UNSPECIFIED Not set.
- Enums CLUSTER TIER UNSPECIFIED Not set.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.

