---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.978Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Terraform support"
feature_slug: "terraform-support"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek"
  - "https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
keywords:
  - "terraform"
  - "workstations"
  - "supports"
  - "managing"
  - "resources"
  - "with"
---

# Terraform support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports managing resources with Terraform; Cloud Workstations supports managing resources with Terraform.

## Extended Definition

Cloud Workstations supports managing resources with Terraform; Cloud Workstations supports managing resources with Terraform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- [https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console](https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)

## Supporting Pages

### "Encrypt workstation resources using CMEK \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- To create a workstation configuration with machine type e2-standard-2 , idle timeout of 3600s , and CMEK encrypted workstation resources, run the following gcloud CLI command: gcloud workstations configs create WORKSTATIONS CONFIG NAME \ --cluster = WORKSTATIONS CLUSTER NAME \ --region = LOCATION \ --machine-type = "e2-standard-2" \ --idle-timeout = 3600 \ --kms-key = "projects/ KMS PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME " \ --kms-key-service-account = " KMS KEY SERVICE ACCOUNT EMAIL " \ --project = WORKSTATIONS PROJECT ID Replace the following: WORKSTATIONS CONFIG NAME : the name of the workstation configuration.
- Home Documentation Application development Cloud Workstations Guides Send feedback Encrypt workstation resources using CMEK Stay organized with collections Save and categorize content based on your preferences.
- After you set up your resources with CMEKs, the experience of accessing your Cloud Workstations resources is similar to using Google default encryption.
- This allows Cloud Workstations to detect key rotation and re-encrypt resources as needed in your project. gcloud kms keys add-iam-policy-binding \ KEY NAME \ --keyring = KEY RING \ --location = LOCATION \ --project = KMS PROJECT ID \ --role = roles/cloudkms.viewer \ --member = CLOUD WORKSTATIONS SERVICE AGENT Replace the following: KEY NAME : the name of your key.

### "Quickstart: Set up workstations \_|\_ Cloud Workstations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console](https://docs.cloud.google.com/workstations/docs/quickstart-set-up-workstations-console)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID For more information about deleting other resources, such as workstation clusters, workstation configurations, and workstations, see Delete resources .
- Home Documentation Application development Cloud Workstations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- After you finish these steps, you can delete the project, removing all resources associated with the project.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.workstations v1.types.Workstation A single instance of a developer workstation with its own persistent storage. get workstation cluster get workstation cluster ( request : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class WorkstationsClient (0.8.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the WorkstationsTransport constructor.
- ClientInfo ) Service for interacting with Cloud Workstations.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.workstations v1.types.Workstation A single instance of a developer workstation with its own persistent storage. get workstation cluster get workstation cluster ( request : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class WorkstationsAsyncClient (0.8.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the WorkstationsTransport constructor.
- ClientInfo ) Service for interacting with Cloud Workstations.

