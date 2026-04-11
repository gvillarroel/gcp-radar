---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.059Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc v1beta2 API"
feature_slug: "dataproc-v1beta2-api"
latest_feature_date: "2021-07-09"
deprecation_date: "2021-07-09"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient"
keywords:
  - "dataproc"
  - "v1beta2"
  - "api"
  - "the"
  - "was"
  - "deprecated"
  - "in"
  - "favor"
---

# Dataproc v1beta2 API

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Dataproc v1beta2 API was deprecated in favor of the Dataproc v1 API; deprecated on 2021-07-09.

## Extended Definition

The Dataproc v1beta2 API was deprecated in favor of the Dataproc v1 API; deprecated on 2021-07-09.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)

## Supporting Pages

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, in the response, the resultManifestUri field contains the location of the file. "response" : { "@type" : "type.googleapis.com/google.cloud.metastore.QueryMetadataResponse" , "resultManifestUri" : "gs://gcs-bucket-6a3638b8-e319-46363-ad33-e632a5e/query-results/800156f5-2d13-4b80-bec3-2345a9e880f6/result-manifest" } The output of the result manifest file is similar to the following: { "status" : { "code" : 0 , "message" : "Query results are successfully uploaded to cloud storage" , "details" : [] }, "filenames" : [ "result-001" ] } Result manifest file details: The status field shows whether the query was a success or failure.
- You can sign in by executing gcloud init or gcloud auth login , or by using Cloud Shell , which account by executing gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ POST -d '{"resource name": " RESOURCE NAME ", "location uri":" LOCATION URI "}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE :alterLocation Replace the following: PROJECT ID : the Google Cloud project ID that your Dataproc Metastore service resides in.
- The following example shows a sample command that runs a select query from a database named DBS. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"query": "select from DBS;"}' \ https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:queryMetadata Interpret the output of a query metadata operation When you first run a query metadata command, Dataproc Metastore automatically creates a Google Cloud folder in your artifacts Google Cloud bucket.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ POST -d '{"table name": " TABLE NAME ", "db name": " DB NAME ", "destination db name": " DESTINATION DB NAME "}'\ -H "Content-Type:application/json" \ https://metastore.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE :moveTableToDatabase Replace the following: PROJECT ID : the Google Cloud project ID that your Dataproc Metastore service resides in.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- April 29, 2019 Fixed Fixed issue where the dataproc.googleapis.com/cluster/job/running count metric was not consistent with the active running jobs count on the Cloud Dataproc Job page in Google Cloud Platform console.
- Deprecated The Dataproc v1beta2 APIs are deprecated.
- Fixed Forced distcp settings to match mapred-site.xml settings to provide additional fixes for the distcp command (see this related JIRA ) Ensured that workers created during an update do not join the cluster until after custom initialization actions are complete Ensured that workers always disconnect from a cluster when the Cloud Dataproc agent is shutdown Fixed a race condition in the API frontend that occurred when validating a request and marking cluster as updating Enhanced validation checks for quota, Cloud Dataproc image, and initialization actions when updating clusters Improved handling of jobs when the Cloud Dataproc agent is restarted GCP Console Allowed duplicate arguments when submitting a job Replaced generic Failed to load message with details about the cause of an error when an error occurs that is not related to Cloud Dataproc When a single jar file for a job is submitted, allowed it to be listed only in the Main class or jar field on the Submit a Job form, and no longer required it to also be listed in the Jar files field November 18, 2015 Change Core service improvements If set, a project's default zone setting is now used as the default value for the zone in the create-cluster form in the GCP Console.
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.

### "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. policy google.cloud.dataproc v1.types.AutoscalingPolicy Required.
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete autoscaling policy(): Create a client client = dataproc v1 .

