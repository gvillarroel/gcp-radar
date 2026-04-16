---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.196Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Customer-managed encryption keys on BigQuery"
feature_slug: "customer-managed-encryption-keys-on-bigquery"
latest_feature_date: "2018-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
keywords:
  - "customer"
  - "encryption"
  - "managed"
  - "keys"
---

# Customer-managed encryption keys on BigQuery

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc can use customer-managed encryption keys to access protected BigQuery datasets and tables.

## Extended Definition

Dataproc can use customer-managed encryption keys to access protected BigQuery datasets and tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Under Encryption , click Customer-managed encryption key (CMEK) .

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Using customer-managed encryption keys .
- To select a customer-managed key, click Use a customer-managed encryption key (CMEK) .
- The default selected option is Google-managed encryption key .
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish Managed Service for Apache Spark clusters and jobs owned by different teams (for example, team:research and team:analytics ).
- If you want to examine the JSON body of a Dataproc API cluster create or job submit request, you can construct the request on the appropriate Managed Service for Apache Spark page of the Google Cloud console, then click the Equivalent REST button at the bottom of the page.

