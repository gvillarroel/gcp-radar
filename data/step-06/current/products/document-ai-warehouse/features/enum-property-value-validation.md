---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.514Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Enum property value validation"
feature_slug: "enum-property-value-validation"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document"
  - "https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema"
  - "https://docs.cloud.google.com/document-warehouse/docs/libraries"
keywords:
  - "enum"
  - "property"
  - "value"
  - "validation"
  - "validates"
  - "values"
  - "against"
  - "schema"
---

# Enum property value validation

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Validates enum property values against the schema by default.

## Extended Definition

Validates enum property values against the schema by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema)
- [https://docs.cloud.google.com/document-warehouse/docs/libraries](https://docs.cloud.google.com/document-warehouse/docs/libraries)

## Supporting Pages

### Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document](https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , // Union field values can be only one of the following: "integerValues" : { object ( IntegerArray ) } , "floatValues" : { object ( FloatArray ) } , "textValues" : { object ( TextArray ) } , "enumValues" : { object ( EnumArray ) } , "propertyValues" : { object ( PropertyArray ) } , "dateTimeValues" : { object ( DateTimeArray ) } , "mapProperty" : { object ( MapProperty ) } , "timestampValues" : { object ( TimestampArray ) } // End of list of possible types for union field values . } Fields name string Required.
- Specific type value(s) obtained from Document AIs Property.mention text field. values can be only one of the following: integerValues object ( IntegerArray ) Integer property values. floatValues object ( FloatArray ) Float property values. textValues object ( TextArray ) String/text property values. enumValues object ( EnumArray ) Enum property values. propertyValues object ( PropertyArray ) Nested structured data property values. dateTimeValues object ( DateTimeArray ) date time property values.
- Format: projects/{projectNumber}/locations/{location}/documentSchemas/{document schema id}. properties[] object ( Property ) List of values that are user supplied metadata. updateTime string ( Timestamp format) Output only.
- JSON representation { "name" : string , "referenceId" : string , "displayName" : string , "title" : string , "displayUri" : string , "documentSchemaName" : string , "properties" : [ { object ( Property ) } ] , "updateTime" : string , "createTime" : string , "rawDocumentFileType" : enum ( RawDocumentFileType ) , "contentCategory" : enum ( ContentCategory ) , "textExtractionDisabled" : boolean , "textExtractionEnabled" : boolean , "creator" : string , "updater" : string , "dispositionTime" : string , "legalHold" : boolean , // Union field structured content can be only one of the following: "plainText" : string , "cloudAiDocument" : { object ( Document ) } // End of list of possible types for union field structured content . // Union field raw document can be only one of the following: "rawDocumentPath" : string , "inlineRawDocument" : string // End of list of possible types for union field raw document . } Fields name string The resource name of the document.

### Update document schema \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema](https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-update-document-schema)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only needs to be created once, and can be reused for multiple requests. / try ( DocumentSchemaServiceClient documentSchemaServiceClient = DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) { / The full resource name of the location, e.g.: projects/{project number}/location/{location}/documentSchemas/{document schema id} / DocumentSchemaName documentSchemaName = DocumentSchemaName . of ( projectNumber , location , documentSchemaId ); // Define the new Schema Property with updated values PropertyDefinition propertyDefinition = PropertyDefinition . newBuilder () . setName ( "plaintiff" ) . setDisplayName ( "Plaintiff" ) . setIsSearchable ( true ) . setIsRepeatable ( true ) . setIsRequired ( false ) . setTextTypeOptions ( TextTypeOptions . newBuilder () . build ()) . build (); DocumentSchema updatedDocumentSchema = DocumentSchema . newBuilder () . setDisplayName ( "Test Doc Schema" ) . addPropertyDefinitions ( 0 , propertyDefinition ). build (); // Create the Request to Update the Document Schema UpdateDocumentSchemaRequest updateDocumentSchemaRequest = UpdateDocumentSchemaRequest . newBuilder () . setName ( documentSchemaName . toString ()) . setDocumentSchema ( updatedDocumentSchema ) . build (); // Update Document Schema updatedDocumentSchema = documentSchemaServiceClient . updateDocumentSchema ( updateDocumentSchemaRequest ); // Read the output of Updated Document Schema Name System . out . println ( updatedDocumentSchema . getName ()); } } private static String getProjectNumber ( String projectId ) throws IOException { / Initialize client that will be used to send requests.
- DocumentSchemaServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location}/documentSchemas/{document schema id} document schema path = document schema client . document schema path ( project = project number , location = location , document schema = document schema id , ) Define Schema Property of Text Type with updated values updated property definition = contentwarehouse .
- DocumentSchema ( display name = "My Test Schema" , property definitions = [ updated property definition ], ), ) Update Document schema updated document schema = document schema client . update document schema ( request = update document schema request ) Read the output print ( f "Updated Document Schema: { updated document schema } " ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- PropertyDefinition ( name = "stock symbol" , # Must be unique within a document schema (case insensitive) display name = "Searchable text" , is searchable = True , is repeatable = False , is required = True , text type options = contentwarehouse .

### Document AI Warehouse client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-warehouse/docs/libraries](https://docs.cloud.google.com/document-warehouse/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String userId = "your-user-id" ; // Format is user:<user-id> quickStart ( projectId , location , userId ); } public static void quickStart ( String projectId , String location , String userId ) throws IOException , InterruptedException , ExecutionException , TimeoutException { String projectNumber = getProjectNumber ( projectId ); String endpoint = "contentwarehouse.googleapis.com:443" ; if ( ! "us" . equals ( location )) { endpoint = String . format ( "%s-%s" , location , endpoint ); } DocumentSchemaServiceSettings documentSchemaServiceSettings = DocumentSchemaServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Create a Schema Service client try ( DocumentSchemaServiceClient documentSchemaServiceClient = DocumentSchemaServiceClient . create ( documentSchemaServiceSettings )) { / The full resource name of the location, e.g.: projects/{project number}/locations/{location} / String parent = LocationName . format ( projectNumber , location ); / Create Document Schema with Text Type Property Definition More detail on managing Document Schemas: https://cloud.google.com/document-warehouse/docs/manage-document-schemas / DocumentSchema documentSchema = DocumentSchema . newBuilder () . setDisplayName ( "My Test Schema" ) . setDescription ( "My Test Schema's Description" ) . addPropertyDefinitions ( PropertyDefinition . newBuilder () . setName ( "test symbol" ) . setDisplayName ( "Searchable text" ) . setIsSearchable ( true ) . setTextTypeOptions ( TextTypeOptions . newBuilder (). build ()) . build ()). build (); // Define Document Schema request CreateDocumentSchemaRequest createDocumentSchemaRequest = CreateDocumentSchemaRequest . newBuilder () . setParent ( parent ) . setDocumentSchema ( documentSchema ). build (); // Create Document Schema DocumentSchema documentSchemaResponse = documentSchemaServiceClient . createDocumentSchema ( createDocumentSchemaRequest ); // Create Document Service Client Settings DocumentServiceSettings documentServiceSettings = DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Create Document Service Client and Document with relevant properties try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ( documentServiceSettings )) { TextArray textArray = TextArray . newBuilder (). addValues ( "Test" ). build (); Document document = Document . newBuilder () . setDisplayName ( "My Test Document" ) . setDocumentSchemaName ( documentSchemaResponse . getName ()) . setPlainText ( "This is a sample of a document's text." ) . addProperties ( Property . newBuilder () . setName ( documentSchema . getPropertyDefinitions ( 0 ). getName ()) . setTextValues ( textArray )). build (); // Define Request Metadata for enforcing access control RequestMetadata requestMetadata = RequestMetadata . newBuilder () . setUserInfo ( UserInfo . newBuilder () . setId ( userId ). build ()). build (); // Define Create Document Request CreateDocumentRequest createDocumentRequest = CreateDocumentRequest . newBuilder () . setParent ( parent ) . setDocument ( document ) . setRequestMetadata ( requestMetadata ) . build (); // Create Document CreateDocumentResponse createDocumentResponse = documentServiceClient . createDocument ( createDocumentRequest ); System . out . println ( createDocumentResponse . getDocument (). getName ()); System . out . println ( documentSchemaResponse . getName ()); } } } private static String getProjectNumber ( String projectId ) throws IOException { try ( ProjectsClient projectsClient = ProjectsClient . create ()) { ProjectName projectName = ProjectName . of ( projectId ); Project project = projectsClient . getProject ( projectName ); String projectNumber = project . getName (); // Format returned is projects/xxxxxx return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 ); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- Property ( name = document schema . property definitions [ 0 ] . name , text values = contentwarehouse .
- DocumentSchema ( display name = "My Test Schema" , property definitions = [ property definition ], ), ) Create a Document schema document schema = document schema client . create document schema ( request = create document schema request ) Create a Document Service client document client = contentwarehouse .
- DocumentSchemaServiceClient () The full resource name of the location, e.g.: projects/{project number}/locations/{location} parent = document schema client . common location path ( project = project number , location = location ) Define Schema Property of Text Type property definition = contentwarehouse .

