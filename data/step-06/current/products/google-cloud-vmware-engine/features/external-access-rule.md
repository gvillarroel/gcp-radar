---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.680Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "External access rule"
feature_slug: "external-access-rule"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules"
keywords:
  - "external"
  - "access"
  - "rule"
  - "rules"
  - "available"
  - "through"
  - "asset"
  - "inventory"
---

# External access rule

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

External access rules are available through Cloud Asset Inventory and Cloud Asset APIs.

## Extended Definition

External access rules are available through Cloud Asset Inventory and Cloud Asset APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)

## Supporting Pages

### "Class ListExternalAccessRulesAsyncPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the aiter method will make additional ListExternalAccessRules requests and continue to iterate through the external access rules field on the corresponding responses.
- This class thinly wraps an initial ListExternalAccessRulesResponse object, and provides an aiter method to iterate through its external access rules field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list external access rules requests.
- All the usual ListExternalAccessRulesResponse attributes are available on the pager.

### "Class ListExternalAccessRulesPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager)
- Source ID: `site-python-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the iter method will make additional ListExternalAccessRules requests and continue to iterate through the external access rules field on the corresponding responses.
- This class thinly wraps an initial ListExternalAccessRulesResponse object, and provides an iter method to iterate through its external access rules field.
- Union [ str , bytes ]]] = () ) A pager for iterating through list external access rules requests.
- All the usual ListExternalAccessRulesResponse attributes are available on the pager.

### "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to External access rules Click the More more vert icon at the end of a row and select Edit . gcloud To edit an external access rule using the Google Cloud CLI, use the gcloud vmware network-policies update command : gcloud vmware network-policies external-access-rules update RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION \ --action= ACTION \ --ip-protocol UDP \ --priority 999 Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To edit an external access rule using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME ?update mask=action,ip protocol,priority" '{ "action": " ACTION ", "ip protocol": "udp", "priority": 999 }' Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- Go to External access rules Click the Delete delete icon at the end of a row and select Delete . gcloud To delete an external access rule using the Google Cloud CLI, use˜ the gcloud vmware network-policies external-access-rules delete command : gcloud vmware network-policies external-access-rules delete RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To delete an external access rule using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME " Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule Firewall rule properties Firewall rules have the following properties: Rule name A name that uniquely identifies the firewall rule and its purpose.
- API To create an external access rule using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME -network-policy/externalAccessRules?external access rule id= RULE NAME " '{ "priority": 1000, "action": " ACTION ", "ip protocol": "tcp", "destination ip ranges": [{"ip address range": "0.0.0.0/0"}], "destination ports": ["22"], "source ip ranges": [{"ip address range": "34.148.30.114/32"}], "source ports": ["22", "10000-11000"] }' Replace the following: PROJECT ID : the project for this request REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- Click Create to add the new firewall rule to the list of firewall rules in your project. gcloud Create an external access rule using the Google Cloud CLI by entering the gcloud vmware network-policies create command : gcloud vmware network-policies external-access-rules create RULE NAME \ --location= REGION \ --network-policy= NETWORK POLICY NAME \ --priority=1000 \ --ip-protocol=TCP \ --destination-ranges=0.0.0.0/0 \ --source-ports=22,10000-11000 \ --destination-ports=22 \ --action= ACTION Replace the following: RULE NAME : the name for this rule REGION : the region for this request NETWORK POLICY NAME : the network policy for this request ACTION : the action to take, such as ACCESS or DENY .

