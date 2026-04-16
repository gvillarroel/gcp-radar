---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.978Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "BeyondCorp Enterprise integration for Cloud Workstations API"
feature_slug: "beyondcorp-enterprise-integration-for-cloud-workstations-api"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise"
  - "https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api"
  - "https://docs.cloud.google.com/workstations/docs/authentication"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
keywords:
  - "beyondcorp"
  - "enterprise"
  - "integration"
  - "for"
  - "workstations"
  - "api"
  - "supports"
  - "the"
---

# BeyondCorp Enterprise integration for Cloud Workstations API

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports BeyondCorp Enterprise integration for the Cloud Workstations API; Cloud Workstations supports BeyondCorp Enterprise integration for the Cloud Workstations API.

## Extended Definition

Cloud Workstations supports BeyondCorp Enterprise integration for the Cloud Workstations API; Cloud Workstations supports BeyondCorp Enterprise integration for the Cloud Workstations API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise](https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise)
- [https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api](https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api)
- [https://docs.cloud.google.com/workstations/docs/authentication](https://docs.cloud.google.com/workstations/docs/authentication)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)

## Supporting Pages

### "Help secure the Cloud Workstations API using Chrome Enterprise Premium \_\

- URL: [https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise](https://docs.cloud.google.com/workstations/docs/tutorial-help-secure-workstations-api-using-beyondcorp-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Workstations access Chrome Enterprise Premium context-aware access control Google Cloud console gcloud CLI: Create, Edit, Delete resource gcloud CLI: SSH API: REST API: RPC API: Client Libraries API: browser access HTTP: browser access HTTP: SSH HTTP: local JetBrains IDEs HTTP: local VS Code Objectives This document describes the steps that an administrator follows to set up Chrome Enterprise Premium access control for the Cloud Workstations API and to provide additional mechanisms that help prevent source code exfiltration from browser-based Cloud Workstations IDEs.
- Enable Chrome Enterprise Premium CAA for Google Cloud console To assign context-aware access controls (CAA) to workstations, start by enabling CAA for Google Cloud console: From the Google Cloud console , navigate to Security > BeyondCorp Enterprise .
- Part 1: Set up Chrome Enterprise Premium for Cloud Workstations This section takes you through the steps to help you secure context-aware access to the Cloud Workstations API: Set up Cloud Workstations .
- Using context-aware access control for Google Cloud console and APIs, Chrome Enterprise Premium enables additional security for the Cloud Workstations API.

### Authenticate to the Cloud Workstations API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api](https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're new to the Cloud Workstations API, make sure that you read the following sections first: Before you begin Access control with IAM Authenticate and setup API access within a workstation For more information about Google Cloud authentication, see the Authentication methods .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Cloud Workstations client libraries provide high-level language support for authenticating to Cloud Workstations programmatically.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .

### "Authenticate and setup API access within a workstation \_|\_ Cloud Workstations\

- URL: [https://docs.cloud.google.com/workstations/docs/authentication](https://docs.cloud.google.com/workstations/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- To impersonate the service account specified on your workstation configuration, you can specify the service account scopes field. gcloud workstations configs create CONFIG \ --cluster= CLUSTER \ --region= REGION \ --project= PROJECT \ --service-account= SERVICE ACCOUNT \ --service-account-scopes=https://www.googleapis.com/auth/cloud-platform When specified, users of workstations under this configuration must have iam.serviceAccounts.actAs permission on the service account.
- Issue an HTTP request to a workstation To issue an HTTP request to a workstation, you need an access token for an account that has the Cloud Workstations User role on that workstation: Generate an access token using the generateAccessToken API method.
- Connect to the workstation in your browser Opening your workstation URL in your browser automatically authenticates through a redirect to the workstations server, and retrieves an access token generated by the generateAccessToken API method.
- Home Documentation Application development Cloud Workstations Guides Send feedback Authenticate and setup API access within a workstation Stay organized with collections Save and categorize content based on your preferences.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 async def sample list usable workstation configs(): Create a client client = workstations v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 async def sample create workstation cluster(): Create a client client = workstations v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 async def sample delete workstation cluster(): Create a client client = workstations v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import workstations v1 async def sample update workstation cluster(): Create a client client = workstations v1 .

