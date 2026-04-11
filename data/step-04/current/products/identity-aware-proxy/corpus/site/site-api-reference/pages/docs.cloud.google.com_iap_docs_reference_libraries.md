---
title: "IAP client libraries \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/libraries
  title: "IAP client libraries \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
IAP client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Google API Client Libraries for the
Cloud IAP API. Read more about the Google API Client Libraries and the
newer Cloud Client Libraries in
Client libraries explained .
Install the client library
PHP
composer require google/apiclient
For more information, see Using PHP on Google Cloud .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
PHP
< ?php
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* For instructions on how to run the full sample:
*
* @see https://github.com/GoogleCloudPlatform/php-docs-samples/tree/main/iap/README.md
*/
namespace Google\Cloud\Samples\Iap;
# Imports Auth libraries and Guzzle HTTP libraries.
use Google\Auth\ApplicationDefaultCredentials;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
/**
* Make a request to an application protected by Identity-Aware Proxy.
*
* @param string $url The Identity-Aware Proxy-protected URL to fetch.
* @param string $clientId The client ID used by Identity-Aware Proxy.
*/
function make_iap_request($url, $clientId)
{
// create middleware, using the client ID as the target audience for IAP
$middleware = ApplicationDefaultCredentials::getIdTokenMiddleware($clientId);
$stack = HandlerStack::create();
$stack->push($middleware);
// create the HTTP client
$client = new Client([
'handler' => $stack,
'auth' => 'google_auth'
]);
// make the request
$response = $client->get($url);
print('Printing out response body:');
print($response->getBody());
}
// The following 2 lines are only needed to run the samples
require_once __DIR__ . '/../../testing/sample_helpers.php';
\Google\Cloud\Samples\execute_sample(__FILE__, __NAMESPACE__, $argv);
Additional resources
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-iap on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
