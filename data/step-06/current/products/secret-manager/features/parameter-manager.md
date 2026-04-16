---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.878Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Parameter Manager"
feature_slug: "parameter-manager"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/overview"
  - "https://docs.cloud.google.com/secret-manager/docs/locations"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
keywords:
  - "parameter"
  - "manager"
  - "stores"
  - "accesses"
  - "and"
  - "manages"
  - "the"
  - "lifecycle"
---

# Parameter Manager

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Parameter Manager stores, accesses, and manages the lifecycle of workload parameters; Parameter Manager stores, accesses, and manages the lifecycle of workload parameters.

## Extended Definition

Parameter Manager stores, accesses, and manages the lifecycle of workload parameters; Parameter Manager stores, accesses, and manages the lifecycle of workload parameters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)

## Supporting Pages

### Secret Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage operational parameters for your applications using Parameter Manager : Parameter Manager is an extension to the Secret Manager service that you can use to store and manage application configurations such as database connection strings, feature flags, environment names, port numbers to listen on, and settings for application features.
- Secret Manager manages server-side encryption keys on your behalf using the same hardened key management systems that we use for our own encrypted data, including strict key access controls and auditing.
- To use Parameter Manager, you must enable the Parameter Manager API and grant your users the required IAM roles .
- Using Secret Manager, you can do the following: Manage rollback, recovery, and auditing using versions : Versions help you manage gradual rollouts and emergency rollback, If a secret is accidentally changed or compromised, you can revert to a previous, known-good version.

### Secret Manager locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Regional Secret Manager Parameter Manager europe-west1 (Belgium) Yes Yes europe-west10 (Berlin) Yes No europe-north1 (Finland) No No europe-north2 (Stockholm) Yes No europe-west3 (Frankfurt) Yes Yes europe-west2 (London) Yes Yes europe-southwest1 (Madrid) Yes Yes europe-west8 (Milan) Yes Yes europe-west4 (Netherlands) Yes Yes europe-west12 (Turin) Yes No europe-west9 (Paris) Yes Yes europe-central2 (Warsaw) Yes Yes europe-west6 (Zurich) Yes Yes Locations in North America The following table lists the locations in North America where Secret Manager and Parameter Manager resources can be stored.
- Region Regional Secret Manager Parameter Manager asia-south2 (Delhi) Yes Yes asia-east2 (Hong Kong) Yes Yes asia-southeast2 (Jakarta) Yes No australia-southeast2 (Melbourne) Yes Yes asia-south1 (Mumbai) Yes Yes asia-northeast2 (Osaka) Yes Yes asia-northeast3 (Seoul) Yes Yes asia-southeast1 (Singapore) Yes No australia-southeast1 (Sydney) Yes Yes asia-east1 (Taiwan) Yes Yes asia-northeast1 (Tokyo) Yes Yes asia-southeast3 (Bangkok) Yes No Locations in Europe The following table lists the locations in Europe where Secret Manager and Parameter Manager resources can be stored.
- Multi-Region Name Multi-Region Description Regional Secret Manager Parameter Manager us Data centers in the United States No Yes eu Data centers in the European Union No Yes What's next Learn more about locations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Region Regional Secret Manager Parameter Manager southamerica-east1 (São Paulo) Yes Yes southamerica-west1 (Santiago) Yes Yes Locations in Middle East The following table lists the locations in the Middle East where Secret Manager and Parameter Manager resources can be stored.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = await client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict]] The request object.
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = await client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict]] The request object.
- ListSecretVersionsRequest ( parent="parent value", ) Make the request page result = client. list secret versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.secretmanager v1.types.ListSecretVersionsRequest , dict]] The request object.

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict] The request object.
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict] The request object.
- ListSecretVersionsRequest ( parent="parent value", ) Make the request page result = client. list secret versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.secretmanager v1.types.ListSecretVersionsRequest , dict] The request object.

