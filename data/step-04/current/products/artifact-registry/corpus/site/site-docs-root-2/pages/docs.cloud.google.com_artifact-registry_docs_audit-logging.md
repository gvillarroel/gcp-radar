---
title: "Artifact Registry audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/audit-logging
  title: "Artifact Registry audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Artifact Registry audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Artifact Registry. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
Audit logs are available for all repositories.
Service name
Artifact Registry audit logs use the service name artifactregistry.googleapis.com .
Filter for this service:
protoPayload . serviceName = "artifactregistry.googleapis.com"
Methods by permission type
Publicly available resources that have the Identity and Access Management policies allAuthenticatedUsers or allUsers don't generate audit logs. Resources that can be accessed without logging into a Google Cloud, Google Workspace, Cloud Identity, or Drive Enterprise account don't generate audit logs. This helps protect end-user identities and information.
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Artifact Registry generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions
ADMIN_WRITE
Docker-CreateOnPush google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag
DATA_READ
Apt-Contents Apt-ViewArchIndexFile Apt-ViewIndexFile Apt-ViewPackageFile Docker-Catalog Docker-GetManifest Docker-GetTags Docker-HeadManifest Docker-ServeBlob Go-DownloadModFile Go-DownloadZipFile Go-ListVersions Go-ViewModInfo GooGet-ViewIndexFile Kfp-DownloadFile Maven-Artifact-Download Maven-File-Download Npm-GetManifest Npm-GetVersionManifest Npm-HeadManifest Npm-HeadPackage Npm-InstallPackage Npm-ListTag Python-HeadFile Python-HeadPackageVersions Python-InstallPackage Python-PackageVersions VirtualRepo-Auth Yum-ViewIndexFile Yum-ViewIndexKey Yum-ViewPackageFile google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile
DATA_WRITE
Docker-CancelUpload Docker-DeleteBlob Docker-DeleteManifest Docker-DeleteTag Docker-FinishUpload Docker-HeadBlob Docker-PutManifest Docker-StartUpload Kfp-UploadPackage Maven-Artifact-Upload Maven-File-Upload Npm-DeleteTag Npm-PublishPackage Npm-UnpublishPackage Npm-UnpublishVersion Npm-UpdateManifest Npm-UpdateTag Python-UploadPackage google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts (LRO) google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts (LRO) google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Artifact Registry.
Data plane API
The following audit logs are associated with methods belonging to
Data plane API .
Apt-Contents
Method : Apt-Contents
Method description : Download the contents file for a specific repository component and architecture type.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Apt-Contents"
Apt-ViewArchIndexFile
Method : Apt-ViewArchIndexFile
Method description : Download the index file for a specific repository component and architecture type.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Apt-ViewArchIndexFile"
Apt-ViewIndexFile
Method : Apt-ViewIndexFile
Method description : Download a repository metadata file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Apt-ViewIndexFile"
Apt-ViewPackageFile
Method : Apt-ViewPackageFile
Method description : Download an Apt package.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Apt-ViewPackageFile"
Docker-CancelUpload
Method : Docker-CancelUpload
Method description : Cancel the upload of a blob file (also known as an image layer).
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-CancelUpload"
Docker-Catalog
Method : Docker-Catalog
Method description : List all available images across all projects and repositories.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-Catalog"
Docker-CreateOnPush
Method : Docker-CreateOnPush
Audit log type : Admin activity
Permissions : artifactregistry.repositories.createOnPush - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-CreateOnPush"
Docker-DeleteBlob
Method : Docker-DeleteBlob
Method description : Delete a blob file (also known as an image layer).
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-DeleteBlob"
Docker-DeleteManifest
Method : Docker-DeleteManifest
Method description : Delete an image manifest file.
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-DeleteManifest"
Docker-DeleteTag
Method : Docker-DeleteTag
Method description : Delete a tag on a Docker image.
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-DeleteTag"
Docker-FinishUpload
Method : Docker-FinishUpload
Method description : Complete the uploading of a blob file (also known as an image layer). It is the last call that the Docker client makes when uploading a blob file. For more information about pushing a layer read pushing a layer .
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-FinishUpload"
Docker-GetManifest
Method : Docker-GetManifest
Method description : Download an image manifest file. This is the first call that the Docker client makes when downloading an image. For more details about pulling an image, read pulling an image .
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-GetManifest"
Docker-GetTags
Method : Docker-GetTags
Method description : Return the list of all tags from a repository or the list of tags associated with a Docker image.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-GetTags"
Docker-HeadBlob
Method : Docker-HeadBlob
Method description : Check if a blob file (also known as an image layer) exists and return information about the file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-HeadBlob"
Docker-HeadManifest
Method : Docker-HeadManifest
Method description : Check if an image manifest file exists and return information about the file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-HeadManifest"
Docker-PutManifest
Method : Docker-PutManifest
Method description : Upload the image manifest file. This is the last call that the Docker client makes when uploading a new image. For more information about pushing an image read pushing an image .
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-PutManifest"
Docker-ServeBlob
Method : Docker-ServeBlob
Method description : Download a blob file (also known as an image layer). This is one of the calls the Docker client makes when downloading an image. For more information about pulling an image, read pulling an image .
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-ServeBlob"
Docker-StartUpload
Method : Docker-StartUpload
Method description : Start the workflow for uploading a blob file (also known as an image layer). This is the first call that the Docker client makes to start the upload of a blob file. For more information about pushing a layer read pushing a layer . Can also copy a blob internally from one repository to another.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Docker-StartUpload"
Go-DownloadModFile
Method : Go-DownloadModFile
Method description : Download the contents of a Go module version as a mod file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Go-DownloadModFile"
Go-DownloadZipFile
Method : Go-DownloadZipFile
Method description : Download the contents of a Go module version as a zip file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Go-DownloadZipFile"
Go-ListVersions
Method : Go-ListVersions
Method description : List the versions of a Go module.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Go-ListVersions"
Go-ViewModInfo
Method : Go-ViewModInfo
Method description : Return information on a version of a Go module.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Go-ViewModInfo"
GooGet-ViewIndexFile
Method : GooGet-ViewIndexFile
Method description : Download the repository’s index file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GooGet-ViewIndexFile"
Kfp-DownloadFile
Method : Kfp-DownloadFile
Method description : Download a pipeline spec YAML file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Kfp-DownloadFile"
Kfp-UploadPackage
Method : Kfp-UploadPackage
Method description : Upload a Kfp package.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Kfp-UploadPackage"
Maven-Artifact-Download
Method : Maven-Artifact-Download
Method description : Download of a single artifact, such as a jar file, from a Maven package, typically as part of fetching dependencies for a Maven build.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Maven-Artifact-Download"
Maven-Artifact-Upload
Method : Maven-Artifact-Upload
Method description : Upload of a single artifact, such as a jar file, into a Maven package, typically as part of a Maven publish operation.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Maven-Artifact-Upload"
Maven-File-Download
Method : Maven-File-Download
Method description : Download of a metadata file such as an archetype file, or a maven-metadata.xml file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Maven-File-Download"
Maven-File-Upload
Method : Maven-File-Upload
Method description : Upload of a metadata file such as an archetype file, or a maven-metadata.xml file.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Maven-File-Upload"
Npm-DeleteTag
Method : Npm-DeleteTag
Method description : Delete a tag and all its references to any version.
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-DeleteTag"
Npm-GetManifest
Method : Npm-GetManifest
Method description : Download the manifest file of an Npm package.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-GetManifest"
Npm-GetVersionManifest
Method : Npm-GetVersionManifest
Method description : Return the information about a version, extracted from the package manifest file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-GetVersionManifest"
Npm-HeadManifest
Method : Npm-HeadManifest
Method description : Check if the manifest file of an Npm package exists.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-HeadManifest"
Npm-HeadPackage
Method : Npm-HeadPackage
Method description : Check if a particular version of an Npm package exists.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-HeadPackage"
Npm-InstallPackage
Method : Npm-InstallPackage
Method description : Download a specific version of an Npm package.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-InstallPackage"
Npm-ListTag
Method : Npm-ListTag
Method description : Return the list of tags for an Npm package.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-ListTag"
Npm-PublishPackage
Method : Npm-PublishPackage
Method description : Publish a new version of an Npm package.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-PublishPackage"
Npm-UnpublishPackage
Method : Npm-UnpublishPackage
Method description : Unpublish an Npm package and all its versions.
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-UnpublishPackage"
Npm-UnpublishVersion
Method : Npm-UnpublishVersion
Method description : Unpublish a package version. This is part of the flow for unpublishing a version, where the binary file associated with the version is deleted.
Audit log type : Data access
Permissions : artifactregistry.repositories.deleteArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-UnpublishVersion"
Npm-UpdateManifest
Method : Npm-UpdateManifest
Method description : Update the manifest file for an Npm package. This is part of the flow for unpublishing a version, where the version is being removed from the manifest file.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-UpdateManifest"
Npm-UpdateTag
Method : Npm-UpdateTag
Method description : Associate a tag with an existing version.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Npm-UpdateTag"
Python-HeadFile
Method : Python-HeadFile
Method description : Check if a Python package binary file exists.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Python-HeadFile"
Python-HeadPackageVersions
Method : Python-HeadPackageVersions
Method description : Check if a Python package exists.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Python-HeadPackageVersions"
Python-InstallPackage
Method : Python-InstallPackage
Method description : Download a Python package binary file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Python-InstallPackage"
Python-PackageVersions
Method : Python-PackageVersions
Method description : Download the package index file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Python-PackageVersions"
Python-UploadPackage
Method : Python-UploadPackage
Method description : Upload a Python package binary file.
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Python-UploadPackage"
VirtualRepo-Auth
Method : VirtualRepo-Auth
Method description : Produced by the upstream repository when a virtual repository authenticates to it.
Audit log type : Data access
Permissions : artifactregistry.repositories.readViaVirtualRepository - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="VirtualRepo-Auth"
Yum-ViewIndexFile
Method : Yum-ViewIndexFile
Method description : Download a repository’s index file.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Yum-ViewIndexFile"
Yum-ViewIndexKey
Method : Yum-ViewIndexKey
Method description : Download the public key for signing Yum packages.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Yum-ViewIndexKey"
Yum-ViewPackageFile
Method : Yum-ViewPackageFile
Method description : Download a Yum package.
Audit log type : Data access
Permissions : artifactregistry.repositories.downloadArtifacts - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="Yum-ViewPackageFile"
google.devtools.artifactregistry.v1.ArtifactRegistry
The following audit logs are associated with methods belonging to
google.devtools.artifactregistry.v1.ArtifactRegistry .
BatchDeleteVersions
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions
Audit log type : Data access
Permissions : artifactregistry.versions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.BatchDeleteVersions"
CreateAttachment
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment
Audit log type : Admin activity
Permissions : artifactregistry.attachments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateAttachment"
CreateRepository
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRepository"
CreateRule
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule
Audit log type : Admin activity
Permissions : artifactregistry.rules.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateRule"
CreateTag
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.CreateTag"
DeleteAttachment
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment
Audit log type : Data access
Permissions : artifactregistry.attachments.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteAttachment"
DeleteFile
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile
Audit log type : Data access
Permissions : artifactregistry.files.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteFile"
DeletePackage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage
Audit log type : Data access
Permissions : artifactregistry.packages.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeletePackage"
DeleteRepository
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRepository"
DeleteRule
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule
Audit log type : Admin activity
Permissions : artifactregistry.rules.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteRule"
DeleteTag
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteTag"
DeleteVersion
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion
Audit log type : Data access
Permissions : artifactregistry.versions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DeleteVersion"
DownloadFile
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile
Audit log type : Data access
Permissions : artifactregistry.files.download - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.DownloadFile"
GetAttachment
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment
Audit log type : Data access
Permissions : artifactregistry.attachments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetAttachment"
GetDockerImage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage
Audit log type : Data access
Permissions : artifactregistry.dockerimages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetDockerImage"
GetFile
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile
Audit log type : Data access
Permissions : artifactregistry.files.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetFile"
GetIamPolicy
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy
Audit log type : Data access
Permissions : artifactregistry.repositories.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetIamPolicy"
GetMavenArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact
Audit log type : Data access
Permissions : artifactregistry.mavenartifacts.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetMavenArtifact"
GetNpmPackage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage
Audit log type : Data access
Permissions : artifactregistry.npmpackages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetNpmPackage"
GetPackage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage
Audit log type : Data access
Permissions : artifactregistry.packages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetPackage"
GetProjectSettings
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings
Audit log type : Data access
Permissions : artifactregistry.projectsettings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetProjectSettings"
GetPythonPackage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage
Audit log type : Data access
Permissions : artifactregistry.pythonpackages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetPythonPackage"
GetRepository
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository
Audit log type : Data access
Permissions : artifactregistry.repositories.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetRepository"
GetRule
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule
Audit log type : Data access
Permissions : artifactregistry.rules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetRule"
GetTag
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag
Audit log type : Data access
Permissions : artifactregistry.tags.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetTag"
GetVPCSCConfig
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig
Audit log type : Data access
Permissions : artifactregistry.vpcscconfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetVPCSCConfig"
GetVersion
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion
Audit log type : Data access
Permissions : artifactregistry.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.GetVersion"
ImportAptArtifacts
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts
Audit log type : Data access
Permissions : artifactregistry.aptartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ImportAptArtifacts"
ImportGoogetArtifacts
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts
Audit log type : Data access
Permissions : artifactregistry.googetartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ImportGoogetArtifacts"
ImportYumArtifacts
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts
Audit log type : Data access
Permissions : artifactregistry.yumartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ImportYumArtifacts"
ListAttachments
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments
Audit log type : Data access
Permissions : artifactregistry.attachments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListAttachments"
ListDockerImages
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages
Audit log type : Data access
Permissions : artifactregistry.dockerimages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListDockerImages"
ListFiles
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles
Audit log type : Data access
Permissions : artifactregistry.files.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListFiles"
ListMavenArtifacts
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts
Audit log type : Data access
Permissions : artifactregistry.mavenartifacts.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListMavenArtifacts"
ListNpmPackages
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages
Audit log type : Data access
Permissions : artifactregistry.npmpackages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListNpmPackages"
ListPackages
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages
Audit log type : Data access
Permissions : artifactregistry.packages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListPackages"
ListPythonPackages
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages
Audit log type : Data access
Permissions : artifactregistry.pythonpackages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListPythonPackages"
ListRepositories
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories
Audit log type : Data access
Permissions : artifactregistry.repositories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListRepositories"
ListRules
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules
Audit log type : Data access
Permissions : artifactregistry.rules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListRules"
ListTags
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags
Audit log type : Data access
Permissions : artifactregistry.tags.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListTags"
ListVersions
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions
Audit log type : Data access
Permissions : artifactregistry.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.ListVersions"
SetIamPolicy
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy
Audit log type : Admin activity
Permissions : artifactregistry.repositories.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.SetIamPolicy"
UpdateFile
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile
Audit log type : Admin activity
Permissions : artifactregistry.files.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateFile"
UpdatePackage
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage
Audit log type : Data access
Permissions : artifactregistry.packages.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdatePackage"
UpdateProjectSettings
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings
Audit log type : Admin activity
Permissions : artifactregistry.projectsettings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateProjectSettings"
UpdateRepository
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRepository"
UpdateRule
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule
Audit log type : Admin activity
Permissions : artifactregistry.rules.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateRule"
UpdateTag
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateTag"
UpdateVPCSCConfig
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig
Audit log type : Admin activity
Permissions : artifactregistry.vpcscconfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVPCSCConfig"
UpdateVersion
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion
Audit log type : Admin activity
Permissions : artifactregistry.versions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UpdateVersion"
UploadAptArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact
Audit log type : Data access
Permissions : artifactregistry.aptartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadAptArtifact"
UploadFile
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile
Audit log type : Data access
Permissions : artifactregistry.files.upload - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadFile"
UploadGenericArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact
Audit log type : Data access
Permissions : artifactregistry.repositories.uploadArtifacts - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGenericArtifact"
UploadGoModule
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule
Audit log type : Data access
Permissions : artifactregistry.gomodules.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoModule"
UploadGoogetArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact
Audit log type : Data access
Permissions : artifactregistry.googetartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadGoogetArtifact"
UploadKfpArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact
Audit log type : Data access
Permissions : artifactregistry.kfpartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadKfpArtifact"
UploadYumArtifact
Method : google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact
Audit log type : Data access
Permissions : artifactregistry.yumartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1.ArtifactRegistry.UploadYumArtifact"
google.devtools.artifactregistry.v1beta1.ArtifactRegistry
The following audit logs are associated with methods belonging to
google.devtools.artifactregistry.v1beta1.ArtifactRegistry .
CreateRepository
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateRepository"
CreateTag
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.CreateTag"
DeletePackage
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage
Audit log type : Data access
Permissions : artifactregistry.packages.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeletePackage"
DeleteRepository
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteRepository"
DeleteTag
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteTag"
DeleteVersion
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion
Audit log type : Data access
Permissions : artifactregistry.versions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.DeleteVersion"
GetFile
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile
Audit log type : Data access
Permissions : artifactregistry.files.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetFile"
GetIamPolicy
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy
Audit log type : Data access
Permissions : artifactregistry.repositories.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetIamPolicy"
GetPackage
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage
Audit log type : Data access
Permissions : artifactregistry.packages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetPackage"
GetRepository
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository
Audit log type : Data access
Permissions : artifactregistry.repositories.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetRepository"
GetTag
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag
Audit log type : Data access
Permissions : artifactregistry.tags.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetTag"
GetVersion
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion
Audit log type : Data access
Permissions : artifactregistry.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.GetVersion"
ListFiles
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles
Audit log type : Data access
Permissions : artifactregistry.files.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListFiles"
ListPackages
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages
Audit log type : Data access
Permissions : artifactregistry.packages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListPackages"
ListRepositories
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories
Audit log type : Data access
Permissions : artifactregistry.repositories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListRepositories"
ListTags
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags
Audit log type : Data access
Permissions : artifactregistry.tags.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListTags"
ListVersions
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions
Audit log type : Data access
Permissions : artifactregistry.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.ListVersions"
SetIamPolicy
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy
Audit log type : Admin activity
Permissions : artifactregistry.repositories.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.SetIamPolicy"
UpdateRepository
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateRepository"
UpdateTag
Method : google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta1.ArtifactRegistry.UpdateTag"
google.devtools.artifactregistry.v1beta2.ArtifactRegistry
The following audit logs are associated with methods belonging to
google.devtools.artifactregistry.v1beta2.ArtifactRegistry .
CreateRepository
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateRepository"
CreateTag
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.CreateTag"
DeletePackage
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage
Audit log type : Data access
Permissions : artifactregistry.packages.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeletePackage"
DeleteRepository
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteRepository"
DeleteTag
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteTag"
DeleteVersion
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion
Audit log type : Data access
Permissions : artifactregistry.versions.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DeleteVersion"
DownloadFile
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile
Audit log type : Data access
Permissions : artifactregistry.files.download - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.DownloadFile"
GetFile
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile
Audit log type : Data access
Permissions : artifactregistry.files.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetFile"
GetIamPolicy
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy
Audit log type : Data access
Permissions : artifactregistry.repositories.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetIamPolicy"
GetPackage
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage
Audit log type : Data access
Permissions : artifactregistry.packages.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetPackage"
GetProjectSettings
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings
Audit log type : Data access
Permissions : artifactregistry.projectsettings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetProjectSettings"
GetRepository
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository
Audit log type : Data access
Permissions : artifactregistry.repositories.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetRepository"
GetTag
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag
Audit log type : Data access
Permissions : artifactregistry.tags.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetTag"
GetVersion
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion
Audit log type : Data access
Permissions : artifactregistry.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.GetVersion"
ImportAptArtifacts
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts
Audit log type : Data access
Permissions : artifactregistry.aptartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportAptArtifacts"
ImportYumArtifacts
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts
Audit log type : Data access
Permissions : artifactregistry.yumartifacts.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ImportYumArtifacts"
ListFiles
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles
Audit log type : Data access
Permissions : artifactregistry.files.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListFiles"
ListPackages
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages
Audit log type : Data access
Permissions : artifactregistry.packages.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListPackages"
ListRepositories
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories
Audit log type : Data access
Permissions : artifactregistry.repositories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListRepositories"
ListTags
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags
Audit log type : Data access
Permissions : artifactregistry.tags.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListTags"
ListVersions
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions
Audit log type : Data access
Permissions : artifactregistry.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.ListVersions"
SetIamPolicy
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy
Audit log type : Admin activity
Permissions : artifactregistry.repositories.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.SetIamPolicy"
UpdatePackage
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage
Audit log type : Data access
Permissions : artifactregistry.packages.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdatePackage"
UpdateProjectSettings
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings
Audit log type : Admin activity
Permissions : artifactregistry.projectsettings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateProjectSettings"
UpdateRepository
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository
Audit log type : Admin activity
Permissions : artifactregistry.repositories.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateRepository"
UpdateTag
Method : google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag
Audit log type : Admin activity
Permissions : artifactregistry.tags.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.artifactregistry.v1beta2.ArtifactRegistry.UpdateTag"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.devtools.artifactregistry.v1.ArtifactRegistry.TestIamPermissions
google.devtools.artifactregistry.v1beta1.ArtifactRegistry.TestIamPermissions
google.devtools.artifactregistry.v1beta2.ArtifactRegistry.TestIamPermissions
google.longrunning.Operations.GetOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
