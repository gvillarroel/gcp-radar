---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.134Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster VM tags"
feature_slug: "cluster-vm-tags"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
keywords:
  - "cluster"
  - "vm"
  - "tags"
  - "creation"
  - "supports"
  - "applying"
  - "compute"
  - "engine"
---

# Cluster VM tags

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Cluster creation supports applying Google Compute Engine network tags to Dataproc virtual machine instances.

## Extended Definition

Cluster creation supports applying Google Compute Engine network tags to Dataproc virtual machine instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- August 19, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.146-debian10, 2.0.146-ubuntu18, 2.0.146-rocky8 2.1.95-debian11, 2.1.95-ubuntu20, 2.1.95-ubuntu20-arm, 2.1.95-rocky8 2.2.63-debian12, 2.2.63-ubuntu22, 2.2.63-ubuntu22-arm, 2.2.63-rocky9 2.3.9-debian12, 2.3.9-ubuntu22, 2.3.9-ubuntu22-arm, 2.3.9-ml-ubuntu22, 2.3.9-rocky9 August 14, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.2.57 2.2.57 2.3.8 August 12, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.145-debian10, 2.0.145-ubuntu18, 2.0.145-rocky8 2.1.94-debian11, 2.1.94-ubuntu20, 2.1.94-ubuntu20-arm, 2.1.94-rocky8 2.2.62-debian12, 2.2.62-ubuntu22, 2.2.62-ubuntu22-arm, 2.2.62-rocky9 2.3.8-debian12, 2.3.8-ubuntu22, 2.3.8-ubuntu22-arm, 2.3.8-ml-ubuntu22, 2.3.8-rocky9 Feature Dataproc on Compute Engine : Sharing checkpoint diagnostic data: Setting the dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE property during cluster creation shares all of the temp bucket contents with Google Cloud support if uniform bucket-level access is enabled on temp bucket.
- Announcement New Dataproc on Compute Engine subminor image versions : 2.0.68-debian10, 2.0.68-rocky8, 2.0.68-ubuntu18 2.1.16-debian11, 2.1.16-rocky8, 2.1.16-ubuntu20 June 26, 2023 Announcement Added Dataproc Serverless Templates for batch creation: Cloud Storage to BigQuery Cloud Storage to Cloud Spanner Hive to Cloud Storage JDBC to BigQuery JDBC to Cloud Storage June 22, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.20 2.0.28 2.1.7 June 16, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.67-debian10, 2.0.67-rocky8, 2.0.67-ubuntu18 2.1.15-debian11, 2.1.15-rocky8, 2.1.15-ubuntu20 Fixed Fixed a bug that caused cluster creation to fail when ATSv2 is enabled for tables that have a garbage collection policy setup other than maxversions .
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Cluster region: You must specify a Compute Engine region for the cluster, such as us-east1 or europe-west1 , to isolate cluster resources, such as VM instances and cluster metadata stored in Cloud Storage, within the region.
- Connectivity: Compute Engine Virtual Machine instances (VMs) in a Managed Service for Apache Spark cluster, consisting of master and worker VMs, require full internal IP networking cross connectivity.
- Console Open the Managed Service for Apache Spark Create a cluster page in the Google Cloud console in your browser, then click Create in the cluster on Compute engine row in the Create a Dataproc cluster on Compute Engine page.
- Before using any of the request data, make the following replacements: CLUSTER NAME : cluster name PROJECT : Google Cloud project ID REGION : An available Compute Engine region where the cluster will be created.

