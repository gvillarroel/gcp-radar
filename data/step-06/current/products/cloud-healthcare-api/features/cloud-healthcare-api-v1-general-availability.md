---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.128Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Cloud Healthcare API v1 general availability"
feature_slug: "cloud-healthcare-api-v1-general-availability"
latest_feature_date: "2020-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/fhir"
  - "https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox"
  - "https://docs.cloud.google.com/healthcare-api/docs/cmek"
keywords:
  - "healthcare"
  - "v1"
  - "availability"
  - "reached"
  - "release"
  - "version"
---

# Cloud Healthcare API v1 general availability

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API reached general availability with release version v1.

## Extended Definition

Cloud Healthcare API reached general availability with release version v1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/fhir](https://docs.cloud.google.com/healthcare-api/docs/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox](https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox)
- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)

## Supporting Pages

### "Use the Cloud Healthcare API with MCP and other agents \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox](https://docs.cloud.google.com/healthcare-api/docs/tutorials/pre-built-tools-with-mcp-toolbox)
- Source ID: `site-docs-root-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make the binary executable: chmod +x toolbox Verify the installation: ./toolbox --version Set up clients and connections This section explains how to connect the Cloud Healthcare API to your tools.
- The following tools are available to the LLM: get dataset : Retrieves a dataset's details. list datasets : Lists health datasets in a project. list fhir stores : Lists the FHIR stores in the given dataset. list dicom stores : Lists the DICOM stores in the given dataset. get fhir store : Gets the configuration of the specified FHIR store. get fhir store metrics : Gets metrics associated with the FHIR store. get fhir resource : Gets the contents of a FHIR resource. get fhir resource version : Gets the contents of a version (current or historical) of a FHIR resource. fhir patient everything : Retrieves a FHIR Patient resource and resources related to that patient. fhir patient search : Searches for FHIR patient resources in the FHIR store according to criteria specified. get dicom store : Gets the configuration of the specified DICOM store. get dicom store metrics : Gets metrics associated with the DICOM store. search dicom studies : Returns a list of matching DICOM studies. search dicom series : Returns a list of matching DICOM series. search dicom instances : Returns a list of matching DICOM instances. retrieve dicom instance rendered : Returns a base64-encoding of a rendered image in JPEG format for a DICOM instance associated with the given study, series, and SOP Instance UID.
- You must use MCP Toolbox version v0.19.1 or later: linux/amd64 curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /linux/amd64/toolbox Replace VERSION with the MCP Toolbox version—for example v0.19.1 . macOS darwin/arm64 curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /darwin/arm64/toolbox Replace VERSION with the MCP Toolbox version—for example v0.19.1 . macOS darwin/amd64 curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /darwin/amd64/toolbox Replace VERSION with the MCP Toolbox version—for example v0.19.1 . windows/amd64 curl -O https://storage.googleapis.com/genai-toolbox/ VERSION /windows/amd64/toolbox Replace VERSION with the MCP Toolbox version—for example v0.19.1 .
- Add the following configuration, replace the environment variables with your values, and save: { "mcpServers": { "healthcare": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","cloud-healthcare","--stdio"], "env": { "HEALTHCARE PROJECT": " PROJECT ID ", "HEALTHCARE REGION": " REGION ", "HEALTHCARE DATASET": " DATASET ID " } } } } Note: The HEALTHCARE PROJECT environment variable specifies the default Google Cloud Project ID for the MCP Toolbox to use.

### "FHIR conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/fhir](https://docs.cloud.google.com/healthcare-api/docs/fhir)
- Source ID: `site-api-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The v1 API supports the following versions: R5 version 5.0.0 (Release 5) R4 version 4.0.1 (Release 4) STU3 version 3.0.1 (Release 3 - Standard for Trial Use) DSTU2 version 1.0.2 (Draft Standard for Trial Use) When you create a FHIR store, you specify the FHIR version as a parameter to the fhirStores.create method.
- FHIR stores within the Cloud Healthcare API support multiple versions of the Fast Healthcare Interoperability Resources ( FHIR ) specification published by Health Level 7 International ( HL7 ).
- For example, the DSTU2 conformance interaction is different from the STU3 capabilities interaction but both share the /fhir/metadata REST path, so that path returns different responses based on the FHIR version of the store.
- Home Documentation Industry solutions Cloud Healthcare API Reference Send feedback FHIR conformance statement Stay organized with collections Save and categorize content based on your preferences.

### "Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The following process describes how key availability is checked, and how a dataset can be disabled and deleted: After a CMEK-encrypted Cloud Healthcare API dataset is created, the Cloud Healthcare API checks the key's status every five minutes to ensure the key is available.
- Key unavailability and data loss If a dataset is encrypted by a key, and that key becomes unavailable and remains unavailable, the Cloud Healthcare API disables and eventually deletes the dataset.
- Rotating a key results in the following: Cloud Healthcare API datasets created after the rotation use the new key version for encryption and all operations.
- After you destroy a key or key version associated with a Cloud Healthcare API dataset, all data encrypted with that key or key version is permanently lost.

