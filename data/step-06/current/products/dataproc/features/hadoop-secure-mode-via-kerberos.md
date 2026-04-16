---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.661Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Hadoop Secure Mode via Kerberos"
feature_slug: "hadoop-secure-mode-via-kerberos"
latest_feature_date: "2019-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
keywords:
  - "hadoop"
  - "secure"
  - "mode"
  - "via"
  - "kerberos"
  - "provides"
  - "user"
  - "authentication"
---

# Hadoop Secure Mode via Kerberos

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Hadoop Secure Mode via Kerberos provides user authentication, isolation, and encryption inside a Dataproc cluster.

## Extended Definition

Hadoop Secure Mode via Kerberos provides user authentication, isolation, and encryption inside a Dataproc cluster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity Config Identity related configuration, including service account based secure multi-tenancy user mappings. com. google. cloud. dataproc. v1.
- Builder Identity related configuration, including service account based secure multi-tenancy user mappings. com. google. cloud. dataproc. v1.
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Node Group Controller Client Service Description: The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances.

### "Enum AuthenticationConfig.AuthenticationType (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTHENTICATION TYPE UNSPECIFIED If AuthenticationType is unspecified then END USER CREDENTIALS is used for 3.0 and newer runtimes, and SERVICE ACCOUNT is used for older runtimes.
- AUTHENTICATION TYPE UNSPECIFIED = 0; AUTHENTICATION TYPE UNSPECIFIED VALUE If AuthenticationType is unspecified then END USER CREDENTIALS is used for 3.0 and newer runtimes, and SERVICE ACCOUNT is used for older runtimes.
- AUTHENTICATION TYPE UNSPECIFIED = 0; END USER CREDENTIALS Use OAuth credentials associated with the workload creator/user for authenticating to other services.
- 4.85.0 (latest) 4.84.0 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1 public enum AuthenticationConfig .

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket The following instructions show you how to generate a Kerberos ticket.
- Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- It contains the primary node's hostname in it. (Optional) Add a new principal To add a new principal, run the following command. sudo kadmin.local -q "addprinc -randkey PRINCIPAL" sudo kadmin.local -q "ktadd -k /etc/security/keytab/hive.service.keytab PRINCIPAL" Get the Kerberos ticket. sudo klist -kte /etc/security/keytab/hive.service.keytab sudo kinit -kt /etc/security/keytab/hive.service.keytab PRINCIPAL sudo klist sudo hive What's next Access a service Update and delete a service Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required Roles To get the permission that you need to create a Dataproc Metastore configured with Kerberos , ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) Grant gRPC read-write access to Dataproc Metastore metadata ( roles/metastore.metadataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .

