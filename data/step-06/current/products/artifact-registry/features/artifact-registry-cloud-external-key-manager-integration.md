---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.936Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Cloud External Key Manager integration"
feature_slug: "artifact-registry-cloud-external-key-manager-integration"
latest_feature_date: "2021-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
keywords:
  - "manager"
  - "integration"
  - "external"
  - "key"
  - "registry"
  - "artifact"
  - "adds"
  - "for"
---

# Artifact Registry Cloud External Key Manager integration

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry adds support for Cloud External Key Manager when using customer-managed encryption keys.

## Extended Definition

Artifact Registry adds support for Cloud External Key Manager when using customer-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)

## Supporting Pages

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Linux: /.docker/config.json Windows: %USERPROFILE%\.docker\config.json There are separate sections in the file for different authentication methods: credHelpers If you use the Docker credential helper for authentication Artifact Registry stores the credential helper settings in the credHelpers section of the file. auths If you use Docker to sign in with a token or service account key as your password, Docker stores a base64-encoded version of your credentials in the auths section of the file. credStore If you configured a credential store to manage your credentials, the settings for the credential store are in the credStore section of the file.
- To configure authentication with user credentials, run the following command: gcloud auth login To configure authentication with service account credentials, run the following command: gcloud auth activate-service-account ACCOUNT --key-file = KEY-FILE Where ACCOUNT is the service account that you want to use with Artifact Registry in the format USERNAME @ PROJECT-ID .iam.gserviceaccount.com .
- To create a new service account and a service account key for use with Artifact Registry repositories only: Create a service account to act on behalf of your application, or choose an existing service account that you use for automation.
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Removing access There are several ways to remove access to a CMEK-encrypted repository: Revoke the Cloud KMS CryptoKey Encrypter/Decrypter role from the Artifact Registry service account using one of the following methods: Revoke access in the Google Cloud console Revoke access by using the gcloud CLI Temporarily disable the Customer-managed encryption key Permanently destroy the CMEK key We recommend that you revoke the permissions from the Artifact Registry service account before disabling or destroying a key.
- Required roles To get the permissions that you need to use Autokey to create protected repositories, ask your administrator to grant you the following IAM roles on the folder or project: Cloud KMS Autokey User ( roles/cloudkms.autokeyUser ) Artifact Registry Admin ( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You should see roles on the Role/Member column. gcloud Run the following command to grant access to the Artifact Registry service account: gcloud kms keys add-iam-policy-binding [ --project = PROJECT ] \ KEY --location LOCATION --keyring = KEYRING \ --member serviceAccount:service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter Where PROJECT is the ID of the project that contains the key.
- When you activate the Artifact Registry API in a Google Cloud project, Artifact Registry tries to automatically create a Pub/Sub topic with the topic ID gcr using Google-owned and Google-managed encryption keys.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Learn how to grant roles . gcloud services enable artifactregistry.googleapis.com If you don't have a Artifact Registry repository, then create a repository and configure authentication for third-party clients that require access to the repository.
- This page describes how to identify and copy those images to Artifact Registry for consolidated, consistent container image management.

