---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.885Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager event notifications"
feature_slug: "secret-manager-event-notifications"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
  - "https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1"
keywords:
  - "secret"
  - "manager"
  - "event"
  - "notifications"
  - "lets"
  - "secrets"
  - "send"
  - "pub"
---

# Secret Manager event notifications

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager Event Notifications lets secrets send Pub/Sub messages when a secret or secret version changes; Secret Manager can publish secret and secret version changes to Pub/Sub.

## Extended Definition

Secret Manager Event Notifications lets secrets send Pub/Sub messages when a secret or secret version changes; Secret Manager can publish secret and secret version changes to Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1)

## Supporting Pages

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up alerts : Configure Cloud Asset Inventory to send notifications to Pub/Sub when specific events occur, such as when secrets are created, modified, or deleted.
- Home Documentation Security Secret Manager Guides Send feedback Analyze secrets with Cloud Asset Inventory Stay organized with collections Save and categorize content based on your preferences.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND ( JSON VALUE ( resource . data , "$.replicationStatus.automatic.customerManagedEncryption.kmsKeyVersionName" ) IS NULL AND JSON VALUE ( resource . data , "$.replicationStatus.userManaged.replicas[0].customerManagedEncryption.kmsKeyVersionName" ) IS NULL ) AND JSON VALUE ( resource . data , "$.state" ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "(resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption = NULL OR resource.data.replicationStatus.automatic.customerManagedEncryption=NULL) AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- Secrets without CMEK configured List all secrets that are not encrypted with customer-manager encryption keys (CMEK): BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NULL AND JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.

### Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- SecretManagerServiceClient ; import java.io.IOException ; public class CreateSecretWithLabels { public static void createSecretWithLabels () throws IOException { // TODO(developer): Replace these variables before running the sample. // This is the id of the GCP project String projectId = "your-project-id" ; // This is the id of the secret to act on String secretId = "your-secret-id" ; // This is the key of the label to be added String labelKey = "your-label-key" ; // This is the value of the label to be added String labelValue = "your-label-value" ; createSecretWithLabels ( projectId , secretId , labelKey , labelValue ); } // Create a secret with labels. public static Secret createSecretWithLabels ( String projectId , String secretId , String labelKey , String labelValue ) throws IOException { // Initialize client that will be used to send requests.
- HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID ?update mask=labels Request JSON body: { "labels": { " KEY ": " VALUE " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID ?update mask=labels Request JSON body: { "labels": { " KEY ": " VALUE " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID ?update mask=labels Request JSON body: { "labels": {} } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create a secret \_|\_ Secret Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID Request JSON body: { "replication": { " REPLICATION POLICY ": {} } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . using Google.Api.Gax.ResourceNames ; using Google.Cloud.SecretManager.V1 ; public class CreateSecretSample { public Secret CreateSecret ( string projectId = "my-project" , string secretId = "my-secret" ) { // Create the client.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /secrets/ SECRET ID ", "createTime": "2024-03-25T08:24:13.153705Z", "etag": "\"161477e6071da9\"" } C# To run this code, first set up a C# development environment and install the Secret Manager C# SDK .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID " PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Package com.google.cloud.secretmanager.v1 (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1)
- Source ID: `site-java-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret. com. google. cloud. secretmanager. v1.
- Topic A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret. com. google. cloud. secretmanager. v1.
- At next rotation time, Secret Manager will send a Pub/Sub notification to the topics configured on the com. google. cloud. secretmanager. v1.
- At next rotation time, Secret Manager will send a Pub/Sub notification to the topics configured on the com. google. cloud. secretmanager. v1.

