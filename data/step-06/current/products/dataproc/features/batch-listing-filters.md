---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.034Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Batch listing filters"
feature_slug: "batch-listing-filters"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
keywords:
  - "batch"
  - "listing"
  - "filters"
  - "dataproc"
  - "listings"
  - "filtering"
  - "by"
  - "id"
---

# Batch listing filters

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Extended Definition

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)

## Supporting Pages

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the batch id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) - > google . cloud . dataproc v1 . services . batch controller . pagers .

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the batch id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. batch google.cloud.dataproc v1.types.Batch Required.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- February 23, 2023 Change Upgrade Spark to 3.3.2 and its dependencies in 1.1 and 2.0 Dataproc Serverless for Spark runtimes: Jackson to 2.13.5 Jetty to 9.4.50.v20221201 ORC to 1.8.2 Protobuf to 3.21.12 RoaringBitmap to 0.9.39 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.4 2.0.12 February 17, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.3 2.0.11 Announcement New sub-minor versions of Dataproc images: 1.5.82-debian10, 1.5.82-rocky8, 1.5.82-ubuntu18 2.0.56-debian10, 2.0.56-rocky8, 2.0.56-ubuntu18 2.1.4-debian11, 2.1.4-rocky8, 2.1.4-ubuntu20 February 10, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.2 2.0.10 Feature Add support for filters when listing batches.
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- In the meantime, you can re-enable the Conscrypt provider when creating a cluster by specifying this Cloud Dataproc property : --properties dataproc:dataproc.conscrypt.provider.enable=true Feature Cloud Dataproc worker IAM role – A new Cloud Dataproc IAM role called Dataproc/Dataproc Worker has been added.

