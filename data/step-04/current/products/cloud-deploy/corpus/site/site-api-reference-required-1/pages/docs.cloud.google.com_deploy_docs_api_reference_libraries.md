---
title: "Cloud Deploy client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/libraries
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/libraries
  title: "Cloud Deploy client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
Cloud Deploy client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Deploy API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
However, we recommend using the older Google API Client
Libraries if running on
App Engine standard environment . Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Install-Package Google.Cloud.Deploy.V1 -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/storage
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - deploy < / artifactId >
< version>1 .85.0 < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - deploy ' , version : ' 1.85.0 '
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/deploy
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-deploy
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-deploy
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-deploy
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
#include "google/cloud/deploy/v1/cloud_deploy_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id location-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]);
namespace deploy = :: google :: cloud :: deploy_v1 ;
auto client = deploy :: CloudDeployClient ( deploy :: MakeCloudDeployConnection ());
for ( auto dp : client . ListDeliveryPipelines ( location . FullName ())) {
if ( ! dp ) throw std :: move ( dp ). status ();
std :: cout << dp - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Node.js
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. The parent, which owns this collection of pipelines. Format must be
* projects/{project_id}/locations/{location_name}.
*/
// const parent = 'abc123'
/**
* The maximum number of pipelines to return. The service may return
* fewer than this value. If unspecified, at most 50 pipelines will
* be returned. The maximum value is 1000; values above 1000 will be set
* to 1000.
*/
// const pageSize = 1234
/**
* A page token, received from a previous `ListDeliveryPipelines` call.
* Provide this to retrieve the subsequent page.
* When paginating, all other provided parameters match
* the call that provided the page token.
*/
// const pageToken = 'abc123'
/**
* Filter builds to be returned. See https://google.aip.dev/160 for more
* details.
*/
// const filter = 'abc123'
/**
* Field to sort by. See https://google.aip.dev/132#ordering for more details.
*/
// const orderBy = 'abc123'
// Imports the Deploy library
const { CloudDeployClient } = require ( ' @google-cloud/deploy ' ). v1 ;
// Instantiates a client
const deployClient = new CloudDeployClient ();
async function listDeliveryPipelines () {
// Construct request
const request = {
parent ,
};
// Run request
const iterable = await deployClient . listDeliveryPipelinesAsync ( request );
for await ( const response of iterable ) {
console . log ( response );
}
}
listDeliveryPipelines ();
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-deploy on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
