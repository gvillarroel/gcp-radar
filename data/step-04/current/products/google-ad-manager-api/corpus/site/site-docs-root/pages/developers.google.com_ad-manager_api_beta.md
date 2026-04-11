---
title: "Getting Started \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta
  title: "Getting Started \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Getting Started
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
To use the Google Ad Manager API, you need to get access to an Ad Manager network and enable the Ad Manager API in your Google API Console Project.
All API requests must be authenticated using OAuth2, and you can reuse a Service Account if you already have one for the Google Ad Manager SOAP API.
The Ad Manager API client libraries read credentials from Application Default Credentials, which can be set using environment variables or gcloud.
To make your first API request, you need to set up your client library for your preferred language and then make a request, such as getting network information.
Use the Google Ad Manager API (Beta) to read your Ad Manager data and run
reports.
To make your first API request, complete the following steps:
Get access to an Ad Manager network
If you don't already have one,
sign up for an Ad Manager
account.
Enable the Ad Manager API
Enable the
Ad Manager API in your
Google API Console Project.
Authenticate
All API requests must be authenticated using OAuth2.
Note: If you already have a Service Account for the Google Ad Manager SOAP API,
you can reuse it.
The Ad Manager API client libraries read credentials from
Application Default Credentials . You can set these
using environment variables or
gcloud .
Service Account
Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Windows
set GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
User credentials
gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager"
# End user credentials must specify the cloud project where the API is enabled.
gcloud auth application-default set-quota-project PROJECT_ID
Note: If your application only needs to read data, you should use the
https://www.googleapis.com/auth/admanager.readonly scope instead.
For more information about choosing credential types and creating credentials,
see the authentication guide .
Set up your client library
Java
For Maven:
<!-- pom.xml -->
<dependency>
<groupId>com.google.api-ads</groupId>
<artifactId>ad-manager</artifactId>
<version>0.1.0</version>
</dependency>
For Gradle:
implementation 'com.google.api-ads:ad-manager:0.1.0'
Python
Install the client library from PyPi.
pip install google-ads-admanager
.NET
Install the client library from NuGet .
From the .NET CLI:
dotnet add package Google.Ads.AdManager.V1 --version 1 .0.0-beta01
As a package reference:
<PackageReference Include="Google.Ads.AdManager.V1" Version="1.0.0-beta01" />
PHP
Install the client library from Composer .
composer require googleads/ad-manager
Ruby
Install the client library from RubyGems .
Gemfile:
gem 'google-ads-ad_manager', '~> 0.2.0'
Install:
gem install google-ads-ad_manager
Node.js
Install the client library from npm.
From the command line:
npm install @google-ads/admanager
As a package reference:
// package.json
"dependencies" : {
"@google-ads/admanager" : "^0.1.0"
}
Make your first request
Java
import com.google.ads.admanager.v1.GetNetworkRequest ;
import com.google.ads.admanager.v1.Network ;
import com.google.ads.admanager.v1.NetworkName ;
import com.google.ads.admanager.v1.NetworkServiceClient ;
public class SyncGetNetwork {
public static void main ( String [] args ) throws Exception {
syncGetNetwork ();
}
public static void syncGetNetwork () throws Exception {
try ( NetworkServiceClient networkServiceClient = NetworkServiceClient . create ()) {
GetNetworkRequest request =
GetNetworkRequest . newBuilder ()
. setName ( NetworkName . of ( " NETWORK_CODE " ). toString ())
. build ();
Network response = networkServiceClient . getNetwork ( request );
}
}
} SyncGetNetwork . java
More examples can be found on GitHub .
For additional client library information, see the Java guide .
Python
from google.ads import admanager_v1
def sample_get_network ():
# Create a client
client = admanager_v1 . NetworkServiceClient ()
# Initialize request argument(s)
request = admanager_v1 . GetNetworkRequest (
name = "networks/ NETWORK_CODE " ,
)
# Make the request
response = client . get_network ( request = request )
# Handle the response
print ( response )
admanager_v1_generated_network_service_get_network_sync . py
More examples can be found on GitHub .
For additional client library information, see the Python guide .
.NET
using Google.Ads.AdManager.V1 ;
public sealed partial class GeneratedNetworkServiceClientSnippets
{
public void GetNetwork ()
{
// Create client
NetworkServiceClient networkServiceClient = NetworkServiceClient . Create ();
// Initialize request argument(s)
string name = "networks/ NETWORK_CODE " ;
// Make the request
Network response = networkServiceClient . GetNetwork ( name );
}
} NetworkServiceClient . GetNetworkSnippet . g . cs
More examples can be found on GitHub .
For additional client library information, see the
.NET guide .
PHP
< ?php use Google\Ads\AdManager\V1\Client\NetworkServiceClient;
use Google\Ads\AdManager\V1\GetNetworkRequest;
use Google\Ads\AdManager\V1\Network;
use Google\ApiCore\ApiException;
/**
* API to retrieve a Network object.
*
* @param string $formattedName Resource name of Network.
* Format: networks/{network_code}
* Please see {@see NetworkServiceClient::networkName()} for help formatting this field.
*/
function get_network_sample(string $formattedName): void
{
// Create a client.
$networkServiceClient = new NetworkServiceClient();
// Prepare the request message.
$request = (new GetNetworkRequest())
->setName($formattedName);
// Call the API and handle any network failures.
try {
/** @var Network $response */
$response = $networkServiceClient->getNetwork($request);
printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
} catch (ApiException $ex) {
printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
}
}
/**
* Helper to execute the sample.
*
*/
function callSample(): void
{
$formattedName = NetworkServiceClient::networkName(' NETWORK_CODE ');
get_network_sample($formattedName);
} get_network.php
More examples can be found on GitHub .
Ruby
require "google/ads/ad_manager/v1"
def get_network
# Create a client object. The client can be reused for multiple calls.
client = Google :: Ads :: AdManager :: V1 :: NetworkService :: Rest :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Ads :: AdManager :: V1 :: GetNetworkRequest . new ( :name => 'networks/ NETWORK_CODE )'
# Call the get_network method.
result = client . get_network request
# The returned object is of type Google::Ads::AdManager::V1::Network.
p result
end get_network . rb
More examples can be found on GitHub .
Node.js
// Resource name of the Network
const name = 'networks/ NETWORK_CODE '
// Imports the Admanager library
const { NetworkServiceClient } = require ( '@google-ads/admanager' ). v1 ;
// Instantiates a client
const admanagerClient = new NetworkServiceClient ();
async function callGetNetwork () {
// Construct request
const request = {
name ,
};
// Run request
const response = await admanagerClient . getNetwork ( request );
console . log ( response );
}
callGetNetwork (); network_service . get_network . js
More examples can be found on GitHub .
cURL
Note: If you're authenticating with End User Credentials, you must also set
the x-goog-user-project HTTP header. For details, see
Set the quota project with a REST request .
curl -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
https://admanager.googleapis.com/v1/networks/ NETWORK_CODE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To use the Google Ad Manager API, first, obtain an Ad Manager network and enable the API in your Google API Console Project. Authenticate requests via OAuth2, setting Application Default Credentials using environment variables or `gcloud`. Set up a client library using package managers like Maven, pip, NuGet, Composer, RubyGems, or npm for various languages. Finally, make your first request to retrieve a network by creating a client, forming a request with the network code, and processing the API response.\n"]]
