---
title: "REST Resource: projects.repos \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos
  title: "REST Resource: projects.repos \_|\_ Cloud Source Repositories \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Reference
Send feedback
REST Resource: projects.repos
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Repo
JSON representation
MirrorConfig
JSON representation
PubsubConfig
JSON representation
MessageFormat
Methods
Resource: Repo
A repository (or repo) is a Git repository storing versioned source content.
JSON representation
{
"name" : string ,
"size" : string ,
"url" : string ,
"mirrorConfig" : {
object ( MirrorConfig )
} ,
"pubsubConfigs" : {
string : {
object ( PubsubConfig )
} ,
...
}
}
Fields
name
string
Resource name of the repository, of the form projects/<project>/repos/<repo> . The repo name may contain slashes. eg, projects/myproject/repos/name/with/slash
size
string ( int64 format)
The disk usage of the repo, in bytes. Read-only field. Size is only returned by repos.get.
url
string
URL to clone the repository from Google Cloud Source Repositories. Read-only field.
mirrorConfig
object ( MirrorConfig )
How this repository mirrors a repository managed by another service. Read-only field.
pubsubConfigs
map (key: string, value: object ( PubsubConfig ))
How this repository publishes a change in the repository through Cloud Pub/Sub. Keyed by the topic names.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
MirrorConfig
Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
JSON representation
{
"url" : string ,
"webhookId" : string ,
"deployKeyId" : string
}
Fields
url
string
URL of the main repository at the other hosting service.
webhookId
string
ID of the webhook listening to updates to trigger mirroring. Removing this webhook from the other hosting service will stop Google Cloud Source Repositories from receiving notifications, and thereby disabling mirroring.
deployKeyId
string
ID of the SSH deploy key at the other hosting service. Removing this key from the other service would deauthorize Google Cloud Source Repositories from mirroring.
PubsubConfig
Configuration to publish a Cloud Pub/Sub message.
JSON representation
{
"topic" : string ,
"messageFormat" : enum ( MessageFormat ) ,
"serviceAccountEmail" : string
}
Fields
topic
string
A topic of Cloud Pub/Sub. Values are of the form projects/<project>/topics/<topic> . The project needs to be the same project as this config is in.
messageFormat
enum ( MessageFormat )
The format of the Cloud Pub/Sub messages.
serviceAccountEmail
string
Email address of the service account used for publishing Cloud Pub/Sub messages. This service account needs to be in the same project as the PubsubConfig. When added, the caller needs to have iam.serviceAccounts.actAs permission on this service account. If unspecified, it defaults to the compute engine default service account.
MessageFormat
The format of the Cloud Pub/Sub messages.
Enums
MESSAGE_FORMAT_UNSPECIFIED
Unspecified.
PROTOBUF
The message payload is a serialized protocol buffer of SourceRepoEvent.
JSON
The message payload is a JSON string of SourceRepoEvent.
Methods
create
Creates a repo in the given project with the given name.
delete
Deletes a repo.
get
Returns information about a repo.
getIamPolicy
Gets the IAM policy policy for a resource.
list
Returns all repos belonging to a project.
patch
Updates information about a repo.
setIamPolicy
Sets the IAM policy on the specified resource.
sync
Synchronize a connected repo.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
