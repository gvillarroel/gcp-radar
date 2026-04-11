---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.076Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "dataproc:alpha.state.shuffle.hcfs.enabled property"
feature_slug: "dataproc-alpha-state-shuffle-hcfs-enabled-property"
latest_feature_date: "2020-05-21"
deprecation_date: "2020-05-21"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
keywords:
  - "dataproc"
  - "alpha"
  - "state"
  - "shuffle"
  - "hcfs"
  - "enabled"
  - "property"
  - "the"
---

# dataproc:alpha.state.shuffle.hcfs.enabled property

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The dataproc:alpha.state.shuffle.hcfs.enabled cluster property was used to configure shuffle behavior before being replaced by Enhanced Flexibility Mode properties; deprecated on 2020-05-21.

## Extended Definition

The dataproc:alpha.state.shuffle.hcfs.enabled cluster property was used to configure shuffle behavior before being replaced by Enhanced Flexibility Mode properties; deprecated on 2020-05-21.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The dataproc:alpha.state.shuffle.hcfs.enabled cluster property has been deprecated.
- August 19, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.146-debian10, 2.0.146-ubuntu18, 2.0.146-rocky8 2.1.95-debian11, 2.1.95-ubuntu20, 2.1.95-ubuntu20-arm, 2.1.95-rocky8 2.2.63-debian12, 2.2.63-ubuntu22, 2.2.63-ubuntu22-arm, 2.2.63-rocky9 2.3.9-debian12, 2.3.9-ubuntu22, 2.3.9-ubuntu22-arm, 2.3.9-ml-ubuntu22, 2.3.9-rocky9 August 14, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.2.57 2.2.57 2.3.8 August 12, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.145-debian10, 2.0.145-ubuntu18, 2.0.145-rocky8 2.1.94-debian11, 2.1.94-ubuntu20, 2.1.94-ubuntu20-arm, 2.1.94-rocky8 2.2.62-debian12, 2.2.62-ubuntu22, 2.2.62-ubuntu22-arm, 2.2.62-rocky9 2.3.8-debian12, 2.3.8-ubuntu22, 2.3.8-ubuntu22-arm, 2.3.8-ml-ubuntu22, 2.3.8-rocky9 Feature Dataproc on Compute Engine : Sharing checkpoint diagnostic data: Setting the dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE property during cluster creation shares all of the temp bucket contents with Google Cloud support if uniform bucket-level access is enabled on temp bucket.
- Change Dataproc Serverless for Spark now uses runtime version 1.0.15 , which upgrades the following Spark dependencies to the following versions: Jackson 2.13.3 Jetty 9.4.46.v20220331 ORC 1.7.4 Parquet 1.12.3 Protobuf 3.19.4 RoaringBitmap 0.9.28 Breaking FallbackHiveAuthorizerFactory is now set by default on newly created 1.5 and 2.0 image clusters that have the any of the following features enabled: Kerberos security Personal Cluster Authentication Secure Multi-Tenancy If you encounter a Cannot modify <PARAM> or similar runtime error when running a SET statement in a Hive query, this means the parameter is not in list of allowable runtime parameters.
- Image 1.3 only: Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to 1.9.7 version Image 1.0-1.2 only: Cloud Storage and BigQuery connector upgrades (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to 1.6.10 version BigQuery connector has been upgraded to 0.10.11 version Feature Feature (1.2+) - Enabled new dataproc:am.primary only cluster property to prevent application master from running on preemptible workers.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The cluster must be in a [ RUNNING ][google.cloud.dataproc.v1.ClusterStatus.State] state or an error is returned.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict]] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict]] The request object.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The cluster must be in a [ RUNNING ][google.cloud.dataproc.v1.ClusterStatus.State] state or an error is returned.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict] The request object.

