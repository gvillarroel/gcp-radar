---
title: "Cloud Channel API client libraries \_|\_ Channel Services \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/channel/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/reference/libraries
  title: "Cloud Channel API client libraries \_|\_ Channel Services \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
APIs & Reference
Send feedback
Cloud Channel API client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Channel API.
Installing the client library
We recommend using a Google client library for your integration. These libraries
provide a natural and language-specific interface, offer better performance by
using RPC instead of HTTP, and set default values for fields.
To install the library:
C++
To install the C++ client library,
see Setting up a C++ development environment .
C#
If you are using Visual Studio 2017 or higher, open nuget package manager
window and type the following:
Install - Package Google . Cloud . Channel . V1
If you are using .NET Core command-line interface tools to install your
dependencies, run the following command:
dotnet add package Google . Cloud . Channel . V1
Go
go mod init YOUR_MODULE_NAME
go get cloud . google . com / go / channel / apiv1
Java
If use use Maven, add the
following to your pom.xml file. For more information about BOMs, see
The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>20 .9.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - channel < / artifactId >
< version>2 .3.0 < / version >
< / dependency >
If you are using Gradle , add the
following to your dependencies:
implementation group : ' com . google . cloud ' , name : ' google - cloud - channel ' , version : ' 2.3.0 '
If you're using VS Code, IntelliJ, or Eclipse, you can add client libraries
to your project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for
service accounts. Refer to each plugin's documentation for details.
Node.js
npm install @ google - cloud / channel
PHP
composer require google/cloud-channel
Python
pip install google - cloud - channel
Ruby
gem install google - cloud - channel
If you choose not to use a client library, we recommend checking for a
smaller client library to handle authentication. We do not recommend
rewriting the authentication layer from scratch.
Setting up authentication
The Cloud Channel API uses a type of authentication that requires:
A service account and its corresponding JSON key file.
A reseller domain super admin to impersonate using domain-wide delegation on
the service account's client.
Follow the API setup codelab if you're missing
any prerequisites. For more information, see
OAuth 2.0 for service accounts .
Provide the email address of a reseller domain super admin using an
environment variable. Replace [RESELLER_ADMIN_USER] with the correct
value. You can also provide the [ACCOUNT_ID] from the Settings
page of your Partner Sales Console.
Linux or macOS
export GOOGLE_RESELLER_ADMIN_USER = " [RESELLER_ADMIN_USER] "
export GOOGLE_RESELLER_ACCOUNT_ID = " [ACCOUNT_ID] "
Windows
With PowerShell:
$ env : GOOGLE_RESELLER_ADMIN_USER = " [RESELLER_ADMIN_USER] "
$ env : GOOGLE_RESELLER_ACCOUNT_ID = " [ACCOUNT_ID] "
With command prompt:
set GOOGLE_RESELLER_ADMIN_USER = [ RESELLER_ADMIN_USER
set GOOGLE_RESELLER_ACCOUNT_ID= [ACCOUNT_ID ]
Using the client library
C++
#include "google/cloud/channel/v1/cloud_channel_client.h"
#include <iostream>
#include <string>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " account-id \n " ;
return 1 ;
}
namespace channel = :: google :: cloud :: channel_v1 ;
auto client = channel :: CloudChannelServiceClient (
channel :: MakeCloudChannelServiceConnection ());
// Fill in this request as needed.
auto request = google :: cloud :: channel :: v1 :: ListProductsRequest {};
request . set_account ( std :: string ( "accounts/" ) + argv [ 1 ]);
for ( auto r : client . ListProducts ( std :: move ( request ))) {
if ( ! r ) throw std :: move ( r ). status ();
std :: cout << r - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
using Google.Apis.Auth.OAuth2 ;
using Google.Api.Gax ;
using Google.Cloud.Channel.V1 ;
using System ;
public class Program {
static void Main ( string [] args ) {
// Set up credentials with user impersonation
var jsonKeyFile = Environment . GetEnvironmentVariable ( "GOOGLE_APPLICATION_CREDENTIALS" );
var resellerAdminUser = Environment . GetEnvironmentVariable ( "GOOGLE_RESELLER_ADMIN_USER" );
ICredential credential = GoogleCredential . FromFile ( jsonKeyFile )
. CreateScoped ( CloudChannelServiceClient . DefaultScopes )
. CreateWithUser ( resellerAdminUser );
// Create the API client
var client = new CloudChannelServiceClientBuilder {
TokenAccessMethod = credential . GetAccessTokenForRequestAsync
}. Build ();
// Test the client
var accountId = Environment . GetEnvironmentVariable ( "GOOGLE_RESELLER_ACCOUNT_ID" );
var request = new CheckCloudIdentityAccountsExistRequest {
Parent = "accounts/" + accountId ,
Domain = "example.com"
};
client . CheckCloudIdentityAccountsExist ( request );
Console . WriteLine ( "The API call worked!);
}
}
Go
package main
import (
"context"
"fmt"
"os"
channel "cloud.google.com/go/channel/apiv1"
"golang.org/x/oauth2/google"
"google.golang.org/api/option"
channelpb "google.golang.org/genproto/googleapis/cloud/channel/v1"
)
func main () {
ctx := context . Background ()
// Set up credentials with user impersonation
jsonKeyFile := os . Getenv ( "GOOGLE_APPLICATION_CREDENTIALS" )
resellerAdminUser := os . Getenv ( "GOOGLE_RESELLER_ADMIN_USER" )
jsonKey , _ := os . ReadFile ( jsonKeyFile )
jwt , _ := google . JWTConfigFromJSON ( jsonKey , "https://www.googleapis.com/auth/apps.order" )
jwt . Subject = resellerAdminUser
tokenSource := jwt . TokenSource ( ctx )
// Create the API client
client , _ := channel . NewCloudChannelClient ( ctx , option . WithTokenSource ( tokenSource ))
// Test the client
accountID := os . Getenv ( "GOOGLE_RESELLER_ACCOUNT_ID" )
req := & channelpb . CheckCloudIdentityAccountsExistRequest {
Parent : "accounts/" + accountID ,
Domain : "example.com" ,
}
response , _ := client . CheckCloudIdentityAccountsExist ( ctx , req )
if response != nil {
fmt . Println ( "The API call worked!" )
}
}
Java
import com.google.api.gax.core.FixedCredentialsProvider ;
import com.google.api.gax.longrunning.OperationFuture ;
import com.google.auth.oauth2.GoogleCredentials ;
import com.google.auth.oauth2.ServiceAccountCredentials ;
import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest ;
import com.google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse ;
import com.google.cloud.channel.v1.CloudChannelServiceClient ;
import com.google.cloud.channel.v1.CloudChannelServiceSettings ;
import java.io.FileInputStream ;
import java.io.IOException ;
import java.util.Iterator ;
public class Codelab {
public static void main ( String [] args ) throws IOException {
// Set up credentials with user impersonation
String jsonKeyFile = System . getenv ( "GOOGLE_APPLICATION_CREDENTIALS" );
String resellerAdminUser = System . getenv ( "GOOGLE_RESELLER_ADMIN_USER" );
FileInputStream jsonKeyFileSteam = new FileInputStream ( jsonKeyFile );
GoogleCredentials credentials = ServiceAccountCredentials . fromStream ( jsonKeyFileSteam )
. createScoped ( "https://www.googleapis.com/auth/apps.order" )
. createDelegated ( resellerAdminUser );
CloudChannelServiceSettings serviceSettings =
CloudChannelServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( credentials ))
. build ();
// Create the API client
CloudChannelServiceClient client = CloudChannelServiceClient . create ( serviceSettings );
// Test the client
String accountId = System . getenv ( "GOOGLE_RESELLER_ACCOUNT_ID" );
CheckCloudIdentityAccountsExistRequest request =
CheckCloudIdentityAccountsExistRequest . newBuilder ()
. setParent ( "accounts/" + accountId )
. setDomain ( "example.com" )
. build ();
CheckCloudIdentityAccountsExistResponse response =
client . checkCloudIdentityAccountsExist ( request );
System . out . println ( "The API call worked!" );
}
}
Node.js
const { JWT } = require ( 'google-auth-library' );
const { grpc } = require ( 'google-gax' );
const { CloudChannelServiceClient } = require ( '@google-cloud/channel' );
async function main () {
// Set up credentials with user impersonation
const jsonKeyFile = process . env . GOOGLE_APPLICATION_CREDENTIALS ;
const resellerAdminUser = process . env . GOOGLE_RESELLER_ADMIN_USER ;
const authClient = new JWT ({
keyFile : jsonKeyFile ,
scopes : [ 'https://www.googleapis.com/auth/apps.order' ],
subject : resellerAdminUser ,
});
const sslCreds = grpc . credentials . combineChannelCredentials (
grpc . credentials . createSsl (),
grpc . credentials . createFromGoogleCredential ( authClient )
);
// Create the API client
const client = new CloudChannelServiceClient ({ sslCreds });
// Test the client
const accountId = process . env . GOOGLE_RESELLER_ACCOUNT_ID ;
const [ cloudIdentityAccounts ] = await client . checkCloudIdentityAccountsExist ({
parent : `accounts/ ${ accountId } ` ,
domain : 'example.com' ,
});
console . log ( 'The API call worked!' );
}
main (). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
process . on ( 'unhandledRejection' , err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
PHP
< ?php
require 'vendor/autoload.php';
use Google\Auth\Credentials\ServiceAccountCredentials;
use Google\Cloud\Channel;
// Set up credentials with user impersonation
$credentials = new ServiceAccountCredentials(
'https://www.googleapis.com/auth/apps.order', /* $scope */
getenv('GOOGLE_APPLICATION_CREDENTIALS'), /* $keyFile */
getenv('GOOGLE_RESELLER_ADMIN_USER') /* $sub */
);
// Create the API client
$client = new Channel\V1\CloudChannelServiceClient([
'credentials' => $credentials
]);
// Test the client
$accountId = getenv('GOOGLE_RESELLER_ACCOUNT_ID');
$client->checkCloudIdentityAccountsExist(
'accounts/' . $accountId /* parent */,
'example.com' /* domain */
);
print 'The API call worked!' . PHP_EOL;
Python
from google.cloud import channel
from google.oauth2 import service_account
import os
def main ():
# Set up credentials with user impersonation
json_key_file = os . environ [ 'GOOGLE_APPLICATION_CREDENTIALS' ]
reseller_admin_user = os . environ [ 'GOOGLE_RESELLER_ADMIN_USER' ]
credentials = service_account . Credentials . from_service_account_file (
json_key_file , scopes = [ "https://www.googleapis.com/auth/apps.order" ])
credentials_delegated = credentials . with_subject ( reseller_admin_user )
# Create the API client
client = channel . CloudChannelServiceClient ( credentials = credentials_delegated )
# Test the client
account_id = os . environ [ 'GOOGLE_RESELLER_ACCOUNT_ID' ]
request = channel . CheckCloudIdentityAccountsExistRequest (
parent = "accounts/" + account_id , domain = "example.com" )
response = client . check_cloud_identity_accounts_exist ( request )
print ( "The API call worked!" )
if __name__ == "__main__" :
main ()
Additional resources
C++
API Reference Documentation
Source Code
GitHub Issue Tracker
C#
API Reference Documentation
Source Code
GitHub Issue Tracker
Go
API Reference Documentation
Source Code
GitHub Issue Tracker
Java
API Reference Documentation
Source Code
GitHub Issue Tracker
Node.js
API Reference Documentation
Source Code
GitHub Issue Tracker
PHP
API Reference Documentation
Source Code
GitHub Issue Tracker
Python
API Reference Documentation
Source Code
GitHub Issue Tracker
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
