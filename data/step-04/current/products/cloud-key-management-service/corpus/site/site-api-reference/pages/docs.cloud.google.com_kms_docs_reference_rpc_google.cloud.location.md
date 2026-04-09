---
title: "Package google.cloud.location \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.location
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.location
  title: "Package google.cloud.location \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Package google.cloud.location | Cloud Key Management Service | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Cloud KMS
All APIs & references
API client libraries
PKCS #11 library
Overview
Use OpenSSL
Apache TLS termination
NGINX TLS offload
Use pkcs11-tool
Sign Windows artifacts with Jsign
Windows CNG Provider
Overview
Signing Windows artifacts
Permissions and roles
Cloud EKM error reference
Overview
KMS REST reference
Overview
v1
REST Resources
folders
Overview
getAutokeyConfig
getKajPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
organizations
Overview
getKajPolicyConfig
updateKajPolicyConfig
projects
Overview
getAutokeyConfig
getKajPolicyConfig
showEffectiveAutokeyConfig
showEffectiveKeyAccessJustificationsEnrollmentConfig
showEffectiveKeyAccessJustificationsPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
projects.locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects.locations.ekmConfig
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects.locations.ekmConnections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects.locations.keyHandles
Overview
create
get
list
projects.locations.keyRings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.keyRings.cryptoKeys
Overview
create
decrypt
delete
encrypt
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
updatePrimaryVersion
projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
Overview
asymmetricDecrypt
asymmetricSign
create
decapsulate
delete
destroy
get
getPublicKey
import
list
macSign
macVerify
patch
rawDecrypt
rawEncrypt
restore
projects.locations.keyRings.importJobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.operations
Overview
get
projects.locations.retiredResources
Overview
get
list
projects.locations.singleTenantHsmInstances
Overview
create
get
list
projects.locations.singleTenantHsmInstances.proposals
Overview
approve
create
delete
execute
get
list
Types
AutokeyConfig
CryptoKeyVersionAlgorithm
CryptoKeyVersionView
EkmConfig
GetPolicyOptions
KeyAccessJustificationsPolicyConfig
KeyOperationAttestation
Location
Policy
ProtectionLevel
TestIamPermissionsResponse
KMS Inventory REST reference
Overview
v1
REST Resources
organizations.protectedResources
Overview
search
projects.cryptoKeys
Overview
list
projects.locations.keyRings.cryptoKeys
Overview
getProtectedResourcesSummary
KMS RPC reference
Overview
google. cloud. kms. v1
google. cloud. location
google. iam. v1
google. longrunning
google. rpc
google. type
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Index
Locations
GetLocationRequest
ListLocationsRequest
ListLocationsResponse
Location
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Package google. cloud. location
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Index
Locations
GetLocationRequest
ListLocationsRequest
ListLocationsResponse
Location
Index
Locations (interface)
GetLocationRequest (message)
ListLocationsRequest (message)
ListLocationsResponse (message)
Location (message)
Locations
An abstract interface that provides location-related information for a service. Service-specific metadata is provided through the Location.metadata field.
GetLocation
rpc GetLocation( GetLocationRequest ) returns ( Location )
Gets information about a location.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.locations.get
For more information, see the IAM documentation .
ListLocations
rpc ListLocations( ListLocationsRequest ) returns ( ListLocationsResponse )
Lists information about the supported locations for this service. This method can be called in two ways:
List all public locations: Use the path GET /v1/locations .
List project-visible locations: Use the path GET /v1/projects/{project_id}/locations . This may include public locations as well as private or other locations specifically visible to the project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
cloudkms.locations.list
For more information, see the IAM documentation .
GetLocationRequest
The request message for Locations.GetLocation .
Fields
name
string
Resource name for the location.
ListLocationsRequest
The request message for Locations.ListLocations .
Fields
name
string
The resource that owns the locations collection, if applicable.
filter
string
A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo" , and is documented in more detail in AIP-160 .
page_size
int32
The maximum number of results to return. If not set, the service selects a default.
page_token
string
A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
extra_location_types[]
string
Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
ListLocationsResponse
The response message for Locations.ListLocations .
Fields
locations[]
Location
A list of locations that matches the specified filter in the request.
next_page_token
string
The standard List next-page token.
Location
A resource that represents a Google Cloud location.
Fields
name
string
Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"
location_id
string
The canonical id for this location. For example: "us-east1" .
display_name
string
The friendly name for this location, typically a nearby city name. For example, "Tokyo".
labels
map<string, string>
Cross-service attributes for the location. For example
{"cloud.googleapis.com/region": "us-east1"}
metadata
Any
Service-specific metadata. For example the available capacity at the given location.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
