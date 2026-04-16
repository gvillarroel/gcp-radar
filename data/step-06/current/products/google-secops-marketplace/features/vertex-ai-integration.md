---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.685Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2025-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-cloud-trail"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/area1"
keywords:
  - "vertex"
  - "ai"
  - "integration"
  - "adds"
---

# Vertex AI integration

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a Vertex AI integration.

## Extended Definition

Adds a Vertex AI integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-cloud-trail](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-cloud-trail)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/area1](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/area1)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- Configuration parameters All integrations should contain configuration parameters (API Root + Auth parameters), unless the underlying API doesn't require any authentication and the API Root can be hardcoded.
- Response integration metadata Name The Name should correspond to the product name with which the integration is going to be integrated and shouldn't contain any special characters.

### "Integrate Akamai with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration parameters The Akamai integration requires the following parameters: Parameter Description Host Required.
- Action outputs The Get Network Lists action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Get Network Lists action: [ { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } }, "Activation STAGING" : { "activationId" : 12345 , "activationComments" : "Allow IPs of new employees who joined this week" , "activationStatus" : "PENDING ACTIVATION" , "syncPoint" : 5 , "uniqueId" : "25614 GENERALLIST" , "fast" : false , "dispatchCount" : 1 , "links" : { "appendItems" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/append" , "method" : "POST" }, "retrieve" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "syncPointHistory" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/sync-points/5/history" }, "update" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" }, "activationDetails" : { "href" : "/network-list/v2/network-lists/activations/12345/" } } }, "Activation PRODUCTION" : { "activationId" : 12345 , "activationComments" : "Allow IPs of new employees who joined this week" , "activationStatus" : "PENDING ACTIVATION" , "syncPoint" : 5 , "uniqueId" : "25614 GENERALLIST" , "fast" : false , "dispatchCount" : 1 , "links" : { "appendItems" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/append" , "method" : "POST" }, "retrieve" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "syncPointHistory" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/sync-points/5/history" }, "update" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" }, "activationDetails" : { "href" : "/network-list/v2/network-lists/activations/12345/" } } } } ] Output messages The Get Network Lists action provides the following output messages: Output message Message description Successfully returned network lists from Akamai.
- Action outputs The Remove Items From Network List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Remove Items From Network Lists action: { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } } } Output messages The Remove Items From Network List action provides the following output messages: Output message Message description Successfully updated network list in Akamai.
- Action outputs The Add Items To Network List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Add Items To Network Lists action: { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } } } Output messages The Add Items To Network List action provides the following output messages: Output message Message description Successfully updated network list in Akamai.

### "Integrate AWS CloudTrail with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-cloud-trail](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-cloud-trail)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Integration inputs For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .
- If selected, the integration validates the SSL certificate when connecting to the AWS CloudTrail server.
- Action inputs N/A Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A JSON result N/A Script result Available Script result Script result name Value is success True/False Case wall The action provides the following output messages: Output message Message description Successfully connected to the AWS CloudTrail server with the provided connection parameters!
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.

### "Cloudflare Email Security with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/area1](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/area1)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration parameters For detailed instructions on how to configure an integration in Google SecOps, see Configure integrations .
- In the Google SecOps platform, the integration for Cloudflare Email Security is called Area 1 .
- Action results Entity enrichment Enrichment rield name Logic - When to apply AREA1 category Returns if it exists in JSON result AREA1 threat type Returns if it exists in JSON result AREA1 classification disposition Returns if it exists in JSON result AREA1 confidence rating Returns if it exists in JSON result AREA1 intervals Returns if it exists in JSON result AREA1 value Returns if it exists in JSON result AREA1 type Returns if it exists in JSON result AREA1 name Returns if it exists in JSON result Script result Script result name Value options Example is success True/False is success:False JSON result [ { "EntityResult" : "85f321d7f27916de21992c5284ff632db3db3481" , "Entity" : "indicator" }, { "EntityResult" : "red" , "Entity" : "tlp" }, { "EntityResult" : 80 , "Entity" : "overall confidence" }, { "EntityResult" : "85f321d7f27916de21992c5284ff632db3db3481" , "Entity" : "name" }, { "EntityResult" : [ { "category" : [ "Universal" ], "threat type" : [ "Actor Tool" ], "classification disposition" : [ "Unclassified" ] }], "Entity" : "threat categories" }, { "EntityResult" : "drizzle" , "Entity" : "author" }, { "EntityResult" : "85f321d7f27916de21992c5284ff632db3db3481" , "Entity" : "filehash" }, { "EntityResult" : 1550125103522 , "Entity" : "first detected" }, { "EntityResult" : "85f321d7f27916de21992c5284ff632db3db3481" , "Entity" : "Hash SHA1" }, { "EntityResult" : "Area 1 Identified Malicious" , "Entity" : "threat name" }, { "EntityResult" : "85f321d7f27916de21992c5284ff632db3db3481" , "Entity" : "query term" }, { "EntityResult" : "MAICIOUS" , "Entity" : "disposition" }, { "EntityResult" : "file" , "Entity" : "family" }, { "EntityResult" : [ { "category" : "Indicator Category" , "confidence rating" : 80 , "intervals" : [ { "start" : 1550120952000 , "end" : "current" }], "value" : "Universal" }], "Entity" : "tag histories" }, { "EntityResult" : 1550125103522 , "Entity" : "first seen" }, { "EntityResult" : [ { "type" : "Hash MD5" , "name" : "e412341be78003526999f77e8728526e" }, { "type" : "Hash SHA256" , "name" : "61f006012d2bd7f43bc14ecbeb6a7e690f9d68b4b6b396dab5805be2da75c717" }], "Entity" : "aliases" }, { "EntityResult" : "Hash SHA1" , "Entity" : "type" }, { "EntityResult" : 1550120950000 , "Entity" : "last seen" } ] Need more help?
- Action results Script result Script result name Value options Example Is Success True/False Is Success:False JSON result [ { "threat categories" : [{ "classification disposition" : [ "Unclassified" ] }], "threat name" : "Microsoft Favicon Impersonation" , "item name" : "example.com/nc assets/css/12/" , "item type" : "url" , "first seen" : 1550127499097 , "last seen" : 1550134395800 }, { "threat categories" : [{ "category" : [ "Universal" ], "threat type" : [ "Actor Tool" ], "classification disposition" : [ "Unclassified" ] }], "threat name" : "Area 1 Identified Malicious" , "item name" : "e039e82c00e4ae0ddc92908c705350ec" , "item type" : "filehash" , "first seen" : 1550125103575 , "last seen" : 1550125103575 } ] Ping Test the connectivity to Cloudflare Email Security.

