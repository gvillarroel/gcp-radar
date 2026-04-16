---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.664Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberos component"
feature_slug: "kerberos-component"
latest_feature_date: "2019-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
keywords:
  - "kerberos"
  - "component"
  - "enables"
  - "hadoop"
  - "secure"
  - "mode"
  - "provide"
  - "user"
---

# Kerberos component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Kerberos component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters; The Kerberos top-level component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters.

## Extended Definition

The Kerberos component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters; The Kerberos top-level component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- JSON representation { "enableSecureBoot" : boolean , "enableVtpm" : boolean , "enableIntegrityMonitoring" : boolean } Fields enableSecureBoot boolean Optional.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity Config Identity related configuration, including service account based secure multi-tenancy user mappings. com. google. cloud. dataproc. v1.
- Builder Identity related configuration, including service account based secure multi-tenancy user mappings. com. google. cloud. dataproc. v1.
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Node Group Controller Client Service Description: The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- After you create your cluster, Dataproc Metastore attempts to connect with your Kerberos credentials using the provided principal, keytab, and krb5.conf file.
- Required Roles To get the permission that you need to create a Dataproc Metastore with Kerberos, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

