---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.150Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM fuzzy patient-name matching"
feature_slug: "dicom-fuzzy-patient-name-matching"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/reference/rest"
keywords:
  - "dicom"
  - "fuzzy"
  - "patient"
  - "name"
  - "matching"
  - "search"
  - "now"
  - "supports"
---

# DICOM fuzzy patient-name matching

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM search now supports fuzzy matching on patient names.

## Extended Definition

DICOM search now supports fuzzy matching on patient names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)

## Supporting Pages

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search parameters Searching by the following tags is supported: Studies: StudyInstanceUID PatientName PatientID AccessionNumber ReferringPhysicianName StudyDate Series: all study level search terms and SeriesInstanceUID Modality Instances: all study/series level search terms and SOPInstanceUID Only single value, exact matching is supported, except for StudyDate which supports range queries and PatientName which supports fuzzy matching.
- The following additional URL parameters are supported: fuzzymatching : If set to true , fuzzy matching will be applied to the PatientName tag.
- Fuzzy matching will perform tokenization and normalization of both the value of PatientName in the query and the stored value.
- Returned results The response can be in either JSON or XML format which can be controlled using the following Accept header values: application/dicom+json (default) multipart/related; type=application/dicom+xml By default the following attributes will be returned: Studies: SpecificCharacterSet StudyDate StudyTime AccessionNumber InstanceAvailability ReferringPhysicianName TimezoneOffsetFromUTC PatientName PatientID PatientBirthDate PatientSex StudyInstanceUID StudyID Series: SpecificCharacterSet Modality TimezoneOffsetFromUTC SeriesDescription SeriesInstanceUID PerformedProcedureStepStartDate PerformedProcedureStepStartTime RequestAttributesSequence Instances: SpecificCharacterSet SOPClassUID SOPInstanceUID InstanceAvailability TimezoneOffsetFromUTC InstanceNumber Rows Columns BitsAllocated NumberOfFrames For includefield=all , the default attributes will be returned along with the following attributes: Studies: PersonIdentificationCodeSequence PersonAddress PersonTelephoneNumbers PersonTelecomInformation InstitutionName InstitutionAddress InstitutionCodeSequence ReferringPhysicianIdentificationSequence ConsultingPhysicianName ConsultingPhysicianIdentificationSequence IssuerOfAccessionNumberSequence LocalNamespaceEntityID UniversalEntityID UniversalEntityIDType StudyDescription PhysiciansOfRecord PhysiciansOfRecordIdentificationSequence NameOfPhysiciansReadingStudy PhysiciansReadingStudyIdentificationSequence RequestingServiceCodeSequence ReferencedStudySequence ProcedureCodeSequence ReasonForPerformedProcedureCodeSequence Series: SeriesNumber Laterality SeriesDate SeriesTime Instances: all attributes present in the DICOM instance, excluding the following exceptions.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This sample searches for studies containing a patient's name. params = { "PatientName" : "Sally Zhang" } response = session . get ( dicomweb path , params = params ) response . raise for status () print ( f "Studies found: response is { response } " ) Uncomment the following lines to process the response as JSON. patients = response.json() print('Patients found matching query:') print(json.dumps(patients, indent=2)) return patients Use DICOM Studio The following steps show how to use DICOM Studio to search for studies, series, and instances.
- Note: You can add fuzzy matching when searching by PatientName by setting the query parameter below to ?PatientName=Sally%20Zhang&fuzzymatching=true .
- Note: You can add fuzzy matching when searching by PatientName by setting the query parameter below to ?PatientName=Sally%20Zhang&fuzzymatching=true .
- This sample // searches for studies containing a patient's name. params : { PatientName : 'Sally Zhang' }, headers : { Accept : 'application/dicom+json' }, } ); console . log ( studies ); console . log ( Found ${ studies . data . length } studies: ); console . log ( JSON . stringify ( studies . data )); }; dicomWebSearchStudies (); Python def dicomweb search studies ( project id , location , dataset id , dicom store id ): """Handles the GET requests specified in the DICOMweb standard.

### Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.datasets.dicomStores Methods create POST /v1beta1/{parent=projects/ /locations/ /datasets/ }/dicomStores Creates a new DICOM store within the parent dataset. deidentify POST /v1beta1/{sourceStore=projects/ /locations/ /datasets/ /dicomStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Deletes the specified DICOM store and removes all images that are contained within it. export POST /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:export Exports data to the specified destination by copying it from the DICOM store. get GET /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Gets the specified DICOM store. getDICOMStoreMetrics GET /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:getDICOMStoreMetrics Gets metrics associated with the DICOM store. getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1beta1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:import Imports data into the DICOM store by copying it from the specified source. list GET /v1beta1/{parent=projects/ /locations/ /datasets/ }/dicomStores Lists the DICOM stores in the given dataset. patch PATCH /v1beta1/{dicomStore.name=projects/ /locations/ /datasets/ /dicomStores/ } Updates the specified DICOM store. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=series} SearchForSeries returns a list of matching series. searchForStudies GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} SearchForStudies returns a list of matching studies. setBlobStorageSettings POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setIamPolicy Sets the access control policy on the specified resource. storeInstances POST /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updateInstances PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} UpdateInstances updates DICOM instances associated with study instance unique identifiers (SUID).
- REST Resource: v1.projects.locations.datasets.dicomStores Methods create POST /v1/{parent=projects/ /locations/ /datasets/ }/dicomStores Creates a new DICOM store within the parent dataset. deidentify POST /v1/{sourceStore=projects/ /locations/ /datasets/ /dicomStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Deletes the specified DICOM store and removes all images that are contained within it. export POST /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:export Exports data to the specified destination by copying it from the DICOM store. get GET /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ } Gets the specified DICOM store. getDICOMStoreMetrics GET /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:getDICOMStoreMetrics Gets metrics associated with the DICOM store. getIamPolicy GET /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1/{name=projects/ /locations/ /datasets/ /dicomStores/ }:import Imports data into the DICOM store by copying it from the specified source. list GET /v1/{parent=projects/ /locations/ /datasets/ }/dicomStores Lists the DICOM stores in the given dataset. patch PATCH /v1/{dicomStore.name=projects/ /locations/ /datasets/ /dicomStores/ } Updates the specified DICOM store. searchForInstances GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=series} SearchForSeries returns a list of matching series. searchForStudies GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} SearchForStudies returns a list of matching studies. setBlobStorageSettings POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setBlobStorageSettings SetBlobStorageSettings sets the blob storage settings of the specified resources. setIamPolicy POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:setIamPolicy Sets the access control policy on the specified resource. storeInstances POST /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies} StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). testIamPermissions POST /v1/{resource=projects/ /locations/ /datasets/ /dicomStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta1.projects.locations.datasets.fhirStores Methods applyAdminConsents POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:applyAdminConsents Applies the admin Consent resources for the FHIR store and reindexes the underlying resources in the FHIR store according to the aggregate consents. applyConsents POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:applyConsents Apply the Consent resources for the FHIR store and reindex the underlying resources in the FHIR store according to the aggregate consent. bulk-export-group GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ /fhir/Group/ }/$export Bulk exports a Group resource and resources in the member field, including related resources for each Patient member. configureSearch POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:configureSearch Configure the search parameters for the FHIR store and reindex resources in the FHIR store according to the defined search parameters. create POST /v1beta1/{parent=projects/ /locations/ /datasets/ }/fhirStores Creates a new FHIR store within the parent dataset. deidentify POST /v1beta1/{sourceStore=projects/ /locations/ /datasets/ /fhirStores/ }:deidentify De-identifies data from the source store and writes it to the destination store. delete DELETE /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ } Deletes the specified FHIR store and removes all resources within it. explainDataAccess GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:explainDataAccess Explains all the permitted/denied actor, purpose and environment for a given resource. export POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:export Export resources from the FHIR store to the specified destination. exportHistory POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:exportHistory Export resources including historical versions from the FHIR store to the specified destination. get GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ } Gets the configuration of the specified FHIR store. getFHIRStoreMetrics GET /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:getFHIRStoreMetrics Gets metrics associated with the FHIR store. getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:getIamPolicy Gets the access control policy for a resource. import POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:import Import resources to the FHIR store by loading data from the specified sources. importHistory POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:importHistory Import resource historical versions from Cloud Storage source to destination fhir store. list GET /v1beta1/{parent=projects/ /locations/ /datasets/ }/fhirStores Lists the FHIR stores in the given dataset. patch PATCH /v1beta1/{fhirStore.name=projects/ /locations/ /datasets/ /fhirStores/ } Updates the configuration of the specified FHIR store. rollback POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:rollback Rolls back resources from the FHIR store to the specified time. setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /datasets/ /fhirStores/ }:testIamPermissions Returns permissions that a caller has on the specified resource. bulkDelete POST /v1beta1/{name=projects/ /locations/ /datasets/ /fhirStores/ }:bulkDelete Bulk-delete multiple FHIR resources from a FHIR store based on filters.
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.studies Methods delete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } DeleteStudy deletes all instances within the given study using a long running operation. retrieveMetadata GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /metadata} RetrieveStudyMetadata returns instance associated with the given study presented as metadata. retrieveStudy GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } RetrieveStudy returns all instances within the given study. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series} SearchForSeries returns a list of matching series. storeInstances POST /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). updateInstances PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } UpdateInstances updates DICOM instances associated with study instance unique identifiers (SUID). updateMetadata PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ }/metadata UpdateStudyMetadata modifies the metadata of all instances in the given study.

