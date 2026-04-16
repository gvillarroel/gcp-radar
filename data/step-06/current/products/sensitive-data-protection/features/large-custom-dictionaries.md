---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.583Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "large custom dictionaries"
feature_slug: "large-custom-dictionaries"
latest_feature_date: "2018-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-dictionary"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
keywords:
  - "millions"
  - "large"
  - "tens"
  - "dictionaries"
  - "scanning"
  - "custom"
  - "adds"
---

# large custom dictionaries

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adds support for scanning custom dictionaries with up to tens of millions of entries.

## Extended Definition

Adds support for scanning custom dictionaries with up to tens of millions of entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-dictionary](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-dictionary)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)

## Supporting Pages

### "Create a large custom dictionary detector \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have more or if your term list changes frequently, consider creating a large custom dictionary , which can support tens of millions of terms.
- How large custom dictionaries differ from other custom infoTypes Large custom dictionaries are different from other custom infoTypes in that each large custom dictionary has two components: A list of phrases that you create and define.
- When to choose a large custom dictionary over a regular custom dictionary Regular custom dictionary detectors are sufficient when you have tens of thousands of sensitive words or phrases that you want to scan your content for.
- Scan content using a large custom dictionary detector Scanning content using a large custom dictionary detector is similar to scanning content using any other custom infoType detector.

### "Creating a regular custom dictionary detector \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-dictionary](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-dictionary)
- Source ID: `site-api-reference-required-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you have a list of anywhere from several hundred to tens of millions of words that you want to scan for, consider using a large custom dictionary detector instead of the regular custom dictionary detector described in this topic.
- These points apply to both regular and large custom dictionaries: Dictionary words are case-insensitive.
- What's next Learn about large custom dictionaries .
- All characters—in dictionaries or in content to be scanned—other than letters, digits, and other alphabetic characters contained within the Unicode Basic Multilingual Plane are considered as whitespace when scanning for matches.

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). if not info types : info types = [ "FIRST NAME" , "LAST NAME" , "EMAIL ADDRESS" ] info types = [{ "name" : info type } for info type in info types ] Prepare custom info types by parsing the dictionary word lists and regex patterns. if custom dictionaries is None : custom dictionaries = [] dictionaries = [ { "info type" : { "name" : f "CUSTOM DICTIONARY { i } " }, "dictionary" : { "word list" : { "words" : custom dict . split ( "," )}}, } for i , custom dict in enumerate ( custom dictionaries ) ] if custom regexes is None : custom regexes = [] regexes = [ { "info type" : { "name" : f "CUSTOM REGEX { i } " }, "regex" : { "pattern" : custom regex }, } for i , custom regex in enumerate ( custom regexes ) ] custom info types = dictionaries + regexes Construct the configuration dictionary.
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). if not info types : info types = [ "FIRST NAME" , "LAST NAME" , "EMAIL ADDRESS" ] info types = [{ "name" : info type } for info type in info types ] Prepare custom info types by parsing the dictionary word lists and regex patterns. if custom dictionaries is None : custom dictionaries = [] dictionaries = [ { "info type" : { "name" : f "CUSTOM DICTIONARY { i } " }, "dictionary" : { "word list" : { "words" : custom dict . split ( "," )}}, } for i , custom dict in enumerate ( custom dictionaries ) ] if custom regexes is None : custom regexes = [] regexes = [ { "info type" : { "name" : f "CUSTOM REGEX { i } " }, "regex" : { "pattern" : custom regex }, } for i , custom regex in enumerate ( custom regexes ) ] custom info types = dictionaries + regexes Construct the configuration dictionary.
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). if not info types : info types = [ "FIRST NAME" , "LAST NAME" , "EMAIL ADDRESS" ] info types = [{ "name" : info type } for info type in info types ] Prepare custom info types by parsing the dictionary word lists and regex patterns. if custom dictionaries is None : custom dictionaries = [] dictionaries = [ { "info type" : { "name" : f "CUSTOM DICTIONARY { i } " }, "dictionary" : { "word list" : { "words" : custom dict . split ( "," )}}, } for i , custom dict in enumerate ( custom dictionaries ) ] if custom regexes is None : custom regexes = [] regexes = [ { "info type" : { "name" : f "CUSTOM REGEX { i } " }, "regex" : { "pattern" : custom regex }, } for i , custom regex in enumerate ( custom regexes ) ] custom info types = dictionaries + regexes Construct the configuration dictionary.
- For more information, see Set up authentication for a local development environment . import threading from typing import List , Optional import google.cloud.dlp import google.cloud.pubsub def inspect datastore ( project : str , datastore project : str , kind : str , topic id : str , subscription id : str , info types : List [ str ], custom dictionaries : List [ str ] = None , custom regexes : List [ str ] = None , namespace id : str = None , min likelihood : Optional [ int ] = None , max findings : Optional [ int ] = None , timeout : int = 300 , ) - > None : """Uses the Data Loss Prevention API to analyze Datastore data.

