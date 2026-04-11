---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.081Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberos support in Component Gateway"
feature_slug: "kerberos-support-in-component-gateway"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
keywords:
  - "kerberos"
  - "in"
  - "component"
  - "gateway"
  - "supports"
  - "dataproc"
  - "clusters"
  - "secured"
---

# Kerberos support in Component Gateway

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Component Gateway supports Dataproc clusters secured with Kerberos.

## Extended Definition

Component Gateway supports Dataproc clusters secured with Kerberos.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Change New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9, 1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18 Change Added a warning when clusters are created with component gateway and kerberos as they are not currently supported together Change 1.3 image update - Upgraded Hive to version 2.3.6 Change 1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs Change 1.5 preview image update: Updated Anaconda to version 2019.10 Updated Miniconda to version 4.7.12.1 Upgrade Hue to version 4.5.0 Upgraded Scala to version 2.12.10 Upgrade Hadoop to version 2.10.0 Unset java.net.preferIPv4Stack=true property in Hadoop November 26, 2019 Issue 1.3 and 1.4 images: Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation.
- Feature Image 1.3, 1.4 and 1.5 Added Component Gateway support for Dataproc clusters secured with Kerberos.
- Announcement Dataproc on Compute Engine: Starting August 18, 2025, the following diagnostic properties will be enabled by default for newly created Dataproc clusters: dataproc:diagnostic.capture.enabled : Enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Enables the collection of logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Enables the collection of VM syslogs in Cloud Logging .
- Change Dataproc on Compute Engine: The following diagnostic properties are now enabled by default for new Dataproc clusters created with 2.0+ image versions: dataproc:diagnostic.capture.enabled : Collects checkpoint diagnostic data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Collects logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Collects VM syslogs in Cloud Logging .

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Async Service The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.
- Confidential Instance Config Confidential Instance Config for clusters using Confidential VMs com. google. cloud. dataproc. v1.

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- These values are all created using default names and settings set by the Managed Service for Apache Spark cluster. gcloud gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version 2.0-debian10 \ --dataproc-metastore DATAPROC METASTORE NAME \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Required Roles To get the permission that you need to create a Dataproc Metastore configured with Kerberos , ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) Grant gRPC read-write access to Dataproc Metastore metadata ( roles/metastore.metadataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Configure Kerberos for Dataproc Metastore gRPC endpoints Stay organized with collections Save and categorize content based on your preferences.

