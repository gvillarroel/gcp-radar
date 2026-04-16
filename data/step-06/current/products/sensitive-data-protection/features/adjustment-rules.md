---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.187Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Adjustment rules"
feature_slug: "adjustment-rules"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig"
keywords:
  - "contextual"
  - "evidence"
  - "adjusts"
  - "adjustment"
  - "likelihood"
  - "finding"
  - "rules"
  - "based"
---

# Adjustment rules

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adjusts finding likelihood based on contextual evidence.

## Extended Definition

Adjusts finding likelihood based on contextual evidence.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)

## Supporting Pages

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-api-reference-required-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adjustment rules Adjustment rules can help you refine detection accuracy by increasing (also called boosting ) or decreasing the likelihood values of findings based on the context in which they appear.
- Adjustment rules , which help adjust the likelihood of findings based on the context in which they appear.
- Notice that the four rules are specified in an array within the rules element. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect string multiple rules( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'patient: Jane Doe' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Construct hotword rules $patientRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern('patient')) ->setProximity((new Proximity()) ->setWindowBefore(10)) ->setLikelihoodAdjustment((new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY LIKELY)); $doctorRule = (new HotwordRule()) ->setHotwordRegex((new Regex()) ->setPattern('doctor')) ->setProximity((new Proximity()) ->setWindowBefore(10)) ->setLikelihoodAdjustment((new LikelihoodAdjustment()) ->setFixedLikelihood(Likelihood::VERY UNLIKELY)); // Construct exclusion rules $wordList = (new Dictionary()) ->setWordList((new WordList()) ->setWords(['Quasimodo'])); $quasimodoRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setDictionary($wordList); $redactedRule = (new ExclusionRule()) ->setMatchingType(MatchingType::MATCHING TYPE PARTIAL MATCH) ->setRegex((new Regex()) ->setPattern('REDACTED')); // Specify the exclusion rule and build-in info type the inspection will look for. $personName = (new InfoType()) ->setName('PERSON NAME'); $inspectionRuleSet = (new InspectionRuleSet()) ->setInfoTypes([$personName]) ->setRules([ (new InspectionRule()) ->setHotwordRule($patientRule), (new InspectionRule()) ->setHotwordRule($doctorRule), (new InspectionRule()) ->setExclusionRule($quasimodoRule), (new InspectionRule()) ->setExclusionRule($redactedRule), ]); // Construct the configuration for the Inspect request, including the ruleset. $inspectConfig = (new InspectConfig()) ->setInfoTypes([$personName]) ->setIncludeQuote(true) ->setRuleSet([$inspectionRuleSet]); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- MATCHING TYPE PARTIAL MATCH , } Construct the rule set, combining the above rules rule set = [ { "info types" : [{ "name" : "PERSON NAME" }], "rules" : [ { "hotword rule" : patient rule }, { "hotword rule" : doctor rule }, { "exclusion rule" : quasimodo rule }, { "exclusion rule" : redacted rule }, ], } ] Construct the configuration dictionary inspect config = { "info types" : [{ "name" : "PERSON NAME" }], "rule set" : rule set , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST See the JSON quickstart for more information about using the DLP API with JSON. ... "inspectConfig" : { "infoTypes" : [ { "name" : "PERSON NAME" } ], "ruleSet" : [ { "infoTypes" : [ { "name" : "PERSON NAME" } ], "rules" : [ { "hotwordRule" : { "hotwordRegex" : { "pattern" : "patient" }, "proximity" : { "windowBefore" : 10 }, "likelihoodAdjustment" : { "fixedLikelihood" : "VERY LIKELY" } } }, { "hotwordRule" : { "hotwordRegex" : { "pattern" : "doctor" }, "proximity" : { "windowBefore" : 10 }, "likelihoodAdjustment" : { "fixedLikelihood" : "UNLIKELY" } } }, { "exclusionRule" : { "dictionary" : { "wordList" : { "words" : [ "Quasimodo" ] } }, "matchingType" : "MATCHING TYPE PARTIAL MATCH" } }, { "exclusionRule" : { "regex" : { "pattern" : "REDACTED" }, "matchingType" : "MATCHING TYPE PARTIAL MATCH" } } ] } ] } ...

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adjustment rules Adjustment rules can help you refine detection accuracy by increasing (also called boosting ) or decreasing the likelihood values of findings based on the context in which they appear.
- For example, you can use an adjustment rule to increase the likelihood values of GENERIC ID findings when they appear in documents that match DOCUMENT TYPE/CONTEXT/FINANCE .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The string to inspect // const string = 'My email is gary@example.com and my phone number is (223) 456-7890.'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // See https://cloud.google.com/dlp/docs/concepts-infotypes for more information // about supported infoTypes. // const infoTypes = [{ name: 'PHONE NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // Whether to include the matching string // const includeQuote = true; async function inspectPhoneNumber () { // Construct item to inspect const item = { value : string }; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , includeQuote : includeQuote , limits : { maxFindingsPerRequest : maxFindings , }, }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings:' ); findings . forEach ( finding = > { if ( includeQuote ) { console . log ( \tQuote: ${ finding . quote } ); } console . log ( \tInfo type: ${ finding . infoType . name } ); console . log ( \tLikelihood: ${ finding . likelihood } ); }); } else { console . log ( 'No findings.' ); } } inspectPhoneNumber (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). info types = [{ "name" : "PHONE NUMBER" }] Construct the configuration dictionary. inspect config = { "info types" : info types , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST JSON input: POST https://dlp.googleapis.com/v2/projects/[PROJECT-ID]/content:inspect?key={YOUR API KEY} { "item":{ "value":"My phone number is (415) 555-0890" }, "inspectConfig":{ "includeQuote":true, "minLikelihood":"POSSIBLE", "infoTypes":{ "name":"PHONE NUMBER" } } } When you send the preceding request the specified endpoint, Sensitive Data Protection returns the following: JSON output: { "result":{ "findings":[ { "quote":"(415) 555-0890", "infoType":{ "name":"PHONE NUMBER" }, "likelihood":"VERY LIKELY", "location":{ "byteRange":{ "start":"19", "end":"33" }, "codepointRange":{ "start":"19", "end":"33" } }, "createTime":"2018-10-29T23:46:34.535Z" } ] } } You must specify particular infoTypes listed in the reference in your inspection configuration.

### InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation Likelihood InfoTypeLikelihood JSON representation FindingLimits JSON representation InfoTypeLimit JSON representation CustomInfoType JSON representation SurrogateType StoredType JSON representation MetadataKeyValueExpression JSON representation DetectionRule JSON representation HotwordRule JSON representation Proximity JSON representation LikelihoodAdjustment JSON representation ExclusionType ContentOption InspectionRuleSet JSON representation InspectionRule JSON representation ExclusionRule JSON representation ExcludeInfoTypes JSON representation ExcludeByHotword JSON representation ExcludeByImageFindings JSON representation ImageContainmentType JSON representation Encloses FullyInside Overlap MatchingType AdjustmentRule JSON representation AdjustByMatchingInfoTypes JSON representation AdjustByImageFindings JSON representation Configuration description of the scanning process.
- If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the InspectionRuleSet.info types finding. matchingType enum ( MatchingType ) How the adjustment rule is applied.
- JSON representation { "infoTypes" : [ { object ( InfoType ) } ] , "minLikelihood" : enum ( Likelihood ) , "minLikelihoodPerInfoType" : [ { object ( InfoTypeLikelihood ) } ] , "limits" : { object ( FindingLimits ) } , "includeQuote" : boolean , "excludeInfoTypes" : boolean , "customInfoTypes" : [ { object ( CustomInfoType ) } ] , "contentOptions" : [ enum ( ContentOption ) ] , "ruleSet" : [ { object ( InspectionRuleSet ) } ] } Fields infoTypes[] object ( InfoType ) Restricts what infoTypes to look for.
- JSON representation { "likelihoodAdjustment" : { object ( LikelihoodAdjustment ) } , // Union field conditions can be only one of the following: "adjustByMatchingInfoTypes" : { object ( AdjustByMatchingInfoTypes ) } , "adjustByImageFindings" : { object ( AdjustByImageFindings ) } // End of list of possible types for union field conditions . } Fields likelihoodAdjustment object ( LikelihoodAdjustment ) Likelihood adjustment to apply to the infoType.

