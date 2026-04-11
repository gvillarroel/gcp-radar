---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.908Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry artifact download rules"
feature_slug: "artifact-registry-artifact-download-rules"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/audit-logging"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "previewed"
  - "rules"
  - "download"
  - "introduces"
  - "that"
  - "can"
  - "registry"
  - "artifact"
---

# Artifact Registry artifact download rules

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduces previewed download rules that can restrict artifact downloads at repository and package levels.

## Extended Definition

Artifact Registry introduces previewed download rules that can restrict artifact downloads at repository and package levels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2022 v1 Change Getting and listing Artifact Registry locations in a project now requires the following permissions: artifactregistry.locations.list artifactregistry.locations.get You can grant these permissions with the Artifact Registry Reader role ( roles/artifactregistry.reader ) role or another role that includes these permissions.
- The first time that you request a version of a package, Artifact Registry downloads and caches the package in the remote repository.
- October 09, 2024 v1 Feature Artifact Registry artifact download rules are in Preview.
- Feature Download rules are now available for Apt repositories in Artifact Registry.

### Artifact Registry audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions ADMIN WRITE Docker-CreateOnPush google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag DATA READ Apt-Contents Apt-ViewArchIndexFile Apt-ViewIndexFile Apt-ViewPackageFile Docker-Catalog Docker-GetManifest Docker-GetTags Docker-HeadManifest Docker-ServeBlob Go-DownloadModFile Go-DownloadZipFile Go-ListVersions Go-ViewModInfo GooGet-ViewIndexFile Kfp-DownloadFile Maven-Artifact-Download Maven-File-Download Npm-GetManifest Npm-GetVersionManifest Npm-HeadManifest Npm-HeadPackage Npm-InstallPackage Npm-ListTag Python-HeadFile Python-HeadPackageVersions Python-InstallPackage Python-PackageVersions VirtualRepo-Auth Yum-ViewIndexFile Yum-ViewIndexKey Yum-ViewPackageFile google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile DATA WRITE Docker-CancelUpload Docker-DeleteBlob Docker-DeleteManifest Docker-DeleteTag Docker-FinishUpload Docker-HeadBlob Docker-PutManifest Docker-StartUpload Kfp-UploadPackage Maven-Artifact-Upload Maven-File-Upload Npm-DeleteTag Npm-PublishPackage Npm-UnpublishPackage Npm-UnpublishVersion Npm-UpdateManifest Npm-UpdateTag Python-UploadPackage google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Artifact Registry.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag" DeleteAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment Audit log type : Data access Permissions : artifactregistry.attachments.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment" DeleteFile Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile Audit log type : Data access Permissions : artifactregistry.files.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile" DeletePackage Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository" DeleteRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule Audit log type : Admin activity Permissions : artifactregistry.rules.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- BatchDeleteVersions Method : google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions Audit log type : Data access Permissions : artifactregistry.versions.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions" CreateAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment Audit log type : Admin activity Permissions : artifactregistry.attachments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment" CreateRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository" CreateRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule Audit log type : Admin activity Permissions : artifactregistry.rules.create - ADMIN WRITE Method is a long-running or streaming operation : No.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- In Artifact Registry, you can add labels to repositories so that you can group them together or filter repository lists by label.
- Artifact Registry also supports organization policy constraints that can require CMEK to protect resources.
- You can restrict artifact downloads with download rules .

