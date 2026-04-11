---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.909Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "OCI v1.1 support for Docker repositories"
feature_slug: "oci-v1-1-support-for-docker-repositories"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  - "https://docs.cloud.google.com/artifact-registry/docs/audit-logging"
keywords:
  - "oci"
  - "v1"
  - "repositories"
  - "docker"
  - "registry"
  - "artifact"
  - "adds"
  - "for"
---

# OCI v1.1 support for Docker repositories

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments.

## Extended Definition

Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)

## Supporting Pages

### "Support for the Docker Registry API \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Artifact Registry implements version 1.1 of the Open Container Initiative (OCI) Distribution Specification so that you can push and pull images directly with Docker clients, including the Docker command-line tool .
- Home Documentation Application development Artifact Registry Reference Send feedback Support for the Docker Registry API Stay organized with collections Save and categorize content based on your preferences.
- Commands for Artifact Registry tasks that don't have an equivalent command in the Google Cloud CLI or the Docker command-line tool, such as listing untagged images or copying images across registry hosts.
- Make requests to Artifact Registry using the OCI Distribution Specification If using Docker or the gcrane tool isn't an option, then you can use the OCI Distribution Specification.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- The repository is added to the repository list. gcloud Run the following command to create a new Docker repository named quickstart-docker-repo in the location us-west1 with the description "docker repository". gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west1 --description = "Docker repository" \ --project = PROJECT Where PROJECT is your Google Cloud project ID.
- This quickstart shows you how to: Create a private Docker repository in Artifact Registry Set up authentication Push an image to the repository Pull the image from the repository To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Run the following command to verify that your repository was created. gcloud artifacts repositories list \ --project = PROJECT For more information about Artifact Registry commands, run the command gcloud artifacts .

### Artifact Registry audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions ADMIN WRITE Docker-CreateOnPush google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag DATA READ Apt-Contents Apt-ViewArchIndexFile Apt-ViewIndexFile Apt-ViewPackageFile Docker-Catalog Docker-GetManifest Docker-GetTags Docker-HeadManifest Docker-ServeBlob Go-DownloadModFile Go-DownloadZipFile Go-ListVersions Go-ViewModInfo GooGet-ViewIndexFile Kfp-DownloadFile Maven-Artifact-Download Maven-File-Download Npm-GetManifest Npm-GetVersionManifest Npm-HeadManifest Npm-HeadPackage Npm-InstallPackage Npm-ListTag Python-HeadFile Python-HeadPackageVersions Python-InstallPackage Python-PackageVersions VirtualRepo-Auth Yum-ViewIndexFile Yum-ViewIndexKey Yum-ViewPackageFile google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile DATA WRITE Docker-CancelUpload Docker-DeleteBlob Docker-DeleteManifest Docker-DeleteTag Docker-FinishUpload Docker-HeadBlob Docker-PutManifest Docker-StartUpload Kfp-UploadPackage Maven-Artifact-Upload Maven-File-Upload Npm-DeleteTag Npm-PublishPackage Npm-UnpublishPackage Npm-UnpublishVersion Npm-UpdateManifest Npm-UpdateTag Python-UploadPackage google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Artifact Registry.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag" DeleteAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment Audit log type : Data access Permissions : artifactregistry.attachments.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment" DeleteFile Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile Audit log type : Data access Permissions : artifactregistry.files.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile" DeletePackage Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository" DeleteRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule Audit log type : Admin activity Permissions : artifactregistry.rules.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- BatchDeleteVersions Method : google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions Audit log type : Data access Permissions : artifactregistry.versions.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions" CreateAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment Audit log type : Admin activity Permissions : artifactregistry.attachments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment" CreateRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository" CreateRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule Audit log type : Admin activity Permissions : artifactregistry.rules.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag" DeletePackage Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository" DeleteTag Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag Audit log type : Admin activity Permissions : artifactregistry.tags.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

