---
title: "Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/reference/rpc
  title: "Cloud Healthcare API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Reference
Send feedback
Cloud Healthcare API
Stay organized with collections
Save and categorize content based on your preferences.
Manage, store, and access healthcare data in Google Cloud Platform.
Service: healthcare.googleapis.com
The Service name healthcare.googleapis.com is needed to create RPC client stubs.
google.cloud.healthcare.v1.consent.ConsentService
Methods
ActivateConsent
Activates the latest revision of the specified Consent by committing a new revision with state updated to ACTIVE .
ArchiveUserDataMapping
Archives the specified User data mapping .
CheckDataAccess
Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.
CreateAttributeDefinition
Creates a new Attribute definition in the parent consent store .
CreateConsent
Creates a new Consent in the parent consent store .
CreateConsentArtifact
Creates a new Consent artifact in the parent consent store .
CreateConsentStore
Creates a new consent store in the parent dataset.
CreateUserDataMapping
Creates a new User data mapping in the parent consent store .
DeleteAttributeDefinition
Deletes the specified Attribute definition .
DeleteConsent
Deletes the Consent and its revisions.
DeleteConsentArtifact
Deletes the specified Consent artifact .
DeleteConsentRevision
Deletes the specified revision of a Consent .
DeleteConsentStore
Deletes the specified consent store and removes all the consent store's data.
DeleteUserDataMapping
Deletes the specified User data mapping .
EvaluateUserConsents
Evaluates the user's Consents for all matching User data mappings .
GetAttributeDefinition
Gets the specified Attribute definition .
GetConsent
Gets the specified revision of a Consent , or the latest revision if revision_id is not specified in the resource name.
GetConsentArtifact
Gets the specified Consent artifact .
GetConsentStore
Gets the specified consent store .
GetUserDataMapping
Gets the specified User data mapping .
ListAttributeDefinitions
Lists the Attribute definitions in the specified consent store .
ListConsentArtifacts
Lists the Consent artifacts in the specified consent store .
ListConsentRevisions
Lists the revisions of the specified Consent in reverse chronological order.
ListConsentStores
Lists the consent stores in the specified dataset.
ListConsents
Lists the Consent in the given consent store , returning each Consent's latest revision.
ListUserDataMappings
Lists the User data mappings in the specified consent store .
QueryAccessibleData
Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination.
RejectConsent
Rejects the latest revision of the specified Consent by committing a new revision with state updated to REJECTED .
RevokeConsent
Revokes the latest revision of the specified Consent by committing a new revision with state updated to REVOKED .
UpdateAttributeDefinition
Updates the specified Attribute definition .
UpdateConsent
Updates the latest revision of the specified Consent by committing a new revision with the changes.
UpdateConsentStore
Updates the specified consent store .
UpdateUserDataMapping
Updates the specified User data mapping .
google.cloud.healthcare.v1.dataset.DatasetService
Methods
CreateDataset
Creates a new health dataset.
DeidentifyDataset
Creates a new dataset containing de-identified data from the source dataset.
DeleteDataset
Deletes the specified health dataset and all data contained in the dataset.
GetDataset
Gets any metadata associated with a dataset.
ListDatasets
Lists the health datasets in the current project.
UpdateDataset
Updates dataset metadata.
google.cloud.healthcare.v1.deidentify.DeidentifyService
Methods
DeidentifyDicomStore
De-identifies data from the source store and writes it to the destination store.
DeidentifyFhirStore
De-identifies data from the source store and writes it to the destination store.
google.cloud.healthcare.v1.dicom.DicomService
Methods
CreateDicomStore
Creates a new DICOM store within the parent dataset.
DeleteDicomStore
Deletes the specified DICOM store and removes all images that are contained within it.
ExportDicomData
Exports data to the specified destination by copying it from the DICOM store.
GetDicomStore
Gets the specified DICOM store.
GetDicomStoreMetrics
Gets metrics associated with the DICOM store.
ImportDicomData
Imports data into the DICOM store by copying it from the specified source.
ListDicomStores
Lists the DICOM stores in the given dataset.
UpdateDicomStore
Updates the specified DICOM store.
google.cloud.healthcare.v1.fhir.FhirStoreService
Methods
CreateFhirStore
Creates a new FHIR store within the parent dataset.
DeleteFhirStore
Deletes the specified FHIR store and removes all resources within it.
ExportResources
Export resources from the FHIR store to the specified destination.
GetFhirStore
Gets the configuration of the specified FHIR store.
GetFhirStoreMetrics
Gets metrics associated with the FHIR store.
ImportResources
Imports resources to the FHIR store by loading data from the specified sources.
ListFhirStores
Lists the FHIR stores in the given dataset.
RollbackFhirResources
Rolls back resources from the FHIR store to the specified time.
UpdateFhirStore
Updates the configuration of the specified FHIR store.
google.cloud.healthcare.v1.hl7v2.Hl7V2Service
Methods
CreateHl7V2Store
Creates a new HL7v2 store within the parent dataset.
CreateMessage
Parses and stores an HL7v2 message.
DeleteHl7V2Store
Deletes the specified HL7v2 store and removes all messages that it contains.
DeleteMessage
Deletes an HL7v2 message.
ExportMessages
Exports the messages to a destination.
GetHl7V2Store
Gets the specified HL7v2 store.
GetHl7V2StoreMetrics
Gets metrics associated with the HL7v2 store.
GetMessage
Gets an HL7v2 message.
ImportMessages
Import messages to the HL7v2 store by loading data from the specified sources.
IngestMessage
Parses and stores an HL7v2 message.
ListHl7V2Stores
Lists the HL7v2 stores in the given dataset.
ListMessages
Lists all the messages in the given HL7v2 store with support for filtering.
UpdateHl7V2Store
Updates the HL7v2 store.
UpdateMessage
Update the message.
google.cloud.healthcare.v1.nlp.NlpService
Methods
AnalyzeEntities
Analyze heathcare entity in a document.
google.cloud.healthcare.v1beta1.annotation.AnnotationService
Methods
CreateAnnotation
Creates a new Annotation record.
CreateAnnotationStore
Creates a new Annotation store within the parent dataset.
DeleteAnnotation
Deletes an Annotation or returns NOT_FOUND if it does not exist.
DeleteAnnotationStore
Deletes the specified Annotation store and removes all annotations that are contained within it.
EvaluateAnnotationStore
Evaluate an Annotation store against a ground truth Annotation store .
ExportAnnotations
Export Annotations from the Annotation store .
GetAnnotation
Gets an Annotation .
GetAnnotationStore
Gets the specified Annotation store or returns NOT_FOUND if it does not exist.
ImportAnnotations
Import Annotations to the Annotation store by loading data from the specified sources.
ListAnnotationStores
Lists the Annotation stores in the given dataset for a source store.
ListAnnotations
Lists the Annotations in the given Annotation store for a source resource.
UpdateAnnotation
Updates the Annotation .
UpdateAnnotationStore
Updates the specified Annotation store.
google.cloud.healthcare.v1beta1.consent.ConsentService
Methods
ActivateConsent
Activates the latest revision of the specified Consent by committing a new revision with state updated to ACTIVE .
ArchiveUserDataMapping
Archives the specified User data mapping .
CheckDataAccess
Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.
CreateAttributeDefinition
Creates a new Attribute definition in the parent consent store .
CreateConsent
Creates a new Consent in the parent consent store .
CreateConsentArtifact
Creates a new Consent artifact in the parent consent store .
CreateConsentStore
Creates a new consent store in the parent dataset.
CreateUserDataMapping
Creates a new User data mapping in the parent consent store .
DeleteAttributeDefinition
Deletes the specified Attribute definition .
DeleteConsent
Deletes the Consent and its revisions.
DeleteConsentArtifact
Deletes the specified Consent artifact .
DeleteConsentRevision
Deletes the specified revision of a Consent .
DeleteConsentStore
Deletes the specified consent store and removes all the consent store's data.
DeleteUserDataMapping
Deletes the specified User data mapping .
EvaluateUserConsents
Evaluates the user's Consents for all matching User data mappings .
GetAttributeDefinition
Gets the specified Attribute definition .
GetConsent
Gets the specified revision of a Consent , or the latest revision if revision_id is not specified in the resource name.
GetConsentArtifact
Gets the specified Consent artifact .
GetConsentStore
Gets the specified consent store .
GetUserDataMapping
Gets the specified User data mapping .
ListAttributeDefinitions
Lists the Attribute definitions in the specified consent store .
ListConsentArtifacts
Lists the Consent artifacts in the specified consent store .
ListConsentRevisions
Lists the revisions of the specified Consent in reverse chronological order.
ListConsentStores
Lists the consent stores in the specified dataset.
ListConsents
Lists the Consent in the given consent store , returning each Consent's latest revision.
ListUserDataMappings
Lists the User data mappings in the specified consent store .
QueryAccessibleData
Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination.
RejectConsent
Rejects the latest revision of the specified Consent by committing a new revision with state updated to REJECTED .
RevokeConsent
Revokes the latest revision of the specified Consent by committing a new revision with state updated to REVOKED .
UpdateAttributeDefinition
Updates the specified Attribute definition .
UpdateConsent
Updates the latest revision of the specified Consent by committing a new revision with the changes.
UpdateConsentStore
Updates the specified consent store .
UpdateUserDataMapping
Updates the specified User data mapping .
google.cloud.healthcare.v1beta1.dataset.DatasetService
Methods
CreateDataset
Creates a new health dataset.
DeidentifyDataset
Creates a new dataset containing de-identified data from the source dataset.
DeleteDataset
Deletes the specified health dataset and all data contained in the dataset.
GetDataset
Gets any metadata associated with a dataset.
ListDatasets
Lists the health datasets in the current project.
UpdateDataset
Updates dataset metadata.
google.cloud.healthcare.v1beta1.deidentify.DeidentifyService
Methods
DeidentifyDicomStore
De-identifies data from the source store and writes it to the destination store.
DeidentifyFhirStore
De-identifies data from the source store and writes it to the destination store.
google.cloud.healthcare.v1beta1.dicom.DicomService
Methods
CreateDicomStore
Creates a new DICOM store within the parent dataset.
DeleteDicomStore
Deletes the specified DICOM store and removes all images that are contained within it.
ExportDicomData
Exports data to the specified destination by copying it from the DICOM store.
GetDicomStore
Gets the specified DICOM store.
GetDicomStoreMetrics
Gets metrics associated with the DICOM store.
ImportDicomData
Imports data into the DICOM store by copying it from the specified source.
ListDicomStores
Lists the DICOM stores in the given dataset.
UpdateDicomStore
Updates the specified DICOM store.
google.cloud.healthcare.v1beta1.fhir.FhirStoreService
Methods
ApplyAdminConsents
Applies the admin Consent resources for the FHIR store and reindexes the underlying resources in the FHIR store according to the aggregate consents.
ApplyConsents
Apply the Consent resources for the FHIR store and reindex the underlying resources in the FHIR store according to the aggregate consent.
ConfigureSearch
Configure the search parameters for the FHIR store and reindex resources in the FHIR store according to the defined search parameters.
CreateFhirStore
Creates a new FHIR store within the parent dataset.
DeleteFhirStore
Deletes the specified FHIR store and removes all resources within it.
ExplainDataAccess
Explains all the permitted/denied actor, purpose and environment for a given resource.
ExportResources
Export resources from the FHIR store to the specified destination.
GetFhirStore
Gets the configuration of the specified FHIR store.
GetFhirStoreMetrics
Gets metrics associated with the FHIR store.
ImportResources
Import resources to the FHIR store by loading data from the specified sources.
ListFhirStores
Lists the FHIR stores in the given dataset.
RollbackFhirResources
Rolls back resources from the FHIR store to the specified time.
UpdateFhirStore
Updates the configuration of the specified FHIR store.
google.cloud.healthcare.v1beta1.hl7v2.Hl7V2Service
Methods
BatchGetMessages
Gets multiple messages in the given HL7v2 store.
CreateHl7V2Store
Creates a new HL7v2 store within the parent dataset.
CreateMessage
Parses and stores an HL7v2 message.
DeleteHl7V2Store
Deletes the specified HL7v2 store and removes all messages that it contains.
DeleteMessage
Deletes an HL7v2 message.
ExportMessages
Exports the messages to a destination.
GetHl7V2Store
Gets the specified HL7v2 store.
GetHl7V2StoreMetrics
Gets metrics associated with the HL7v2 store.
GetMessage
Gets an HL7v2 message.
ImportMessages
Import messages to the HL7v2 store by loading data from the specified sources.
IngestMessage
Parses and stores an HL7v2 message.
ListHl7V2Stores
Lists the HL7v2 stores in the given dataset.
ListMessages
Lists all the messages in the given HL7v2 store with support for filtering.
UpdateHl7V2Store
Updates the HL7v2 store.
UpdateMessage
Update the message.
google.cloud.healthcare.v1beta1.nlp.NlpService
Methods
AnalyzeEntities
Analyze heathcare entity in a document.
google.cloud.healthcare.v1beta1.storageinfo.StorageInfoService
Methods
GetStorageInfo
GetStorageInfo returns the storage info of the specified resource.
SetBlobStorageSettings
SetBlobStorageSettings sets the blob storage settings of the specified resources.
google.cloud.location.Locations
Methods
GetLocation
Gets information about a location.
ListLocations
Lists information about the supported locations for this service.
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
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
