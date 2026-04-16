---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.539Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "infoType detector exclusion rules"
feature_slug: "infotype-detector-exclusion-rules"
latest_feature_date: "2018-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes"
keywords:
  - "refining"
  - "existing"
  - "exclusion"
  - "detectors"
  - "rules"
  - "infotype"
  - "detector"
  - "adds"
---

# infoType detector exclusion rules

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adds exclusion rules for refining existing infoType detectors.

## Extended Definition

Adds exclusion rules for refining existing infoType detectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)

## Supporting Pages

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you scan a database for email addresses, you can add an exclusion rule in the form of a custom regex that instructs Sensitive Data Protection to exclude any findings ending in "@example.com." For more information about exclusion rules, see Modifying infoType detectors to refine scan results .
- For more information about exclusion rules and other features of custom infoType detectors, see Creating custom infoType detectors .
- Inspection rules You use inspection rules to refine the results returned by existing infoType detectors—either built-in or custom.
- Custom infoType detectors There are three kinds of custom infoType detectors: Small custom dictionary detectors Large custom dictionary detectors Regular expressions (regex) To refine scan results, you can create inspection rules .

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-api-reference-required-2`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Exclusion rules Exclusion rules are useful in situations like the following: You want to exclude duplicate scan matches in results that are caused by overlapping infoType detectors.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\CustomInfoType; use Google\Cloud\Dlp\V2\CustomInfoType\ExclusionType; use Google\Cloud\Dlp\V2\ExcludeInfoTypes; use Google\Cloud\Dlp\V2\ExclusionRule; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\MatchingType; / Inspect a string for sensitive data, omitting overlapping matches on domain and email Omit matches on domain names that are part of email addresses in a DOMAIN NAME detector scan. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string without overlap( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'example.com is a domain, james@example.org is an email.' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $domainName = (new InfoType()) ->setName('DOMAIN NAME'); $emailAddress = (new InfoType()) ->setName('EMAIL ADDRESS'); $infoTypes = [$domainName, $emailAddress]; // Define a custom info type to exclude email addresses $customInfoType = (new CustomInfoType()) ->setInfoType($emailAddress) ->setExclusionType(ExclusionType::EXCLUSION TYPE EXCLUDE); // Exclude EMAIL ADDRESS matches $matchingType = MatchingType::MATCHING TYPE PARTIAL MATCH; $exclusionRule = (new ExclusionRule()) ->setMatchingType($matchingType) ->setExcludeInfoTypes((new ExcludeInfoTypes()) ->setInfoTypes([$customInfoType->getInfoType()]) ); // Construct a ruleset that applies the exclusion rule to the DOMAIN NAME infotype. // If a DOMAIN NAME match is part of an EMAIL ADDRESS match, the DOMAIN NAME match will // be excluded. $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$domainName]) ->setRules([ (new InspectionRule()) ->setExclusionRule($exclusionRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setCustomInfoTypes([$customInfoType]) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary; use Google\Cloud\Dlp\V2\CustomInfoType\Dictionary\WordList; use Google\Cloud\Dlp\V2\ExclusionRule; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\MatchingType; / Inspect a string for sensitive data, using exclusion dictionary Omit a specific email address from an EMAIL ADDRESS detector scan with an exclusion dictionary. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string with exclusion dict( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'Some email addresses: gary@example.com, example@example.com' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $infotypes = [ (new InfoType())->setName('PHONE NUMBER'), (new InfoType())->setName('EMAIL ADDRESS'), (new InfoType())->setName('CREDIT CARD NUMBER'), ]; // Exclude matches from the specified excludedMatchList. $excludedMatchList = (new Dictionary()) ->setWordList((new WordList()) ->setWords(['example@example.com'])); $matchingType = MatchingType::MATCHING TYPE FULL MATCH; $exclusionRule = (new ExclusionRule()) ->setMatchingType($matchingType) ->setDictionary($excludedMatchList); // Construct a ruleset that applies the exclusion rule to the EMAIL ADDRESSES infotype. $emailAddress = (new InfoType()) ->setName('EMAIL ADDRESS'); $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$emailAddress]) ->setRules([ (new InspectionRule()) ->setExclusionRule($exclusionRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infotypes) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\ExcludeInfoTypes; use Google\Cloud\Dlp\V2\ExclusionRule; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\MatchingType; / Inspect a string for sensitive data, omitting overlapping matches on person and email Omit matches on a PERSON NAME detector if also matched by an EMAIL ADDRESS detector. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string omit overlap( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'james@example.org is an email.' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the type of info the inspection will look for. $personName = (new InfoType()) ->setName('PERSON NAME'); $emailAddress = (new InfoType()) ->setName('EMAIL ADDRESS'); $infoTypes = [$personName, $emailAddress]; // Exclude EMAIL ADDRESS matches $exclusionRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setExcludeInfoTypes((new ExcludeInfoTypes()) ->setInfoTypes([$emailAddress]) ); // Construct a ruleset that applies the exclusion rule to the PERSON NAME infotype. // If a PERSON NAME match overlaps with an EMAIL ADDRESS match, the PERSON NAME match will // be excluded. $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$personName]) ->setRules([ (new InspectionRule()) ->setExclusionRule($exclusionRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .

### "Custom infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about how to use surrogate custom infoType detectors, see Pseudonymization . "storedType" : A reference to an existing StoredInfoType object.
- You can customize detection behavior by defining your own custom infoType detectors , so that Sensitive Data Protection will inspect or de-identify sensitive data that matches patterns that you specify.
- For more information about likelihood, see the Likelihood concept page. "detectionRules" : A set of DetectionRule objects to additionally apply to all findings of this custom infoType detector.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Custom infoType detectors Stay organized with collections Save and categorize content based on your preferences.

