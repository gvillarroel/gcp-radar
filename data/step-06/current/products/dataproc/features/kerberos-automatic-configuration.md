---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.070Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberos automatic configuration"
feature_slug: "kerberos-automatic-configuration"
latest_feature_date: "2020-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "kerberos"
  - "automatic"
  - "configuration"
  - "dataproc"
  - "can"
  - "automatically"
  - "configure"
  - "during"
---

# Kerberos automatic configuration

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags.

## Extended Definition

Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Change Dataproc on Compute Engine: Dataproc now automatically configures Knox Gateway configuration properties gateway.dispatch.whitelist.services and gateway.dispatch.whitelist for component web UIs within the cluster.
- January 30, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.89 1.2.33 2.2.33 Change Dataproc on Compute Engine: Private Google Access is now automatically enabled in the configured subnetwork when creating clusters with internal IP addresses .
- Announcement Announcing the General Availability (GA) release of the Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.
- August 28, 2020 Feature Launched Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you change your endpoint to gRPC, this value automatically changes to 443 and can't be changed. (Optional) For Dataproc Metastore 1.
- You can sign in by executing gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI.
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Startup Config Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Builder Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Security Config Security related configuration, including encryption, Kerberos, etc. com. google. cloud. dataproc. v1.
- Builder Security related configuration, including encryption, Kerberos, etc. com. google. cloud. dataproc. v1.

