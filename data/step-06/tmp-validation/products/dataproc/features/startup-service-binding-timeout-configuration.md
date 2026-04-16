---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.179Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Startup service-binding timeout configuration"
feature_slug: "startup-service-binding-timeout-configuration"
latest_feature_date: "2020-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
keywords:
  - "binding"
  - "startup"
  - "configuration"
  - "timeout"
  - "configure"
  - "users"
  - "lets"
---

# Startup service-binding timeout configuration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc lets users configure how long startup scripts wait for key services to bind to ports before considering startup successful.

## Extended Definition

Dataproc lets users configure how long startup scripts wait for key services to bind to ports before considering startup successful.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Node Initialization Action Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.
- Builder Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.
- Startup Config Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Builder Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.
- Create Dataproc Metastore using default settings Creating a Dataproc Metastore using the default settings configures your service with an enterprise tier, a medium instance size, the latest version of the Hive metastore, a Thrift endpoint, and a data location of us-central1 .
- Create Dataproc Metastore using advanced settings Creating a Dataproc Metastore using the advanced settings shows you how to modify configurations such as network configurations, scaling settings, endpoint settings, security settings, and optional features.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- Use the project ID and number of the project that contains the Cloud Storage bucket. gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \ --role roles/storage.objectViewer Create a Dataproc Metastore service with Kerberos Create a new Dataproc Metastore service that's configured with your Kerberos files.
- This lets users run queries to access data, such as select from .
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.

