---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.728Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "CIEM only feed"
feature_slug: "ciem-only-feed"
latest_feature_date: "2025-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules"
keywords:
  - "ciem"
  - "only"
  - "feed"
  - "offers"
  - "alternate"
  - "contains"
  - "help"
  - "reduce"
---

# CIEM only feed

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

CIEM offers an alternate feed that contains only CIEM data to help reduce costs.

## Extended Definition

CIEM offers an alternate feed that contains only CIEM data to help reduce costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- An alternate CIEM only feed to reduce costs.
- This lets you set up AWS audit logs for individual AWS accounts—instead of mandating logs across the entire AWS organization—and helps reduce your total cost of operations for CIEM in Security Command Center Enterprise.
- Feature Cloud Infrastructure Entitlement Management (CIEM) is generally available CIEM helps you adhere to the principle of least privilege by providing a comprehensive look at the security of your identity and access configuration.
- You can now use the containsOnly() function to query findings with an array-type attribute or subfield that only contains values that match the specified filter, and no other values.

### "Modifying infoType detectors to refine scan results \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-rules)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MATCHING TYPE PARTIAL MATCH , }; // Construct a rule set that will only match if the match text does not // contains tokens from the exclusion list. const ruleSet = [ { infoTypes : [{ name : 'CUSTOM NAME DETECTOR' }], rules : [ { exclusionRule : exclusionRUle , }, ], }, ]; // Construct the configuration for the Inspect request, including the ruleset. const inspectConfig = { customInfoTypes : customInfoTypes , ruleSet : ruleSet , includeQuote : true , }; // Construct the Inspect request to be sent by the client. const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : inspectConfig , item : item , }; // Use the client to send the API request. const [ response ] = await dlp . inspectContent ( request ); // Print findings. const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( Findings: ${ findings . length } \n ); findings . forEach ( finding = > { console . log ( InfoType: ${ finding . infoType . name } ); console . log ( \tQuote: ${ finding . quote } ); console . log ( \tLikelihood: ${ finding . likelihood } \n ); }); } else { console . log ( 'No findings.' ); } } inspectStringCustomExclusionDict (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- MATCHING TYPE FULL MATCH , }; // Construct a rule set that will only match if the match text does not // contains Info type matches. const ruleSet = [ { infoTypes : [{ name : 'PERSON NAME' }], rules : [ { exclusionRule : exclusionRule , }, ], }, ]; // Construct the inspect configuration const inspectConfig = { infoTypes : [{ name : 'PERSON NAME' }], customInfoTypes : customInfoTypes , ruleSet : ruleSet , includeQuote : true , }; // Combine configurations into a request for the service. const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : inspectConfig , item : item , }; // Run request const [ response ] = await dlp . inspectContent ( request ); // Print Findings const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( Findings: ${ findings . length } \n ); findings . forEach ( finding = > { console . log ( InfoType: ${ finding . infoType . name } ); console . log ( \tQuote: ${ finding . quote } ); console . log ( \tLikelihood: ${ finding . likelihood } \n ); }); } else { console . log ( 'No findings.' ); } } inspectStringCustomOmitOverlap (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient () Construct a custom regex detector for names custom info types = [ { "info type" : { "name" : "CUSTOM NAME DETECTOR" }, "regex" : { "pattern" : "[A-Z][a-z]{1,15}, [A-Z][a-z]{1,15}" }, } ] Construct a rule set that will only match if the match text does not contains tokens from the exclusion list. rule set = [ { "info types" : [{ "name" : "CUSTOM NAME DETECTOR" }], "rules" : [ { "exclusion rule" : { "dictionary" : { "word list" : { "words" : exclusion list }}, "matching type" : google . cloud . dlp v2 .
- See https://cloud.google.com/dlp/docs/concepts-infotypes for more information about supported infoTypes. info types to locate = [{ "name" : "EMAIL ADDRESS" }, { "name" : "DOMAIN NAME" }] Construct a rule set that will only match if the match text does not contains tokens from the exclusion list. rule set = [ { "info types" : info types to locate , "rules" : [ { "exclusion rule" : { "dictionary" : { "word list" : { "words" : exclusion list }}, "matching type" : google . cloud . dlp v2 .

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- This can help reduce the amount of data scanned and bring down the overall cost of an inspection job. includedFields : Table fields that uniquely identify specific rows within the table to scan.
- These scans can also be configured to only inspect data that has changed since the last scan, which can save time and reduce costs.
- To help reduce job latency, you can try the following: If sampling is available for your job or job trigger, enable it.
- The scan starts from a random location in the dataset and only includes text files under 200 bytes. @param string $callingProjectId The project ID to run the API call under. @param string $gcsUri Google Cloud Storage file url. @param string $topicId The ID of the Pub/Sub topic to notify once the job completes. @param string $subscriptionId The ID of the Pub/Sub subscription to use when listening for job. / function inspect gcs with sampling( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $gcsUri = 'gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv', string $topicId = 'dlp-pubsub-topic', string $subscriptionId = 'dlp subcription' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct the items to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsUri)) ->setBytesLimitPerFile(200) ->setFilesLimitPercent(90) ->setSampleMethod(SampleMethod::RANDOM START); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions($cloudStorageOptions); // Specify the type of info the inspection will look for. $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $cardNumberInfoType = (new InfoType()) ->setName('CREDIT CARD NUMBER'); $infoTypes = [$phoneNumberInfoType, $emailAddressInfoType, $cardNumberInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Construct the action to run when job completes. $action = (new Action()) ->setPubSub((new PublishToPubSub()) ->setTopic($topic->name())); // Construct inspect job config to run. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes. // Consider using an asynchronous execution model such as Cloud Functions. $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.

