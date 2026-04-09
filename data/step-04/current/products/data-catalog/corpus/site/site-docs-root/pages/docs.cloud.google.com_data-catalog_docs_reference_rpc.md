---
title: "Google Cloud Data Catalog API \_|\_ Data Catalog Documentation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rpc
  title: "Google Cloud Data Catalog API \_|\_ Data Catalog Documentation \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
Google Cloud Data Catalog API
Stay organized with collections
Save and categorize content based on your preferences.
A fully managed and highly scalable data discovery and metadata management service.
Service: datacatalog.googleapis.com
The Service name datacatalog.googleapis.com is needed to create RPC client stubs.
google.cloud.datacatalog.v1.DataCatalog
Data Catalog is deprecated. Please use Dataplex Universal Catalog instead.
Methods
CreateEntry (deprecated)
Creates an entry.
CreateEntryGroup (deprecated)
Creates an entry group.
CreateTag (deprecated)
Creates a tag and assigns it to:
An Entry if the method name is projects.locations.entryGroups.entries.tags.create .
CreateTagTemplate (deprecated)
Creates a tag template.
CreateTagTemplateField (deprecated)
Creates a field in a tag template.
DeleteEntry (deprecated)
Deletes an existing entry.
DeleteEntryGroup (deprecated)
Deletes an entry group.
DeleteTag (deprecated)
Deletes a tag.
DeleteTagTemplate (deprecated)
Deletes a tag template and all tags that use it.
DeleteTagTemplateField (deprecated)
Deletes a field in a tag template and all uses of this field from the tags based on this template.
GetEntry (deprecated)
Gets an entry.
GetEntryGroup (deprecated)
Gets an entry group.
GetIamPolicy (deprecated)
Gets the access control policy for a resource.
GetTagTemplate (deprecated)
Gets a tag template.
ListEntries (deprecated)
Lists entries.
ListEntryGroups (deprecated)
Lists entry groups.
ListTags (deprecated)
Lists tags assigned to an Entry .
LookupEntry (deprecated)
Gets an entry by its target resource name.
ModifyEntryContacts (deprecated)
Modifies contacts, part of the business context of an Entry .
ModifyEntryOverview (deprecated)
Modifies entry overview, part of the business context of an Entry .
ReconcileTags (deprecated)
ReconcileTags creates or updates a list of tags on the entry.
RenameTagTemplateField (deprecated)
Renames a field in a tag template.
RenameTagTemplateFieldEnumValue (deprecated)
Renames an enum value in a tag template.
RetrieveConfig (deprecated)
Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set.
RetrieveEffectiveConfig (deprecated)
Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project.
SearchCatalog (deprecated)
Searches Data Catalog for multiple resources like entries and tags that match a query.
SetConfig (deprecated)
Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.
SetIamPolicy (deprecated)
Sets an access control policy for a resource.
StarEntry (deprecated)
Marks an Entry as starred by the current user.
TestIamPermissions (deprecated)
Gets your permissions on a resource.
UnstarEntry (deprecated)
Marks an Entry as NOT starred by the current user.
UpdateEntry (deprecated)
Updates an existing entry.
UpdateEntryGroup (deprecated)
Updates an entry group.
UpdateTag (deprecated)
Updates an existing tag.
UpdateTagTemplate (deprecated)
Updates a tag template.
UpdateTagTemplateField (deprecated)
Updates a field in a tag template.
google.cloud.datacatalog.v1.PolicyTagManager
Methods
CreatePolicyTag
Creates a policy tag in a taxonomy.
CreateTaxonomy
Creates a taxonomy in a specified project.
DeletePolicyTag
Deletes a policy tag together with the following:
All of its descendant policy tags, if any
Policies associated with the policy tag and its descendants
References from BigQuery table schema of the policy tag and its descendants
DeleteTaxonomy
Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.
GetIamPolicy
Gets the IAM policy for a policy tag or a taxonomy.
GetPolicyTag
Gets a policy tag.
GetTaxonomy
Gets a taxonomy.
ListPolicyTags
Lists all policy tags in a taxonomy.
ListTaxonomies
Lists all taxonomies in a project in a particular location that you have a permission to view.
SetIamPolicy
Sets the IAM policy for a policy tag or a taxonomy.
TestIamPermissions
Returns your permissions on a specified policy tag or taxonomy.
UpdatePolicyTag
Updates a policy tag, including its display name, description, and parent policy tag.
UpdateTaxonomy
Updates a taxonomy, including its display name, description, and activated policy types.
google.cloud.datacatalog.v1.PolicyTagManagerSerialization
Methods
ExportTaxonomies
Exports taxonomies in the requested type and returns them, including their policy tags.
ImportTaxonomies
Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources.
ReplaceTaxonomy
Replaces (updates) a taxonomy and all its policy tags.
google.cloud.datacatalog.v1beta1.DataCatalog
Data Catalog is deprecated. Please use Dataplex Universal Catalog instead.
Methods
CreateEntry (deprecated)
Creates an entry.
CreateEntryGroup (deprecated)
A maximum of 10,000 entry groups may be created per organization across all locations.
CreateTag (deprecated)
Creates a tag on an Entry .
CreateTagTemplate (deprecated)
Creates a tag template.
CreateTagTemplateField (deprecated)
Creates a field in a tag template.
DeleteEntry (deprecated)
Deletes an existing entry.
DeleteEntryGroup (deprecated)
Deletes an EntryGroup.
DeleteTag (deprecated)
Deletes a tag.
DeleteTagTemplate (deprecated)
Deletes a tag template and all tags using the template.
DeleteTagTemplateField (deprecated)
Deletes a field in a tag template and all uses of that field.
GetEntry (deprecated)
Gets an entry.
GetEntryGroup (deprecated)
Gets an EntryGroup.
GetIamPolicy (deprecated)
Gets the access control policy for a resource.
GetTagTemplate (deprecated)
Gets a tag template.
ListEntries (deprecated)
Lists entries.
ListEntryGroups (deprecated)
Lists entry groups.
ListTags (deprecated)
Lists tags assigned to an Entry .
LookupEntry (deprecated)
Get an entry by target resource name.
RenameTagTemplateField (deprecated)
Renames a field in a tag template.
RenameTagTemplateFieldEnumValue (deprecated)
Renames an enum value in a tag template.
SearchCatalog (deprecated)
Searches Data Catalog for multiple resources like entries, tags that match a query.
SetIamPolicy (deprecated)
Sets the access control policy for a resource.
TestIamPermissions (deprecated)
Returns the caller's permissions on a resource.
UpdateEntry (deprecated)
Updates an existing entry.
UpdateEntryGroup (deprecated)
Updates an EntryGroup.
UpdateTag (deprecated)
Updates an existing tag.
UpdateTagTemplate (deprecated)
Updates a tag template.
UpdateTagTemplateField (deprecated)
Updates a field in a tag template.
google.cloud.datacatalog.v1beta1.PolicyTagManager
Methods
CreatePolicyTag
Creates a policy tag in the specified taxonomy.
CreateTaxonomy
Creates a taxonomy in the specified project.
DeletePolicyTag
Deletes a policy tag.
DeleteTaxonomy
Deletes a taxonomy.
GetIamPolicy
Gets the IAM policy for a taxonomy or a policy tag.
GetPolicyTag
Gets a policy tag.
GetTaxonomy
Gets a taxonomy.
ListPolicyTags
Lists all policy tags in a taxonomy.
ListTaxonomies
Lists all taxonomies in a project in a particular location that the caller has permission to view.
SetIamPolicy
Sets the IAM policy for a taxonomy or a policy tag.
TestIamPermissions
Returns the permissions that a caller has on the specified taxonomy or policy tag.
UpdatePolicyTag
Updates a policy tag.
UpdateTaxonomy
Updates a taxonomy.
google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization
Methods
ExportTaxonomies
Exports all taxonomies and their policy tags in a project.
ImportTaxonomies
Imports all taxonomies and their policy tags to a project as new taxonomies.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
