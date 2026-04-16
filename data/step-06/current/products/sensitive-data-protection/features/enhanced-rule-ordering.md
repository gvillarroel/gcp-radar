---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.188Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Enhanced rule ordering"
feature_slug: "enhanced-rule-ordering"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
keywords:
  - "enhanced"
  - "ordering"
  - "ruleset"
  - "chains"
  - "specified"
  - "order"
  - "rule"
  - "rules"
---

# Enhanced rule ordering

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Chains rules in the order specified in a ruleset.

## Extended Definition

Chains rules in the order specified in a ruleset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)

## Supporting Pages

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-api-reference-required-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rule ordering and chaining Sensitive Data Protection applies the rules in the order you specify them in the ruleset.
- The order in which the rules in a ruleset are specified is important.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary\WordList; use Google\Cloud\Dlp\V2\ExclusionRule; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\MatchingType; / Inspect a string with an exclusion dictionary substring Omit scan matches that include the substring "TEST". @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. @param array $excludedSubStringArray The sub string to excluded. / function inspect string with exclusion dict substring( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'Some email addresses: gary@example.com, TEST@example.com', array $excludedSubStringArray = ['Test'] ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $infotypes = [ (new InfoType())->setName('PHONE NUMBER'), (new InfoType())->setName('EMAIL ADDRESS'), (new InfoType())->setName('DOMAIN NAME'), (new InfoType())->setName('PERSON NAME'), ]; // Exclude matches from the specified excludedSubstringList. $excludedSubstringList = (new Dictionary()) ->setWordList((new WordList()) ->setWords($excludedSubStringArray)); $exclusionRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setDictionary($excludedSubstringList); // Construct a ruleset that applies the exclusion rule to the EMAIL ADDRESSES infotype. $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes($infotypes) ->setRules([ (new InspectionRule()) ->setExclusionRule($exclusionRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infotypes) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary\WordList; use Google\Cloud\Dlp\V2\ExclusionRule; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\MatchingType; / Inspect a string for sensitive data, using exclusion dictionary Omit a specific email address from an EMAIL ADDRESS detector scan with an exclusion dictionary. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string with exclusion dict( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'Some email addresses: gary@example.com, example@example.com' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $infotypes = [ (new InfoType())->setName('PHONE NUMBER'), (new InfoType())->setName('EMAIL ADDRESS'), (new InfoType())->setName('CREDIT CARD NUMBER'), ]; // Exclude matches from the specified excludedMatchList. $excludedMatchList = (new Dictionary()) ->setWordList((new WordList()) ->setWords(['example@example.com'])); $matchingType = MatchingType::MATCHING TYPE FULL MATCH; $exclusionRule = (new ExclusionRule()) ->setMatchingType($matchingType) ->setDictionary($excludedMatchList); // Construct a ruleset that applies the exclusion rule to the EMAIL ADDRESSES infotype. $emailAddress = (new InfoType()) ->setName('EMAIL ADDRESS'); $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$emailAddress]) ->setRules([ (new InspectionRule()) ->setExclusionRule($exclusionRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infotypes) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You can also add custom infoType detectors in the Custom infoTypes section, and customize both built-in and custom infoType detectors in the Inspection rulesets section.
- Select all infoType detectors that your rulesets modify (the target infoTypes) or use for assessment (the context infoTypes).
- Select all infoType detectors that your rulesets modify (the target infoTypes) or use for assessment (the context infoTypes).
- Inspection rulesets Inspection rulesets let you customize both built-in and custom infoType detectors using context rules.

### InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.
- ExclusionRule The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
- InspectionRule A single inspection rule to be applied to infoTypes, specified in InspectionRuleSet .
- Rules are applied in the order that they are specified.

