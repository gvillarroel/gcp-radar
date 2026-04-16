---
title: "Introduction to API products \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product
  title: "Introduction to API products \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Introduction to API products
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
The following sections introduce you to API products and related concepts such as quotas and
API keys.
What is an API product?
As an API provider, you create API products to bundle your APIs and make them available to app
developers for consumption. You can think of API products as your product line.
Specifically, an API product bundles together one or more operations. An operation specifies
an API proxy and resource paths that can be accessed on that proxy. An operation can also
limit access by HTTP methods and by quota.
Note: See also this Apigee Community article:
Making
sense of API Product configuration .
API products are the central mechanism for access control to your APIs. By defining one or more
API products in a developer app, you
can restrict access to proxies with an API key. In Apigee, API keys are
provisioned, not for APIs themselves, but for API products. In other words, API keys are
provisioned for bundles of operations that define a product line or specific service plan.
Common use cases
You can create multiple API products that contain operations to address specific use cases.
For example, you can create an API product that bundles a number of operations that contain
mapping resources to enable developers to easily integrate maps into their applications.
In addition, you can use API products to define pricing levels based on criteria such as:
The number of requests:
Premium: Unlimited requests per day
Basic: Up to 1000 requests per day
Free: Up to 100 requests per day
Or level of access:
Premium: Read, write, update and delete
Basic: Read and update
Free: Read-only
Or any combination of the above:
Extra Premium: Read and write unlimited times per day
Premium: Read and write up to 1000 requests per day
Basic: Read and write access up to 100 times per day
Free: Read up to 1000 times per day
Free: Read-only access limited to 100 requests per day
Note: Apigee recommends that you maintain a one-to-one
relationship between your OpenAPI Specifications,
API proxies, and API products.
Requirements
Important: These requirements apply to API products created in
Pay-as-you-go only.
API products that are part of Pay-as-you-go must include either:
extensible proxies built with flow hooks, or
extensible policies such as the VerifyAPIKey policy or OAuthv2 policy
Operations
An operation is a group of attributes that restrict access to one or more API proxies based
on criteria such as resource path, HTTP method, and quota. An operation includes these attributes:
Attribute
Required?
Description
API proxy
Required
Each operation group must specify an API proxy. Only one proxy is allowed per operation
group.
Remote Service
Depends
Required only if you install and plan to use Apigee Adapter for Envoy.
Resource path
Required
Each operation group must specify one or more resource paths. Resource paths in an operation
restrict access to specific resources on an API proxy. (A resource path is the part of
an API proxy request URL that comes after the proxy basepath.)
HTTP method
Optional
You can also restrict access to a proxy by HTTP method. For example, if you specify GET
and POST methods for an operation group, then only HTTP GET and
POST requests can access the proxy for the specified resource path. If no method
is specified, then all methods are allowed.
Quota
Optional
You can specify a quota for the operation group. The quota specified in an operation group
takes precedence over an API product-level quota, if specified.
Custom attributes
Optional
Custom attributes are useful for metrics, monitoring, or cases where you want to store
extra information with an API product that can be accessed or retrieved later. Custom
attributes associated with an operation exist in addition to any API product-level custom
attributes and can be accessed in the runtime as flow variables with the prefix
apiproduct.operation.attributes .
API keys
When you register a developer's app in your organization, the app must be associated with at
least one API product. As a result of pairing an app with one or more API products, Apigee
assigns the app a unique consumer key. See also
Controlling access
to your APIs by registering apps .
Note: Apps with multiple credentials are not supported by the integrated
portal.
The consumer key or access token act as request credentials. The app developer embeds the
consumer key into the app, so that when the app makes a request to an API hosted by Apigee,
the app passes the consumer key in the request in one of the following ways:
When the API uses API key verification, the app must pass the consumer key directly.
When the API uses OAuth Token verification, the app must pass a token which has been derived
from the consumer key.
API key enforcement doesn't happen automatically. Whether using the consumer key or OAuth tokens
as request credentials, the API proxy validates the request credentials in your API proxies
by including a VerifyAPIKey policy or a VerifyAccessToken policy configuration (see
OAuthv2 policy ) in the appropriate flow. If you do not include a credential enforcement
policy in your API Proxy, any caller can invoke your APIs.
To verify the credentials passed in the request, Apigee performs the following steps:
Get the credentials that are passed with the request. In the case of OAuth token verification,
Apigee verifies that the token is not expired, and then looks up the consumer key that was used
to generate the token.
Retrieve the list of API products to which the consumer key has been associated.
Confirm that the current API Proxy is included in the API Product, if the current resource path
(URL path) is enabled on the API Product and, if included in the product, that the request uses
a specified HTTP verb.
Verify that the quota, if specified, has not been exceeded.
Verify that the consumer key is not expired or revoked, check that the app is not revoked,
and check that the app developer is active.
If all of the above checks pass, the credential verification succeeds.
Bottom line, Apigee automatically generates consumer keys, but API publishers have to enforce
key checking in API proxies by using appropriate policies.
Key approval
By default, all requests to obtain a key to access an API product from an app are automatically
approved. Alternatively, you can configure the API product so that you must approve keys manually.
The setting for this is described in
Managing API products .
In this case, you will have to approve key requests from any app that adds the API product. For
more information, see
Controlling access to your APIs by registering apps .
Quotas
Quotas can protect your backend servers from high traffic variances and differentiate your
product line. For example, you can bundle resources with a high quota as a premium product,
and use the same bundle with a lower quota as a basic product. Quotas can help protect your
servers from being overwhelmed if a product is popular and receives a large number of requests
in a short period of time.
You can specify a quota that applies to all API proxies included with the API product, or
specify operation-level quotas. A quota specified in an operation takes precedence over a
quota set at the API product level.
Setting quota limits on an API product does not
automatically enforce quotas. It's simply a default limit that can be referenced in quota policies.
Here are some advantages of setting a quota on the product for quota policies to reference:
Use a Quota policy to apply a uniform setting across all API proxies in an API product.
If you change the API product's quota settings at runtime, Quota policies automatically
reference the updated quota settings.
For more information, see the following:
Quota policy
How
do the quota settings on an API product interact with quota policies in an API proxy? .
OAuth scopes
You can define OAuth scopes as a comma-separated list that must be present in access tokens
associated with the product. For more information about using scopes with Apigee OAuth
policies, see Working with
OAuth2 scopes .
Access levels
When defining an API product, you can set the following access levels:
Access Level
Description
Public
API products that are available to all developers. You can add them to integrated or
Drupal-based developer portals.
Private or Internal only
API products that are designed for private or internal use.
Note: There is no functional difference between Private
and Internal only access levels. Choose the label that best describes the
API product's intended audience.
For the integrated portal, you can add Private or Internal only
API products and make them available to app developers, as required.
For Drupal-based developer portals, you can manage access to Private or
Internal only API products on your developer portal, as described in the following
sections:
For Drupal 10 developer portals, you can configure access to Private or
Internal only API products on your developer portal, as described in
Configure
access permissions to API products .
For Drupal 7 developer portals, you cannot add Private or Internal only API products to
your developer portal.
To make Private or Internal only API products available to app
developers, you must add them manually to a registered app from the Apigee UI or API,
as described in Controlling access to your APIs by registering apps .
Once added, the developer sees the API product associated with the app in your portal,
as described in
Managing the API products in an app .
If the app developer
disables
access to an API product that is Private or Internal only ,
the API product is removed from the app and must be re-added manually by the portal
administrator.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
