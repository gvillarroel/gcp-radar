---
title: "Assign an alias to a secret version \_|\_ Secret Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/assign-alias-to-secret-version
  title: "Assign an alias to a secret version \_|\_ Secret Manager \_|\_ Google Cloud\
    \ Documentation"
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
Assign an alias to a secret version
Stay organized with collections
Save and categorize content based on your preferences.
You can assign aliases to secret versions for easier access. After an alias is assigned, you can
access the secret versions using their aliases in the same way that you can access secret versions by
their version number.
Important: To use Secret Manager with workloads running on
Compute Engine or Google Kubernetes Engine, the underlying instance or node must have
the cloud-platform OAuth scope. See
accessing the Secret Manager API
for more information.
Required roles
To get the permissions that
you need to assign an alias to a secret version,
ask your administrator to grant you the
Secret Manager Admin ( roles/secretmanager.admin )
IAM role on the secret, project, folder, or organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Assign an alias to a secret version
To assign an alias to a secret version, use one of the following methods:
Note: Alias names must start with a letter, can be up to 63 characters
long, and can contain letters, numbers, hyphens (-), and underscores (_). You cannot use
Latest or New (case-insensitive) as an alias name.
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
To edit a secret, use one of the following methods:
Click more_vert Actions for the secret
that you want to edit, and then click Edit .
Click the secret name to go to the secret details page. On the secret details page,
click edit Edit secret .
On the Edit secret page, go to Version aliases , and then
click Add alias .
Do the following:
Specify the alias name.
Select the secret version to which you will assign this alias.
Click Update secret .
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
KEY : the secret version alias name.
VALUE : the secret version number.
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
gcloud secrets update SECRET_ID \
--update-version-aliases = KEY = VALUE
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID `
--update-version-aliases = KEY = VALUE
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID ^
--update-version-aliases = KEY = VALUE
The response contains the updated secret.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
KEY : the secret version alias name.
VALUE : the secret version number.
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=version_aliases
Request JSON body:
{'version_aliases': {' KEY ': ' VALUE '}}
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=version_aliases"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets/ SECRET_ID ?updateMask=version_aliases" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /secrets/ SECRET_ID ",
"createTime": "2024-09-04T06:34:32.995517Z",
"etag": "\"16214584d1479c\"",
"versionAliases": {
"nonprod": "1"
}
}
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using Google.Protobuf.WellKnownTypes ;
using Google.Cloud.SecretManager.V1 ;
public class UpdateSecretWithAliasSample
{
public Secret UpdateSecret ( string projectId = "my-project" , string secretId = "my-secret" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the secret with updated fields.
Secret secret = new Secret
{
SecretName = new SecretName ( projectId , secretId ),
VersionAliases = { [ "test" ] = 1 }
};
// Build the field mask.
FieldMask fieldMask = FieldMask . FromString ( "version_aliases" );
// Call the API.
Secret updatedSecret = client . UpdateSecret ( secret , fieldMask );
return updatedSecret ;
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
"io"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
"google.golang.org/genproto/protobuf/field_mask"
)
// updateSecret updates the alias map on an existing secret.
func updateSecretWithAlias ( w io . Writer , name string ) error {
// name := "projects/my-project/secrets/my-secret"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & secretmanagerpb . UpdateSecretRequest {
Secret : & secretmanagerpb . Secret {
Name : name ,
VersionAliases : map [ string ] int64 {
"test" : 1 ,
},
},
UpdateMask : & field_mask . FieldMask {
Paths : [] string { "version_aliases" },
},
}
// Call the API.
result , err := client . UpdateSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to update secret: %w" , err )
}
fmt . Fprintf ( w , "Updated secret: %s\n" , result . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretName ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
public class UpdateSecretWithAlias {
public static void updateSecret () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String secretId = "your-secret-id" ;
updateSecret ( projectId , secretId );
}
// Update an existing secret.
public static void updateSecret ( String projectId , String secretId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name.
SecretName secretName = SecretName . of ( projectId , secretId );
// Build the updated secret.
Secret . Builder secret =
Secret . newBuilder ()
. setName ( secretName . toString ());
secret . getMutableVersionAliases (). put ( "test" , 1L );
// Build the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "version_aliases" );
// Update the secret.
Secret updatedSecret = client . updateSecret ( secret . build (), fieldMask );
System . out . printf ( "Updated alias map: %s\n" , updatedSecret . getVersionAliasesMap (). toString ());
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
// const name = 'projects/my-project/secrets/my-secret';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function updateSecret () {
const [ secret ] = await client . updateSecret ({
secret : {
name : name ,
versionAliases : {
test : 1 ,
},
},
updateMask : {
paths : [ 'version_aliases' ],
},
});
console . info ( `Updated secret ${ secret . name } ` );
}
updateSecret ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Secret;
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\UpdateSecretRequest;
use Google\Protobuf\FieldMask;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
*/
function update_secret_with_alias(string $projectId, string $secretId): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the secret.
$name = $client->secretName($projectId, $secretId);
// Update the secret.
$secret = (new Secret())
->setName($name)
->setVersionAliases(['test' => '1']);
$updateMask = (new FieldMask())
->setPaths(['version_aliases']);
// Build the request.
$request = UpdateSecretRequest::build($secret, $updateMask);
$response = $client->updateSecret($request);
// Print the upated secret.
printf('Updated secret: %s', $response->getName());
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
def update_secret_with_alias (
project_id : str , secret_id : str
) - > secretmanager . UpdateSecretRequest :
"""
Update the metadata about an existing secret.
"""
# Import the Secret Manager client library.
from google.cloud import secretmanager
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the secret.
name = client . secret_path ( project_id , secret_id )
# Update the secret.
secret = { "name" : name , "version_aliases" : { "test" : 1 }}
update_mask = { "paths" : [ "version_aliases" ]}
response = client . update_secret (
request = { "secret" : secret , "update_mask" : update_mask }
)
# Print the new secret name.
print ( f "Updated secret: { response . name } " )
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# secret_id = "YOUR-SECRET-ID" # (e.g. "my-secret")
# Require the Secret Manager client library.
require "google/cloud/secret_manager"
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the secret.
name = client . secret_path project : project_id , secret : secret_id
# Create the secret.
secret = client . update_secret (
secret : {
name : name ,
version_aliases : {
test : 1
}
},
update_mask : {
paths : [ "version_aliases" ]
}
)
# Print the updated secret name.
puts "Updated secret: #{ secret . name } "
What's next
Learn how to list secret versions and view secret version details .
Learn how to ensure data integrity when adding and accessing
secret versions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
