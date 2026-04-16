---
title: "Create and delete service account keys \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/creating-managing-service-account-keys
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/creating-managing-service-account-keys
  title: "Create and delete service account keys \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Create and delete service account keys
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and delete service account keys using the
Google Cloud console, the Google Cloud CLI ,
the Identity and Access Management API , or one
of the Google Cloud Client Libraries .
Note: If you need to access resources from a workload that runs outside
of Google Cloud, such as on Amazon Web Services (AWS) or Microsoft Azure,
consider using Workload Identity Federation instead of service account keys. Federation lets your
workloads access resources directly, using a short-lived access token, and
eliminates the maintenance and security burden associated with service account
keys.
Before you begin
Enable the IAM API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication.
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
C#
To use the .NET samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
C++
To use the C++ samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
Go
To use the Go samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
Java
To use the Java samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
Python
To use the Python samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Understand service account credentials .
Required roles
To get the permissions that
you need to create and delete service account keys,
ask your administrator to grant you the
Service Account Key Admin ( roles/iam.serviceAccountKeyAdmin )
IAM role on the project, or the service account whose keys you want
to manage.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to create and delete service account keys. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Depending on your organization policy configuration, you might also need to
allow service account keys to be created in your project
before creating a key.
To get the permissions that
you need to allow service account keys to be created in a project,
ask your administrator to grant you the
following IAM roles on your organization:
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
Organization Viewer ( roles/resourcemanager.organizationViewer )
Tag Administrator ( roles/resourcemanager.tagAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to allow service account keys to be created in a project. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to allow service account keys to be created in a project:
orgpolicy.constraints.list
orgpolicy.customConstraints.create
orgpolicy.customConstraints.delete
orgpolicy.customConstraints.get
orgpolicy.customConstraints.list
orgpolicy.customConstraints.update
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
resourcemanager.organizations.get
resourcemanager.projects.listTagBindings
resourcemanager.projects.listEffectiveTags
resourcemanager.tagKeys.get
resourcemanager.tagKeys.list
resourcemanager.tagValues.list
resourcemanager.tagValues.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Note: IAM basic
roles might also contain permissions to allow service account keys to be created in a project. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
Allow service account key creation
Before you create a service account key, make sure that the
iam.disableServiceAccountKeyCreation organization policy constraint isn't
enforced for your project. If this constraint is enforced for your project,
you can't create service account keys in that project.
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
We recommend enforcing this constraint for most projects and only exempting
projects that truly require service account keys. For more information about
alternative authentication methods, see Choose the right authentication method
for your use case .
To exempt a project from the iam.disableServiceAccountKeyCreation organization
policy constraint, ask an organization policy administrator to do the following:
At the organization level, create a tag key and tag value that you will use to define whether
a resource should be exempt from the organization policy. We recommend creating a tag
with the key disableServiceAccountKeyCreation and the values enforced and
not_enforced .
To learn how to create tag keys and tag values, see Creating and defining a
new tag .
Attach the disableServiceAccountKeyCreation tag to the organization and set its value to
enforced . All resources in the organization inherit this tag value,
unless it's overwritten with a different tag value.
To learn how to attach tags to resources, see Attaching tags to
resources .
For each project or folder that you want to exempt from the organization policy, attach the
disableServiceAccountKeyCreation tag and set its value to not_enforced . Setting
a tag value for a project or folder in this way overrides the tag value inherited from the
organization.
Create or
update the organization policy that prevents the creation of service account keys so that it doesn't
enforce the constraint for exempt resources.
This policy should have the following rules:
Configure the iam.disableServiceAccountKeyCreation constraint to not be
enforced on any resources with the disableServiceAccountKeyCreation:
not_enforced tag. The condition in this rule should look like the following:
"resource.matchTag(' ORGANIZATION_ID /disableServiceAccountKeyCreation', 'not_enforced')"
Configure the iam.disableServiceAccountKeyCreation constraint to be enforced on
all other resources.
Create a service account key
To use a service account from outside of Google Cloud, such as on other
platforms or on-premises, you must first establish the identity of the service
account. Public/private key pairs provide a secure way of accomplishing this
goal. When you create a service account key, the public portion is stored on
Google Cloud, while the private portion is available only to you. For more
information about public/private key pairs, see
Service account keys .
Note: You can create service account keys in JSON or PKCS#12 (P12) format. P12 service account keys are not recommended unless
they are necessary for backwards compatibility. The following examples use JSON
format.
You can create a service account key
using the Google Cloud console, the gcloud CLI, the
serviceAccounts.keys.create()
method, or one of the client libraries .
A service account can have up to 10 keys.
By default, service account keys never expire. You can use an
organization policy constraint to specify the length of
time for which a service account key is valid. For details, see
Expiry times for user-managed keys .
In the examples below, SA_NAME is the name of your
service account, and PROJECT_ID is the ID of your
Google Cloud project. You can retrieve the
SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
string from the Service Accounts
page in the Google Cloud console.
Note: After you create a key, you might need to wait for
60 seconds or more before you perform another operation with the
key. If you try to perform an operation with the key immediately after you
create the key, and you receive an error, you can
retry the request with exponential backoff .
Console
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
The remaining steps appear in the Google Cloud console.
Select a project.
Click the email address of the service account that you
want to create a key for.
Click the Keys
tab.
Click the Add key drop-down menu, then select Create new key .
Select JSON as the Key type and click Create .
Clicking Create downloads a service account key file. After you download the
key file, you cannot download it again.
The downloaded key has the following format, where
PRIVATE_KEY is the private portion of the public/private
key pair:
{
"type" : "service_account" ,
"project_id" : " PROJECT_ID " ,
"private_key_id" : " KEY_ID " ,
"private_key" : "-----BEGIN PRIVATE KEY-----\n PRIVATE_KEY \n-----END PRIVATE KEY-----\n" ,
"client_email" : " SERVICE_ACCOUNT_EMAIL " ,
"client_id" : " CLIENT_ID " ,
"auth_uri" : "https://accounts.google.com/o/oauth2/auth" ,
"token_uri" : "https://accounts.google.com/o/oauth2/token" ,
"auth_provider_x509_cert_url" : "https://www.googleapis.com/oauth2/v1/certs" ,
"client_x509_cert_url" : "https://www.googleapis.com/robot/v1/metadata/x509/ SERVICE_ACCOUNT_EMAIL "
}
Always store your service account keys in a secure location. If you don't store your keys securely,
then bad actors can find the keys and use them to access the resources that the service account can
access. We strongly recommend storing your keys in a hardware-based or software-based key store. For
more guidance on storing service account keys securely, see Protecting
against privilege escalation .
You can move and rename this file however you like.
You can use service account key files to
authenticate an
application as a service account .
gcloud
Execute the gcloud iam service-accounts keys create
command to create service account keys.
Replace the following values:
KEY_FILE : The path to a new output file for the
private key—for example, ~/sa-private-key.json .
SA_NAME : The name of the service account
to create a key for.
PROJECT_ID : Your Google Cloud project ID.
gcloud iam service-accounts keys create KEY_FILE \
--iam-account= SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
Output:
created key [e44da1202f82f8f4bdd9d92bc412d1d8a837fa83] of type [json] as
[/usr/home/username/ KEY_FILE ] for
[ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com]
The service account key file is now downloaded to your machine. After you
download the key file, you cannot download it again.
The downloaded key has the following format, where
PRIVATE_KEY is the private portion of the public/private
key pair:
{
"type" : "service_account" ,
"project_id" : " PROJECT_ID " ,
"private_key_id" : " KEY_ID " ,
"private_key" : "-----BEGIN PRIVATE KEY-----\n PRIVATE_KEY \n-----END PRIVATE KEY-----\n" ,
"client_email" : " SERVICE_ACCOUNT_EMAIL " ,
"client_id" : " CLIENT_ID " ,
"auth_uri" : "https://accounts.google.com/o/oauth2/auth" ,
"token_uri" : "https://oauth2.googleapis.com/token" ,
"auth_provider_x509_cert_url" : "https://www.googleapis.com/oauth2/v1/certs" ,
"client_x509_cert_url" : "https://www.googleapis.com/robot/v1/metadata/x509/ SERVICE_ACCOUNT_EMAIL "
}
Always store your service account keys in a secure location. If you don't store your keys securely,
then bad actors can find the keys and use them to access the resources that the service account can
access. We strongly recommend storing your keys in a hardware-based or software-based key store. For
more guidance on storing service account keys securely, see Protecting
against privilege escalation .
You can move and rename this file however you like.
You can use service account key files to
authenticate an application as a service account .
C++
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
return []( std :: string const & name ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
auto response = client . CreateServiceAccountKey (
name ,
google :: iam :: admin :: v1 :: ServiceAccountPrivateKeyType ::
TYPE_GOOGLE_CREDENTIALS_FILE ,
google :: iam :: admin :: v1 :: ServiceAccountKeyAlgorithm :: KEY_ALG_RSA_2048 );
if ( ! response ) throw std :: move ( response ). status ();
std :: cout << "ServiceAccountKey successfully created: "
<< response - > DebugString () << " \n "
<< "Please save the key in a secure location, as they cannot "
"be downloaded later \n " ;
return response - > name ();
}
C#
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C# API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
using System ;
using System.Text ;
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.Iam.v1 ;
using Google.Apis.Iam.v1.Data ;
public partial class ServiceAccountKeys
{
public static ServiceAccountKey CreateKey ( string serviceAccountEmail )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
var key = service . Projects . ServiceAccounts . Keys . Create (
new CreateServiceAccountKeyRequest (),
"projects/-/serviceAccounts/" + serviceAccountEmail )
. Execute ();
// The PrivateKeyData field contains the base64-encoded service account key
// in JSON format.
// TODO(Developer): Save the below key (jsonKeyFile) to a secure location.
// You cannot download it later.
byte [] valueBytes = System . Convert . FromBase64String ( key . PrivateKeyData );
string jsonKeyContent = Encoding . UTF8 . GetString ( valueBytes );
Console . WriteLine ( "Key created successfully" );
return key ;
}
}
Go
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Go API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import (
"context"
// "encoding/base64"
"fmt"
"io"
iam "google.golang.org/api/iam/v1"
)
// createKey creates a service account key.
func createKey ( w io . Writer , serviceAccountEmail string ) ( * iam . ServiceAccountKey , error ) {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return nil , fmt . Errorf ( "iam.NewService: %w" , err )
}
resource := "projects/-/serviceAccounts/" + serviceAccountEmail
request := & iam . CreateServiceAccountKeyRequest {}
key , err := service . Projects . ServiceAccounts . Keys . Create ( resource , request ). Do ()
if err != nil {
return nil , fmt . Errorf ( "Projects.ServiceAccounts.Keys.Create: %w" , err )
}
// The PrivateKeyData field contains the base64-encoded service account key
// in JSON format.
// TODO(Developer): Save the below key (jsonKeyFile) to a secure location.
// You cannot download it later.
// jsonKeyFile, _ := base64.StdEncoding.DecodeString(key.PrivateKeyData)
fmt . Fprintf ( w , "Key created successfully" )
return key , nil
}
Java
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import com.google.cloud.iam.admin.v1. IAMClient ;
import com.google.gson.Gson ;
import com.google.iam.admin.v1. CreateServiceAccountKeyRequest ;
import com.google.iam.admin.v1. ServiceAccountKey ;
import java.io.IOException ;
public class CreateServiceAccountKey {
public static void main ( String [] args ) throws IOException {
// TODO(Developer): Replace the below variables before running.
String projectId = "your-project-id" ;
String serviceAccountName = "your-service-account-name" ;
ServiceAccountKey key = createKey ( projectId , serviceAccountName );
Gson gson = new Gson ();
// System.out.println("Service account key: " + gson.toJson(key));
}
// Creates a key for a service account.
public static ServiceAccountKey createKey ( String projectId , String accountName )
throws IOException {
String email = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
// Initialize client that will be used to send requests.
// This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
CreateServiceAccountKeyRequest req = CreateServiceAccountKeyRequest . newBuilder ()
. setName ( String . format ( "projects/%s/serviceAccounts/%s" , projectId , email ))
. build ();
ServiceAccountKey createdKey = iamClient . createServiceAccountKey ( req );
System . out . println ( "Key created successfully" );
return createdKey ;
}
}
}
Python
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Python API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def create_key ( project_id : str , account : str ) - > types . ServiceAccountKey :
"""
Creates a key for a service account.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . CreateServiceAccountKeyRequest ()
request . name = f "projects/ { project_id } /serviceAccounts/ { account } "
key = iam_admin_client . create_service_account_key ( request = request )
# The private_key_data field contains the stringified service account key
# in JSON format. You cannot download it again later.
# If you want to get the value, you can do it in a following way:
# import json
# json_key_data = json.loads(key.private_key_data)
# key_id = json_key_data["private_key_id"]
return key
REST
The
projects.serviceAccounts.keys.create
method creates a key for a service account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account that you want to create a key
for.
KEY_ALGORITHM : Optional. The key algorithm to use for
the key. The default, which is subject to change, is a 2,048-bit RSA key. For a list
of all possible values, see the
ServiceAccountKeyAlgorithm reference .
HTTP method and URL:
POST https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys
Request JSON body:
{
"keyAlgorithm": " KEY_ALGORITHM "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys"
PowerShell (Windows)
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response contains a key for your service account. The returned key has the following format,
where ENCODED_PRIVATE_KEY is the private portion of the public/private key
pair, encoded in base64.
{
"name": "projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_EMAIL /keys/ KEY_ID ",
"privateKeyType": "TYPE_GOOGLE_CREDENTIALS_FILE",
"privateKeyData": " ENCODED_PRIVATE_KEY ",
"validAfterTime": " DATE ",
"validBeforeTime": " DATE ",
"keyAlgorithm": "KEY_ALG_RSA_2048"
}
To create a key file that you can use to authenticate as the service account,
decode the private key data and save it in a file:
Linux
Run the following command:
echo ' ENCODED_PRIVATE_KEY ' | base64 --decode > PATH
Replace PATH with the path of the file that you want
to save the key to. Use the .json file extension.
macOS
Run the following command:
echo ' ENCODED_PRIVATE_KEY ' | base64 --decode > PATH
Replace PATH with the path of the file that you want
to save the key to. Use the .json file extension.
PowerShell
Save the encoded private key data
( ENCODED_PRIVATE_KEY ) in a file.
Use certutil to decode the file:
certutil -decode ENCODED_FILE DECODED_FILE
Replace the following values:
ENCODED_FILE : the path to the file containing
the encoded private key data.
DECODED_FILE : the path of the file that you want
to save the key to. Use the .json file extension.
Always store your service account keys in a secure location. If you don't store your keys securely,
then bad actors can find the keys and use them to access the resources that the service account can
access. We strongly recommend storing your keys in a hardware-based or software-based key store. For
more guidance on storing service account keys securely, see Protecting
against privilege escalation .
You can use service account key files to
authenticate an application as a service account .
Delete a service account key
Deleting a service account key permanently prevents you from using the key to
authenticate with Google APIs.
You cannot undelete a deleted key. Before you delete a key, we recommend that
you disable the key , then wait until you are sure that the key
is no longer needed. You can then delete the key.
As a best practice, rotate your service account keys regularly. To learn more about
rotating service account keys, see Service account key rotation .
Important: Deleting a service account key does not revoke short-lived
credentials that were issued based on the key. To revoke a compromised
short-lived credential, you must
disable or delete the service account that the credential
represents. If you do so, any workload that uses the service account will
immediately lose access to your resources.
Console
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
The remaining steps appear in the Google Cloud console.
Select a project.
On the Service accounts page, click the email address of the service account whose key you want to delete.
Click the Keys tab.
From the list of keys, click Delete
delete for each key
you'd like to delete.
gcloud
Execute the gcloud iam service-accounts keys delete
command to delete service account keys.
Replace the following values:
KEY_ID : The ID of the key to delete. To find the
key's ID, list all keys for the service account , identify the
key that you want to delete, and then copy its ID.
SA_NAME : The name of the service account that the key
belongs to.
PROJECT_ID : Your Google Cloud project ID.
gcloud iam service-accounts keys delete KEY_ID \
--iam-account= SA_NAME @ PROJECT_ID .iam.gserviceaccount.com
Output:
Deleted key [ KEY_ID ] for service account
[ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com]
C++
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C++ API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
namespace iam = :: google :: cloud :: iam_admin_v1 ;
[]( std :: string const & name ) {
iam :: IAMClient client ( iam :: MakeIAMConnection ());
auto response = client . DeleteServiceAccountKey ( name );
if ( ! response . ok ()) throw std :: runtime_error ( response . message ());
std :: cout << "ServiceAccountKey successfully deleted. \n " ;
}
C#
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM C# API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
using System ;
using Google.Apis.Auth.OAuth2 ;
using Google.Apis.Iam.v1 ;
using Google.Apis.Iam.v1.Data ;
public partial class ServiceAccountKeys
{
public static void DeleteKey ( string fullKeyName )
{
var credential = GoogleCredential . GetApplicationDefault ()
. CreateScoped ( IamService . Scope . CloudPlatform );
var service = new IamService ( new IamService . Initializer
{
HttpClientInitializer = credential
});
service . Projects . ServiceAccounts . Keys . Delete ( fullKeyName ). Execute ();
Console . WriteLine ( "Deleted key: " + fullKeyName );
}
}
Go
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Go API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import (
"context"
"fmt"
"io"
iam "google.golang.org/api/iam/v1"
)
// deleteKey deletes a service account key.
func deleteKey ( w io . Writer , fullKeyName string ) error {
ctx := context . Background ()
service , err := iam . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "iam.NewService: %w" , err )
}
_ , err = service . Projects . ServiceAccounts . Keys . Delete ( fullKeyName ). Do ()
if err != nil {
return fmt . Errorf ( "Projects.ServiceAccounts.Keys.Delete: %w" , err )
}
fmt . Fprintf ( w , "Deleted key: %v" , fullKeyName )
return nil
}
Java
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Java API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
import com.google.cloud.iam.admin.v1. IAMClient ;
import com.google.iam.admin.v1. DeleteServiceAccountKeyRequest ;
import com.google.iam.admin.v1. KeyName ;
import java.io.IOException ;
public class DeleteServiceAccountKey {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace the variables before running the sample.
String projectId = "your-project-id" ;
String serviceAccountName = "my-service-account-name" ;
String serviceAccountKeyId = "service-account-key-id" ;
deleteKey ( projectId , serviceAccountName , serviceAccountKeyId );
}
// Deletes a service account key.
public static void deleteKey ( String projectId , String accountName ,
String serviceAccountKeyId ) throws IOException {
//Initialize client that will be used to send requests.
//This client only needs to be created once, and can be reused for multiple requests.
try ( IAMClient iamClient = IAMClient . create ()) {
//Construct the service account email.
//You can modify the ".iam.gserviceaccount.com" to match the service account name in which
//you want to delete the key.
//See, https://cloud.google.com/iam/docs/creating-managing-service-account-keys#deleting
String accountEmail = String . format ( "%s@%s.iam.gserviceaccount.com" , accountName , projectId );
String name = KeyName . of ( projectId , accountEmail , serviceAccountKeyId ). toString ();
DeleteServiceAccountKeyRequest request = DeleteServiceAccountKeyRequest . newBuilder ()
. setName ( name )
. build ();
// Then you can delete the key
iamClient . deleteServiceAccountKey ( request );
System . out . println ( "Deleted key: " + serviceAccountKeyId );
}
}
}
Python
To learn how to install and use the client library for IAM, see
IAM client libraries .
For more information, see the
IAM Python API
reference documentation .
To authenticate to IAM, set up Application Default Credentials.
For more information, see
Before you begin .
from google.cloud import iam_admin_v1
from google.cloud.iam_admin_v1 import types
def delete_key ( project_id : str , account : str , key_id : str ) - > None :
"""Deletes a key for a service account.
project_id: ID or number of the Google Cloud project you want to use.
account: ID or email which is unique identifier of the service account.
key_id: unique ID of the key.
"""
iam_admin_client = iam_admin_v1 . IAMClient ()
request = types . DeleteServiceAccountKeyRequest ()
request . name = f "projects/ { project_id } /serviceAccounts/ { account } /keys/ { key_id } "
iam_admin_client . delete_service_account_key ( request = request )
print ( f "Deleted key: { key_id } " )
REST
The
projects.serviceAccounts.keys.delete
method deletes a service account key.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project
ID. Project IDs are alphanumeric strings, like my-project .
SA_NAME : The name of the service account whose key you want to delete.
KEY_ID : The ID of the key that you want to delete. To find the key's
ID, list all keys for the service account , identify the key that you
want to delete, and then copy its ID from the end of the name field. The key's ID
is everything after keys/ .
HTTP method and URL:
DELETE https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts/ SA_NAME @ PROJECT_ID .iam.gserviceaccount.com/keys/ KEY_ID " | Select-Object -Expand Content
APIs Explorer (browser)
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
}
What's next
Learn how to list and get service account keys .
Learn how to authenticate using a service account key .
Understand the best practices for managing service account
keys .
Learn about
alternatives to service account keys for authentication .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
