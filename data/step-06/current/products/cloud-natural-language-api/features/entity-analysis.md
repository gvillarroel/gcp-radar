---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.620Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Entity Analysis"
feature_slug: "entity-analysis"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/languages"
  - "https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
  - "https://docs.cloud.google.com/natural-language/docs/morphology"
keywords:
  - "entity"
  - "analysis"
  - "adds"
  - "for"
  - "russian"
  - "full"
  - "chinese"
  - "french"
---

# Entity Analysis

Product: Cloud Natural Language API
Coverage: MEDIUM

## Step 02 Summary

Entity Analysis adds support for Russian; Entity Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Extended Definition

Entity Analysis adds support for Russian; Entity Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)

## Supporting Pages

### Language Support \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Content classification V2 Model Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es V1 Model Language ISO-639-1 Code English en Syntactic analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Entity analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Sentiment analysis Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Spanish es Thai th Turkish tr Vietnamese vi Entity sentiment analysis Language ISO-639-1 Code English en Japanese ja Spanish es Text moderation Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Dutch nl English en French fr German de Hindi hi Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es language support is limited based on the type of text (eg. webpage, chat message, etc) for some attributes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you do not specify a language parameter, then the language for the request is auto-detected by the Natural Language API.
- Language code parameters conform to ISO-639-1 or BCP-47 identifiers.

### "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud](https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn how to grant roles . gcloud services enable language.googleapis.com Make an entity analysis request gcloud Use the gcloud command line tool to call the analyze-entities command and use the --content flag to specify the text to analyze. gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'." Command-line Use curl to make a POST request to the documents:analyzeEntities method and provide the appropriate request body as shown in the following example.
- Perform sentiment analysis by using the gcloud tool This page shows you how to get started with the Cloud Natural Language API using the Google Cloud SDK.
- The example uses the gcloud auth application-default print-access-token command to obtain an access token for the service account that you created when you set up the project. curl -X POST \ -H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \ -H "Content-Type: application/json; charset=utf-8" \ "https://language.googleapis.com/v1/documents:analyzeEntities" \ --data "{ 'document':{ 'type':'PLAIN TEXT', 'content':'Michelangelo Caravaggio, Italian painter, is known for \'The Calling of Saint Matthew\'.' }, 'encodingType':'UTF8' }" You should see a response similar to the following: { "entities" : [ { "name" : "Michelangelo Caravaggio" , "type" : "PERSON" , "metadata" : { "wikipedia url" : "http://en.wikipedia.org/wiki/Caravaggio" , "mid" : "/m/020bg" }, "salience" : 0.83047235 , "mentions" : [ { "text" : { "content" : "Michelangelo Caravaggio" , "beginOffset" : 0 }, "type" : "PROPER" }, { "text" : { "content" : "painter" , "beginOffset" : 33 }, "type" : "COMMON" } ] }, { "name" : "Italian" , "type" : "LOCATION" , "metadata" : { "mid" : "/m/03rjj" , "wikipedia url" : "http://en.wikipedia.org/wiki/Italy" }, "salience" : 0.13870546 , "mentions" : [ { "text" : { "content" : "Italian" , "beginOffset" : 25 }, "type" : "PROPER" } ] }, { "name" : "The Calling of Saint Matthew" , "type" : "EVENT" , "metadata" : { "mid" : "/m/085 p7" , "wikipedia url" : "http://en.wikipedia.org/wiki/The Calling of St Matthew (Caravaggio)" }, "salience" : 0.030822212 , "mentions" : [ { "text" : { "content" : "The Calling of Saint Matthew" , "beginOffset" : 69 }, "type" : "PROPER" } ] } ], "language" : "en" } You can also analyze document sentiment and extract syntax annotations from text by making requests to different Cloud Natural Language API endpoints.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following sentences element is received for a Syntactic Analysis request of the Gettysburg Address: { "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 } }, { "text" : { "content" : "Now we are engaged in a great civil war, testing whether that nation or any nation so conceived and so dedicated can long endure." , "beginOffset" : 175 } }, ... ... { "text" : { "content" : "It is rather for us to be here dedicated to the great task remaining before us--that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion--that we here highly resolve that these dead shall not have died in vain, that this nation under God shall have a new birth of freedom, and that government of the people, by the people, for the people shall not perish from the earth." , "beginOffset" : 1002 } } ], "language" : "en" } A syntactic analysis request to the Natural Language API will also include a set of tokens.
- These features are listed below: extractDocumentSentiment performs sentiment analysis, as described in the Sentiment Analysis section. extractEntities performs entity analysis, as described in the Entity Analysis section. extractSyntax indicates that the given text should be processed to perform syntactic analysis, as described in the Syntactic Analysis section.
- Entity sentiment analysis inspects the given text for known entities (proper nouns and common nouns), returns information about those entities, and identifies the prevailing emotional opinion of the entity within the text, especially to determine a writer's attitude toward the entity as positive, negative, or neutral.
- An Entity Sentiment Analysis request returns a response containing the entities that were found in the document content, a mentions entry for each time the entity is mentioned, and the numerical score and magnitude values for each mention, as described in Interpreting sentiment analysis values .

### "Morphology & Dependency Trees \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parsing a syntactic analysis response The following pseudo-code provides a common pattern to use when performing iterative operations on the syntactic analysis response: index = 0 for sentence in self.sentences: content = sentence['text']['content'] sentence begin = sentence['text']['beginOffset'] sentence end = sentence begin + len(content) - 1 while index Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In Russian and Japanese, the reflexive is a standalone pronoun. (for example, “John loves himself” in Russian is “Джон любит себя” where себя is gender neutral “self”; in Japanese it’s “Tarō wa zibun o aisuru” (Romanized version) where “zibun” is gender neutral “self.” See reflexive pronoun . gender denotes a noun's grammatical gender .
- In the sentence, “The girl won the race,” the phrase “the girl” is the subject, appearing to the left of the verb, “won.” In Russian, девушка (the/a girl) can appear either before or after the verb: “девушка выиграла гонку” or “гонку выиграла девушка”, where the verb is выиграла (won).
- In Russian, the genitive case also shows up as the complement of words like “several,” “few.” For example: Зимой здесь мало снега (“In winter there is little snow here”) “-a” marks “снег-” (snow) as genitive, since it is the complement of “мало” (“little”).

