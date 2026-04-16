---
title: "Method: connect.get \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/connect/get
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/apis
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/connect/get
  title: "Method: connect.get \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Method: connect.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
CaMode
ConnectPoolNodeConfig
JSON representation
MdxProtocolSupport
Examples
Try it!
Retrieves connect settings about a Cloud SQL instance.
HTTP request
GET https://sqladmin.googleapis.com/v1/projects/{project}/instances/{instance}/connectSettings
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
project
string
Project ID of the project that contains the instance.
instance
string
Cloud SQL instance ID. This does not include the project ID.
Query parameters
Parameters
readTime
string ( Timestamp format)
Optional. Optional snapshot read timestamp to trade freshness for performance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Request body
The request body must be empty.
Response body
Connect settings retrieval response.
If successful, the response body contains data with the following structure:
JSON representation
{
"kind" : string ,
"serverCaCert" : {
object ( SslCert )
} ,
"ipAddresses" : [
{
object ( IpMapping )
}
] ,
"region" : string ,
"databaseVersion" : enum ( SqlDatabaseVersion ) ,
"backendType" : enum ( SqlBackendType ) ,
"pscEnabled" : boolean ,
"dnsName" : string ,
"serverCaMode" : enum ( CaMode ) ,
"customSubjectAlternativeNames" : [
string
] ,
"dnsNames" : [
{
object ( DnsNameMapping )
}
] ,
"nodes" : [
{
object ( ConnectPoolNodeConfig )
}
] ,
"mdxProtocolSupport" : [
enum ( MdxProtocolSupport )
] ,
"nodeCount" : integer
}
Fields
kind
string
This is always sql#connectSettings .
serverCaCert
object ( SslCert )
SSL configuration.
ipAddresses[]
object ( IpMapping )
The assigned IP addresses for the instance.
region
string
The cloud region for the instance. For example, us-central1 , europe-west1 . The region cannot be changed after instance creation.
databaseVersion
enum ( SqlDatabaseVersion )
The database engine type and version. The databaseVersion field cannot be changed after instance creation. MySQL instances: MYSQL_8_0 , MYSQL_5_7 (default), or MYSQL_5_6 . PostgreSQL instances: POSTGRES_9_6 , POSTGRES_10 , POSTGRES_11 , POSTGRES_12 (default), POSTGRES_13 , or POSTGRES_14 . SQL Server instances: SQLSERVER_2017_STANDARD (default), SQLSERVER_2017_ENTERPRISE , SQLSERVER_2017_EXPRESS , SQLSERVER_2017_WEB , SQLSERVER_2019_STANDARD , SQLSERVER_2019_ENTERPRISE , SQLSERVER_2019_EXPRESS , or SQLSERVER_2019_WEB .
backendType
enum ( SqlBackendType )
SECOND_GEN : Cloud SQL database instance. EXTERNAL : A database server that is not managed by Google. This property is read-only; use the tier property in the settings object to determine the database type.
pscEnabled
boolean
Whether PSC connectivity is enabled for this instance.
dnsName
string
The dns name of the instance.
serverCaMode
enum ( CaMode )
Specify what type of CA is used for the server certificate.
customSubjectAlternativeNames[]
string
Custom subject alternative names for the server certificate.
dnsNames[]
object ( DnsNameMapping )
Output only. The list of DNS names used by this instance.
nodes[]
object ( ConnectPoolNodeConfig )
Output only. Entries containing information about each read pool node of the read pool.
mdxProtocolSupport[]
enum ( MdxProtocolSupport )
Optional. Output only. mdxProtocolSupport controls how the client uses metadata exchange when connecting to the instance. The values in the list representing parts of the MDX protocol that are supported by this instance. When the list is empty, the instance does not support MDX, so the client must not send an MDX request. The default is empty.
nodeCount
integer
The number of read pool nodes in a read pool.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
CaMode
Various Certificate Authority (CA) modes for certificate signing.
Enums
CA_MODE_UNSPECIFIED
CA mode is unknown.
GOOGLE_MANAGED_INTERNAL_CA
Google-managed self-signed internal CA.
GOOGLE_MANAGED_CAS_CA
Google-managed regional CA part of root CA hierarchy hosted on Google Cloud's Certificate Authority Service (CAS).
CUSTOMER_MANAGED_CAS_CA
Customer-managed CA hosted on Google Cloud's Certificate Authority Service (CAS).
ConnectPoolNodeConfig
Details of a single read pool node of a read pool.
JSON representation
{
"ipAddresses" : [
{
object ( IpMapping )
}
] ,
"dnsNames" : [
{
object ( DnsNameMapping )
}
] ,
"name" : string ,
"dnsName" : string
}
Fields
ipAddresses[]
object ( IpMapping )
Output only. Mappings containing IP addresses that can be used to connect to the read pool node.
dnsNames[]
object ( DnsNameMapping )
Output only. The list of DNS names used by this read pool node.
name
string
Output only. The name of the read pool node. Doesn't include the project ID.
dnsName
string
Output only. The DNS name of the read pool node.
MdxProtocolSupport
MdxProtocolSupport describes parts of the MDX protocol supported by this instance.
Enums
MDX_PROTOCOL_SUPPORT_UNSPECIFIED
Not specified.
CLIENT_PROTOCOL_TYPE
Client should send the client protocol type in the MDX request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-24 UTC."],[],[]]
