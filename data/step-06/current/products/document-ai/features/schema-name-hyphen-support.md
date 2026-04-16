---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.967Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Schema name hyphen support"
feature_slug: "schema-name-hyphen-support"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/custom-splitter"
  - "https://docs.cloud.google.com/document-ai/docs/custom-classifier"
  - "https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema"
  - "https://docs.cloud.google.com/document-ai/docs/handle-response"
keywords:
  - "schema"
  - "name"
  - "hyphen"
  - "custom"
  - "document"
  - "splitter"
  - "now"
  - "allows"
---

# Schema name hyphen support

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Custom Document Splitter now allows hyphens in schema names.

## Extended Definition

Custom Document Splitter now allows hyphens in schema names.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)

## Supporting Pages

### Custom splitter \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-splitter](https://docs.cloud.google.com/document-ai/docs/custom-splitter)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- In the Create processor menu, enter a name for your processor, such as my-custom-document-splitter .
- Repeat the previous steps with the following paths and document labels: Bucket path Document label cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/1040 form 1040 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w2 form w2 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/w9 form w9 cloud-samples-data/documentai/Custom/Lending-Splitter/PDF-CDS-BatchLabel/paystub paystub The console should look like this when complete: Select Import .
- Enable the APIs Required roles To get the permissions that you need to create a custom splitter, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Previous arrow back Custom classifier Next Document splitters behavior arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Create, use, and manage a custom document classifier \_|\_ Document AI \_\

- URL: [https://docs.cloud.google.com/document-ai/docs/custom-classifier](https://docs.cloud.google.com/document-ai/docs/custom-classifier)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- In the Create processor menu, enter a name for your processor, such as my-custom-document-classifier .
- Enable the APIs Required roles To get the permissions that you need to create a custom classifier, ask your administrator to grant you the following IAM roles on your project: Document AI Administrator ( roles/documentai.admin ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Documents panel, you can find that one document has been assigned to the training set. (Optional) Import prelabeled data to the training and test sets If you're using v1.4, you must upload training and test sets to train the custom processor.
- Next Custom splitter arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema](https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- So the string values in DocumentSchema.EntityType.name and DocumentSchema.EntityType.Property.name won't be checked.
- Otherwise, it can only be applied to the entire document (classification). documentAllowMultipleLabels boolean If true, on a given page, there can be multiple document annotations covering it. prefixedNamingOnProperties boolean If set, all the nested entities must be prefixed with the parents. skipNamingValidation boolean If set, this will skip the naming format validation in the schema.
- JSON representation { "displayName" : string , "description" : string , "entityTypes" : [ { object ( EntityType ) } ] , "metadata" : { object ( Metadata ) } } Fields displayName string Display name to show users. description string Description of the schema. entityTypes[] object ( EntityType ) Entity types of the schema. metadata object ( Metadata ) Metadata of the schema.
- JSON representation { "documentSplitter" : boolean , "documentAllowMultipleLabels" : boolean , "prefixedNamingOnProperties" : boolean , "skipNamingValidation" : boolean } Fields documentSplitter boolean If true, a document entity type can be applied to subdocument (splitting).

### Handle processing response \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Note: Enterprise Knowledge Graph, used for information enrichment, strives for accuracy but cannot be guaranteed to be perfect. { "entities" : [ { "textAnchor" : { "textSegments" : [ ... ], "content" : "Google Singapore" }, "type" : "supplier name" , "confidence" : 0.39170802 , "pageAnchor" : { ... }, "id" : "12" , "normalizedValue" : { "text" : "Google Asia Pacific, Singapore" } }, { "type" : "supplier address" , "id" : "17" , "normalizedValue" : { "text" : "70 Pasir Panjang Rd #03-71 Mapletree Business City II Singapore 117371" , "addressValue" : { "regionCode" : "SG" , "languageCode" : "en-US" , "postalCode" : "117371" , "addressLines" : [ "70 Pasir Panjang Rd" , "#03-71 Mapletree Business City II" ] } } } ] } Nested fields : Nested schema (fields) can be created by first declaring an entity as a parent, then creating child entities under the parent.
- ProcessRequest request = ProcessRequest . newBuilder (). setName ( name ). setRawDocument ( document ). build (); // Recognizes text entities in the PDF document ProcessResponse result = client . processDocument ( request ); Document documentResponse = result . getDocument (); System . out . println ( "Document processing complete." ); // Read the splitter output from the document splitter processor: // https://cloud.google.com/document-ai/docs/processors-list#processor doc-splitter // This processor only provides text for the document and information on how // to split the document on logical boundaries.
- EntityType ( name = "custom extraction document type" , base types = [ "document" ], properties = properties , ) ], ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) for entity in document . entities : print entity ( entity ) Print Nested Entities (if any) for prop in entity . properties : print entity ( prop ) def print entity ( entity : documentai .
- For example, the original supplier name in the document Google Singapore has been normalized against the Enterprise Knowledge Graph to Google Asia Pacific, Singapore .

