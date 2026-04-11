---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.062Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster label targeting for job submission"
feature_slug: "cluster-label-targeting-for-job-submission"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
keywords:
  - "cluster"
  - "label"
  - "targeting"
  - "for"
  - "job"
  - "submission"
  - "dataproc"
  - "supports"
---

# Cluster label targeting for job submission

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc job submission supports targeting a cluster by specified cluster labels.

## Extended Definition

Dataproc job submission supports targeting a cluster by specified cluster labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- Fixed Forced distcp settings to match mapred-site.xml settings to provide additional fixes for the distcp command (see this related JIRA ) Ensured that workers created during an update do not join the cluster until after custom initialization actions are complete Ensured that workers always disconnect from a cluster when the Cloud Dataproc agent is shutdown Fixed a race condition in the API frontend that occurred when validating a request and marking cluster as updating Enhanced validation checks for quota, Cloud Dataproc image, and initialization actions when updating clusters Improved handling of jobs when the Cloud Dataproc agent is restarted GCP Console Allowed duplicate arguments when submitting a job Replaced generic Failed to load message with details about the cause of an error when an error occurs that is not related to Cloud Dataproc When a single jar file for a job is submitted, allowed it to be listed only in the Main class or jar field on the Submit a Job form, and no longer required it to also be listed in the Jar files field November 18, 2015 Change Core service improvements If set, a project's default zone setting is now used as the default value for the zone in the create-cluster form in the GCP Console.

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- SubmitJobRequest ( project id="project id value", region="region value", job=job, ) Make the request operation = client. submit job as operation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.SubmitJobRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample submit job as operation(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample cancel job(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete job(): Create a client client = dataproc v1 .

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- GET https://dataproc.googleapis.com/v1/projects/ project /regions/ region /clusters? filter=labels. label-key = label-value &key= api-key See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Here is the JSON body of a cluster.create request that includes attaches a key1:value label to the cluster. { "clusterName":"cluster-1", "projectId":"my-project", "config":{ "configBucket":"", "gceClusterConfig":{ "networkUri":".../networks/default", "zoneUri":".../zones/us-central1-f" }, "masterConfig":{ "numInstances":1, "machineTypeUri":"..../machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } }, "workerConfig":{ "numInstances":2, "machineTypeUri":"...machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } } }, "labels":{ "key1":"value1" } } The clusters.list and jobs.list APIs can be used to list clusters or jobs that match a specified filter, using the following format: labels.<key=value> .
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.

