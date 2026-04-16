---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.885Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager Rotation"
feature_slug: "secret-manager-rotation"
latest_feature_date: "2021-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1"
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "secret"
  - "manager"
  - "rotation"
  - "sends"
  - "pub"
  - "sub"
  - "messages"
  - "based"
---

# Secret Manager Rotation

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager Rotation sends Pub/Sub messages based on a configured rotation frequency and time.

## Extended Definition

Secret Manager Rotation sends Pub/Sub messages based on a configured rotation frequency and time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### "Package com.google.cloud.secretmanager.v1 (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1)
- Source ID: `site-java-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At next rotation time, Secret Manager will send a Pub/Sub notification to the topics configured on the com. google. cloud. secretmanager. v1.
- At next rotation time, Secret Manager will send a Pub/Sub notification to the topics configured on the com. google. cloud. secretmanager. v1.
- Builder A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret. com. google. cloud. secretmanager. v1.
- Topic A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret. com. google. cloud. secretmanager. v1.

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Secrets with a specific rotation period Find all secrets scheduled to be rotated less than once every 90 days: BigQuery SELECT FROM BIGQUERY TABLE WHERE CAST ( TRIM ( JSON VALUE ( JSON EXTRACT ( resource . data , "$.rotation.rotationPeriod" )), "s" ) AS INT64 ) 86400 90 # Rotation period in seconds ( 86400 s in 1 day 90 days ) Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW=$(TZ=GMT date +"%Y-%m-%dT%H:%M:%SZ") ROTATION PERIOD SECONDS=$((90 24 60 60)) gcloud asset list --project= PROJECT ID \ --asset-types='secretmanager.googleapis.com/Secret' \ --snapshot-time= $NOW \ --content-type='resource' \ --filter="resource.data.rotation != null AND resource.data.rotation.rotationPeriod ${ ROTATION PERIOD SECONDS } s " Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND DATE ( JSON VALUE ( resource . data , '$.createTime' )) DATE SUB ( CURRENT DATE (), INTERVAL 180 DAY ) AND JSON VALUE ( resource . data , '$.state' ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- BigQuery SELECT name , FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND DATE ( JSON VALUE ( resource . data , '$.createTime' )) > DATE SUB ( CURRENT DATE (), INTERVAL 2 WEEK ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / Secret ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime>-P2W" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- KMS KEY VERSION NAME : the Cloud Key Management Service key version number gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption.kmsKeyVersionName=$FULL KMS KEY VERSION RESOURCE NAME AND resource.data.status=ENABLED" Replace the following: PROJECT ID : the ID of the project containing the secrets to be analyzed KMS KEY VERSION NAME : the ID of the key version Secrets without rotation configured Find all secrets that don't have a rotation schedule.

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- SecretManagerServiceClient ; import java.io.IOException ; public class CreateSecretWithLabels { public static void createSecretWithLabels () throws IOException { // TODO(developer): Replace these variables before running the sample. // This is the id of the GCP project String projectId = "your-project-id" ; // This is the id of the secret to act on String secretId = "your-secret-id" ; // This is the key of the label to be added String labelKey = "your-label-key" ; // This is the value of the label to be added String labelValue = "your-label-value" ; createSecretWithLabels ( projectId , secretId , labelKey , labelValue ); } // Create a secret with labels. public static Secret createSecretWithLabels ( String projectId , String secretId , String labelKey , String labelValue ) throws IOException { // Initialize client that will be used to send requests.
- SecretManagerServiceClient () Build the resource name of the secret. name = client . secret path ( project id , secret id ) Get the secret. response = client . get secret ( request = { "name" : name }) labels = response . labels Delete the label labels . pop ( label key , None ) Update the secret. secret = { "name" : name , "labels" : labels } update mask = { "paths" : [ "labels" ]} response = client . update secret ( request = { "secret" : secret , "update mask" : update mask } ) Print the new secret name. print ( f "Updated secret: { response . name } " ) return response What's next Create rotation schedules Set an expiration date for a secret Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . using Google.Api.Gax.ResourceNames ; using Google.Cloud.SecretManager.V1 ; using System.Collections.Generic ; public class CreateSecretWithLabelsSample { public Secret CreateSecretWithLabels ( string projectId = "my-project" , string secretId = "my-secret" , string labelKey = "my-label-key" , string labelValue = "my-label-value" ) { // Create the client.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . using Google.Api.Gax.ResourceNames ; using Google.Cloud.SecretManager.V1 ; using Google.Protobuf.Collections ; using Google.Protobuf.WellKnownTypes ; using System ; public class ViewSecretLabelsSample { public Secret ViewSecretLabels ( string projectId = "my-project" , string secretId = "my-secret" ) { // Create the client.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class SecretManagerServiceAsyncClient (2.27.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.secretmanager v1.types.SecretVersion A secret version resource in the Secret Manager API. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create secret create secret ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .

