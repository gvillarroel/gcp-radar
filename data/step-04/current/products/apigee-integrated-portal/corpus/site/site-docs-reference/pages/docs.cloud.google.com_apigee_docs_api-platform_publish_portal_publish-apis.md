---
title: "Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis
  title: "Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Publishing your APIs
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Publish APIs to your portal to make them available for consumption by app
developers, as described in the following sections.
Overview of API publishing
The process of publishing APIs to your portal is a two-step process:
Select the API product that you want to publish to your portal.
Render API reference documentation from your OpenAPI document, AsyncAPI document,
or GraphQL schema to enable app developers to learn about your APIs. For
more information, see
About API documentation .
What is published to the portal?
When you publish an API, the following updates are made to your portal
automatically:
API reference documentation. The interface provided depends on
whether you publish your API using an OpenAPI document, AsyncAPI document or GraphQL schema.
See:
SmartDocs (OpenAPI)
GraphQL Explorer
AsyncAPI
A link to the API reference page is added to the APIs page
The APIs page (included with the
sample portal ) provides a list of all APIs published to your portal,
listed in alphabetical order, with links to the respective API reference
documentation for more information. Optionally, you can customize the
following:
Image displayed for each API card
Categories used for tagging APIs to enable developers to discover
related APIs on the APIs page
Note: You cannot edit the contents of this page
directly; it does not appear in the list of pages in your portal. You can
edit the styling of the page when
customizing your theme .
SmartDocs (OpenAPI)
When you publish an API using an OpenAPI document, the SmartDocs API reference
documentation is added to your portal.
Note: Google Cloud console supports OpenAPI Specification 3.0 and 2.0
when you generate interactive API reference documentation using SmartDocs on
your portal (described below), though a
subset of features are
not yet supported. Remote references in OpenAPI documents are not supported
by SmartDocs.
Developers can review your SmartDocs API reference documentation and use the
Try this API panel to make an API request and view the output.
Try this API works with unsecured endpoints or secured endpoints using
Basic, API Key, or OAuth Authentication, based on the security method defined
in your OpenAPI document. For OAuth, the following flows are supported:
authorization code, password, and client credentials.
Note: Ensure that your API proxy is configured to support making
requests from the Try this API panel, as described in
Configuring your API proxy to support the
Try this API panel .
Click fullscreen Fullscreen
to expand the Try this API panel. The expanded panel lets you view the
curl call and code samples in various formats, such as HTTP, Python,
Node.js, and more, as shown below.
Note: The code samples are not intended for use in production environments.
GraphQL Explorer
When you publish an API using a GraphQL schema, the GraphQL Explorer is
added to your portal. The GraphQL Explorer is an interactive playground for
running queries against your API. The explorer is based on
GraphiQL ,
a reference implementation of the GraphQL IDE developed by the GraphQL
Foundation.
Developers can use the GraphQL Explorer to explore the schema-based
interactive documentation, build and run queries, view query results, and
download the schema. To secure access to your API, developers can pass
authorization headers in the Request Headers pane.
For more information about GraphQL, see
graphql.org .
AsyncAPI
When you publish an API using an AsyncAPI document, AsyncAPI documentation
is added to your portal. AsyncAPI is an open standard for defining asynchronous APIs,
such as those used in event-driven architectures with messaging protocols like Kafka or Solace.
Publishing an AsyncAPI document renders documentation that allows developers to browse
the documentation for asynchronous APIs to understand its channels and payloads.
Unlike OpenAPI's "Try this API" feature, interactive testing is not
supported for AsyncAPI documentation in the portal.
About API documentation
Each OpenAPI, AsyncAPI, or GraphQL document serves as the source of truth throughout the
lifecycle of an API. The same document is used at each phase in the API
lifecycle, from development to publishing to monitoring. When you modify a
document, you need to be cognizant of the impact the changes have on your API
through other lifecycle phases, as described in
What happens if I modify a document?
When you publish your API to a portal, you save a version of the OpenAPI, AsyncAPI, or
GraphQL document to render API reference documentation. If you modify the
document, you may decide to update the API reference documentation published to
the portal in order to reflect the latest changes.
About callback URLs
If your apps require a callback URL, such as when using the OAuth 2.0
authorization code grant type (often referred to as three-legged OAuth ),
you can require developers to specify a callback URL when they register their
apps. The callback URL typically specifies the URL of an app that is designated
to receive an authorization code on behalf of the client app. For more
information, see
Implementing the authorization code grant type .
Note:
The callback URL is stored as a custom attribute in the corresponding Google Cloud console
app entity. If you are using a third-party identity provider, you are
responsible for syncing the callback URL metadata.
You can configure whether or not to require a callback URL during app
registration when adding an API to your portal . You can
modify this setting at any time, as described in
Manage the callback URL for an API .
When registering an app, developers must enter a callback URL for all APIs that
require it, as described in
Registering apps .
Configure your API proxy to support the Try this API panel
Note: This section applies to SmartDocs API reference documentation only,
generated using an OpenAPI document.
Before publishing your APIs using an OpenAPI document, you'll need to configure
your API proxy to support making requests on the Try this API panel in the
SmartDocs API reference documentation, as follows:
Add CORS support to your API proxies to enforce client-side cross-origin
requests.
CORS is a standard mechanism that allows JavaScript XMLHttpRequest (XHR) calls
executed in a web page to interact with resources from non-origin domains.
CORS is a commonly implemented solution to the
same-origin policy that is enforced by all browsers.
Update your API proxy configuration if you are using basic authentication or
OAuth 2.0.
The following table summarizes the API proxy configuration requirements to
support the Try this API panel in the SmartDocs API reference documentation
based on the authentication access.
Auth access
Policy configuration requirements
None or API key
Add CORS support to your API proxy, follow the steps described in
Adding CORS support to an API proxy .
Basic authentication
Perform the following steps:
Add CORS support to your API proxy, follow the steps described in
Adding CORS support to an API proxy .
In the Add CORS policy, ensure the
Access-Control-Allow-Headers header includes the
authorization attribute. For example:
<Header name="Access-Control-Allow-Headers">
origin, x-requested-with, accept, content-type, authorization
</Header>
OAuth 2.0
Add CORS support to your API proxy, follow the steps described in
Adding CORS support to an API proxy .
In the Add CORS policy, ensure the
Access-Control-Allow-Headers header includes the
authorization attribute. For example:
<Header name="Access-Control-Allow-Headers">
origin, x-requested-with, accept, content-type, authorization
</Header>
Correct
non-RFC-compliant behavior in your OAuth 2.0 policy. For convenience,
use the
sample OAuth 2.0 solution provided on GitHub or perform the following
steps:
Ensure that the <GrantType> element in the OAuth 2.0
policy is set to request.formparam.grant_type
(form param). For more information, see
<GrantType> .
Ensure that the token_type in the OAuth 2.0 policy is set
to Bearer , and not the default
BearerToken .
Manage APIs
Manage your APIs as described in the following sections.
Explore APIs
Use the console or curl command to view APIs that are in your portal.
To view the API catalog:
Apigee UI
In the Apigee in Cloud console, go to the Distribution > Portals page.
Go to Portals
Click your portal.
Click API Catalog .
Click the APIs tab. A list of the APIs that have
been added to your portal is displayed.
The APIs tab lets you:
View the details of the APIs available on your portal
Add an API to your portal
Edit an API on your portal by performing one or more of the following tasks:
Manage the API documentation
Publish or unpublish an API
Manage the visibility of an API
Manage the callback URL for an API
Manage the image for an API card
Tag an API using categories
Edit the API title and description
Remove an API from your portal
Manage the categories
Quickly identify orphaned APIs whose associated API product has been removed
from Google Cloud console , and re-create the API product or delete the API from your portal
curl
To list APIs using organizations.sites.apidocs/list :
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs" \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
See Pagination notes for instructions on using
pagination in the response payload.
Response payload:
{
"status": "success",
"message": "one page of apidocs returned",
"requestId": "1167960478",
"data": [
{
"siteId": "my-org-myportal",
"title": "Hello New World",
"description": "Simple hello new world example",
"specId": "hellowworld",
"modified": "1695841621000",
"anonAllowed": true,
"imageUrl": "/files/camper1.jpg?v=1695841491415",
"id": "381054",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello New World"
},
{
"siteId": "my-org-myportal",
"title": "mock-product",
"description": "Mock product",
"specId": "apigee spec",
"modified": "1698956849000",
"anonAllowed": true,
"id": "399638",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db"
],
"published": true,
"apiProductName": "mock-product"
},
{
"siteId": "my-org-myportal",
"title": "Hello World 2",
"description": "Simple hello world example",
"specId": "hello-new-world",
"modified": "1698950207000",
"anonAllowed": true,
"imageUrl": "/files/book-tree.jpg?v=1698165437881",
"id": "399668",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello World 2"
}
],
"nextPageToken": ""
}
Where:
modified: Time the catalog item was last modified in milliseconds since epoch.
For example, 1698165480000 .
id: The ID of the catalog item. For example, 399668 .
Pagination notes:
Page size:
Use pageSize to specify the number of list items to return in one page.
The default is 25, and the maximum is 100. If there are additional pages,
nextPageToken is populated with a token:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs ?pageSize= PAGE_SIZE " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace:
PAGE_SIZE with the number of list items to return in one page.
For example, 10 .
Response payload:
{
"status": "success",
"message": "one page of apidocs returned",
"requestId": "918815495",
"data": [
{
"siteId": "my-org-myportal",
"title": "Hello New World",
"description": "Simple hello new world example",
"specId": "apigee",
"modified": "1699146887000",
"anonAllowed": true,
"imageUrl": "/files/camper1.jpg?v=1695841491415",
"id": "381054",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello New World"
}
],
"nextPageToken": "7zcqrin9l6xhi4nbrb9"
}
Page token:
Use pageToken to retrieve subsequent pages when there are more than one:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs ?pageSize= PAGE_SIZE &pageToken= PAGE_TOKEN " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace:
PAGE_SIZE with the number of list items to return in one page.
For example, 10 .
PAGE_TOKEN with the nextPageToken value.
For example, 7zcqrin9l6xhi4nbrb9 .
Add an API
Note: See Portals limits for current limitations.
To add an API to your portal:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Add an API.
Click + API .
The Add an API dialog displays.
Select the API product that you want to add to your portal.
Configure the API reference documentation content and its visibility
on the portal:
Field
Description
Published
Select Published to publish the API to your portal.
Clear the checkbox if you are not ready to publish the API.
You can change the setting later, as described in
Publish or unpublish an API .
Display title
Update the title of your API that is displayed in the catalog. By
default, the API product name is used. You can change the display
title later, as described in
Edit the display title and description .
Display description
Update the description of your API that is displayed in the
catalog. By default, the API product description is used. You can
change the display description later, as described in
Edit the display title and description .
Require developers to specify a callback URL
Enable if you want to require that app developers specify a
callback URL . You can add or
update the callback URL later, as described in
Manage the callback URL for an API .
API documentation
To use an OpenAPI document:
Select OpenAPI document .
Click Select .
Perform one of the following steps:
Click the Upload tab and upload a file.
Click the URL tab and import a spec
by providing a name and URL from which to import.
Click Select .
To use a GraphQL schema:
Select GraphQL Schema .
Click Select .
Navigate to and select the GraphQL schema.
Specify the Endpoint URL , which is the
GraphQL endpoint URI to be queried by API consumers.
Click Select .
To use an AsyncAPI document:
Select AsyncAPI document .
Click Select .
Navigate to and select the AsyncAPI document.
Click Select .
Alternatively, you can select No documentation and add one
later after the API has been added, as described in
Manage the API documentation .
Note: When importing an OpenAPI document
using a URL, redirects won't be followed.
Visibility
If you have not
enrolled in the Preview release of the audience management feature ,
select one of the following options:
Anonymous users to allow all users to view the API.
Registered users to allow only registered users to
view the API.
If you have
enrolled in the Preview release of the audience management feature ,
select one of the following options:
Public (visible to anyone) to allow all users to view the API.
Authenticated users to allow only registered users to
view the API.
Selected audiences to select the specific audiences that
you want to be able to view the API.
You can manage audience visibility later, as described in
Manage the visibility of an API .
Display image
To display an image on the API card on the APIs page, click
Select image . In the Select image dialog, select an
existing image, upload a new image, or provide the URL of an
external image, and click Select . Preview the API thumbnail
and click Select . You can add an image later, as described
in Manage the image for an API card . When specifying
the URL of an external image, the image won't be uploaded to your
assets; additionally, loading of the image in the integrated portal
will be subject to its availability, which may be blocked or restricted by
content security policies .
Categories
Add the categories that the API will be tagged with to enable
app developers to discover related APIs on the APIs page. To
identify a category:
Select a category from the drop-down list.
Add a new category as described in
Add a category .
The new category is added to the Categories page and made
available when adding or editing other APIs.
Click Save .
curl
To add an API to your portal using
organizations.sites.apidocs.create :
curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": " IMAGE_URL ",
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
TITLE with the display title. For example, Hello World 2 .
DESCRIPTION with the display description. For example,
Simple hello world example .
ANON_TRUE_OR_FALSE with true or false (default), where true
enables anonymous user access. This setting is ignored if you have enrolled in
the Preview release of the audience management feature .
IMAGE_URL with the URL of an external image used for the
catalog item, or a file path for
image files stored in the portal , for example, /files/book-tree.jpg .
When specifying the URL of an external image, the image won't be uploaded to
your assets; additionally,loading of the image in the integrated portal will be
subject to its availability, which may be blocked or restricted by
content security policies .
CALLBACK_TRUE_OR_FALSE with true or false (default), where
true requires a portal user to input a URL when managing the app.
CATEGORY_ID with the ID of the category. For example,
bf6505eb-2a0f-47af-a00a-ded40ac72960 . Separate multiple category IDs with a
comma. Get the category ID with the
list API categories
command.
Note: You must already have categories defined to add them here. See
Add a category and Explore categories
for instructions.
PUBLISHED_TRUE_OR_FALSE with true or false (default), where
true indicates the API is publicly available.
API_PRODUCT with the name of the API product. For example,
Hello World 2 .
Response payload:
{
"status": "success",
"message": "API created",
"requestId": "1662161889",
"data": {
"siteId": "my-org-myportal",
"title": "Hello World 2",
"description": "Simple hello world example",
"modified": "1698948807000",
"anonAllowed": true,
"imageUrl": "/files/book-tree.jpg",
"id": "409405",
"requireCallbackUrl": true,
"categoryIds": [
"88fbfd1d-9300-49f7-bfc2-531ade4c63d4",
"630c4cf9-109a-48b0-98cc-ef4c12ae4474"
],
"published": true,
"apiProductName": "Hello World 2"
}
}
Where:
modified: Time the catalog item was last modified in milliseconds since epoch.
For example, 1698165480000 .
id: The ID of the catalog item. For example, 399668 .
Edit an API
Once you have added an API , use the console or an API call to
make edits.
This section provides a detailed example of the steps to take to modify an
existing API in your portal.
Refer to subsequent sections for specific modification settings.
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Make any desired modifications. See descriptions of the
options in Add an API .
Click Save .
curl
Once you have added an API , use the
organizations.sites.apidocs.update call to make edits.
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
This example walks you through the steps required to change the published
status of your API in your portal from true to false . You can change
more than one setting in one API call if necessary.
Get a list of the APIs in your portal
using organizations.sites.apidocs/list in order to locate the generated
id that uniquely identifies each API:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs" \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
Response payload:
{
"status": "success",
"message": "one page of apidocs returned",
"requestId": "1167960478",
"data": [
{
"siteId": "my-org-myportal",
"title": "Hello New World",
"description": "Simple hello new world example",
"specId": "hellowworld",
"modified": "1695841621000",
"anonAllowed": true,
"imageUrl": "/files/camper1.jpg?v=1695841491415",
"id": "381054",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello New World"
},
{
"siteId": "my-org-myportal",
"title": "mock-product",
"description": "Mock product",
"specId": "apigee spec",
"modified": "1698956849000",
"anonAllowed": true,
"id": "399638",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db"
],
"published": true,
"apiProductName": "mock-product"
},
{
"siteId": "my-org-myportal",
"title": "Hello World 2",
"description": "Simple hello world example",
"specId": "hello-new-world",
"modified": "1698950207000",
"anonAllowed": true,
"imageUrl": "/files/book-tree.jpg?v=1698165437881",
"id": "399668",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello World 2"
}
]
}
Where:
modified: Time the catalog item was last modified in milliseconds since epoch.
For example, 1698165480000 .
id: The ID of the catalog item. For example, 399668 .
Use the organizations.sites.apidocs.get call to return the current values for a
specific API:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
Response payload:
{
"status": "success",
"message": "apidoc returned",
"requestId": "2072952505",
"data": {
"siteId": "my-org-myportal",
"title": "Hello World 2",
"description": "Simple hello world example",
"specId": "hello-new-world",
"modified": "1698950207000",
"anonAllowed": true,
"imageUrl": "/files/book-tree.jpg?v=1698165437881",
"id": "399668",
"categoryIds": [
"e0518597-ece2-4d7d-ba7c-d1793df0f8db",
"61c1014c-89c9-40e6-be3c-69cca3505620"
],
"published": true,
"apiProductName": "Hello World 2"
}
}
Include the mutable values you want to keep in the
organizations.sites.apidocs.update call, and modify the values you want
to change. If you omit a line, the default setting is used. For this
example, change the published setting from true to false :
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": " IMAGE_URL ",
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": false,
"apiProductName": " API_PRODUCT ",
}'
Replace the following:
TITLE with the display title. For example, Hello World 2 .
DESCRIPTION with the display description. For example,
Simple hello world example .
ANON_TRUE_OR_FALSE with true or false (default), where true
enables anonymous user access. This setting is ignored if you have enrolled in
the Preview release of the audience management feature .
IMAGE_URL with the URL of an external image used for the
catalog item, or a file path for
image files stored in the portal , for example, /files/book-tree.jpg .
When specifying the URL of an external image, the image won't be uploaded to
your assets; additionally,loading of the image in the integrated portal will be
subject to its availability, which may be blocked or restricted by
content security policies .
CALLBACK_TRUE_OR_FALSE with true or false (default), where
true requires a portal user to input a URL when managing the app.
CATEGORY_ID with the ID of the category. For example,
bf6505eb-2a0f-47af-a00a-ded40ac72960 . Separate multiple category IDs with a
comma. Get the category ID with the
list API categories
command.
API_PRODUCT with the name of the API product. For example,
Hello World 2 .
Response payload:
{
"status": "success",
"message": "ApiDoc updated",
"requestId": "197181831",
"data": {
"siteId": "my-org-myportal",
"title": "Hello World 2",
"description": "Simple hello world example.",
"modified": "1698884328000",
"anonAllowed": true,
"imageUrl": "/files/book-tree.jpg",
"id": "408567",
"requireCallbackUrl": true,
"categoryIds": [
"88fbfd1d-9300-49f7-bfc2-531ade4c63d4",
"630c4cf9-109a-48b0-98cc-ef4c12ae4474"
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": "Hello World 2"
}
}
Publish or unpublish an API
Publishing is the process of making your APIs available to app developers for consumption.
To publish or unpublish an API on your portal:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Select or clear Published (listed in the catalog)
to publish or unpublish the API on your portal, respectively.
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
Include one of the following in the
update
call:
"published": true, # API is published to your portal
"published": false, # API is not published in your portal
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Manage the visibility of an API
Manage the visibility of an API in your portal by allowing access to:
Public (visible to anyone)
Authenticated users
Selected audiences (if you have
enrolled in the Preview release of the audience management feature )
Note: If you set the visibility to Authenticated users or
Selected audiences , the API won't be indexed by search engines.
To manage the visibility of an API in your portal:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Select the visibility setting.
If you have
enrolled in the Preview release of the audiences feature , select one of the
following options under API visibility :
Public (visible to anyone) to allow all users to view the page.
Authenticated users to allow only registered users to view the page.
Selected audiences to select the specific audiences that you want to
be able to view the page. See
Managing the audiences for your portal .
Otherwise, select one of the following options under Audience :
Anonymous users to allow all users to view the page.
Registered users to allow only registered users to view the page.
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
If you have
enrolled in the Preview release of the audience management feature , use
the console to manage audiences.
If you have not enrolled in the audience management feature, visibility is
managed using anonAllowed .
Include one of the following in the
update
call:
# When not enrolled in the Preview release of the audience management feature:
"anonAllowed": true, # Anonymous users can see the API
"anonAllowed": false, # Only registered users can see the API
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Manage the callback URL for an API
Manage the callback URL for an API. See About callback URLs .
To manage the callback URL for an API:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Select or clear
Require developers to specify a callback URL
to specify that a callback URL is required or not required, respectively.
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
Include one of the following in the
update
call:
"requireCallbackUrl": true, # Portal user is required to input a URL
"requireCallbackUrl": false, # Portal user is not required to input a URL
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Manage the image for an API card
Manage the image that appears with an API card on the APIs page by adding or
changing the current image.
To manage the image for an API card:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Locate and select an image:
Click Select to specify an image.
Click x to remove the image.
When specifying an image, specify either an image with an external URL used
for the catalog item, or a file path for
image files stored in the portal , for example, /files/book-tree.jpg .
When specifying the URL of an external image, the image won't
be uploaded to your assets; additionally, loading of the image in the integrated
portal will be subject to its availability, which may be blocked or restricted by
content security policies .
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
Include the following in the
update
call:
# Omit line for no image file
"imageUrl": " IMAGE_URL " # URL of the external image or name of the image file
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Tag an API using categories
Using categories helps app developers discover related APIs. See also
Manage categories .
To tag an API with categories:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Specify a category.
Select one or more categories from the Categories drop-down list.
See Manage categories if there are no
categories.
Click OK .
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
Include the following in the
update
call:
# Omit line for no categories
"categoryIds": [
" CATEGORY_ID1 ", # A category ID number
" CATEGORY_ID2 " # A category ID number
],
Use the
list categories
command to get the category ID numbers.
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Edit the display title and description
To edit the display title and description:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
Edit the Display title and Display description fields, as required.
Click Save .
curl
Caution: The
organizations.sites.apidocs.update API call resets any
mutable fields to the default values if they are not specified.
Include the following in the
update
call:
"title": " TITLE ", # Display title
"description": " DESCRIPTION ", # Display description
To edit the API:
Use the organizations.sites.apidocs.get call to return the current values:
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Use the organizations.sites.apidocs.update
call to edit the API. Include the mutable values you want to keep and
modify the values you want to change. If you omit a mutable setting, the
default value is used.
curl -X PUT "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"title": " TITLE ",
"description": " DESCRIPTION ",
"anonAllowed": ANON_TRUE_OR_FALSE ,
"imageUrl": IMAGE_URL ,
"requireCallbackUrl": CALLBACK_TRUE_OR_FALSE ,
"categoryIds": [
" CATEGORY_ID1 ",
" CATEGORY_ID2 "
],
"published": PUBLISHED_TRUE_OR_FALSE ,
"apiProductName": " API_PRODUCT ",
}'
See Edit an API for a detailed example of the steps, variables,
and payload returned.
Remove an API
To remove an API from your portal:
Apigee UI
Access the API catalog .
Select the APIs tab, if not already selected.
Delete the API.
Click more_vert More >
delete Delete .
Click Delete to confirm.
curl
To remove an API from your portal using organizations.sites.apidocs.delete :
curl -X DELETE "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC " \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
Response payload:
{
"status":"success",
"message":"Apidoc deleted",
"requestId":"645138256"
}
Manage the API documentation
The following sections describe how to update, download, or remove API
documentation.
Update API documentation
After you publish your API, at any time you can upload a new version of the
OpenAPI, AsyncAPI, or GraphQL document.
To upload a different version of the API documentation:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
For API documentation , select one of the following:
OpenAPI document
AsyncAPI document
GraphQL Schema
Locate the file.
Click Select .
Browse to and select the file.
For GraphQL, specify the Endpoint URL .
Click Select .
Click Save .
curl
To update OpenAPI, AsyncAPI, or GraphQL documentation contents using
organizations.sites.apidocs.updateDocumentation :
OpenAPI
curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC /documentation" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"oasDocumentation": {
"spec":{ "displayName":" DISPLAY_NAME ",
"contents":" CONTENTS "}
}
}'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
DISPLAY_NAME with the display name of the API documentation. For
example, Hello World 2 .
CONTENTS with the base64-encoded string of contents of the API
documentation. Most development environments contain a
base64 conversion utility, or there are
many online conversion tools.
Response payload:
{
"status":"success",
"message":"Api documentation updated",
"requestId":"645138278",
"data": {
"oasDocumentation": {
"spec": {
"displayName": "Hello World 2"
},
"Format": "YAML"
}
}
}
GraphQL
curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC /documentation" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"graphqlDocumentation": {
"schema":{"displayName":" DISPLAY_NAME ",
"contents":" CONTENTS "},
"endpointUri": " ENDPOINT_URI "
}
}'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
DISPLAY_NAME with the display name of the API documentation. For
example, Hello World 2 .
ENDPOINT_URI with the domain name of your endpoint URI. For example,
https://demo.google.com/graphql .
CONTENTS with the base64-encoded string of contents of the API
documentation. Most development environments contain a
base64 conversion utility, or there are
many online conversion tools.
Response payload:
{
" status ":" success " ,
" message ":" Api documentation updated " ,
" requestId ":"645138278" ,
" data ": {
" graphqlDocumentation ": {
" schema ": {
" displayName ": " Hello World 2"
},
" endpointUri ": " https : // demo . google . com / graphql "
}
}
}
AsyncAPI
curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC /documentation" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"asyncApiDocumentation": {
"spec":{ "displayName":" DISPLAY_NAME ",
"contents":" CONTENTS "}
}
}'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
DISPLAY_NAME with the display name of the API documentation. For
example, Hello World 2 .
CONTENTS with the base64-encoded string of contents of the API
documentation. Most development environments contain a
base64 conversion utility, or there are
many online conversion tools.
Response payload:
{
"status":"success",
"message":"Api documentation updated",
"requestId":"645138278",
"data": {
"asyncApiDocumentation": {
"spec": {
"displayName": "Hello World 2"
},
"Format": "YAML"
}
}
}
Note: The contents of the specification or schema is not populated on response.
Use the
organizations.sites.apidocs.getDocumentation
call to retrieve the contents.
API reference documentation is rendered from the document and added to the
APIs page of the live portal.
Download API documentation
After you publish your API, at any time you can download the
OpenAPI, AsyncAPI, or GraphQL reference documentation that is published on your portal.
To download API documentation using
organizations.sites.apidocs.getDocumentation :
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC /documentation" \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
Response payload:
{
"status" : "success" ,
"message" : "Api documentation downloaded" ,
"requestId" : "645138256" ,
"data" : {
"oasDocumentation" :{
"spec" :{
"displayName" : "Hello World 2" ,
"contents" : "c3dhZ2dlcjogJzIuMCcKaW5mbzoKICBkZXNlI ..."
},
"Format" : YAML
}
}
}
Where:
contents: The base64-encoded string of contents of the API documentation.
Tip: Authorized portal users can download API documentation from the
portal:
Navigate to the portal.
Click APIs in the top navigation bar. The APIs page is
displayed.
Click an API card to view the API reference documentation. The API
reference documentation is displayed.
Click Download spec .
Remove API documentation
To remove API documentation:
Apigee UI
Access the API catalog .
Click the APIs tab, if not already selected.
Click in the row of the API that you want to edit.
Click edit Edit .
For API documentation , select No documentation .
Click Save .
curl
To remove API document content using an API, you clear existing settings by
sending an empty request body.
To send an empty request body and clear existing content using
organizations.sites.apidocs.updateDocumentation :
curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apidocs/ API_DOC /documentation" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{}'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
API_DOC with the generated id of the document. For example,
399668 . Use the list API docs command to find this value.
Response payload:
{
"status":"success",
"message":"Api documentation updated",
"requestId":"645138279"
}
Manage categories
Tag an API using categories to enable app developers to discover related
APIs on the APIs page
of the live portal. Add and manage categories, as described in the following
sections.
Explore Categories
Use the console or curl command to view categories.
Apigee UI
Go to the Portals page.
In the Apigee in Cloud console, go to the Distribution > Portals page.
Go to Portals
Click your portal.
Click API catalog .
Click the Categories tab.
The Categories tab in the API catalog displays the list of the categories
that have been defined for your portal
The APIs page lets you
View the categories and the APIs to which they are tagged
Add a category
Edit a category
Delete a category
Manage APIs published to your portal. See Explore APIs .
curl
To list categories using organizations.sites.apicategories.list :
curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apicategories" \
-H "Authorization: Bearer $(gcloud auth print-access-token)"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
Response payload:
{
"data": [
{
"siteId": "my-org-myportal",
"name": "Get Started",
"id": "e0518597-ece2-4d7d-ba7c-d1793df0f8db"
},
{
"siteId": "my-org-myportal",
"name": "Test",
"id": "61c1014c-89c9-40e6-be3c-69cca3505620"
}
],
"status": "success",
"message": "all ApiCategory items returned",
"requestId": "602661435"
}
Where:
id: The ID of the category item. For example, 61c1014c-89c9-40e6-be3c-69cca3505620 .
Add a category
To add a category:
Apigee UI
Access the Categories page .
Add a category.
Click + Category .
Enter the name of your new category.
Optionally, select one or more APIs to tag to the category.
Click Add .
curl
To add a category using organizations.sites.apicategories.create :
curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apicategories" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"name": " CATEGORY_NAME " }'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
CATEGORY_NAME with the name of the category. For example,
demo-backend .
Response payload:
{
"data": {
"siteId": "my-org-myportal",
"name": "demo-backend",
"id": "ed0b6c1d-eb49-419f-8475-9a428ed5b8d1"
},
"status": "success",
"message": "API category created",
"requestId": "295617049"
}
Edit a category
To edit a category:
Apigee UI
Access the Categories page .
Edit a category.
On the row of the category that you want to edit, click
more_vert More >
edit Edit .
Edit the name of the category.
Add or remove API tags.
Click Add .
curl
To edit a category using organizations.sites.apicategories.patch :
curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apicategories/ CATEGORY_ID " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{"name": " CATEGORY_NAME " }'
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
CATEGORY_ID with the ID of the category. For example,
bf6505eb-2a0f-47af-a00a-ded40ac72960 . Get the category ID with the
list API categories
command.
CATEGORY_NAME with the name of the category. For example,
demo-backend .
Response payload:
{
"data": {
"siteId": "my-org-myportal",
"name": "demo-backend-test",
"id": "ed0b6c1d-eb49-419f-8475-9a428ed5b8d1"
},
"status": "success",
"message": "ApiCategory updated",
"requestId": "192211979"
}
Delete a category
When you delete a category, all API tags to that category are also deleted.
To delete a category:
Apigee UI
Access the Categories page .
Delete a category. On the row of the category that you want to edit, click
more_vert More >
delete Delete .
Click Delete to confirm.
curl
To delete a category using organizations.sites.apicategories.delete :
curl -X DELETE "https://apigee.googleapis.com/v1/organizations/ ORG_NAME /sites/ SITE_ID /apicategories/ CATEGORY_ID " \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json"
Replace the following:
ORG_NAME with the name of the organization. For example, my-org .
SITE_ID with the name of the portal, in the form
ORG_NAME-PORTAL_NAME , where ORG_NAME is the name of the
organization and PORTAL_NAME is the portal name converted to
all lowercase and with spaces and dashes removed. For example,
my-org-myportal .
CATEGORY_ID with the ID of the category. For example,
bf6505eb-2a0f-47af-a00a-ded40ac72960 . Get the category ID with the
list API categories
command.
Response payload:
{
"status": "success",
"message": "ApiCategory deleted",
"requestId": "1610396471"
}
Troubleshoot issues with your published APIs
Note: This section applies to SmartDocs API reference documentation only,
generated using an OpenAPI document.
The following sections provide information to help you troubleshoot specific
errors with our published APIs.
Error: Failed to fetch error returned when using Try
this API
When using Try this API , if the TypeError: Failed to fetch error is
returned, consider the following possible causes and resolutions:
For mixed content errors, the error may be caused by a
known swagger-ui issue .
One possible workaround is to make sure that you specify HTTPS before HTTP in
the schemes definition in your OpenAPI document. For example:
schemes:
- https
- http
For Cross-Origin Resource Sharing (CORS) restriction errors, ensure that
CORS is supported for your API proxies.
CORS is a standard mechanism that enables client-side cross-origin requests.
See Configuring your API proxy to support the Try this API panel .
Error: Request header field not allowed
When using Try this API , if you receive a Request header field not allowed
error, similar to the following example, you may need to update the headers
supported in the CORS policy. For example:
field content - type is not allowed by Access - Control - Allow - Headers in preflight
response
In this example, you need to add the content-type header to the
Access-Control-Allow-Headers section in your CORS AssignMessage policy, as
described in
Attaching an Add CORS policy to a new API proxy .
Error: Access denied when calling an API proxy using OAuth 2.0
Google Cloud console 's OAuthV2 policy returns a token response that contains certain
non-RFC-compliant properties. For example, the policy will return a token with
the value BearerToken , instead of the expected RFC-compliant value Bearer .
This invalid token_type response can result in an Access denied error when
using Try this API.
To correct this issue, you can create a JavaScript or AssignMessage policy to
transform the policy output into a compliant format. For more information, see
non-RFC-compliant behavior .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
