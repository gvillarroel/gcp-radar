---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.908Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center API Finding.moduleName attribute"
feature_slug: "security-command-center-api-finding-modulename-attribute"
latest_feature_date: "2023-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes"
keywords:
  - "security"
  - "command"
  - "center"
  - "finding"
  - "modulename"
  - "attribute"
  - "adds"
  - "identify"
---

# Security Command Center API Finding.moduleName attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Adds the moduleName attribute to a finding to identify the detection module that generated it.

## Extended Definition

Adds the moduleName attribute to a finding to identify the detection module that generated it.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The moduleName attribute, when included in a finding, identifies the full resource name of the specific detection module of the Security Command Center service that generated the finding.
- April 03, 2023 Feature The moduleName attribute is added to the Finding object of the Security Command Center API.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If you specify one or more resource value configurations, but no resources in your Google Cloud environment match the attributes specified in any of the configurations, Security Command Center generates an SCC Error finding and falls back to the default high-value resource set.
- For more information, see the following sections on this page: Attack exposure scores Attack paths Attack path simulations Attack exposure scores Premium and Enterprise service tiers (requires organization-level activation ) An attack exposure score appears for the following: A Security Command Center finding or resource A Security Command Center Premium or Enterprise issue An attack exposure score is a measure of how exposed resources are to potential attack if a malicious actor were to gain access to your Google Cloud environment.
- Similarly, a high attack-exposure score on any of the following does not mean that an attack is in progress: A Security Command Center finding or resource A Security Command Center Premium or Enterprise issue To watch for actual attacks, monitor the THREAT class findings produced by the threat detection services, like Event Threat Detection and Container Threat Detection .
- Attack path simulations identify potential attack paths by modeling what would happen if an attacker applied known attack methods to the vulnerabilities and misconfigurations that Security Command Center has detected in your environment to try to reach your high-value resources.

### "InfoTypes and infoType detectors \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples To get a better idea of how infoTypes match on findings, look at the following examples of matching on a series of digits to determine whether they constitute a US Social Security number or a US Individual Taxpayer Identification Number.
- By identifying the data you are handling, you can make informed decisions for your business, users, and data security and privacy posture.
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The string to inspect // const string = 'My email is gary@example.com and my phone number is (223) 456-7890.'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // See https://cloud.google.com/dlp/docs/concepts-infotypes for more information // about supported infoTypes. // const infoTypes = [{ name: 'PHONE NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // Whether to include the matching string // const includeQuote = true; async function inspectPhoneNumber () { // Construct item to inspect const item = { value : string }; // Construct request const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , includeQuote : includeQuote , limits : { maxFindingsPerRequest : maxFindings , }, }, item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( 'Findings:' ); findings . forEach ( finding = > { if ( includeQuote ) { console . log ( \tQuote: ${ finding . quote } ); } console . log ( \tInfo type: ${ finding . infoType . name } ); console . log ( \tLikelihood: ${ finding . likelihood } ); }); } else { console . log ( 'No findings.' ); } } inspectPhoneNumber (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient () Prepare info types by converting the list of strings into a list of dictionaries (protos are also accepted). info types = [{ "name" : "PHONE NUMBER" }] Construct the configuration dictionary. inspect config = { "info types" : info types , "include quote" : True , } Construct the item. item = { "value" : content string } Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . inspect content ( request = { "parent" : parent , "inspect config" : inspect config , "item" : item } ) Print out the results. if response . result . findings : for finding in response . result . findings : print ( f "Quote: { finding . quote } " ) print ( f "Info type: { finding . info type . name } " ) print ( f "Likelihood: { finding . likelihood } " ) else : print ( "No findings." ) REST JSON input: POST https://dlp.googleapis.com/v2/projects/[PROJECT-ID]/content:inspect?key={YOUR API KEY} { "item":{ "value":"My phone number is (415) 555-0890" }, "inspectConfig":{ "includeQuote":true, "minLikelihood":"POSSIBLE", "infoTypes":{ "name":"PHONE NUMBER" } } } When you send the preceding request the specified endpoint, Sensitive Data Protection returns the following: JSON output: { "result":{ "findings":[ { "quote":"(415) 555-0890", "infoType":{ "name":"PHONE NUMBER" }, "likelihood":"VERY LIKELY", "location":{ "byteRange":{ "start":"19", "end":"33" }, "codepointRange":{ "start":"19", "end":"33" } }, "createTime":"2018-10-29T23:46:34.535Z" } ] } } You must specify particular infoTypes listed in the reference in your inspection configuration.

