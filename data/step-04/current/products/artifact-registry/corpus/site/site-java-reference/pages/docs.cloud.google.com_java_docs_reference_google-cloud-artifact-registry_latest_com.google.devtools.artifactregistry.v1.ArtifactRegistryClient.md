---
title: "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient
  title: "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class ArtifactRegistryClient (1.87.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.87.0 (latest)
1.86.0
1.84.0
1.82.0
1.81.0
1.80.0
1.79.0
1.77.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.0
1.69.0
1.67.0
1.66.0
1.63.0
1.62.0
1.61.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.9
1.1.1
0.5.0
0.4.0
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: The Artifact Registry API service.
Artifact Registry is an artifact management system for storing artifacts from different
package management systems.
The resources managed by this API are:
Repositories, which group packages and their data.
Packages, which group versions and their tags.
Versions, which are specific forms of a package.
Tags, which represent alternative names for versions.
Files, which contain content and are optionally associated with a Package or Version.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DockerImageName name =
DockerImageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[DOCKER_IMAGE]" );
DockerImage response = artifactRegistryClient . getDockerImage ( name );
}
Note: close() needs to be called on the ArtifactRegistryClient object to clean up resources
such as threads. In the example above, try-with-resources is used, which automatically calls
close().
Methods
Method
Description
Method Variants
ListDockerImages
Lists docker images.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listDockerImages(ListDockerImagesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listDockerImages(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listDockerImagesPagedCallable()
listDockerImagesCallable()
GetDockerImage
Gets a docker image.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getDockerImage(GetDockerImageRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getDockerImage(DockerImageName name)
getDockerImage(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getDockerImageCallable()
ListMavenArtifacts
Lists maven artifacts.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listMavenArtifacts(ListMavenArtifactsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listMavenArtifacts(RepositoryName parent)
listMavenArtifacts(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listMavenArtifactsPagedCallable()
listMavenArtifactsCallable()
GetMavenArtifact
Gets a maven artifact.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getMavenArtifact(GetMavenArtifactRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getMavenArtifact(MavenArtifactName name)
getMavenArtifact(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getMavenArtifactCallable()
ListNpmPackages
Lists npm packages.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listNpmPackages(ListNpmPackagesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listNpmPackages(RepositoryName parent)
listNpmPackages(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listNpmPackagesPagedCallable()
listNpmPackagesCallable()
GetNpmPackage
Gets a npm package.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getNpmPackage(GetNpmPackageRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getNpmPackage(NpmPackageName name)
getNpmPackage(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getNpmPackageCallable()
ListPythonPackages
Lists python packages.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listPythonPackages(ListPythonPackagesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listPythonPackages(RepositoryName parent)
listPythonPackages(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listPythonPackagesPagedCallable()
listPythonPackagesCallable()
GetPythonPackage
Gets a python package.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getPythonPackage(GetPythonPackageRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getPythonPackage(PythonPackageName name)
getPythonPackage(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getPythonPackageCallable()
ImportAptArtifacts
Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
importAptArtifactsAsync(ImportAptArtifactsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
importAptArtifactsOperationCallable()
importAptArtifactsCallable()
ImportYumArtifacts
Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
importYumArtifactsAsync(ImportYumArtifactsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
importYumArtifactsOperationCallable()
importYumArtifactsCallable()
ListRepositories
Lists repositories.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listRepositories(ListRepositoriesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listRepositories(LocationName parent)
listRepositories(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listRepositoriesPagedCallable()
listRepositoriesCallable()
GetRepository
Gets a repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getRepository(GetRepositoryRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getRepository(RepositoryName name)
getRepository(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getRepositoryCallable()
CreateRepository
Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createRepositoryAsync(CreateRepositoryRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createRepositoryAsync(LocationName parent, Repository repository, String repositoryId)
createRepositoryAsync(String parent, Repository repository, String repositoryId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createRepositoryOperationCallable()
createRepositoryCallable()
UpdateRepository
Updates a repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateRepository(UpdateRepositoryRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateRepository(Repository repository, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateRepositoryCallable()
DeleteRepository
Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteRepositoryAsync(DeleteRepositoryRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteRepositoryAsync(RepositoryName name)
deleteRepositoryAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteRepositoryOperationCallable()
deleteRepositoryCallable()
ListPackages
Lists packages.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listPackages(ListPackagesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listPackages(RepositoryName parent)
listPackages(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listPackagesPagedCallable()
listPackagesCallable()
GetPackage
Gets a package.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getPackage(GetPackageRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getPackage(PackageName name)
getPackage(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getPackageCallable()
DeletePackage
Deletes a package and all of its versions and tags. The returned operation will complete once the package has been deleted.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deletePackageAsync(DeletePackageRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deletePackageAsync(PackageName name)
deletePackageAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deletePackageOperationCallable()
deletePackageCallable()
ListVersions
Lists versions.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listVersions(ListVersionsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listVersions(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listVersionsPagedCallable()
listVersionsCallable()
GetVersion
Gets a version
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getVersion(GetVersionRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getVersion(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getVersionCallable()
DeleteVersion
Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteVersionAsync(DeleteVersionRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteVersionAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteVersionOperationCallable()
deleteVersionCallable()
BatchDeleteVersions
Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
batchDeleteVersionsAsync(BatchDeleteVersionsRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
batchDeleteVersionsAsync(PackageName parent, List<String> names)
batchDeleteVersionsAsync(String parent, List<String> names)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
batchDeleteVersionsOperationCallable()
batchDeleteVersionsCallable()
UpdateVersion
Updates a version.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateVersion(UpdateVersionRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateVersion(Version version, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateVersionCallable()
ListFiles
Lists files.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listFiles(ListFilesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listFiles(RepositoryName parent)
listFiles(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listFilesPagedCallable()
listFilesCallable()
GetFile
Gets a file.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getFile(GetFileRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getFile(FileName name)
getFile(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getFileCallable()
DeleteFile
Deletes a file and all of its content. It is only allowed on generic repositories. The returned operation will complete once the file has been deleted.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteFileAsync(DeleteFileRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteFileAsync(FileName name)
deleteFileAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteFileOperationCallable()
deleteFileCallable()
UpdateFile
Updates a file.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateFile(UpdateFileRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateFile(File file, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateFileCallable()
ListTags
Lists tags.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listTags(ListTagsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listTags(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listTagsPagedCallable()
listTagsCallable()
GetTag
Gets a tag.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getTag(GetTagRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getTag(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getTagCallable()
CreateTag
Creates a tag.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createTag(CreateTagRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createTag(String parent, Tag tag, String tagId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createTagCallable()
UpdateTag
Updates a tag.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateTag(UpdateTagRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateTag(Tag tag, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateTagCallable()
DeleteTag
Deletes a tag.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteTag(DeleteTagRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteTag(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteTagCallable()
CreateRule
Creates a rule.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createRule(CreateRuleRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createRule(RepositoryName parent, Rule rule, String ruleId)
createRule(String parent, Rule rule, String ruleId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createRuleCallable()
ListRules
Lists rules.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listRules(ListRulesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listRules(RepositoryName parent)
listRules(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listRulesPagedCallable()
listRulesCallable()
GetRule
Gets a rule.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getRule(GetRuleRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getRule(RuleName name)
getRule(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getRuleCallable()
UpdateRule
Updates a rule.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateRule(UpdateRuleRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateRule(Rule rule, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateRuleCallable()
DeleteRule
Deletes a rule.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteRule(DeleteRuleRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteRule(RuleName name)
deleteRule(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteRuleCallable()
SetIamPolicy
Updates the IAM policy for a given resource.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
setIamPolicy(SetIamPolicyRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
setIamPolicyCallable()
GetIamPolicy
Gets the IAM policy for a given resource.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getIamPolicy(GetIamPolicyRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getIamPolicyCallable()
TestIamPermissions
Tests if the caller has a list of permissions on a resource.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
testIamPermissions(TestIamPermissionsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
testIamPermissionsCallable()
GetProjectSettings
Retrieves the Settings for the Project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getProjectSettings(GetProjectSettingsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getProjectSettings(ProjectSettingsName name)
getProjectSettings(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getProjectSettingsCallable()
UpdateProjectSettings
Updates the Settings for the Project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateProjectSettings(UpdateProjectSettingsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateProjectSettings(ProjectSettings projectSettings, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateProjectSettingsCallable()
GetVPCSCConfig
Retrieves the VPCSC Config for the Project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getVPCSCConfig(GetVPCSCConfigRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getVPCSCConfig(VpcscConfigName name)
getVPCSCConfig(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getVPCSCConfigCallable()
UpdateVPCSCConfig
Updates the VPCSC Config for the Project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateVPCSCConfig(UpdateVPCSCConfigRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateVPCSCConfig(VPCSCConfig vpcscConfig, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateVPCSCConfigCallable()
UpdatePackage
Updates a package.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updatePackage(UpdatePackageRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updatePackage(Package package_, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updatePackageCallable()
ListAttachments
Lists attachments.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listAttachments(ListAttachmentsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listAttachments(RepositoryName parent)
listAttachments(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listAttachmentsPagedCallable()
listAttachmentsCallable()
GetAttachment
Gets an attachment.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getAttachment(GetAttachmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getAttachment(AttachmentName name)
getAttachment(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getAttachmentCallable()
CreateAttachment
Creates an attachment. The returned Operation will finish once the attachment has been created. Its response will be the created attachment.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createAttachmentAsync(CreateAttachmentRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createAttachmentAsync(RepositoryName parent, Attachment attachment, String attachmentId)
createAttachmentAsync(String parent, Attachment attachment, String attachmentId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createAttachmentOperationCallable()
createAttachmentCallable()
DeleteAttachment
Deletes an attachment. The returned Operation will finish once the attachments has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteAttachmentAsync(DeleteAttachmentRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteAttachmentAsync(AttachmentName name)
deleteAttachmentAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteAttachmentOperationCallable()
deleteAttachmentCallable()
ExportArtifact
Exports an artifact to a Cloud Storage bucket.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
exportArtifactAsync(ExportArtifactRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
exportArtifactOperationCallable()
exportArtifactCallable()
ListLocations
Lists information about the supported locations for this service.This method can be called in two ways:
* **List all public locations:** Use the path GET /v1/locations .* **List project-visible locations:** Use the path GET /v1/projects/{project_id}/locations . This may include publiclocations as well as private or other locations specifically visibleto the project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listLocations(ListLocationsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listLocationsPagedCallable()
listLocationsCallable()
GetLocation
Gets information about a location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getLocation(GetLocationRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getLocationCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of ArtifactRegistrySettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ArtifactRegistrySettings artifactRegistrySettings =
ArtifactRegistrySettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
ArtifactRegistryClient artifactRegistryClient =
ArtifactRegistryClient . create ( artifactRegistrySettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ArtifactRegistrySettings artifactRegistrySettings =
ArtifactRegistrySettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
ArtifactRegistryClient artifactRegistryClient =
ArtifactRegistryClient . create ( artifactRegistrySettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ArtifactRegistrySettings artifactRegistrySettings =
ArtifactRegistrySettings . newHttpJsonBuilder (). build ();
ArtifactRegistryClient artifactRegistryClient =
ArtifactRegistryClient . create ( artifactRegistrySettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
ArtifactRegistryClient
Static Methods
create()
public static final ArtifactRegistryClient create ()
Constructs an instance of ArtifactRegistryClient with default settings.
Returns
Type
Description
ArtifactRegistryClient
Exceptions
Type
Description
IOException
create(ArtifactRegistrySettings settings)
public static final ArtifactRegistryClient create ( ArtifactRegistrySettings settings )
Constructs an instance of ArtifactRegistryClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
ArtifactRegistrySettings
Returns
Type
Description
ArtifactRegistryClient
Exceptions
Type
Description
IOException
create(ArtifactRegistryStub stub)
public static final ArtifactRegistryClient create ( ArtifactRegistryStub stub )
Constructs an instance of ArtifactRegistryClient, using the given stub for making calls. This
is for advanced usage - prefer using create(ArtifactRegistrySettings).
Parameter
Name
Description
stub
ArtifactRegistryStub
Returns
Type
Description
ArtifactRegistryClient
Constructors
ArtifactRegistryClient(ArtifactRegistrySettings settings)
protected ArtifactRegistryClient ( ArtifactRegistrySettings settings )
Constructs an instance of ArtifactRegistryClient, using the given settings. This is protected
so that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
ArtifactRegistrySettings
ArtifactRegistryClient(ArtifactRegistryStub stub)
protected ArtifactRegistryClient ( ArtifactRegistryStub stub )
Parameter
Name
Description
stub
ArtifactRegistryStub
Methods
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
batchDeleteVersionsAsync(BatchDeleteVersionsRequest request)
public final OperationFuture<Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsAsync ( BatchDeleteVersionsRequest request )
Deletes multiple versions across a repository. The returned operation will complete once the
versions have been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
BatchDeleteVersionsRequest request =
BatchDeleteVersionsRequest . newBuilder ()
. setParent (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. addAllNames ( new ArrayList<String> ())
. setValidateOnly ( true )
. build ();
artifactRegistryClient . batchDeleteVersionsAsync ( request ). get ();
}
Parameter
Name
Description
request
BatchDeleteVersionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , BatchDeleteVersionsMetadata >
batchDeleteVersionsAsync(PackageName parent, List<String> names)
public final OperationFuture<Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsAsync ( PackageName parent , List<String> names )
Deletes multiple versions across a repository. The returned operation will complete once the
versions have been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
PackageName parent = PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" );
List<String> names = new ArrayList <> ();
artifactRegistryClient . batchDeleteVersionsAsync ( parent , names ). get ();
}
Parameters
Name
Description
parent
PackageName The name of the repository holding all requested versions.
names
List < String > Required. The names of the versions to delete. The maximum number of versions
deleted per batch is determined by the service and is dependent on the available resources
in the region.
Returns
Type
Description
OperationFuture < Empty , BatchDeleteVersionsMetadata >
batchDeleteVersionsAsync(String parent, List<String> names)
public final OperationFuture<Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsAsync ( String parent , List<String> names )
Deletes multiple versions across a repository. The returned operation will complete once the
versions have been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent =
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ();
List<String> names = new ArrayList <> ();
artifactRegistryClient . batchDeleteVersionsAsync ( parent , names ). get ();
}
Parameters
Name
Description
parent
String The name of the repository holding all requested versions.
names
List < String > Required. The names of the versions to delete. The maximum number of versions
deleted per batch is determined by the service and is dependent on the available resources
in the region.
Returns
Type
Description
OperationFuture < Empty , BatchDeleteVersionsMetadata >
batchDeleteVersionsCallable()
public final UnaryCallable<BatchDeleteVersionsRequest , Operation > batchDeleteVersionsCallable ()
Deletes multiple versions across a repository. The returned operation will complete once the
versions have been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
BatchDeleteVersionsRequest request =
BatchDeleteVersionsRequest . newBuilder ()
. setParent (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. addAllNames ( new ArrayList<String> ())
. setValidateOnly ( true )
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . batchDeleteVersionsCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < BatchDeleteVersionsRequest , Operation >
batchDeleteVersionsOperationCallable()
public final OperationCallable<BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsOperationCallable ()
Deletes multiple versions across a repository. The returned operation will complete once the
versions have been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
BatchDeleteVersionsRequest request =
BatchDeleteVersionsRequest . newBuilder ()
. setParent (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. addAllNames ( new ArrayList<String> ())
. setValidateOnly ( true )
. build ();
OperationFuture<Empty , BatchDeleteVersionsMetadata > future =
artifactRegistryClient . batchDeleteVersionsOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata >
close()
public final void close ()
createAttachmentAsync(CreateAttachmentRequest request)
public final OperationFuture<Attachment , OperationMetadata > createAttachmentAsync ( CreateAttachmentRequest request )
Creates an attachment. The returned Operation will finish once the attachment has been created.
Its response will be the created attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateAttachmentRequest request =
CreateAttachmentRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setAttachmentId ( "attachmentId-1434081890" )
. setAttachment ( Attachment . newBuilder (). build ())
. build ();
Attachment response = artifactRegistryClient . createAttachmentAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Attachment , OperationMetadata >
createAttachmentAsync(RepositoryName parent, Attachment attachment, String attachmentId)
public final OperationFuture<Attachment , OperationMetadata > createAttachmentAsync ( RepositoryName parent , Attachment attachment , String attachmentId )
Creates an attachment. The returned Operation will finish once the attachment has been created.
Its response will be the created attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
Attachment attachment = Attachment . newBuilder (). build ();
String attachmentId = "attachmentId-1434081890" ;
Attachment response =
artifactRegistryClient . createAttachmentAsync ( parent , attachment , attachmentId ). get ();
}
Parameters
Name
Description
parent
RepositoryName Required. The name of the parent resource where the attachment will be created.
attachment
Attachment Required. The attachment to be created.
attachmentId
String Required. The attachment id to use for this attachment.
Returns
Type
Description
OperationFuture < Attachment , OperationMetadata >
createAttachmentAsync(String parent, Attachment attachment, String attachmentId)
public final OperationFuture<Attachment , OperationMetadata > createAttachmentAsync ( String parent , Attachment attachment , String attachmentId )
Creates an attachment. The returned Operation will finish once the attachment has been created.
Its response will be the created attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
Attachment attachment = Attachment . newBuilder (). build ();
String attachmentId = "attachmentId-1434081890" ;
Attachment response =
artifactRegistryClient . createAttachmentAsync ( parent , attachment , attachmentId ). get ();
}
Parameters
Name
Description
parent
String Required. The name of the parent resource where the attachment will be created.
attachment
Attachment Required. The attachment to be created.
attachmentId
String Required. The attachment id to use for this attachment.
Returns
Type
Description
OperationFuture < Attachment , OperationMetadata >
createAttachmentCallable()
public final UnaryCallable<CreateAttachmentRequest , Operation > createAttachmentCallable ()
Creates an attachment. The returned Operation will finish once the attachment has been created.
Its response will be the created attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateAttachmentRequest request =
CreateAttachmentRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setAttachmentId ( "attachmentId-1434081890" )
. setAttachment ( Attachment . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . createAttachmentCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateAttachmentRequest , Operation >
createAttachmentOperationCallable()
public final OperationCallable<CreateAttachmentRequest , Attachment , OperationMetadata > createAttachmentOperationCallable ()
Creates an attachment. The returned Operation will finish once the attachment has been created.
Its response will be the created attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateAttachmentRequest request =
CreateAttachmentRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setAttachmentId ( "attachmentId-1434081890" )
. setAttachment ( Attachment . newBuilder (). build ())
. build ();
OperationFuture<Attachment , OperationMetadata > future =
artifactRegistryClient . createAttachmentOperationCallable (). futureCall ( request );
// Do something.
Attachment response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateAttachmentRequest , Attachment , OperationMetadata >
createRepositoryAsync(CreateRepositoryRequest request)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( CreateRepositoryRequest request )
Creates a repository. The returned Operation will finish once the repository has been created.
Its response will be the created Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setRepositoryId ( "repositoryId2113747461" )
. setRepository ( Repository . newBuilder (). build ())
. build ();
Repository response = artifactRegistryClient . createRepositoryAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryAsync(LocationName parent, Repository repository, String repositoryId)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( LocationName parent , Repository repository , String repositoryId )
Creates a repository. The returned Operation will finish once the repository has been created.
Its response will be the created Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Repository repository = Repository . newBuilder (). build ();
String repositoryId = "repositoryId2113747461" ;
Repository response =
artifactRegistryClient . createRepositoryAsync ( parent , repository , repositoryId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. The name of the parent resource where the repository will be created.
repository
Repository Required. The repository to be created.
repositoryId
String Required. The repository id to use for this repository.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryAsync(String parent, Repository repository, String repositoryId)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( String parent , Repository repository , String repositoryId )
Creates a repository. The returned Operation will finish once the repository has been created.
Its response will be the created Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Repository repository = Repository . newBuilder (). build ();
String repositoryId = "repositoryId2113747461" ;
Repository response =
artifactRegistryClient . createRepositoryAsync ( parent , repository , repositoryId ). get ();
}
Parameters
Name
Description
parent
String Required. The name of the parent resource where the repository will be created.
repository
Repository Required. The repository to be created.
repositoryId
String Required. The repository id to use for this repository.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryCallable()
public final UnaryCallable<CreateRepositoryRequest , Operation > createRepositoryCallable ()
Creates a repository. The returned Operation will finish once the repository has been created.
Its response will be the created Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setRepositoryId ( "repositoryId2113747461" )
. setRepository ( Repository . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . createRepositoryCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateRepositoryRequest , Operation >
createRepositoryOperationCallable()
public final OperationCallable<CreateRepositoryRequest , Repository , OperationMetadata > createRepositoryOperationCallable ()
Creates a repository. The returned Operation will finish once the repository has been created.
Its response will be the created Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setRepositoryId ( "repositoryId2113747461" )
. setRepository ( Repository . newBuilder (). build ())
. build ();
OperationFuture<Repository , OperationMetadata > future =
artifactRegistryClient . createRepositoryOperationCallable (). futureCall ( request );
// Do something.
Repository response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateRepositoryRequest , Repository , OperationMetadata >
createRule(CreateRuleRequest request)
public final Rule createRule ( CreateRuleRequest request )
Creates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateRuleRequest request =
CreateRuleRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setRuleId ( "ruleId-919875273" )
. setRule ( Rule . newBuilder (). build ())
. build ();
Rule response = artifactRegistryClient . createRule ( request );
}
Parameter
Name
Description
request
CreateRuleRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Rule
createRule(RepositoryName parent, Rule rule, String ruleId)
public final Rule createRule ( RepositoryName parent , Rule rule , String ruleId )
Creates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
Rule rule = Rule . newBuilder (). build ();
String ruleId = "ruleId-919875273" ;
Rule response = artifactRegistryClient . createRule ( parent , rule , ruleId );
}
Parameters
Name
Description
parent
RepositoryName Required. The name of the parent resource where the rule will be created.
rule
Rule The rule to be created.
ruleId
String The rule id to use for this repository.
Returns
Type
Description
Rule
createRule(String parent, Rule rule, String ruleId)
public final Rule createRule ( String parent , Rule rule , String ruleId )
Creates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
Rule rule = Rule . newBuilder (). build ();
String ruleId = "ruleId-919875273" ;
Rule response = artifactRegistryClient . createRule ( parent , rule , ruleId );
}
Parameters
Name
Description
parent
String Required. The name of the parent resource where the rule will be created.
rule
Rule The rule to be created.
ruleId
String The rule id to use for this repository.
Returns
Type
Description
Rule
createRuleCallable()
public final UnaryCallable<CreateRuleRequest , Rule > createRuleCallable ()
Creates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateRuleRequest request =
CreateRuleRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setRuleId ( "ruleId-919875273" )
. setRule ( Rule . newBuilder (). build ())
. build ();
ApiFuture<Rule> future = artifactRegistryClient . createRuleCallable (). futureCall ( request );
// Do something.
Rule response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateRuleRequest , Rule >
createTag(CreateTagRequest request)
public final Tag createTag ( CreateTagRequest request )
Creates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateTagRequest request =
CreateTagRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setTagId ( "tagId110119509" )
. setTag ( Tag . newBuilder (). build ())
. build ();
Tag response = artifactRegistryClient . createTag ( request );
}
Parameter
Name
Description
request
CreateTagRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Tag
createTag(String parent, Tag tag, String tagId)
public final Tag createTag ( String parent , Tag tag , String tagId )
Creates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = "parent-995424086" ;
Tag tag = Tag . newBuilder (). build ();
String tagId = "tagId110119509" ;
Tag response = artifactRegistryClient . createTag ( parent , tag , tagId );
}
Parameters
Name
Description
parent
String The name of the parent resource where the tag will be created.
tag
Tag The tag to be created.
tagId
String The tag id to use for this repository.
Returns
Type
Description
Tag
createTagCallable()
public final UnaryCallable<CreateTagRequest , Tag > createTagCallable ()
Creates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
CreateTagRequest request =
CreateTagRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setTagId ( "tagId110119509" )
. setTag ( Tag . newBuilder (). build ())
. build ();
ApiFuture<Tag> future = artifactRegistryClient . createTagCallable (). futureCall ( request );
// Do something.
Tag response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateTagRequest , Tag >
deleteAttachmentAsync(AttachmentName name)
public final OperationFuture<Empty , OperationMetadata > deleteAttachmentAsync ( AttachmentName name )
Deletes an attachment. The returned Operation will finish once the attachments has been
deleted. It will not have any Operation metadata and will return a google.protobuf.Empty
response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
AttachmentName name =
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" );
artifactRegistryClient . deleteAttachmentAsync ( name ). get ();
}
Parameter
Name
Description
name
AttachmentName Required. The name of the attachment to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteAttachmentAsync(DeleteAttachmentRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteAttachmentAsync ( DeleteAttachmentRequest request )
Deletes an attachment. The returned Operation will finish once the attachments has been
deleted. It will not have any Operation metadata and will return a google.protobuf.Empty
response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteAttachmentRequest request =
DeleteAttachmentRequest . newBuilder ()
. setName (
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" )
. toString ())
. build ();
artifactRegistryClient . deleteAttachmentAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteAttachmentAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteAttachmentAsync ( String name )
Deletes an attachment. The returned Operation will finish once the attachments has been
deleted. It will not have any Operation metadata and will return a google.protobuf.Empty
response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" ). toString ();
artifactRegistryClient . deleteAttachmentAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the attachment to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteAttachmentCallable()
public final UnaryCallable<DeleteAttachmentRequest , Operation > deleteAttachmentCallable ()
Deletes an attachment. The returned Operation will finish once the attachments has been
deleted. It will not have any Operation metadata and will return a google.protobuf.Empty
response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteAttachmentRequest request =
DeleteAttachmentRequest . newBuilder ()
. setName (
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" )
. toString ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . deleteAttachmentCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteAttachmentRequest , Operation >
deleteAttachmentOperationCallable()
public final OperationCallable<DeleteAttachmentRequest , Empty , OperationMetadata > deleteAttachmentOperationCallable ()
Deletes an attachment. The returned Operation will finish once the attachments has been
deleted. It will not have any Operation metadata and will return a google.protobuf.Empty
response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteAttachmentRequest request =
DeleteAttachmentRequest . newBuilder ()
. setName (
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" )
. toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
artifactRegistryClient . deleteAttachmentOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteAttachmentRequest , Empty , OperationMetadata >
deleteFileAsync(DeleteFileRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteFileAsync ( DeleteFileRequest request )
Deletes a file and all of its content. It is only allowed on generic repositories. The returned
operation will complete once the file has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteFileRequest request =
DeleteFileRequest . newBuilder ()
. setName ( FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ())
. build ();
artifactRegistryClient . deleteFileAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteFileRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteFileAsync(FileName name)
public final OperationFuture<Empty , OperationMetadata > deleteFileAsync ( FileName name )
Deletes a file and all of its content. It is only allowed on generic repositories. The returned
operation will complete once the file has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
FileName name = FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" );
artifactRegistryClient . deleteFileAsync ( name ). get ();
}
Parameter
Name
Description
name
FileName Required. The name of the file to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteFileAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteFileAsync ( String name )
Deletes a file and all of its content. It is only allowed on generic repositories. The returned
operation will complete once the file has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ();
artifactRegistryClient . deleteFileAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the file to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteFileCallable()
public final UnaryCallable<DeleteFileRequest , Operation > deleteFileCallable ()
Deletes a file and all of its content. It is only allowed on generic repositories. The returned
operation will complete once the file has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteFileRequest request =
DeleteFileRequest . newBuilder ()
. setName ( FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ())
. build ();
ApiFuture<Operation> future = artifactRegistryClient . deleteFileCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteFileRequest , Operation >
deleteFileOperationCallable()
public final OperationCallable<DeleteFileRequest , Empty , OperationMetadata > deleteFileOperationCallable ()
Deletes a file and all of its content. It is only allowed on generic repositories. The returned
operation will complete once the file has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteFileRequest request =
DeleteFileRequest . newBuilder ()
. setName ( FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
artifactRegistryClient . deleteFileOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteFileRequest , Empty , OperationMetadata >
deletePackageAsync(DeletePackageRequest request)
public final OperationFuture<Empty , OperationMetadata > deletePackageAsync ( DeletePackageRequest request )
Deletes a package and all of its versions and tags. The returned operation will complete once
the package has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeletePackageRequest request =
DeletePackageRequest . newBuilder ()
. setName (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. build ();
artifactRegistryClient . deletePackageAsync ( request ). get ();
}
Parameter
Name
Description
request
DeletePackageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deletePackageAsync(PackageName name)
public final OperationFuture<Empty , OperationMetadata > deletePackageAsync ( PackageName name )
Deletes a package and all of its versions and tags. The returned operation will complete once
the package has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
PackageName name = PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" );
artifactRegistryClient . deletePackageAsync ( name ). get ();
}
Parameter
Name
Description
name
PackageName Required. The name of the package to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deletePackageAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deletePackageAsync ( String name )
Deletes a package and all of its versions and tags. The returned operation will complete once
the package has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ();
artifactRegistryClient . deletePackageAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the package to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deletePackageCallable()
public final UnaryCallable<DeletePackageRequest , Operation > deletePackageCallable ()
Deletes a package and all of its versions and tags. The returned operation will complete once
the package has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeletePackageRequest request =
DeletePackageRequest . newBuilder ()
. setName (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . deletePackageCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeletePackageRequest , Operation >
deletePackageOperationCallable()
public final OperationCallable<DeletePackageRequest , Empty , OperationMetadata > deletePackageOperationCallable ()
Deletes a package and all of its versions and tags. The returned operation will complete once
the package has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeletePackageRequest request =
DeletePackageRequest . newBuilder ()
. setName (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
artifactRegistryClient . deletePackageOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeletePackageRequest , Empty , OperationMetadata >
deleteRepositoryAsync(DeleteRepositoryRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( DeleteRepositoryRequest request )
Deletes a repository and all of its contents. The returned Operation will finish once the
repository has been deleted. It will not have any Operation metadata and will return a
google.protobuf.Empty response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
artifactRegistryClient . deleteRepositoryAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryAsync(RepositoryName name)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( RepositoryName name )
Deletes a repository and all of its contents. The returned Operation will finish once the
repository has been deleted. It will not have any Operation metadata and will return a
google.protobuf.Empty response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName name = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
artifactRegistryClient . deleteRepositoryAsync ( name ). get ();
}
Parameter
Name
Description
name
RepositoryName Required. The name of the repository to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( String name )
Deletes a repository and all of its contents. The returned Operation will finish once the
repository has been deleted. It will not have any Operation metadata and will return a
google.protobuf.Empty response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
artifactRegistryClient . deleteRepositoryAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the repository to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryCallable()
public final UnaryCallable<DeleteRepositoryRequest , Operation > deleteRepositoryCallable ()
Deletes a repository and all of its contents. The returned Operation will finish once the
repository has been deleted. It will not have any Operation metadata and will return a
google.protobuf.Empty response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . deleteRepositoryCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteRepositoryRequest , Operation >
deleteRepositoryOperationCallable()
public final OperationCallable<DeleteRepositoryRequest , Empty , OperationMetadata > deleteRepositoryOperationCallable ()
Deletes a repository and all of its contents. The returned Operation will finish once the
repository has been deleted. It will not have any Operation metadata and will return a
google.protobuf.Empty response.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
artifactRegistryClient . deleteRepositoryOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteRepositoryRequest , Empty , OperationMetadata >
deleteRule(DeleteRuleRequest request)
public final void deleteRule ( DeleteRuleRequest request )
Deletes a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteRuleRequest request =
DeleteRuleRequest . newBuilder ()
. setName ( RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ())
. build ();
artifactRegistryClient . deleteRule ( request );
}
Parameter
Name
Description
request
DeleteRuleRequest The request object containing all of the parameters for the API call.
deleteRule(RuleName name)
public final void deleteRule ( RuleName name )
Deletes a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RuleName name = RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" );
artifactRegistryClient . deleteRule ( name );
}
Parameter
Name
Description
name
RuleName Required. The name of the rule to delete.
deleteRule(String name)
public final void deleteRule ( String name )
Deletes a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ();
artifactRegistryClient . deleteRule ( name );
}
Parameter
Name
Description
name
String Required. The name of the rule to delete.
deleteRuleCallable()
public final UnaryCallable<DeleteRuleRequest , Empty > deleteRuleCallable ()
Deletes a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteRuleRequest request =
DeleteRuleRequest . newBuilder ()
. setName ( RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ())
. build ();
ApiFuture<Empty> future = artifactRegistryClient . deleteRuleCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteRuleRequest , Empty >
deleteTag(DeleteTagRequest request)
public final void deleteTag ( DeleteTagRequest request )
Deletes a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteTagRequest request = DeleteTagRequest . newBuilder (). setName ( "name3373707" ). build ();
artifactRegistryClient . deleteTag ( request );
}
Parameter
Name
Description
request
DeleteTagRequest The request object containing all of the parameters for the API call.
deleteTag(String name)
public final void deleteTag ( String name )
Deletes a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = "name3373707" ;
artifactRegistryClient . deleteTag ( name );
}
Parameter
Name
Description
name
String The name of the tag to delete.
deleteTagCallable()
public final UnaryCallable<DeleteTagRequest , Empty > deleteTagCallable ()
Deletes a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteTagRequest request = DeleteTagRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Empty> future = artifactRegistryClient . deleteTagCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteTagRequest , Empty >
deleteVersionAsync(DeleteVersionRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteVersionAsync ( DeleteVersionRequest request )
Deletes a version and all of its content. The returned operation will complete once the version
has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteVersionRequest request =
DeleteVersionRequest . newBuilder (). setName ( "name3373707" ). setForce ( true ). build ();
artifactRegistryClient . deleteVersionAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteVersionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteVersionAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteVersionAsync ( String name )
Deletes a version and all of its content. The returned operation will complete once the version
has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = "name3373707" ;
artifactRegistryClient . deleteVersionAsync ( name ). get ();
}
Parameter
Name
Description
name
String The name of the version to delete.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteVersionCallable()
public final UnaryCallable<DeleteVersionRequest , Operation > deleteVersionCallable ()
Deletes a version and all of its content. The returned operation will complete once the version
has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteVersionRequest request =
DeleteVersionRequest . newBuilder (). setName ( "name3373707" ). setForce ( true ). build ();
ApiFuture<Operation> future =
artifactRegistryClient . deleteVersionCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteVersionRequest , Operation >
deleteVersionOperationCallable()
public final OperationCallable<DeleteVersionRequest , Empty , OperationMetadata > deleteVersionOperationCallable ()
Deletes a version and all of its content. The returned operation will complete once the version
has been deleted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DeleteVersionRequest request =
DeleteVersionRequest . newBuilder (). setName ( "name3373707" ). setForce ( true ). build ();
OperationFuture<Empty , OperationMetadata > future =
artifactRegistryClient . deleteVersionOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteVersionRequest , Empty , OperationMetadata >
exportArtifactAsync(ExportArtifactRequest request)
public final OperationFuture<ExportArtifactResponse , ExportArtifactMetadata > exportArtifactAsync ( ExportArtifactRequest request )
Exports an artifact to a Cloud Storage bucket.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ExportArtifactRequest request =
ExportArtifactRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
ExportArtifactResponse response = artifactRegistryClient . exportArtifactAsync ( request ). get ();
}
Parameter
Name
Description
request
ExportArtifactRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < ExportArtifactResponse , ExportArtifactMetadata >
exportArtifactCallable()
public final UnaryCallable<ExportArtifactRequest , Operation > exportArtifactCallable ()
Exports an artifact to a Cloud Storage bucket.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ExportArtifactRequest request =
ExportArtifactRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
ApiFuture<Operation> future =
artifactRegistryClient . exportArtifactCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < ExportArtifactRequest , Operation >
exportArtifactOperationCallable()
public final OperationCallable<ExportArtifactRequest , ExportArtifactResponse , ExportArtifactMetadata > exportArtifactOperationCallable ()
Exports an artifact to a Cloud Storage bucket.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ExportArtifactRequest request =
ExportArtifactRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
OperationFuture<ExportArtifactResponse , ExportArtifactMetadata > future =
artifactRegistryClient . exportArtifactOperationCallable (). futureCall ( request );
// Do something.
ExportArtifactResponse response = future . get ();
}
Returns
Type
Description
OperationCallable < ExportArtifactRequest , ExportArtifactResponse , ExportArtifactMetadata >
getAttachment(AttachmentName name)
public final Attachment getAttachment ( AttachmentName name )
Gets an attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
AttachmentName name =
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" );
Attachment response = artifactRegistryClient . getAttachment ( name );
}
Parameter
Name
Description
name
AttachmentName Required. The name of the attachment to retrieve.
Returns
Type
Description
Attachment
getAttachment(GetAttachmentRequest request)
public final Attachment getAttachment ( GetAttachmentRequest request )
Gets an attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetAttachmentRequest request =
GetAttachmentRequest . newBuilder ()
. setName (
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" )
. toString ())
. build ();
Attachment response = artifactRegistryClient . getAttachment ( request );
}
Parameter
Name
Description
request
GetAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Attachment
getAttachment(String name)
public final Attachment getAttachment ( String name )
Gets an attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" ). toString ();
Attachment response = artifactRegistryClient . getAttachment ( name );
}
Parameter
Name
Description
name
String Required. The name of the attachment to retrieve.
Returns
Type
Description
Attachment
getAttachmentCallable()
public final UnaryCallable<GetAttachmentRequest , Attachment > getAttachmentCallable ()
Gets an attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetAttachmentRequest request =
GetAttachmentRequest . newBuilder ()
. setName (
AttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[ATTACHMENT]" )
. toString ())
. build ();
ApiFuture<Attachment> future =
artifactRegistryClient . getAttachmentCallable (). futureCall ( request );
// Do something.
Attachment response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetAttachmentRequest , Attachment >
getDockerImage(DockerImageName name)
public final DockerImage getDockerImage ( DockerImageName name )
Gets a docker image.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
DockerImageName name =
DockerImageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[DOCKER_IMAGE]" );
DockerImage response = artifactRegistryClient . getDockerImage ( name );
}
Parameter
Name
Description
name
DockerImageName Required. The name of the docker images.
Returns
Type
Description
DockerImage
getDockerImage(GetDockerImageRequest request)
public final DockerImage getDockerImage ( GetDockerImageRequest request )
Gets a docker image.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetDockerImageRequest request =
GetDockerImageRequest . newBuilder ()
. setName (
DockerImageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[DOCKER_IMAGE]" )
. toString ())
. build ();
DockerImage response = artifactRegistryClient . getDockerImage ( request );
}
Parameter
Name
Description
request
GetDockerImageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DockerImage
getDockerImage(String name)
public final DockerImage getDockerImage ( String name )
Gets a docker image.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
DockerImageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[DOCKER_IMAGE]" )
. toString ();
DockerImage response = artifactRegistryClient . getDockerImage ( name );
}
Parameter
Name
Description
name
String Required. The name of the docker images.
Returns
Type
Description
DockerImage
getDockerImageCallable()
public final UnaryCallable<GetDockerImageRequest , DockerImage > getDockerImageCallable ()
Gets a docker image.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetDockerImageRequest request =
GetDockerImageRequest . newBuilder ()
. setName (
DockerImageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[DOCKER_IMAGE]" )
. toString ())
. build ();
ApiFuture<DockerImage> future =
artifactRegistryClient . getDockerImageCallable (). futureCall ( request );
// Do something.
DockerImage response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetDockerImageRequest , DockerImage >
getFile(FileName name)
public final File getFile ( FileName name )
Gets a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
FileName name = FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" );
File response = artifactRegistryClient . getFile ( name );
}
Parameter
Name
Description
name
FileName Required. The name of the file to retrieve.
Returns
Type
Description
File
getFile(GetFileRequest request)
public final File getFile ( GetFileRequest request )
Gets a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetFileRequest request =
GetFileRequest . newBuilder ()
. setName ( FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ())
. build ();
File response = artifactRegistryClient . getFile ( request );
}
Parameter
Name
Description
request
GetFileRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
File
getFile(String name)
public final File getFile ( String name )
Gets a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ();
File response = artifactRegistryClient . getFile ( name );
}
Parameter
Name
Description
name
String Required. The name of the file to retrieve.
Returns
Type
Description
File
getFileCallable()
public final UnaryCallable<GetFileRequest , File > getFileCallable ()
Gets a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetFileRequest request =
GetFileRequest . newBuilder ()
. setName ( FileName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[FILE]" ). toString ())
. build ();
ApiFuture<File> future = artifactRegistryClient . getFileCallable (). futureCall ( request );
// Do something.
File response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetFileRequest , File >
getHttpJsonOperationsClient()
public final OperationsClient getHttpJsonOperationsClient ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getIamPolicy(GetIamPolicyRequest request)
public final Policy getIamPolicy ( GetIamPolicyRequest request )
Gets the IAM policy for a given resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = artifactRegistryClient . getIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.GetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicyCallable()
public final UnaryCallable<GetIamPolicyRequest , Policy > getIamPolicyCallable ()
Gets the IAM policy for a given resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = artifactRegistryClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getLocation(GetLocationRequest request)
public final Location getLocation ( GetLocationRequest request )
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
Location response = artifactRegistryClient . getLocation ( request );
}
Parameter
Name
Description
request
com.google.cloud.location.GetLocationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.cloud.location.Location
getLocationCallable()
public final UnaryCallable<GetLocationRequest , Location > getLocationCallable ()
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Location> future = artifactRegistryClient . getLocationCallable (). futureCall ( request );
// Do something.
Location response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.GetLocationRequest , com.google.cloud.location.Location >
getMavenArtifact(GetMavenArtifactRequest request)
public final MavenArtifact getMavenArtifact ( GetMavenArtifactRequest request )
Gets a maven artifact.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetMavenArtifactRequest request =
GetMavenArtifactRequest . newBuilder ()
. setName (
MavenArtifactName . of (
"[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[MAVEN_ARTIFACT]" )
. toString ())
. build ();
MavenArtifact response = artifactRegistryClient . getMavenArtifact ( request );
}
Parameter
Name
Description
request
GetMavenArtifactRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
MavenArtifact
getMavenArtifact(MavenArtifactName name)
public final MavenArtifact getMavenArtifact ( MavenArtifactName name )
Gets a maven artifact.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
MavenArtifactName name =
MavenArtifactName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[MAVEN_ARTIFACT]" );
MavenArtifact response = artifactRegistryClient . getMavenArtifact ( name );
}
Parameter
Name
Description
name
MavenArtifactName Required. The name of the maven artifact.
Returns
Type
Description
MavenArtifact
getMavenArtifact(String name)
public final MavenArtifact getMavenArtifact ( String name )
Gets a maven artifact.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
MavenArtifactName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[MAVEN_ARTIFACT]" )
. toString ();
MavenArtifact response = artifactRegistryClient . getMavenArtifact ( name );
}
Parameter
Name
Description
name
String Required. The name of the maven artifact.
Returns
Type
Description
MavenArtifact
getMavenArtifactCallable()
public final UnaryCallable<GetMavenArtifactRequest , MavenArtifact > getMavenArtifactCallable ()
Gets a maven artifact.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetMavenArtifactRequest request =
GetMavenArtifactRequest . newBuilder ()
. setName (
MavenArtifactName . of (
"[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[MAVEN_ARTIFACT]" )
. toString ())
. build ();
ApiFuture<MavenArtifact> future =
artifactRegistryClient . getMavenArtifactCallable (). futureCall ( request );
// Do something.
MavenArtifact response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetMavenArtifactRequest , MavenArtifact >
getNpmPackage(GetNpmPackageRequest request)
public final NpmPackage getNpmPackage ( GetNpmPackageRequest request )
Gets a npm package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetNpmPackageRequest request =
GetNpmPackageRequest . newBuilder ()
. setName (
NpmPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[NPM_PACKAGE]" )
. toString ())
. build ();
NpmPackage response = artifactRegistryClient . getNpmPackage ( request );
}
Parameter
Name
Description
request
GetNpmPackageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
NpmPackage
getNpmPackage(NpmPackageName name)
public final NpmPackage getNpmPackage ( NpmPackageName name )
Gets a npm package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
NpmPackageName name =
NpmPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[NPM_PACKAGE]" );
NpmPackage response = artifactRegistryClient . getNpmPackage ( name );
}
Parameter
Name
Description
name
NpmPackageName Required. The name of the npm package.
Returns
Type
Description
NpmPackage
getNpmPackage(String name)
public final NpmPackage getNpmPackage ( String name )
Gets a npm package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
NpmPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[NPM_PACKAGE]" ). toString ();
NpmPackage response = artifactRegistryClient . getNpmPackage ( name );
}
Parameter
Name
Description
name
String Required. The name of the npm package.
Returns
Type
Description
NpmPackage
getNpmPackageCallable()
public final UnaryCallable<GetNpmPackageRequest , NpmPackage > getNpmPackageCallable ()
Gets a npm package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetNpmPackageRequest request =
GetNpmPackageRequest . newBuilder ()
. setName (
NpmPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[NPM_PACKAGE]" )
. toString ())
. build ();
ApiFuture<NpmPackage> future =
artifactRegistryClient . getNpmPackageCallable (). futureCall ( request );
// Do something.
NpmPackage response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetNpmPackageRequest , NpmPackage >
getOperationsClient()
public final OperationsClient getOperationsClient ()
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getPackage(GetPackageRequest request)
public final Package getPackage ( GetPackageRequest request )
Gets a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetPackageRequest request =
GetPackageRequest . newBuilder ()
. setName (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. build ();
Package response = artifactRegistryClient . getPackage ( request );
}
Parameter
Name
Description
request
GetPackageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Package
getPackage(PackageName name)
public final Package getPackage ( PackageName name )
Gets a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
PackageName name = PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" );
Package response = artifactRegistryClient . getPackage ( name );
}
Parameter
Name
Description
name
PackageName Required. The name of the package to retrieve.
Returns
Type
Description
Package
getPackage(String name)
public final Package getPackage ( String name )
Gets a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ();
Package response = artifactRegistryClient . getPackage ( name );
}
Parameter
Name
Description
name
String Required. The name of the package to retrieve.
Returns
Type
Description
Package
getPackageCallable()
public final UnaryCallable<GetPackageRequest , Package > getPackageCallable ()
Gets a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetPackageRequest request =
GetPackageRequest . newBuilder ()
. setName (
PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ())
. build ();
ApiFuture<Package> future = artifactRegistryClient . getPackageCallable (). futureCall ( request );
// Do something.
Package response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetPackageRequest , Package >
getProjectSettings(GetProjectSettingsRequest request)
public final ProjectSettings getProjectSettings ( GetProjectSettingsRequest request )
Retrieves the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetProjectSettingsRequest request =
GetProjectSettingsRequest . newBuilder ()
. setName ( ProjectSettingsName . of ( "[PROJECT]" ). toString ())
. build ();
ProjectSettings response = artifactRegistryClient . getProjectSettings ( request );
}
Parameter
Name
Description
request
GetProjectSettingsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ProjectSettings
getProjectSettings(ProjectSettingsName name)
public final ProjectSettings getProjectSettings ( ProjectSettingsName name )
Retrieves the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ProjectSettingsName name = ProjectSettingsName . of ( "[PROJECT]" );
ProjectSettings response = artifactRegistryClient . getProjectSettings ( name );
}
Parameter
Name
Description
name
ProjectSettingsName Required. The name of the projectSettings resource.
Returns
Type
Description
ProjectSettings
getProjectSettings(String name)
public final ProjectSettings getProjectSettings ( String name )
Retrieves the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = ProjectSettingsName . of ( "[PROJECT]" ). toString ();
ProjectSettings response = artifactRegistryClient . getProjectSettings ( name );
}
Parameter
Name
Description
name
String Required. The name of the projectSettings resource.
Returns
Type
Description
ProjectSettings
getProjectSettingsCallable()
public final UnaryCallable<GetProjectSettingsRequest , ProjectSettings > getProjectSettingsCallable ()
Retrieves the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetProjectSettingsRequest request =
GetProjectSettingsRequest . newBuilder ()
. setName ( ProjectSettingsName . of ( "[PROJECT]" ). toString ())
. build ();
ApiFuture<ProjectSettings> future =
artifactRegistryClient . getProjectSettingsCallable (). futureCall ( request );
// Do something.
ProjectSettings response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetProjectSettingsRequest , ProjectSettings >
getPythonPackage(GetPythonPackageRequest request)
public final PythonPackage getPythonPackage ( GetPythonPackageRequest request )
Gets a python package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetPythonPackageRequest request =
GetPythonPackageRequest . newBuilder ()
. setName (
PythonPackageName . of (
"[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PYTHON_PACKAGE]" )
. toString ())
. build ();
PythonPackage response = artifactRegistryClient . getPythonPackage ( request );
}
Parameter
Name
Description
request
GetPythonPackageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
PythonPackage
getPythonPackage(PythonPackageName name)
public final PythonPackage getPythonPackage ( PythonPackageName name )
Gets a python package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
PythonPackageName name =
PythonPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PYTHON_PACKAGE]" );
PythonPackage response = artifactRegistryClient . getPythonPackage ( name );
}
Parameter
Name
Description
name
PythonPackageName Required. The name of the python package.
Returns
Type
Description
PythonPackage
getPythonPackage(String name)
public final PythonPackage getPythonPackage ( String name )
Gets a python package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name =
PythonPackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PYTHON_PACKAGE]" )
. toString ();
PythonPackage response = artifactRegistryClient . getPythonPackage ( name );
}
Parameter
Name
Description
name
String Required. The name of the python package.
Returns
Type
Description
PythonPackage
getPythonPackageCallable()
public final UnaryCallable<GetPythonPackageRequest , PythonPackage > getPythonPackageCallable ()
Gets a python package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetPythonPackageRequest request =
GetPythonPackageRequest . newBuilder ()
. setName (
PythonPackageName . of (
"[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PYTHON_PACKAGE]" )
. toString ())
. build ();
ApiFuture<PythonPackage> future =
artifactRegistryClient . getPythonPackageCallable (). futureCall ( request );
// Do something.
PythonPackage response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetPythonPackageRequest , PythonPackage >
getRepository(GetRepositoryRequest request)
public final Repository getRepository ( GetRepositoryRequest request )
Gets a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetRepositoryRequest request =
GetRepositoryRequest . newBuilder ()
. setName ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
Repository response = artifactRegistryClient . getRepository ( request );
}
Parameter
Name
Description
request
GetRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Repository
getRepository(RepositoryName name)
public final Repository getRepository ( RepositoryName name )
Gets a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName name = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
Repository response = artifactRegistryClient . getRepository ( name );
}
Parameter
Name
Description
name
RepositoryName Required. The name of the repository to retrieve.
Returns
Type
Description
Repository
getRepository(String name)
public final Repository getRepository ( String name )
Gets a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
Repository response = artifactRegistryClient . getRepository ( name );
}
Parameter
Name
Description
name
String Required. The name of the repository to retrieve.
Returns
Type
Description
Repository
getRepositoryCallable()
public final UnaryCallable<GetRepositoryRequest , Repository > getRepositoryCallable ()
Gets a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetRepositoryRequest request =
GetRepositoryRequest . newBuilder ()
. setName ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. build ();
ApiFuture<Repository> future =
artifactRegistryClient . getRepositoryCallable (). futureCall ( request );
// Do something.
Repository response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetRepositoryRequest , Repository >
getRule(GetRuleRequest request)
public final Rule getRule ( GetRuleRequest request )
Gets a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetRuleRequest request =
GetRuleRequest . newBuilder ()
. setName ( RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ())
. build ();
Rule response = artifactRegistryClient . getRule ( request );
}
Parameter
Name
Description
request
GetRuleRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Rule
getRule(RuleName name)
public final Rule getRule ( RuleName name )
Gets a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RuleName name = RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" );
Rule response = artifactRegistryClient . getRule ( name );
}
Parameter
Name
Description
name
RuleName Required. The name of the rule to retrieve.
Returns
Type
Description
Rule
getRule(String name)
public final Rule getRule ( String name )
Gets a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ();
Rule response = artifactRegistryClient . getRule ( name );
}
Parameter
Name
Description
name
String Required. The name of the rule to retrieve.
Returns
Type
Description
Rule
getRuleCallable()
public final UnaryCallable<GetRuleRequest , Rule > getRuleCallable ()
Gets a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetRuleRequest request =
GetRuleRequest . newBuilder ()
. setName ( RuleName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[RULE]" ). toString ())
. build ();
ApiFuture<Rule> future = artifactRegistryClient . getRuleCallable (). futureCall ( request );
// Do something.
Rule response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetRuleRequest , Rule >
getSettings()
public final ArtifactRegistrySettings getSettings ()
Returns
Type
Description
ArtifactRegistrySettings
getStub()
public ArtifactRegistryStub getStub ()
Returns
Type
Description
ArtifactRegistryStub
getTag(GetTagRequest request)
public final Tag getTag ( GetTagRequest request )
Gets a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetTagRequest request = GetTagRequest . newBuilder (). setName ( "name3373707" ). build ();
Tag response = artifactRegistryClient . getTag ( request );
}
Parameter
Name
Description
request
GetTagRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Tag
getTag(String name)
public final Tag getTag ( String name )
Gets a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = "name3373707" ;
Tag response = artifactRegistryClient . getTag ( name );
}
Parameter
Name
Description
name
String The name of the tag to retrieve.
Returns
Type
Description
Tag
getTagCallable()
public final UnaryCallable<GetTagRequest , Tag > getTagCallable ()
Gets a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetTagRequest request = GetTagRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Tag> future = artifactRegistryClient . getTagCallable (). futureCall ( request );
// Do something.
Tag response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetTagRequest , Tag >
getVPCSCConfig(GetVPCSCConfigRequest request)
public final VPCSCConfig getVPCSCConfig ( GetVPCSCConfigRequest request )
Retrieves the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetVPCSCConfigRequest request =
GetVPCSCConfigRequest . newBuilder ()
. setName ( VpcscConfigName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
VPCSCConfig response = artifactRegistryClient . getVPCSCConfig ( request );
}
Parameter
Name
Description
request
GetVPCSCConfigRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
VPCSCConfig
getVPCSCConfig(VpcscConfigName name)
public final VPCSCConfig getVPCSCConfig ( VpcscConfigName name )
Retrieves the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
VpcscConfigName name = VpcscConfigName . of ( "[PROJECT]" , "[LOCATION]" );
VPCSCConfig response = artifactRegistryClient . getVPCSCConfig ( name );
}
Parameter
Name
Description
name
VpcscConfigName Required. The name of the VPCSCConfig resource.
Returns
Type
Description
VPCSCConfig
getVPCSCConfig(String name)
public final VPCSCConfig getVPCSCConfig ( String name )
Retrieves the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = VpcscConfigName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
VPCSCConfig response = artifactRegistryClient . getVPCSCConfig ( name );
}
Parameter
Name
Description
name
String Required. The name of the VPCSCConfig resource.
Returns
Type
Description
VPCSCConfig
getVPCSCConfigCallable()
public final UnaryCallable<GetVPCSCConfigRequest , VPCSCConfig > getVPCSCConfigCallable ()
Retrieves the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetVPCSCConfigRequest request =
GetVPCSCConfigRequest . newBuilder ()
. setName ( VpcscConfigName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
ApiFuture<VPCSCConfig> future =
artifactRegistryClient . getVPCSCConfigCallable (). futureCall ( request );
// Do something.
VPCSCConfig response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetVPCSCConfigRequest , VPCSCConfig >
getVersion(GetVersionRequest request)
public final Version getVersion ( GetVersionRequest request )
Gets a version
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetVersionRequest request =
GetVersionRequest . newBuilder ()
. setName ( "name3373707" )
. setView ( VersionView . forNumber ( 0 ))
. build ();
Version response = artifactRegistryClient . getVersion ( request );
}
Parameter
Name
Description
request
GetVersionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Version
getVersion(String name)
public final Version getVersion ( String name )
Gets a version
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String name = "name3373707" ;
Version response = artifactRegistryClient . getVersion ( name );
}
Parameter
Name
Description
name
String The name of the version to retrieve.
Returns
Type
Description
Version
getVersionCallable()
public final UnaryCallable<GetVersionRequest , Version > getVersionCallable ()
Gets a version
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
GetVersionRequest request =
GetVersionRequest . newBuilder ()
. setName ( "name3373707" )
. setView ( VersionView . forNumber ( 0 ))
. build ();
ApiFuture<Version> future = artifactRegistryClient . getVersionCallable (). futureCall ( request );
// Do something.
Version response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetVersionRequest , Version >
importAptArtifactsAsync(ImportAptArtifactsRequest request)
public final OperationFuture<ImportAptArtifactsResponse , ImportAptArtifactsMetadata > importAptArtifactsAsync ( ImportAptArtifactsRequest request )
Imports Apt artifacts. The returned Operation will complete once the resources are imported.
Package, Version, and File resources are created based on the imported artifacts. Imported
artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportAptArtifactsRequest request =
ImportAptArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
ImportAptArtifactsResponse response =
artifactRegistryClient . importAptArtifactsAsync ( request ). get ();
}
Parameter
Name
Description
request
ImportAptArtifactsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < ImportAptArtifactsResponse , ImportAptArtifactsMetadata >
importAptArtifactsCallable()
public final UnaryCallable<ImportAptArtifactsRequest , Operation > importAptArtifactsCallable ()
Imports Apt artifacts. The returned Operation will complete once the resources are imported.
Package, Version, and File resources are created based on the imported artifacts. Imported
artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportAptArtifactsRequest request =
ImportAptArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
ApiFuture<Operation> future =
artifactRegistryClient . importAptArtifactsCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < ImportAptArtifactsRequest , Operation >
importAptArtifactsOperationCallable()
public final OperationCallable<ImportAptArtifactsRequest , ImportAptArtifactsResponse , ImportAptArtifactsMetadata > importAptArtifactsOperationCallable ()
Imports Apt artifacts. The returned Operation will complete once the resources are imported.
Package, Version, and File resources are created based on the imported artifacts. Imported
artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportAptArtifactsRequest request =
ImportAptArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
OperationFuture<ImportAptArtifactsResponse , ImportAptArtifactsMetadata > future =
artifactRegistryClient . importAptArtifactsOperationCallable (). futureCall ( request );
// Do something.
ImportAptArtifactsResponse response = future . get ();
}
Returns
Type
Description
OperationCallable < ImportAptArtifactsRequest , ImportAptArtifactsResponse , ImportAptArtifactsMetadata >
importYumArtifactsAsync(ImportYumArtifactsRequest request)
public final OperationFuture<ImportYumArtifactsResponse , ImportYumArtifactsMetadata > importYumArtifactsAsync ( ImportYumArtifactsRequest request )
Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are
imported. Package, Version, and File resources are created based on the imported artifacts.
Imported artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportYumArtifactsRequest request =
ImportYumArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
ImportYumArtifactsResponse response =
artifactRegistryClient . importYumArtifactsAsync ( request ). get ();
}
Parameter
Name
Description
request
ImportYumArtifactsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < ImportYumArtifactsResponse , ImportYumArtifactsMetadata >
importYumArtifactsCallable()
public final UnaryCallable<ImportYumArtifactsRequest , Operation > importYumArtifactsCallable ()
Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are
imported. Package, Version, and File resources are created based on the imported artifacts.
Imported artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportYumArtifactsRequest request =
ImportYumArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
ApiFuture<Operation> future =
artifactRegistryClient . importYumArtifactsCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < ImportYumArtifactsRequest , Operation >
importYumArtifactsOperationCallable()
public final OperationCallable<ImportYumArtifactsRequest , ImportYumArtifactsResponse , ImportYumArtifactsMetadata > importYumArtifactsOperationCallable ()
Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are
imported. Package, Version, and File resources are created based on the imported artifacts.
Imported artifacts that conflict with existing resources are ignored.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ImportYumArtifactsRequest request =
ImportYumArtifactsRequest . newBuilder (). setParent ( "parent-995424086" ). build ();
OperationFuture<ImportYumArtifactsResponse , ImportYumArtifactsMetadata > future =
artifactRegistryClient . importYumArtifactsOperationCallable (). futureCall ( request );
// Do something.
ImportYumArtifactsResponse response = future . get ();
}
Returns
Type
Description
OperationCallable < ImportYumArtifactsRequest , ImportYumArtifactsResponse , ImportYumArtifactsMetadata >
isShutdown()
public boolean isShutdown ()
Returns
Type
Description
boolean
isTerminated()
public boolean isTerminated ()
Returns
Type
Description
boolean
listAttachments(ListAttachmentsRequest request)
public final ArtifactRegistryClient . ListAttachmentsPagedResponse listAttachments ( ListAttachmentsRequest request )
Lists attachments.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListAttachmentsRequest request =
ListAttachmentsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Attachment element : artifactRegistryClient . listAttachments ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListAttachmentsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListAttachmentsPagedResponse
listAttachments(RepositoryName parent)
public final ArtifactRegistryClient . ListAttachmentsPagedResponse listAttachments ( RepositoryName parent )
Lists attachments.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( Attachment element : artifactRegistryClient . listAttachments ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent resource whose attachments will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListAttachmentsPagedResponse
listAttachments(String parent)
public final ArtifactRegistryClient . ListAttachmentsPagedResponse listAttachments ( String parent )
Lists attachments.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( Attachment element : artifactRegistryClient . listAttachments ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose attachments will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListAttachmentsPagedResponse
listAttachmentsCallable()
public final UnaryCallable<ListAttachmentsRequest , ListAttachmentsResponse > listAttachmentsCallable ()
Lists attachments.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListAttachmentsRequest request =
ListAttachmentsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListAttachmentsResponse response =
artifactRegistryClient . listAttachmentsCallable (). call ( request );
for ( Attachment element : response . getAttachmentsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListAttachmentsRequest , ListAttachmentsResponse >
listAttachmentsPagedCallable()
public final UnaryCallable<ListAttachmentsRequest , ArtifactRegistryClient . ListAttachmentsPagedResponse > listAttachmentsPagedCallable ()
Lists attachments.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListAttachmentsRequest request =
ListAttachmentsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Attachment> future =
artifactRegistryClient . listAttachmentsPagedCallable (). futureCall ( request );
// Do something.
for ( Attachment element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListAttachmentsRequest , ListAttachmentsPagedResponse >
listDockerImages(ListDockerImagesRequest request)
public final ArtifactRegistryClient . ListDockerImagesPagedResponse listDockerImages ( ListDockerImagesRequest request )
Lists docker images.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListDockerImagesRequest request =
ListDockerImagesRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( DockerImage element : artifactRegistryClient . listDockerImages ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListDockerImagesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListDockerImagesPagedResponse
listDockerImages(String parent)
public final ArtifactRegistryClient . ListDockerImagesPagedResponse listDockerImages ( String parent )
Lists docker images.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = "parent-995424086" ;
for ( DockerImage element : artifactRegistryClient . listDockerImages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose docker images will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListDockerImagesPagedResponse
listDockerImagesCallable()
public final UnaryCallable<ListDockerImagesRequest , ListDockerImagesResponse > listDockerImagesCallable ()
Lists docker images.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListDockerImagesRequest request =
ListDockerImagesRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListDockerImagesResponse response =
artifactRegistryClient . listDockerImagesCallable (). call ( request );
for ( DockerImage element : response . getDockerImagesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListDockerImagesRequest , ListDockerImagesResponse >
listDockerImagesPagedCallable()
public final UnaryCallable<ListDockerImagesRequest , ArtifactRegistryClient . ListDockerImagesPagedResponse > listDockerImagesPagedCallable ()
Lists docker images.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListDockerImagesRequest request =
ListDockerImagesRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<DockerImage> future =
artifactRegistryClient . listDockerImagesPagedCallable (). futureCall ( request );
// Do something.
for ( DockerImage element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListDockerImagesRequest , ListDockerImagesPagedResponse >
listFiles(ListFilesRequest request)
public final ArtifactRegistryClient . ListFilesPagedResponse listFiles ( ListFilesRequest request )
Lists files.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListFilesRequest request =
ListFilesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( File element : artifactRegistryClient . listFiles ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListFilesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListFilesPagedResponse
listFiles(RepositoryName parent)
public final ArtifactRegistryClient . ListFilesPagedResponse listFiles ( RepositoryName parent )
Lists files.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( File element : artifactRegistryClient . listFiles ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the repository whose files will be listed. For example:
"projects/p1/locations/us-central1/repositories/repo1
Returns
Type
Description
ArtifactRegistryClient.ListFilesPagedResponse
listFiles(String parent)
public final ArtifactRegistryClient . ListFilesPagedResponse listFiles ( String parent )
Lists files.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( File element : artifactRegistryClient . listFiles ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the repository whose files will be listed. For example:
"projects/p1/locations/us-central1/repositories/repo1
Returns
Type
Description
ArtifactRegistryClient.ListFilesPagedResponse
listFilesCallable()
public final UnaryCallable<ListFilesRequest , ListFilesResponse > listFilesCallable ()
Lists files.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListFilesRequest request =
ListFilesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListFilesResponse response = artifactRegistryClient . listFilesCallable (). call ( request );
for ( File element : response . getFilesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListFilesRequest , ListFilesResponse >
listFilesPagedCallable()
public final UnaryCallable<ListFilesRequest , ArtifactRegistryClient . ListFilesPagedResponse > listFilesPagedCallable ()
Lists files.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListFilesRequest request =
ListFilesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<File> future = artifactRegistryClient . listFilesPagedCallable (). futureCall ( request );
// Do something.
for ( File element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListFilesRequest , ListFilesPagedResponse >
listLocations(ListLocationsRequest request)
public final ArtifactRegistryClient . ListLocationsPagedResponse listLocations ( ListLocationsRequest request )
Lists information about the supported locations for this service.This method can be called in
two ways:
* **List all public locations:** Use the path GET /v1/locations .*
**List project-visible locations:** Use the path GET
/v1/projects/{project_id}/locations . This may include publiclocations as well as private or
other locations specifically visibleto the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Location element : artifactRegistryClient . listLocations ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
com.google.cloud.location.ListLocationsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListLocationsPagedResponse
listLocationsCallable()
public final UnaryCallable<ListLocationsRequest , ListLocationsResponse > listLocationsCallable ()
Lists information about the supported locations for this service.This method can be called in
two ways:
* **List all public locations:** Use the path GET /v1/locations .*
**List project-visible locations:** Use the path GET
/v1/projects/{project_id}/locations . This may include publiclocations as well as private or
other locations specifically visibleto the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListLocationsResponse response =
artifactRegistryClient . listLocationsCallable (). call ( request );
for ( Location element : response . getLocationsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , com.google.cloud.location.ListLocationsResponse >
listLocationsPagedCallable()
public final UnaryCallable<ListLocationsRequest , ArtifactRegistryClient . ListLocationsPagedResponse > listLocationsPagedCallable ()
Lists information about the supported locations for this service.This method can be called in
two ways:
* **List all public locations:** Use the path GET /v1/locations .*
**List project-visible locations:** Use the path GET
/v1/projects/{project_id}/locations . This may include publiclocations as well as private or
other locations specifically visibleto the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Location> future =
artifactRegistryClient . listLocationsPagedCallable (). futureCall ( request );
// Do something.
for ( Location element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , ListLocationsPagedResponse >
listMavenArtifacts(ListMavenArtifactsRequest request)
public final ArtifactRegistryClient . ListMavenArtifactsPagedResponse listMavenArtifacts ( ListMavenArtifactsRequest request )
Lists maven artifacts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListMavenArtifactsRequest request =
ListMavenArtifactsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( MavenArtifact element :
artifactRegistryClient . listMavenArtifacts ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListMavenArtifactsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListMavenArtifactsPagedResponse
listMavenArtifacts(RepositoryName parent)
public final ArtifactRegistryClient . ListMavenArtifactsPagedResponse listMavenArtifacts ( RepositoryName parent )
Lists maven artifacts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( MavenArtifact element : artifactRegistryClient . listMavenArtifacts ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent resource whose maven artifacts will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListMavenArtifactsPagedResponse
listMavenArtifacts(String parent)
public final ArtifactRegistryClient . ListMavenArtifactsPagedResponse listMavenArtifacts ( String parent )
Lists maven artifacts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( MavenArtifact element : artifactRegistryClient . listMavenArtifacts ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose maven artifacts will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListMavenArtifactsPagedResponse
listMavenArtifactsCallable()
public final UnaryCallable<ListMavenArtifactsRequest , ListMavenArtifactsResponse > listMavenArtifactsCallable ()
Lists maven artifacts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListMavenArtifactsRequest request =
ListMavenArtifactsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListMavenArtifactsResponse response =
artifactRegistryClient . listMavenArtifactsCallable (). call ( request );
for ( MavenArtifact element : response . getMavenArtifactsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListMavenArtifactsRequest , ListMavenArtifactsResponse >
listMavenArtifactsPagedCallable()
public final UnaryCallable<ListMavenArtifactsRequest , ArtifactRegistryClient . ListMavenArtifactsPagedResponse > listMavenArtifactsPagedCallable ()
Lists maven artifacts.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListMavenArtifactsRequest request =
ListMavenArtifactsRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<MavenArtifact> future =
artifactRegistryClient . listMavenArtifactsPagedCallable (). futureCall ( request );
// Do something.
for ( MavenArtifact element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListMavenArtifactsRequest , ListMavenArtifactsPagedResponse >
listNpmPackages(ListNpmPackagesRequest request)
public final ArtifactRegistryClient . ListNpmPackagesPagedResponse listNpmPackages ( ListNpmPackagesRequest request )
Lists npm packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListNpmPackagesRequest request =
ListNpmPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( NpmPackage element : artifactRegistryClient . listNpmPackages ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListNpmPackagesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListNpmPackagesPagedResponse
listNpmPackages(RepositoryName parent)
public final ArtifactRegistryClient . ListNpmPackagesPagedResponse listNpmPackages ( RepositoryName parent )
Lists npm packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( NpmPackage element : artifactRegistryClient . listNpmPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent resource whose npm packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListNpmPackagesPagedResponse
listNpmPackages(String parent)
public final ArtifactRegistryClient . ListNpmPackagesPagedResponse listNpmPackages ( String parent )
Lists npm packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( NpmPackage element : artifactRegistryClient . listNpmPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose npm packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListNpmPackagesPagedResponse
listNpmPackagesCallable()
public final UnaryCallable<ListNpmPackagesRequest , ListNpmPackagesResponse > listNpmPackagesCallable ()
Lists npm packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListNpmPackagesRequest request =
ListNpmPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListNpmPackagesResponse response =
artifactRegistryClient . listNpmPackagesCallable (). call ( request );
for ( NpmPackage element : response . getNpmPackagesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListNpmPackagesRequest , ListNpmPackagesResponse >
listNpmPackagesPagedCallable()
public final UnaryCallable<ListNpmPackagesRequest , ArtifactRegistryClient . ListNpmPackagesPagedResponse > listNpmPackagesPagedCallable ()
Lists npm packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListNpmPackagesRequest request =
ListNpmPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<NpmPackage> future =
artifactRegistryClient . listNpmPackagesPagedCallable (). futureCall ( request );
// Do something.
for ( NpmPackage element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListNpmPackagesRequest , ListNpmPackagesPagedResponse >
listPackages(ListPackagesRequest request)
public final ArtifactRegistryClient . ListPackagesPagedResponse listPackages ( ListPackagesRequest request )
Lists packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPackagesRequest request =
ListPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Package element : artifactRegistryClient . listPackages ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListPackagesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListPackagesPagedResponse
listPackages(RepositoryName parent)
public final ArtifactRegistryClient . ListPackagesPagedResponse listPackages ( RepositoryName parent )
Lists packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( Package element : artifactRegistryClient . listPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent resource whose packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListPackagesPagedResponse
listPackages(String parent)
public final ArtifactRegistryClient . ListPackagesPagedResponse listPackages ( String parent )
Lists packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( Package element : artifactRegistryClient . listPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListPackagesPagedResponse
listPackagesCallable()
public final UnaryCallable<ListPackagesRequest , ListPackagesResponse > listPackagesCallable ()
Lists packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPackagesRequest request =
ListPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListPackagesResponse response = artifactRegistryClient . listPackagesCallable (). call ( request );
for ( Package element : response . getPackagesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListPackagesRequest , ListPackagesResponse >
listPackagesPagedCallable()
public final UnaryCallable<ListPackagesRequest , ArtifactRegistryClient . ListPackagesPagedResponse > listPackagesPagedCallable ()
Lists packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPackagesRequest request =
ListPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Package> future =
artifactRegistryClient . listPackagesPagedCallable (). futureCall ( request );
// Do something.
for ( Package element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListPackagesRequest , ListPackagesPagedResponse >
listPythonPackages(ListPythonPackagesRequest request)
public final ArtifactRegistryClient . ListPythonPackagesPagedResponse listPythonPackages ( ListPythonPackagesRequest request )
Lists python packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPythonPackagesRequest request =
ListPythonPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( PythonPackage element :
artifactRegistryClient . listPythonPackages ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListPythonPackagesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListPythonPackagesPagedResponse
listPythonPackages(RepositoryName parent)
public final ArtifactRegistryClient . ListPythonPackagesPagedResponse listPythonPackages ( RepositoryName parent )
Lists python packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( PythonPackage element : artifactRegistryClient . listPythonPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent resource whose python packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListPythonPackagesPagedResponse
listPythonPackages(String parent)
public final ArtifactRegistryClient . ListPythonPackagesPagedResponse listPythonPackages ( String parent )
Lists python packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( PythonPackage element : artifactRegistryClient . listPythonPackages ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose python packages will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListPythonPackagesPagedResponse
listPythonPackagesCallable()
public final UnaryCallable<ListPythonPackagesRequest , ListPythonPackagesResponse > listPythonPackagesCallable ()
Lists python packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPythonPackagesRequest request =
ListPythonPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListPythonPackagesResponse response =
artifactRegistryClient . listPythonPackagesCallable (). call ( request );
for ( PythonPackage element : response . getPythonPackagesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListPythonPackagesRequest , ListPythonPackagesResponse >
listPythonPackagesPagedCallable()
public final UnaryCallable<ListPythonPackagesRequest , ArtifactRegistryClient . ListPythonPackagesPagedResponse > listPythonPackagesPagedCallable ()
Lists python packages.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListPythonPackagesRequest request =
ListPythonPackagesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<PythonPackage> future =
artifactRegistryClient . listPythonPackagesPagedCallable (). futureCall ( request );
// Do something.
for ( PythonPackage element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListPythonPackagesRequest , ListPythonPackagesPagedResponse >
listRepositories(ListRepositoriesRequest request)
public final ArtifactRegistryClient . ListRepositoriesPagedResponse listRepositories ( ListRepositoriesRequest request )
Lists repositories.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Repository element : artifactRegistryClient . listRepositories ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListRepositoriesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListRepositoriesPagedResponse
listRepositories(LocationName parent)
public final ArtifactRegistryClient . ListRepositoriesPagedResponse listRepositories ( LocationName parent )
Lists repositories.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Repository element : artifactRegistryClient . listRepositories ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The name of the parent resource whose repositories will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListRepositoriesPagedResponse
listRepositories(String parent)
public final ArtifactRegistryClient . ListRepositoriesPagedResponse listRepositories ( String parent )
Lists repositories.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Repository element : artifactRegistryClient . listRepositories ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent resource whose repositories will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListRepositoriesPagedResponse
listRepositoriesCallable()
public final UnaryCallable<ListRepositoriesRequest , ListRepositoriesResponse > listRepositoriesCallable ()
Lists repositories.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListRepositoriesResponse response =
artifactRegistryClient . listRepositoriesCallable (). call ( request );
for ( Repository element : response . getRepositoriesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListRepositoriesRequest , ListRepositoriesResponse >
listRepositoriesPagedCallable()
public final UnaryCallable<ListRepositoriesRequest , ArtifactRegistryClient . ListRepositoriesPagedResponse > listRepositoriesPagedCallable ()
Lists repositories.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Repository> future =
artifactRegistryClient . listRepositoriesPagedCallable (). futureCall ( request );
// Do something.
for ( Repository element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListRepositoriesRequest , ListRepositoriesPagedResponse >
listRules(ListRulesRequest request)
public final ArtifactRegistryClient . ListRulesPagedResponse listRules ( ListRulesRequest request )
Lists rules.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRulesRequest request =
ListRulesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Rule element : artifactRegistryClient . listRules ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListRulesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListRulesPagedResponse
listRules(RepositoryName parent)
public final ArtifactRegistryClient . ListRulesPagedResponse listRules ( RepositoryName parent )
Lists rules.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
RepositoryName parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" );
for ( Rule element : artifactRegistryClient . listRules ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RepositoryName Required. The name of the parent repository whose rules will be listed. For
example: projects/p1/locations/us-central1/repositories/repo1 .
Returns
Type
Description
ArtifactRegistryClient.ListRulesPagedResponse
listRules(String parent)
public final ArtifactRegistryClient . ListRulesPagedResponse listRules ( String parent )
Lists rules.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ();
for ( Rule element : artifactRegistryClient . listRules ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the parent repository whose rules will be listed. For
example: projects/p1/locations/us-central1/repositories/repo1 .
Returns
Type
Description
ArtifactRegistryClient.ListRulesPagedResponse
listRulesCallable()
public final UnaryCallable<ListRulesRequest , ListRulesResponse > listRulesCallable ()
Lists rules.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRulesRequest request =
ListRulesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListRulesResponse response = artifactRegistryClient . listRulesCallable (). call ( request );
for ( Rule element : response . getRulesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListRulesRequest , ListRulesResponse >
listRulesPagedCallable()
public final UnaryCallable<ListRulesRequest , ArtifactRegistryClient . ListRulesPagedResponse > listRulesPagedCallable ()
Lists rules.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListRulesRequest request =
ListRulesRequest . newBuilder ()
. setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Rule> future = artifactRegistryClient . listRulesPagedCallable (). futureCall ( request );
// Do something.
for ( Rule element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListRulesRequest , ListRulesPagedResponse >
listTags(ListTagsRequest request)
public final ArtifactRegistryClient . ListTagsPagedResponse listTags ( ListTagsRequest request )
Lists tags.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListTagsRequest request =
ListTagsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Tag element : artifactRegistryClient . listTags ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListTagsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListTagsPagedResponse
listTags(String parent)
public final ArtifactRegistryClient . ListTagsPagedResponse listTags ( String parent )
Lists tags.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = "parent-995424086" ;
for ( Tag element : artifactRegistryClient . listTags ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String The name of the parent package whose tags will be listed. For example:
projects/p1/locations/us-central1/repositories/repo1/packages/pkg1 .
Returns
Type
Description
ArtifactRegistryClient.ListTagsPagedResponse
listTagsCallable()
public final UnaryCallable<ListTagsRequest , ListTagsResponse > listTagsCallable ()
Lists tags.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListTagsRequest request =
ListTagsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListTagsResponse response = artifactRegistryClient . listTagsCallable (). call ( request );
for ( Tag element : response . getTagsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListTagsRequest , ListTagsResponse >
listTagsPagedCallable()
public final UnaryCallable<ListTagsRequest , ArtifactRegistryClient . ListTagsPagedResponse > listTagsPagedCallable ()
Lists tags.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListTagsRequest request =
ListTagsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Tag> future = artifactRegistryClient . listTagsPagedCallable (). futureCall ( request );
// Do something.
for ( Tag element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListTagsRequest , ListTagsPagedResponse >
listVersions(ListVersionsRequest request)
public final ArtifactRegistryClient . ListVersionsPagedResponse listVersions ( ListVersionsRequest request )
Lists versions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListVersionsRequest request =
ListVersionsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setView ( VersionView . forNumber ( 0 ))
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
for ( Version element : artifactRegistryClient . listVersions ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListVersionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ArtifactRegistryClient.ListVersionsPagedResponse
listVersions(String parent)
public final ArtifactRegistryClient . ListVersionsPagedResponse listVersions ( String parent )
Lists versions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
String parent = "parent-995424086" ;
for ( Version element : artifactRegistryClient . listVersions ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String The name of the parent resource whose versions will be listed.
Returns
Type
Description
ArtifactRegistryClient.ListVersionsPagedResponse
listVersionsCallable()
public final UnaryCallable<ListVersionsRequest , ListVersionsResponse > listVersionsCallable ()
Lists versions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListVersionsRequest request =
ListVersionsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setView ( VersionView . forNumber ( 0 ))
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
while ( true ) {
ListVersionsResponse response = artifactRegistryClient . listVersionsCallable (). call ( request );
for ( Version element : response . getVersionsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListVersionsRequest , ListVersionsResponse >
listVersionsPagedCallable()
public final UnaryCallable<ListVersionsRequest , ArtifactRegistryClient . ListVersionsPagedResponse > listVersionsPagedCallable ()
Lists versions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ListVersionsRequest request =
ListVersionsRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setView ( VersionView . forNumber ( 0 ))
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
ApiFuture<Version> future =
artifactRegistryClient . listVersionsPagedCallable (). futureCall ( request );
// Do something.
for ( Version element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListVersionsRequest , ListVersionsPagedResponse >
setIamPolicy(SetIamPolicyRequest request)
public final Policy setIamPolicy ( SetIamPolicyRequest request )
Updates the IAM policy for a given resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = artifactRegistryClient . setIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.SetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicyCallable()
public final UnaryCallable<SetIamPolicyRequest , Policy > setIamPolicyCallable ()
Updates the IAM policy for a given resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = artifactRegistryClient . setIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.SetIamPolicyRequest , com.google.iam.v1.Policy >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
testIamPermissions(TestIamPermissionsRequest request)
public final TestIamPermissionsResponse testIamPermissions ( TestIamPermissionsRequest request )
Tests if the caller has a list of permissions on a resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response = artifactRegistryClient . testIamPermissions ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.TestIamPermissionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissionsCallable()
public final UnaryCallable<TestIamPermissionsRequest , TestIamPermissionsResponse > testIamPermissionsCallable ()
Tests if the caller has a list of permissions on a resource.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
artifactRegistryClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateFile(File file, FieldMask updateMask)
public final File updateFile ( File file , FieldMask updateMask )
Updates a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
File file = File . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
File response = artifactRegistryClient . updateFile ( file , updateMask );
}
Parameters
Name
Description
file
File Required. The File that replaces the resource on the server.
updateMask
FieldMask Required. The update mask applies to the resource. For the FieldMask
definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
File
updateFile(UpdateFileRequest request)
public final File updateFile ( UpdateFileRequest request )
Updates a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateFileRequest request =
UpdateFileRequest . newBuilder ()
. setFile ( File . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
File response = artifactRegistryClient . updateFile ( request );
}
Parameter
Name
Description
request
UpdateFileRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
File
updateFileCallable()
public final UnaryCallable<UpdateFileRequest , File > updateFileCallable ()
Updates a file.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateFileRequest request =
UpdateFileRequest . newBuilder ()
. setFile ( File . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<File> future = artifactRegistryClient . updateFileCallable (). futureCall ( request );
// Do something.
File response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateFileRequest , File >
updatePackage(Package package_, FieldMask updateMask)
public final Package updatePackage ( Package package_ , FieldMask updateMask )
Updates a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
Package package_ = Package . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Package response = artifactRegistryClient . updatePackage ( package_ , updateMask );
}
Parameters
Name
Description
package_
Package The package that replaces the resource on the server.
updateMask
FieldMask The update mask applies to the resource. For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
Package
updatePackage(UpdatePackageRequest request)
public final Package updatePackage ( UpdatePackageRequest request )
Updates a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdatePackageRequest request =
UpdatePackageRequest . newBuilder ()
. setPackage ( Package . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Package response = artifactRegistryClient . updatePackage ( request );
}
Parameter
Name
Description
request
UpdatePackageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Package
updatePackageCallable()
public final UnaryCallable<UpdatePackageRequest , Package > updatePackageCallable ()
Updates a package.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdatePackageRequest request =
UpdatePackageRequest . newBuilder ()
. setPackage ( Package . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Package> future =
artifactRegistryClient . updatePackageCallable (). futureCall ( request );
// Do something.
Package response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdatePackageRequest , Package >
updateProjectSettings(ProjectSettings projectSettings, FieldMask updateMask)
public final ProjectSettings updateProjectSettings ( ProjectSettings projectSettings , FieldMask updateMask )
Updates the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
ProjectSettings projectSettings = ProjectSettings . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
ProjectSettings response =
artifactRegistryClient . updateProjectSettings ( projectSettings , updateMask );
}
Parameters
Name
Description
projectSettings
ProjectSettings The project settings.
updateMask
FieldMask Field mask to support partial updates.
Returns
Type
Description
ProjectSettings
updateProjectSettings(UpdateProjectSettingsRequest request)
public final ProjectSettings updateProjectSettings ( UpdateProjectSettingsRequest request )
Updates the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateProjectSettingsRequest request =
UpdateProjectSettingsRequest . newBuilder ()
. setProjectSettings ( ProjectSettings . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ProjectSettings response = artifactRegistryClient . updateProjectSettings ( request );
}
Parameter
Name
Description
request
UpdateProjectSettingsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ProjectSettings
updateProjectSettingsCallable()
public final UnaryCallable<UpdateProjectSettingsRequest , ProjectSettings > updateProjectSettingsCallable ()
Updates the Settings for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateProjectSettingsRequest request =
UpdateProjectSettingsRequest . newBuilder ()
. setProjectSettings ( ProjectSettings . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<ProjectSettings> future =
artifactRegistryClient . updateProjectSettingsCallable (). futureCall ( request );
// Do something.
ProjectSettings response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateProjectSettingsRequest , ProjectSettings >
updateRepository(Repository repository, FieldMask updateMask)
public final Repository updateRepository ( Repository repository , FieldMask updateMask )
Updates a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
Repository repository = Repository . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Repository response = artifactRegistryClient . updateRepository ( repository , updateMask );
}
Parameters
Name
Description
repository
Repository The repository that replaces the resource on the server.
updateMask
FieldMask The update mask applies to the resource. For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
Repository
updateRepository(UpdateRepositoryRequest request)
public final Repository updateRepository ( UpdateRepositoryRequest request )
Updates a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateRepositoryRequest request =
UpdateRepositoryRequest . newBuilder ()
. setRepository ( Repository . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Repository response = artifactRegistryClient . updateRepository ( request );
}
Parameter
Name
Description
request
UpdateRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Repository
updateRepositoryCallable()
public final UnaryCallable<UpdateRepositoryRequest , Repository > updateRepositoryCallable ()
Updates a repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateRepositoryRequest request =
UpdateRepositoryRequest . newBuilder ()
. setRepository ( Repository . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Repository> future =
artifactRegistryClient . updateRepositoryCallable (). futureCall ( request );
// Do something.
Repository response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateRepositoryRequest , Repository >
updateRule(Rule rule, FieldMask updateMask)
public final Rule updateRule ( Rule rule , FieldMask updateMask )
Updates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
Rule rule = Rule . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Rule response = artifactRegistryClient . updateRule ( rule , updateMask );
}
Parameters
Name
Description
rule
Rule The rule that replaces the resource on the server.
updateMask
FieldMask The update mask applies to the resource. For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
Rule
updateRule(UpdateRuleRequest request)
public final Rule updateRule ( UpdateRuleRequest request )
Updates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateRuleRequest request =
UpdateRuleRequest . newBuilder ()
. setRule ( Rule . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Rule response = artifactRegistryClient . updateRule ( request );
}
Parameter
Name
Description
request
UpdateRuleRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Rule
updateRuleCallable()
public final UnaryCallable<UpdateRuleRequest , Rule > updateRuleCallable ()
Updates a rule.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateRuleRequest request =
UpdateRuleRequest . newBuilder ()
. setRule ( Rule . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Rule> future = artifactRegistryClient . updateRuleCallable (). futureCall ( request );
// Do something.
Rule response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateRuleRequest , Rule >
updateTag(Tag tag, FieldMask updateMask)
public final Tag updateTag ( Tag tag , FieldMask updateMask )
Updates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
Tag tag = Tag . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Tag response = artifactRegistryClient . updateTag ( tag , updateMask );
}
Parameters
Name
Description
tag
Tag The tag that replaces the resource on the server.
updateMask
FieldMask The update mask applies to the resource. For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
Tag
updateTag(UpdateTagRequest request)
public final Tag updateTag ( UpdateTagRequest request )
Updates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateTagRequest request =
UpdateTagRequest . newBuilder ()
. setTag ( Tag . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Tag response = artifactRegistryClient . updateTag ( request );
}
Parameter
Name
Description
request
UpdateTagRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Tag
updateTagCallable()
public final UnaryCallable<UpdateTagRequest , Tag > updateTagCallable ()
Updates a tag.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateTagRequest request =
UpdateTagRequest . newBuilder ()
. setTag ( Tag . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Tag> future = artifactRegistryClient . updateTagCallable (). futureCall ( request );
// Do something.
Tag response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateTagRequest , Tag >
updateVPCSCConfig(UpdateVPCSCConfigRequest request)
public final VPCSCConfig updateVPCSCConfig ( UpdateVPCSCConfigRequest request )
Updates the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateVPCSCConfigRequest request =
UpdateVPCSCConfigRequest . newBuilder ()
. setVpcscConfig ( VPCSCConfig . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
VPCSCConfig response = artifactRegistryClient . updateVPCSCConfig ( request );
}
Parameter
Name
Description
request
UpdateVPCSCConfigRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
VPCSCConfig
updateVPCSCConfig(VPCSCConfig vpcscConfig, FieldMask updateMask)
public final VPCSCConfig updateVPCSCConfig ( VPCSCConfig vpcscConfig , FieldMask updateMask )
Updates the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
VPCSCConfig vpcscConfig = VPCSCConfig . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
VPCSCConfig response = artifactRegistryClient . updateVPCSCConfig ( vpcscConfig , updateMask );
}
Parameters
Name
Description
vpcscConfig
VPCSCConfig The project config.
updateMask
FieldMask Field mask to support partial updates.
Returns
Type
Description
VPCSCConfig
updateVPCSCConfigCallable()
public final UnaryCallable<UpdateVPCSCConfigRequest , VPCSCConfig > updateVPCSCConfigCallable ()
Updates the VPCSC Config for the Project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateVPCSCConfigRequest request =
UpdateVPCSCConfigRequest . newBuilder ()
. setVpcscConfig ( VPCSCConfig . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<VPCSCConfig> future =
artifactRegistryClient . updateVPCSCConfigCallable (). futureCall ( request );
// Do something.
VPCSCConfig response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateVPCSCConfigRequest , VPCSCConfig >
updateVersion(UpdateVersionRequest request)
public final Version updateVersion ( UpdateVersionRequest request )
Updates a version.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateVersionRequest request =
UpdateVersionRequest . newBuilder ()
. setVersion ( Version . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Version response = artifactRegistryClient . updateVersion ( request );
}
Parameter
Name
Description
request
UpdateVersionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Version
updateVersion(Version version, FieldMask updateMask)
public final Version updateVersion ( Version version , FieldMask updateMask )
Updates a version.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
Version version = Version . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Version response = artifactRegistryClient . updateVersion ( version , updateMask );
}
Parameters
Name
Description
version
Version Required. The Version that replaces the resource on the server.
updateMask
FieldMask The update mask applies to the resource. For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
Returns
Type
Description
Version
updateVersionCallable()
public final UnaryCallable<UpdateVersionRequest , Version > updateVersionCallable ()
Updates a version.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) {
UpdateVersionRequest request =
UpdateVersionRequest . newBuilder ()
. setVersion ( Version . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Version> future =
artifactRegistryClient . updateVersionCallable (). futureCall ( request );
// Do something.
Version response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateVersionRequest , Version >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
