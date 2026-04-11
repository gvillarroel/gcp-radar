---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.649Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Knowledge Graph MID metadata"
feature_slug: "knowledge-graph-mid-metadata"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/release-notes"
keywords:
  - "knowledge"
  - "graph"
  - "mid"
  - "metadata"
  - "entity"
  - "analysis"
  - "can"
  - "return"
---

# Knowledge Graph MID metadata

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

Entity Analysis can return Google Knowledge Graph MID values in entity metadata when available.

## Extended Definition

Entity Analysis can return Google Knowledge Graph MID values in entity metadata when available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)

## Supporting Pages

### "Analyzing Entity Sentiment \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment](https://docs.cloud.google.com/natural-language/docs/analyzing-entity-sentiment)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For many known entities, the metadata is a Wikipedia URL (wikipedia url) and Knowledge Graph MID (mid).
- For many known entities, the metadata is a Wikipedia URL (wikipedia url) and Knowledge Graph MID (mid).
- Type ( entity . type ) . name } " ) Get the salience score associated with the entity in the [0, 1.0] range print ( f "Salience score: { entity . salience } " ) Get the aggregate sentiment expressed for this entity in the provided document. sentiment = entity . sentiment print ( f "Entity sentiment score: { sentiment . score } " ) print ( f "Entity sentiment magnitude: { sentiment . magnitude } " ) Loop over the metadata associated with entity.
- Type ( entity . type ) . name } " ) Get the salience score associated with the entity in the [0, 1.0] range print ( f "Salience score: { entity . salience } " ) Get the aggregate sentiment expressed for this entity in the provided document. sentiment = entity . sentiment print ( f "Entity sentiment score: { sentiment . score } " ) print ( f "Entity sentiment magnitude: { sentiment . magnitude } " ) Loop over the metadata associated with entity.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The score and magnitude values for an entity can be 0 , if there was low sentiment in the text, resulting in a magnitude of 0, or the sentiment is mixed, resulting in a score of 0. { "entities" : [ { "name" : "R&B music" , "type" : "WORK OF ART" , "metadata" : {}, "salience" : 0.5306305 , "mentions" : [ { "text" : { "content" : "R&B music" , "beginOffset" : 7 }, "type" : "COMMON" , "sentiment" : { "magnitude" : 0.9 , "score" : 0.9 } } ], "sentiment" : { "magnitude" : 0.9 , "score" : 0.9 } }, { "name" : "Marvin Gaye" , "type" : "PERSON" , "metadata" : { "mid" : "/m/012z8 " , "wikipedia url" : "http://en.wikipedia.org/wiki/Marvin Gaye" }, "salience" : 0.21584158 , "mentions" : [ { "text" : { "content" : "Marvin Gaye" , "beginOffset" : 18 }, "type" : "PROPER" , "sentiment" : { "magnitude" : 0.4 , "score" : 0.4 } }, { "text" : { "content" : "Marvin Gaye" , "beginOffset" : 138 }, "type" : "PROPER" , "sentiment" : { "magnitude" : 0.2 , "score" : - 0.2 } } ], "sentiment" : { "magnitude" : 0.6 , "score" : 0.1 } }, ... ], "language" : "en" } For an example, see Analyzing Entity Sentiment .
- An Entity Analysis request should pass an encodingType argument, so that the returned offsets can be properly interpreted.
- Lawrence" , "beginOffset" : 77 }, "type" : "PROPER" , "probability" : 0.853 } ] }, { "name" : "film" , "type" : "WORK OF ART" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "film" , "beginOffset" : 129 }, "type" : "COMMON" , "probability" : 0.805 } ] }, { "name" : "film biography" , "type" : "WORK OF ART" , "metadata" : {}, "mentions" : [ { "text" : { "content" : "film biography" , "beginOffset" : 37 }, "type" : "COMMON" , "probability" : 0.876 } ] } ], "languageCode" : "en" , "languageSupported" : true } Note that the Natural Language API returns entities for "Lawrence of Arabia" (the film) and "T.E.
- Entity sentiment analysis inspects the given text for known entities (proper nouns and common nouns), returns information about those entities, and identifies the prevailing emotional opinion of the entity within the text, especially to determine a writer's attitude toward the entity as positive, negative, or neutral.

### "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/release-notes](https://docs.cloud.google.com/natural-language/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature The sentiment analysis feature has these enhancements: Support for Japanese ( ja ) and Spanish ( es ) Availability of sentence level sentiment Support for EncodingType within a Sentiment Analysis request to calculate offsets for sentence-level sentiment Addition of a score field within the Sentiment type to replace the previous polarity field Feature Syntactic analysis has these enhancements: Added a new analyzeSyntax method Added morphology support to returned tokens Feature The entity analysis feature has these enhancements: Added Google Knowledge Graph MID values, if available, to the metadata field for each Entity returned Returns Entity Mention Types for both proper nouns and common nouns (known as "nominals") Deprecated Removed the polarity field within the Sentiment type in favor of the new score field.
- You might see minor differences in metadata (Wikipedia URLs, knowledge graph MIDs) of entities identified in a block of text from the same request made to the previous releases.
- You might see minor differences in metadata (Wikipedia URLs, knowledge graph MIDs) from the same request made to the Natural Language API v1 and v1beta2 releases.
- Added beta support for entity, sentiment, and syntax analysis for the following languages: Chinese (Simplified and Traditional) French German Italian Korean Portuguese Feature Added beta support for entity sentiment analysis ( analyzeEntitySentiment ).

