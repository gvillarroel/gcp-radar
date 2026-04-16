---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.825Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Cases filter-URL synchronization"
feature_slug: "cases-filter-url-synchronization"
latest_feature_date: "2024-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
keywords:
  - "cases"
  - "filter"
  - "url"
  - "synchronization"
  - "synchronizes"
  - "the"
  - "page"
  - "with"
---

# Cases filter-URL synchronization

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Synchronizes the Cases page filter with the URL so filtered queues can be shared.

## Extended Definition

Synchronizes the Cases page filter with the URL so filtered queues can be shared.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the Playbooks page and how to collaborate with it, see the following: Define custom alert views from Playbook Designer Work with the Playbook Simulator Understand playbook monitoring Use the Playbook Navigator Playbook icons legend The following icons appear on the Cases > Playbooks tab when a playbook is attached.
- Duplicate : Create a duplicate playbook with these options: Keep or change priority Keep in same folder or move to a different folder Single , multiple , or all environments, where all indicates all defined environments, present or future.
- Filter : Click filter alt Filter and filter the display based on the following criteria: Playbook simulator is on toggle Show Active Playbooks toggle Priority : Set the attachment order of playbooks for the alert.
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- Case creation and grouping The Cases page is where analysts can investigate incoming alerts and manage incident workflows.
- For details see What's on the Cases page?
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.

### "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin<user@siemplify.co>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported and if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to allow traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Block" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported even if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to block traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "status" : "Success" , "messages" : [], "data" : { "id" : 6 , "subChangeRequests" : [ 12 ], "fields" : [ { "name" : "Risk Level" , "values" : [ "No Risk" ] }, { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 13:50:58" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] }, { "name" : "Form Type" , "values" : [ "Traffic Change" ] }, { "name" : "Risks Number" , "values" : [ "0" ] }, { "name" : "Initial Plan status" , "values" : [ "Result OK" ] }, { "name" : "Workflow" , "values" : [ "Basic" ] }, { "name" : "Subject" , "values" : [ "1" ] }, { "name" : "status" , "values" : [ "open" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If found results (is success=true): "Status of the change request with ID {id} was updated to status: {status}.
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result Type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Successfully connected to the AlgoSec server with the provided connection parameters!" The action should fail and stop a playbook execution: If not successful: "Failed to connect to the AlgoSec server!

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- The AlienVault USM Anywhere Connector has two parameters, allowing smart filtering of the alerts being ingested into Google SecOps, regarding the suppressed attribute that those alerts have: Use Suppressed Filter : This parameter determines whether to filter the incoming alerts using the Show Suppressed filter or not.
- Valid value: high/medium/low Use Suppressed Filter Checkbox Unchecked No This parameter will be used to determine whether to filter the incoming alerts using the Show Suppressed filter or not.

