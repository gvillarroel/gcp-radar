---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.066Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "FHIR conditional delete operation using identifier search parameter"
feature_slug: "fhir-conditional-delete-operation-using-identifier-search-parameter"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources"
  - "https://docs.cloud.google.com/healthcare-api/docs/reference/rest"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search"
keywords:
  - "fhir"
  - "conditional"
  - "delete"
  - "operation"
  - "identifier"
  - "search"
  - "parameter"
  - "conditionaldelete"
---

# FHIR conditional delete operation using identifier search parameter

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

The fhir.conditionalDelete conditional operation is generally available using the FHIR identifier search parameter.

## Extended Definition

The fhir.conditionalDelete conditional operation is generally available using the FHIR identifier search parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search)

## Supporting Pages

### "Creating and managing FHIR resources \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns: An empty dict. """ Imports the Google API Discovery Service. from googleapiclient import discovery api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' location = 'us-central1' dataset id = 'my-dataset' fhir store id = 'my-fhir-store' resource type = 'Patient' resource id = 'b682d-0e-4843-a4a9-78c9ac64' fhir store parent = ( f "projects/ { project id } /locations/ { location } /datasets/ { dataset id } " ) fhir resource path = f " { fhir store parent } /fhirStores/ { fhir store id } /fhir/ { resource type } / { resource id } " request = ( client . projects () . locations () . datasets () . fhirStores () . fhir () . delete ( name = fhir resource path ) ) response = request . execute () print ( f "Deleted { resource type } resource with ID { resource id } ." ) return response Conditionally delete a FHIR resource In the Cloud Healthcare API v1, conditional operations exclusively use the identifier search parameter, if it exists for the FHIR resource type, to determine which FHIR resources match a conditional search query.
- To use the conditional create interaction instead of the create interaction, specify an If-None-Exist HTTP header containing a FHIR search query in your request: If-None-Exist: FHIR SEARCH QUERY In the Cloud Healthcare API v1, conditional operations exclusively use the identifier search parameter, if it exists for the FHIR resource type, to determine which FHIR resources match a conditional search query.
- In the Cloud Healthcare API v1, conditional operations exclusively use the identifier search parameter, if it exists for the FHIR resource type, to determine which FHIR resources match a conditional search query.
- In the Cloud Healthcare API v1, conditional operations exclusively use the identifier search parameter, if it exists for the FHIR resource type, to determine which FHIR resources match a conditional search query.

### Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource-validate POST /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type}/$validate Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. bulk-export GET /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/$export Bulk exports all resources from the FHIR store to the specified destination. capabilities GET /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/metadata Gets the FHIR capability statement ( STU3 , R4 , R5 ), or the conformance statement in the DSTU2 case for the store, which contains a description of functionality supported by the server. conditionalDelete DELETE /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} Deletes a FHIR resource that match an identifier search query. conditionalPatch PATCH /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} If a resource is found with the identifier specified in the query parameters, updates part of that resource by applying the operations specified in a JSON Patch document. conditionalUpdate PUT /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} If a resource is found with the identifier specified in the query parameters, updates the entire contents of that resource. create POST /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} Creates a FHIR resource. delete DELETE /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Deletes a FHIR resource. executeBundle POST /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir Executes all the requests in the given Bundle. history GET /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / }/ history Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. patch PATCH /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Updates part of an existing resource by applying the operations specified in a JSON Patch document. read GET /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Gets the contents of a FHIR resource. search GET /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{resourceType} Searches for resources in the given FHIR store according to criteria specified as query parameters. search-type POST /v1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{resourceType}/ search Searches for resources in the given FHIR store according to criteria specified as query parameters. update PUT /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Updates the entire contents of a resource. vread GET /v1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / / history/ } Gets the contents of a version (current or historical) of a FHIR resource by version ID.
- Resource-validate POST /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type}/$validate Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. bulk-export GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/$export Bulk exports all resources from the FHIR store to the specified destination. capabilities GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/metadata Gets the FHIR capability statement ( STU3 , R4 , R5 ), or the conformance statement in the DSTU2 case for the store, which contains a description of functionality supported by the server. conditionalDelete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} Deletes FHIR resources that match a search query. conditionalPatch PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} If a resource is found based on the search criteria specified in the query parameters, updates part of that resource by applying the operations specified in a JSON Patch document. conditionalUpdate PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} If a resource is found based on the search criteria specified in the query parameters, updates the entire contents of that resource. create POST /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{type} Creates a FHIR resource. delete DELETE /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Deletes a FHIR resource. executeBundle POST /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir Executes all the requests in the given Bundle. history GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / }/ history Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. patch PATCH /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Updates part of an existing resource by applying the operations specified in a JSON Patch document. read GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Gets the contents of a FHIR resource. search GET /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{resourceType} Searches for resources in the given FHIR store according to criteria specified as query parameters. search-type POST /v1beta1/{parent=projects/ /locations/ /datasets/ /fhirStores/ }/fhir/{resourceType}/ search Searches for resources in the given FHIR store according to criteria specified as query parameters. update PUT /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / } Updates the entire contents of a resource. vread GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/ / / history/ } Gets the contents of a version (current or historical) of a FHIR resource by version ID.
- REST Resource: v1beta1.projects.locations.datasets.fhirStores Methods applyAdminConsents POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:applyAdminConsents Applies the admin Consent resources for the FHIR store and reindexes the underlying resources in the FHIR store according to the aggregate consents. applyConsents POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:applyConsents Apply the Consent resources for the FHIR store and reindex the underlying resources in the FHIR store according to the aggregate consent. bulk-export-group GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/Group/ }/$export Bulk exports a Group resource and resources in the member field, including related resources for each Patient member. configureSearch POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:configureSearch Configure the search parameters for the FHIR store and reindex resources in the FHIR store according to the defined search parameters. create POST /v1beta1/{parent=projects/ /locations/ /datasets/ }/fhirStores Creates a new FHIR store within the parent dataset. deidentify POST /v1beta1/{sourceStore=projects/ /locations/ /datasets/ /fhirStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ } Deletes the specified FHIR store and removes all resources within it. explainDataAccess GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:explainDataAccess Explains all the permitted/denied actor, purpose and environment for a given resource. export POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:export Export resources from the FHIR store to the specified destination. exportHistory POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:exportHistory Export resources including historical versions from the FHIR store to the specified destination. get GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ } Gets the configuration of the specified FHIR store. getFHIRStoreMetrics GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:getFHIRStoreMetrics Gets metrics associated with the FHIR store. getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:import Import resources to the FHIR store by loading data from the specified sources. importHistory POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:importHistory Import resource historical versions from Cloud Storage source to destination fhir store. list GET /v1beta1/{parent=projects/ /locations/ /datasets/ }/fhirStores Lists the FHIR stores in the given dataset. patch PATCH /v1beta1/{fhirStore.name=projects/ /locations/ /datasets/ /fhirStores/ } Updates the configuration of the specified FHIR store. rollback POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:rollback Rolls back resources from the FHIR store to the specified time. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource. bulkDelete POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:bulkDelete Bulk-delete multiple FHIR resources from a FHIR store based on filters.
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.studies Methods delete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } DeleteStudy deletes all instances within the given study using a long running operation. retrieveMetadata GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /metadata} RetrieveStudyMetadata returns instance associated with the given study presented as metadata. retrieveStudy GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } RetrieveStudy returns all instances within the given study. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series} SearchForSeries returns a list of matching series. storeInstances POST /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). updateInstances PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } UpdateInstances updates DICOM instances associated with study instance unique identifiers (SUID). updateMetadata PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ }/metadata UpdateStudyMetadata modifies the metadata of all instances in the given study.

### "Searching for FHIR resources \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can scope the search to the URI of a "system" indicating the value set the code is taken from using the following format: [parameter]=[system] [code] For example, the following search matches a code of 10738-3, but only when qualified as a value from a coding system with the specified URI: code=http://hl7.org/fhir/ValueSet/observation-codes 10738-3 Quantity Searches for a numeric value using the same prefix modifiers as number .
- For example, the following query only returns matching results for Observation and Condition resources: GET .../fhir? tag=active& type=Observation,Condition Data types Each search parameter defined by FHIR has a data type, which includes primitive types such as the following: String Number Date Data types also include the following complex types: Token Reference Quantity Each data type has its own syntax for specifying values.
- To use the special synchronous index, the search term for identifier should be in the pattern identifier=[system] [value] or identifier=[value] , and any of the following search result parameters can be used: count include revinclude summary elements If your query contains any other search parameters, the standard asynchronous index will be used instead.
- To sort using other types of search parameters (for example, reference ), use FHIR custom searches to create, for example, a string search parameter on the reference field.

