---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.098Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job Logs in Cloud Logging"
feature_slug: "job-logs-in-cloud-logging"
latest_feature_date: "2019-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging"
keywords:
  - "job"
  - "logs"
  - "in"
  - "logging"
  - "lets"
  - "users"
  - "send"
  - "and"
---

# Job Logs in Cloud Logging

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Job Logs in Cloud Logging lets users send and manage Dataproc job driver and YARN container logs in Cloud Logging.

## Extended Definition

Job Logs in Cloud Logging lets users send and manage Dataproc job driver and YARN container logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .
- Announcement Dataproc on Compute Engine: Starting August 18, 2025, the following diagnostic properties will be enabled by default for newly created Dataproc clusters: dataproc:diagnostic.capture.enabled : Enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Enables the collection of logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Enables the collection of VM syslogs in Cloud Logging .
- Change Dataproc on Compute Engine: The following diagnostic properties are now enabled by default for new Dataproc clusters created with 2.0+ image versions: dataproc:diagnostic.capture.enabled : Collects checkpoint diagnostic data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Collects logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Collects VM syslogs in Cloud Logging .
- The dataproc:dataproc.logging.stackdriver.job.yarn.container.enable service property can now be used to enable sending YARN container logs to Stackdriver.

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The following cluster property settings are also required to enable job driver logs in Logging, and are set by default when a cluster is created: dataproc:dataproc.logging.stackdriver.enable=true and dataproc:jobs.file-backed-output.enable=true dataproc:dataproc.logging.stackdriver.job.yarn.container.enable true or false false Must be set at cluster creation time.
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs. spark: spark.submit.deployMode dataproc: dataproc.logging.stackdriver.job.driver.enable dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Driver Output client false (default) true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging client true true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource cluster false (default) false Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource cluster true true Not streamed to client Not in Cloud Storage In Logging: dataproc.job.yarn.container under the job resource Spark executor logs The following tables list the effect of different property settings on the destination of Spark executor logs. dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Executor log false (default) In Logging: yarn-userlogs under the cluster resource true In Logging dataproc.job.yarn.container under the job resource Spark jobs submitted without using the Managed Service for Apache Spark jobs API This section lists the effect of different property settings on the destination of Spark job logs when jobs are submitted without using the Managed Service for Apache Spark jobs API, for example when submitting a job directly on a cluster node using spark-submit or when using a Jupyter or Zeppelin notebook.
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs for jobs not submitted through the Managed Service for Apache Spark jobs API. spark: spark.submit.deployMode Driver Output client Streamed to client Not in Cloud Storage Not in Logging cluster Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource Spark executor logs When Spark jobs are not submitted through the Managed Service for Apache Spark jobs API, executor logs are in Logging yarn-userlogs under the cluster resource.
- The Spark driver runs the job on the Managed Service for Apache Spark cluster in Spark client or cluster mode : client mode: the Spark driver runs the job in the spark-submit process, and Spark logs are sent to the Managed Service for Apache Spark job driver. cluster mode: the Spark driver runs the job in a YARN container.

### "Enable GKE logging \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can search for Spark driver and executor logs in Cloud Logging using the following labels: dataproc.googleapis.com/cluster-uuid = Managed Service for Apache Spark cluster UUID dataproc.googleapis.com/job-uuid = Managed Service for Apache Spark job UUID dataproc.googleapis.com/role Sample queries: labels."k8s-pod/dataproc googleapis com/cluster-uuid"=" Managed Service for Apache Spark cluster UUID " labels."k8s-pod/dataproc googleapis com/job-uuid"=" Managed Service for Apache Spark job UUID " labels."k8s-pod/dataproc googleapis com/role"="driver" What's next Learn how to access Managed Service for Apache Spark on GKE job and cluster logs in Logging .
- Job driver logs See Managed Service for Apache Spark job logs in Logging for information on configuring and viewing Managed Service for Apache Spark on GKE Spark job driver logs.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Enable GKE logging Stay organized with collections Save and categorize content based on your preferences.
- Cloud Logging Enable Logging to view, search, filter, and archive Managed Service for Apache Spark on GKE logs in Cloud Logging.

