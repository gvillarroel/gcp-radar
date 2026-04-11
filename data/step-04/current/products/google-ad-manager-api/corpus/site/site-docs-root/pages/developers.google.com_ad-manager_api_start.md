---
title: "Get started \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/start
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/start
  title: "Get started \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Get started
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Ad Manager SOAP API allows building applications to manage inventory, create orders, and pull reports.
Client libraries are available for Java, .NET, Python, PHP, and Ruby to help get started with the API.
To make your first API request, you need to get access to an Ad Manager network, create authentication credentials using OAuth 2.0, and configure API access in your network settings.
After setting up your Ad Manager network and authentication, download and configure one of the provided client libraries to write code and make requests to the API.
You can use the Google Ad Manager SOAP API to build apps that manage inventory,
create orders, pull reports, and more.
To help you get started, we offer client
libraries for Java, .NET, Python, PHP, and Ruby.
To make your first API request, follow these steps:
Get access to an Ad Manager network
If you don't already have one, sign up for an Ad Manager
account . You can also create a
test network if you want to test the API in a
separate environment. Note that you don't need an AdSense account for test
purposes.
Make a note of your network code. You can find this in the URL when you sign in
to your network. For example, in the URL
https://admanager.google.com/1234#home , 1234 is your network code.
Note: By accessing or using the Ad Manager API you agree to the Terms of
Service .
Create authentication credentials
You must authenticate all Ad Manager SOAP API requests using OAuth 2.0. The
following steps cover the use case of accessing your own Ad Manager data. For
more details and other options, see
Authentication .
Open the Google API Console
Credentials page
From the project menu, choose Create project , enter a name for the
project, and optionally, edit the provided Project ID. Click Create .
On the Credentials page, select Create credentials , then select
Service account key .
Select New service
account
and select JSON as the key type.
Click Create to download a file containing a private key.
Configure your Ad Manager network
Sign in to Google Ad
Manager.
In the sidebar, click Admin > Global settings .
Under General settings > Api access click the slider to Enabled .
Click the Save button at the bottom of the page.
Set up your client
Download one of the Ad Manager client libraries . The
libraries offer wrapper functions and features that make it easier and faster to
develop apps.
The following tabs provide quickstarts for coding in each of the languages for
which there is a client library.
Java
Here is a basic example that shows how to use the Java client
library . For more detailed usage information, refer to
the README
file in the client library distribution.
Setup your credentials
Run the following command in a shell:
curl https://raw.githubusercontent.com/googleads/googleads-java-lib/main/examples/admanager_axis/src/main/resources/ads.properties -o ~/ads.properties
Open the ~/ads.properties file and populate the following fields:
[...]
api.admanager.applicationName=INSERT_APPLICATION_NAME_HERE
api.admanager.jsonKeyFilePath=INSERT_PATH_TO_JSON_KEY_FILE_HERE
api.admanager.networkCode=INSERT_NETWORK_CODE_HERE
[...]
Specify dependencies
Edit your pom.xml file and add the following to the
dependencies tag. You can find the latest version number on
Github .
<dependency>
<groupId>com.google.api-ads</groupId>
<artifactId>ads-lib</artifactId>
<version>RELEASE</version>
</dependency>
<dependency>
<groupId>com.google.api-ads</groupId>
<artifactId>dfp-axis</artifactId>
<version>RELEASE</version>
</dependency>
Write some code and make a request!
import com.google.api.ads.common.lib.auth.OfflineCredentials ;
import com.google.api.ads.common.lib.auth.OfflineCredentials.Api ;
import com.google.api.ads.admanager.axis.factory.AdManagerServices ;
import com.google.api.ads.admanager.axis.v202602.Network ;
import com.google.api.ads.admanager.axis.v202602.NetworkServiceInterface ;
import com.google.api.ads.admanager.lib.client.AdManagerSession ;
import com.google.api.client.auth.oauth2.Credential ;
public class App {
public static void main ( String [] args ) throws Exception {
Credential oAuth2Credential = new OfflineCredentials . Builder ()
. forApi ( Api . AD_MANAGER )
. fromFile ()
. build ()
. generateCredential ();
// Construct an AdManagerSession.
AdManagerSession session = new AdManagerSession . Builder ()
. fromFile ()
. withOAuth2Credential ( oAuth2Credential )
. build ();
// Construct a Google Ad Manager service factory, which can only be used once per
// thread, but should be reused as much as possible.
AdManagerServices adManagerServices = new AdManagerServices ();
// Retrieve the appropriate service
NetworkServiceInterface networkService = adManagerServices . get ( session ,
NetworkServiceInterface . class );
// Make a request
Network network = networkService . getCurrentNetwork ();
System . out . printf ( "Current network has network code '%s' and display" +
" name '%s'.%n" , network . getNetworkCode (), network . getDisplayName ());
}
}
View on GitHub
Python
Here is a basic example that shows how to use the Python client library .
The Python Client Library supports Python v3.6+. For more detailed usage
information, refer to the README
file in the client library distribution.
Install the library and set up your credentials.
Run the following commands in a shell:
python3 -m pip install googleads
curl https://raw.githubusercontent.com/googleads/googleads-python-lib/main/googleads.yaml \
-o ~/googleads.yaml
Set up your ~/googleads.yaml file.
Fill in the following fields:
ad_manager :
application_name : INSERT_APPLICATION_NAME_HERE
network_code : INSERT_NETWORK_CODE_HERE
path_to_private_key_file : INSERT_PATH_TO_FILE_HERE
Run some code and make a request.
# Import the library.
from googleads import ad_manager
# Initialize a client object, by default uses the credentials in ~/googleads.yaml.
client = ad_manager . AdManagerClient . LoadFromStorage ()
# Initialize a service.
network_service = client . GetService ( 'NetworkService' , version = 'v202602' )
# Make a request.
current_network = network_service . getCurrentNetwork ()
print ( "Current network has network code ' %s ' and display name ' %s '." %
( current_network [ 'networkCode' ], current_network [ 'displayName' ]))
View on GitHub
PHP
Here is a basic example that shows how to use the
PHP client library .
Install the library and setup your credentials.
Run the following commands in a shell to install the client library and download the
adsapi_php.ini
file to your home directory:
composer require googleads/googleads-php-lib
curl https://raw.githubusercontent.com/googleads/googleads-php-lib/main/examples/AdManager/adsapi_php.ini -o ~/adsapi_php.ini
Setup your ~/adsapi_php.ini file.
Fill in the following fields:
[AD_MANAGER]
networkCode = "INSERT_NETWORK_CODE_HERE"
applicationName = "INSERT_APPLICATION_NAME_HERE"
[OAUTH2]
jsonKeyFilePath = "INSERT_ABSOLUTE_PATH_TO_OAUTH2_JSON_KEY_FILE_HERE"
scopes = "https://www.googleapis.com/auth/dfp"
Run some code and make a request!
This example code must be run from the command line, not a browser.
The file containing this code must reside in the root of the project directory,
where composer require was run.
< ?php
require 'vendor/autoload.php';
use Google\AdsApi\AdManager\AdManagerSession;
use Google\AdsApi\AdManager\AdManagerSessionBuilder;
use Google\AdsApi\AdManager\v202602\ApiException;
use Google\AdsApi\AdManager\v202602\ServiceFactory;
use Google\AdsApi\Common\OAuth2TokenBuilder;
// Generate a refreshable OAuth2 credential for authentication.
$oAuth2Credential = (new OAuth2TokenBuilder())
->fromFile()
->build();
// Construct an API session configured from a properties file and the OAuth2
// credentials above.
$session = (new AdManagerSessionBuilder())
->fromFile()
->withOAuth2Credential($oAuth2Credential)
->build();
// Get a service.
$serviceFactory = new ServiceFactory();
$networkService = $serviceFactory->createNetworkService($session);
// Make a request
$network = $networkService->getCurrentNetwork();
printf(
"Network with code %d and display name '%s' was found.\n",
$network->getNetworkCode(),
$network->getDisplayName()
);
View on GitHub
.NET
Here is a basic example that shows how to use the .NET client
library
Create a new project
Open Visual Studio and create a new project (Console Application).
Add required library references to your project
Add a nuget dependency for Google.Dfp .
Setup your App.config
Copy src\App.config to your project directory and add it to your project. If your application has its own App.config, then you can copy the following nodes into your App.config:
configuration/AdManagerApi
configuration/configSections/section[name="AdManagerApi"]
configuration/system.net
Setup credentials
Open App.config and edit the following keys:
<add key="ApplicationName" value="INSERT_YOUR_APPLICATION_NAME_HERE" />
<add key="NetworkCode" value="INSERT_YOUR_NETWORK_CODE_HERE" />
<add key="OAuth2Mode" value="SERVICE_ACCOUNT" />
<add key="OAuth2SecretsJsonPath" value="INSERT_OAUTH2_SECRETS_JSON_FILE_PATH_HERE" />
Make a call to the library
You can call the library as shown in the following C# code snippet
View on GitHub
AdManagerUser user = new AdManagerUser ();
using ( InventoryService inventoryService = user . GetService<InventoryService> ())
{
// Create a statement to select ad units.
int pageSize = StatementBuilder.SUGGESTED_PAGE_LIMIT ;
StatementBuilder statementBuilder =
new StatementBuilder().OrderBy("id ASC").Limit(pageSize) ;
// Retrieve a small amount of ad units at a time, paging through until all
// ad units have been retrieved.
int totalResultSetSize = 0 ;
do
{
AdUnitPage page =
inventoryService.getAdUnitsByStatement(statementBuilder.ToStatement()) ;
// Print out some information for each ad unit.
if (page.results != null)
{
totalResultSetSize = page.totalResultSetSize ;
int i = page.startIndex ;
foreach (AdUnit adUnit in page.results)
{
Console.WriteLine(
"{0 } ) Ad unit with ID \ "{1}\" and name \"{2}\" was found." , i ++,
adUnit . id , adUnit . name );
}
}
statementBuilder . IncreaseOffsetBy ( pageSize );
} while ( statementBuilder . GetOffset () < totalResultSetSize );
Console . WriteLine ( "Number of results found: {0}" , totalResultSetSize );
}
If you don't want to set your credentials in your App.config, then refer
to this wiki article
for alternate ways of using the AdManagerUser class. For more detailed information about using the .NET Client Library, refer
to the README
. If you want to develop in .NET without the client library, please refer to the
NoClientLibrary
wiki article .
Ruby
Here is a basic example that shows how to use the Ruby
client library . The Ruby client library requires Ruby 2.1 or later.
Install the Ruby gem and get the configuration file.
Run the following commands in a shell:
gem install google-dfp-api
curl https://raw.githubusercontent.com/googleads/google-api-ads-ruby/main/ad_manager_api/ad_manager_api.yml -o ~/ad_manager_api.yml
If you encounter an error such as " cannot load such
file -- mkmf (LoadError) " at any point while installing your gems, you
may need to install additional Ruby development libraries such as ruby-dev,
ruby-devel, xcode-select etc. for your particular environment.
Setup your credentials
Populate the required fields in the ~/ad_manager_api.yml
file. If you don't already have an OAuth2 keyfile, you'll need to follow the
steps to create your OAuth2
credentials .
:authentication :
:oauth2_keyfile : INSERT_PATH_TO_JSON_KEY_FILE_HERE
:application_name : INSERT_APPLICATION_NAME_HERE
:network_code : INSERT_NETWORK_CODE_HERE
Write some code and make a request!
# Import the library.
require 'ad_manager_api'
# Initialize an Ad Manager client instance (uses credentials in ~/ad_manager_api.yml by default).
ad_manager = AdManagerApi :: Api . new
# Get a service instance.
network_service = ad_manager . service ( :NetworkService , :v202602 )
# Make a request.
network = network_service . get_current_network ()
puts "The current network is %s (%d)." %
[ network [ :display_name ] , network [ :network_code ]]
View on GitHub
More detailed steps for getting started can be found in the README
file that is distributed with the Ruby client library. Also, check out our full
example library for Ruby.
Next steps
When you have a client library up and running, modify the examples provided to
extend them for your needs.
Browse the reference documentation to learn more
about the API.
If you need help, visit our Support page .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
