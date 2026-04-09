---
title: "REST Resource: projects.locations.authzPolicies \_|\_ Cloud Load Balancing\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1beta1/projects.locations.authzPolicies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/reference/network-security/rest/v1beta1/projects.locations.authzPolicies
  title: "REST Resource: projects.locations.authzPolicies \_|\_ Cloud Load Balancing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.authzPolicies | Cloud Load Balancing | Google Cloud Documentation
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
Load Balancing
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud Load Balancing
All APIs and references
CEL matcher language reference
GARP and RA packet specifications
RE2 specifications for URL maps
Network Security API
Overview
V1
REST Resources
projects.locations
Overview
get
list
projects.locations.authzPolicies
Overview
create
delete
get
list
patch
projects.locations.backendAuthenticationConfigs
Overview
create
delete
get
list
patch
projects.locations.operations
Overview
cancel
delete
get
list
projects.locations.serverTlsPolicies
Overview
create
delete
get
list
patch
Beta
REST Resources
projects. locations. authz Policies
Overview
create
delete
get
list
patch
projects. locations. backend Authentication Configs
Overview
create
delete
get
list
patch
Shared
Types
Operation
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
Resource: AuthzPolicy
Target
LoadBalancingScheme
AuthzRule
From
RequestSource
Principal
PrincipalSelector
StringMatch
IpBlock
RequestResource
TagValueIdSet
To
RequestOperation
HeaderSet
HeaderMatch
AuthzAction
CustomProvider
CloudIap
AuthzExtension
Methods create
delete
get
list
patch
Home
Documentation
Networking
Load Balancing
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. authz Policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: AuthzPolicy
Target
LoadBalancingScheme
AuthzRule
From
RequestSource
Principal
PrincipalSelector
StringMatch
IpBlock
RequestResource
TagValueIdSet
To
RequestOperation
HeaderSet
HeaderMatch
AuthzAction
CustomProvider
CloudIap
AuthzExtension
Methods create
delete
get
list
patch
Resource: AuthzPolicy
JSON representation
Target
JSON representation
LoadBalancingScheme
AuthzRule
JSON representation
From
JSON representation
RequestSource
JSON representation
Principal
JSON representation
PrincipalSelector
StringMatch
JSON representation
IpBlock
JSON representation
RequestResource
JSON representation
TagValueIdSet
JSON representation
To
JSON representation
RequestOperation
JSON representation
HeaderSet
JSON representation
HeaderMatch
JSON representation
AuthzAction
CustomProvider
JSON representation
CloudIap
AuthzExtension
JSON representation
Methods
Resource: Authz Policy
AuthzPolicy is a resource that allows to forward traffic to a callout backend designed to scan the traffic for security purposes.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"description" : string ,
"labels" : {
string : string ,
...
} ,
"target" : {
object ( Target )
} ,
"httpRules" : [
{
object ( AuthzRule )
}
] ,
"action" : enum ( AuthzAction ) ,
"customProvider" : {
object ( CustomProvider )
}
}
Fields
name
string
Required. Identifier. Name of the AuthzPolicy resource in the following format: projects/{project}/locations/{location}/authzPolicies/{authzPolicy} .
createTime
string ( Timestamp format)
Output only. The timestamp when the resource was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp when the resource was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
description
string
Optional. A human-readable description of the resource.
labels
map (key: string, value: string)
Optional. Set of labels associated with the AuthzPolicy resource.
The format must comply with the following requirements .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
target
object ( Target )
Required. Specifies the set of resources to which this policy should be applied to.
httpRules[]
object ( AuthzRule )
Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules.
action
enum ( AuthzAction )
Required. Can be one of ALLOW , DENY , CUSTOM .
When the action is CUSTOM , customProvider must be specified.
When the action is ALLOW , only requests matching the policy will be allowed.
When the action is DENY , only requests matching the policy will be denied.
When a request arrives, the policies are evaluated in the following order:
If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
If there are any DENY policies that match the request, the request is denied.
If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request.
customProvider
object ( CustomProvider )
Optional. Required if the action is CUSTOM . Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of cloudIap or authzExtension must be specified.
Target
Specifies the set of targets to which this policy should be applied to.
JSON representation
{
"loadBalancingScheme" : enum ( LoadBalancingScheme ) ,
"resources" : [
string
]
}
Fields
loadBalancingScheme
enum ( LoadBalancingScheme )
Required. All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. Supported values: INTERNAL_MANAGED and EXTERNAL_MANAGED . For more information, refer to Backend services overview .
resources[]
string
Required. A list of references to the Forwarding Rules on which this policy will be applied.
LoadBalancingScheme
Load balancing schemes supported by the AuthzPolicy resource. The valid values are INTERNAL_MANAGED and EXTERNAL_MANAGED . For more information, refer to Backend services overview .
Enums
LOAD_BALANCING_SCHEME_UNSPECIFIED
Default value. Do not use.
INTERNAL_MANAGED
Signifies that this is used for Regional internal or Cross-region internal Application Load Balancing.
EXTERNAL_MANAGED
Signifies that this is used for Global external or Regional external Application Load Balancing.
INTERNAL_SELF_MANAGED
Signifies that this is used for Cloud Service Mesh. Meant for use by CSM GKE controller only.
AuthzRule
Conditions to match against the incoming request.
JSON representation
{
"from" : {
object ( From )
} ,
"to" : {
object ( To )
} ,
"when" : string
}
Fields
from
object ( From )
Optional. Describes properties of a source of a request.
to
object ( To )
Optional. Describes properties of a target of a request.
when
string
Optional. CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.
From
Describes properties of one or more sources of a request.
JSON representation
{
"sources" : [
{
object ( RequestSource )
}
] ,
"notSources" : [
{
object ( RequestSource )
}
]
}
Fields
sources[]
object ( RequestSource )
Optional. Describes the properties of a request's sources. At least one of sources or notSources must be specified. Limited to 1 source. A match occurs when ANY source (in sources or notSources) matches the request. Within a single source, the match follows AND semantics across fields and OR semantics within a single field, i.e. a match occurs when ANY principal matches AND ANY ipBlocks match.
notSources[]
object ( RequestSource )
Optional. Describes the negated properties of request sources. Matches requests from sources that do not match the criteria specified in this field. At least one of sources or notSources must be specified.
RequestSource
Describes the properties of a single source.
JSON representation
{
"principals" : [
{
object ( Principal )
}
] ,
"ipBlocks" : [
{
object ( IpBlock )
}
] ,
"resources" : [
{
object ( RequestResource )
}
]
}
Fields
principals[]
object ( Principal )
Optional. A list of identities derived from the client's certificate. This field will not match on a request unless frontend mutual TLS is enabled for the forwarding rule or Gateway and the client certificate has been successfully validated by mTLS. Each identity is a string whose value is matched against a list of URI SANs, DNS Name SANs, or the common name in the client's certificate. A match happens when any principal matches with the rule. Limited to 50 principals per Authorization Policy for regional internal Application Load Balancers, regional external Application Load Balancers, cross-region internal Application Load Balancers, and Cloud Service Mesh. This field is not supported for global external Application Load Balancers.
ipBlocks[]
object ( IpBlock )
Optional. A list of IP addresses or IP address ranges to match against the source IP address of the request. Limited to 10 ipBlocks per Authorization Policy
resources[]
object ( RequestResource )
Optional. A list of resources to match against the resource of the source VM of a request. Limited to 10 resources per Authorization Policy.
Principal
Describes the properties of a principal to be matched against.
JSON representation
{
"principalSelector" : enum ( PrincipalSelector ) ,
"principal" : {
object ( StringMatch )
}
}
Fields
principalSelector
enum ( PrincipalSelector )
Optional. An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN.
principal
object ( StringMatch )
Required. A non-empty string whose value is matched against the principal value based on the principalSelector. Only exact match can be applied for CLIENT_CERT_URI_SAN, CLIENT_CERT_DNS_NAME_SAN, CLIENT_CERT_COMMON_NAME selectors.
PrincipalSelector
The principal value the principal rule will match against.
Enums
PRINCIPAL_SELECTOR_UNSPECIFIED
Unspecified principal selector. It will be treated as CLIENT_CERT_URI_SAN by default.
CLIENT_CERT_URI_SAN
The principal rule is matched against a list of URI SANs in the validated client's certificate. A match happens when there is any exact URI SAN value match. This is the default principal selector.
CLIENT_CERT_DNS_NAME_SAN
The principal rule is matched against a list of DNS Name SANs in the validated client's certificate. A match happens when there is any exact DNS Name SAN value match. This is only applicable for Application Load Balancers except for classic Global External Application load balancer. CLIENT_CERT_DNS_NAME_SAN is not supported for INTERNAL_SELF_MANAGED load balancing scheme.
CLIENT_CERT_COMMON_NAME
The principal rule is matched against the common name in the client's certificate. Authorization against multiple common names in the client certificate is not supported. Requests with multiple common names in the client certificate will be rejected if CLIENT_CERT_COMMON_NAME is set as the principal selector. A match happens when there is an exact common name value match. This is only applicable for Application Load Balancers except for global external Application Load Balancer and classic Application Load Balancer. CLIENT_CERT_COMMON_NAME is not supported for INTERNAL_SELF_MANAGED load balancing scheme.
StringMatch
Determines how a string value should be matched.
JSON representation
{
"ignoreCase" : boolean ,
// Union field match_pattern can be only one of the following:
"exact" : string ,
"prefix" : string ,
"suffix" : string ,
"contains" : string
// End of list of possible types for union field match_pattern .
}
Fields
ignoreCase
boolean
If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
Union field match_pattern .
match_pattern can be only one of the following:
exact
string
The input string must match exactly the string specified here.
Examples:
abc only matches the value abc .
prefix
string
The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
Examples:
abc matches the value abc.xyz
suffix
string
The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
Examples:
abc matches the value xyz.abc
contains
string
The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
Examples:
abc matches the value xyz.abc.def
IpBlock
Represents a range of IP Addresses.
JSON representation
{
"prefix" : string ,
"length" : integer
}
Fields
prefix
string
Required. The address prefix.
length
integer
Required. The length of the address range.
RequestResource
Describes the properties of a client VM resource accessing the internal application load balancers.
JSON representation
{
"tagValueIdSet" : {
object ( TagValueIdSet )
} ,
"iamServiceAccount" : {
object ( StringMatch )
}
}
Fields
tagValueIdSet
object ( TagValueIdSet )
Optional. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.
iamServiceAccount
object ( StringMatch )
Optional. An IAM service account to match against the source service account of the VM sending the request.
TagValueIdSet
Describes a set of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request.
JSON representation
{
"ids" : [
string
]
}
Fields
ids[]
string ( int64 format)
Required. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match. Limited to 5 ids in the Tag value id set.
To
Describes properties of one or more targets of a request.
JSON representation
{
"operations" : [
{
object ( RequestOperation )
}
] ,
"notOperations" : [
{
object ( RequestOperation )
}
]
}
Fields
operations[]
object ( RequestOperation )
Optional. Describes properties of one or more targets of a request. At least one of operations or notOperations must be specified. Limited to 1 operation. A match occurs when ANY operation (in operations or notOperations) matches. Within an operation, the match follows AND semantics across fields and OR semantics within a field, i.e. a match occurs when ANY path matches AND ANY header matches and ANY method matches.
notOperations[]
object ( RequestOperation )
Optional. Describes the negated properties of the targets of a request. Matches requests for operations that do not match the criteria specified in this field. At least one of operations or notOperations must be specified.
RequestOperation
Describes properties of one or more targets of a request.
JSON representation
{
"headerSet" : {
object ( HeaderSet )
} ,
"hosts" : [
{
object ( StringMatch )
}
] ,
"paths" : [
{
object ( StringMatch )
}
] ,
"methods" : [
string
]
}
Fields
headerSet
object ( HeaderSet )
Optional. A list of headers to match against in http header.
hosts[]
object ( StringMatch )
Optional. A list of HTTP Hosts to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 hosts per Authorization Policy.
paths[]
object ( StringMatch )
Optional. A list of paths to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 paths per Authorization Policy. Note that this path match includes the query parameters. For gRPC services, this should be a fully-qualified name of the form /package.service/method.
methods[]
string
Optional. A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive. Limited to 10 methods per Authorization Policy.
HeaderSet
Describes a set of HTTP headers to match against.
JSON representation
{
"headers" : [
{
object ( HeaderMatch )
}
]
}
Fields
headers[]
object ( HeaderMatch )
Required. A list of headers to match against in http header. The match can be one of exact, prefix, suffix, or contains (substring match). The match follows AND semantics which means all the headers must match. Matches are always case sensitive unless the ignoreCase is set. Limited to 10 headers per Authorization Policy.
HeaderMatch
Determines how a HTTP header should be matched.
JSON representation
{
"name" : string ,
"value" : {
object ( StringMatch )
}
}
Fields
name
string
Optional. Specifies the name of the header in the request.
value
object ( StringMatch )
Optional. Specifies how the header match will be performed.
AuthzAction
The action to be applied to this policy. Valid values are ALLOW , DENY , CUSTOM .
Enums
AUTHZ_ACTION_UNSPECIFIED
Unspecified action.
ALLOW
Allow request to pass through to the backend.
DENY
Deny the request and return a HTTP 404 to the client.
CUSTOM
Delegate the authorization decision to an external authorization engine.
CustomProvider
Allows delegating authorization decisions to Cloud IAP or to Service Extensions.
JSON representation
{
"cloudIap" : {
object ( CloudIap )
} ,
"authzExtension" : {
object ( AuthzExtension )
}
}
Fields
cloudIap
object ( CloudIap )
Optional. Delegates authorization decisions to Cloud IAP. Applicable only for managed load balancers. Enabling Cloud IAP at the AuthzPolicy level is not compatible with Cloud IAP settings in the BackendService. Enabling IAP in both places will result in request failure. Ensure that IAP is enabled in either the AuthzPolicy or the BackendService but not in both places.
authzExtension
object ( AuthzExtension )
Optional. Delegate authorization decision to user authored Service Extension. Only one of cloudIap or authzExtension can be specified.
CloudIap
This type has no fields.
Optional. Delegates authorization decisions to Cloud IAP. Applicable only for managed load balancers. Enabling Cloud IAP at the AuthzPolicy level is not compatible with Cloud IAP settings in the BackendService. Enabling IAP in both places will result in request failure. Ensure that IAP is enabled in either the AuthzPolicy or the BackendService but not in both places.
AuthzExtension
Optional. Delegate authorization decision to user authored extension. Only one of cloudIap or authzExtension can be specified.
JSON representation
{
"resources" : [
string
]
}
Fields
resources[]
string
Required. A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider.
Methods
create
Creates a new AuthzPolicy in a given project and location.
delete
Deletes a single AuthzPolicy.
get
Gets details of a single AuthzPolicy.
list
Lists AuthzPolicies in a given project and location.
patch
Updates the parameters of a single AuthzPolicy.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-29 UTC."],[],[]]
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
