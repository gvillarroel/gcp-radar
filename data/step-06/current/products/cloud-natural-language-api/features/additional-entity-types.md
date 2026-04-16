---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.620Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Additional entity types"
feature_slug: "additional-entity-types"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entities"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment"
keywords:
  - "additional"
  - "entity"
  - "types"
  - "analyzeentities"
  - "now"
  - "identifies"
  - "including"
  - "phone"
---

# Additional entity types

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

AnalyzeEntities now identifies additional entity types including phone numbers, addresses, dates, prices, and numbers.

## Extended Definition

AnalyzeEntities now identifies additional entity types including phone numbers, addresses, dates, prices, and numbers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-entities](https://docs.cloud.google.com/natural-language/docs/analyzing-entities)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)

## Supporting Pages

### Entity \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enums UNKNOWN Unknown PERSON Person LOCATION Location ORGANIZATION Organization EVENT Event WORK OF ART Artwork CONSUMER GOOD Consumer product OTHER Other types of entities PHONE NUMBER Phone number The metadata lists the phone number, formatted according to local convention, plus whichever additional elements appear in the text: number - the actual number, broken down into sections as per local convention national prefix - country code, if detected area code - region or area code, if detected extension - phone extension (to be dialed after connection), if detected ADDRESS Address The metadata identifies the street number and locality plus whichever additional elements appear in the text: street number - street number locality - city or town street name - street/route name, if detected postal code - postal code, if detected country - country, if detected< broad region - administrative area, such as the state, if detected narrow region - smaller administrative area, such as county, if detected sublocality - used in Asian addresses to demark a district within a city, if detected DATE Date The metadata identifies the components of the date: year - four digit year, if detected month - two digit month number, if detected day - two digit day number, if detected NUMBER Number The metadata is the number itself.
- For most entity types, the metadata is a Wikipedia URL ( wikipedia url ) and Knowledge Graph MID ( mid ), if they are available.
- For most entity types, the associated metadata is a Wikipedia URL ( wikipedia url ) and Knowledge Graph MID ( mid ).
- JSON representation Type EntityMention JSON representation Type Represents a phrase in the text that is a known entity, such as a person, an organization, or location.

### Analyzing Entities \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entities](https://docs.cloud.google.com/natural-language/docs/analyzing-entities)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the types of entities Natural Language identifies, see the Entity documentation.
- Some entity types may have additional metadata, e.g.
- Some entity types may have additional metadata, e.g.
- To perform entity analysis on a file in Cloud Storage, use the gcloud command line tool and use the --content-file flag to identify the file path that contains the content to analyze: gcloud ml language analyze-entities --content-file=gs:// YOUR BUCKET NAME / YOUR FILE NAME If the request is successful, the server returns a response in JSON format: { "entities" : [ { "name" : "October 7" , "type" : "DATE" , "metadata" : { "month" : "10" , "day" : "7" }, "mentions" : [ { "text" : { "content" : "October 7" , "beginOffset" : - 1 }, "type" : "TYPE UNKNOWN" , "probability" : 1 } ] }, { "name" : "1600" , "type" : "NUMBER" , "metadata" : { "value" : "1600" }, "mentions" : [ { "text" : { "content" : "1600" , "beginOffset" : - 1 }, "type" : "TYPE UNKNOWN" , "probability" : 1 } ] }, { "name" : "7" , "type" : "NUMBER" , "metadata" : { "value" : "7" }, "mentions" : [ { "text" : { "content" : "7" , "beginOffset" : - 1 }, "type" : "TYPE UNKNOWN" , "probability" : 1 } ] }, { "name" : "1600 Pennsylvania Ave NW, Washington, DC" , "type" : "ADDRESS" , "metadata" : { "locality" : "Washington" , "narrow region" : "District of Columbia" , "street name" : "Pennsylvania Avenue Northwest" , "street number" : "1600" , "broad region" : "District of Columbia" , "country" : "US" }, "mentions" : [ { "text" : { "content" : "1600 Pennsylvania Ave NW, Washington, DC" , "beginOffset" : - 1 }, "type" : "TYPE UNKNOWN" , "probability" : 1 } ] }, { "name" : "1600 Pennsylvania Ave NW" , "type" : "LOCATION" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "1600 Pennsylvania Ave NW" , "beginOffset" : - 1 }, "type" : "PROPER" , "probability" : 0.901 } ] }, { "name" : "President" , "type" : "PERSON" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "President" , "beginOffset" : - 1 }, "type" : "COMMON" , "probability" : 0.941 } ] }, { "name" : "Trump" , "type" : "PERSON" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Trump" , "beginOffset" : - 1 }, "type" : "PROPER" , "probability" : 0.948 } ] }, { "name" : "Washington, DC" , "type" : "LOCATION" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Washington, DC" , "beginOffset" : - 1 }, "type" : "PROPER" , "probability" : 0.92 } ] }, { "name" : "White House" , "type" : "LOCATION" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "White House" , "beginOffset" : - 1 }, "type" : "PROPER" , "probability" : 0.785 } ] } ], "languageCode" : "en" , "languageSupported" : true } The entities array contains Entity objects representing the detected entities, which include information such as the entity name and type.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Lawrence”, tagged as a PERSON , for example. (See Entity Types for more information.) metadata contains source information about the entity's knowledge repository Additional repositories may be exposed in the future. mentions indicate offset positions within the text where an entity is mentioned.
- Entity sentiment analysis inspects the given text for known entities (proper nouns and common nouns), returns information about those entities, and identifies the prevailing emotional opinion of the entity within the text, especially to determine a writer's attitude toward the entity as positive, negative, or neutral.
- An analyzeEntities response to the entity request is shown below: { "entities" : [ { "name" : "British" , "type" : "LOCATION" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "British" , "beginOffset" : 58 }, "type" : "PROPER" , "probability" : 0.941 } ] }, { "name" : "Lawrence" , "type" : "PERSON" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Lawrence" , "beginOffset" : 113 }, "type" : "PROPER" , "probability" : 0.914 } ] }, { "name" : "Lawrence of Arabia" , "type" : "WORK OF ART" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Lawrence of Arabia" , "beginOffset" : 0 }, "type" : "PROPER" , "probability" : 0.761 } ] }, { "name" : "Lieutenant" , "type" : "PERSON" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Lieutenant" , "beginOffset" : 66 }, "type" : "COMMON" , "probability" : 0.927 } ] }, { "name" : "Peter O Toole" , "type" : "PERSON" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "Peter O Toole" , "beginOffset" : 93 }, "type" : "PROPER" , "probability" : 0.907 } ] }, { "name" : "T.
- Additionally, if you wish to perform several natural language operations on given text using only one API call, the annotateText request can also be used to perform sentiment analysis and entity analysis.

### "Analyzing Entity Sentiment \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Some entity types may have additional metadata, e.g.
- Some entity types may have additional metadata, e.g.
- LanguageServiceClient () gcs content uri = 'gs://cloud-samples-data/language/entity-sentiment.txt' Available types: PLAIN TEXT, HTML type = language v1 .
- LanguageServiceClient (); / TODO(developer): Uncomment the following lines to run this code / // const bucketName = 'Your bucket name, e.g. my-bucket'; // const fileName = 'Your file name, e.g. my-file.txt'; // Prepares a document, representing a text file in Cloud Storage const document = { gcsContentUri : gs:// ${ bucketName } / ${ fileName } , type : 'PLAIN TEXT' , }; // Detects sentiment of entities in the document const [ result ] = await client . analyzeEntitySentiment ({ document }); const entities = result . entities ; console . log ( 'Entities and sentiments:' ); entities . forEach ( entity = > { console . log ( Name: ${ entity . name } ); console . log ( Type: ${ entity . type } ); console . log ( Score: ${ entity . sentiment . score } ); console . log ( Magnitude: ${ entity . sentiment . magnitude } ); }); Python To learn how to install and use the client library for Natural Language, see Natural Language client libraries .

