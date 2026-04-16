---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.631Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Jupyter local persistent disk notebook storage"
feature_slug: "jupyter-local-persistent-disk-notebook-storage"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
keywords:
  - "jupyter"
  - "local"
  - "persistent"
  - "disk"
  - "notebook"
  - "storage"
  - "dataproc"
  - "supports"
---

# Jupyter local persistent disk notebook storage

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks.

## Extended Definition

Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster.
- The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption.

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It contains the primary node's hostname in it. (Optional) Add a new principal To add a new principal, run the following command. sudo kadmin.local -q "addprinc -randkey PRINCIPAL" sudo kadmin.local -q "ktadd -k /etc/security/keytab/hive.service.keytab PRINCIPAL" Get the Kerberos ticket. sudo klist -kte /etc/security/keytab/hive.service.keytab sudo kinit -kt /etc/security/keytab/hive.service.keytab PRINCIPAL sudo klist sudo hive What's next Access a service Update and delete a service Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required Roles To get the permission that you need to create a Dataproc Metastore configured with Kerberos , ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) Grant gRPC read-write access to Dataproc Metastore metadata ( roles/metastore.metadataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- These values are all created using default names and settings set by the Managed Service for Apache Spark cluster. gcloud gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version 2.0-debian10 \ --dataproc-metastore DATAPROC METASTORE NAME \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- Example: gcloud dataproc jobs submit spark ...\ --file gs://my-bucket/path/spark-log4j.properties \ --properties spark.executor.extraJavaOptions=-Dlog4j.configuration=file:spark-log4j.properties Spark downloads the Cloud Storage properties file to the job's local working directory, referenced as file:<name> in -Dlog4j.configuration .
- Example: Set the DEBUG logging level when submitting a Spark job that reads Cloud Storage files. gcloud dataproc jobs submit spark ...\ --driver-log-levels org.apache.spark=DEBUG,com.google.cloud.hadoop.gcsio=DEBUG Example: Set the root logger level to WARN , com.example logger level to INFO . gcloud dataproc jobs submit hadoop ...\ --driver-log-levels root=WARN,com.example=INFO Spark executor logging levels To configure Spark executor logging levels: Prepare a log4j config file, and then upload it to Cloud Storage Copy and customize the default log4j config located in /etc/spark/conf/ .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.

