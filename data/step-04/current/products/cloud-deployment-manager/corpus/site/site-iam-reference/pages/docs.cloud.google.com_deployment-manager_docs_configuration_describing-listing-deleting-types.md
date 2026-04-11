---
title: "Describing, listing, and deleting types \_|\_ Cloud Deployment Manager \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types
  title: "Describing, listing, and deleting types \_|\_ Cloud Deployment Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Describing, listing, and deleting types
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to describe, list, and delete types from your project.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Set up v2beta API access if you want to use the API examples in this guide.
Describing Type Providers
A type provider
is an API that has been integrated with Deployment Manager as a type. You can describe a single type provider, get a list of all type providers, or get a list of all types provided by a type provider.
Describing a single type provider
You can describe a type provider to get information such as the descriptor
document URL and advanced API options that have been set for this API.
See the list of default Google Cloud type providers .
gcloud
Run the type-providers describe command to describe a type provider.
gcloud beta deployment-manager type-providers describe PROVIDER_NAME --project PROJECT_ID
For example, use this command to describe the Pub/Sub type
provider:
gcloud beta deployment - manager type - providers describe pubsub - v1 -- project gcp - types
API
Make a GET request to the following URI:
https://www.googleapis.com/deploymentmanager/v2beta/projects/ [PROJECT_ID] /global/typeProviders/ [PROVIDER_NAME]
For example, use this URI for the Pub/Sub type provider:
https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/pubsub-v1
Getting a list of types provided by a type provider
A type provider exposes all resources of the underlying API as base types. You
can get a list of base types provided by a type provider.
gcloud
To get a list of base types provided by a type provider:
gcloud beta deployment - manager types list --provider [TYPE_PROVIDER] --project [PROJECT_ID]
For example, to get a list of base types in the Compute Engine
type provider, run this command:
gcloud beta deployment-manager types list --provider compute-v1 --project gcp-types
API
Make a GET request to the following URI:
GET https : // www . googleapis . com / deploymentmanager / v2beta / projects / [ PROJECT_ID ] / global / typeProviders / [ PROVIDER_NAME ] / types
For example, for a list of types in the Compute Engine type
provider, use this URI:
GET https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/compute-v1/types
Listing type providers
You can get a list of your type providers using the gcloud CLI, or
the API.
gcloud
To list your type providers, make a type-providers list request:
gcloud beta deployment - manager type - providers list
API
In the API, make a GET request to the global type providers list:
GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT_ID ]/ global / typeProviders
For more information, see the documentation for the
list method.
Describing composite types
A composite type is a set of templates that have been permanently added to
Deployment Manager as a type. You can describe a single composite type or get a
list of composite types available to the project.
Describing a single composite type
You can describe a single composite type to get information about the type.
gcloud
Run the types describe command to describe a type:
gcloud beta deployment - manager types describe [ COMPOSITE_TYPE_NAME ] --provider composite
API
Make a GET request to the following URI:
https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT_ID ]/ global / compositeTypes /[ COMPOSITE_TYPE_NAME ]
Listing composite types
You can get a list of your composite types using the gcloud CLI, or
the API.
gcloud
To list your composite types, make a types list request:
gcloud beta deployment - manager types list -- provider composite
API
In the API, make a GET request to the global types list:
GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT_ID ]/ global / types
For more information, see the documentation for the
list method.
Deleting a type provider
gcloud
To delete a type provider, make a type-providers delete request. For example:
gcloud beta deployment - manager type - providers delete [ TYPE_PROVIDER ]
API
In the API, make a DELETE request to the type provider you want to delete:
DELETE https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT_ID ]/ global / typeProviders /[ TYPE_PROVIDER ]
For more information, see the documentation for the
delete method.
Deleting a composite type
gcloud
To delete a composite type, make a types delete request. For example:
gcloud beta deployment - manager types delete [ COMPOSITE_TYPE ]
API
In the API, make a DELETE request to the type you want to delete:
DELETE https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT_ID ]/ global / compositeTypes /[ COMPOSITE_TYPE ]
For more information, see the documentation for the
delete method.
What's next
Learn how to use a type provider .
Read about creating a configuration .
Create a deployment .
Learn how to create a type provider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
