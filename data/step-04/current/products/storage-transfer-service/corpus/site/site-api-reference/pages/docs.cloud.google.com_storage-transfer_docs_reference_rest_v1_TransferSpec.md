---
title: "TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec
  title: "TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
TransferSpec
Stay organized with collections
Save and categorize content based on your preferences.
Configuration for running a transfer.
JSON representation
{
"objectConditions" : {
object ( ObjectConditions )
} ,
"transferOptions" : {
object ( TransferOptions )
} ,
"transferManifest" : {
object ( TransferManifest )
} ,
"sourceAgentPoolName" : string ,
"sinkAgentPoolName" : string ,
// Union field data_sink can be only one of the following:
"gcsDataSink" : {
object ( GcsData )
} ,
"posixDataSink" : {
object ( PosixFilesystem )
}
// End of list of possible types for union field data_sink .
// Union field data_source can be only one of the following:
"gcsDataSource" : {
object ( GcsData )
} ,
"awsS3DataSource" : {
object ( AwsS3Data )
} ,
"httpDataSource" : {
object ( HttpData )
} ,
"posixDataSource" : {
object ( PosixFilesystem )
} ,
"azureBlobStorageDataSource" : {
object ( AzureBlobStorageData )
} ,
"awsS3CompatibleDataSource" : {
object ( AwsS3CompatibleData )
} ,
"hdfsDataSource" : {
object ( HdfsData )
}
// End of list of possible types for union field data_source .
// Union field intermediate_data_location can be only one of the following:
"gcsIntermediateDataLocation" : {
object ( GcsData )
}
// End of list of possible types for union field intermediate_data_location .
}
Fields
objectConditions
object ( ObjectConditions )
Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' "last modification time" do not exclude objects in a data sink.
transferOptions
object ( TransferOptions )
If the option deleteObjectsUniqueInSink is true and time-based object conditions such as 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.
transferManifest
object ( TransferManifest )
A manifest file provides a list of objects to be transferred from the data source. This field points to the location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply.
sourceAgentPoolName
string
Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
sinkAgentPoolName
string
Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
Union field data_sink . The write sink for the data. data_sink can be only one of the following:
gcsDataSink
object ( GcsData )
Optional. A Cloud Storage data sink.
posixDataSink
object ( PosixFilesystem )
Optional. A POSIX Filesystem data sink.
Union field data_source . The read source of the data. data_source can be only one of the following:
gcsDataSource
object ( GcsData )
Optional. A Cloud Storage data source.
awsS3DataSource
object ( AwsS3Data )
Optional. An AWS S3 data source.
httpDataSource
object ( HttpData )
Optional. An HTTP URL data source.
posixDataSource
object ( PosixFilesystem )
Optional. A POSIX Filesystem data source.
azureBlobStorageDataSource
object ( AzureBlobStorageData )
Optional. An Azure Blob Storage data source.
awsS3CompatibleDataSource
object ( AwsS3CompatibleData )
Optional. An AWS S3 compatible data source.
hdfsDataSource
object ( HdfsData )
Optional. An HDFS cluster data source.
Union field intermediate_data_location .
intermediate_data_location can be only one of the following:
gcsIntermediateDataLocation
object ( GcsData )
For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location through which to transfer data.
See Transfer data between file systems for more information.
PosixFilesystem
A POSIX filesystem resource.
JSON representation
{
"rootDirectory" : string
}
Fields
rootDirectory
string
Root directory path to the filesystem.
AwsS3Data
An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
JSON representation
{
"bucketName" : string ,
"awsAccessKey" : {
object ( AwsAccessKey )
} ,
"path" : string ,
"roleArn" : string ,
"cloudfrontDomain" : string ,
"credentialsSecret" : string ,
// Union field private_network can be only one of the following:
"managedPrivateNetwork" : boolean ,
"privateNetworkService" : string
// End of list of possible types for union field private_network .
}
Fields
bucketName
string
Required. S3 Bucket name (see Creating a bucket ).
awsAccessKey
object ( AwsAccessKey )
Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key.
For information on our data retention policy for user credentials, see User credentials .
path
string
Root path to transfer objects.
Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
roleArn
string
The Amazon Resource Name (ARN) of the role to support temporary credentials via AssumeRoleWithWebIdentity . For more information about ARNs, see IAM ARNs .
When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a AssumeRoleWithWebIdentity call for the provided role using the GoogleServiceAccount for this project.
cloudfrontDomain
string
Optional. The CloudFront distribution domain name pointing to this bucket, to use when fetching.
See Transfer from S3 via CloudFront for more information.
Format: https://{id}.cloudfront.net or any valid custom domain. Must begin with https:// .
credentialsSecret
string
Optional. The Resource name of a secret in Secret Manager.
AWS credentials must be stored in Secret Manager in JSON format:
{ "accessKeyId": "ACCESS_KEY_ID", "secretAccessKey": "SECRET_ACCESS_KEY" }
GoogleServiceAccount must be granted roles/secretmanager.secretAccessor for the resource.
See Configure access to a source: Amazon S3 for more information.
If credentialsSecret is specified, do not specify roleArn or awsAccessKey .
Format: projects/{projectNumber}/secrets/{secret_name}
Union field private_network .
private_network can be only one of the following:
managedPrivateNetwork
boolean
Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.
privateNetworkService
string
Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service}
See Transfer from AWS or Azure over a customer-managed private network for more information.
AwsAccessKey
AWS access key (see AWS Security Credentials ).
For information on our data retention policy for user credentials, see User credentials .
JSON representation
{
"accessKeyId" : string ,
"secretAccessKey" : string
}
Fields
accessKeyId
string
Required. AWS access key ID.
secretAccessKey
string
Required. AWS secret access key. This field is not returned in RPC responses.
HttpData
An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be "TsvHttpData-1.0" , which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields:
HTTP URL — The location of the object.
Length — The size of the object in bytes.
MD5 — The base64-encoded MD5 hash of the object.
For an example of a valid TSV file, see Transferring data from URLs .
When transferring data based on a URL list, keep the following in mind:
When an object located at http(s)://hostname:port/<URL-path> is transferred to a data sink, the name of the object at the data sink is <hostname>/<URL-path> .
If the specified size of an object does not match the actual size of the object fetched, the object is not transferred.
If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails.
Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can share an object publicly and get a link to it.
Storage Transfer Service obeys robots.txt rules and requires the source HTTP server to support Range requests and to return a Content-Length header in each response.
ObjectConditions have no effect when filtering objects to transfer.
JSON representation
{
"listUrl" : string
}
Fields
listUrl
string
Required. The URL that points to the file that stores the object list entries. This file must allow public access. The URL is either an HTTP/HTTPS address (e.g. https://example.com/urllist.tsv ) or a Cloud Storage path (e.g. gs://my-bucket/urllist.tsv ).
AzureBlobStorageData
An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the Azure endpoint . In an AzureBlobStorageData resource, a blobs's name is the Azure Blob Storage blob's key name .
JSON representation
{
"storageAccount" : string ,
"azureCredentials" : {
object ( AzureCredentials )
} ,
"container" : string ,
"path" : string ,
"credentialsSecret" : string ,
"federatedIdentityConfig" : {
object ( FederatedIdentityConfig )
} ,
// Union field private_network can be only one of the following:
"privateNetworkService" : string
// End of list of possible types for union field private_network .
}
Fields
storageAccount
string
Required. The name of the Azure Storage account.
azureCredentials
object ( AzureCredentials )
Required. Input only. Credentials used to authenticate API requests to Azure.
For information on our data retention policy for user credentials, see User credentials .
container
string
Required. The container to transfer from the Azure Storage account.
path
string
Root path to transfer objects.
Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
credentialsSecret
string
Optional. The Resource name of a secret in Secret Manager.
The Azure SAS token must be stored in Secret Manager in JSON format:
{ "sasToken" : "SAS_TOKEN" }
GoogleServiceAccount must be granted roles/secretmanager.secretAccessor for the resource.
See Configure access to a source: Microsoft Azure Blob Storage for more information.
If credentialsSecret is specified, do not specify azureCredentials .
Format: projects/{projectNumber}/secrets/{secret_name}
federatedIdentityConfig
object ( FederatedIdentityConfig )
Optional. Federated identity config of a user registered Azure application.
If federatedIdentityConfig is specified, do not specify azureCredentials or credentialsSecret .
Union field private_network .
private_network can be only one of the following:
privateNetworkService
string
Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
Format: projects/{projectId}/locations/{location}/namespaces/{namespace}/services/{service}
See Transfer from AWS or Azure over a customer-managed private network for more information.
AzureCredentials
Azure credentials
For information on our data retention policy for user credentials, see User credentials .
JSON representation
{
"sasToken" : string
}
Fields
sasToken
string
Required. Azure shared access signature (SAS).
For more information about SAS, see Grant limited access to Azure Storage resources using shared access signatures (SAS) .
FederatedIdentityConfig
The identity of an Azure application through which Storage Transfer Service can authenticate requests using Azure workload identity federation.
Storage Transfer Service can issue requests to Azure Storage through registered Azure applications, eliminating the need to pass credentials to Storage Transfer Service directly.
To configure federated identity, see Configure access to Microsoft Azure Storage .
JSON representation
{
"clientId" : string ,
"tenantId" : string
}
Fields
clientId
string
Required. The client (application) ID of the application with federated credentials.
tenantId
string
Required. The tenant (directory) ID of the application with federated credentials.
AwsS3CompatibleData
An AwsS3CompatibleData resource.
JSON representation
{
"bucketName" : string ,
"path" : string ,
"endpoint" : string ,
"region" : string ,
// Union field data_provider can be only one of the following:
"s3Metadata" : {
object ( S3CompatibleMetadata )
}
// End of list of possible types for union field data_provider .
}
Fields
bucketName
string
Required. Specifies the name of the bucket.
path
string
Specifies the root path to transfer objects.
Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
endpoint
string
Required. Specifies the endpoint of the storage service.
region
string
Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region.
Union field data_provider . Specifies the metadata of the S3 compatible data provider. Each provider may contain some attributes that do not apply to all S3-compatible data providers. When not specified, S3CompatibleMetadata is used by default. data_provider can be only one of the following:
s3Metadata
object ( S3CompatibleMetadata )
A S3 compatible metadata.
S3CompatibleMetadata
S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
JSON representation
{
"authMethod" : enum ( AuthMethod ) ,
"requestModel" : enum ( RequestModel ) ,
"protocol" : enum ( NetworkProtocol ) ,
"listApi" : enum ( ListApi )
}
Fields
authMethod
enum ( AuthMethod )
Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.
requestModel
enum ( RequestModel )
Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
protocol
enum ( NetworkProtocol )
Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
listApi
enum ( ListApi )
The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.
AuthMethod
The authentication and authorization method used by the storage service.
Enums
AUTH_METHOD_UNSPECIFIED
AuthMethod is not specified.
AUTH_METHOD_AWS_SIGNATURE_V4
Auth requests with AWS SigV4.
AUTH_METHOD_AWS_SIGNATURE_V2
Auth requests with AWS SigV2.
RequestModel
The request model of the API.
Enums
REQUEST_MODEL_UNSPECIFIED
RequestModel is not specified.
REQUEST_MODEL_VIRTUAL_HOSTED_STYLE
Perform requests using Virtual Hosted Style. Example: https://bucket-name.s3.region.amazonaws.com/key-name
REQUEST_MODEL_PATH_STYLE
Perform requests using Path Style. Example: https://s3.region.amazonaws.com/bucket-name/key-name
NetworkProtocol
The agent network protocol to access the storage service.
Enums
NETWORK_PROTOCOL_UNSPECIFIED
NetworkProtocol is not specified.
NETWORK_PROTOCOL_HTTPS
Perform requests using HTTPS.
NETWORK_PROTOCOL_HTTP
Not recommended: This sends data in clear-text. This is only appropriate within a closed network or for publicly available data. Perform requests using HTTP.
ListApi
The Listing API to use for discovering objects.
Enums
LIST_API_UNSPECIFIED
ListApi is not specified.
LIST_OBJECTS_V2
Perform listing using ListObjectsV2 API.
LIST_OBJECTS
Legacy ListObjects API.
HdfsData
An HdfsData resource specifies a path within an HDFS entity (e.g. a cluster). All cluster-specific settings, such as namenodes and ports, are configured on the transfer agents servicing requests, so HdfsData only contains the root path to the data in our transfer.
JSON representation
{
"path" : string
}
Fields
path
string
Root path to transfer files.
TransferManifest
Specifies where the manifest is located.
JSON representation
{
"location" : string
}
Fields
location
string
Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have storage.objects.get permission for this object. An example path is gs://bucketName/path/manifest.csv .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-06 UTC."],[],[]]
