---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.879Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Custom organization policies for Secret Manager resources"
feature_slug: "custom-organization-policies-for-secret-manager-resources"
latest_feature_date: "2024-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/cmek"
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "for"
  - "secret"
  - "manager"
  - "resources"
  - "can"
---

# Custom organization policies for Secret Manager resources

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies can enforce secret rotation, annotations, expirations, and secret-type restrictions for Secret Manager resources.

## Extended Definition

Custom organization policies can enforce secret rotation, annotations, expirations, and secret-type restrictions for Secret Manager resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .

### "Enable customer-managed encryption keys for Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the value of replication.userManaged.replicas.customerManagedEncryption.kmsKeyName to the resource names for the CMEK keys. curl "https://secretmanager.googleapis.com/v1/projects/ SM PROJECT ID /secrets?secretId=my-ummr-secret" \ --request "POST" \ --header "Content-Type: application/json" \ --header "Authorization: Bearer ACCESS TOKEN " \ --data-binary @- <<EOF { "replication" : { "userManaged" : { "replicas" : [ { "location" : "us-east1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-east1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } , { "location" : "us-central1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-central1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } ] } } } EOF Now, each time a secret version is created in that secret, the secret version's payload is automatically encrypted using the key before being written to persistent storage, as long as the service identity has access to the CMEK key.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . curl "https://secretmanager.googleapis.com/v1/projects/ ${ SM PROJECT ID } /secrets/my-ummr-secret?updateMask=replication" \ --request "PATCH" \ --header "Authorization: Bearer ACCESS TOKEN " \ --header "Content-Type: application/json" \ --data-binary @- <<EOF { "replication" : { "userManaged" : { "replicas" : [ { "location" : "us-east1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-east1/keyRings/secret-manager-cmek/cryptoKeys/my-other-key" } } , { "location" : "us-central1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-central1/keyRings/secret-manager-cmek/cryptoKeys/my-other-key" } }] } } } EOF Warning: Updating the CMEK configuration only applies to new secret versions.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . curl "https://secretmanager.googleapis.com/v1/projects/ SM PROJECT ID /secrets/ SECRET ID /versions/latest" \ --request "GET" \ --header "Authorization: Bearer ACCESS TOKEN " \ --header "Content-Type: application/json" This returns the full Cloud KMS resource name of the key version used to encrypt the secret version. { "name" : "projects/ PROJECT NUMBER /secrets/ SECRET ID /versions/1" , "createTime" : "2021-07-..." , "state" : "ENABLED" , "replicationStatus" : { "automatic" : { "customerManagedEncryption" : { "kmsKeyVersionName" : "projects/ KMS PROJECT ID /locations/global/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key/cryptoKeyVersions/1" } } } } Add a Cloud EKM key to a CMEK policy This section covers adding a Cloud EKM key to a CMEK policy.
- Set the value of replication.automatic.customerManagedEncryption.kmsKeyName to the resource name for the CMEK key. curl "https://secretmanager.googleapis.com/v1/projects/ ${ SM PROJECT ID } /secrets?secretId= SECRET ID " \ --request "POST" \ --header "Content-Type: application/json" \ --header "Authorization: Bearer ACCESS TOKEN " \ --data-binary @- <<EOF { "replication" : { "automatic" : { "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/global/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } } } EOF Now, each time a secret version is created in that secret, the secret version's payload is automatically encrypted using the key before being written to persistent storage, as long as the service identity has access to the CMEK key.

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KMS KEY NAME : the ID of the key or fully qualified identifier for the key gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / Secret ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.replication.userManaged.replicas.customerManagedEncryption.kmsKeyName= KMS KEY NAME " Replace the following: PROJECT ID : the ID of the project containing the secrets to be analyzed KMS KEY NAME : the ID of the key or fully qualified identifier for the key Secret versions without CMEK configured Find all enabled secret versions that are not encrypted with CMEK.
- Limitations Using Cloud Asset Inventory to analyze Secret Manager resources has the following limitation: Cloud Asset Inventory supports exporting and listing snapshots for only the past five weeks.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND ( JSON VALUE ( resource . data , "$.replicationStatus.automatic.customerManagedEncryption.kmsKeyVersionName" ) IS NULL AND JSON VALUE ( resource . data , "$.replicationStatus.userManaged.replicas[0].customerManagedEncryption.kmsKeyVersionName" ) IS NULL ) AND JSON VALUE ( resource . data , "$.state" ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "(resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption = NULL OR resource.data.replicationStatus.automatic.customerManagedEncryption=NULL) AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- Secrets without CMEK configured List all secrets that are not encrypted with customer-manager encryption keys (CMEK): BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NULL AND JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.

