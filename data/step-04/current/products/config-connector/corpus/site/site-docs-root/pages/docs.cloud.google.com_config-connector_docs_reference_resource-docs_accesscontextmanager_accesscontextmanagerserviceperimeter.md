---
title: "AccessContextManagerServicePerimeter \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter
  title: "AccessContextManagerServicePerimeter \_|\_ Config Connector \_|\_ Google\
    \ Cloud Documentation"
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
AccessContextManagerServicePerimeter
Property
Value
Google Cloud Service Name
AccessContextManager
Google Cloud Service Documentation
/vpc-service-controls/docs/
Google Cloud REST Resource Name
accesscontextmanager.v1.accessPolicies.servicePerimeters
Google Cloud REST Resource Documentation
/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters
Config Connector Resource Short Names
gcpaccesscontextmanagerserviceperimeter gcpaccesscontextmanagerserviceperimeters accesscontextmanagerserviceperimeter
Config Connector Service Name
accesscontextmanager.googleapis.com
Config Connector Resource Fully Qualified Name
accesscontextmanagerserviceperimeters.accesscontextmanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
accessPolicyRef :
external : string
name : string
namespace : string
description : string
perimeterType : string
resourceID : string
spec :
accessLevels :
- external : string
name : string
namespace : string
egressPolicies :
- egressFrom :
identities :
- serviceAccountRef :
external : string
name : string
namespace : string
user : string
identityType : string
egressTo :
externalResources :
- string
operations :
- methodSelectors :
- method : string
permission : string
serviceName : string
resources :
- projectRef :
external : string
name : string
namespace : string
ingressPolicies :
- ingressFrom :
identities :
- serviceAccountRef :
external : string
name : string
namespace : string
user : string
identityType : string
sources :
- accessLevelRef :
external : string
name : string
namespace : string
projectRef :
external : string
name : string
namespace : string
ingressTo :
operations :
- methodSelectors :
- method : string
permission : string
serviceName : string
resources :
- projectRef :
external : string
name : string
namespace : string
resources :
- projectRef :
external : string
name : string
namespace : string
restrictedServices :
- string
vpcAccessibleServices :
allowedServices :
- string
enableRestriction : boolean
status :
accessLevels :
- external : string
name : string
namespace : string
egressPolicies :
- egressFrom :
identities :
- serviceAccountRef :
external : string
name : string
namespace : string
user : string
identityType : string
egressTo :
externalResources :
- string
operations :
- methodSelectors :
- method : string
permission : string
serviceName : string
resources :
- projectRef :
external : string
name : string
namespace : string
ingressPolicies :
- ingressFrom :
identities :
- serviceAccountRef :
external : string
name : string
namespace : string
user : string
identityType : string
sources :
- accessLevelRef :
external : string
name : string
namespace : string
projectRef :
external : string
name : string
namespace : string
ingressTo :
operations :
- methodSelectors :
- method : string
permission : string
serviceName : string
resources :
- projectRef :
external : string
name : string
namespace : string
resources :
- projectRef :
external : string
name : string
namespace : string
restrictedServices :
- string
vpcAccessibleServices :
allowedServices :
- string
enableRestriction : boolean
title : string
useExplicitDryRunSpec : boolean
Fields
accessPolicyRef
Required
object
The AccessContextManagerAccessPolicy this
AccessContextManagerServicePerimeter lives in.
accessPolicyRef.external
Optional
string
Allowed value: string of the format `accessPolicies/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessPolicy` resource.
accessPolicyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
accessPolicyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
description
Optional
string
Description of the ServicePerimeter and its use. Does not affect
behavior.
perimeterType
Optional
string
Immutable. Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.
In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.
Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"].
resourceID
Optional
string
Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
spec
Optional
object
Proposed (or dry run) ServicePerimeter configuration.
This configuration allows to specify and test ServicePerimeter configuration
without enforcing actual access restrictions. Only allowed to be set when
the 'useExplicitDryRunSpec' flag is set.
spec.accessLevels
Optional
list (object)
spec.accessLevels[]
Optional
object
(Optional) A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet. AccessLevels listed
must be in the same policy as this ServicePerimeter.
Referencing a nonexistent AccessLevel is a syntax error. If no
AccessLevel names are listed, resources within the perimeter can
only be accessed via GCP calls with request origins within the
perimeter. For Service Perimeter Bridge, must be empty.
spec.accessLevels[].external
Optional
string
Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource.
spec.accessLevels[].name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.accessLevels[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.egressPolicies
Optional
list (object)
List of EgressPolicies to apply to the perimeter. A perimeter may
have multiple EgressPolicies, each of which is evaluated separately.
Access is granted if any EgressPolicy grants it. Must be empty for
a perimeter bridge.
spec.egressPolicies[]
Optional
object
spec.egressPolicies[].egressFrom
Optional
object
Defines conditions on the source of a request causing this 'EgressPolicy' to apply.
spec.egressPolicies[].egressFrom.identities
Optional
list (object)
spec.egressPolicies[].egressFrom.identities[]
Optional
object
(Optional) A list of identities that are allowed access through this
EgressPolicy. Should be in the format of email address. The email
address should represent individual user or service account only.
spec.egressPolicies[].egressFrom.identities[].serviceAccountRef
Optional
object
spec.egressPolicies[].egressFrom.identities[].serviceAccountRef.external
Optional
string
Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
spec.egressPolicies[].egressFrom.identities[].serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.egressPolicies[].egressFrom.identities[].serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.egressPolicies[].egressFrom.identities[].user
Optional
string
spec.egressPolicies[].egressFrom.identityType
Optional
string
Specifies the type of identities that are allowed access to outside the
perimeter. If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"].
spec.egressPolicies[].egressTo
Optional
object
Defines the conditions on the 'ApiOperation' and destination resources that
cause this 'EgressPolicy' to apply.
spec.egressPolicies[].egressTo.externalResources
Optional
list (string)
A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.
spec.egressPolicies[].egressTo.externalResources[]
Optional
string
spec.egressPolicies[].egressTo.operations
Optional
list (object)
A list of 'ApiOperations' that this egress rule applies to. A request matches
if it contains an operation/service in this list.
spec.egressPolicies[].egressTo.operations[]
Optional
object
spec.egressPolicies[].egressTo.operations[].methodSelectors
Optional
list (object)
API methods or permissions to allow. Method or permission must belong
to the service specified by 'serviceName' field. A single MethodSelector
entry with '*' specified for the 'method' field will allow all methods
AND permissions for the service specified in 'serviceName'.
spec.egressPolicies[].egressTo.operations[].methodSelectors[]
Optional
object
spec.egressPolicies[].egressTo.operations[].methodSelectors[].method
Optional
string
Value for 'method' should be a valid method name for the corresponding
'serviceName' in 'ApiOperation'. If '*' used as value for method,
then ALL methods and permissions are allowed.
spec.egressPolicies[].egressTo.operations[].methodSelectors[].permission
Optional
string
Value for permission should be a valid Cloud IAM permission for the
corresponding 'serviceName' in 'ApiOperation'.
spec.egressPolicies[].egressTo.operations[].serviceName
Optional
string
The name of the API whose methods or permissions the 'IngressPolicy' or
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.
spec.egressPolicies[].egressTo.resources
Optional
list (object)
spec.egressPolicies[].egressTo.resources[]
Optional
object
(Optional) A list of resources, currently only projects in the form
"projects/{project_number}". A request
matches if it contains a resource in this list.
spec.egressPolicies[].egressTo.resources[].projectRef
Optional
object
spec.egressPolicies[].egressTo.resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
spec.egressPolicies[].egressTo.resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.egressPolicies[].egressTo.resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.ingressPolicies
Optional
list (object)
List of 'IngressPolicies' to apply to the perimeter. A perimeter may
have multiple 'IngressPolicies', each of which is evaluated
separately. Access is granted if any 'Ingress Policy' grants it.
Must be empty for a perimeter bridge.
spec.ingressPolicies[]
Optional
object
spec.ingressPolicies[].ingressFrom
Optional
object
Defines the conditions on the source of a request causing this 'IngressPolicy'
to apply.
spec.ingressPolicies[].ingressFrom.identities
Optional
list (object)
spec.ingressPolicies[].ingressFrom.identities[]
Optional
object
(Optional) A list of identities that are allowed access through this
ingress policy. Should be in the format of email address. The email
address should represent individual user or service account only.
spec.ingressPolicies[].ingressFrom.identities[].serviceAccountRef
Optional
object
spec.ingressPolicies[].ingressFrom.identities[].serviceAccountRef.external
Optional
string
Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
spec.ingressPolicies[].ingressFrom.identities[].serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.ingressPolicies[].ingressFrom.identities[].serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.ingressPolicies[].ingressFrom.identities[].user
Optional
string
spec.ingressPolicies[].ingressFrom.identityType
Optional
string
Specifies the type of identities that are allowed access from outside the
perimeter. If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"].
spec.ingressPolicies[].ingressFrom.sources
Optional
list (object)
Sources that this 'IngressPolicy' authorizes access from.
spec.ingressPolicies[].ingressFrom.sources[]
Optional
object
spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef
Optional
object
An AccessLevel resource name that allow resources within the
ServicePerimeters to be accessed from the internet. AccessLevels
listed must be in the same policy as this ServicePerimeter.
Referencing a nonexistent AccessLevel will cause an error. If no
AccessLevel names are listed, resources within the perimeter can
only be accessed via Google Cloud calls with request origins within
the perimeter.
spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef.external
Optional
string
Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource.
spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.ingressPolicies[].ingressFrom.sources[].projectRef
Optional
object
(Optional) A Google Cloud resource that is allowed to ingress the
perimeter. Requests from these resources will be allowed to access
perimeter data. Currently only projects are allowed. Format
"projects/{project_number}" The project may be in any Google Cloud
organization, not just the organization that the perimeter is defined in.
spec.ingressPolicies[].ingressFrom.sources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
spec.ingressPolicies[].ingressFrom.sources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.ingressPolicies[].ingressFrom.sources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.ingressPolicies[].ingressTo
Optional
object
Defines the conditions on the 'ApiOperation' and request destination that cause
this 'IngressPolicy' to apply.
spec.ingressPolicies[].ingressTo.operations
Optional
list (object)
A list of 'ApiOperations' the sources specified in corresponding 'IngressFrom'
are allowed to perform in this 'ServicePerimeter'.
spec.ingressPolicies[].ingressTo.operations[]
Optional
object
spec.ingressPolicies[].ingressTo.operations[].methodSelectors
Optional
list (object)
API methods or permissions to allow. Method or permission must belong to
the service specified by serviceName field. A single 'MethodSelector' entry
with '*' specified for the method field will allow all methods AND
permissions for the service specified in 'serviceName'.
spec.ingressPolicies[].ingressTo.operations[].methodSelectors[]
Optional
object
spec.ingressPolicies[].ingressTo.operations[].methodSelectors[].method
Optional
string
Value for method should be a valid method name for the corresponding
serviceName in 'ApiOperation'. If '*' used as value for 'method', then
ALL methods and permissions are allowed.
spec.ingressPolicies[].ingressTo.operations[].methodSelectors[].permission
Optional
string
Value for permission should be a valid Cloud IAM permission for the
corresponding 'serviceName' in 'ApiOperation'.
spec.ingressPolicies[].ingressTo.operations[].serviceName
Optional
string
The name of the API whose methods or permissions the 'IngressPolicy' or
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.
spec.ingressPolicies[].ingressTo.resources
Optional
list (object)
spec.ingressPolicies[].ingressTo.resources[]
Optional
object
A list of resources, currently only projects in the form
"projects/{project_number}", protected by this ServicePerimeter
that are allowed to be accessed by sources defined in the
corresponding IngressFrom. A request matches if it contains a
resource in this list.
spec.ingressPolicies[].ingressTo.resources[].projectRef
Optional
object
spec.ingressPolicies[].ingressTo.resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
spec.ingressPolicies[].ingressTo.resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.ingressPolicies[].ingressTo.resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.resources
Optional
list (object)
spec.resources[]
Optional
object
(Optional) A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
spec.resources[].projectRef
Optional
object
spec.resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
spec.resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
spec.resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
spec.restrictedServices
Optional
list (string)
GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
spec.restrictedServices[]
Optional
string
spec.vpcAccessibleServices
Optional
object
Specifies how APIs are allowed to communicate within the Service
Perimeter.
spec.vpcAccessibleServices.allowedServices
Optional
list (string)
The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
spec.vpcAccessibleServices.allowedServices[]
Optional
string
spec.vpcAccessibleServices.enableRestriction
Optional
boolean
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
status
Optional
object
ServicePerimeter configuration. Specifies sets of resources,
restricted services and access levels that determine
perimeter content and boundaries.
accessLevels
Optional
list (object)
accessLevels[]
Optional
object
(Optional) A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet. AccessLevels listed
must be in the same policy as this ServicePerimeter.
Referencing a nonexistent AccessLevel is a syntax error. If no
AccessLevel names are listed, resources within the perimeter can
only be accessed via GCP calls with request origins within the
perimeter. For Service Perimeter Bridge, must be empty.
accessLevels[].external
Optional
string
Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource.
accessLevels[].name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
accessLevels[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
egressPolicies
Optional
list (object)
List of EgressPolicies to apply to the perimeter. A perimeter may
have multiple EgressPolicies, each of which is evaluated separately.
Access is granted if any EgressPolicy grants it. Must be empty for
a perimeter bridge.
egressPolicies[]
Optional
object
egressPolicies[].egressFrom
Optional
object
Defines conditions on the source of a request causing this 'EgressPolicy' to apply.
egressPolicies[].egressFrom.identities
Optional
list (object)
egressPolicies[].egressFrom.identities[]
Optional
object
(Optional) A list of identities that are allowed access through this
EgressPolicy. Should be in the format of email address. The email
address should represent individual user or service account only.
egressPolicies[].egressFrom.identities[].serviceAccountRef
Optional
object
egressPolicies[].egressFrom.identities[].serviceAccountRef.external
Optional
string
Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
egressPolicies[].egressFrom.identities[].serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
egressPolicies[].egressFrom.identities[].serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
egressPolicies[].egressFrom.identities[].user
Optional
string
egressPolicies[].egressFrom.identityType
Optional
string
Specifies the type of identities that are allowed access to outside the
perimeter. If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"].
egressPolicies[].egressTo
Optional
object
Defines the conditions on the 'ApiOperation' and destination resources that
cause this 'EgressPolicy' to apply.
egressPolicies[].egressTo.externalResources
Optional
list (string)
A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.
egressPolicies[].egressTo.externalResources[]
Optional
string
egressPolicies[].egressTo.operations
Optional
list (object)
A list of 'ApiOperations' that this egress rule applies to. A request matches
if it contains an operation/service in this list.
egressPolicies[].egressTo.operations[]
Optional
object
egressPolicies[].egressTo.operations[].methodSelectors
Optional
list (object)
API methods or permissions to allow. Method or permission must belong
to the service specified by 'serviceName' field. A single MethodSelector
entry with '*' specified for the 'method' field will allow all methods
AND permissions for the service specified in 'serviceName'.
egressPolicies[].egressTo.operations[].methodSelectors[]
Optional
object
egressPolicies[].egressTo.operations[].methodSelectors[].method
Optional
string
Value for 'method' should be a valid method name for the corresponding
'serviceName' in 'ApiOperation'. If '*' used as value for method,
then ALL methods and permissions are allowed.
egressPolicies[].egressTo.operations[].methodSelectors[].permission
Optional
string
Value for permission should be a valid Cloud IAM permission for the
corresponding 'serviceName' in 'ApiOperation'.
egressPolicies[].egressTo.operations[].serviceName
Optional
string
The name of the API whose methods or permissions the 'IngressPolicy' or
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.
egressPolicies[].egressTo.resources
Optional
list (object)
egressPolicies[].egressTo.resources[]
Optional
object
(Optional) A list of resources, currently only projects in the form
"projects/{project_number}". A request
matches if it contains a resource in this list.
egressPolicies[].egressTo.resources[].projectRef
Optional
object
egressPolicies[].egressTo.resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
egressPolicies[].egressTo.resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
egressPolicies[].egressTo.resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
ingressPolicies
Optional
list (object)
List of 'IngressPolicies' to apply to the perimeter. A perimeter may
have multiple 'IngressPolicies', each of which is evaluated
separately. Access is granted if any 'Ingress Policy' grants it.
Must be empty for a perimeter bridge.
ingressPolicies[]
Optional
object
ingressPolicies[].ingressFrom
Optional
object
Defines the conditions on the source of a request causing this 'IngressPolicy'
to apply.
ingressPolicies[].ingressFrom.identities
Optional
list (object)
ingressPolicies[].ingressFrom.identities[]
Optional
object
(Optional) A list of identities that are allowed access through this
EgressPolicy. Should be in the format of email address. The email
address should represent individual user or service account only.
ingressPolicies[].ingressFrom.identities[].serviceAccountRef
Optional
object
ingressPolicies[].ingressFrom.identities[].serviceAccountRef.external
Optional
string
Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
ingressPolicies[].ingressFrom.identities[].serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
ingressPolicies[].ingressFrom.identities[].serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
ingressPolicies[].ingressFrom.identities[].user
Optional
string
ingressPolicies[].ingressFrom.identityType
Optional
string
Specifies the type of identities that are allowed access from outside the
perimeter. If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"].
ingressPolicies[].ingressFrom.sources
Optional
list (object)
Sources that this 'IngressPolicy' authorizes access from.
ingressPolicies[].ingressFrom.sources[]
Optional
object
ingressPolicies[].ingressFrom.sources[].accessLevelRef
Optional
object
An AccessLevel resource name that allow resources within the
ServicePerimeters to be accessed from the internet. AccessLevels
listed must be in the same policy as this ServicePerimeter.
Referencing a nonexistent AccessLevel will cause an error. If no
AccessLevel names are listed, resources within the perimeter can
only be accessed via Google Cloud calls with request origins within
the perimeter.
ingressPolicies[].ingressFrom.sources[].accessLevelRef.external
Optional
string
Allowed value: string of the format `{{parent}}/accessLevels/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessLevel` resource.
ingressPolicies[].ingressFrom.sources[].accessLevelRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
ingressPolicies[].ingressFrom.sources[].accessLevelRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
ingressPolicies[].ingressFrom.sources[].projectRef
Optional
object
(Optional) A Google Cloud resource that is allowed to ingress the
perimeter. Requests from these resources will be allowed to access
perimeter data. Currently only projects are allowed. Format
"projects/{project_number}" The project may be in any Google Cloud
organization, not just the organization that the perimeter is defined in.
ingressPolicies[].ingressFrom.sources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
ingressPolicies[].ingressFrom.sources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
ingressPolicies[].ingressFrom.sources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
ingressPolicies[].ingressTo
Optional
object
Defines the conditions on the 'ApiOperation' and request destination that cause
this 'IngressPolicy' to apply.
ingressPolicies[].ingressTo.operations
Optional
list (object)
A list of 'ApiOperations' the sources specified in corresponding 'IngressFrom'
are allowed to perform in this 'ServicePerimeter'.
ingressPolicies[].ingressTo.operations[]
Optional
object
ingressPolicies[].ingressTo.operations[].methodSelectors
Optional
list (object)
API methods or permissions to allow. Method or permission must belong to
the service specified by serviceName field. A single 'MethodSelector' entry
with '*' specified for the method field will allow all methods AND
permissions for the service specified in 'serviceName'.
ingressPolicies[].ingressTo.operations[].methodSelectors[]
Optional
object
ingressPolicies[].ingressTo.operations[].methodSelectors[].method
Optional
string
Value for method should be a valid method name for the corresponding
serviceName in 'ApiOperation'. If '*' used as value for 'method', then
ALL methods and permissions are allowed.
ingressPolicies[].ingressTo.operations[].methodSelectors[].permission
Optional
string
Value for permission should be a valid Cloud IAM permission for the
corresponding 'serviceName' in 'ApiOperation'.
ingressPolicies[].ingressTo.operations[].serviceName
Optional
string
The name of the API whose methods or permissions the 'IngressPolicy' or
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.
ingressPolicies[].ingressTo.resources
Optional
list (object)
ingressPolicies[].ingressTo.resources[]
Optional
object
A list of resources, currently only projects in the form
"projects/{project_number}", protected by this ServicePerimeter
that are allowed to be accessed by sources defined in the
corresponding IngressFrom. A request matches if it contains a
resource in this list.
ingressPolicies[].ingressTo.resources[].projectRef
Optional
object
ingressPolicies[].ingressTo.resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
ingressPolicies[].ingressTo.resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
ingressPolicies[].ingressTo.resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
resources
Optional
list (object)
resources[]
Optional
object
(Optional) A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
resources[].projectRef
Optional
object
resources[].projectRef.external
Optional
string
Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
resources[].projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
resources[].projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
restrictedServices
Optional
list (string)
GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
restrictedServices[]
Optional
string
vpcAccessibleServices
Optional
object
Specifies how APIs are allowed to communicate within the Service
Perimeter.
vpcAccessibleServices.allowedServices
Optional
list (string)
The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
vpcAccessibleServices.allowedServices[]
Optional
string
vpcAccessibleServices.enableRestriction
Optional
boolean
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
title
Required
string
Human readable title. Must be unique within the Policy.
useExplicitDryRunSpec
Optional
boolean
Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
observedGeneration : integer
updateTime : string
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
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
createTime
string
Time the AccessPolicy was created in UTC.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
updateTime
string
Time the AccessPolicy was updated in UTC.
Sample YAML(s)
Typical Use Case
# Copyright 2020 Google LLC
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
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerServicePerimeter
metadata :
name : serviceperimetersample
spec :
# Config for DRY-RUN
# To use this 'useExplicitDryRunSpec' must be set to 'true'
# Replace "${ACCESS_POLICY_NUMBER}" with the numeric ID for your Access Policy
# Replace "${PROJECT_NUMBER}" with the appropriate `project number` for the project to be protected by the perimeter
spec :
# List of Access Levels to be applied for this perimeter
accessLevels :
- name : serviceperimeterdep2
# List of projects to be included in this perimeter
resources :
- projectRef :
external : "projects/${PROJECT_NUMBER1}"
- projectRef :
external : "projects/${PROJECT_NUMBER2}"
# List of restricted services
restrictedServices :
- "storage.googleapis.com"
# List of services that could be accessed from within the perimeter
vpcAccessibleServices :
allowedServices :
- "storage.googleapis.com"
- "pubsub.googleapis.com"
enableRestriction : true
egressPolicies :
- egressFrom :
identities :
- name : serviceperimeterengressdep
- egressTo :
resources :
- projectRef :
external : "projects/${PROJECT_NUMBER1}"
ingressPolicies :
- ingressFrom :
identities :
- name : serviceperimeteringressdep
sources :
- accessLevelRef :
name : serviceperimeterdep2
ingressTo :
resources :
- projectRef :
external : "projects/${PROJECT_NUMBER2}"
# Config to ENFORCE
# Config items are repeated as above for DRY-RUN
# Replace "${ACCESS_POLICY_NUMBER}" with the numeric ID for your Access Policy
# Replace "${PROJECT_NUMBERx}" with the appropriate `project number` for the project to be protected by the perimeter
status :
accessLevels :
- name : serviceperimeterdep2
resources :
- projectRef :
external : "projects/${PROJECT_NUMBER3}"
- projectRef :
external : "projects/${PROJECT_NUMBER4}"
restrictedServices :
- "bigquery.googleapis.com"
vpcAccessibleServices :
allowedServices :
- "bigquery.googleapis.com"
- "logging.googleapis.com"
enableRestriction : true
title : Service Perimeter created by Config Connector
useExplicitDryRunSpec : true
accessPolicyRef :
# Using an already existing Access Policy. Currently there is a limitation
# of only one Access Policy per Organisation.
# Use one of the two options below to select Access Policy
# 1. The dependent Access Policy Object created via Config Connector
# name: accesscontextmanagerserviceperimeterdep
# 2. Set the appropriate ACCESS_POLICY_NUMBER
external : accessPolicies/${ACCESS_POLICY_NUMBER}
description : A Service Perimeter Created by Config Connector
perimeterType : PERIMETER_TYPE_REGULAR
---
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerAccessLevel
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : serviceperimeterdep1
spec :
accessPolicyRef :
# Replace "${ACCESS_POLICY_NUMBER}" with the numeric ID for your Access Policy
external : "accessPolicies/${ACCESS_POLICY_NUMBER}"
title : Service Perimeter Dependency ACL1
basic :
conditions :
- devicePolicy :
requireCorpOwned : true
---
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerAccessLevel
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : serviceperimeterdep2
spec :
accessPolicyRef :
# Replace "${ACCESS_POLICY_NUMBER}" with the numeric ID for your Access Policy
external : "accessPolicies/${ACCESS_POLICY_NUMBER}"
title : Service Perimeter Dependency ACL2
basic :
conditions :
- devicePolicy :
requireCorpOwned : true
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : serviceperimeterengressdep
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : serviceperimeteringressdep
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
