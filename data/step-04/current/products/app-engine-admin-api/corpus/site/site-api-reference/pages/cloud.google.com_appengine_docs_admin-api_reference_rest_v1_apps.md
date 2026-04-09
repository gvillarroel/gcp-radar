---
title: "REST Resource: apps \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
url: https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://cloud.google.com/appengine/docs/admin-api/reference/rest
source_metadata:
  url: https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps
  title: "REST Resource: apps \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
REST Resource: apps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Application
JSON representation
UrlDispatchRule
JSON representation
ServingStatus
IdentityAwareProxy
JSON representation
DatabaseType
FeatureSettings
JSON representation
Methods
Resource: Application
An Application resource contains the top-level configuration of an App Engine application.
JSON representation
{
"name" : string ,
"id" : string ,
"dispatchRules" : [
{
object ( UrlDispatchRule )
}
] ,
"authDomain" : string ,
"locationId" : string ,
"codeBucket" : string ,
"defaultCookieExpiration" : string ,
"servingStatus" : enum ( ServingStatus ) ,
"defaultHostname" : string ,
"defaultBucket" : string ,
"iap" : {
object ( IdentityAwareProxy )
} ,
"gcrDomain" : string ,
"databaseType" : enum ( DatabaseType ) ,
"featureSettings" : {
object ( FeatureSettings )
}
}
Fields
name
string
Full path to the Application resource in the API. Example: apps/myapp .
Note: This field is used in responses only. Any value specified here in a request is ignored.
id
string
Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp .
dispatchRules[]
object ( UrlDispatchRule )
HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.
authDomain
string
Google Apps authentication domain that controls which users can access this application.
Defaults to open access for any Google Account.
locationId
string
Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.
Defaults to us-central .
View the list of supported locations .
codeBucket
string
Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.
Note: This field is used in responses only. Any value specified here in a request is ignored.
defaultCookieExpiration
string ( Duration format)
Cookie expiration policy for this application.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
servingStatus
enum ( ServingStatus )
Serving status of this application.
defaultHostname
string
Hostname used to reach this application, as resolved by App Engine.
Note: This field is used in responses only. Any value specified here in a request is ignored.
defaultBucket
string
Google Cloud Storage bucket that can be used by this application to store content.
Note: This field is used in responses only. Any value specified here in a request is ignored.
iap
object ( IdentityAwareProxy )
gcrDomain
string
The Google Container Registry domain used for storing managed build docker images for this application.
databaseType
enum ( DatabaseType )
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
featureSettings
object ( FeatureSettings )
The feature specific settings to be used in the application.
UrlDispatchRule
Rules to match an HTTP request and dispatch that request to a service.
JSON representation
{
"domain" : string ,
"path" : string ,
"service" : string
}
Fields
domain
string
Domain name to match against. The wildcard " * " is supported if specified before a period: " *. ".
Defaults to matching all domains: " * ".
path
string
Pathname within the host. Must start with a " / ". A single " * " can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
service
string
Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default .
ServingStatus
Enums
UNSPECIFIED
Serving status is unspecified.
SERVING
Application is serving.
USER_DISABLED
Application has been disabled by the user.
SYSTEM_DISABLED
Application has been disabled by the system.
IdentityAwareProxy
Identity-Aware Proxy
JSON representation
{
"enabled" : boolean ,
"oauth2ClientId" : string ,
"oauth2ClientSecret" : string ,
"oauth2ClientSecretSha256" : string
}
Fields
enabled
boolean
Whether the serving infrastructure will authenticate and authorize all incoming requests.
If true, the oauth2ClientId and oauth2ClientSecret fields must be non-empty.
oauth2ClientId
string
OAuth2 client ID to use for the authentication flow.
oauth2ClientSecret
string
OAuth2 client secret to use for the authentication flow.
For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.
@InputOnly
oauth2ClientSecretSha256
string
Hex-encoded SHA-256 hash of the client secret.
Note: This field is used in responses only. Any value specified here in a request is ignored.
DatabaseType
Enums
DATABASE_TYPE_UNSPECIFIED
Database type is unspecified.
CLOUD_DATASTORE
Cloud Datastore
CLOUD_FIRESTORE
Cloud Firestore Native
CLOUD_DATASTORE_COMPATIBILITY
Cloud Firestore in Datastore Mode
FeatureSettings
The feature specific settings to be used in the application. These define behaviors that are user configurable.
JSON representation
{
"splitHealthChecks" : boolean ,
"useContainerOptimizedOs" : boolean
}
Fields
splitHealthChecks
boolean
Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to 'readinessCheck' and 'livenessCheck' values instead of 'healthCheck' ones. Once the legacy 'healthCheck' behavior is deprecated, and this value is always true, this setting can be removed.
useContainerOptimizedOs
boolean
If true, use Container-Optimized OS base image for VMs, rather than a base Debian image.
Methods
create
Creates an App Engine application for a Google Cloud Platform project.
get
Gets information about an application.
patch
Updates the specified Application resource.
repair
Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
