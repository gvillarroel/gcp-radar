---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.115Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster Scheduled Deletion"
feature_slug: "cluster-scheduled-deletion"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
keywords:
  - "cluster"
  - "scheduled"
  - "deletion"
  - "lets"
  - "users"
  - "configure"
  - "clusters"
  - "to"
---

# Cluster Scheduled Deletion

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Cluster Scheduled Deletion lets users configure clusters to be deleted after a duration, at a specific time, or after inactivity.

## Extended Definition

Cluster Scheduled Deletion lets users configure clusters to be deleted after a duration, at a specific time, or after inactivity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- July 10, 2020 Feature Added --temp-bucket flag to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster to allow users to configure a Cloud Storage bucket that stores ephemeral cluster and jobs data, such as Spark and MapReduce history files.
- With this change, with clusters created with these image versions, Dataproc Cluster Scheduled Deletion by default will consider YARN activity, in addition to Dataproc Jobs API activity, when determining cluster idle time .
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- These values are all created using default names and settings set by the Managed Service for Apache Spark cluster. gcloud gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version 2.0-debian10 \ --dataproc-metastore DATAPROC METASTORE NAME \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- After, you create a Managed Service for Apache Spark cluster configured with Kerberos and connect to it.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- Create a Managed Service for Apache Spark cluster and enable Kerberos gcloud To set up a Managed Service for Apache Spark cluster with Kerberos, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --image-version=2.0 \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace the following: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Configure the Managed Service for Apache Spark cluster for Kerberos The following instructions show you how to use SSH to connect to a primary Managed Service for Apache Spark cluster that's associated with your Dataproc Metastore service.
- Enable Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that is attached to a Managed Service for Apache Spark cluster.

