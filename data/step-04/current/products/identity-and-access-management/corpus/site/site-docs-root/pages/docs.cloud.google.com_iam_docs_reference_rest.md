---
title: "Identity and Access Management (IAM) API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/reference/rest
  title: "Identity and Access Management (IAM) API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Identity and Access Management (IAM) API
Stay organized with collections
Save and categorize content based on your preferences.
Manages identity and access control for Google Cloud resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls. Enabling this API also enables the IAM Service Account Credentials API (iamcredentials.googleapis.com). However, disabling this API doesn't disable the IAM Service Account Credentials API.
REST Resource: v3beta.folders.locations.accessPolicies
REST Resource: v3beta.folders.locations.operations
REST Resource: v3beta.folders.locations.policyBindings
REST Resource: v3beta.organizations.locations.accessPolicies
REST Resource: v3beta.organizations.locations.operations
REST Resource: v3beta.organizations.locations.policyBindings
REST Resource:
v3beta.organizations.locations.principalAccessBoundaryPolicies
REST Resource: v3beta.projects.locations.accessPolicies
REST Resource: v3beta.projects.locations.operations
REST Resource: v3beta.projects.locations.policyBindings
REST Resource: v3.folders.locations.operations
REST Resource: v3.folders.locations.policyBindings
REST Resource: v3.organizations.locations.operations
REST Resource: v3.organizations.locations.policyBindings
REST Resource: v3.organizations.locations.principalAccessBoundaryPolicies
REST Resource: v3.projects.locations.operations
REST Resource: v3.projects.locations.policyBindings
REST Resource: v2beta.policies
REST Resource: v2beta.policies.operations
REST Resource: v2.policies
REST Resource: v2.policies.operations
REST Resource: v1beta.projects.locations.workloadIdentityPools
REST Resource: v1beta.projects.locations.workloadIdentityPools.operations
REST Resource: v1beta.projects.locations.workloadIdentityPools.providers
REST Resource:
v1beta.projects.locations.workloadIdentityPools.providers.operations
REST Resource: v1.iamPolicies
REST Resource: v1.locations.workforcePools
REST Resource: v1.locations.workforcePools.operations
REST Resource: v1.locations.workforcePools.providers
REST Resource: v1.locations.workforcePools.providers.keys
REST Resource: v1.locations.workforcePools.providers.operations
REST Resource: v1.locations.workforcePools.providers.scimTenants
REST Resource: v1.locations.workforcePools.providers.scimTenants.tokens
REST Resource: v1.locations.workforcePools.subjects
REST Resource: v1.organizations.roles
REST Resource: v1.permissions
REST Resource: v1.projects.locations.oauthClients
REST Resource: v1.projects.locations.oauthClients.credentials
REST Resource: v1.projects.locations.workloadIdentityPools
REST Resource: v1.projects.locations.workloadIdentityPools.namespaces
REST Resource:
v1.projects.locations.workloadIdentityPools.namespaces.managedIdentities
REST Resource: v1.projects.locations.workloadIdentityPools.operations
REST Resource: v1.projects.locations.workloadIdentityPools.providers
REST Resource: v1.projects.locations.workloadIdentityPools.providers.keys
REST Resource:
v1.projects.locations.workloadIdentityPools.providers.operations
REST Resource: v1.projects.roles
REST Resource: v1.projects.serviceAccounts
REST Resource: v1.projects.serviceAccounts.keys
REST Resource: v1.roles
Service: iam.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://iam.googleapis.com/$discovery/rest?version=v3
https://iam.googleapis.com/$discovery/rest?version=v3beta
https://iam.googleapis.com/$discovery/rest?version=v2
https://iam.googleapis.com/$discovery/rest?version=v2beta
https://iam.googleapis.com/$discovery/rest?version=v1
https://iam.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://iam.googleapis.com
REST Resource: v3beta.folders.locations.accessPolicies
Methods
create
POST /v3beta/{parent=folders/*/locations/*}/accessPolicies
Creates an access policy, and returns a long running operation.
delete
DELETE /v3beta/{name=folders/*/locations/*/accessPolicies/*}
Deletes an access policy.
get
GET /v3beta/{name=folders/*/locations/*/accessPolicies/*}
Gets an access policy.
list
GET /v3beta/{parent=folders/*/locations/*}/accessPolicies
Lists access policies.
patch
PATCH /v3beta/{accessPolicy.name=folders/*/locations/*/accessPolicies/*}
Updates an access policy.
searchPolicyBindings
GET /v3beta/{name=folders/*/locations/*/accessPolicies/*}:searchPolicyBindings
Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
REST Resource: v3beta.folders.locations.operations
Methods
get
GET /v3beta/{name=folders/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3beta.folders.locations.policyBindings
Methods
create
POST /v3beta/{parent=folders/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3beta/{name=folders/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3beta/{name=folders/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3beta/{parent=folders/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3beta/{policyBinding.name=folders/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3beta/{parent=folders/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v3beta.organizations.locations.accessPolicies
Methods
create
POST /v3beta/{parent=organizations/*/locations/*}/accessPolicies
Creates an access policy, and returns a long running operation.
delete
DELETE /v3beta/{name=organizations/*/locations/*/accessPolicies/*}
Deletes an access policy.
get
GET /v3beta/{name=organizations/*/locations/*/accessPolicies/*}
Gets an access policy.
list
GET /v3beta/{parent=organizations/*/locations/*}/accessPolicies
Lists access policies.
patch
PATCH /v3beta/{accessPolicy.name=organizations/*/locations/*/accessPolicies/*}
Updates an access policy.
searchPolicyBindings
GET /v3beta/{name=organizations/*/locations/*/accessPolicies/*}:searchPolicyBindings
Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
REST Resource: v3beta.organizations.locations.operations
Methods
get
GET /v3beta/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3beta.organizations.locations.policyBindings
Methods
create
POST /v3beta/{parent=organizations/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3beta/{name=organizations/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3beta/{name=organizations/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3beta/{parent=organizations/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3beta/{policyBinding.name=organizations/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3beta/{parent=organizations/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v3beta.organizations.locations.principalAccessBoundaryPolicies
Methods
create
POST /v3beta/{parent=organizations/*/locations/*}/principalAccessBoundaryPolicies
Creates a principal access boundary policy, and returns a long running operation.
delete
DELETE /v3beta/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Deletes a principal access boundary policy.
get
GET /v3beta/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Gets a principal access boundary policy.
list
GET /v3beta/{parent=organizations/*/locations/*}/principalAccessBoundaryPolicies
Lists principal access boundary policies.
patch
PATCH /v3beta/{principalAccessBoundaryPolicy.name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Updates a principal access boundary policy.
searchPolicyBindings
GET /v3beta/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}:searchPolicyBindings
Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
REST Resource: v3beta.projects.locations.accessPolicies
Methods
create
POST /v3beta/{parent=projects/*/locations/*}/accessPolicies
Creates an access policy, and returns a long running operation.
delete
DELETE /v3beta/{name=projects/*/locations/*/accessPolicies/*}
Deletes an access policy.
get
GET /v3beta/{name=projects/*/locations/*/accessPolicies/*}
Gets an access policy.
list
GET /v3beta/{parent=projects/*/locations/*}/accessPolicies
Lists access policies.
patch
PATCH /v3beta/{accessPolicy.name=projects/*/locations/*/accessPolicies/*}
Updates an access policy.
searchPolicyBindings
GET /v3beta/{name=projects/*/locations/*/accessPolicies/*}:searchPolicyBindings
Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
REST Resource: v3beta.projects.locations.operations
Methods
get
GET /v3beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3beta.projects.locations.policyBindings
Methods
create
POST /v3beta/{parent=projects/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3beta/{name=projects/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3beta/{name=projects/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3beta/{parent=projects/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3beta/{policyBinding.name=projects/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3beta/{parent=projects/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v3.folders.locations.operations
Methods
get
GET /v3/{name=folders/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3.folders.locations.policyBindings
Methods
create
POST /v3/{parent=folders/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3/{name=folders/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3/{name=folders/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3/{parent=folders/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3/{policyBinding.name=folders/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3/{parent=folders/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v3.organizations.locations.operations
Methods
get
GET /v3/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3.organizations.locations.policyBindings
Methods
create
POST /v3/{parent=organizations/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3/{name=organizations/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3/{name=organizations/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3/{parent=organizations/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3/{policyBinding.name=organizations/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3/{parent=organizations/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v3.organizations.locations.principalAccessBoundaryPolicies
Methods
create
POST /v3/{parent=organizations/*/locations/*}/principalAccessBoundaryPolicies
Creates a principal access boundary policy, and returns a long running operation.
delete
DELETE /v3/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Deletes a principal access boundary policy.
get
GET /v3/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Gets a principal access boundary policy.
list
GET /v3/{parent=organizations/*/locations/*}/principalAccessBoundaryPolicies
Lists principal access boundary policies.
patch
PATCH /v3/{principalAccessBoundaryPolicy.name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}
Updates a principal access boundary policy.
searchPolicyBindings
GET /v3/{name=organizations/*/locations/*/principalAccessBoundaryPolicies/*}:searchPolicyBindings
Returns all policy bindings that bind a specific policy if a user has searchPolicyBindings permission on that policy.
REST Resource: v3.projects.locations.operations
Methods
get
GET /v3/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v3.projects.locations.policyBindings
Methods
create
POST /v3/{parent=projects/*/locations/*}/policyBindings
Creates a policy binding and returns a long-running operation.
delete
DELETE /v3/{name=projects/*/locations/*/policyBindings/*}
Deletes a policy binding and returns a long-running operation.
get
GET /v3/{name=projects/*/locations/*/policyBindings/*}
Gets a policy binding.
list
GET /v3/{parent=projects/*/locations/*}/policyBindings
Lists policy bindings.
patch
PATCH /v3/{policyBinding.name=projects/*/locations/*/policyBindings/*}
Updates a policy binding and returns a long-running operation.
searchTargetPolicyBindings
GET /v3/{parent=projects/*/locations/*}/policyBindings:searchTargetPolicyBindings
Search policy bindings by target.
REST Resource: v2beta.policies
Methods
createPolicy
POST /v2beta/{parent=policies/*/*}
Creates a policy.
delete
DELETE /v2beta/{name=policies/*/*/*}
Deletes a policy.
get
GET /v2beta/{name=policies/*/*/*}
Gets a policy.
listPolicies
GET /v2beta/{parent=policies/*/*}
Retrieves the policies of the specified kind that are attached to a resource.
update
PUT /v2beta/{policy.name=policies/*/*/*}
Updates the specified policy.
REST Resource: v2beta.policies.operations
Methods
get
GET /v2beta/{name=policies/*/*/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v2.policies
Methods
createPolicy
POST /v2/{parent=policies/*/*}
Creates a policy.
delete
DELETE /v2/{name=policies/*/*/*}
Deletes a policy.
get
GET /v2/{name=policies/*/*/*}
Gets a policy.
listPolicies
GET /v2/{parent=policies/*/*}
Retrieves the policies of the specified kind that are attached to a resource.
update
PUT /v2/{policy.name=policies/*/*/*}
Updates the specified policy.
REST Resource: v2.policies.operations
Methods
get
GET /v2/{name=policies/*/*/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1beta.projects.locations.workloadIdentityPools
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/workloadIdentityPools
Creates a new WorkloadIdentityPool .
delete
DELETE /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*}
Deletes a WorkloadIdentityPool .
get
GET /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*}
Gets an individual WorkloadIdentityPool .
list
GET /v1beta/{parent=projects/*/locations/*}/workloadIdentityPools
Lists all non-deleted WorkloadIdentityPool s in a project.
patch
PATCH /v1beta/{workloadIdentityPool.name=projects/*/locations/*/workloadIdentityPools/*}
Updates an existing WorkloadIdentityPool .
undelete
POST /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*}:undelete
Undeletes a WorkloadIdentityPool , as long as it was deleted fewer than 30 days ago.
REST Resource: v1beta.projects.locations.workloadIdentityPools.operations
Methods
get
GET /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1beta.projects.locations.workloadIdentityPools.providers
Methods
create
POST /v1beta/{parent=projects/*/locations/*/workloadIdentityPools/*}/providers
Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool .
delete
DELETE /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Deletes a WorkloadIdentityPoolProvider .
get
GET /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Gets an individual WorkloadIdentityPoolProvider .
list
GET /v1beta/{parent=projects/*/locations/*/workloadIdentityPools/*}/providers
Lists all non-deleted WorkloadIdentityPoolProvider s in a WorkloadIdentityPool .
patch
PATCH /v1beta/{workloadIdentityPoolProvider.name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Updates an existing WorkloadIdentityPoolProvider .
undelete
POST /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}:undelete
Undeletes a WorkloadIdentityPoolProvider , as long as it was deleted fewer than 30 days ago.
REST Resource: v1beta.projects.locations.workloadIdentityPools.providers.operations
Methods
get
GET /v1beta/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.iamPolicies
Methods
lintPolicy
POST /v1/iamPolicies:lintPolicy
Lints, or validates, an IAM policy.
queryAuditableServices
POST /v1/iamPolicies:queryAuditableServices
Returns a list of services that allow you to opt into audit logs that are not generated by default.
REST Resource: v1.locations.workforcePools
Methods
create
POST /v1/{location=locations/*}/workforcePools
Creates a new WorkforcePool .
delete
DELETE /v1/{name=locations/*/workforcePools/*}
Deletes a WorkforcePool .
get
GET /v1/{name=locations/*/workforcePools/*}
Gets an individual WorkforcePool .
getIamPolicy
POST /v1/{resource=locations/*/workforcePools/*}:getIamPolicy
Gets IAM policies on a WorkforcePool .
list
GET /v1/{location=locations/*}/workforcePools
Lists all non-deleted WorkforcePool s under the specified parent.
patch
PATCH /v1/{workforcePool.name=locations/*/workforcePools/*}
Updates an existing WorkforcePool .
setIamPolicy
POST /v1/{resource=locations/*/workforcePools/*}:setIamPolicy
Sets IAM policies on a WorkforcePool .
testIamPermissions
POST /v1/{resource=locations/*/workforcePools/*}:testIamPermissions
Returns the caller's permissions on the WorkforcePool .
undelete
POST /v1/{name=locations/*/workforcePools/*}:undelete
Undeletes a WorkforcePool , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.locations.workforcePools.operations
Methods
get
GET /v1/{name=locations/*/workforcePools/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.locations.workforcePools.providers
Methods
create
POST /v1/{parent=locations/*/workforcePools/*}/providers
Creates a new WorkforcePoolProvider in a WorkforcePool .
delete
DELETE /v1/{name=locations/*/workforcePools/*/providers/*}
Deletes a WorkforcePoolProvider .
get
GET /v1/{name=locations/*/workforcePools/*/providers/*}
Gets an individual WorkforcePoolProvider .
list
GET /v1/{parent=locations/*/workforcePools/*}/providers
Lists all non-deleted WorkforcePoolProvider s in a WorkforcePool .
patch
PATCH /v1/{workforcePoolProvider.name=locations/*/workforcePools/*/providers/*}
Updates an existing WorkforcePoolProvider .
undelete
POST /v1/{name=locations/*/workforcePools/*/providers/*}:undelete
Undeletes a WorkforcePoolProvider , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.locations.workforcePools.providers.keys
Methods
create
POST /v1/{parent=locations/*/workforcePools/*/providers/*}/keys
Creates a new WorkforcePoolProviderKey in a WorkforcePoolProvider .
delete
DELETE /v1/{name=locations/*/workforcePools/*/providers/*/keys/*}
Deletes a WorkforcePoolProviderKey .
get
GET /v1/{name=locations/*/workforcePools/*/providers/*/keys/*}
Gets a WorkforcePoolProviderKey .
list
GET /v1/{parent=locations/*/workforcePools/*/providers/*}/keys
Lists all non-deleted WorkforcePoolProviderKey s in a WorkforcePoolProvider .
undelete
POST /v1/{name=locations/*/workforcePools/*/providers/*/keys/*}:undelete
Undeletes a WorkforcePoolProviderKey , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.locations.workforcePools.providers.operations
Methods
get
GET /v1/{name=locations/*/workforcePools/*/providers/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.locations.workforcePools.providers.scimTenants
Methods
create
POST /v1/{parent=locations/*/workforcePools/*/providers/*}/scimTenants
Gemini Enterprise only.
delete
DELETE /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*}
Gemini Enterprise only.
get
GET /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*}
Gemini Enterprise only.
list
GET /v1/{parent=locations/*/workforcePools/*/providers/*}/scimTenants
Gemini Enterprise only.
patch
PATCH /v1/{workforcePoolProviderScimTenant.name=locations/*/workforcePools/*/providers/*/scimTenants/*}
Gemini Enterprise only.
undelete
POST /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*}:undelete
Gemini Enterprise only.
REST Resource: v1.locations.workforcePools.providers.scimTenants.tokens
Methods
create
POST /v1/{parent=locations/*/workforcePools/*/providers/*/scimTenants/*}/tokens
Gemini Enterprise only.
delete
DELETE /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*/tokens/*}
Gemini Enterprise only.
get
GET /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*/tokens/*}
Gemini Enterprise only.
list
GET /v1/{parent=locations/*/workforcePools/*/providers/*/scimTenants/*}/tokens
Gemini Enterprise only.
patch
PATCH /v1/{workforcePoolProviderScimToken.name=locations/*/workforcePools/*/providers/*/scimTenants/*/tokens/*}
Gemini Enterprise only.
undelete
POST /v1/{name=locations/*/workforcePools/*/providers/*/scimTenants/*/tokens/*}:undelete
Gemini Enterprise only.
REST Resource: v1.locations.workforcePools.subjects
Methods
delete
DELETE /v1/{name=locations/*/workforcePools/*/subjects/*}
Deletes a WorkforcePoolSubject .
undelete
POST /v1/{name=locations/*/workforcePools/*/subjects/*}:undelete
Undeletes a WorkforcePoolSubject , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.organizations.roles
Methods
create
POST /v1/{parent=organizations/*}/roles
Creates a new custom Role .
delete
DELETE /v1/{name=organizations/*/roles/*}
Deletes a custom Role .
get
GET /v1/{name=organizations/*/roles/*}
Gets the definition of a Role .
list
GET /v1/{parent=organizations/*}/roles
Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
patch
PATCH /v1/{name=organizations/*/roles/*}
Updates the definition of a custom Role .
undelete
POST /v1/{name=organizations/*/roles/*}:undelete
Undeletes a custom Role .
REST Resource: v1.permissions
Methods
queryTestablePermissions
POST /v1/permissions:queryTestablePermissions
Lists every permission that you can test on a resource.
REST Resource: v1.projects.locations.oauthClients
Methods
create
POST /v1/{parent=projects/*/locations/*}/oauthClients
Creates a new OauthClient .
delete
DELETE /v1/{name=projects/*/locations/*/oauthClients/*}
Deletes an OauthClient .
get
GET /v1/{name=projects/*/locations/*/oauthClients/*}
Gets an individual OauthClient .
list
GET /v1/{parent=projects/*/locations/*}/oauthClients
Lists all non-deleted OauthClient s in a project.
patch
PATCH /v1/{oauthClient.name=projects/*/locations/*/oauthClients/*}
Updates an existing OauthClient .
undelete
POST /v1/{name=projects/*/locations/*/oauthClients/*}:undelete
Undeletes an OauthClient , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.oauthClients.credentials
Methods
create
POST /v1/{parent=projects/*/locations/*/oauthClients/*}/credentials
Creates a new OauthClientCredential .
delete
DELETE /v1/{name=projects/*/locations/*/oauthClients/*/credentials/*}
Deletes an OauthClientCredential .
get
GET /v1/{name=projects/*/locations/*/oauthClients/*/credentials/*}
Gets an individual OauthClientCredential .
list
GET /v1/{parent=projects/*/locations/*/oauthClients/*}/credentials
Lists all OauthClientCredential s in an OauthClient .
patch
PATCH /v1/{oauthClientCredential.name=projects/*/locations/*/oauthClients/*/credentials/*}
Updates an existing OauthClientCredential .
REST Resource: v1.projects.locations.workloadIdentityPools
Methods
create
POST /v1/{parent=projects/*/locations/*}/workloadIdentityPools
Creates a new WorkloadIdentityPool .
delete
DELETE /v1/{name=projects/*/locations/*/workloadIdentityPools/*}
Deletes a WorkloadIdentityPool .
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*}
Gets an individual WorkloadIdentityPool .
getIamPolicy
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*}:getIamPolicy
Gets the IAM policy of a WorkloadIdentityPool .
list
GET /v1/{parent=projects/*/locations/*}/workloadIdentityPools
Lists all non-deleted WorkloadIdentityPool s in a project.
patch
PATCH /v1/{workloadIdentityPool.name=projects/*/locations/*/workloadIdentityPools/*}
Updates an existing WorkloadIdentityPool .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*}:setIamPolicy
Sets the IAM policies on a WorkloadIdentityPool
testIamPermissions
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*}:testIamPermissions
Returns the caller's permissions on a WorkloadIdentityPool
undelete
POST /v1/{name=projects/*/locations/*/workloadIdentityPools/*}:undelete
Undeletes a WorkloadIdentityPool , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.workloadIdentityPools.namespaces
Methods
create
POST /v1/{parent=projects/*/locations/*/workloadIdentityPools/*}/namespaces
Creates a new WorkloadIdentityPoolNamespace in a WorkloadIdentityPool .
delete
DELETE /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}
Deletes a WorkloadIdentityPoolNamespace .
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}
Gets an individual WorkloadIdentityPoolNamespace .
list
GET /v1/{parent=projects/*/locations/*/workloadIdentityPools/*}/namespaces
Lists all non-deleted WorkloadIdentityPoolNamespace s in a workload identity pool.
patch
PATCH /v1/{workloadIdentityPoolNamespace.name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}
Updates an existing WorkloadIdentityPoolNamespace in a WorkloadIdentityPool .
undelete
POST /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}:undelete
Undeletes a WorkloadIdentityPoolNamespace , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.workloadIdentityPools.namespaces.managedIdentities
Methods
addAttestationRule
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}:addAttestationRule
Add an AttestationRule on a WorkloadIdentityPoolManagedIdentity .
create
POST /v1/{parent=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}/managedIdentities
Creates a new WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace .
delete
DELETE /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}
Deletes a WorkloadIdentityPoolManagedIdentity .
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}
Gets an individual WorkloadIdentityPoolManagedIdentity .
list
GET /v1/{parent=projects/*/locations/*/workloadIdentityPools/*/namespaces/*}/managedIdentities
Lists all non-deleted WorkloadIdentityPoolManagedIdentity s in a namespace.
listAttestationRules
GET /v1/{resource=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}:listAttestationRules
List all AttestationRule on a WorkloadIdentityPoolManagedIdentity .
patch
PATCH /v1/{workloadIdentityPoolManagedIdentity.name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}
Updates an existing WorkloadIdentityPoolManagedIdentity in a WorkloadIdentityPoolNamespace .
removeAttestationRule
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}:removeAttestationRule
Remove an AttestationRule on a WorkloadIdentityPoolManagedIdentity .
setAttestationRules
POST /v1/{resource=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}:setAttestationRules
Set all AttestationRule on a WorkloadIdentityPoolManagedIdentity .
undelete
POST /v1/{name=projects/*/locations/*/workloadIdentityPools/*/namespaces/*/managedIdentities/*}:undelete
Undeletes a WorkloadIdentityPoolManagedIdentity , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.workloadIdentityPools.operations
Methods
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.workloadIdentityPools.providers
Methods
create
POST /v1/{parent=projects/*/locations/*/workloadIdentityPools/*}/providers
Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool .
delete
DELETE /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Deletes a WorkloadIdentityPoolProvider .
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Gets an individual WorkloadIdentityPoolProvider .
list
GET /v1/{parent=projects/*/locations/*/workloadIdentityPools/*}/providers
Lists all non-deleted WorkloadIdentityPoolProvider s in a WorkloadIdentityPool .
patch
PATCH /v1/{workloadIdentityPoolProvider.name=projects/*/locations/*/workloadIdentityPools/*/providers/*}
Updates an existing WorkloadIdentityPoolProvider .
undelete
POST /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*}:undelete
Undeletes a WorkloadIdentityPoolProvider , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.workloadIdentityPools.providers.keys
Methods
create
POST /v1/{parent=projects/*/locations/*/workloadIdentityPools/*/providers/*}/keys
Create a new WorkloadIdentityPoolProviderKey in a WorkloadIdentityPoolProvider .
delete
DELETE /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*/keys/*}
Deletes an WorkloadIdentityPoolProviderKey .
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*/keys/*}
Gets an individual WorkloadIdentityPoolProviderKey .
list
GET /v1/{parent=projects/*/locations/*/workloadIdentityPools/*/providers/*}/keys
Lists all non-deleted WorkloadIdentityPoolProviderKey s in a project.
undelete
POST /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*/keys/*}:undelete
Undeletes an WorkloadIdentityPoolProviderKey , as long as it was deleted fewer than 30 days ago.
REST Resource: v1.projects.locations.workloadIdentityPools.providers.operations
Methods
get
GET /v1/{name=projects/*/locations/*/workloadIdentityPools/*/providers/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.roles
Methods
create
POST /v1/{parent=projects/*}/roles
Creates a new custom Role .
delete
DELETE /v1/{name=projects/*/roles/*}
Deletes a custom Role .
get
GET /v1/{name=projects/*/roles/*}
Gets the definition of a Role .
list
GET /v1/{parent=projects/*}/roles
Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
patch
PATCH /v1/{name=projects/*/roles/*}
Updates the definition of a custom Role .
undelete
POST /v1/{name=projects/*/roles/*}:undelete
Undeletes a custom Role .
REST Resource: v1.projects.serviceAccounts
Methods
create
POST /v1/{name=projects/*}/serviceAccounts
Creates a ServiceAccount .
delete
DELETE /v1/{name=projects/*/serviceAccounts/*}
Deletes a ServiceAccount .
disable
POST /v1/{name=projects/*/serviceAccounts/*}:disable
Disables a ServiceAccount immediately.
enable
POST /v1/{name=projects/*/serviceAccounts/*}:enable
Enables a ServiceAccount that was disabled by DisableServiceAccount .
get
GET /v1/{name=projects/*/serviceAccounts/*}
Gets a ServiceAccount .
getIamPolicy
POST /v1/{resource=projects/*/serviceAccounts/*}:getIamPolicy
Gets the IAM policy that is attached to a ServiceAccount .
list
GET /v1/{name=projects/*}/serviceAccounts
Lists every ServiceAccount that belongs to a specific project.
patch
PATCH /v1/{serviceAccount.name=projects/*/serviceAccounts/*}
Patches a ServiceAccount .
setIamPolicy
POST /v1/{resource=projects/*/serviceAccounts/*}:setIamPolicy
Sets the IAM policy that is attached to a ServiceAccount .
signBlob (deprecated)
POST /v1/{name=projects/*/serviceAccounts/*}:signBlob
Signs a blob using the system-managed private key for a ServiceAccount .
signJwt (deprecated)
POST /v1/{name=projects/*/serviceAccounts/*}:signJwt
Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount .
testIamPermissions
POST /v1/{resource=projects/*/serviceAccounts/*}:testIamPermissions
Tests whether the caller has the specified permissions on a ServiceAccount .
undelete
POST /v1/{name=projects/*/serviceAccounts/*}:undelete
Restores a deleted ServiceAccount .
update
PUT /v1/{name=projects/*/serviceAccounts/*}
Note: We are in the process of deprecating this method.
REST Resource: v1.projects.serviceAccounts.keys
Methods
create
POST /v1/{name=projects/*/serviceAccounts/*}/keys
Creates a ServiceAccountKey .
delete
DELETE /v1/{name=projects/*/serviceAccounts/*/keys/*}
Deletes a ServiceAccountKey .
disable
POST /v1/{name=projects/*/serviceAccounts/*/keys/*}:disable
Disable a ServiceAccountKey .
enable
POST /v1/{name=projects/*/serviceAccounts/*/keys/*}:enable
Enable a ServiceAccountKey .
get
GET /v1/{name=projects/*/serviceAccounts/*/keys/*}
Gets a ServiceAccountKey .
list
GET /v1/{name=projects/*/serviceAccounts/*}/keys
Lists every ServiceAccountKey for a service account.
upload
POST /v1/{name=projects/*/serviceAccounts/*}/keys:upload
Uploads the public key portion of a key pair that you manage, and associates the public key with a ServiceAccount .
REST Resource: v1.roles
Methods
get
GET /v1/{name=roles/*}
Gets the definition of a Role .
list
GET /v1/roles
Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project.
queryGrantableRoles
POST /v1/roles:queryGrantableRoles
Lists roles that can be granted on a Google Cloud resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
