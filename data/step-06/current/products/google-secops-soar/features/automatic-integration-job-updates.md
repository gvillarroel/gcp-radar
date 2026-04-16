---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.825Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Automatic integration job updates"
feature_slug: "automatic-integration-job-updates"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance"
keywords:
  - "automatic"
  - "integration"
  - "job"
  - "updates"
  - "automatically"
  - "jobs"
  - "when"
  - "an"
---

# Automatic integration job updates

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Automatically updates jobs when an integration is updated.

## Extended Definition

Automatically updates jobs when an integration is updated.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- Whenever the user presses the Test button inside the integration configuration, it should show an accurate status of the connectivity.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".
- Verify SSL Checkbox Unchecked Yes If selected, the integration validates the SSL certificate when connecting to the Anomali ThreatStream server.
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Web Root String https://siemplify.threatstream.com Yes Web Root of the Anomali ThreatStream instance.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify SSL Checkbox Unchecked No If selected, the integration validates the SSL certificate when connecting to the LevelBlue USM Anywhere server.
- Use SSL Checkbox Checked No If selected, the integration validates the SSL certificate when connecting to the LevelBlue USM Anywhere server.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.

### "Integrate LevelBlue USM Appliance with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply model Returns if it exists in JSON result descr Returns if it exists in JSON result hostname Returns if it exists in JSON result asset type Returns if it exists in JSON result fqdn Returns if it exists in JSON result devices Returns if it exists in JSON result asset value Returns if it exists in JSON result ips Returns if it exists in JSON result id Returns if it exists in JSON result sensors Returns if it exists in JSON result os Returns if it exists in JSON result networks Returns if it exists in JSON result icon Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : { "model" : null , "descr" : " " , "hostname" : "Hostname" , "asset type" : "Internal" , "fqdn" : " " , "devices" : [], "asset value" : "2" , "ips" : { "3.3.3.3" : { "ip" : "192.0.2.1" , "mac" : "01:23:45:AB:CD:EF" }}, "id" : "123D37D595B800734550B9D9D6A958C6" , "sensors" : { "C221234962EA11E697DE0AF71A09DF3B" : { "ip" : "192.0.2.1" , "ctxs" : { "C228355962EA11E697DE0AF71A09DF3B" : "AlienVault" }, "name" : "DA" }}, "os" : "Linux" , "networks" : { "7E4B12EEFD06A21F898345C2AB46EB10" : { "ips" : "192.0.2.1/24" , "ctx" : "C228355962EA11E697DE0AF71A09DF3B" , "name" : "Pvt 000" }}, "icon" : " " }, "Entity" : "example.com" } ] Enrich Vulnerabilities Retrieve vulnerability information from the LevelBlue USM Appliance.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply AlientVault Severity Returns if it exists in JSON result AlientVault Service Returns if it exists in JSON result AlientVault Vulnerability Returns if it exists in JSON result AlientVault Scan Time Returns if it exists in JSON result AlientVault Asset Returns if it exists in JSON result AlientVault Id Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : [{ "Severity" : "High" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP Sequence Number Approximation Reset Denial of Service Vulnerability" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123456" }, { "Severity" : "High" , "Service" : "https (443/tcp)" , "Vulnerability" : "robot(s).txt exists on the Web Server" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123457" }, { "Severity" : "Medium" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP timestamps" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123458" }], "Entity" : "test" } ] Fetch Last PCAP Files Fetch last PCAP files from AlienVault.
- Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Instance Name String N/A No Name of the Instance you intend to configure integration for.
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.

