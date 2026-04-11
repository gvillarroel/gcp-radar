---
title: "Authentication \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Authentication
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Authentication
  title: "Authentication \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Authentication
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AuthenticationRule
JSON representation
OAuthRequirements
JSON representation
Authentication defines the authentication configuration for API methods provided by an API service.
Example:
name: calendar.googleapis.com
authentication:
providers:
- id: google_calendar_auth
jwksUri: https://www.googleapis.com/oauth2/v1/certs
issuer: https://securetoken.google.com
rules:
- selector: "*"
requirements:
providerId: google_calendar_auth
- selector: google.calendar.Delegate
oauth:
canonicalScopes: https://www.googleapis.com/auth/calendar.read
JSON representation
{
"rules" : [
{
object ( AuthenticationRule )
}
] ,
"providers" : [
{
object ( AuthProvider )
}
]
}
Fields
rules[]
object ( AuthenticationRule )
A list of authentication rules that apply to individual API methods.
NOTE: All service configuration rules follow "last one wins" order.
providers[]
object ( AuthProvider )
Defines a set of authentication providers that a service supports.
AuthenticationRule
Authentication rules for the service.
By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request.
If a method doesn't have any auth requirements, request credentials will be ignored.
JSON representation
{
"selector" : string ,
"oauth" : {
object ( OAuthRequirements )
} ,
"allowWithoutCredential" : boolean ,
"requirements" : [
{
object ( AuthRequirement )
}
]
}
Fields
selector
string
Selects the methods to which this rule applies.
Refer to selector for syntax details.
oauth
object ( OAuthRequirements )
The requirements for OAuth credentials.
allowWithoutCredential
boolean
If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests.
requirements[]
object ( AuthRequirement )
Requirements for additional authentication providers.
OAuthRequirements
OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf.
OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means.
In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs.
When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice.
Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
JSON representation
{
"canonicalScopes" : string
}
Fields
canonicalScopes
string
The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted.
Example:
canonicalScopes: https://www.googleapis.com/auth/calendar,
https://www.googleapis.com/auth/calendar.read
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
