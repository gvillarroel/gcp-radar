---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.136Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Clickable Cloud Storage error links"
feature_slug: "clickable-cloud-storage-error-links"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub"
keywords:
  - "clickable"
  - "storage"
  - "error"
  - "links"
  - "bucket"
  - "paths"
  - "shown"
  - "in"
---

# Clickable Cloud Storage error links

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Extended Definition

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub)

## Supporting Pages

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the response, the resultManifestUri field contains the location of the file. "response" : { "@type" : "type.googleapis.com/google.cloud.metastore.QueryMetadataResponse" , "resultManifestUri" : "gs://gcs-bucket-6a3638b8-e319-46363-ad33-e632a5e/query-results/800156f5-2d13-4b80-bec3-2345a9e880f6/result-manifest" } The output of the result manifest file is similar to the following: { "status" : { "code" : 0 , "message" : "Query results are successfully uploaded to cloud storage" , "details" : [] }, "filenames" : [ "result-001" ] } Result manifest file details: The status field shows whether the query was a success or failure.
- The following example shows a sample command that moves a table called test-table2 to a new Cloud Storage bucket. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -X POST -d '{"resource name": "databases/testdb1/tables/test-table2", "location uri":"gs://gcs-bucket-dpms1-9425bd83-b794-4f1c-9e79-2d833f758cc1/empty"}' https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:alterLocation Alter table properties This operation lets you alter the properties of a table, such as a custom key-value pair that you're using to store data.
- In this example the existing key-value pair, properties.customerID 1 is updated to the new value properties.customerID 2 curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"table name": "databases/default/tables/test-table", "update mask":{"paths":"properties.customerID 1"}, "properties":{"customerID 1":"customerID 2"}}' https://metastore.googleapis.com/projects/dpms-p Move a table to another database This operation lets you move an internal table (managed table) to another database.
- The following example shows a sample command that runs a select query from a database named DBS. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"query": "select from DBS;"}' \ https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:queryMetadata Interpret the output of a query metadata operation When you first run a query metadata command, Dataproc Metastore automatically creates a Google Cloud folder in your artifacts Google Cloud bucket.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- GCP Console The Output tab for a job now includes a Line wrapping option to make it easier to view job output containing very long lines January 21, 2016 Fixed SparkR jobs no longer immediately fail with a "permission denied" error ( Spark JIRA issue ) Configuring logging for Spark jobs with the --driver-logging-levels option no longer interferes with Java driver options GCP Console The error shown for improperly-formatted initialization actions now properly appears with information about the problem Very long error messages now include a scrollbar so the Close button remains on-screen re ## January 7, 2016 #### Bugfixes Fixed issue in Dataproc version 0.1 that caused zero-byte SUCCESS and FAILURE files for each job to be continually re-written to Cloud Storage.
- Upgraded the Cloud Storage and BigQuery connectors (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to version 1.6.5 BigQuery connector has been upgraded to version 0.10.6 Fixed Fixed issue where cluster can go into ERROR state due to error when resizing a managed instance group.
- Feature Dataproc on Compute Engine: Sharing snapshot diagnostic data : Setting the --tarball-access=GOOGLE DATAPROC DIAGNOSE flag with the gcloud dataproc clusters diagnose command shares all of the output Cloud Storage bucket contents with Google Cloud support if uniform bucket-level access is enabled on the output Cloud Storage bucket.

### "Class AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- It is an error to delete an autoscaling policy that is in use by one or more clusters.
- Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected AutoscalingPolicyServiceGrpc .
- 4.85.0 (latest) 4.84.0 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1 public static final class AutoscalingPolicyServiceGrpc .
- AutoscalingPolicyServiceBlockingStub build ( Channel channel , CallOptions callOptions ) Parameters Name Description channel io.grpc.Channel callOptions io.grpc.CallOptions Returns Type Description AutoscalingPolicyServiceGrpc.AutoscalingPolicyServiceBlockingStub Overrides io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) createAutoscalingPolicy(CreateAutoscalingPolicyRequest request) public AutoscalingPolicy createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request ) Creates new autoscaling policy.

