---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.917Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Apt repository HTTP access"
feature_slug: "artifact-registry-apt-repository-http-access"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic"
keywords:
  - "http"
  - "apt"
  - "access"
  - "repository"
  - "supports"
  - "registry"
  - "artifact"
  - "for"
---

# Artifact Registry Apt repository HTTP access

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry supports HTTP access for Apt repositories.

## Extended Definition

Artifact Registry supports HTTP access for Apt repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- September 13, 2023 v1 Feature Artifact Registry now supports HTTP access to Apt repositories.
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- For more information, see Configure HTTP access to an Apt repository .
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "uri" : string } Fields uri string An http/https uri reference to the upstream remote repository, for ex: "https://my.apt.registry/".
- Resource: Repository JSON representation MavenRepositoryConfig JSON representation VersionPolicy DockerRepositoryConfig JSON representation VirtualRepositoryConfig JSON representation UpstreamPolicy JSON representation RemoteRepositoryConfig JSON representation DockerRepository JSON representation PublicRepository CustomRepository JSON representation MavenRepository JSON representation PublicRepository CustomRepository JSON representation NpmRepository JSON representation PublicRepository CustomRepository JSON representation PythonRepository JSON representation PublicRepository CustomRepository JSON representation AptRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation YumRepository JSON representation PublicRepository JSON representation RepositoryBase CustomRepository JSON representation CommonRemoteRepository JSON representation UpstreamCredentials JSON representation UsernamePasswordCredentials JSON representation Format Mode CleanupPolicy JSON representation CleanupPolicyCondition JSON representation TagState CleanupPolicyMostRecentVersions JSON representation Action VulnerabilityScanningConfig JSON representation EnablementConfig EnablementState Methods Resource: Repository A Repository for storing artifacts with a specific format.
- Address of the remote repository. upstream can be only one of the following: publicRepository object ( PublicRepository ) One of the publicly available Apt repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- JSON representation { "uri" : string } Fields uri string An http/https uri reference to the upstream remote repository, for ex: "https://my.python.registry/".

### "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic](https://docs.cloud.google.com/artifact-registry/docs/generic)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: POST https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json curl (Linux, macOS, or Cloud Shell) To send your request, execute the following command: curl -v \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -F "meta={'filename':' NAME ','package id':' PACKAGE ','version id':' VERSION '};type=application/json" \ -F "blob=@ SOURCE " \ https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json List artifacts console You can view artifacts for generic format repositories in the Google Cloud console.
- HTTP method and URL: GET https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ --output DESTINATION \ "https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -OutFile DESTINATION -Uri "https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media" You should see the download begin right away.
- Required roles To get the permissions that you need to manage generic artifacts, ask your administrator to grant you the following IAM roles on the repository: View artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Download artifacts: Artifact Registry Reader ( roles/artifactregistry.reader ) Upload artifacts to a repository: Artifact Registry Writer ( roles/artifactregistry.writer ) Delete artifacts: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download \ --destination = DESTINATION \ --location = LOCATION \ --repository = REPOSITORY \ --package = PACKAGE \ --version = VERSION \ --name = NAME Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download --destination = DESTINATION --location = LOCATION --repository = REPOSITORY --package = PACKAGE --version = VERSION --name = NAME Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud artifacts generic download ^ --destination = DESTINATION ^ --location = LOCATION ^ --repository = REPOSITORY ^ --package = PACKAGE ^ --version = VERSION ^ --name = NAME API Before using any of the request data, make the following replacements: PROJECT : your Google Cloud project ID .

