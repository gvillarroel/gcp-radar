---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.459Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "400 MB zip file support"
feature_slug: "400-mb-zip-file-support"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
keywords:
  - "400"
  - "mb"
  - "zip"
  - "file"
  - "raises"
  - "maximum"
  - "assessment"
  - "size"
---

# 400 MB zip file support

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Raises the maximum supported assessment zip file size to 400 MB.

## Extended Definition

Raises the maximum supported assessment zip file size to 400 MB.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)

## Supporting Pages

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to determine the values for MACHINE TYPE and DISK SIZE based on the expected size of your assessment data: Assessment zip file size MACHINE TYPE DISK SIZE Smaller than 5MB e2-standard-4 100GB Between 5MB and 50MB e2-standard-8 100GB Larger than 50MB, or multiple assessments in parallel e2-highmem-16 300GB Enable Workload Identity Federation for GKE on clusters and node pools .
- Assessment zip file size MACHINE TYPE DISK SIZE Smaller than 5MB e2-standard-4 100GB Between 5MB and 50MB e2-standard-8 100GB Larger than 50MB, or multiple assessments in parallel e2-highmem-16 300GB If you've configured the firewall in your project to allow IAP tunnels only for VMs with certain network tags, then you can also add the network tags using the --tags flag.
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- Use the following table to determine the values for MACHINE TYPE and DISK SIZE based on the expected size of your assessment data.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to determine the values for MACHINE TYPE and DISK SIZE based on the expected size of your assessment data: Assessment zip file size MACHINE TYPE DISK SIZE Smaller than 5MB e2-standard-4 100GB Between 5MB and 50MB e2-standard-8 100GB Larger than 50MB, or multiple assessments in parallel e2-highmem-16 300GB Enable Workload Identity Federation for GKE on clusters and node pools .
- Assessment zip file size MACHINE TYPE DISK SIZE Smaller than 5MB e2-standard-4 100GB Between 5MB and 50MB e2-standard-8 100GB Larger than 50MB, or multiple assessments in parallel e2-highmem-16 300GB If you've configured the firewall in your project to allow IAP tunnels only for VMs with certain network tags, then you can also add the network tags using the --tags flag.
- Go to the Google Cloud console To create a Mainframe Assessment Tool VM instance, run the following command: gcloud compute instances create mainframe - assessment - tool - 1 - instance \ -- machine - type = MACHINE TYPE \ -- service - account = SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ -- scopes = cloud - platform -- image - project = migrate - modernize - public \ -- image - family = mainframe - assessment - tool -- zone = ZONE \ -- boot - disk - size = DISK SIZE Replace the following: MACHINE TYPE : the machine type of the VM.
- Use the following table to determine the values for MACHINE TYPE and DISK SIZE based on the expected size of your assessment data.

### "Create and update assessments \_|\_ Mainframe Assessment Tool \_|\_ Google\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment](https://docs.cloud.google.com/mainframe-assessment-tool/docs/perform-assessment)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Assessment Tool supports only zip files with a maximum size of 400 MB.
- Before you begin To prepare for your assessment, make sure that you have completed the following prerequisites: Configure your Google Cloud project for Mainframe Assessment Tool Set up and access Mainframe Assessment Tool Upload your mainframe application files to Mainframe Assessment Tool To upload the application files to Mainframe Assessment Tool, follow these steps: Create a zip file containing all the applications that you want to migrate.
- To upload the zip file to Mainframe Assessment Tool, follow these steps: To open Mainframe Assessment Tool on your local machine, open a web browser window and go to http://localhost: PORT .
- If you see errors after importing your file, you can review the error message directly in Mainframe Assessment Tool.

