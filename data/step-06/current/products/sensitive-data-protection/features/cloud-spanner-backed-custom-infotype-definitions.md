---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.463Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Cloud Spanner-backed custom infoType definitions"
feature_slug: "cloud-spanner-backed-custom-infotype-definitions"
latest_feature_date: "2020-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
keywords:
  - "definitions"
  - "spanner"
  - "backed"
  - "regex"
  - "word"
  - "custom"
  - "allows"
  - "infotype"
---

# Cloud Spanner-backed custom infoType definitions

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Allows regex, word list, and small dictionary objects for custom infoTypes to be loaded from Cloud Spanner metadata.

## Extended Definition

Allows regex, word list, and small dictionary objects for custom infoTypes to be loaded from Cloud Spanner metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)

## Supporting Pages

### "Custom infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One of the following fields, depending on the kind of custom infoType detector you're creating: "dictionary" : A Dictionary object, which contains a list of words or phrases to search for. "regex" : A Regex object, which contains a single pattern defining the regular expression. "surrogateType" : A SurrogateType object, if present, indicates that the custom infoType detector is a surrogate.
- Next steps Learn more about creating custom infoTypes from the following topics: Creating a regular custom dictionary detector : Learn how to create a custom infoType detector to match findings on a list of words and phrases.
- API overview The CustomInfoType object allows you to create a custom infoType detector for new content or to fine-tune the results returned by pre-defined infoType detectors.
- The following are the types of custom infoType detectors: Regular custom dictionary detectors are simple word and phrase lists that Sensitive Data Protection matches on.

### "Creating a custom regex detector \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex)
- Source ID: `site-api-reference-required-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a JSON object, a regex custom infoType detector that includes all optional components looks like this: { "customInfoTypes" : [ { "infoType" : { "name" : " CUSTOM INFOTYPE NAME " }, "likelihood" : " LIKELIHOOD LEVEL " , "detectionRules" : [ { "hotwordRule" : { HOTWORD RULE } }, "sensitivityScore" : { "score" : " SENSITIVITY SCORE " }, ], "regex" : { "pattern" : " REGULAR EXPRESSION PATTERN " } } ], ... } Note: You can also create a custom regex detector by referencing an existing StoredInfoType in the storedType field of the CustomInfoType object, instead of defining the regex field.
- A regular expression (regex) custom infoType detector allows you to create your own detectors that enable Sensitive Data Protection to detect matches based on a regex pattern.
- The following sample uses a regular expression custom infoType detector that instructs Cloud DLP to match a medical record number (MRN) in the input text "Patient's MRN 444-5-22222," and then assigns each match a likelihood of POSSIBLE. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect custom regex( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'Patients MRN 444-5-22222' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); // Specify the regex pattern the inspection will look for. $customRegexPattern = '[1-9]{3}-[1-9]{1}-[1-9]{5}'; // Construct the custom regex detector. $cMrnDetector = (new InfoType()) ->setName('C MRN'); $customInfoType = (new CustomInfoType()) ->setInfoType($cMrnDetector) ->setRegex((new Regex()) ->setPattern($customRegexPattern)) ->setLikelihood(Likelihood::POSSIBLE); // Construct the configuration for the Inspect request. $inspectConfig = (new InspectConfig()) ->setCustomInfoTypes([$customInfoType]) ->setIncludeQuote(true); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- POSSIBLE , regex : { pattern : customRegex , }, }, ]; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { customInfoTypes : customInfoTypes , includeQuote : true , }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings: \n' ); findings . forEach ( finding = > { console . log ( InfoType: ${ finding . infoType . name } ); console . log ( \tQuote: ${ finding . quote } ); console . log ( \tLikelihood: ${ finding . likelihood } \n ); }); } else { console . log ( 'No findings.' ); } } inspectWithCustomRegex (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-api-reference-required-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The string to inspect // const string = 'My email is gary@example.com and my phone number is (223) 456-7890.'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // See https://cloud.google.com/dlp/docs/concepts-infotypes for more information // about supported infoTypes. // const infoTypes = [{ name: 'PHONE NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // Whether to include the matching string // const includeQuote = true; async function inspectPhoneNumber () { // Construct item to inspect const item = { value : string }; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , includeQuote : includeQuote , limits : { maxFindingsPerRequest : maxFindings , }, }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings:' ); findings . forEach ( finding = > { if ( includeQuote ) { console . log ( \tQuote: ${ finding . quote } ); } console . log ( \tInfo type: ${ finding . infoType . name } ); console . log ( \tLikelihood: ${ finding . likelihood } ); }); } else { console . log ( 'No findings.' ); } } inspectPhoneNumber (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- Regular expressions A regular expression (regex) custom infoType detector allows you to create your own infoType detectors that enable Sensitive Data Protection to detect matches based on a regex pattern.
- To fix this, you can include a hotword rule in the form of a regex custom infoType that looks for the word "patient" within a certain character proximity to the first character of potential matches.
- For example, if you scan a database for email addresses, you can add an exclusion rule in the form of a custom regex that instructs Sensitive Data Protection to exclude any findings ending in "@example.com." For more information about exclusion rules, see Modifying infoType detectors to refine scan results .

