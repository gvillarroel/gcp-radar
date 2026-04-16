---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.219Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job submission properties"
feature_slug: "job-submission-properties"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
keywords:
  - "also"
  - "shown"
  - "specifying"
  - "submission"
  - "configuration"
  - "properties"
  - "supports"
---

# Job submission properties

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Job submission supports specifying properties that are also shown in the job configuration view.

## Extended Definition

Job submission supports specifying properties that are also shown in the job configuration view.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget ): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi encryptionConfig object ( EncryptionConfig ) Optional.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xml For more information, see Cluster properties .
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- To initialize the gcloud CLI, run the following command: gcloud init Install Python 3.11+ Prepare a customization script that installs custom packages and/or updates configurations, for example: #! /usr/bin/bash apt-get -y update apt-get install python-dev apt-get install python-pip pip install numpy Create a Cloud Storage bucket in your project In the Google Cloud console, go to the Cloud Storage Buckets page.
- If generate custom image.py is successful, the imageURI of the custom image is displayed in the terminal window output (the full imageUri is shown in bold below): ... managedCluster: clusterName: verify-image-20180614213641-8308a4cd config: gceClusterConfig: zoneUri: ZONE masterConfig: imageUri: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- This URI can be specified in one of three ways: Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/ gs://BUCKET NAME` Partial URI: projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME Short name: CUSTOM IMAGE NAME Custom images can also be specified by their family URI, which always chooses the most recent image within the image family.

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample submit job as operation(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample cancel job(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete job(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample submit job(): Create a client client = dataproc v1 .

