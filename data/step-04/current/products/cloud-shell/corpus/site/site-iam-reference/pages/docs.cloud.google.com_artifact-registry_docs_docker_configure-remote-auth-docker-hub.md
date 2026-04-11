---
title: "Configure remote repository authentication to Docker Hub \_|\_ Artifact Registry\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub
  title: "Configure remote repository authentication to Docker Hub \_|\_ Artifact\
    \ Registry \_|\_ Google Cloud Documentation"
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
Configure remote repository authentication to Docker Hub
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure authentication to Docker Hub upstream
repositories for Artifact Registry remote repositories.
We recommend authenticating to Docker Hub even if you are only using public
images, as authenticating will increase your download rate limit. For more
information on Docker Hub download rate limits, see
Docker Hub rate limit . Remote repositories allow
you to add your Docker Hub username and a personal access token saved as a
secret to authenticate to Docker Hub.
This document assumes you have already created an Artifact Registry Docker
remote repository , and a Docker Hub
account.
For more information on remote repositories, see the
Remote repositories overview .
Required roles
To get the permissions that
you need to configure authentication to Docker Hub for remote repositories,
ask your administrator to grant you the
following IAM roles on the project:
Artifact Registry Admin ( roles/artifactregistry.admin )
Secret Manager Admin ( roles/secretmanager.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a Docker Hub personal access token
Sign in to Docker Hub .
Create a personal access token with
read-only permissions.
Copy the access token.
Warning: The access token is only displayed once. If you close the window
it can't be retrieved and you have to create a new access token.
Save the access token in a text file in your local or Cloud Shell.
Warning: Treat access tokens like passwords and keep them secure.
Save your personal access token in a secret version
Create a secret in Secret Manager.
Save your Docker Hub personal access token as a
secret version .
Grant the Artifact Registry service account access to your secret
The Artifact Registry service agent acts on behalf of Artifact Registry when interacting
with Google Cloud services. To allow the service agent to use secrets
stored in Secret Manager, you must grant the service agent permission
to view your secret version.
The service agent identifier is:
service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com
PROJECT-NUMBER is the
project number
of the Google Cloud project where Artifact Registry is running.
To grant the Artifact Registry service agent the Secret Manager Secret Accessor
role:
Console
Go to the Secret Manager page in the Google Cloud console.
Go to the Secret Manager page
On the Secret Manager page, click the checkbox next to the name of the secret.
If it is not already open, click Show Info Panel to open the panel.
In the info panel, click Add Principal .
In the New principals text area, enter the email address(es) of the members to add.
In the Select a role dropdown, choose Secret Manager and then Secret Manager Secret Accessor .
gcloud
$ gcloud secrets add-iam-policy-binding secret-id \
--member=" member " \
--role="roles/secretmanager.secretAccessor"
Where member is an IAM member , such as a user, group, or service account.
C#
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.SecretManager.V1 ;
using Google.Cloud.Iam.V1 ;
public class IamGrantAccessSample
{
public Policy IamGrantAccess (
string projectId = "my-project" , string secretId = "my-secret" ,
string member = "user:foo@example.com" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the resource name.
SecretName secretName = new SecretName ( projectId , secretId );
// Get current policy.
Policy policy = client . GetIamPolicy ( new GetIamPolicyRequest
{
ResourceAsResourceName = secretName ,
});
// Add the user to the list of bindings.
policy . AddRoleMember ( "roles/secretmanager.secretAccessor" , member );
// Save the updated policy.
policy = client . SetIamPolicy ( new SetIamPolicyRequest
{
ResourceAsResourceName = secretName ,
Policy = policy ,
});
return policy ;
}
}
Go
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
)
// iamGrantAccess grants the given member access to the secret.
func iamGrantAccess ( w io . Writer , name , member string ) error {
// name := "projects/my-project/secrets/my-secret"
// member := "user:foo@example.com"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Get the current IAM policy.
handle := client . IAM ( name )
policy , err := handle . Policy ( ctx )
if err != nil {
return fmt . Errorf ( "failed to get policy: %w" , err )
}
// Grant the member access permissions.
policy . Add ( member , "roles/secretmanager.secretAccessor" )
if err = handle . SetPolicy ( ctx , policy ); err != nil {
return fmt . Errorf ( "failed to save policy: %w" , err )
}
fmt . Fprintf ( w , "Updated IAM policy for %s\n" , name )
return nil
}
Java
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretName ;
import com.google.iam.v1. Binding ;
import com.google.iam.v1. GetIamPolicyRequest ;
import com.google.iam.v1. Policy ;
import com.google.iam.v1. SetIamPolicyRequest ;
import java.io.IOException ;
public class IamGrantAccess {
public static void iamGrantAccess () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String secretId = "your-secret-id" ;
String member = "user:foo@example.com" ;
iamGrantAccess ( projectId , secretId , member );
}
// Grant a member access to a particular secret.
public static void iamGrantAccess ( String projectId , String secretId , String member )
throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name from the version.
SecretName secretName = SecretName . of ( projectId , secretId );
// Request the current IAM policy.
Policy currentPolicy =
client . getIamPolicy (
GetIamPolicyRequest . newBuilder (). setResource ( secretName . toString ()). build ());
// Build the new binding.
Binding binding =
Binding . newBuilder ()
. setRole ( "roles/secretmanager.secretAccessor" )
. addMembers ( member )
. build ();
// Create a new IAM policy from the current policy, adding the binding.
Policy newPolicy = Policy . newBuilder (). mergeFrom ( currentPolicy ). addBindings ( binding ). build ();
// Save the updated IAM policy.
client . setIamPolicy (
SetIamPolicyRequest . newBuilder ()
. setResource ( secretName . toString ())
. setPolicy ( newPolicy )
. build ());
System . out . printf ( "Updated IAM policy for %s\n" , secretId );
}
}
}
Node.js
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const name = 'projects/my-project/secrets/my-secret';
// const member = 'user:you@example.com';
//
// NOTE: Each member must be prefixed with its type. See the IAM documentation
// for more information: https://cloud.google.com/iam/docs/overview.
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function grantAccess () {
// Get the current IAM policy.
const [ policy ] = await client . getIamPolicy ({
resource : name ,
});
// Add the user with accessor permissions to the bindings list.
policy . bindings . push ({
role : 'roles/secretmanager.secretAccessor' ,
members : [ member ],
});
// Save the updated IAM policy.
await client . setIamPolicy ({
resource : name ,
policy : policy ,
});
console . log ( `Updated IAM policy for ${ name } ` );
}
grantAccess ();
PHP
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
// Import the Secret Manager IAM library.
use Google\Cloud\Iam\V1\Binding;
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
* @param string $member Your member (e.g. 'user:foo@example.com')
*/
function iam_grant_access(string $projectId, string $secretId, string $member): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the secret.
$name = $client->secretName($projectId, $secretId);
// Get the current IAM policy.
$policy = $client->getIamPolicy((new GetIamPolicyRequest)->setResource($name));
// Update the bindings to include the new member.
$bindings = $policy->getBindings();
$bindings[] = new Binding([
'members' => [$member],
'role' => 'roles/secretmanager.secretAccessor',
]);
$policy->setBindings($bindings);
// Build the request.
$request = (new SetIamPolicyRequest)
->setResource($name)
->setPolicy($policy);
// Save the updated policy to the server.
$client->setIamPolicy($request);
// Print out a success message.
printf('Updated IAM policy for %s', $secretId);
}
Python
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def iam_grant_access (
project_id : str , secret_id : str , member : str
) - > iam_policy_pb2 . SetIamPolicyRequest :
"""
Grant the given member access to a secret.
"""
# Import the Secret Manager client library.
from google.cloud import secretmanager
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the secret.
name = client . secret_path ( project_id , secret_id )
# Get the current IAM policy.
policy = client . get_iam_policy ( request = { "resource" : name })
# Add the given member with access permissions.
policy . bindings . add ( role = "roles/secretmanager.secretAccessor" , members = [ member ])
# Update the IAM Policy.
new_policy = client . set_iam_policy ( request = { "resource" : name , "policy" : policy })
# Print data about the secret.
print ( f "Updated IAM policy on { secret_id } " )
Ruby
To authenticate to Artifact Registry, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# secret_id = "YOUR-SECRET-ID" # (e.g. "my-secret")
# member = "USER-OR-ACCOUNT" # (e.g. "user:foo@example.com")
# Require the Secret Manager client library.
require "google/cloud/secret_manager"
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the secret.
name = client . secret_path project : project_id , secret : secret_id
# Get the current IAM policy.
policy = client . get_iam_policy resource : name
# Add new member to current bindings
policy . bindings << Google :: Iam :: V1 :: Binding . new (
members : [ member ] ,
role : "roles/secretmanager.secretAccessor"
)
# Update IAM policy
new_policy = client . set_iam_policy resource : name , policy : policy
# Print a success message.
puts "Updated IAM policy for #{ secret_id } "
API
Note: Unlike the other examples, this replaces the entire IAM policy.
$ curl "https://secretmanager.googleapis.com/v1/projects/ project-id /secrets/ secret-id :setIamPolicy" \
--request "POST" \
--header "authorization: Bearer $(gcloud auth print-access-token)" \
--header "content-type: application/json" \
--data "{\"policy\": {\"bindings\": [{\"members\": [\" member \"], \"role\": \"roles/secretmanager.secretAccessor\"}]}}"
For more information on granting or revoking access to secrets, see
Manage access to secrets .
Add Docker Hub credentials to your remote repository
To update your remote repository with your Docker Hub credentials:
Console
Open the Repositories page in the Google Cloud console.
Open the Repositories page
In the repository list, select the repository and click
Edit Repository .
In the Remote repository authentication mode section, update or add
your Docker Hub username and the secret version containing your Docker Hub
access token.
gcloud CLI
To update your remote repository with your Docker Hub credentials, run the
following command:
gcloud artifacts repositories update REPOSITORY \
--project= PROJECT_ID \
--location= LOCATION \
--remote-username= USERNAME \
--remote-password-secret-version=projects/ SECRET_PROJECT_ID /secrets/ SECRET_ID /versions/ SECRET_VERSION
Replace the following:
REPOSITORY with the name of your Artifact Registry remote
repository.
PROJECT_ID with your Google Cloud project ID.
LOCATION with the regional or multi-regional
location for the repository. You can
omit this flag if you set a default . To view a list
of supported locations, run the command gcloud artifacts locations list .
USERNAME with your Docker Hub username.
SECRET_PROJECT_ID with the project ID of the
Google Cloud project in which you created your secret.
SECRET_ID with the name you gave your secret.
SECRET_VERSION with the secret version you saved your
Docker Hub access token in.
Your credentials are used the next time the remote repository sends a request
for an artifact from the upstream source.
What's next
Learn more about Artifact Registry repositories .
Pull images with Docker .
Take the Docker Hub remote repository quickstart .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
