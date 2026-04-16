---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.640Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Jupyter notebook PDF export"
feature_slug: "jupyter-notebook-pdf-export"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/networking"
keywords:
  - "jupyter"
  - "notebook"
  - "pdf"
  - "export"
  - "dataproc"
  - "supports"
  - "exporting"
  - "notebooks"
---

# Jupyter notebook PDF export

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Jupyter on Dataproc supports exporting notebooks as PDF files.

## Extended Definition

Jupyter on Dataproc supports exporting notebooks as PDF files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)
- Source ID: `site-docs-root-2`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM services in the customer's network can access Dataproc Metastore service resources in any region if the Google Cloud service supports it.
- To explicitly allow Dataproc Metastore traffic, run the following gcloud commands: gcloud compute firewall-rules create dpms-allow-egress- DPMS NETWORK - REGION --allow tcp --destination-ranges DPMS NET PREFIX /17 --network DPMS NETWORK --direction OUT gcloud compute firewall-rules create dpms-allow-ingress- DPMS NETWORK - REGION --allow tcp,udp --source-ranges DPMS NET PREFIX /17 --network DPMS NETWORK For DPMS NET PREFIX , apply a /17 subnet mask to your Dataproc Metastore service IP.
- What's next VPC Service Controls with Dataproc Metastore Dataproc Metastore Identity and Access Management (IAM) and access control Private Service Connect with Dataproc Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Dataproc Metastore requires the following per region for each VPC network: 1 peering quota /17 and /20 CIDR VPC Network Peering After the VPC network is created, Dataproc Metastore also automatically configures VPC Network Peering for your service.

### Export metadata from Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata)
- Source ID: `site-docs-root-2`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export metadata Before exporting your metadata, note the following considerations: While an export is running, you can't update a Dataproc Metastore service — for example changing configuration settings.
- About exporting metadata When you export metadata from Dataproc Metastore, the service stores the data in one of the following file formats: A set of Avro files stored in a folder.
- Required roles To get the permissions that you need to export metadata into Dataproc Metastore, ask your administrator to grant you the following IAM roles: To export metadata, either: Dataproc Metastore Editor ( roles/metastore.editor ) on the Dataproc Metastore service Dataproc Metastore Administrator ( roles/metastore.admin ) on the Dataproc Metastore service Dataproc Metastore Metadata Operator ( roles/metastore.metadataOperator ) on the Dataproc Metastore service For MySQL and Avro, to use the Cloud Storage object for export: grant your user account and the Dataproc Metastore service agent the Storage Creator role ( roles/storage.objectCreator ) on the Cloud Storage bucket For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to export metadata into Dataproc Metastore: To export metadata: metastore.services.export on the metastore service For MySQL and Avro, to use the Cloud Storage object for export, grant your user account and the Dataproc Metastore service agent: storage.objects.create on the Cloud Storage bucket You might also be able to get these permissions with custom roles or other predefined roles .

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When exporting, the exported database dump is protected according to the destination storage bucket's CMEK settings.
- Grant Cloud KMS key permissions Use the following commands to grant Cloud KMS key permissions for Dataproc Metastore: Grant permissions to the Dataproc Metastore Service Agent service account: gcloud kms keys add-iam-policy-binding KEY NAME \ --location LOCATION \ --keyring KEY RING \ --member=serviceAccount:$(gcloud beta services identity create \ --service=metastore.googleapis.com 2>&1 awk '{print $4}') \ --role=roles/cloudkms.cryptoKeyEncrypterDecrypter Grant permissions to the Cloud Storage service account: gcloud storage service-agent --authorize-cmek projects/ KEY PROJECT /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME Create a single-region service with a CMEK key Use the following steps to configure CMEK encryption for a single-region Dataproc Metastore service.
- Note: You must create your CMEK key in the same region where your Dataproc Metastore service is located. gcloud kms keyrings create KEY RING \ --project= PROJECT ID \ --location= LOCATION Replace the following: KEY RING : a name for your key ring.
- Import and export data from and to a CMEK-enabled service If you want your data to remain encrypted with a customer-managed key during an import, you must set CMEK on the Cloud Storage bucket before importing data from it.

