---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:06:50.443Z"
product_name: "Mainframe Assessment Tool"
product_slug: "mainframe-assessment-tool"
feature_name: "FTP script parsing"
feature_slug: "ftp-script-parsing"
latest_feature_date: "2026-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm"
  - "https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results"
keywords:
  - "ftp"
  - "script"
  - "parsing"
  - "detects"
  - "parses"
  - "scripts"
  - "improve"
  - "jcl"
---

# FTP script parsing

Product: Mainframe Assessment Tool
Coverage: MEDIUM

## Step 02 Summary

Detects and parses FTP scripts to improve JCL specification accuracy for jobs with file transfer steps.

## Extended Definition

Detects and parses FTP scripts to improve JCL specification accuracy for jobs with file transfer steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)

## Supporting Pages

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-instance)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- Grant read, write, and execute permissions on the destination directory: chmod -R u+rwx DESTINATION DIRECTORY Extract the downloaded scripts: cd DESTINATION DIRECTORY && unzip kustomize deployment.zip Replace DESTINATION DIRECTORY with the directory where you downloaded the deployment scripts.
- In your environment, create a directory for the deployment scripts: mkdir DESTINATION DIRECTORY Replace DESTINATION DIRECTORY with a name for the directory.
- DESTINATION DIRECTORY : the destination directory on your machine where the script is downloaded.

### Set up and access Mainframe Assessment Tool \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm](https://docs.cloud.google.com/mainframe-assessment-tool/docs/create-vm)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To download the deployment scripts, run the following command: gcloud storage cp "gs://mainframe-ai-release/mat/ VERSION /kustomize deployment.zip" DESTINATION DIRECTORY Replace the following: VERSION : the version of Mainframe Assessment Tool that you want to install, for example, mainframe-assessment-2-8-0 .
- Grant read, write, and execute permissions on the destination directory: chmod -R u+rwx DESTINATION DIRECTORY Extract the downloaded scripts: cd DESTINATION DIRECTORY && unzip kustomize deployment.zip Replace DESTINATION DIRECTORY with the directory where you downloaded the deployment scripts.
- In your environment, create a directory for the deployment scripts: mkdir DESTINATION DIRECTORY Replace DESTINATION DIRECTORY with a name for the directory.
- DESTINATION DIRECTORY : the destination directory on your machine where the script is downloaded.

### "View and understand assessment results \_|\_ Mainframe Assessment Tool \_\

- URL: [https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results](https://docs.cloud.google.com/mainframe-assessment-tool/docs/review-results)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists different report types and their description: Report type Description Details Inventory Provides details about the number of files, code lines, and program types, including scheduler configuration files (BMC Control-M).
- For COBOL programs, the Output fields page provides a summary of specific data fields that a program generates and their descriptions.
- To get an AI-generated description of your application's business domains, follow these steps: Click Domains .
- These descriptions include the purpose, logic, processing data, data flow, and data dependencies.

