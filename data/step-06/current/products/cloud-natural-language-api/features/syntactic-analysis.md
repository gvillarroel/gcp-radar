---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:00:15.648Z"
product_name: "Cloud Natural Language API"
product_slug: "cloud-natural-language-api"
feature_name: "Syntactic Analysis"
feature_slug: "syntactic-analysis"
latest_feature_date: "2019-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/natural-language/docs/morphology"
  - "https://docs.cloud.google.com/natural-language/docs/languages"
  - "https://docs.cloud.google.com/natural-language/docs/basics"
keywords:
  - "syntactic"
  - "analysis"
  - "adds"
  - "for"
  - "russian"
  - "full"
  - "chinese"
  - "french"
---

# Syntactic Analysis

Product: Cloud Natural Language API
Coverage: LOW

## Step 02 Summary

Syntactic Analysis adds support for Russian; Syntactic Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Extended Definition

Syntactic Analysis adds support for Russian; Syntactic Analysis adds full support for Chinese, French, German, Italian, Korean, and Portuguese.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)

## Supporting Pages

### "Morphology & Dependency Trees \_|\_ Cloud Natural Language API \_|\_ Google\

- URL: [https://docs.cloud.google.com/natural-language/docs/morphology](https://docs.cloud.google.com/natural-language/docs/morphology)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parsing a syntactic analysis response The following pseudo-code provides a common pattern to use when performing iterative operations on the syntactic analysis response: index = 0 for sentence in self.sentences: content = sentence['text']['content'] sentence begin = sentence['text']['beginOffset'] sentence end = sentence begin + len(content) - 1 while index Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For each sentence within the text provided to the Natural Language API for syntactic analysis, the API constructs a dependency tree that describes the syntactic structure of that sentence.
- In Russian and Japanese, the reflexive is a standalone pronoun. (for example, “John loves himself” in Russian is “Джон любит себя” where себя is gender neutral “self”; in Japanese it’s “Tarō wa zibun o aisuru” (Romanized version) where “zibun” is gender neutral “self.” See reflexive pronoun . gender denotes a noun's grammatical gender .
- In the sentence, “The girl won the race,” the phrase “the girl” is the subject, appearing to the left of the verb, “won.” In Russian, девушка (the/a girl) can appear either before or after the verb: “девушка выиграла гонку” or “гонку выиграла девушка”, where the verb is выиграла (won).

### Language Support \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/languages](https://docs.cloud.google.com/natural-language/docs/languages)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Content classification V2 Model Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es V1 Model Language ISO-639-1 Code English en Syntactic analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Entity analysis Language ISO-639-1 Code Chinese (Simplified) zh Chinese (Traditional) zh-Hant English en French fr German de Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es Sentiment analysis Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Chinese (Traditional) zh-Hant Dutch nl English en French fr German de Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Spanish es Thai th Turkish tr Vietnamese vi Entity sentiment analysis Language ISO-639-1 Code English en Japanese ja Spanish es Text moderation Language ISO-639-1 Code Arabic ar Chinese (Simplified) zh Dutch nl English en French fr German de Hindi hi Indonesian id Italian it Japanese ja Korean ko Portuguese (Brazilian & Continental) pt Russian ru Spanish es language support is limited based on the type of text (eg. webpage, chat message, etc) for some attributes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you do not specify a language parameter, then the language for the request is auto-detected by the Natural Language API.
- Language code parameters conform to ISO-639-1 or BCP-47 identifiers.

### Natural Language API Basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/natural-language/docs/basics](https://docs.cloud.google.com/natural-language/docs/basics)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following sentences element is received for a Syntactic Analysis request of the Gettysburg Address: { "sentences" : [ { "text" : { "content" : "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal." , "beginOffset" : 0 } }, { "text" : { "content" : "Now we are engaged in a great civil war, testing whether that nation or any nation so conceived and so dedicated can long endure." , "beginOffset" : 175 } }, ... ... { "text" : { "content" : "It is rather for us to be here dedicated to the great task remaining before us--that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion--that we here highly resolve that these dead shall not have died in vain, that this nation under God shall have a new birth of freedom, and that government of the people, by the people, for the people shall not perish from the earth." , "beginOffset" : 1002 } } ], "language" : "en" } A syntactic analysis request to the Natural Language API will also include a set of tokens.
- Syntactic analysis requests Syntactic Analysis requests are sent to the Natural Language API through use of the analyzeSyntax method in the following form: { "document" : { "type" : "PLAIN TEXT" , "content" : "Ask not what your country can do for you, ask what you can do for your country." }, "encodingType" : "UTF8" } Syntactic analysis responses The Natural Language API processes the given text to extract sentences and tokens.
- Array of tokens with token information ] } Sentence extraction When performing syntactic analysis, the Natural Language API returns an array of sentences extracted from the provided text, with each sentence containing the following fields within a text parent: beginOffset indicating the (zero-based) character offset within the given text where the sentence begins.
- These features are listed below: extractDocumentSentiment performs sentiment analysis, as described in the Sentiment Analysis section. extractEntities performs entity analysis, as described in the Entity Analysis section. extractSyntax indicates that the given text should be processed to perform syntactic analysis, as described in the Syntactic Analysis section.

