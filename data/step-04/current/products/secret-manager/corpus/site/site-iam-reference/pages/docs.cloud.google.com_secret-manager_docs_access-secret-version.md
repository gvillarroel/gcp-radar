---
title: "Access a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/access-secret-version
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/access-secret-version
  title: "Access a secret version \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Access a secret version
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to access a secret version. Accessing a secret version returns the secret
contents and additional metadata about the secret version. To access a secret version using the
Google Cloud CLI or the Secret Manager API, you must specify either its version ID or
its alias , if assigned. You can also access the latest version of a secret by specifying
latest as the version id.
Important: To use Secret Manager with workloads running on
Compute Engine or Google Kubernetes Engine, the underlying instance or node must have
the cloud-platform OAuth scope. See
accessing the Secret Manager API
for more information.
Required roles
To get the permissions that
you need to access a secret version,
ask your administrator to grant you the
Secret Manager Secret Accessor ( roles/secretmanager.secretAccessor )
IAM role on a secret.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Access a secret version
To access a secret, use one of the following methods:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click a secret to access its versions.
On the secret details page, in the Versions tab, select the secret version
that you want to access.
Click the more_vert Actions
menu associated with the secret version, and then click View secret value .
A dialog appears displaying the value of the secret version. Click Done to exit the dialog.
gcloud
Access a secret version
Before using any of the command data below,
make the following replacements:
VERSION_ID : the resource name of the secret version
SECRET_ID : the ID of the secret
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID
Access a binary secret version
Google Cloud SDK formats the output as UTF-8 which can corrupt binary secrets.
To write raw bytes to a file use --out-file flag:
Before using any of the command data below,
make the following replacements:
VERSION_ID : the ID of the secret version
SECRET_ID : the ID of the secret
PATH_TO_SECRET : the full path (including file name) where you want to save the retrieved secret value
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --out-file = " PATH_TO_SECRET "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --out-file = " PATH_TO_SECRET "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --out-file = " PATH_TO_SECRET "
Get the raw bytes
To get the raw bytes, have Cloud SDK print the response as base64-encoded and decode:
Before using any of the command data below,
make the following replacements:
VERSION_ID : the ID of the secret version
SECRET_ID : the ID of the secret
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --format = 'get(payload.data)' | tr '_-' '/+' | base64 -d
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --format = 'get(payload.data)' | tr '_-' '/+' | base64 -d
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud secrets versions access VERSION_ID --secret = SECRET_ID --format = 'get(payload.data)' | tr '_-' '/+' | base64 -d
The response contains the secret version.
REST
Access a secret version
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID
SECRET_ID : the ID of the secret
VERSION_ID : the ID of the secret version
HTTP method and URL:
GET https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID /versions/ VERSION_ID :access
Request JSON body:
{}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID /versions/ VERSION_ID :access"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID /versions/ VERSION_ID :access" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID /versions/ VERSION_ID ",
"payload": {
"data": "c2VDcjN0Cg==",
"dataCrc32c": "3131222104"
}
}
Extract the secret using the jq tool
The response payload.data is the base64-encoded contents of the secret version.
The following command is an example of extracting the secret using the jq tool.
$ curl "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID /versions/ VERSION_ID :access" \
--request "GET" \
--header "authorization: Bearer $(gcloud auth print-access-token)" \
--header "content-type: application/json" \
| jq -r ".payload.data" | base64 --decode
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using System ;
using Google.Cloud.SecretManager.V1 ;
public class AccessSecretVersionSample
{
public String AccessSecretVersion (
string projectId = "my-project" , string secretId = "my-secret" , string secretVersionId = "123" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the resource name.
SecretVersionName secretVersionName = new SecretVersionName ( projectId , secretId , secretVersionId );
// Call the API.
AccessSecretVersionResponse result = client . AccessSecretVersion ( secretVersionName );
// Convert the payload to a string. Payloads are bytes by default.
String payload = result . Payload . Data . ToStringUtf8 ();
return payload ;
}
}
Go
To run this code, first set up a Go development environment and
install the Secret Manager Go SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import (
"context"
"fmt"
"hash/crc32"
"io"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
)
// accessSecretVersion accesses the payload for the given secret version if one
// exists. The version can be a version number as a string (e.g. "5") or an
// alias (e.g. "latest").
func accessSecretVersion ( w io . Writer , name string ) error {
// name := "projects/my-project/secrets/my-secret/versions/5"
// name := "projects/my-project/secrets/my-secret/versions/latest"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & secretmanagerpb . AccessSecretVersionRequest {
Name : name ,
}
// Call the API.
result , err := client . AccessSecretVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to access secret version: %w" , err )
}
// Verify the data checksum.
crc32c := crc32 . MakeTable ( crc32 . Castagnoli )
checksum := int64 ( crc32 . Checksum ( result . Payload . Data , crc32c ))
if checksum != * result . Payload . DataCrc32C {
return fmt . Errorf ( "Data corruption detected." )
}
// WARNING: Do not print the secret in a production environment - this snippet
// is showing how to access the secret material.
fmt . Fprintf ( w , "Plaintext: %s\n" , string ( result . Payload . Data ))
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. AccessSecretVersionResponse ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretVersionName ;
import java.io.IOException ;
import java.util.zip.CRC32C ;
import java.util.zip.Checksum ;
public class AccessSecretVersion {
public static void accessSecretVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String secretId = "your-secret-id" ;
String versionId = "your-version-id" ;
accessSecretVersion ( projectId , secretId , versionId );
}
// Access the payload for the given secret version if one exists. The version
// can be a version number as a string (e.g. "5") or an alias (e.g. "latest").
public static void accessSecretVersion ( String projectId , String secretId , String versionId )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
SecretVersionName secretVersionName = SecretVersionName . of ( projectId , secretId , versionId );
// Access the secret version.
AccessSecretVersionResponse response = client . accessSecretVersion ( secretVersionName );
// Verify checksum. The used library is available in Java 9+.
// If using Java 8, you may use the following:
// https://github.com/google/guava/blob/e62d6a0456420d295089a9c319b7593a3eae4a83/guava/src/com/google/common/hash/Hashing.java#L395
byte [] data = response . getPayload (). getData (). toByteArray ();
Checksum checksum = new CRC32C ();
checksum . update ( data , 0 , data . length );
if ( response . getPayload (). getDataCrc32C () != checksum . getValue ()) {
System . out . printf ( "Data corruption detected." );
return ;
}
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
String payload = response . getPayload (). getData (). toStringUtf8 ();
System . out . printf ( "Plaintext: %s\n" , payload );
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Secret Manager Node.js SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const name = 'projects/my-project/secrets/my-secret/versions/5';
// const name = 'projects/my-project/secrets/my-secret/versions/latest';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function accessSecretVersion () {
const [ version ] = await client . accessSecretVersion ({
name : name ,
});
// Extract the payload as a string.
const payload = version . payload . data . toString ();
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
console . info ( `Payload: ${ payload } ` );
}
accessSecretVersion ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
* @param string $versionId Your version ID (e.g. 'latest' or '5');
*/
function access_secret_version(string $projectId, string $secretId, string $versionId): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the secret version.
$name = $client->secretVersionName($projectId, $secretId, $versionId);
// Build the request.
$request = AccessSecretVersionRequest::build($name);
// Access the secret version.
$response = $client->accessSecretVersion($request);
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
$payload = $response->getPayload()->getData();
printf('Plaintext: %s', $payload);
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
from google.cloud import secretmanager
import google_crc32c
def access_secret_version (
project_id : str , secret_id : str , version_id : str
) - > secretmanager . AccessSecretVersionResponse :
"""
Access the payload for the given secret version if one exists. The version
can be a version number as a string (e.g. "5") or an alias (e.g. "latest").
"""
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the secret version.
name = f "projects/ { project_id } /secrets/ { secret_id } /versions/ { version_id } "
# Access the secret version.
response = client . access_secret_version ( request = { "name" : name })
# Verify payload checksum.
crc32c = google_crc32c . Checksum ()
crc32c . update ( response . payload . data )
if response . payload . data_crc32c != int ( crc32c . hexdigest (), 16 ):
print ( "Data corruption detected." )
return response
# Print the secret payload.
#
# WARNING: Do not print the secret in a production environment - this
# snippet is showing how to access the secret material.
payload = response . payload . data . decode ( "UTF-8" )
print ( f "Plaintext: { payload } " )
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# secret_id = "YOUR-SECRET-ID" # (e.g. "my-secret")
# version_id = "YOUR-VERSION" # (e.g. "5" or "latest")
# Require the Secret Manager client library.
require "google/cloud/secret_manager"
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the secret version.
name = client . secret_version_path (
project : project_id ,
secret : secret_id ,
secret_version : version_id
)
# Access the secret version.
version = client . access_secret_version name : name
# Print the secret payload.
#
# WARNING: Do not print the secret in a production environment - this
# snippet is showing how to access the secret material.
payload = version . payload . data
puts "Plaintext: #{ payload } "
Resource consistency
In Secret Manager, adding a secret version and then immediately accessing that
secret version by version number is a strongly consistent operation.
Note: This doesn't apply when you access a secret version using aliases or latest .
Other operations within Secret Manager are eventually consistent.
Eventually consistent operations typically converge within minutes, but may take
a few hours.
Propagating IAM permissions is eventually consistent. This means
granting or revoking access to secrets may not take effect immediately. For more
information, see
Access change propagation .
What's next
Learn how to assign an alias to a secret version .
Learn how to disable a secret version .
Learn how to destroy a secret version .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
