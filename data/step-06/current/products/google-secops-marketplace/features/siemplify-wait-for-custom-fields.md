---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.684Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Siemplify Wait For Custom Fields"
feature_slug: "siemplify-wait-for-custom-fields"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "siemplify"
  - "wait"
  - "for"
  - "custom"
  - "fields"
  - "adds"
  - "an"
  - "action"
---

# Siemplify Wait For Custom Fields

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action to wait for custom fields in Siemplify.

## Extended Definition

Adds an action to wait for custom fields in Siemplify.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- Response example { "forwarders": [ { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder 1", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" }, { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde57", "displayName": "chronicle forwarder 2", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" } ] } Update Forwarder You can update a forwarder by using the updateMask URL query parameter to specify the fields to update.
- Request example DELETE https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56 Response example If the operation is successful, Delete Collector returns an empty response with an HTTP status code 200 (OK). {} Collector configuration fields The following fields can be provided in the config object of the request body.
- Response fields In addition to the fields specified in the request and the fields for which default values are applied, the response includes the following fields: Field Type Description name string The resource ID of the collector.

### "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin<user@siemplify.co>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported and if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to allow traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result Option 1 { "status" : "Success" , "messages" : [], "data" : { "id" : 10 , "fields" : [ { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "Due" , "values" : [ "2021-08-31 00:00:00" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 12:31:23" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "ALL" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.3" } ] }, "service" : { "items" : [ { "value" : "tcp/ " }, { "value" : "udp/ " }, { "value" : "ospf" }, { "value" : "icmp/ " }, { "value" : "gre" }, { "value" : "ipsec 50" }, { "value" : "ipsec 51" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Block" } ] } } Option 2 { "status" : "Success" , "messages" : [], "data" : { "changeRequestId" : 37 , "redirectUrl" : "https://192.0.2.120/FireFlow/Ticket/Display.html?id=37" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If the 200 status code is reported even if for second request the 404 status code is reported (is success=true): "Successfully created a traffic change request to block traffic to the provided entities in AlgoSec.".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "status" : "Success" , "messages" : [], "data" : { "id" : 6 , "subChangeRequests" : [ 12 ], "fields" : [ { "name" : "Risk Level" , "values" : [ "No Risk" ] }, { "name" : "Owner" , "values" : [ "admin@example.com>" ] }, { "name" : "Creator" , "values" : [ "admin@example.com>" ] }, { "name" : "LastUpdated" , "values" : [ "2021-08-13 13:50:58" ] }, { "name" : "Requestor" , "values" : [ "admin@example.com>" ] }, { "name" : "Form Type" , "values" : [ "Traffic Change" ] }, { "name" : "Risks Number" , "values" : [ "0" ] }, { "name" : "Initial Plan status" , "values" : [ "Result OK" ] }, { "name" : "Workflow" , "values" : [ "Basic" ] }, { "name" : "Subject" , "values" : [ "1" ] }, { "name" : "status" , "values" : [ "open" ] } ], "originalTraffic" : [ { "source" : { "items" : [ { "value" : "all" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ], "plannedTraffic" : [ { "source" : { "items" : [ { "value" : "0.0.0.0-255.255.255.255" } ] }, "destination" : { "items" : [ { "value" : "192.0.2.2" } ] }, "service" : { "items" : [ { "value" : "tcp/80" } ] }, "application" : { "items" : [ { "value" : "any" } ] }, "user" : { "items" : [ { "value" : "any" } ] }, "action" : "Allow" } ] } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If found results (is success=true): "Status of the change request with ID {id} was updated to status: {status}.
- How to work with the Custom Fields parameter The Custom Fields parameter requires the following structure: [ { "name" : "name of the field" , "values" : [ "value" ] }, { "name" : "name of the field" , "values" : [ "value" ] }, ] Parameters Parameter name Type Default value Is mandatory Description Template String Standard Yes Specify the template for the change request.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using the old path and are applying the upgrade, then you need to change the permission back to the scripting user with the following steps: Before starting the upgrade, stop the NFS server service: systemctl stop nfs-server After the upgrade is complete, change the folder permissions: chmod -R 755 /opt/siemplify/Correlations/ chown -R scripting:scripting/opt/siemplify/Correlations/ systemctl start nfs-server exportfs -a To confirm that the NFS server is working correctly after the changes, check its status: systemctl status nfs-server Create and configure a user for API access Sign in to the ArcSight console.
- Action results Script result Script result name Value options Example success True or False success:False JSON result [ { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" }, { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" } ] Connectors For detailed instructions on how to configure a connector in Google SecOps, see Configuring the connector .
- Connector severity prioritization The connector assigns severity with the following prioritization values: 1 and 2 - very low 3 and 4 - low 5 and 6 - medium 7 and 8 - high 9 and 10 - critical Connector inputs Use the following parameters to configure the connector: Parameter name Type Default value Is mandatory Description Environment DDL N/A Yes Select the required environment, for example, Customer One .
- Note for the customers who use the old path The hotfix installer overwrites the /opt/siemplify/Correlations folder permission to siemplifyadmin .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.
- Enable authentication by specifying the API key and secret key as part of the custom header in the following format: X-goog-api-key = API KEY X-Webhook-Access-Key = SECRET We recommend that you specify the API key as a header instead of specifying it in the URL.
- If your webhook client doesn't support custom headers, you can specify the API key and secret key by using query parameters in the following format: ENDPOINT URL ?key= API KEY &secret= SECRET Replace the following: ENDPOINT URL : the feed endpoint URL.
- Based on the Cloud Storage configuration that you created, specify values for the following fields: Storage bucket URI Note: Use a wildcard to match an entire directory name.

