---
title: "PHP \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/php
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/php
  title: "PHP \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
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
PHP
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google provides a PHP client library for interacting with the Ad Manager API, and it is recommended to use it with Composer.
The PHP client library uses OAuth2 and Application Default Credentials (ADC) for authentication, which search for credentials in specific locations.
You can make your first request by using the ServiceClient object for each service and its methods to interact with resources like the Network object.
The PHP client library supports logging HTTP requests and responses using PSR-3 compliant loggers, which can be enabled via an environment variable or by passing a logger object.
All Ad Manager API errors in the PHP client library throw an ApiException , which includes a reason field to identify error types and a unique request_id for troubleshooting.
Google provides a PHP client library for interacting with the Ad Manager API.
We recommend using the client library with Composer .
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library artifacts to
Packagist as
googleads/ad-manager .
composer require googleads/ad-manager
Configure credentials
The PHP client library uses OAuth2 and Application Default Credentials
(ADC) to authenticate.
ADC searches for credentials in order in the following locations:
GOOGLE_APPLICATION_CREDENTIALS environment variable.
User credentials set up through the Google Cloud CLI (gcloud CLI).
When running on Google Cloud, the service account attached to the Google Cloud resource.
For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each service has a ServiceClient object with methods for each REST method. The
following example reads a
Network object.
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
For examples of other methods and resources, see the GitHub repository
googleapis/php-ads-ad-manager .
Log HTTP requests and responses
The PHP client library supports PSR-3 compliant loggers
for logging HTTP requests and responses. By default, logging is disabled.
To enable default logging to standard output, set the environment variable
GOOGLE_SDK_PHP_LOGGING
to true in either your PHP code or your environment:
putenv('GOOGLE_SDK_PHP_LOGGING=true');
$client = new NetworkServiceClient();
export GOOGLE_SDK_PHP_LOGGING = true
Alternatively, you can pass any PSR-3 compliant logger when constructing
a service client:
use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\Logger;
$monologLogger = new Logger('sdk client');
$monologLogger->pushHandler(new StreamHandler('php://stdout', Level::Debug));
$client = new NetworkServiceClient([
'logger' => $monologLogger
]);
Handle errors
In the PHP client library, all Ad Manager API errors throw an exception of type
ApiException :
Parse errors
The error reason field uniquely identifies error types. Use
this field to determine how to handle the error.
try {
$response = $networkServiceClient->getNetwork($formattedName);
printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
} catch (ApiException $ex) {
printf('Error message: %s' . PHP_EOL, $ex->getBasicMessage());
printf('Reason: %s' . PHP_EOL, $ex->getReason());
}
Ad Manager API errors also include a unique request_id you can
provide to support for assistance with
troubleshooting. The following example extracts the
request_id .
$requestInfo = null;
foreach ($ex->getMetadata() as $metadata) {
if($metadata["@type"] === "type.googleapis.com/google.rpc.RequestInfo") {
$requestInfo = $metadata;
break;
}
}
if ($requestInfo == null) {
printf('Unexpected empty RequestInfo');
} else {
printf('RequestId: %s' . PHP_EOL, $requestInfo['requestId']);
}
Construct resource names
The client library provides helper classes for building resource names from
IDs.
use Google\Ads\AdManager\V1\Client\OrderServiceClient;
// Constructs a String in the format:
// "networks/{networkCode}/orders/{orderId}"
$orderName = OrderServiceClient::orderName(" NETWORK_CODE ", " ORDER_ID ");
Configure proxy settings
The PHP client library respects HTTP_PROXY and HTTPS_PROXY
environment settings.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
