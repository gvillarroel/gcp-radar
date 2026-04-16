---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.492Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Cloud Logging audit logs for Artifact Registry repositories"
feature_slug: "cloud-logging-audit-logs-for-artifact-registry-repositories"
latest_feature_date: "2022-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/audit-logging"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories"
keywords:
  - "logging"
  - "audit"
  - "logs"
  - "repositories"
  - "maven"
---

# Cloud Logging audit logs for Artifact Registry repositories

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging.

## Extended Definition

Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)

## Supporting Pages

### Artifact Registry audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions ADMIN WRITE Docker-CreateOnPush google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag DATA READ Apt-Contents Apt-ViewArchIndexFile Apt-ViewIndexFile Apt-ViewPackageFile Docker-Catalog Docker-GetManifest Docker-GetTags Docker-HeadManifest Docker-ServeBlob Go-DownloadModFile Go-DownloadZipFile Go-ListVersions Go-ViewModInfo GooGet-ViewIndexFile Kfp-DownloadFile Maven-Artifact-Download Maven-File-Download Npm-GetManifest Npm-GetVersionManifest Npm-HeadManifest Npm-HeadPackage Npm-InstallPackage Npm-ListTag Python-HeadFile Python-HeadPackageVersions Python-InstallPackage Python-PackageVersions VirtualRepo-Auth Yum-ViewIndexFile Yum-ViewIndexKey Yum-ViewPackageFile google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile DATA WRITE Docker-CancelUpload Docker-DeleteBlob Docker-DeleteManifest Docker-DeleteTag Docker-FinishUpload Docker-HeadBlob Docker-PutManifest Docker-StartUpload Kfp-UploadPackage Maven-Artifact-Upload Maven-File-Upload Npm-DeleteTag Npm-PublishPackage Npm-UnpublishPackage Npm-UnpublishVersion Npm-UpdateManifest Npm-UpdateTag Python-UploadPackage google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Artifact Registry.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Notes Audit logs are available for all repositories.
- Resources that can be accessed without logging into a Google Cloud, Google Workspace, Cloud Identity, or Drive Enterprise account don't generate audit logs.
- Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag" DeleteAttachment Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment Audit log type : Data access Permissions : artifactregistry.attachments.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment" DeleteFile Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile Audit log type : Data access Permissions : artifactregistry.files.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile" DeletePackage Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage Audit log type : Data access Permissions : artifactregistry.packages.delete - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage" DeleteRepository Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository Audit log type : Admin activity Permissions : artifactregistry.repositories.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository" DeleteRule Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule Audit log type : Admin activity Permissions : artifactregistry.rules.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Audit logging Container Registry does not provide audit logs for registry activity.
- Remote repositories that cache artifacts from upstream sources such as Docker Hub or Maven Central.
- Use Cloud Logging to track changes to your repositories.
- Audit logging for repository activity.

### "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "format" : enum ( Format ) , "description" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "kmsKeyName" : string , "mode" : enum ( Mode ) , "cleanupPolicies" : { string : { object ( CleanupPolicy ) } , ... } , "sizeBytes" : string , "satisfiesPzs" : boolean , "cleanupPolicyDryRun" : boolean , "vulnerabilityScanningConfig" : { object ( VulnerabilityScanningConfig ) } , "disallowUnspecifiedMode" : boolean , "satisfiesPzi" : boolean , "registryUri" : string , // Union field format config can be only one of the following: "mavenConfig" : { object ( MavenRepositoryConfig ) } , "dockerConfig" : { object ( DockerRepositoryConfig ) } // End of list of possible types for union field format config . // Union field mode config can be only one of the following: "virtualRepositoryConfig" : { object ( VirtualRepositoryConfig ) } , "remoteRepositoryConfig" : { object ( RemoteRepositoryConfig ) } // End of list of possible types for union field mode config . } Fields name string The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 .
- Repository-specific configurations. format config can be only one of the following: mavenConfig object ( MavenRepositoryConfig ) Maven repository config contains repository level configuration for the repositories of maven type. dockerConfig object ( DockerRepositoryConfig ) Docker repository config contains repository level configuration for the repositories of docker type.
- Address of the remote repository. upstream can be only one of the following: publicRepository enum ( PublicRepository ) One of the publicly available Maven repositories supported by Artifact Registry. customRepository object ( CustomRepository ) Customer-specified remote repository.
- PublicRepository Predefined list of publicly available Maven repositories like Maven Central.

