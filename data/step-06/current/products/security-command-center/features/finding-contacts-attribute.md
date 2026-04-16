---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.002Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Finding.contacts attribute"
feature_slug: "finding-contacts-attribute"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "finding"
  - "contacts"
  - "attribute"
  - "stores"
  - "contact"
  - "information"
  - "type"
---

# Finding.contacts attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The attribute stores contact information for a finding by contact type.

## Extended Definition

The attribute stores contact information for a finding by contact type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Container Threat Detection overview Feature Security Command Center findings now include two new attributes that provide additional information about the type of finding and the activity that triggered it.
- June 30, 2022 Feature The contacts and indicator.signatures attributes were added to the Finding object.
- The contacts attribute is a map containing the contacts for the given finding.
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The string to inspect // const string = 'My email is gary@example.com and my phone number is (223) 456-7890.'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // See https://cloud.google.com/dlp/docs/concepts-infotypes for more information // about supported infoTypes. // const infoTypes = [{ name: 'PHONE NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // Whether to include the matching string // const includeQuote = true; async function inspectPhoneNumber () { // Construct item to inspect const item = { value : string }; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , includeQuote : includeQuote , limits : { maxFindingsPerRequest : maxFindings , }, }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings:' ); findings . forEach ( finding = > { if ( includeQuote ) { console . log ( \tQuote: ${ finding . quote } ); } console . log ( \tInfo type: ${ finding . infoType . name } ); console . log ( \tLikelihood: ${ finding . likelihood } ); }); } else { console . log ( 'No findings.' ); } } inspectPhoneNumber (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- Notice that the PHONE NUMBER detector is specified in inspectConfig, which instructs Cloud DLP to scan the given string for a phone number. @param string $projectId The Google Cloud project id to use as a parent resource. @param string $textToInspect The string to inspect. / function inspect phone number( // TODO(developer): Replace sample parameters before running the code. string $projectId, string $textToInspect = 'My name is Gary and my phone number is (415) 555-0890' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$projectId/locations/global"; // Specify what content you want the service to Inspect. $item = (new ContentItem()) ->setValue($textToInspect); $inspectConfig = (new InspectConfig()) // The infoTypes of information to match ->setInfoTypes([ (new InfoType())->setName('PHONE NUMBER'), ]) // Whether to include the matching string ->setIncludeQuote(true) ->setMinLikelihood(Likelihood::POSSIBLE); // Run request $inspectContentRequest = (new InspectContentRequest()) ->setParent($parent) ->setInspectConfig($inspectConfig) ->setItem($item); $response = $dlp->inspectContent($inspectContentRequest); // Print the results $findings = $response->getResult()->getFindings(); if (count($findings) == 0) { printf('No findings.' .
- For example, if you scan a database for email addresses, you can add an exclusion rule in the form of a custom regex that instructs Sensitive Data Protection to exclude any findings ending in "@example.com." For more information about exclusion rules, see Modifying infoType detectors to refine scan results .
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). info types = [{ "name" : "PHONE NUMBER" }] Construct the configuration dictionary. inspect config = { "info types" : info types , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST JSON input: POST https://dlp.googleapis.com/v2/projects/[PROJECT-ID]/content:inspect?key={YOUR API KEY} { "item":{ "value":"My phone number is (415) 555-0890" }, "inspectConfig":{ "includeQuote":true, "minLikelihood":"POSSIBLE", "infoTypes":{ "name":"PHONE NUMBER" } } } When you send the preceding request the specified endpoint, Sensitive Data Protection returns the following: JSON output: { "result":{ "findings":[ { "quote":"(415) 555-0890", "infoType":{ "name":"PHONE NUMBER" }, "likelihood":"VERY LIKELY", "location":{ "byteRange":{ "start":"19", "end":"33" }, "codepointRange":{ "start":"19", "end":"33" } }, "createTime":"2018-10-29T23:46:34.535Z" } ] } } You must specify particular infoTypes listed in the reference in your inspection configuration.

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions on activating Security Command Center with a different service tier, see the following: Activate Security Command Center Standard tier Activate Security Command Center Premium tier Before you begin Before you activate Security Command Center for the first time, complete the following: Plan for the activation Create an organization Create the management project Configure permissions and APIs Configure notification contacts Plan for the activation This section describes decisions and information you need to prepare for the activation.
- During activation of Security Command Center Enterprise, the activation process modifies the Google Cloud log ingestion settings to set all data type fields to enabled: Google Cloud Logging , Cloud Asset Metadata , and Security Command Center Premium findings .
- Configure notification contacts Configure your Essential Contacts so that your security administrators can receive important notifications.
- If you have questions about the type of Google SecOps instance you have, contact your Google Cloud sales representative.

