---
title: "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories
  title: "REST Resource: projects.locations.repositories \_|\_ Artifact Registry \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
REST Resource: projects.locations.repositories
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Repository
JSON representation
MavenRepositoryConfig
JSON representation
VersionPolicy
DockerRepositoryConfig
JSON representation
VirtualRepositoryConfig
JSON representation
UpstreamPolicy
JSON representation
RemoteRepositoryConfig
JSON representation
DockerRepository
JSON representation
PublicRepository
CustomRepository
JSON representation
MavenRepository
JSON representation
PublicRepository
CustomRepository
JSON representation
NpmRepository
JSON representation
PublicRepository
CustomRepository
JSON representation
PythonRepository
JSON representation
PublicRepository
CustomRepository
JSON representation
AptRepository
JSON representation
PublicRepository
JSON representation
RepositoryBase
CustomRepository
JSON representation
YumRepository
JSON representation
PublicRepository
JSON representation
RepositoryBase
CustomRepository
JSON representation
CommonRemoteRepository
JSON representation
UpstreamCredentials
JSON representation
UsernamePasswordCredentials
JSON representation
Format
Mode
CleanupPolicy
JSON representation
CleanupPolicyCondition
JSON representation
TagState
CleanupPolicyMostRecentVersions
JSON representation
Action
VulnerabilityScanningConfig
JSON representation
EnablementConfig
EnablementState
Methods
Resource: Repository
A Repository for storing artifacts with a specific format.
JSON representation
{
"name" : string ,
"format" : enum ( Format ) ,
"description" : string ,
"labels" : {
string : string ,
...
} ,
"createTime" : string ,
"updateTime" : string ,
"kmsKeyName" : string ,
"mode" : enum ( Mode ) ,
"cleanupPolicies" : {
string : {
object ( CleanupPolicy )
} ,
...
} ,
"sizeBytes" : string ,
"satisfiesPzs" : boolean ,
"cleanupPolicyDryRun" : boolean ,
"vulnerabilityScanningConfig" : {
object ( VulnerabilityScanningConfig )
} ,
"disallowUnspecifiedMode" : boolean ,
"satisfiesPzi" : boolean ,
"registryUri" : string ,
// Union field format_config can be only one of the following:
"mavenConfig" : {
object ( MavenRepositoryConfig )
} ,
"dockerConfig" : {
object ( DockerRepositoryConfig )
}
// End of list of possible types for union field format_config .
// Union field mode_config can be only one of the following:
"virtualRepositoryConfig" : {
object ( VirtualRepositoryConfig )
} ,
"remoteRepositoryConfig" : {
object ( RemoteRepositoryConfig )
}
// End of list of possible types for union field mode_config .
}
Fields
name
string
The name of the repository, for example: projects/p1/locations/us-central1/repositories/repo1 . For each location in a project, repository names must be unique.
format
enum ( Format )
Optional. The format of packages that are stored in the repository.
description
string
The user-provided description of the repository.
labels
map (key: string, value: string)
Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. The time when the repository was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time when the repository was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
kmsKeyName
string
The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key . This value may not be changed after the Repository has been created.
mode
enum ( Mode )
Optional. The mode of the repository.
cleanupPolicies
map (key: string, value: object ( CleanupPolicy ))
Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
sizeBytes
string ( int64 format)
Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs.
satisfiesPzs
boolean
Output only. Whether or not this repository satisfies PZS.
cleanupPolicyDryRun
boolean
Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository.
vulnerabilityScanningConfig
object ( VulnerabilityScanningConfig )
Optional. Config and state for vulnerability scanning of resources within this Repository.
disallowUnspecifiedMode
boolean
Optional. If this is true, an unspecified repo type will be treated as error rather than defaulting to standard.
satisfiesPzi
boolean
Output only. Whether or not this repository satisfies PZI.
registryUri
string
Output only. The repository endpoint, for example: us-docker.pkg.dev/my-proj/my-repo .
Union field format_config . Repository-specific configurations. format_config can be only one of the following:
mavenConfig
object ( MavenRepositoryConfig )
Maven repository config contains repository level configuration for the repositories of maven type.
dockerConfig
object ( DockerRepositoryConfig )
Docker repository config contains repository level configuration for the repositories of docker type.
Union field mode_config . Repository configuration specific to the Mode value being selected (Remote or Virtual) mode_config can be only one of the following:
virtualRepositoryConfig
object ( VirtualRepositoryConfig )
Configuration specific for a Virtual Repository.
remoteRepositoryConfig
object ( RemoteRepositoryConfig )
Configuration specific for a Remote Repository.
MavenRepositoryConfig
MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
JSON representation
{
"allowSnapshotOverwrites" : boolean ,
"versionPolicy" : enum ( VersionPolicy )
}
Fields
allowSnapshotOverwrites
boolean
The repository with this flag will allow publishing the same snapshot versions.
versionPolicy
enum ( VersionPolicy )
Version policy defines the versions that the registry will accept.
VersionPolicy
VersionPolicy is the version policy for the repository.
Enums
VERSION_POLICY_UNSPECIFIED
VERSION_POLICY_UNSPECIFIED - the version policy is not defined. When the version policy is not defined, no validation is performed for the versions.
RELEASE
RELEASE - repository will accept only Release versions.
SNAPSHOT
SNAPSHOT - repository will accept only Snapshot versions.
DockerRepositoryConfig
DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type.
JSON representation
{
"immutableTags" : boolean
}
Fields
immutableTags
boolean
The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
VirtualRepositoryConfig
Virtual repository configuration.
JSON representation
{
"upstreamPolicies" : [
{
object ( UpstreamPolicy )
}
]
}
Fields
upstreamPolicies[]
object ( UpstreamPolicy )
Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository.
UpstreamPolicy
Artifact policy configuration for the repository contents.
JSON representation
{
"id" : string ,
"repository" : string ,
"priority" : integer
}
Fields
id
string
The user-provided ID of the upstream policy.
repository
string
A reference to the repository resource, for example: projects/p1/locations/us-central1/repositories/repo1 .
priority
integer
Entries with a greater priority value take precedence in the pull order.
RemoteRepositoryConfig
Remote repository configuration.
JSON representation
{
"description" : string ,
"upstreamCredentials" : {
object ( UpstreamCredentials )
} ,
"disableUpstreamValidation" : boolean ,
// Union field remote_source can be only one of the following:
"dockerRepository" : {
object ( DockerRepository )
} ,
"mavenRepository" : {
object ( MavenRepository )
} ,
"npmRepository" : {
object ( NpmRepository )
} ,
"pythonRepository" : {
object ( PythonRepository )
} ,
"aptRepository" : {
object ( AptRepository )
} ,
"yumRepository" : {
object ( YumRepository )
} ,
"commonRepository" : {
object ( CommonRemoteRepository )
}
// End of list of possible types for union field remote_source .
}
Fields
description
string
The description of the remote source.
upstreamCredentials
object ( UpstreamCredentials )
Optional. The credentials used to access the remote repository.
disableUpstreamValidation
boolean
Input only. A create/update remote repo option to avoid making a HEAD/GET request to validate a remote repo and any supplied upstream credentials.
Union field remote_source . Settings specific to the remote repository. remote_source can be only one of the following:
dockerRepository
object ( DockerRepository )
Specific settings for a Docker remote repository.
mavenRepository
object ( MavenRepository )
Specific settings for a Maven remote repository.
npmRepository
object ( NpmRepository )
Specific settings for an Npm remote repository.
pythonRepository
object ( PythonRepository )
Specific settings for a Python remote repository.
aptRepository
object ( AptRepository )
Specific settings for an Apt remote repository.
yumRepository
object ( YumRepository )
Specific settings for a Yum remote repository.
commonRepository
object ( CommonRemoteRepository )
Common remote repository settings. Used as the remote repository upstream URL.
DockerRepository
Configuration for a Docker remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : enum ( PublicRepository ) ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository. upstream can be only one of the following:
publicRepository
enum ( PublicRepository )
One of the publicly available Docker repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Predefined list of publicly available Docker repositories like Docker Hub.
Enums
PUBLIC_REPOSITORY_UNSPECIFIED
Unspecified repository.
DOCKER_HUB
Docker Hub.
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the custom remote repository, for ex: "https://registry-1.docker.io".
MavenRepository
Configuration for a Maven remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : enum ( PublicRepository ) ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository. upstream can be only one of the following:
publicRepository
enum ( PublicRepository )
One of the publicly available Maven repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Predefined list of publicly available Maven repositories like Maven Central.
Enums
PUBLIC_REPOSITORY_UNSPECIFIED
Unspecified repository.
MAVEN_CENTRAL
Maven Central.
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the upstream remote repository, for ex: "https://my.maven.registry/".
NpmRepository
Configuration for a Npm remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : enum ( PublicRepository ) ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository upstream can be only one of the following:
publicRepository
enum ( PublicRepository )
One of the publicly available Npm repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Predefined list of publicly available NPM repositories like npmjs.
Enums
PUBLIC_REPOSITORY_UNSPECIFIED
Unspecified repository.
NPMJS
npmjs.
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the upstream remote repository, for ex: "https://my.npm.registry/".
PythonRepository
Configuration for a Python remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : enum ( PublicRepository ) ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository. upstream can be only one of the following:
publicRepository
enum ( PublicRepository )
One of the publicly available Python repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Predefined list of publicly available Python repositories like PyPI.org.
Enums
PUBLIC_REPOSITORY_UNSPECIFIED
Unspecified repository.
PYPI
PyPI.
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the upstream remote repository, for ex: "https://my.python.registry/".
AptRepository
Configuration for an Apt remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : {
object ( PublicRepository )
} ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository. upstream can be only one of the following:
publicRepository
object ( PublicRepository )
One of the publicly available Apt repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Publicly available Apt repositories constructed from a common repository base and a custom repository path.
JSON representation
{
"repositoryBase" : enum ( RepositoryBase ) ,
"repositoryPath" : string
}
Fields
repositoryBase
enum ( RepositoryBase )
A common public repository base for Apt.
repositoryPath
string
A custom field to define a path to a specific repository from the base.
RepositoryBase
Predefined list of publicly available repository bases for Apt.
Enums
REPOSITORY_BASE_UNSPECIFIED
Unspecified repository base.
DEBIAN
Debian.
UBUNTU
Ubuntu LTS/Pro.
DEBIAN_SNAPSHOT
Archived Debian.
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the upstream remote repository, for ex: "https://my.apt.registry/".
YumRepository
Configuration for a Yum remote repository.
JSON representation
{
// Union field upstream can be only one of the following:
"publicRepository" : {
object ( PublicRepository )
} ,
"customRepository" : {
object ( CustomRepository )
}
// End of list of possible types for union field upstream .
}
Fields
Union field upstream . Address of the remote repository. upstream can be only one of the following:
publicRepository
object ( PublicRepository )
One of the publicly available Yum repositories supported by Artifact Registry.
customRepository
object ( CustomRepository )
Customer-specified remote repository.
PublicRepository
Publicly available Yum repositories constructed from a common repository base and a custom repository path.
JSON representation
{
"repositoryBase" : enum ( RepositoryBase ) ,
"repositoryPath" : string
}
Fields
repositoryBase
enum ( RepositoryBase )
A common public repository base for Yum.
repositoryPath
string
A custom field to define a path to a specific repository from the base.
RepositoryBase
Predefined list of publicly available repository bases for Yum.
Enums
REPOSITORY_BASE_UNSPECIFIED
Unspecified repository base.
CENTOS
CentOS.
CENTOS_DEBUG
CentOS Debug.
CENTOS_VAULT
CentOS Vault.
CENTOS_STREAM
CentOS Stream.
ROCKY
Rocky.
EPEL
Fedora Extra Packages for Enterprise Linux (EPEL).
CustomRepository
Customer-specified publicly available remote repository.
JSON representation
{
"uri" : string
}
Fields
uri
string
An http/https uri reference to the upstream remote repository, for ex: "https://my.yum.registry/".
CommonRemoteRepository
Common remote repository settings type.
JSON representation
{
"uri" : string
}
Fields
uri
string
Required. A common public repository base for remote repository.
UpstreamCredentials
The credentials to access the remote repository.
JSON representation
{
// Union field credentials can be only one of the following:
"usernamePasswordCredentials" : {
object ( UsernamePasswordCredentials )
}
// End of list of possible types for union field credentials .
}
Fields
Union field credentials .
credentials can be only one of the following:
usernamePasswordCredentials
object ( UsernamePasswordCredentials )
Use username and password to access the remote repository.
UsernamePasswordCredentials
Username and password credentials.
JSON representation
{
"username" : string ,
"passwordSecretVersion" : string
}
Fields
username
string
The username to access the remote repository.
passwordSecretVersion
string
The Secret Manager key version that holds the password to access the remote repository. Must be in the format of projects/{project}/secrets/{secret}/versions/{version} .
Format
A package format.
Enums
FORMAT_UNSPECIFIED
Unspecified package format.
DOCKER
Docker package format.
MAVEN
Maven package format.
NPM
NPM package format.
APT
APT package format.
YUM
YUM package format.
GOOGET
GooGet package format.
PYTHON
Python package format.
KFP
Kubeflow Pipelines package format.
GO
Go package format.
GENERIC
Generic package format.
RUBY
Ruby package format.
Mode
The mode configures the repository to serve artifacts from different sources.
Enums
MODE_UNSPECIFIED
Unspecified mode.
STANDARD_REPOSITORY
A standard repository storing artifacts.
VIRTUAL_REPOSITORY
A virtual repository to serve artifacts from one or more sources.
REMOTE_REPOSITORY
A remote repository to serve artifacts from a remote source.
ASSURED_OSS_REPOSITORY
Replacement of AOSS_REPOSITORY.
CleanupPolicy
Artifact policy configuration for repository cleanup policies.
JSON representation
{
"id" : string ,
"action" : enum ( Action ) ,
// Union field condition_type can be only one of the following:
"condition" : {
object ( CleanupPolicyCondition )
} ,
"mostRecentVersions" : {
object ( CleanupPolicyMostRecentVersions )
}
// End of list of possible types for union field condition_type .
}
Fields
id
string
The user-provided ID of the cleanup policy.
action
enum ( Action )
Policy action.
Union field condition_type .
condition_type can be only one of the following:
condition
object ( CleanupPolicyCondition )
Policy condition for matching versions.
mostRecentVersions
object ( CleanupPolicyMostRecentVersions )
Policy condition for retaining a minimum number of versions. May only be specified with a Keep action.
CleanupPolicyCondition
CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied.
JSON representation
{
"tagPrefixes" : [
string
] ,
"versionNamePrefixes" : [
string
] ,
"packageNamePrefixes" : [
string
] ,
"tagState" : enum ( TagState ) ,
"olderThan" : string ,
"newerThan" : string
}
Fields
tagPrefixes[]
string
Match versions by tag prefix. Applied on any prefix match.
versionNamePrefixes[]
string
Match versions by version name prefix. Applied on any prefix match.
packageNamePrefixes[]
string
Match versions by package prefix. Applied on any prefix match.
tagState
enum ( TagState )
Match versions by tag status.
olderThan
string ( Duration format)
Match versions older than a duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
newerThan
string ( Duration format)
Match versions newer than a duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
TagState
Statuses applying to versions.
Enums
TAG_STATE_UNSPECIFIED
Tag status not specified.
TAGGED
Applies to tagged versions only.
UNTAGGED
Applies to untagged versions only.
ANY
Applies to all versions.
CleanupPolicyMostRecentVersions
CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions.
JSON representation
{
"packageNamePrefixes" : [
string
] ,
"keepCount" : integer
}
Fields
packageNamePrefixes[]
string
List of package name prefixes that will apply this rule.
keepCount
integer
Minimum number of versions to keep.
Action
Action type for a cleanup policy.
Enums
ACTION_UNSPECIFIED
Action not specified.
DELETE
Delete action.
KEEP
Keep action.
VulnerabilityScanningConfig
Config on whether to perform vulnerability scanning for resources in this repository, as well as output fields describing current state.
JSON representation
{
"enablementConfig" : enum ( EnablementConfig ) ,
"lastEnableTime" : string ,
"enablementState" : enum ( EnablementState ) ,
"enablementStateReason" : string
}
Fields
enablementConfig
enum ( EnablementConfig )
Optional. Config for whether this repository has vulnerability scanning disabled.
lastEnableTime
string ( Timestamp format)
Output only. The last time this repository config was enabled.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
enablementState
enum ( EnablementState )
Output only. State of feature enablement, combining repository enablement config and API enablement state.
enablementStateReason
string
Output only. Reason for the repository state.
EnablementConfig
Config for vulnerability scanning of resources in this repository.
Enums
ENABLEMENT_CONFIG_UNSPECIFIED
Not set. This will be treated as INHERITED for Docker repositories and DISABLED for non-Docker repositories.
INHERITED
Scanning is Enabled, but dependent on API enablement.
DISABLED
No automatic vulnerability scanning will be performed for this repository.
EnablementState
Describes the state of vulnerability scanning in this repository, including both repository enablement and API enablement.
Enums
ENABLEMENT_STATE_UNSPECIFIED
Enablement state is unclear.
SCANNING_UNSUPPORTED
Repository does not support vulnerability scanning.
SCANNING_DISABLED
Vulnerability scanning is disabled for this repository.
SCANNING_ACTIVE
Vulnerability scanning is active for this repository.
Methods
create
Creates a repository.
delete
Deletes a repository and all of its contents.
exportArtifact
Exports an artifact to a Cloud Storage bucket.
get
Gets a repository.
getIamPolicy
Gets the IAM policy for a given resource.
list
Lists repositories.
patch
Updates a repository.
setIamPolicy
Updates the IAM policy for a given resource.
testIamPermissions
Tests if the caller has a list of permissions on a resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]
