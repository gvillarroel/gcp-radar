---
title: "IAPSettings \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iap/iapsettings
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iap/iapsettings
  title: "IAPSettings \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
IAPSettings
Property
Value
Google Cloud Service Name
Identity-Aware Proxy
Google Cloud Service Documentation
/iap/docs/
Google Cloud REST Resource Documentation
/iap/docs/reference/rest/v1/IapSettings
Config Connector Resource Short Names
IAPSettings gcpiapsettings iapsettings
Config Connector Service Name
iap.googleapis.com
Config Connector Resource Fully Qualified Name
iapsettings.iap.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
accessSettings :
allowedDomainsSettings :
domains :
- string
enable : boolean
corsSettings :
allowHTTPOptions : boolean
gcipSettings :
loginPageURI : string
tenantIDs :
- string
oauthSettings :
loginHint : string
programmaticClients :
- string
reauthSettings :
maxAge : string
method : string
policyType : string
appEngineRef :
applicationRef :
external : string
projectRef :
external : string
kind : string
name : string
namespace : string
serviceRef :
external : string
versionRef :
external : string
applicationSettings :
accessDeniedPageSettings :
accessDeniedPageURI : string
generateTroubleshootingURI : boolean
remediationTokenGenerationEnabled : boolean
attributePropagationSettings :
enable : boolean
expression : string
outputCredentials :
- string
cookieDomain : string
csmSettings :
rctokenAud : string
computeServiceRef :
projectRef :
external : string
kind : string
name : string
namespace : string
region : string
serviceRef :
external : string
name : string
namespace : string
folderRef :
external : string
name : string
namespace : string
organizationRef :
external : string
projectRef :
external : string
kind : string
name : string
namespace : string
projectWebRef :
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
accessSettings
Optional
object
Top level wrapper for all access related setting in IAP
accessSettings.allowedDomainsSettings
Optional
object
Settings to configure and enable allowed domains.
accessSettings.allowedDomainsSettings.domains
Optional
list (string)
List of trusted domains.
accessSettings.allowedDomainsSettings.domains[]
Optional
string
accessSettings.allowedDomainsSettings.enable
Optional
boolean
Configuration for customers to opt in for the feature.
accessSettings.corsSettings
Optional
object
Configuration to allow cross-origin requests via IAP.
accessSettings.corsSettings.allowHTTPOptions
Optional
boolean
Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests.
accessSettings.gcipSettings
Optional
object
GCIP claims and endpoint configurations for 3p identity providers.
accessSettings.gcipSettings.loginPageURI
Optional
string
Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level.
accessSettings.gcipSettings.tenantIDs
Optional
list (string)
GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements.
accessSettings.gcipSettings.tenantIDs[]
Optional
string
accessSettings.oauthSettings
Optional
object
Settings to configure IAP's OAuth behavior.
accessSettings.oauthSettings.loginHint
Optional
string
Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies.
accessSettings.oauthSettings.programmaticClients
Optional
list (string)
List of OAuth client IDs allowed to programmatically authenticate with IAP.
accessSettings.oauthSettings.programmaticClients[]
Optional
string
accessSettings.reauthSettings
Optional
object
Settings to configure reauthentication policies in IAP.
accessSettings.reauthSettings.maxAge
Optional
string
Reauth session lifetime, how long before a user has to reauthenticate again.
accessSettings.reauthSettings.method
Optional
string
Reauth method requested.
accessSettings.reauthSettings.policyType
Optional
string
How IAP determines the effective policy in cases of hierarchial policies. Policies are merged from higher in the hierarchy to lower in the hierarchy.
appEngineRef
Optional
object
Project-wide App Engine service settings
appEngineRef.applicationRef
Required*
object
appEngineRef.applicationRef.external
Optional
string
Format: projects/{projects_id}/iap_web/appengine-{app_id}
appEngineRef.projectRef
Required*
object
The Project that this resource belongs to.
appEngineRef.projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
appEngineRef.projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
appEngineRef.projectRef.name
Optional
string
The `name` field of a `Project` resource.
appEngineRef.projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
appEngineRef.serviceRef
Optional
object
Optional. If specified, settings apply to the service
appEngineRef.serviceRef.external
Optional
string
Format: projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}
appEngineRef.versionRef
Optional
object
Optional. If specified, settings apply to the version
appEngineRef.versionRef.external
Optional
string
Format: projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}/version/{version_id}
applicationSettings
Optional
object
Top level wrapper for all application related settings in IAP
applicationSettings.accessDeniedPageSettings
Optional
object
Customization for Access Denied page.
applicationSettings.accessDeniedPageSettings.accessDeniedPageURI
Optional
string
The URI to be redirected to when access is denied.
applicationSettings.accessDeniedPageSettings.generateTroubleshootingURI
Optional
boolean
Whether to generate a troubleshooting URL on access denied events to this application.
applicationSettings.accessDeniedPageSettings.remediationTokenGenerationEnabled
Optional
boolean
Whether to generate remediation token on access denied events to this application.
applicationSettings.attributePropagationSettings
Optional
object
Settings to configure attribute propagation.
applicationSettings.attributePropagationSettings.enable
Optional
boolean
Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials.
applicationSettings.attributePropagationSettings.expression
Optional
string
Raw string CEL expression. Must return a list of attributes. A maximum of
45 attributes can be selected. Expressions can select different attribute
types from `attributes`: `attributes.saml_attributes`,
`attributes.iap_attributes`. The following functions are supported:
- filter ` .filter( ,
)`: Returns a subset of
` ` where ` ` is true for every item.
- in ` in `: Returns true if ` ` contains ` `.
- selectByName ` .selectByName( )`: Returns the attribute
in
` ` with the given ` ` name, otherwise returns empty.
- emitAs ` .emitAs( )`: Sets the ` ` name
field to the given ` ` for propagation in selected output
credentials.
- strict ` .strict()`: Ignores the `x-goog-iap-attr-` prefix
for the provided ` ` when propagating with the `HEADER` output
credential, such as request headers.
- append ` .append( )` OR
` .append( )`: Appends the provided ` ` or
` ` to the end of ` `.
Example expression: `attributes.saml_attributes.filter(x, x.name in
['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())`
applicationSettings.attributePropagationSettings.outputCredentials
Optional
list (string)
Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential.
applicationSettings.attributePropagationSettings.outputCredentials[]
Optional
string
applicationSettings.cookieDomain
Optional
string
The Domain value to set for cookies generated by IAP. This value is not validated by the API, but will be ignored at runtime if invalid.
applicationSettings.csmSettings
Optional
object
Settings to configure IAP's behavior for a service mesh.
applicationSettings.csmSettings.rctokenAud
Optional
string
Audience claim set in the generated RCToken. This value is not validated by IAP.
computeServiceRef
Optional
object
Project-wide Compute service settings
computeServiceRef.projectRef
Required*
object
The Project that this resource belongs to.
computeServiceRef.projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
computeServiceRef.projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
computeServiceRef.projectRef.name
Optional
string
The `name` field of a `Project` resource.
computeServiceRef.projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
computeServiceRef.region
Optional
string
Optional. If specified, settings apply to the region
computeServiceRef.serviceRef
Optional
object
Optional. If specified, settings apply to the service
computeServiceRef.serviceRef.external
Optional
string
The value of an externally managed ComputeBackendService resource.
computeServiceRef.serviceRef.name
Optional
string
The name of a ComputeBackendService resource.
computeServiceRef.serviceRef.namespace
Optional
string
The namespace of a ComputeBackendService resource.
folderRef
Optional
object
Folder-level settings
folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource.
organizationRef
Optional
object
Organization-level settings
organizationRef.external
Required*
string
The 'name' field of an organization, when not managed by Config Connector.
projectRef
Optional
object
Project-level settings
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
projectWebRef
Optional
object
Project-wide web service settings
projectWebRef.projectRef
Required*
object
The Project that this resource belongs to.
projectWebRef.projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectWebRef.projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectWebRef.projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectWebRef.projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
The IAPSettings name.
* Field is required when parent field is specified
Status
Schema
conditions:
- lastTransitionTime: string
message: string
reason: string
status: string
type: string
externalRef: string
observedGeneration: integer
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the IAPSettings resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Projectiapsettings
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : iap.cnrm.cloud.google.com/v1beta1
kind : IAPSettings
metadata :
name : iapsettings-sample-project
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : projects/${PROJECT_ID?}
accessSettings :
corsSettings :
allowHTTPOptions : true
reauthSettings :
method : LOGIN
maxAge : 300s
policyType : DEFAULT
applicationSettings :
cookieDomain : .example.com
Regionalbackendserviceiapsettings
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : iap.cnrm.cloud.google.com/v1beta1
kind : IAPSettings
metadata :
name : iapsettings-sample-backendservice
spec :
computeServiceRef :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : projects/${PROJECT_ID?}
region : us-central1
serviceRef :
name : iapsettings-dep-backendservice
accessSettings :
corsSettings :
allowHTTPOptions : true
reauthSettings :
method : SECURE_KEY
maxAge : 305s
policyType : MINIMUM
applicationSettings :
cookieDomain : .example.com
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeBackendService
metadata :
name : iapsettings-dep-backendservice
spec :
healthChecks :
- healthCheckRef :
name : iapsettings-dep-backendservice
location : us-central1
connectionDrainingTimeoutSec : 10
sessionAffinity : CLIENT_IP
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeHealthCheck
metadata :
name : iapsettings-dep-backendservice
spec :
checkIntervalSec : 10
timeoutSec : 10
httpHealthCheck :
port : 80
location : us-central1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
