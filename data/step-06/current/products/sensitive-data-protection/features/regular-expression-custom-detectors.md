---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.606Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Regular expression custom detectors"
feature_slug: "regular-expression-custom-detectors"
latest_feature_date: "2018-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-de-identification"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes"
keywords:
  - "expressions"
  - "defined"
  - "expression"
  - "detectors"
  - "regular"
  - "custom"
---

# Regular expression custom detectors

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Custom detectors can be defined using regular expressions.

## Extended Definition

Custom detectors can be defined using regular expressions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-de-identification](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-de-identification)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)

## Supporting Pages

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom infoType detectors There are three kinds of custom infoType detectors: Small custom dictionary detectors Large custom dictionary detectors Regular expressions (regex) To refine scan results, you can create inspection rules .
- Regular expressions A regular expression (regex) custom infoType detector allows you to create your own infoType detectors that enable Sensitive Data Protection to detect matches based on a regex pattern.
- Custom dictionary detectors are useful when you want to scan for a list of words or phrases that are not easily matched by a regular expression or a built-in detector.
- Large custom dictionary detectors are created differently from both regular expression custom detectors and small custom dictionary detectors.

### "Custom infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although you can create regular dictionary detectors or regular expression detectors by defining this field, it's simpler to create those by defining the dictionary field or regex field respectively. "metadata key value expression" : A MetadataKeyValueExpression object that defines regular expressions for the key and value to search for in content metadata.
- One of the following fields, depending on the kind of custom infoType detector you're creating: "dictionary" : A Dictionary object, which contains a list of words or phrases to search for. "regex" : A Regex object, which contains a single pattern defining the regular expression. "surrogateType" : A SurrogateType object, if present, indicates that the custom infoType detector is a surrogate.
- API overview The CustomInfoType object allows you to create a custom infoType detector for new content or to fine-tune the results returned by pre-defined infoType detectors.
- The following are the types of custom infoType detectors: Regular custom dictionary detectors are simple word and phrase lists that Sensitive Data Protection matches on.

### De-identification \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-de-identification](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-de-identification)
- Source ID: `site-docs-reference-required-4`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom infoType detectors There are three kinds of custom infoType detectors: Regular custom dictionary detectors Stored custom dictionary detectors Regular expressions (regex) To refine scan results, you can create inspection rules .
- Regular expressions A regular expression (regex) custom infoType detector allows you to create your own infoType detectors that enable Sensitive Data Protection to detect matches based on a regex pattern.
- Stored custom dictionary detectors, by their nature as very large custom detectors, are created differently from both regular expression custom detectors and regular custom dictionary detectors.
- Custom dictionary detectors are useful when you want to scan for a list of words or phrases that are not easily matched by a regular expression or a built-in detector.

