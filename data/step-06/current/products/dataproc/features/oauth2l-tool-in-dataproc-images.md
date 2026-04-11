---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.073Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "oauth2l tool in Dataproc images"
feature_slug: "oauth2l-tool-in-dataproc-images"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
keywords:
  - "oauth2l"
  - "tool"
  - "in"
  - "dataproc"
  - "images"
  - "include"
  - "the"
  - "command"
---

# oauth2l tool in Dataproc images

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc images include the oauth2l command-line tool for all VM users.

## Extended Definition

Dataproc images include the oauth2l command-line tool for all VM users.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)

## Supporting Pages

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- Custom container image requirements and settings Base images You can use docker tools for building customized docker based upon one of the published Managed Service for Apache Spark on GKE base Spark images .
- These utilities are included in the base Spark images , so custom images do not need to re-install them.
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Example: gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM IMAGE URI \ --region= REGION \ ... other flags REST API Create a cluster with a custom image by specifying custom image URI in the InstanceGroupConfig.imageUri field in the masterConfig , workerConfig , and, if applicable, secondaryWorkerConfig object included in a cluster.create API request.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataproc images now include the oauth2l command line tool.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- August 22, 2022 Announcement Announcing Dataproc Serverless for Spark preview runtime version 2.0.0-RC1 , which includes the following components: Spark 3.3.0 Cloud Storage Connector 2.2.7 Java 17 Conda 4.13 Python 3.10 R 4.1 Scala 2.13 Change Dataproc Serverless for Spark now uses runtime version 1.0.16 , which upgrades the following components to the following versions: Spark 3.2.2 Avro 1.11.1 Hadoop 3.3.4 Jetty 9.4.48.v20220622 ORC 1.7.5 RoaringBitmap 0.9.31 Scala 2.12.16 August 13, 2022 Change New sub-minor versions of Dataproc images: 1.5.73-debian10 , 1.5.73-rocky8 , 1.5.73-ubuntu18 2.0.47-debian10 , 2.0.47-rocky8, 2.0.47-ubuntu18 Change Dataproc on Compute Engine images now have master VM memory protection enabled by default.

