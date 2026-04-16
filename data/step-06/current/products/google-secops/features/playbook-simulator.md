---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.776Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook Simulator"
feature_slug: "playbook-simulator"
latest_feature_date: "2025-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis"
keywords:
  - "playbook"
  - "simulator"
  - "can"
  - "visualize"
  - "debug"
  - "playbooks"
  - "contain"
  - "loops"
---

# Playbook Simulator

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Playbook Simulator can visualize and debug playbooks that contain loops, with updated step ordering and auto-scrolling to recent activity.

## Extended Definition

Playbook Simulator can visualize and debug playbooks that contain loops, with updated step ordering and auto-scrolling to recent activity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the Playbooks page and how to collaborate with it, see the following: Define custom alert views from Playbook Designer Work with the Playbook Simulator Understand playbook monitoring Use the Playbook Navigator Playbook icons legend The following icons appear on the Cases > Playbooks tab when a playbook is attached.
- Filter : Click filter alt Filter and filter the display based on the following criteria: Playbook simulator is on toggle Show Active Playbooks toggle Priority : Set the attachment order of playbooks for the alert.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.

### "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you configure an integration instance, you can use it in playbooks.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin<user@siemplify.co>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported and if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to allow traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Block" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported even if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to block traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "status" : "Success" , "messages" : [], "data" : { "id" : 6 , "subChangeRequests" : [ 12 ], "fields" : [ { "name" : "Risk Level" , "values" : [ "No Risk" ] }, { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 13:50:58" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] }, { "name" : "Form Type" , "values" : [ "Traffic Change" ] }, { "name" : "Risks Number" , "values" : [ "0" ] }, { "name" : "Initial Plan status" , "values" : [ "Result OK" ] }, { "name" : "Workflow" , "values" : [ "Basic" ] }, { "name" : "Subject" , "values" : [ "1" ] }, { "name" : "status" , "values" : [ "open" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If found results (is success=true): "Status of the change request with ID {id} was updated to status: {status}.

### "Integrate Armis with Google SecOps \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- After you configure an integration instance, you can use it in playbooks.
- Run on This action runs on the following entities: IP Address Mac Address Action results Script result Script result name Value options Example is success True/False is success:False JSON result { "accessSwitch" : null , "category" : "Computers" , "dataSources" : [ { "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "lastSeen" : "2021-03-07T04:04:22.562873+00:00" , "name" : "Example" , "types" : [ "Asset & System Management" , "Virtualization" ] }, { "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "lastSeen" : "2021-03-07T04:04:22.562873+00:00" , "name" : "Armis Smart Scanner" , "types" : [ "Vulnerability Management" ] } ], "firstSeen" : "2021-03-07T04:04:22.562873+00:00" , "id" : 1616 , "ipAddress" : "192.0.2.120" , "ipv6" : null , "lastSeen" : "2021-03-21T08:05:40.244960+00:00" , "macAddress" : "01:23:45:ab:cd:ef" , "manufacturer" : "VMware" , "model" : "VMware Virtual Platform" , "name" : "Example" , "operatingSystem" : "CentOS" , "operatingSystemVersion" : "6.6" , "purdueLevel" : 4.0 , "riskLevel" : 5 , "sensor" : { "name" : "North conference room" , "type" : "Physical Sensor" }, "site" : { "location" : "Palo Alto" , "name" : "Palo Alto Offices" }, "tags" : [ "Discover" , "Example" ], "type" : "Virtual Machines" , "user" : "" , "visibility" : "Full" } Entity enrichment Enrichment field name Logic - When to apply category When available in JSON id When available in JSON ipAddress When available in JSON macAddress When available in JSON name When available in JSON os When available in JSON purdue level When available in JSON risk level When available in JSON tags When available in JSON type When available in JSON user When available in JSON visibility When available in JSON site When available in JSON link When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if enriched some(is success = true): "Successfully enriched the following entities using Armis:\n".format(entity.identifier) If didn't enrich some (is success = true): "Action wasn't able to enriche the following entities using Armis:\n".format(entity.identifier) If didn't enrich all (is success = false): "No entities were enriched".
- Action results Script result Script result name Value options Example is success True/False is success:False JSON result { "band" : null , "channel" : null , "dhcpAuthenticationDuration" : null , "duration" : 12339 , "endTimestamp" : "2021-03-18T20:19:31.562873+00:00" , "id" : 33355 , "inboundTraffic" : 12412512 , "outboundTraffic" : 19626489 , "protocol" : "Bluetooth" , "radiusAuthenticationDuration" : null , "risk" : "Medium" , "rssi" : null , "sensor" : { "name" : "EXAMPLE" , "type" : "Switch" }, "site" : { "location" : "Location" , "name" : "Location HQ" }, "snr" : null , "sourceId" : 2097 , "startTimestamp" : "2021-03-18T16:53:52.562873+00:00" , "targetId" : 217 , "title" : "Connection between Example and user's iPhone" , "totalAssociationDuration" : null , "traffic" : 32039001 , "wlanAssociationDuration" : null } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if 200 and data is available (is success = true): "Successfully returned connections related to the alert {alertId} based on the provided criteria in Armis." If 200 and no data is available (is success=false): "No connections were found related to the alert {alertId} based on the provided criteria in Armis." The action should fail and stop a playbook execution: if fatal error, like wrong credentials, no connection to server, other: "Error executing action "List Alert Connections".

