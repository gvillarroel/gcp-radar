---
title: "Set up data source access control \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control
  title: "Set up data source access control \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Set up data source access control
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This feature is a Preview offering, subject to the "Pre-GA Offerings Terms"
of the GCP Service Specific Terms .
Pre-GA products and features may have limited support, and
changes to pre-GA products and features may not be compatible with other pre-GA
versions. For more information, see the
launch stage descriptions .
Further, by using this feature, you agree to the
Generative AI Preview terms and conditions
("Preview Terms"). For this feature, you can process personal data as outlined in the
Cloud Data Processing Addendum ,
subject to applicable restrictions and obligations in the Agreement (as defined in the Preview Terms).
This page describes how to enforce data source access control for search apps in
Vertex AI Search.
Access control for your data sources in Vertex AI Search limits the data
that users can view in your search app's results. Google uses your identity
provider to identify the end user performing a search and determine if they
have access to the documents that are returned as results.
For example, say that employees at your company search across Confluence
documents using your search app. However, you need to make sure they can't view
content through the app that they aren't allowed to access. If you have set up a
workforce pool in Google Cloud for your organization's identity provider, then
you can also specify that workforce pool in Vertex AI Search. Now, if an
employee uses your app, they get search results only for documents that their
account already has access to in Confluence.
About data source access control
Turning on access control is a one-time procedure.
Access control is available for Cloud Storage, BigQuery,
Google Drive, and all third-party data sources.
To turn on data source access control for Vertex AI Search, you must have
your organization's identity provider configured in Google Cloud. The following
authentication frameworks are supported:
Google Identity:
Case 1: If you use Google Identity, then all user identities and user
groups are present and managed through Google Cloud. For more information
about Google Identity, see the Google Identity
documentation.
Case 2: You use a third-party identity provider, and you have synced
identities with Google Identity. Your end users use Google Identity to
authenticate before accessing Google resources or Google Workspace.
Case 3: You use a third-party identity provider, and you have synced
identities with Google Identity. However, you are still using your
existing third-party identity provider to perform the authentication. You
have configured SSO with Google Identity such that your users begin their
sign in using Google Identity and then get directed to your third-party
identity provider. (You might have already done this sync when setting up
other Google Cloud resources or Google Workspace.)
Third-party identity provider federation: If you use an external identity
provider—for example, Microsoft Entra ID, Okta, or Ping, but don't want to
sync your identities into Google Cloud Identity, then you must set up
Workforce Identity Federation in Google Cloud
before you can turn on data source access control for Vertex AI Search.
If you use
third-party connectors , the
google.subject attribute must map to the email address field in the
external identity provider. The following are example
google.subject and google.groups
attribute mappings for commonly used identity providers:
Microsoft Entra ID with OIDC protocol
google.subject=assertion.email
google.groups=assertion.groups
Microsoft Entra ID with SAML protocol
google.subject=assertion.attributes['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'][0]
google.groups=assertion.attributes['http://schemas.microsoft.com/ws/2008/06/identity/claims/groups']
Okta with OIDC protocol
google.subject=assertion.email
google.groups=assertion.groups
Okta with SAML protocol
google.subject=assertion.subject
google.groups=assertion.attributes['groups']
Limitations
Access control has the following limitations:
3000 readers are allowed per document. Each principal counts as a reader,
where a principal can be a group or an individual user.
You can select one identity provider per Vertex AI Search-supported
location.
To set a data source as access-controlled, you must select this setting during
data store creation. You can't turn this setting on or off for an existing
data store.
The Data > Documents tab in the console doesn't show data for
access-controlled data sources because this data should only be visible to
users that have view access.
To preview UI results for search apps that use third-party access
control, you must sign in to the federated console.
See Preview results for access controlled apps .
Before you begin
This procedure assumes you have set up an identity provider in your
Google Cloud project.
Google Identity : If you use Google Identity, you can proceed to the
Connect to your identity provider procedure.
Third-party identity provider : Make sure you have set up a workforce
identity pool for your third-party identity provider. Verify that you have
specified subject and group attribute mappings when setting up workforce pool.
For information about attribute mappings, see Attribute
mappings in the IAM documentation. For
more information about workforce identity pools, see Manage workforce
identity pool providers in the IAM
documentation.
Connect to your identity provider
To specify an identity provider for Vertex AI Search and turn on data
source access control, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Go to the Settings > Authentication page.
Click the edit icon edit for the
location that you want to update.
Select your identity provider in the Add identity provider dialog. If
you select a third party identity provider, also select the workforce pool
that applies for your data sources.
Click Save changes .
Configure a data source with access control
To apply access control to a data source, use the following steps depending on
the kind of data source you're setting up:
Third-party data sources: No additional configuration is required when you
create your app. Skip to Preview results for apps with third-party access
control
Google Drive: No additional configuration is required when you
create your app.
Unstructured data from Cloud Storage
Structured data from Cloud Storage
Unstructured data from BigQuery
Structured data from BigQuery
Unstructured data from Cloud Storage
When setting up a data store for unstructured data from
Cloud Storage, you need to also upload ACL metadata and set the data
store as access controlled:
When preparing your data, include ACL information in your metadata using the
acl_info field. For example:
{
"id" : "<your-id>" ,
"jsonData" : "<JSON string>" ,
"content" : {
"mimeType" : "<application/pdf or text/html>" ,
"uri" : "gs://<your-gcs-bucket>/directory/filename.pdf"
},
"acl_info" : {
"readers" : [
{
"principals" : [
{ "group_id" : "group_1" },
{ "user_id" : "user_1" }
]
}
]
}
}
For more information about unstructured data with metadata, see the
Unstructured data section of Prepare data for
ingesting .
When following the steps for data store creation in Create a search data
store , you can enable access control by doing the
following in either the console or using the API:
Console : When creating a data store, select This data store contains
access control information during data store creation.
API : When creating data store, include the flag "aclEnabled": "true"
in your JSON payload.
When following the steps for data import in Create a search data
store , make sure to do the following:
Upload your metadata with ACL information from the same bucket as your
unstructured data
If using the API, set GcsSource.dataSchema to
document
Structured data from Cloud Storage
When setting up a data store for structured data from
Cloud Storage, you need to also upload ACL metadata and set the data
store as access controlled:
When preparing your data, include ACL information in your metadata using the
acl_info field. For example:
{
"id" : "<your-id>" ,
"jsonData" : "<JSON string>" ,
"acl_info" : {
"readers" : [
{
"principals" : [
{ "group_id" : "group_1" },
{ "user_id" : "user_1" }
]
}
]
}
}
When following the steps for data store creation in Create a search data
store , you can enable access control by doing the
following in either the console or using the API:
Console : When creating a data store, select This data store contains
access control information during data store creation.
API : When creating data store, include the flag "aclEnabled": "true"
in your JSON payload.
When following the steps for data import in Create a search data
store , make sure to do the following:
Upload your metadata with ACL information from the same bucket as your
unstructured data
If using the API, set GcsSource.dataSchema to document
Unstructured data from BigQuery
When setting up a data store for unstructured data from BigQuery,
you need to set the data store as access controlled and provide ACL metadata
using a predefined schema for Vertex AI Search:
When preparing your data, specify the following schema. Don't use a custom
schema.
[
{
"name" : "id" ,
"mode" : "REQUIRED" ,
"type" : "STRING" ,
"fields" : []
},
{
"name" : "jsonData" ,
"mode" : "NULLABLE" ,
"type" : "STRING" ,
"fields" : []
},
{
"name" : "content" ,
"type" : "RECORD" ,
"mode" : "NULLABLE" ,
"fields" : [
{
"name" : "mimeType" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
},
{
"name" : "uri" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
}
]
}
{
"name" : "acl_info" ,
"type" : "RECORD" ,
"mode" : "NULLABLE" ,
"fields" : [
{
"name" : "readers" ,
"type" : "RECORD" ,
"mode" : "REPEATED" ,
"fields" : [
{
"name" : "principals" ,
"type" : "RECORD" ,
"mode" : "REPEATED" ,
"fields" : [
{
"name" : "user_id" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
},
{
"name" : "group_id" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
}
]
}
]
}
]
}
]
Include your ACL metadata as a column in your BigQuery table.
When following the steps in Create a search data
store , enable access control in either the console or
using the API:
Console : When creating a data store, select This data store contains
access control information during data store creation.
API : When creating data store, include the flag "aclEnabled": "true"
in your JSON payload.
When following the steps for data import in Create a search data
store , if using the API, set
BigQuerySource.dataSchema to document .
Structured data from BigQuery
When setting up a data store for structured data from BigQuery,
you need to set the data store as access controlled and provide ACL metadata
using a predefined schema for Vertex AI Search:
When preparing your data, specify the following schema. Don't use a custom
schema.
[
{
"name" : "id" ,
"mode" : "REQUIRED" ,
"type" : "STRING" ,
"fields" : []
},
{
"name" : "jsonData" ,
"mode" : "NULLABLE" ,
"type" : "STRING" ,
"fields" : []
},
{
"name" : "acl_info" ,
"type" : "RECORD" ,
"mode" : "NULLABLE" ,
"fields" : [
{
"name" : "readers" ,
"type" : "RECORD" ,
"mode" : "REPEATED" ,
"fields" : [
{
"name" : "principals" ,
"type" : "RECORD" ,
"mode" : "REPEATED" ,
"fields" : [
{
"name" : "user_id" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
},
{
"name" : "group_id" ,
"type" : "STRING" ,
"mode" : "NULLABLE"
}
]
}
]
}
]
}
]
Include your ACL metadata as a column in your BigQuery table.
When following the steps in Create a search data
store , enable access control in either the console or
using the API:
Console : When creating a data store, select This data store contains
access control information during data store creation.
API : When creating data store, include the flag "aclEnabled": "true"
in your JSON payload.
When following the steps for data import in Create a search
data store , make sure to do the following:
If using the console, then when specifying the kind of data you're
uploading, select JSONL for structured data with metadata
If using the API, set BigQuerySource.dataSchema to
document
Preview results in the Workforce Identity Federation console
To preview results for apps with third-party access control in the
Google Cloud console, you must sign in with your organization's credentials.
To preview UI results, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the search app whose results you want to preview.
Go to the Preview page.
Click Preview with federated identity to go to the
Workforce Identity Federation console.
Enter your workforce pool provider and organization's credentials.
Preview results for your app on the Preview page that appears.
For more information about previewing your search results, see
Get search results .
For more information about the Workforce Identity Federation console, see
About the console (federated) .
Grant search permissions to your users
Caution: Previously, Google recommended granting the Discovery Engine Viewer
role. This role can grant broader permissions to features that users might not
need to access. The Discovery Engine Viewer role is suitable for initial
testing, but Google recommends that you use
custom Identity and Access Management (IAM) roles for production usage.
To give your users the ability to search access-controlled data using your app,
you need to grant access to users in your domain or workforce pool. Google
recommends that you grant a custom IAM role to your user group.
Google Identity : If you use Google Identity, then Google recommends that
you create a Google group that
includes all employees that need to search. If you're a Google Workspace
administrator, you can include all users in an organization in a Google group
by following the steps in Add all your organization's users to a
group .
Third-party identity provider : If you use an external identity provider,
for example Okta or Microsoft Entra ID, then add everyone in your workforce
pool to a single group.
Google recommends that you create a custom IAM role to grant to
your user group, using the following permissions:
discoveryengine.answers.get
discoveryengine.servingConfigs.answer
discoveryengine.servingConfigs.search
discoveryengine.sessions.get
discoveryengine.widgetConfigs.get
For more information about permissions for Vertex AI Search resources using
Identity and Access Management (IAM), see
Access control with IAM .
For more information about custom roles, see the Custom roles in
the IAM documentation.
Authorize the search widget
If you want to deploy a search widget for an access-controlled app, follow these
steps:
Grant the Discovery Engine Viewer role to users in your domain or workforce
pool who need to make search API calls.
Generate authorization tokens to pass to your widget:
For Google Identity: Generate OAuth 2.0 access tokens.
For Workforce Identity Federation: Follow the steps in
Obtain short-lived tokens for
Workforce Identity Federation to get your token.
Follow the steps in Add a widget with an authorization token
to pass the token to your widget.
What's next
Get search results .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
