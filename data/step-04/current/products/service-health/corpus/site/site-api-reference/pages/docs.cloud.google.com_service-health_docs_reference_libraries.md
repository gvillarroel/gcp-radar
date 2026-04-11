---
title: "Service Health client libraries \_|\_ Personalized Service Health \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/libraries
  title: "Service Health client libraries \_|\_ Personalized Service Health \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
Service Health client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Personalized Service Health API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
Go
go get cloud.google.com/go/servicehealth
For more information, see Setting Up a Go Development Environment .
Java
See the documentation .
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/servicehealth
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-servicehealth
For more information, see Using PHP on Google Cloud .
Python
See the documentation .
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-service_health-v1
For more information, see Setting Up a Ruby Development Environment .
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
C++
// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//! [all]
#include "google/cloud/servicehealth/v1/service_health_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], "global" );
namespace servicehealth = :: google :: cloud :: servicehealth_v1 ;
auto client = servicehealth :: ServiceHealthClient (
servicehealth :: MakeServiceHealthConnection ());
for ( auto e : client . ListEvents ( location . FullName ())) {
if ( ! e ) throw std :: move ( e ). status ();
std :: cout << e - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
//! [all]
Go
package main
import (
"context"
servicehealth "cloud.google.com/go/servicehealth/apiv1"
servicehealthpb "cloud.google.com/go/servicehealth/apiv1/servicehealthpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := servicehealth . NewClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & servicehealthpb . GetEventRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/servicehealth/apiv1/servicehealthpb#GetEventRequest.
}
resp , err := c . GetEvent ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
/*
* Copyright 2026 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.google.cloud.servicehealth.v1.samples ;
import com.google.cloud.servicehealth.v1. Event ;
import com.google.cloud.servicehealth.v1. EventName ;
import com.google.cloud.servicehealth.v1. GetEventRequest ;
import com.google.cloud.servicehealth.v1. ServiceHealthClient ;
public class SyncGetEvent {
public static void main ( String [] args ) throws Exception {
syncGetEvent ();
}
public static void syncGetEvent () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ServiceHealthClient serviceHealthClient = ServiceHealthClient . create ()) {
GetEventRequest request =
GetEventRequest . newBuilder ()
. setName ( EventName . of ( "[PROJECT]" , "[LOCATION]" , "[EVENT]" ). toString ())
. build ();
Event response = serviceHealthClient . getEvent ( request );
}
}
}
.
Node.js
// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **
'use strict' ;
function main ( parent , pageSize ) {
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. Parent value using the form
* `projects/{project_id}/locations/{location}/events`.
* `project_id` - ID of the project for which to list service health
* events.
* `location` - The location to get the service health events from.
* To retrieve service health events of category = INCIDENT, use `location` =
* `global`.
*/
// const parent = 'abc123'
/**
* Optional. The maximum number of events that should be returned. Acceptable
* values are 1 to 100, inclusive. (The default value is 10.) If more results
* are available, the service returns a next_page_token that you can use to
* get the next page of results in subsequent list requests. The service may
* return fewer events than the requested page_size.
*/
// const pageSize = 1234
/**
* Optional. A token identifying a page of results the server should return.
* Provide Page token returned by a previous `ListEvents` call to retrieve the
* next page of results. When paginating, all other parameters provided to
* `ListEvents` must match the call that provided the page token.
*/
// const pageToken = 'abc123'
/**
* Optional. A filter expression that filters resources listed in the
* response. The expression takes the following forms: <br>
* * field=value for `category` and `state`<br>
* * field &lt;, >, &lt;=, or >= value for `update_time` <br>
* Examples: `category=INCIDENT`, `update_time>=2000-01-01T11:30:00-04:00`
* <br>
* Multiple filter queries are separated by spaces. Example:
* `category=INCIDENT state=ACTIVE`.
* By default, each expression is an AND expression. However, you can include
* AND and OR expressions explicitly.
* Filter is supported for the following fields: `category`, `state`,
* `update_time`
*/
// const filter = 'abc123'
/**
* Optional. Event fields to include in response.
*/
// const view = {}
// Imports the Servicehealth library
const { ServiceHealthClient } = require ( ' @google-cloud/servicehealth ' ). v1 ;
// Instantiates a client
const servicehealthClient = new ServiceHealthClient ();
async function callListEvents () {
// Construct request
const request = {
parent ,
pageSize ,
};
// Run request
const response = await servicehealthClient . listEvents ( request , {
autopaginate : false ,
});
console . log ( response );
}
callListEvents ();
}
process . on ( 'unhandledRejection' , err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
main (... process . argv . slice ( 2 ));
PHP
< ?php
/*
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/*
* GENERATED CODE WARNING
* This file was automatically generated - do not edit!
*/
require_once __DIR__ . '/../../../vendor/autoload.php';
use Google\ApiCore\ApiException;
use Google\Cloud\ServiceHealth\V1\Client\ServiceHealthClient;
use Google\Cloud\ServiceHealth\V1\Event;
use Google\Cloud\ServiceHealth\V1\GetEventRequest;
/**
* Retrieves a resource containing information about an event.
*
* @param string $formattedName Unique name of the event in this scope including project
* and location using the form
* `projects/{project_id}/locations/{location}/events/{event_id}`.
*
* `project_id` - Project ID of the project that contains the event. <br>
* `location` - The location to get the service health events from. <br>
* `event_id` - Event ID to retrieve. Please see
* {@see ServiceHealthClient::eventName()} for help formatting this field.
*/
function get_event_sample(string $formattedName): void
{
// Create a client.
$serviceHealthClient = new ServiceHealthClient();
// Prepare the request message.
$request = (new GetEventRequest())
->setName($formattedName);
// Call the API and handle any network failures.
try {
/** @var Event $response */
$response = $serviceHealthClient->getEvent($request);
printf('Response data: %s' . PHP_EOL, $response->serializeToJsonString());
} catch (ApiException $ex) {
printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
}
}
/**
* Helper to execute the sample.
*
* This sample has been automatically generated and should be regarded as a code
* template only. It will require modifications to work:
* - It may require correct/in-range values for request initialization.
* - It may require specifying regional endpoints when creating the service client,
* please see the apiEndpoint client configuration option for more details.
*/
function callSample(): void
{
$formattedName = ServiceHealthClient::eventName('[PROJECT]', '[LOCATION]', '[EVENT]');
get_event_sample($formattedName);
}
Python
# -*- coding: utf-8 -*-
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Generated code. DO NOT EDIT!
#
# Snippet for GetEvent
# NOTE: This snippet has been automatically generated for illustrative purposes only.
# It may require modifications to work in your environment.
# To install the latest published package dependency, execute the following:
# python3 -m pip install google-cloud-servicehealth
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_get_event ():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . GetEventRequest (
name = "name_value" ,
)
# Make the request
response = client . get_event ( request = request )
# Handle the response
print ( response )
Ruby
# frozen_string_literal: true
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# Auto-generated by gapic-generator-ruby. DO NOT EDIT!
require "google/cloud/service_health/v1"
##
# Snippet for the get_event call in the ServiceHealth service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::ServiceHealth::V1::ServiceHealth::Client#get_event.
#
def get_event
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: ServiceHealth :: V1 :: ServiceHealth :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: ServiceHealth :: V1 :: GetEventRequest . new
# Call the get_event method.
result = client . get_event request
# The returned object is of type Google::Cloud::ServiceHealth::V1::Event.
p result
end
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
