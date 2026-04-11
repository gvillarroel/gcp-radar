---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.927Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Cloud Logging audit logs for Artifact Registry repositories"
feature_slug: "cloud-logging-audit-logs-for-artifact-registry-repositories"
latest_feature_date: "2022-06-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/audit-logging"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "logging"
  - "audit"
  - "logs"
  - "repositories"
  - "maven"
  - "registry"
  - "artifact"
  - "for"
---

# Cloud Logging audit logs for Artifact Registry repositories

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging.

## Extended Definition

Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### Artifact Registry audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions ADMIN WRITE Docker-CreateOnPush google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag DATA READ Apt-Contents Apt-ViewArchIndexFile Apt-ViewIndexFile Apt-ViewPackageFile Docker-Catalog Docker-GetManifest Docker-GetTags Docker-HeadManifest Docker-ServeBlob Go-DownloadModFile Go-DownloadZipFile Go-ListVersions Go-ViewModInfo GooGet-ViewIndexFile Kfp-DownloadFile Maven-Artifact-Download Maven-File-Download Npm-GetManifest Npm-GetVersionManifest Npm-HeadManifest Npm-HeadPackage Npm-InstallPackage Npm-ListTag Python-HeadFile Python-HeadPackageVersions Python-InstallPackage Python-PackageVersions VirtualRepo-Auth Yum-ViewIndexFile Yum-ViewIndexKey Yum-ViewPackageFile google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile DATA WRITE Docker-CancelUpload Docker-DeleteBlob Docker-DeleteManifest Docker-DeleteTag Docker-FinishUpload Docker-HeadBlob Docker-PutManifest Docker-StartUpload Kfp-UploadPackage Maven-Artifact-Upload Maven-File-Upload Npm-DeleteTag Npm-PublishPackage Npm-UnpublishPackage Npm-UnpublishVersion Npm-UpdateManifest Npm-UpdateTag Python-UploadPackage google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Artifact Registry.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag" DeleteAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment Audit log type : Data access Permissions : artifactregistry.attachments.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment" DeleteFile Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile Audit log type : Data access Permissions : artifactregistry.files.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile" DeletePackage Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository" DeleteRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule Audit log type : Admin activity Permissions : artifactregistry.rules.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- BatchDeleteVersions Method : google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions Audit log type : Data access Permissions : artifactregistry.versions.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions" CreateAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment Audit log type : Admin activity Permissions : artifactregistry.attachments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment" CreateRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository" CreateRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule Audit log type : Admin activity Permissions : artifactregistry.rules.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag" DeletePackage Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository" DeleteTag Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag Audit log type : Admin activity Permissions : artifactregistry.tags.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- August 21, 2024 v1 Change The following Artifact Registry Cloud Audit Log method names have changed: Docker-EmptyTarBlob is renamed Docker-ServeBlob Docker-GetEmptyTags is renamed Docker-GetTags Docker-HeadEmptyTarBlob is renamed Docker-HeadBlob Kfp-UploadPackage-Redirect is renamed Kfp-UploadPackage Apt-ViewRemoteIndexFile is renamed to indicate the type of file requested: Apt-ViewIndexFile : when a repository metadata file is requested Apt-Contents : when the Contents index file for a specific repository component and architecture type is requested Apt-ViewArchIndexFile : when the Packages index file for a specific repository component and architecture type is requested Apt-ViewRemotePackageFile is renamed Apt-ViewPackageFile Yum-ViewUpstreamFile is renamed to indicate the type of file requested: Yum-ViewIndexKey : when the public key for signing Yum packages is requested Yum-ViewIndexFile : when one of a repository's index files is requested Yum-ViewPackageFile : when a Yum package file is requested For more information on Artifact Registry logs, see Audit Logging .
- May 03, 2021 v1beta2 Feature Artifact Registry now supports audit logging for container images in Cloud Audit Logs.
- June 09, 2022 v1 Feature Audit logs for Maven, npm, and Python repositories are now available in Cloud Logging.
- March 15, 2024 v1 Feature Artifact Registry remote repositories support basic authentication to user-defined and preset upstream sources for Docker, Maven, npm, and Python formats.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Audit logging Container Registry does not provide audit logs for registry activity.
- The initial setup includes automatic creation of Artifact Registry repositories for each Container Registry host in your project and redirection of gcr.io to the corresponding Artifact Registry repositories.
- Domain name gcr.io pkg.dev Artifact Registry can also store images for the gcr.io domain if you set up gcr.io repositories .
- Artifact Registry provides a REST and RPC API for managing repositories and artifacts.

