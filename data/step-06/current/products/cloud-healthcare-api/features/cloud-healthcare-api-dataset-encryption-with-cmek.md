---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.041Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Cloud Healthcare API dataset encryption with CMEK"
feature_slug: "cloud-healthcare-api-dataset-encryption-with-cmek"
latest_feature_date: "2024-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/cmek"
  - "https://docs.cloud.google.com/healthcare-api/docs/datasets"
  - "https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy"
keywords:
  - "healthcare"
  - "dataset"
  - "encryption"
  - "cmek"
  - "datasets"
  - "can"
  - "encrypted"
  - "customer"
---

# Cloud Healthcare API dataset encryption with CMEK

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API datasets can be encrypted using customer-managed encryption keys (CMEK) in general availability; Cloud Healthcare API datasets can be encrypted using customer-managed encryption keys (CMEK) in general availability.

## Extended Definition

Cloud Healthcare API datasets can be encrypted using customer-managed encryption keys (CMEK) in general availability; Cloud Healthcare API datasets can be encrypted using customer-managed encryption keys (CMEK) in general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- [https://docs.cloud.google.com/healthcare-api/docs/datasets](https://docs.cloud.google.com/healthcare-api/docs/datasets)
- [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy)

## Supporting Pages

### "Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API datasets Stay organized with collections Save and categorize content based on your preferences.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for your Cloud Healthcare API datasets .
- Instead of Google owning and managing the encryption keys that protect your data, your Cloud Healthcare API datasets are encrypted using a key that you control and manage in Cloud Key Management Service (Cloud KMS) .
- CMEK-encrypted Cloud Healthcare API datasets and their DICOM, FHIR, and HL7v2 stores consume these quotas for all operations except datasets.get .

### "Create and manage datasets \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/datasets](https://docs.cloud.google.com/healthcare-api/docs/datasets)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you have specific compliance or regulatory requirements related to the keys that protect your data, create your dataset using the instructions in Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API datasets .
- Dataset creation is typically fast. """ Imports the Python built-in time module. import time Imports the Google API Discovery Service. from googleapiclient import discovery Imports HttpError from the Google Python API client errors module. from googleapiclient.errors import HttpError api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' location = 'us-central1' dataset id = 'my-dataset' dataset parent = f "projects/ { project id } /locations/ { location } " request = ( client . projects () . locations () . datasets () . create ( parent = dataset parent , body = {}, datasetId = dataset id ) ) Wait for operation to complete. start time = time . time () max time = 600 # 10 minutes, but dataset creation is typically only a few seconds. try : operation = request . execute () while not operation . get ( "done" , False ): Poll until the operation finishes. print ( "Waiting for operation to finish..." ) if time . time () - start time > max time : raise TimeoutError ( "Timed out waiting for operation to finish." ) operation = ( client . projects () . locations () . datasets () . operations () . get ( name = operation [ "name" ]) . execute () ) Wait 5 seconds between each poll to the operation. time . sleep ( 5 ) if "error" in operation : raise RuntimeError ( f "Create dataset operation failed: { operation [ 'error' ] } " ) else : dataset name = operation [ "response" ][ "name" ] print ( f "Created dataset: { dataset name } " ) return operation except HttpError as err : A common error is when the dataset already exists. if err . resp . status == 409 : print ( f "Dataset with ID { dataset id } already exists." ) return else : raise err Edit a dataset The following samples show how to edit a dataset.
- Before using any of the command data below, make the following replacements: LOCATION : the dataset location DATASET ID : the dataset ID TIME ZONE : a supported time zone, such as UTC Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare datasets update DATASET ID \ --location = LOCATION \ --time-zone = TIME ZONE Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare datasets update DATASET ID --location = LOCATION --time-zone = TIME ZONE Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud healthcare datasets update DATASET ID ^ --location = LOCATION ^ --time-zone = TIME ZONE You should receive a response similar to the following: Updated dataset [ DATASET ID ]. name: projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID timeZone: TIME ZONE REST Use the projects.locations.datasets.patch method.
- Imports the Google API Discovery Service. from googleapiclient import discovery from googleapiclient.errors import HttpError api version = "v1" service name = "healthcare" Returns an authorized API client by discovering the Healthcare API and using GOOGLE APPLICATION CREDENTIALS environment variable. client = discovery . build ( service name , api version ) TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' location = 'us-central1' dataset parent = f "projects/ { project id } /locations/ { location } " datasets = [] request = client . projects () . locations () . datasets () . list ( parent = dataset parent ) while request is not None : try : response = request . execute () if response and "datasets" in response : datasets . extend ( response [ "datasets" ]) Paginate over results until the list next() function returns None. request = ( client . projects () . locations () . datasets () . list next ( previous request = request , previous response = response ) ) for dataset in datasets : print ( f "Dataset: { dataset . get ( 'name' ) } \n Time zone: { dataset . get ( 'timeZone' ) } " ) return datasets except HttpError as err : raise err Delete a dataset Caution: Deleting a dataset also deletes the data stores in the dataset and their associated data.

### "Use custom organization policies \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy](https://docs.cloud.google.com/healthcare-api/docs/custom-org-policy)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-enable-healthcare-cmek.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enableHealthcareCMEK resourceTypes : - healthcare.googleapis.com/Dataset methodTypes : - CREATE condition : "!has(resource.encryptionSpec)" actionType : DENY displayName : Enable Healthcare CMEK description : All new datasets must be CMEK-encrypted.
- Test the custom organization policy The following example creates a custom constraint and policy that requires all new datasets in a specific project to be encrypted with a customer-managed encryption key (CMEK).
- Test the policy Try to create a Cloud Healthcare API dataset without providing a CMEK key in the project: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets?datasetId= DATASET ID " The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableHealthcareCMEK": "All new datasets must be CMEK-encrypted."] Cloud Healthcare API supported resources The following table lists the Cloud Healthcare API resources that you can reference in custom constraints.
- Resource Field healthcare.googleapis.com/ConsentStore resource.defaultConsentTtl resource.enableConsentCreateOnUpdate resource.name healthcare.googleapis.com/Dataset resource.encryptionSpec.kmsKeyName resource.name resource.timeZone healthcare.googleapis.com/DicomStore resource.name resource.notificationConfig.pubsubTopic resource.notificationConfig.sendForBulkImport resource.notificationConfigs.pubsubTopic resource.streamConfigs.bigqueryDestination.force resource.streamConfigs.bigqueryDestination.tableUri resource.streamConfigs.bigqueryDestination.writeDisposition healthcare.googleapis.com/FhirStore resource.bulkExportGcsDestination.uriPrefix resource.complexDataTypeReferenceParsing resource.consentConfig.accessDeterminationLogConfig.logLevel resource.consentConfig.accessEnforced resource.consentConfig.consentHeaderHandling.profile resource.consentConfig.version resource.defaultSearchHandlingStrict resource.disableReferentialIntegrity resource.disableResourceVersioning resource.enableHistoryModifications resource.enableUpdateCreate resource.name resource.notificationConfigs.pubsubTopic resource.notificationConfigs.sendFullResource resource.notificationConfigs.sendPreviousResourceOnDelete resource.streamConfigs.bigqueryDestination.datasetUri resource.streamConfigs.bigqueryDestination.force resource.streamConfigs.bigqueryDestination.schemaConfig.lastUpdatedPartitionConfig.expirationMs resource.streamConfigs.bigqueryDestination.schemaConfig.lastUpdatedPartitionConfig.type resource.streamConfigs.bigqueryDestination.schemaConfig.recursiveStructureDepth resource.streamConfigs.bigqueryDestination.schemaConfig.schemaType resource.streamConfigs.bigqueryDestination.writeDisposition resource.streamConfigs.deidentifiedStoreDestination.config.dicom.filterProfile resource.streamConfigs.deidentifiedStoreDestination.config.dicom.keepList.tags resource.streamConfigs.deidentifiedStoreDestination.config.dicom.removeList.tags resource.streamConfigs.deidentifiedStoreDestination.config.dicom.skipIdRedaction resource.streamConfigs.deidentifiedStoreDestination.config.fhir.defaultKeepExtensions resource.streamConfigs.deidentifiedStoreDestination.config.fhir.fieldMetadataList.action resource.streamConfigs.deidentifiedStoreDestination.config.fhir.fieldMetadataList.paths resource.streamConfigs.deidentifiedStoreDestination.config.image.additionalInfoTypes resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.action resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.modality resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.pixelBox.height resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.pixelBox.left resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.pixelBox.top resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.pixelBox.width resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.relativeBox.relativeHeight resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.relativeBox.relativeLeft resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.relativeBox.relativeTop resource.streamConfigs.deidentifiedStoreDestination.config.image.areasOfInterest.relativeBox.relativeWidth resource.streamConfigs.deidentifiedStoreDestination.config.image.excludeInfoTypes resource.streamConfigs.deidentifiedStoreDestination.config.image.minLikelihood resource.streamConfigs.deidentifiedStoreDestination.config.image.textRedactionMode resource.streamConfigs.deidentifiedStoreDestination.config.image.useBurnedInAnnotationAttribute resource.streamConfigs.deidentifiedStoreDestination.config.text.additionalTransformations.characterMaskConfig.maskingCharacter resource.streamConfigs.deidentifiedStoreDestination.config.text.additionalTransformations.infoTypes resource.streamConfigs.deidentifiedStoreDestination.config.text.excludeInfoTypes resource.streamConfigs.deidentifiedStoreDestination.config.text.transformations.characterMaskConfig.maskingCharacter resource.streamConfigs.deidentifiedStoreDestination.config.text.transformations.infoTypes resource.streamConfigs.deidentifiedStoreDestination.config.useRegionalDataProcessing resource.streamConfigs.deidentifiedStoreDestination.store resource.streamConfigs.resourceTypes resource.validationConfig.disableFhirpathValidation resource.validationConfig.disableProfileValidation resource.validationConfig.disableReferenceTypeValidation resource.validationConfig.disableRequiredFieldValidation resource.validationConfig.enabledImplementationGuides resource.version healthcare.googleapis.com/Hl7V2Store resource.name resource.notificationConfigs.filter resource.notificationConfigs.pubsubTopic resource.parserConfig.allowNullHeader resource.parserConfig.schema.ignoreMinOccurs resource.parserConfig.schema.schemas.version.mshField resource.parserConfig.schema.schemas.version.value resource.parserConfig.schema.schematizedParsingType resource.parserConfig.schema.types.type.fields.maxOccurs resource.parserConfig.schema.types.type.fields.minOccurs resource.parserConfig.schema.types.type.fields.name resource.parserConfig.schema.types.type.fields.table resource.parserConfig.schema.types.type.fields.type resource.parserConfig.schema.types.type.name resource.parserConfig.schema.types.type.primitive resource.parserConfig.schema.types.version.mshField resource.parserConfig.schema.types.version.value resource.parserConfig.schema.unexpectedFieldHandling resource.parserConfig.schema.unexpectedSegmentHandling resource.parserConfig.segmentTerminator resource.parserConfig.version resource.rejectDuplicateMessage What's next Learn more about Organization Policy Service .

