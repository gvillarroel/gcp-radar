---
title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles
  title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
MCP Tools Reference: datastream
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_connection_profiles
Lists connection profiles in a given project and location.
For example: { parent: "projects/my-project/locations/us-central1" create_time_after: 2025-10-02T10:15:33Z create_time_before: 2025-10-03T00:00:00Z display_name: bookstore page_size: 100 } will return up to 100 connection profiles in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
The following sample demonstrate how to use curl to invoke the list_connection_profiles MCP tool.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_connection_profiles",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for 'ListConnectionProfiles' request.
ListConnectionProfilesRequest
JSON representation
{
"parent" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"createTimeAfter" : string ,
"createTimeBefore" : string ,
"displayName" : string
}
Fields
parent
string
Required. The parent that owns the collection of connection profiles. Must be in the format projects/*/locations/* . For example: 'projects/my-project/locations/us-central1'
pageSize
integer
Optional. Use to limit the number of connection profiles returned. Valid values are between 1 and 1000 inclusive. Defaults to 1000 if not provided or outside of the valid range. Note that due to filtering, it is possible to get no results (but a next_page_token) so you should keep calling this method until you get a response with an empty next_page_token.
pageToken
string
Optional. A page token, received from a previous list_connection_profiles call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to list_connection_profiles must match the call that provided the page token.
createTimeAfter
string
Optional. Use to get connection profiles that were created on or after the provided date/time, formatted as RFC-3339. Common Examples: 2023-09-24T15:30:00Z or 2023-09-24T15:30:00.000+09:00.
createTimeBefore
string
Optional. Use to get connection profiles that were created before the provided date/time, formatted as RFC-3339. Common Examples: 2023-09-24T15:30:00Z or 2023-09-24T15:30:00.000+09:00.
displayName
string
Optional. Use to get connection profiles whose display name contains the provided name.
Output Schema
Response message for listing connection profiles.
ListConnectionProfilesResponse
JSON representation
{
"connectionProfiles" : [
{
object ( ConnectionProfile )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
connectionProfiles[]
object ( ConnectionProfile )
List of connection profiles.
nextPageToken
string
A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
unreachable[]
string
Locations that could not be reached.
ConnectionProfile
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"displayName" : string ,
// Union field _satisfies_pzs can be only one of the following:
"satisfiesPzs" : boolean
// End of list of possible types for union field _satisfies_pzs .
// Union field _satisfies_pzi can be only one of the following:
"satisfiesPzi" : boolean
// End of list of possible types for union field _satisfies_pzi .
// Union field profile can be only one of the following:
"oracleProfile" : {
object ( OracleProfile )
} ,
"gcsProfile" : {
object ( GcsProfile )
} ,
"mysqlProfile" : {
object ( MysqlProfile )
} ,
"bigqueryProfile" : {
object ( BigQueryProfile )
} ,
"postgresqlProfile" : {
object ( PostgresqlProfile )
} ,
"sqlServerProfile" : {
object ( SqlServerProfile )
} ,
"salesforceProfile" : {
object ( SalesforceProfile )
} ,
"mongodbProfile" : {
object ( MongodbProfile )
} ,
"spannerProfile" : {
object ( SpannerProfile )
}
// End of list of possible types for union field profile .
// Union field connectivity can be only one of the following:
"staticServiceIpConnectivity" : {
object ( StaticServiceIpConnectivity )
} ,
"forwardSshConnectivity" : {
object ( ForwardSshTunnelConnectivity )
} ,
"privateConnectivity" : {
object ( PrivateConnectivity )
}
// End of list of possible types for union field connectivity .
}
Fields
name
string
Output only. Identifier. The resource's name.
createTime
string ( Timestamp format)
Output only. The create time of the resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The update time of the resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
displayName
string
Required. Display name.
Union field _satisfies_pzs .
_satisfies_pzs can be only one of the following:
satisfiesPzs
boolean
Output only. Reserved for future use.
Union field _satisfies_pzi .
_satisfies_pzi can be only one of the following:
satisfiesPzi
boolean
Output only. Reserved for future use.
Union field profile . Connection configuration for the ConnectionProfile. profile can be only one of the following:
oracleProfile
object ( OracleProfile )
Profile for connecting to an Oracle source.
gcsProfile
object ( GcsProfile )
Profile for connecting to a Cloud Storage destination.
mysqlProfile
object ( MysqlProfile )
Profile for connecting to a MySQL source.
bigqueryProfile
object ( BigQueryProfile )
Profile for connecting to a BigQuery destination.
postgresqlProfile
object ( PostgresqlProfile )
Profile for connecting to a PostgreSQL source.
sqlServerProfile
object ( SqlServerProfile )
Profile for connecting to a SQLServer source.
salesforceProfile
object ( SalesforceProfile )
Profile for connecting to a Salesforce source.
mongodbProfile
object ( MongodbProfile )
Profile for connecting to a MongoDB source.
spannerProfile
object ( SpannerProfile )
Profile for connecting to a Spanner source.
Union field connectivity . Connectivity options used to establish a connection to the profile. connectivity can be only one of the following:
staticServiceIpConnectivity
object ( StaticServiceIpConnectivity )
Static Service IP connectivity.
forwardSshConnectivity
object ( ForwardSshTunnelConnectivity )
Forward SSH tunnel connectivity.
privateConnectivity
object ( PrivateConnectivity )
Private connectivity.
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
OracleProfile
JSON representation
{
"hostname" : string ,
"port" : integer ,
"username" : string ,
"password" : string ,
"databaseService" : string ,
"connectionAttributes" : {
string : string ,
...
} ,
"oracleSslConfig" : {
object ( OracleSslConfig )
} ,
"oracleAsmConfig" : {
object ( OracleAsmConfig )
} ,
"secretManagerStoredPassword" : string
}
Fields
hostname
string
Required. Hostname for the Oracle connection.
port
integer
Port for the Oracle connection, default value is 1521.
username
string
Required. Username for the Oracle connection.
password
string
Optional. Password for the Oracle connection. Mutually exclusive with the secret_manager_stored_password field.
databaseService
string
Required. Database for the Oracle connection.
connectionAttributes
map (key: string, value: string)
Connection string attributes
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
oracleSslConfig
object ( OracleSslConfig )
Optional. SSL configuration for the Oracle connection.
oracleAsmConfig
object ( OracleAsmConfig )
Optional. Configuration for Oracle ASM connection.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually exclusive with the password field.
ConnectionAttributesEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
OracleSslConfig
JSON representation
{
"caCertificate" : string ,
"caCertificateSet" : boolean ,
"serverCertificateDistinguishedName" : string
}
Fields
caCertificate
string
Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
caCertificateSet
boolean
Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile.
serverCertificateDistinguishedName
string
Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN sqlnet parameter. Refer https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7 If this field is not provided, the DN matching is not enforced.
OracleAsmConfig
JSON representation
{
"hostname" : string ,
"port" : integer ,
"username" : string ,
"password" : string ,
"asmService" : string ,
"connectionAttributes" : {
string : string ,
...
} ,
"oracleSslConfig" : {
object ( OracleSslConfig )
} ,
"secretManagerStoredPassword" : string
}
Fields
hostname
string
Required. Hostname for the Oracle ASM connection.
port
integer
Required. Port for the Oracle ASM connection.
username
string
Required. Username for the Oracle ASM connection.
password
string
Optional. Password for the Oracle ASM connection. Mutually exclusive with the secret_manager_stored_password field.
asmService
string
Required. ASM service name for the Oracle ASM connection.
connectionAttributes
map (key: string, value: string)
Optional. Connection string attributes
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
oracleSslConfig
object ( OracleSslConfig )
Optional. SSL configuration for the Oracle connection.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection password. Mutually exclusive with the password field.
ConnectionAttributesEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
GcsProfile
JSON representation
{
"bucket" : string ,
"rootPath" : string
}
Fields
bucket
string
Required. The Cloud Storage bucket name.
rootPath
string
Optional. The root path inside the Cloud Storage bucket.
MysqlProfile
JSON representation
{
"hostname" : string ,
"port" : integer ,
"username" : string ,
"password" : string ,
"sslConfig" : {
object ( MysqlSslConfig )
} ,
"secretManagerStoredPassword" : string
}
Fields
hostname
string
Required. Hostname for the MySQL connection.
port
integer
Port for the MySQL connection, default value is 3306.
username
string
Required. Username for the MySQL connection.
password
string
Optional. Input only. Password for the MySQL connection. Mutually exclusive with the secret_manager_stored_password field.
sslConfig
object ( MysqlSslConfig )
SSL configuration for the MySQL connection.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive with the password field.
MysqlSslConfig
JSON representation
{
"clientKey" : string ,
"clientKeySet" : boolean ,
"clientCertificate" : string ,
"clientCertificateSet" : boolean ,
"caCertificate" : string ,
"caCertificateSet" : boolean
}
Fields
clientKey
string
Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
clientKeySet
boolean
Output only. Indicates whether the client_key field is set.
clientCertificate
string
Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
clientCertificateSet
boolean
Output only. Indicates whether the client_certificate field is set.
caCertificate
string
Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
caCertificateSet
boolean
Output only. Indicates whether the ca_certificate field is set.
PostgresqlProfile
JSON representation
{
"hostname" : string ,
"port" : integer ,
"username" : string ,
"password" : string ,
"database" : string ,
"secretManagerStoredPassword" : string ,
"sslConfig" : {
object ( PostgresqlSslConfig )
}
}
Fields
hostname
string
Required. Hostname for the PostgreSQL connection.
port
integer
Port for the PostgreSQL connection, default value is 5432.
username
string
Required. Username for the PostgreSQL connection.
password
string
Optional. Password for the PostgreSQL connection. Mutually exclusive with the secret_manager_stored_password field.
database
string
Required. Database for the PostgreSQL connection.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually exclusive with the password field.
sslConfig
object ( PostgresqlSslConfig )
Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is prefer (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication)
PostgresqlSslConfig
JSON representation
{
// Union field encryption_setting can be only one of the following:
"serverVerification" : {
object ( ServerVerification )
} ,
"serverAndClientVerification" : {
object ( ServerAndClientVerification )
}
// End of list of possible types for union field encryption_setting .
}
Fields
Union field encryption_setting . The encryption settings available for PostgreSQL connection profiles. This captures various SSL mode supported by PostgreSQL, which includes TLS encryption with server verification, TLS encryption with both server and client verification and no TLS encryption. encryption_setting can be only one of the following:
serverVerification
object ( ServerVerification )
If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated.
serverAndClientVerification
object ( ServerAndClientVerification )
If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated.
ServerVerification
JSON representation
{
"caCertificate" : string ,
"serverCertificateHostname" : string
}
Fields
caCertificate
string
Required. Input only. PEM-encoded server root CA certificate.
serverCertificateHostname
string
Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated.
ServerAndClientVerification
JSON representation
{
"clientCertificate" : string ,
"clientKey" : string ,
"caCertificate" : string ,
"serverCertificateHostname" : string
}
Fields
clientCertificate
string
Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to the trusted root certificate.
clientKey
string
Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream.
caCertificate
string
Required. Input only. PEM-encoded server root CA certificate.
serverCertificateHostname
string
Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated.
SqlServerProfile
JSON representation
{
"hostname" : string ,
"port" : integer ,
"username" : string ,
"password" : string ,
"database" : string ,
"sslConfig" : {
object ( SqlServerSslConfig )
} ,
"secretManagerStoredPassword" : string
}
Fields
hostname
string
Required. Hostname for the SQLServer connection.
port
integer
Port for the SQLServer connection, default value is 1433.
username
string
Required. Username for the SQLServer connection.
password
string
Optional. Password for the SQLServer connection. Mutually exclusive with the secret_manager_stored_password field.
database
string
Required. Database for the SQLServer connection.
sslConfig
object ( SqlServerSslConfig )
Optional. SSL configuration for the SQLServer connection.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the password field.
SqlServerSslConfig
JSON representation
{
// Union field encryption_setting can be only one of the following:
"encryptionNotEnforced" : {
object ( EncryptionNotEnforced )
} ,
"basicEncryption" : {
object ( BasicEncryption )
} ,
"encryptionAndServerValidation" : {
object ( EncryptionAndServerValidation )
}
// End of list of possible types for union field encryption_setting .
}
Fields
Union field encryption_setting . The encryption settings available for SQL Server connection profiles. This captures various options like no TLS encryption from client if server doesn't ask for it, only encryption without validation and both encryption as well as validation of server certificate. encryption_setting can be only one of the following:
encryptionNotEnforced
object ( EncryptionNotEnforced )
If set, Datastream will not enforce encryption. If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated.
basicEncryption
object ( BasicEncryption )
If set, Datastream will enforce encryption without authenticating server identity. Server certificates will be trusted by default.
encryptionAndServerValidation
object ( EncryptionAndServerValidation )
If set, Datastream will enforce encryption and authenticate server identity.
EncryptionAndServerValidation
JSON representation
{
"caCertificate" : string ,
// Union field _server_certificate_hostname can be only one of the following:
"serverCertificateHostname" : string
// End of list of possible types for union field _server_certificate_hostname .
}
Fields
caCertificate
string
Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
Union field _server_certificate_hostname .
_server_certificate_hostname can be only one of the following:
serverCertificateHostname
string
Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. This field is used for bypassing the hostname validation while verifying server certificate. This is required for scenarios where the host name that datastream connects to is different from the certificate's subject. This specifically happens for private connectivity. It could also happen when the customer provides a public IP in connection profile but the same is not present in the server certificate.
SalesforceProfile
JSON representation
{
"domain" : string ,
// Union field credentials can be only one of the following:
"userCredentials" : {
object ( UserCredentials )
} ,
"oauth2ClientCredentials" : {
object ( Oauth2ClientCredentials )
}
// End of list of possible types for union field credentials .
}
Fields
domain
string
Required. Domain endpoint for the Salesforce connection.
Union field credentials . Credentials for Salesforce connection. credentials can be only one of the following:
userCredentials
object ( UserCredentials )
User-password authentication.
oauth2ClientCredentials
object ( Oauth2ClientCredentials )
Connected app authentication.
UserCredentials
JSON representation
{
"username" : string ,
"password" : string ,
"securityToken" : string ,
"secretManagerStoredPassword" : string ,
"secretManagerStoredSecurityToken" : string
}
Fields
username
string
Required. Username for the Salesforce connection.
password
string
Optional. Password for the Salesforce connection. Mutually exclusive with the secret_manager_stored_password field.
securityToken
string
Optional. Security token for the Salesforce connection. Mutually exclusive with the secret_manager_stored_security_token field.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually exclusive with the password field.
secretManagerStoredSecurityToken
string
Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token. Mutually exclusive with the security_token field.
Oauth2ClientCredentials
JSON representation
{
"clientId" : string ,
"clientSecret" : string ,
"secretManagerStoredClientSecret" : string
}
Fields
clientId
string
Required. Client ID for Salesforce OAuth2 Client Credentials.
clientSecret
string
Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the secret_manager_stored_client_secret field.
secretManagerStoredClientSecret
string
Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually exclusive with the client_secret field.
MongodbProfile
JSON representation
{
"hostAddresses" : [
{
object ( HostAddress )
}
] ,
"replicaSet" : string ,
"username" : string ,
"password" : string ,
"secretManagerStoredPassword" : string ,
"sslConfig" : {
object ( MongodbSslConfig )
} ,
"additionalOptions" : {
string : string ,
...
} ,
// Union field mongodb_connection_format can be only one of the following:
"srvConnectionFormat" : {
object ( SrvConnectionFormat )
} ,
"standardConnectionFormat" : {
object ( StandardConnectionFormat )
}
// End of list of possible types for union field mongodb_connection_format .
}
Fields
hostAddresses[]
object ( HostAddress )
Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the cluster with their respective ports.
replicaSet
string
Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV connection format, this field must be empty. For Standard connection format, this field must be specified.
username
string
Required. Username for the MongoDB connection.
password
string
Optional. Password for the MongoDB connection. Mutually exclusive with the secret_manager_stored_password field.
secretManagerStoredPassword
string
Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the password field.
sslConfig
object ( MongodbSslConfig )
Optional. SSL configuration for the MongoDB connection.
additionalOptions
map (key: string, value: string)
Optional. Specifies additional options for the MongoDB connection.
The options should be sent as key-value pairs, for example: additional_options =
{"serverSelectionTimeoutMS": "10000", "directConnection": "true"} .
Keys are case-sensitive and should match the official MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/
The server will not modify the values provided by the user.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field mongodb_connection_format . MongoDB connection format. Must specify either srv_connection_format or standard_connection_format. mongodb_connection_format can be only one of the following:
srvConnectionFormat
object ( SrvConnectionFormat )
Srv connection format.
standardConnectionFormat
object ( StandardConnectionFormat )
Standard connection format.
HostAddress
JSON representation
{
"hostname" : string ,
"port" : integer
}
Fields
hostname
string
Required. Hostname for the connection.
port
integer
Optional. Port for the connection.
MongodbSslConfig
JSON representation
{
"clientKey" : string ,
"clientKeySet" : boolean ,
"clientCertificate" : string ,
"clientCertificateSet" : boolean ,
"caCertificate" : string ,
"caCertificateSet" : boolean ,
"secretManagerStoredClientKey" : string
}
Fields
clientKey
string
Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
clientKeySet
boolean
Output only. Indicates whether the client_key field is set.
clientCertificate
string
Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
clientCertificateSet
boolean
Output only. Indicates whether the client_certificate field is set.
caCertificate
string
Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
caCertificateSet
boolean
Output only. Indicates whether the ca_certificate field is set.
secretManagerStoredClientKey
string
Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. Mutually exclusive with the client_key field.
StandardConnectionFormat
JSON representation
{
"directConnection" : boolean
}
Fields
directConnection (deprecated)
boolean
This item is deprecated!
Optional. Deprecated: Use the additional_options map to specify the directConnection parameter instead. For example: additional_options = {"directConnection": "true"} . Specifies whether the client connects directly to the host[:port] in the connection URI.
AdditionalOptionsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
SpannerProfile
JSON representation
{
"database" : string ,
"host" : string
}
Fields
database
string
Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the format: projects/{project}/instances/{instance}/databases/{database_id}.
host
string
Optional. The Spanner endpoint to connect to. Defaults to the global endpoint ( https://spanner.googleapis.com) . Must be in the format: https://spanner.{region}.rep.googleapis.com .
ForwardSshTunnelConnectivity
JSON representation
{
"hostname" : string ,
"username" : string ,
"port" : integer ,
// Union field authentication_method can be only one of the following:
"password" : string ,
"privateKey" : string
// End of list of possible types for union field authentication_method .
}
Fields
hostname
string
Required. Hostname for the SSH tunnel.
username
string
Required. Username for the SSH tunnel.
port
integer
Port for the SSH tunnel, default value is 22.
Union field authentication_method .
authentication_method can be only one of the following:
password
string
Input only. SSH password.
privateKey
string
Input only. SSH private key.
PrivateConnectivity
JSON representation
{
"privateConnection" : string
}
Fields
privateConnection
string
Required. A reference to a private connection resource. Format: projects/{project}/locations/{location}/privateConnections/{name}
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
