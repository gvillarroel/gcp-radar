---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.601Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Operation service"
feature_slug: "operation-service"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema"
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set"
keywords:
  - "operation"
  - "enables"
  - "the"
  - "for"
  - "document"
  - "ai"
  - "warehouse"
  - "v1"
---

# Operation service

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Enables the operation service for Document AI Warehouse v1.

## Extended Definition

Enables the operation service for Document AI Warehouse v1.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema)
- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set)

## Supporting Pages

### Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. const projectNumber = 'YOUR PROJECT NUMBER'; const location = 'YOUR PROJECT LOCATION'; // Format is 'us' or 'eu' const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com" const documentQueryText = 'YOUR DOCUMENT QUERY' / // Import from google cloud const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ; const apiEndpoint = location === 'us' ? 'contentwarehouse.googleapis.com' : ${ location } -contentwarehouse.googleapis.com ; // Create service client const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint }); // Get Document Schema async function searchDocuments () { // Initialize request argument(s) const searchRequest = { // The full resource name of the location, e.g.: // projects/{project number}/locations/{location} parent : projects/ ${ projectNumber } /locations/ ${ location } , // Document Text Query documentQuery : { query : documentQueryText , // File Type Filter fileTypeFilter : { fileType : ' DOCUMENT ' , }, }, // Histogram Query histogramQueries : [ { histogramQuery : 'count("DocumentSchemaId")' , }, ], requestMetadata : { userInfo : { id : userId }}, }; // Make Request const response = serviceClient . searchDocuments ( searchRequest ); // Print out response response . then ( result = > console . log ( Document Found: ${ JSON . stringify ( result ) } ), error = > console . log ( ${ error } ) ); } Python For more information, see the Document AI Warehouse Python API reference documentation .
- This client only needs to be created once, and can be reused for multiple requests. / try ( ProjectsClient projectsClient = ProjectsClient . create ()) { ProjectName projectName = ProjectName . of ( projectId ); Project project = projectsClient . getProject ( projectName ); String projectNumber = project . getName (); // Format returned is projects/xxxxxx return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 ); } } } Node.js For more information, see the Document AI Warehouse Node.js API reference documentation .
- Search documents in Document AI Warehouse Explore further For detailed documentation that includes this code sample, see the following: Search documents Code sample Java For more information, see the Document AI Warehouse Java API reference documentation .
- String documentQuery = "your-document-query" ; String userId = "your-user-id" ; // Format is user:<user-id> searchDocuments ( projectId , location , documentQuery , userId ); } // Searches all documents for a given Document Query public static void searchDocuments ( String projectId , String location , String documentQuery , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ) . build (); / Create the Document Service Client Initialize client that will be used to send requests.

### Update document schema \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on managing document schemas, please see the below documentation. https://cloud.google.com/document-warehouse/docs/manage-document-schemas / GetDocumentSchema . getDocumentSchema ( projectId , location , documentSchemaId ); updateDocumentSchema ( projectId , location , documentSchemaId ); } // Updates an existing Document Schema public static void updateDocumentSchema ( String projectId , String location , String documentSchemaId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentSchemaServiceSettings documentSchemaServiceSettings = DocumentSchemaServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); / Create the Schema Service Client Initialize client that will be used to send requests.
- This client only needs to be created once, and can be reused for multiple requests. / try ( ProjectsClient projectsClient = ProjectsClient . create ()) { ProjectName projectName = ProjectName . of ( projectId ); Project project = projectsClient . getProject ( projectName ); String projectNumber = project . getName (); // Format returned is projects/xxxxxx return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 ); } } } Python For more information, see the Document AI Warehouse Python API reference documentation .
- Update a document schema Explore further For detailed documentation that includes this code sample, see the following: Manage document schemas Code sample Java For more information, see the Document AI Warehouse Java API reference documentation .
- This client only needs to be created once, and can be reused for multiple requests. / try ( DocumentSchemaServiceClient documentSchemaServiceClient = DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) { / The full resource name of the location, e.g.: projects/{project number}/location/{location}/documentSchemas/{document schema id} / DocumentSchemaName documentSchemaName = DocumentSchemaName . of ( projectNumber , location , documentSchemaId ); // Define the new Schema Property with updated values PropertyDefinition propertyDefinition = PropertyDefinition . newBuilder () . setName ( "plaintiff" ) . setDisplayName ( "Plaintiff" ) . setIsSearchable ( true ) . setIsRepeatable ( true ) . setIsRequired ( false ) . setTextTypeOptions ( TextTypeOptions . newBuilder () . build ()) . build (); DocumentSchema updatedDocumentSchema = DocumentSchema . newBuilder () . setDisplayName ( "Test Doc Schema" ) . addPropertyDefinitions ( 0 , propertyDefinition ). build (); // Create the Request to Update the Document Schema UpdateDocumentSchemaRequest updateDocumentSchemaRequest = UpdateDocumentSchemaRequest . newBuilder () . setName ( documentSchemaName . toString ()) . setDocumentSchema ( updatedDocumentSchema ) . build (); // Update Document Schema updatedDocumentSchema = documentSchemaServiceClient . updateDocumentSchema ( updateDocumentSchemaRequest ); // Read the output of Updated Document Schema Name System . out . println ( updatedDocumentSchema . getName ()); } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.

### CloudAIDocumentOption \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/CloudAIDocumentOption)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Document AI Warehouse Reference Send feedback CloudAIDocumentOption Stay organized with collections Save and categorize content based on your preferences.
- Request Option for processing Cloud AI Document in CW Document.
- For details, see the Google Developers Site Policies .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]

### Create a rule set \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ON CREATE ) . setCondition ( "documentType == 'W9' && STATE =='CA' " ) . addActions ( 0 , ( Action ) action ). build (); // Create rule set and add rule to it RuleSetOrBuilder ruleSetOrBuilder = RuleSet . newBuilder () . setDescription ( "W9: Basic validation check rules." ) . setSource ( "My Organization" ) . addRules (( Rule ) rule ). build (); // Create and prepare rule set request to client CreateRuleSetRequestOrBuilder createRuleSetRequest = CreateRuleSetRequest . newBuilder () . setParent ( parent ) . setRuleSet (( RuleSet ) ruleSetOrBuilder ). build (); RuleSet response = ruleSetServiceClient . createRuleSet ( ( CreateRuleSetRequest ) createRuleSetRequest ); System . out . println ( "Rule set created: " + response . toString ()); ListRuleSetsRequestOrBuilder listRuleSetsRequest = ListRuleSetsRequest . newBuilder () . setParent ( parent ). build (); ListRuleSetsPagedResponse listRuleSetsPagedResponse = ruleSetServiceClient . listRuleSets (( ListRuleSetsRequest ) listRuleSetsRequest ); listRuleSetsPagedResponse . iterateAll (). forEach ( ( ruleSet - > System . out . print ( ruleSet )) ); } } private static String getProjectNumber ( String projectId ) throws IOException { try ( ProjectsClient projectsClient = ProjectsClient . create ()) { ProjectName projectName = ProjectName . of ( projectId ); Project project = projectsClient . getProject ( projectName ); String projectNumber = project . getName (); // Format returned is projects/xxxxxx return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 ); } } } Python For more information, see the Document AI Warehouse Python API reference documentation .
- Create a rule set Explore further For detailed documentation that includes this code sample, see the following: Set up policies Code sample Java For more information, see the Document AI Warehouse Java API reference documentation .
- String projectId = "your-project-id" ; String location = "your-region" ; // Format is "us" or "eu". createRuleSet ( projectId , location ); } public static void createRuleSet ( String projectId , String location ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } RuleSetServiceSettings ruleSetServiceSettings = RuleSetServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Create a Rule Set Service Client try ( RuleSetServiceClient ruleSetServiceClient = RuleSetServiceClient . create ( ruleSetServiceSettings )) { / The full resource name of the location, e.g.: projects/{project number}/locations/{location} / String parent = LocationName . format ( projectNumber , location ); // Create a Delete Document Action to be added to the Rule Set DeleteDocumentActionOrBuilder deleteDocumentAction = DeleteDocumentAction . newBuilder (). setEnableHardDelete ( true ). build (); // Add Delete Document Action to Action Object ActionOrBuilder action = Action . newBuilder () . setDeleteDocumentAction (( DeleteDocumentAction ) deleteDocumentAction ). build (); // Create rule to add to rule set RuleOrBuilder rule = Rule . newBuilder () . setTriggerType ( TriggerType .
- For more information, see Set up authentication for a local development environment . import com.google.cloud.contentwarehouse.v1.

