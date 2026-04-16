---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.657Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Hunt Process predefined widget"
feature_slug: "hunt-process-predefined-widget"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti"
keywords:
  - "hunt"
  - "process"
  - "predefined"
  - "widget"
  - "adds"
  - "for"
  - "the"
  - "action"
---

# Hunt Process predefined widget

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a predefined widget for the Hunt Process action.

## Extended Definition

Adds a predefined widget for the Hunt Process action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- It does not automatically execute the underlying rules to generate new inputs for the test, which means you cannot validate an entire rule chain in a single action.
- To run a retrohunt for the rule sequence, do the following: Manually start a retrohunt from the first rule in the sequence.
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- Test and deploy the rule chain : We recommend manually running a retrohunt for each rule in the sequence.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Graph investigator Visualize the who, what, and when of an attack, identify opportunities for threat hunting, capture the full picture and take action.
- Integrated development environment (IDE) Security teams with coding skills can modify and enhance existing playbook actions, debug code, build new actions for existing integrations, and create integrations that are not available in the Content Hub.
- Playbook designer Build playbooks by selecting predefined actions and dragging and dropping them into the playbook canvas without additional coding.
- Detection engine You can use the Google SecOps Detection Engine to automate the process of searching across your data for security issues.

### "Integrate AlienVault OTX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters N/A Run on This action runs on the following entities: IP Address Filehash URL Hostname Action results Entity enrichment Enrichment field name Logic - When to apply analysis Returns if it exists in JSON result general Returns if it exists in JSON result Script result Script result name Value options Example is enriched True or False is enriched:False JSON result [ { "EntityResult" : { "analysis" : { "analysis" : { "hash" : "555a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd55" , "info" : { "results" : { "file class" : "None" , "file type" : "ASCII text, with no line terminators" , "md5" : "55d88612fea8a8f36de82e1278abb02f" , "sha1" : "1235856ce81f2b7382dee72602f798b642f14123" , "ssdeep" : " " , "filesize" : "68" , "sha256" : "37dhr21bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf65hdgsu" }}, " id" : "52b1200214ad667e85105707" , "metadata" : { "tlp" : "WHITE" }, "datetime int" : "2013 - 12 - 18T04: 09: 37" , "plugins" : { "exiftool" : { "process time" : "0.083348989486694336" , "results" : { "Error" : "Unknown file type" }}, "avg" : { "process time" : "0.92721199989318848" , "results" : { "detection" : "EICAR Test" , "alerts" : [ " Malware infection" ] }}, "clamav" : { "process time" : "0.00052618980407714844" , "results" : { "detection" : "Eicar - Test - Signature" , "alerts" : [ "Malware detected" ] }}}}, "malware" : {}, "page type" : "None" }, "general" : { "type title" : " FileHash - SHA256" , "sections" : [ "general" , "analysis" ], "indicator" : "555a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd55" , "base indicator" : { "title" : " " , "access type" : "public" , "description" : " " , "content" : " " , "indicator" : "275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f" , "access reason" : " " , "type" : "FileHash - SHA256" , "id" : 22822 }, "type" : "sha256" , "pulse info" : { "count" : 11 , "pulses" : [{ "pulse source" : "api" , "references" : [ "https://metadefender.opswat.com/threat-intelligence-feeds" ], "subscriber count" : 568 , "modified text" : "95 days ago" , "is subscribing" : "None" , "votes count" : 0 , "vote" : 0 , "id" : "5bbf59f5d47a1b46ca035bde" , "industries" : [], "author" : { "username" : "Metadefender" , "is subscribed" : 0 , "avatar url" : "https://otx20-web-media.s3.amazonaws.com/media/avatars/user/resized/80/avatar.png" , "is following" : 0 , "id" : "32153" }, "cloned from" : "None" , "comment count" : 0 , "follower count" : 0 , "public" : 1 , "indicator type counts" : { "FileHash-SHA1" : 1000 , "FileHash-MD5" : 1000 , "FileHash-SHA256" : 1000 }, "TLP" : "green" , "description" : "Production malware has shown the following behaviors: injector,trojan,adware,sms,backdoor" , "tags" : [ "html" , "win32" , "js" ], "in group" : "False" , "is modified" : "False" , "upvotes count" : 0 , "targeted countries" : [], "groups" : [], "validator count" : 0 , "threat hunter scannable" : "True" , "is author" : "False" , "adversary" : " " , "name" : "Production malware on Metadefender.com" , "locked" : 0 , "observation" : { "pulse source" : "api" , "references" : [ "https://metadefender.opswat.com/threat-intelligence-feeds" ], "subscriber count" : 2 , "is subscribed" : 0 , "author name" : "Metadefender" , "is subscribing" : "None" , "is following" : 0 , "vote" : 0 , "id" : "5bbf59f5d47a1b46ca035bde" , "industries" : [], "cloned from" : "None" , "comment count" : 0 , "avatar url" : "https://otx20-web-media.s3.amazonaws.com/media/avatars/user/resized/80/avatar.png" , "follower count" : 0 , "public" : 1 , "revision" : 1 , "indicator type counts" : { "FileHash-SHA1" : 1000 , "FileHash-MD5" : 1000 , "FileHash-SHA256" : 1000 }, "description" : "Production malware has shown the following behaviors: injector,trojan,adware,sms,backdoor" , "tags" : [ "html" , "win32" , "js" ], "upvotes count" : 0 , "targeted countries" : [], "groups" : [], "validator count" : 0 , "adversary" : " " , "tlp" : "green" , "locked" : 0 , "name" : "Production malware on Metadefender.com" , "created" : "2018-10-11T14:11:01.432000" , "downvotes count" : 0 , "modified" : "2018-10-11T14:11:01.432000" , "export count" : 3 , "extract source" : [], "votes count" : 0 , "author id" : 32153 , "user subscriber count" : 566 }, "created" : "2018-10-11T14:11:01.432000" , "downvotes count" : 0 , "modified" : "2018-10-11T14:11:01.432000" , "export count" : 3 , "indicator count" : 3000 , "is following" : 0 }], "references" : [ "https: //metadefender.opswat.com/results?utm medium=reference&amp" ] }}}, "Entity" : "123a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fasd" } ] Ping Test the connectivity.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Network Function Default port Direction Protocol API Multivalues Outbound apikey Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Instance Name String N/A No Name of the Instance you intend to configure integration for.
- Actions For more information about actions, see Respond to pending actions from Your Workdesk and Perform a manual action .

