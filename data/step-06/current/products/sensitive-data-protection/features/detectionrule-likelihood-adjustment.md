---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.603Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "DetectionRule likelihood adjustment"
feature_slug: "detectionrule-likelihood-adjustment"
latest_feature_date: "2018-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig"
keywords:
  - "detectionrule"
  - "adjust"
  - "adjustment"
  - "likelihood"
  - "finding"
  - "related"
  - "based"
---

# DetectionRule likelihood adjustment

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

DetectionRule can adjust a finding's likelihood based on related content in its vicinity.

## Extended Definition

DetectionRule can adjust a finding's likelihood based on related content in its vicinity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)

## Supporting Pages

### "Customizing match likelihood \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood)
- Source ID: `site-api-reference-required-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\ContentItem; use Google\Cloud\Dlp\V2\CustomInfoType; use Google\Cloud\Dlp\V2\CustomInfoType\DetectionRule\HotwordRule; use Google\Cloud\Dlp\V2\CustomInfoType\DetectionRule\LikelihoodAdjustment; use Google\Cloud\Dlp\V2\CustomInfoType\DetectionRule\Proximity; use Google\Cloud\Dlp\V2\CustomInfoType\Regex; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectContentRequest; use Google\Cloud\Dlp\V2\InspectionRule; use Google\Cloud\Dlp\V2\InspectionRuleSet; use Google\Cloud\Dlp\V2\Likelihood; / Inspect data with a hotword rule This sample uses a custom regex with a hotword rule to increase the likelihood of match. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect hotword rule( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = "Patient's MRN 444-5-22222 and just a number 333-2-33333" ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the regex pattern the inspection will look for. $customRegexPattern = '[1-9]{3}-[1-9]{1}-[1-9]{5}'; $hotwordRegexPattern = '(?i)(mrn medical)(?-i)'; // Construct the custom regex detector. $cMrnDetector = (new InfoType()) ->setName('C MRN'); $customInfoType = (new CustomInfoType()) ->setInfoType($cMrnDetector) ->setLikelihood(Likelihood::POSSIBLE) ->setRegex((new Regex()) ->setPattern($customRegexPattern)); // Specify hotword likelihood adjustment. $likelihoodAdjustment = (new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY LIKELY); // Specify a window around a finding to apply a detection rule. $proximity = (new Proximity()) ->setWindowBefore(10); $hotwordRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern($hotwordRegexPattern)) ->setLikelihoodAdjustment($likelihoodAdjustment) ->setProximity($proximity); // Construct rule set for the inspect config. $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$cMrnDetector]) ->setRules([ (new InspectionRule()) ->setHotwordRule($hotwordRule) ]); // Construct the configuration for the Inspect request. $inspectConfig = (new InspectConfig()) ->setCustomInfoTypes([$customInfoType]) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- This approach is helpful, for example, if you want to exclude a column of data from inspection results. @param string $projectId The Google Cloud project id to use as a parent resource. / function inspect column values w custom hotwords(string $projectId): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify the table to be inspected. $tableToDeIdentify = (new Table()) ->setHeaders([ (new FieldId()) ->setName('Fake Social Security Number'), (new FieldId()) ->setName('Real Social Security Number'), ]) ->setRows([ (new Row())->setValues([ (new Value()) ->setStringValue('111-11-1111'), (new Value()) ->setStringValue('222-22-2222') ]) ]); $item = (new ContentItem()) ->setTable($tableToDeIdentify); // Specify the regex pattern the inspection will look for. $hotwordRegexPattern = 'Fake Social Security Number'; // Specify hotword likelihood adjustment. $likelihoodAdjustment = (new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY UNLIKELY); // Specify a window around a finding to apply a detection rule. $proximity = (new Proximity()) ->setWindowBefore(1); // Construct the hotword rule. $hotwordRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern($hotwordRegexPattern)) ->setLikelihoodAdjustment($likelihoodAdjustment) ->setProximity($proximity); // Construct rule set for the inspect config. $infotype = (new InfoType()) ->setName('US SOCIAL SECURITY NUMBER'); $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$infotype]) ->setRules([ (new InspectionRule()) ->setHotwordRule($hotwordRule) ]); // Construct the configuration for the Inspect request. $inspectConfig = (new InspectConfig()) ->setInfoTypes([$infotype]) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]) ->setMinLikelihood(Likelihood::POSSIBLE); // Run request. $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results. $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- POSSIBLE , "include quote" : True , } Convert the project id into a full resource id. parent = f "projects/ { project } /locations/global" Call the API response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item , } ) Print out the results. if response . result . findings : for finding in response . result . findings : try : if finding . quote : print ( f "Quote: { finding . quote } " ) except AttributeError : pass print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST JSON input: { "item" : { "table" : { "headers" : [ { "name" : "Fake Social Security Number" }, { "name" : "Real Social Security Number" } ], "rows" : [ { "values" : [ { "stringValue" : "111-11-1111" }, { "stringValue" : "222-22-2222" } ] } ] } }, "inspectConfig" : { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "includeQuote" : true , "ruleSet" : [ { "infoTypes" : [ { "name" : "US SOCIAL SECURITY NUMBER" } ], "rules" : [ { "hotwordRule" : { "hotwordRegex" : { "pattern" : "(Fake Social Security Number)" }, "likelihoodAdjustment" : { "fixedLikelihood" : "VERY UNLIKELY" }, "proximity" : { "windowBefore" : 1 } } } ] } ], "minLikelihood" : "POSSIBLE" } } JSON output: { "result": { "findings": [ { "quote": "222-22-2222", "infoType": { "name": "US SOCIAL SECURITY NUMBER" }, "likelihood": "VERY LIKELY", "location": { "byteRange": { "end": "11" }, "codepointRange": { "end": "11" }, "contentLocations": [ { "recordLocation": { "fieldId": { "name": "Real Social Security Number" }, "tableLocation": {} } } ] }, "createTime": " TIMESTAMP ", "findingId": " TIMESTAMP " } ] } } The value 111-11-1111, which is in the Fake Social Security Number column, matched the hotword rule, so Sensitive Data Protection assigned to it the VERY UNLIKELY likelihood level .
- JSON input: { "item" :{ "value" : "Patient's MRN 444-5-22222 and just a number 333-2-33333" }, "inspectConfig" :{ "customInfoTypes" :[ { "infoType" :{ "name" : "C MRN" }, "regex" :{ "pattern" : "[0-9]{3}-[0-9]{1}-[0-9]{5}" }, "likelihood" : "POSSIBLE" , } ], "ruleSet" :[ { "infoTypes" : [{ "name" : "C MRN" }], "rules" :[ { "hotwordRule" :{ "hotwordRegex" :{ "pattern" : "(?i)(mrn medical)(?-i)" }, "likelihoodAdjustment" :{ "fixedLikelihood" : "VERY LIKELY" }, "proximity" :{ "windowBefore" : 10 } } } ] } ] } } JSON output (abbreviated): { "result": { "findings": [ { "infoType": { "name": "C MRN" }, "likelihood": "VERY LIKELY", "location": { "byteRange": { "start": "14", "end": "25" }, "codepointRange": { ... } } }, { "infoType": { "name": "C MRN" }, "likelihood": "POSSIBLE", "byteRange": { "start": "44", "end": "55" }, "codepointRange": { ... } } } ] } } The output shows that Sensitive Data Protection correctly identified the medical record number using the C MRN custom infoType detector.

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-api-reference-required-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adjustment rules Adjustment rules can help you refine detection accuracy by increasing (also called boosting ) or decreasing the likelihood values of findings based on the context in which they appear.
- Adjustment rules , which help adjust the likelihood of findings based on the context in which they appear.
- Notice that the four rules are specified in an array within the rules element. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string multiple rules( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'patient: Jane Doe' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Construct hotword rules $patientRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern('patient')) ->setProximity((new Proximity()) ->setWindowBefore(10)) ->setLikelihoodAdjustment((new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY LIKELY)); $doctorRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern('doctor')) ->setProximity((new Proximity()) ->setWindowBefore(10)) ->setLikelihoodAdjustment((new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY UNLIKELY)); // Construct exclusion rules $wordList = (new Dictionary()) ->setWordList((new WordList()) ->setWords(['Quasimodo'])); $quasimodoRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setDictionary($wordList); $redactedRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setRegex((new Regex()) ->setPattern('REDACTED')); // Specify the exclusion rule and build-in info type the inspection will look for. $personName = (new InfoType()) ->setName('PERSON NAME'); $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$personName]) ->setRules([ (new InspectionRule()) ->setHotwordRule($patientRule), (new InspectionRule()) ->setHotwordRule($doctorRule), (new InspectionRule()) ->setExclusionRule($quasimodoRule), (new InspectionRule()) ->setExclusionRule($redactedRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes([$personName]) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- MATCHING TYPE PARTIAL MATCH , } Construct the rule set, combining the above rules rule set = [ { "info types" : [{ "name" : "PERSON NAME" }], "rules" : [ { "hotword rule" : patient rule }, { "hotword rule" : doctor rule }, { "exclusion rule" : quasimodo rule }, { "exclusion rule" : redacted rule }, ], } ] Construct the configuration dictionary inspect config = { "info types" : [{ "name" : "PERSON NAME" }], "rule set" : rule set , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST See the JSON quickstart for more information about using the DLP API with JSON. ... "inspectConfig" : { "infoTypes" : [ { "name" : "PERSON NAME" } ], "ruleSet" : [ { "infoTypes" : [ { "name" : "PERSON NAME" } ], "rules" : [ { "hotwordRule" : { "hotwordRegex" : { "pattern" : "patient" }, "proximity" : { "windowBefore" : 10 }, "likelihoodAdjustment" : { "fixedLikelihood" : "VERY LIKELY" } } }, { "hotwordRule" : { "hotwordRegex" : { "pattern" : "doctor" }, "proximity" : { "windowBefore" : 10 }, "likelihoodAdjustment" : { "fixedLikelihood" : "UNLIKELY" } } }, { "exclusionRule" : { "dictionary" : { "wordList" : { "words" : [ "Quasimodo" ] } }, "matchingType" : "MATCHING TYPE PARTIAL MATCH" } }, { "exclusionRule" : { "regex" : { "pattern" : "REDACTED" }, "matchingType" : "MATCHING TYPE PARTIAL MATCH" } } ] } ] } ...

### InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation Likelihood InfoTypeLikelihood JSON representation FindingLimits JSON representation InfoTypeLimit JSON representation CustomInfoType JSON representation SurrogateType StoredType JSON representation MetadataKeyValueExpression JSON representation DetectionRule JSON representation HotwordRule JSON representation Proximity JSON representation LikelihoodAdjustment JSON representation ExclusionType ContentOption InspectionRuleSet JSON representation InspectionRule JSON representation ExclusionRule JSON representation ExcludeInfoTypes JSON representation ExcludeByHotword JSON representation ExcludeByImageFindings JSON representation ImageContainmentType JSON representation Encloses FullyInside Overlap MatchingType AdjustmentRule JSON representation AdjustByMatchingInfoTypes JSON representation AdjustByImageFindings JSON representation Configuration description of the scanning process.
- JSON representation { "likelihoodAdjustment" : { object ( LikelihoodAdjustment ) } , // Union field conditions can be only one of the following: "adjustByMatchingInfoTypes" : { object ( AdjustByMatchingInfoTypes ) } , "adjustByImageFindings" : { object ( AdjustByImageFindings ) } // End of list of possible types for union field conditions . } Fields likelihoodAdjustment object ( LikelihoodAdjustment ) Likelihood adjustment to apply to the infoType.
- How the likelihood will be modified. adjustment can be only one of the following: fixedLikelihood enum ( Likelihood ) Set the likelihood of a finding to a fixed value. relativeLikelihood integer Increase or decrease the likelihood by the specified number of levels.
- For tabular data, if you want to modify the likelihood of an entire column of findngs, see Hotword example: Set the match likelihood of a table column . likelihoodAdjustment object ( LikelihoodAdjustment ) Likelihood adjustment to apply to all matching findings.

