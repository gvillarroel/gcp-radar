---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.049Z"
product_name: "Cloud Shell"
product_slug: "cloud-shell"
feature_name: "Duet AI for Cloud Shell"
feature_slug: "duet-ai-for-cloud-shell"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails"
  - "https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode"
  - "https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient"
keywords:
  - "duet"
  - "ai"
  - "for"
  - "shell"
  - "provides"
  - "contextualized"
  - "coding"
  - "assistance"
---

# Duet AI for Cloud Shell

Product: Cloud Shell
Coverage: MEDIUM

## Step 02 Summary

Duet AI for Cloud Shell provides contextualized coding assistance and source-cited responses in the Cloud Shell editor.

## Extended Definition

Duet AI for Cloud Shell provides contextualized coding assistance and source-cited responses in the Cloud Shell editor.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient)

## Supporting Pages

### "Class CloudShellErrorDetails (1.15.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails)
- Source ID: `site-python-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- 1.15.0 (latest) 1.14.0 1.13.0 1.12.0 1.11.0 1.10.1 1.9.5 1.8.0 1.7.2 1.6.1 1.5.0 1.4.3 1.3.3 1.2.2 1.1.0 1.0.1 0.2.2 0.1.0 CloudShellErrorDetails ( mapping = None , , ignore unknown fields = False , kwargs ) Cloud-shell specific information that will be included as details in failure responses.
- Home Documentation Developer tools Python Client libraries Send feedback Class CloudShellErrorDetails (1.15.0) Stay organized with collections Save and categorize content based on your preferences.
- Attribute Name Description code google.cloud.shell v1.types.CloudShellErrorDetails.CloudShellErrorCode Code indicating the specific error the occurred.
- For details, see the Google Developers Site Policies .

### "Class CloudShellErrorCode (1.15.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.CloudShellErrorDetails.CloudShellErrorCode)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IMAGE UNAVAILABLE The image used by the Cloud Shell environment either does not exist or the user does not have access to it.
- ENVIRONMENT UNAVAILABLE The Cloud Shell environment is unavailable and cannot be connected to at the moment.
- CLOUD SHELL DISABLED Cloud Shell has been disabled by an administrator for the user making the request.
- For details, see the Google Developers Site Policies .

### "Class CloudShellServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizeEnvironmentRequest ( ) Make the request operation = client. authorize environment (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.shell v1.types.AuthorizeEnvironmentRequest , dict]] The request object.
- StartEnvironmentRequest ( ) Make the request operation = client. start environment (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.shell v1.types.StartEnvironmentRequest , dict]] The request object.
- RemovePublicKeyRequest ( ) Make the request operation = client. remove public key (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.shell v1.types.RemovePublicKeyRequest , dict]] The request object.
- AddPublicKeyRequest ( ) Make the request operation = client. add public key (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.shell v1.types.AddPublicKeyRequest , dict]] The request object.

### "Class CloudShellServiceClient (1.15.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.services.cloud_shell_service.CloudShellServiceClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizeEnvironmentRequest ( ) Make the request operation = client. authorize environment (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.shell v1.types.AuthorizeEnvironmentRequest , dict] The request object.
- StartEnvironmentRequest ( ) Make the request operation = client. start environment (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.shell v1.types.StartEnvironmentRequest , dict] The request object.
- RemovePublicKeyRequest ( ) Make the request operation = client. remove public key (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.shell v1.types.RemovePublicKeyRequest , dict] The request object.
- AddPublicKeyRequest ( ) Make the request operation = client. add public key (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.shell v1.types.AddPublicKeyRequest , dict] The request object.

