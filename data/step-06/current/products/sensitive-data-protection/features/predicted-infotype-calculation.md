---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.346Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Predicted infoType calculation"
feature_slug: "predicted-infotype-calculation"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InfoTypeSummary"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference"
keywords:
  - "calculation"
  - "considering"
  - "improves"
  - "predicted"
  - "infotype"
---

# Predicted infoType calculation

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection now improves predicted infoType calculation by considering correlations between detected infoTypes when one is a subset of another.

## Extended Definition

Sensitive Data Protection now improves predicted infoType calculation by considering correlations between detected infoTypes when one is a subset of another.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InfoTypeSummary](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InfoTypeSummary)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference)

## Supporting Pages

### InfoTypeSummary \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InfoTypeSummary](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InfoTypeSummary)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not populated for predicted infotypes.
- JSON representation { "infoType" : { object ( InfoType ) } , "estimatedPrevalence" : integer } Fields infoType object ( InfoType ) The infoType. estimatedPrevalence (deprecated) integer This item is deprecated!
- Home Documentation Security Sensitive Data Protection Reference Send feedback InfoTypeSummary Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The infoType details for this column.

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The string to inspect // const string = 'My email is gary@example.com and my phone number is (223) 456-7890.'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // See https://cloud.google.com/dlp/docs/concepts-infotypes for more information // about supported infoTypes. // const infoTypes = [{ name: 'PHONE NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // Whether to include the matching string // const includeQuote = true; async function inspectPhoneNumber () { // Construct item to inspect const item = { value : string }; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , includeQuote : includeQuote , limits : { maxFindingsPerRequest : maxFindings , }, }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings:' ); findings . forEach ( finding = > { if ( includeQuote ) { console . log ( \tQuote: ${ finding . quote } ); } console . log ( \tInfo type: ${ finding . infoType . name } ); console . log ( \tLikelihood: ${ finding . likelihood } ); }); } else { console . log ( 'No findings.' ); } } inspectPhoneNumber (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). info types = [{ "name" : "PHONE NUMBER" }] Construct the configuration dictionary. inspect config = { "info types" : info types , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST JSON input: POST https://dlp.googleapis.com/v2/projects/[PROJECT-ID]/content:inspect?key={YOUR API KEY} { "item":{ "value":"My phone number is (415) 555-0890" }, "inspectConfig":{ "includeQuote":true, "minLikelihood":"POSSIBLE", "infoTypes":{ "name":"PHONE NUMBER" } } } When you send the preceding request the specified endpoint, Sensitive Data Protection returns the following: JSON output: { "result":{ "findings":[ { "quote":"(415) 555-0890", "infoType":{ "name":"PHONE NUMBER" }, "likelihood":"VERY LIKELY", "location":{ "byteRange":{ "start":"19", "end":"33" }, "codepointRange":{ "start":"19", "end":"33" } }, "createTime":"2018-10-29T23:46:34.535Z" } ] } } You must specify particular infoTypes listed in the reference in your inspection configuration.
- Notice that the PHONE NUMBER detector is specified in inspectConfig, which instructs Cloud DLP to scan the given string for a phone number. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect phone number( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'My name is Gary and my phone number is (415) 555-0890' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); $inspectConfig = (new InspectConfig()) // The infoTypes of information to match ->setInfoTypes([ (new InfoType())->setName('PHONE NUMBER'), ]) // Whether to include the matching string ->setIncludeQuote(true) ->setMinLikelihood(Likelihood::POSSIBLE); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- InspectContentResponse response = dlp . inspectContent ( request ); // Parse the response and process results System . out . println ( "Findings: " + response . getResult (). getFindingsCount ()); for ( Finding f : response . getResult (). getFindingsList ()) { System . out . println ( "\tQuote: " + f . getQuote ()); System . out . println ( "\tInfo type: " + f . getInfoType (). getName ()); System . out . println ( "\tLikelihood: " + f . getLikelihood ()); } } } } Node.js To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

### Metrics reference \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/metrics-reference)
- Source ID: `site-docs-reference-3`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, suppose you have a column that has the following metrics: Predicted infoType: FDA CODE Other infoTypes: PERSON NAME (2%) , STREET ADDRESS (1%) In this example, there is a strong indication that the column contains FDA codes.
- Predicted infoType If a single built-in or custom infoType clearly predominates over others in the column, Sensitive Data Protection sets this field to that infoType.
- For example, if the column predominantly has a mix of PASSPORT , AUSTRALIA PASSPORT , and CANADA PASSPORT infoTypes, the Predicted infoType field is set to PASSPORT .
- Other infoTypes InfoTypes detected in the column that don't have a strong enough signal to be considered that column's predicted infoType .

