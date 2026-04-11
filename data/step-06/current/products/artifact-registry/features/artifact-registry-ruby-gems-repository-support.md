---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.901Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Ruby gems repository support"
feature_slug: "artifact-registry-ruby-gems-repository-support"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic"
keywords:
  - "gems"
  - "managing"
  - "ruby"
  - "added"
  - "repository"
  - "registry"
  - "artifact"
  - "for"
---

# Artifact Registry Ruby gems repository support

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry added support for managing Ruby gems repositories.

## Extended Definition

Artifact Registry added support for managing Ruby gems repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)

## Supporting Pages

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.
- For example, a service account for development builds might have the Artifact Registry Reader role for a production repository and the Artifact Registry Writer role for a staging repository.
- Linux: /.docker/config.json Windows: %USERPROFILE%\.docker\config.json There are separate sections in the file for different authentication methods: credHelpers If you use the Docker credential helper for authentication Artifact Registry stores the credential helper settings in the credHelpers section of the file. auths If you use Docker to sign in with a token or service account key as your password, Docker stores a base64-encoded version of your credentials in the auths section of the file. credStore If you configured a credential store to manage your credentials, the settings for the credential store are in the credStore section of the file.
- To configure authentication with user credentials, run the following command: gcloud auth login To configure authentication with service account credentials, run the following command: gcloud auth activate-service-account ACCOUNT --key-file = KEY-FILE Where ACCOUNT is the service account that you want to use with Artifact Registry in the format USERNAME @ PROJECT-ID .iam.gserviceaccount.com .

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature Artifact Registry support for managing Ruby gems with Artifact Registry repositories is in Preview .
- For more information, see the following topics: Get started with Ruby gems Store Ruby gems in Artifact Registry (Quickstart) September 23, 2025 v1 Feature Layer-based scanning for Artifact Analysis is in Preview .
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.

### "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json curl (Linux, macOS, or Cloud Shell) To send your request, execute the following command: curl -v \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -F "meta={'filename':' NAME ','package id':' PACKAGE ','version id':' VERSION '};type=application/json" \ -F "blob=@ SOURCE " \ https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json List artifacts console You can view artifacts for generic format repositories in the Google Cloud console.
- Required roles To get the permissions that you need to manage generic artifacts, ask your administrator to grant you the following IAM roles on the repository: View artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Download artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Upload artifacts to a repository: Artifact Registry Writer ( roles/artifactregistry.writer ) Delete artifacts: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download \ --destination = DESTINATION \ --location = LOCATION \ --repository = REPOSITORY \ --package = PACKAGE \ --version = VERSION \ --name = NAME Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download --destination = DESTINATION --location = LOCATION --repository = REPOSITORY --package = PACKAGE --version = VERSION --name = NAME Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download ^ --destination = DESTINATION ^ --location = LOCATION ^ --repository = REPOSITORY ^ --package = PACKAGE ^ --version = VERSION ^ --name = NAME API Before using any of the request data, make the following replacements: PROJECT : your Google Cloud project ID .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list \ --project = PROJECT \ --location = LOCATION \ --repository = REPOSITORY Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list --project = PROJECT --location = LOCATION --repository = REPOSITORY Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts files list ^ --project = PROJECT ^ --location = LOCATION ^ --repository = REPOSITORY The response includes the file details in the format PACKAGE : VERSION : NAME .

