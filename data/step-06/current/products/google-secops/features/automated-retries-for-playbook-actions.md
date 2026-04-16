---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.772Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Automated retries for playbook actions"
feature_slug: "automated-retries-for-playbook-actions"
latest_feature_date: "2025-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "automated"
  - "retries"
  - "playbook"
  - "actions"
  - "playbooks"
  - "can"
  - "automatically"
  - "retry"
---

# Automated retries for playbook actions

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Playbooks can automatically retry individual actions that fail due to temporary issues, with configurable attempts and intervals.

## Extended Definition

Playbooks can automatically retry individual actions that fail due to temporary issues, with configurable attempts and intervals.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.
- Edit : Select single or multiple playbooks and blocks for use with the Actions menu.
- For more information about the Playbooks page and how to collaborate with it, see the following: Define custom alert views from Playbook Designer Work with the Playbook Simulator Understand playbook monitoring Use the Playbook Navigator Playbook icons legend The following icons appear on the Cases > Playbooks tab when a playbook is attached.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cases Detect and manage threats in the AWS system using playbooks or manual actions.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- After you configure an integration instance, you can use it in playbooks.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Automated response :Leveraging native playbook orchestration capabilities, security teams can also automate response actions on Chrome Enterprise, such as blocking malicious URLs, blocking extensions, and even quarantining devices, directly from the Google SecOps platform.
- See Install playbooks Ingest the Google Cloud logs into Google SecOps using direct ingestion: See Ingest Google Cloud logs Set up the Google Cloud Export Filter.
- See Map users Enable the response playbooks.
- They see the behavior within the alert corresponds to a service account that is over-privileged, and is allowing an adversary to move laterally through a cloud environment, access new systems, and escalate to higher privileges in order to carry out malicious actions.

