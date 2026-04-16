---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.689Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "External access rules"
feature_slug: "external-access-rules"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager"
keywords:
  - "external"
  - "access"
  - "rules"
  - "let"
  - "you"
  - "control"
  - "ip"
  - "addresses"
---

# External access rules

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

External access rules let you control access to external IP addresses, including multiple external IP addresses within a single rule.

## Extended Definition

External access rules let you control access to external IP addresses, including multiple external IP addresses within a single rule.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager)

## Supporting Pages

### "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage external access rules Google Cloud VMware Engine uses firewall rules to control access to external IP addresses.
- Go to External access rules Click the More more vert icon at the end of a row and select Edit . gcloud To edit an external access rule using the Google Cloud CLI, use the gcloud vmware network-policies update command : gcloud vmware network-policies external-access-rules update RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION \ --action= ACTION \ --ip-protocol UDP \ --priority 999 Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To edit an external access rule using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME ?update mask=action,ip protocol,priority" '{ "action": " ACTION ", "ip protocol": "udp", "priority": 999 }' Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- Go to External access rules Click the Delete delete icon at the end of a row and select Delete . gcloud To delete an external access rule using the Google Cloud CLI, use˜ the gcloud vmware network-policies external-access-rules delete command : gcloud vmware network-policies external-access-rules delete RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To delete an external access rule using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME " Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule Firewall rule properties Firewall rules have the following properties: Rule name A name that uniquely identifies the firewall rule and its purpose.
- API To create an external access rule using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME -network-policy/externalAccessRules?external access rule id= RULE NAME " '{ "priority": 1000, "action": " ACTION ", "ip protocol": "tcp", "destination ip ranges": [{"ip address range": "0.0.0.0/0"}], "destination ports": ["22"], "source ip ranges": [{"ip address range": "34.148.30.114/32"}], "source ports": ["22", "10000-11000"] }' Replace the following: PROJECT ID : the project for this request REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .

### "Class ListExternalAccessRulesAsyncPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.vmwareengine v1.types.ListExternalAccessRulesRequest The initial request object. response google.cloud.vmwareengine v1.types.ListExternalAccessRulesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListExternalAccessRulesAsyncPager (1.11.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListExternalAccessRules requests and continue to iterate through the external access rules field on the corresponding responses.
- This class thinly wraps an initial ListExternalAccessRulesResponse object, and provides an aiter method to iterate through its external access rules field.

### "Class ListExternalAccessRulesPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.vmwareengine v1.types.ListExternalAccessRulesRequest The initial request object. response google.cloud.vmwareengine v1.types.ListExternalAccessRulesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListExternalAccessRulesPager (1.11.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListExternalAccessRules requests and continue to iterate through the external access rules field on the corresponding responses.
- This class thinly wraps an initial ListExternalAccessRulesResponse object, and provides an iter method to iterate through its external access rules field.

