---
title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types
  title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.1
1.6.0
1.5.2
1.4.1
1.3.1
1.2.1
1.1.1
1.0.2
0.1.0
API documentation for storage_transfer_v1.types package.
Classes
AgentPool
Represents an agent pool.
AwsAccessKey
AWS access key (see AWS Security
Credentials <https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html> __).
For information on our data retention policy for user credentials,
see User
credentials </storage-transfer/docs/data-retention#user-credentials> __.
AwsS3CompatibleData
An AwsS3CompatibleData resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AwsS3Data
An AwsS3Data resource can be a data source, but not a data
sink. In an AwsS3Data resource, an object's name is the S3
object's key name.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AzureBlobStorageData
An AzureBlobStorageData resource can be a data source, but not a
data sink. An AzureBlobStorageData resource represents one Azure
container. The storage account determines the Azure
endpoint <https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints> .
In an AzureBlobStorageData resource, a blobs's name is the Azure
Blob Storage blob's key
name <https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names> .
AzureCredentials
Azure credentials
For information on our data retention policy for user credentials,
see User
credentials </storage-transfer/docs/data-retention#user-credentials> __.
CreateAgentPoolRequest
Specifies the request passed to CreateAgentPool.
CreateTransferJobRequest
Request passed to CreateTransferJob.
DeleteAgentPoolRequest
Specifies the request passed to DeleteAgentPool.
DeleteTransferJobRequest
Request passed to DeleteTransferJob.
ErrorLogEntry
An entry describing an error that has occurred.
ErrorSummary
A summary of errors by error code, plus a count and sample
error log entries.
EventStream
Specifies the Event-driven transfer options. Event-driven
transfers listen to an event stream to transfer updated files.
GcsData
In a GcsData resource, an object's name is the Cloud Storage
object's name and its "last modification time" refers to the
object's updated property of Cloud Storage objects, which
changes when the content or the metadata of the object is updated.
GetAgentPoolRequest
Specifies the request passed to GetAgentPool.
GetGoogleServiceAccountRequest
Request passed to GetGoogleServiceAccount.
GetTransferJobRequest
Request passed to GetTransferJob.
GoogleServiceAccount
Google service account
HdfsData
An HdfsData resource specifies a path within an HDFS entity
(e.g. a cluster). All cluster-specific settings, such as
namenodes and ports, are configured on the transfer agents
servicing requests, so HdfsData only contains the root path to
the data in our transfer.
HttpData
An HttpData resource specifies a list of objects on the web to be
transferred over HTTP. The information of the objects to be
transferred is contained in a file referenced by a URL. The first
line in the file must be "TsvHttpData-1.0" , which specifies the
format of the file. Subsequent lines specify the information of the
list of objects, one object per list entry. Each entry has the
following tab-delimited fields:
HTTP URL — The location of the object.
Length — The size of the object in bytes.
MD5 — The base64-encoded MD5 hash of the object.
For an example of a valid TSV file, see Transferring data from
URLs <https://cloud.google.com/storage-transfer/docs/create-url-list> __.
When transferring data based on a URL list, keep the following in
mind:
When an object located at http(s)://hostname:port/<URL-path>
is transferred to a data sink, the name of the object at the data
sink is <hostname>/<URL-path> .
If the specified size of an object does not match the actual size
of the object fetched, the object is not transferred.
If the specified MD5 does not match the MD5 computed from the
transferred bytes, the object transfer fails.
Ensure that each URL you specify is publicly accessible. For
example, in Cloud Storage you can share an object publicly and get a link to it.
Storage Transfer Service obeys robots.txt rules and requires
the source HTTP server to support Range requests and to return
a Content-Length header in each response.
ObjectConditions][google.storagetransfer.v1.ObjectConditions]
have no effect when filtering objects to transfer.
ListAgentPoolsRequest
The request passed to ListAgentPools.
ListAgentPoolsResponse
Response from ListAgentPools.
ListTransferJobsRequest
projectId , jobNames , and jobStatuses are query
parameters that can be specified when listing transfer jobs.
ListTransferJobsResponse
Response from ListTransferJobs.
LoggingConfig
Specifies the logging behavior for transfer operations.
Logs can be sent to Cloud Logging for all transfer types. See Read
transfer
logs <https://cloud.google.com/storage-transfer/docs/read-transfer-logs> __
for details.
MetadataOptions
Specifies the metadata options for running a transfer.
NotificationConfig
Specification to configure notifications published to Pub/Sub.
Notifications are published to the customer-provided topic using the
following PubsubMessage.attributes :
"eventType" : one of the
EventType][google.storagetransfer.v1.NotificationConfig.EventType]
values
"payloadFormat" : one of the
PayloadFormat][google.storagetransfer.v1.NotificationConfig.PayloadFormat]
values
"projectId" : the
project_id][google.storagetransfer.v1.TransferOperation.project_id]
of the TransferOperation
"transferJobName" : the
transfer_job_name][google.storagetransfer.v1.TransferOperation.transfer_job_name]
of the TransferOperation
"transferOperationName" : the
name][google.storagetransfer.v1.TransferOperation.name] of the
TransferOperation
The PubsubMessage.data contains a
TransferOperation][google.storagetransfer.v1.TransferOperation]
resource formatted according to the specified PayloadFormat .
ObjectConditions
Conditions that determine which objects are transferred. Applies
only to Cloud Data Sources such as S3, Azure, and Cloud Storage.
The "last modification time" refers to the time of the last change
to the object's content or metadata — specifically, this is the
updated property of Cloud Storage objects, the LastModified
field of S3 objects, and the Last-Modified header of Azure
blobs.
For S3 objects, the LastModified value is the time the object
begins uploading. If the object meets your "last modification time"
criteria, but has not finished uploading, the object is not
transferred. See Transfer from Amazon S3 to Cloud
Storage <https://cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3#transfer_options> __
for more information.
Transfers with a
PosixFilesystem][google.storagetransfer.v1.PosixFilesystem] source
or destination don't support ObjectConditions .
PauseTransferOperationRequest
Request passed to PauseTransferOperation.
PosixFilesystem
A POSIX filesystem resource.
ReplicationSpec
Specifies the configuration for a cross-bucket replication
job. Cross-bucket replication copies new or updated objects from
a source Cloud Storage bucket to a destination Cloud Storage
bucket. Existing objects in the source bucket are not copied by
a new cross-bucket replication job.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ResumeTransferOperationRequest
Request passed to ResumeTransferOperation.
RunTransferJobRequest
Request passed to RunTransferJob.
S3CompatibleMetadata
S3CompatibleMetadata contains the metadata fields that apply
to the basic types of S3-compatible data providers.
Schedule
Transfers can be scheduled to recur or to run just once.
TransferCounters
A collection of counters that report the progress of a
transfer operation.
TransferJob
This resource represents the configuration of a transfer job
that runs periodically.
TransferManifest
Specifies where the manifest is located.
TransferOperation
A description of the execution of a transfer.
TransferOptions
TransferOptions define the actions to be performed on objects
in a transfer.
TransferSpec
Configuration for running a transfer.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
UpdateAgentPoolRequest
Specifies the request passed to UpdateAgentPool.
UpdateTransferJobRequest
Request passed to UpdateTransferJob.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
