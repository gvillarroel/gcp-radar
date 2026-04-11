---
title: "IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings
  title: "IapSettings \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
IapSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AccessSettings
JSON representation
GcipSettings
JSON representation
CorsSettings
JSON representation
OAuthSettings
JSON representation
ReauthSettings
JSON representation
Method
PolicyType
AllowedDomainsSettings
JSON representation
WorkforceIdentitySettings
JSON representation
OAuth2
JSON representation
IdentitySource
ApplicationSettings
JSON representation
CsmSettings
JSON representation
AccessDeniedPageSettings
JSON representation
AttributePropagationSettings
JSON representation
OutputCredentials
The IAP configurable settings.
JSON representation
{
"name" : string ,
"accessSettings" : {
object ( AccessSettings )
} ,
"applicationSettings" : {
object ( ApplicationSettings )
}
}
Fields
name
string
Required. The resource name of the IAP protected resource.
accessSettings
object ( AccessSettings )
Optional. Top level wrapper for all access related setting in IAP
applicationSettings
object ( ApplicationSettings )
Optional. Top level wrapper for all application related settings in IAP
AccessSettings
Access related settings for IAP protected apps.
JSON representation
{
"gcipSettings" : {
object ( GcipSettings )
} ,
"corsSettings" : {
object ( CorsSettings )
} ,
"oauthSettings" : {
object ( OAuthSettings )
} ,
"reauthSettings" : {
object ( ReauthSettings )
} ,
"allowedDomainsSettings" : {
object ( AllowedDomainsSettings )
} ,
"workforceIdentitySettings" : {
object ( WorkforceIdentitySettings )
} ,
"identitySources" : [
enum ( IdentitySource )
]
}
Fields
gcipSettings
object ( GcipSettings )
Optional. GCIP claims and endpoint configurations for 3p identity providers.
corsSettings
object ( CorsSettings )
Optional. Configuration to allow cross-origin requests via IAP.
oauthSettings
object ( OAuthSettings )
Optional. Settings to configure IAP's OAuth behavior.
reauthSettings
object ( ReauthSettings )
Optional. Settings to configure reauthentication policies in IAP.
allowedDomainsSettings
object ( AllowedDomainsSettings )
Optional. Settings to configure and enable allowed domains.
workforceIdentitySettings
object ( WorkforceIdentitySettings )
Optional. Settings to configure the workforce identity federation, including workforce pools and OAuth 2.0 settings.
identitySources[]
enum ( IdentitySource )
Optional. Identity sources that IAP can use to authenticate the end user. Only one identity source can be configured.
GcipSettings
Allows customers to configure tenant IDs for a Cloud Identity Platform (GCIP) instance for each application.
JSON representation
{
"tenantIds" : [
string
] ,
"loginPageUri" : string
}
Fields
tenantIds[]
string
Optional. GCIP tenant IDs that are linked to the IAP resource. tenantIds could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _<ProjectNumber> to indicate authenticating with GCIP agent flow. If agent flow is used, tenantIds should only contain one single element, while for tenant flow, tenantIds can contain multiple elements.
loginPageUri
string
Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level.
CorsSettings
Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
JSON representation
{
"allowHttpOptions" : boolean
}
Fields
allowHttpOptions
boolean
Configuration to allow HTTP OPTIONS calls to skip authentication and authorization. If undefined, IAP will not apply any special logic to OPTIONS requests.
OAuthSettings
Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
JSON representation
{
"loginHint" : string ,
"clientId" : string ,
"clientSecret" : string ,
"clientSecretSha256" : string ,
"programmaticClients" : [
string
]
}
Fields
loginHint
string
Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies.
clientId
string
Optional. OAuth 2.0 client ID used in the OAuth flow. This allows for client sharing. The risks of client sharing are outlined here: https://cloud.google.com/iap/docs/sharing-oauth-clients#risks .
clientSecret
string
Optional. Input only. OAuth secret paired with client ID.
clientSecretSha256
string
Output only. OAuth secret SHA256 paired with client ID.
programmaticClients[]
string
Optional. List of client ids allowed to use IAP programmatically.
ReauthSettings
Configuration for IAP reauthentication policies.
JSON representation
{
"method" : enum ( Method ) ,
"maxAge" : string ,
"policyType" : enum ( PolicyType )
}
Fields
method
enum ( Method )
Optional. Reauth method requested.
maxAge
string ( Duration format)
Optional. Reauth session lifetime, how long before a user has to reauthenticate again.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
policyType
enum ( PolicyType )
Optional. How IAP determines the effective policy in cases of hierarchical policies. Policies are merged from higher in the hierarchy to lower in the hierarchy.
Method
Types of reauthentication methods supported by IAP.
Enums
METHOD_UNSPECIFIED
Reauthentication disabled.
LOGIN
Prompts the user to log in again.
PASSWORD
This item is deprecated!
SECURE_KEY
User must use their secure key 2nd factor device.
ENROLLED_SECOND_FACTORS
User can use any enabled 2nd factor.
PolicyType
Type of policy in the case of hierarchical policies.
Enums
POLICY_TYPE_UNSPECIFIED
Default value. This value is unused.
MINIMUM
This policy acts as a minimum to other policies, lower in the hierarchy. Effective policy may only be the same or stricter.
DEFAULT
This policy acts as a default if no other reauth policy is set.
AllowedDomainsSettings
Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
JSON representation
{
"domains" : [
string
] ,
"enable" : boolean
}
Fields
domains[]
string
Optional. List of trusted domains.
enable
boolean
Optional. Configuration for customers to opt in for the feature.
WorkforceIdentitySettings
WorkforceIdentitySettings allows customers to configure workforce pools and OAuth 2.0 settings to gate their applications using a third-party IdP with access control.
JSON representation
{
"workforcePools" : [
string
] ,
"oauth2" : {
object ( OAuth2 )
}
}
Fields
workforcePools[]
string
The workforce pool resources. Only one workforce pool is accepted.
oauth2
object ( OAuth2 )
OAuth 2.0 settings for IAP to perform OIDC flow with workforce identity federation services.
OAuth2
The OAuth 2.0 Settings
JSON representation
{
"clientId" : string ,
"clientSecret" : string ,
"clientSecretSha256" : string
}
Fields
clientId
string
The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.
clientSecret
string
Input only. The OAuth 2.0 client secret created while registering the client ID.
clientSecretSha256
string
Output only. SHA256 hash value for the client secret. This field is returned by IAP when the settings are retrieved.
IdentitySource
Types of identity source supported by IAP.
Enums
IDENTITY_SOURCE_UNSPECIFIED
IdentitySource Unspecified. When selected, IAP relies on which identity settings are fully configured to redirect the traffic to. The precedence order is WorkforceIdentitySettings > GcipSettings. If none is set, default to use Google identity.
WORKFORCE_IDENTITY_FEDERATION
Use external identities set up on Google Cloud Workforce Identity Federation.
ApplicationSettings
Wrapper over application specific settings for IAP.
JSON representation
{
"csmSettings" : {
object ( CsmSettings )
} ,
"accessDeniedPageSettings" : {
object ( AccessDeniedPageSettings )
} ,
"cookieDomain" : string ,
"attributePropagationSettings" : {
object ( AttributePropagationSettings )
}
}
Fields
csmSettings
object ( CsmSettings )
Optional. Settings to configure IAP's behavior for a service mesh.
accessDeniedPageSettings
object ( AccessDeniedPageSettings )
Optional. Customization for Access Denied page.
cookieDomain
string
The Domain value to set for cookies generated by IAP. This value is not validated by the API, but will be ignored at runtime if invalid.
attributePropagationSettings
object ( AttributePropagationSettings )
Optional. Settings to configure attribute propagation.
CsmSettings
Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.
JSON representation
{
"rctokenAud" : string
}
Fields
rctokenAud
string
Audience claim set in the generated RCToken. This value is not validated by IAP.
AccessDeniedPageSettings
Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
JSON representation
{
"accessDeniedPageUri" : string ,
"generateTroubleshootingUri" : boolean ,
"remediationTokenGenerationEnabled" : boolean
}
Fields
accessDeniedPageUri
string
The URI to be redirected to when access is denied.
generateTroubleshootingUri
boolean
Whether to generate a troubleshooting URL on access denied events to this application.
remediationTokenGenerationEnabled
boolean
Whether to generate remediation token on access denied events to this application.
AttributePropagationSettings
Configuration for propagating attributes to applications protected by IAP.
JSON representation
{
"outputCredentials" : [
enum ( OutputCredentials )
] ,
"expression" : string ,
"enable" : boolean
}
Fields
outputCredentials[]
enum ( OutputCredentials )
Optional. Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential.
expression
string
Optional. Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from attributes : attributes.saml_attributes , attributes.iap_attributes . The following functions are supported:
filter <list>.filter(<iter_var>, <predicate>) : Returns a subset of <list> where <predicate> is true for every item.
in <var> in <list> : Returns true if <list> contains <var> .
selectByName <list>.selectByName(<string>) : Returns the attribute in <list> with the given <string> name, otherwise returns empty.
emitAs <attribute>.emitAs(<string>) : Sets the <attribute> name field to the given <string> for propagation in selected output credentials.
strict <attribute>.strict() : Ignores the x-goog-iap-attr- prefix for the provided <attribute> when propagating with the HEADER output credential, such as request headers.
append <target_list>.append(<attribute>) OR <target_list>.append(<list>) : Appends the provided <attribute> or <list> to the end of <target_list> .
Example expression: attributes.saml_attributes.filter(x, x.name in
['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())
enable
boolean
Optional. Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials.
OutputCredentials
Supported output credentials for attribute propagation. Each output credential maps to a "field" in the response. For example, selecting JWT will propagate all attributes in the IAP JWT, header in the headers, etc.
Enums
OUTPUT_CREDENTIALS_UNSPECIFIED
An output credential is required.
HEADER
Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
JWT
Propagate attributes in the JWT of the form: "additional_claims": {
"my_attribute": ["value1", "value2"] }
RCTOKEN
Propagate attributes in the RCToken of the form: "additional_claims": {
"my_attribute": ["value1", "value2"] }
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
