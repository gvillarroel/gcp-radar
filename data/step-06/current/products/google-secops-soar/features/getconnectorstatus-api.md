---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.827Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "GetConnectorStatus API"
feature_slug: "getconnectorstatus-api"
latest_feature_date: "2024-02-22"
deprecation_date: "2024-02-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api"
keywords:
  - "getconnectorstatus"
  - "api"
  - "returned"
  - "connector"
  - "status"
  - "information"
  - "deprecated"
  - "on"
---

# GetConnectorStatus API

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Returned connector status information; deprecated on 2024-02-22.

## Extended Definition

Returned connector status information; deprecated on 2024-02-22.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- If some entities were successfully enriched but others were not, then the best practice is to provide status information for each provided entity in the message.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Add a feed Caution: As of April 15, 2026 , the v1 connector framework for Google Cloud Storage, Amazon S3, Amazon SQS, and Azure Blob Storage is deprecated.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ip set id" : { "Format" : "response['Format']" , "Location" : "response['Location']" , "Name" : "response['Name']" , "Status" : "response['Status']" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details (is success=true): "Successfully retrieved details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids)" If not successful for some of the IDs (is success=true) : "Action wasn't able to retrieve details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used (is success=false): "No details were retrieved about the provided Trusted IP Lists".format(list of ids)" The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Trusted IP Lists".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "DetectorId" : " DETECTOR ID " , "CreatedAt" : "response['CreatedAt']" , "ServiceRole" : "response['ServiceRole']" , "Status" : "response['Status']" , "UpdatedAt" : "response['UpdatedAt']" , } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Successfully retrieved information about <Indicator ID> indicator." Note : If some detector ID s found, and some not - display both messages based on the relevant detector ID.
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully deleted the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If unsuccessful for some of the IDs (is success=true): "Action wasn't able to delete the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used: "No Threat Intelligence Sets were deleted.".format(list of ids) The action should fail and stop a playbook execution: Invalid detector ID should raise an exception as well, stop the playbook and set is success to false.

### "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CrowdStrike's deprecation of this API affects the following actions and connectors: Add Comment to Detection Close Detection Update Detection CrowdStrike - Detections Connector The SOAR CrowdStrike integration already supports the Alerts API, which replaces the Detections API.
- This change affects you if you meet both of the following conditions: You have active data feeds using the CrowdStrike Detection Cloud Monitoring API connector, which maps to the CS DETECTS log type.
- CrowdStrike Detections API deprecation in SOAR integration The CrowdStrike Falcon SOAR integration used the Detections API within its actions and connectors.
- By creating a new client with the correct permissions, you can ensure that the connector uses the modern Alerts API.

