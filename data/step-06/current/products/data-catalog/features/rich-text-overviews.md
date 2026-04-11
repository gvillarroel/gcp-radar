---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.156Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Rich-text overviews"
feature_slug: "rich-text-overviews"
latest_feature_date: "2022-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient"
  - "https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries"
keywords:
  - "rich"
  - "text"
  - "overviews"
  - "catalog"
  - "supports"
  - "creating"
  - "for"
  - "entries"
---

# Rich-text overviews

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog supports creating rich-text overviews for data entries.

## Extended Definition

Data Catalog supports creating rich-text overviews for data entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- [https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries](https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries)

## Supporting Pages

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datacatalog v1.types.EntryOverview Entry overview fields for rich text descriptions of entries. parse common billing account path parse common billing account path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 async def sample import entries(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 async def sample list entries(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = datacatalog v1 .

### "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- Source ID: `site-python-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.datacatalog v1.types.EntryOverview Entry overview fields for rich text descriptions of entries. parse common billing account path parse common billing account path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 def sample import entries(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 def sample list entries(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = datacatalog v1 .

### "Create custom Data Catalog entries for your data sources \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries](https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ColumnSchema ( column = "second column" , type = "DOUBLE" , description = "This columns consists of ...." , mode = None , ) ) entry = datacatalog . create entry ( parent = entry group name , entry id = entry id , entry = entry ) print ( "Created entry: {} " . format ( entry . name )) REST & CMD LINE REST See the following examples and refer to the Data Catalog REST API entryGroups.create and entryGroups.entries.create documentation.
- Home Documentation Data analytics Data Catalog Guides Send feedback Create custom Data Catalog entries for your data sources Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for a local development environment . // Import the Google Cloud client library. const { DataCatalogClient } = require ( ' @google-cloud/datacatalog ' ). v1 ; const datacatalog = new DataCatalogClient (); async function createCustomEntry () { // Create a custom entry within an entry group. / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my project'; // const entryGroupId = 'my entry group'; // const entryId = 'my entry'; // const tagTemplateId = 'my tag template'; // Currently, Data Catalog stores metadata in the us-central1 region. const location = 'us-central1' ; // Delete any pre-existing Entry with the same name // that will be used to create the new Entry. try { const entryName = datacatalog . entryPath ( projectId , location , entryGroupId , entryId ); await datacatalog . deleteEntry ({ name : entryName }); console . log ( Deleted Entry: ${ entryName } ); } catch ( err ) { console . log ( 'Entry does not exist.' ); } // Delete any pre-existing Entry Group with the same name // that will be used to construct the new EntryGroup. try { const entryGroupName = datacatalog . entryGroupPath ( projectId , location , entryGroupId ); await datacatalog . deleteEntryGroup ({ name : entryGroupName }); console . log ( Deleted Entry Group: ${ entryGroupName } ); } catch ( err ) { console . log ( 'Entry Group does not exist.' ); } // Delete any pre-existing Template with the same name // that will be used to create a new Template. const tagTemplateName = datacatalog . tagTemplatePath ( projectId , location , tagTemplateId ); let tagTemplateRequest = { name : tagTemplateName , force : true , }; try { await datacatalog . deleteTagTemplate ( tagTemplateRequest ); console . log ( Deleted template: ${ tagTemplateName } ); } catch ( error ) { console . log ( Cannot delete template: ${ tagTemplateName } ); } // Construct the EntryGroup for the EntryGroup request. const entryGroup = { displayName : 'My awesome Entry Group' , description : 'This Entry Group represents an external system' , }; // Construct the EntryGroup request to be sent by the client. const entryGroupRequest = { parent : datacatalog . locationPath ( projectId , location ), entryGroupId : entryGroupId , entryGroup : entryGroup , }; // Use the client to send the API request. const [ createdEntryGroup ] = await datacatalog . createEntryGroup ( entryGroupRequest ); console . log ( Created entry group: ${ createdEntryGroup . name } ); // Construct the Entry for the Entry request. const entry = { userSpecifiedSystem : 'onprem data system' , userSpecifiedType : 'onprem data asset' , displayName : 'My awesome data asset' , description : 'This data asset is managed by an external system.' , linkedResource : '//my-onprem-server.com/dataAssets/my-awesome-data-asset' , schema : { columns : [ { column : 'first column' , description : 'This columns consists of ....' , mode : 'NULLABLE' , type : 'STRING' , }, { column : 'second column' , description : 'This columns consists of ....' , mode : 'NULLABLE' , type : 'DOUBLE' , }, ], }, }; // Construct the Entry request to be sent by the client. const entryRequest = { parent : datacatalog . entryGroupPath ( projectId , location , entryGroupId ), entryId : entryId , entry : entry , }; // Use the client to send the API request. const [ createdEntry ] = await datacatalog . createEntry ( entryRequest ); console . log ( Created entry: ${ createdEntry . name } ); // Create a Tag Template. // For more field types, including ENUM, please refer to // https://cloud.google.com/data-catalog/docs/quickstarts/quickstart-search-tag#data-catalog-quickstart-nodejs. const fieldSource = { displayName : 'Source of data asset' , type : { primitiveType : 'STRING' , }, }; const tagTemplate = { displayName : 'Demo Tag Template' , fields : { source : fieldSource , }, }; tagTemplateRequest = { parent : datacatalog . locationPath ( projectId , location ), tagTemplateId : tagTemplateId , tagTemplate : tagTemplate , }; // Use the client to send the API request. const [ createdTagTemplate ] = await datacatalog . createTagTemplate ( tagTemplateRequest ); console . log ( Created template: ${ createdTagTemplate . name } ); // Attach a Tag to the custom Entry. const tag = { template : createdTagTemplate . name , fields : { source : { stringValue : 'On-premises system name' , }, }, }; const tagRequest = { parent : createdEntry . name , tag : tag , }; // Use the client to send the API request. const [ createdTag ] = await datacatalog . createTag ( tagRequest ); console . log ( Created tag: ${ createdTag . name } ); } createCustomEntry (); Python Before trying this sample, follow the Python setup instructions in the Data Catalog quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project id " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/my project id/locations/us-central1/entryGroups/my entryGroup id/entries/my entry id", "userSpecifiedType": "my-type", "userSpecifiedSystem": "my system", "displayName": "On-prem entry", "description": "My entry description.", "schema": { "columns": [ { "type": "STRING", "description": "First name", "mode": "REQUIRED", "column": "first name" }, { "type": "STRING", "description": "Last name", "mode": "REQUIRED", "column": "last name" }, { "type": "RECORD", "description": "Address", "mode": "REPEATED", "column": "address", "subcolumns": [ { "type": "STRING", "description": "City", "mode": "NULLABLE", "column": "city" }, { "type": "STRING", "description": "State", "mode": "NULLABLE", "column": "state" } ] } ] }, "sourceSystemTimestamps": { "createTime": "2019-10-23T23:11:26.326Z", "updateTime": "2019-10-23T23:11:26.326Z" }, "linkedResource": "example.com/def" } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

