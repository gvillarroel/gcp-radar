---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.675Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "External IP addresses"
feature_slug: "external-ip-addresses"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
keywords:
  - "external"
  - "ip"
  - "addresses"
  - "can"
  - "managed"
  - "terraform"
  - "resources"
---

# External IP addresses

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

External IP addresses can be managed with Terraform resources.

## Extended Definition

External IP addresses can be managed with Terraform resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)

## Supporting Pages

### "Reserve an external IP address \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-allocate-external-ip)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The newly reserved external IP address appears in the list of external IP addresses. gcloud To reserve an external IP address for an internal workload VM or management appliance, use the gcloud vmware private-clouds external-addresses create command : gcloud vmware private-clouds external-addresses create EXTERNAL ADDRESS NAME \ --internal-ip= IP ADDRESS \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: EXTERNAL ADDRESS NAME : the name for this external IP address IP ADDRESS : the internal IP address that this corresponds to, for example 192.168.1.11 , for this request PRIVATE CLOUD ID : the name for this private cloud ZONE : the zone for this request API To reserve an external IP address for an internal workload VM or management appliance using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /externalAddresses?EXTERNAL ADDRESS NAME= EXTERNAL ADDRESS NAME " '{ "internal ip": " IP ADDRESS " }' Replace the following: PROJECT ID : the project for this request ZONE : the zone for this request PRIVATE CLOUD ID : the name for this private cloud EXTERNAL ADDRESS NAME : the name for this external IP address IP ADDRESS : the internal IP address that this corresponds to, for example 192.168.1.11 , for this request Note: The external IP address doesn't need to exist when you allocate the external IP address.
- Click the More more vert icon at the end of a row and select Edit . gcloud If you want to edit an external IP addresses, use the gcloud vmware private-clouds external-addresses update command : gcloud vmware private-clouds external-addresses update EXTERNAL ADDRESS NAME \ --internal-ip= IP ADDRESS API If you want to edit an external address using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /externalAddresses/ EXTERNAL ADDRESS NAME ?update mask=internal ip" '{ "internal ip": " IP ADDRESS " }' Replace the following: PROJECT ID : the project for this request ZONE : the zone for this request PRIVATE CLOUD ID : the name for this private cloud EXTERNAL ADDRESS NAME : the name of the external IP for this request IP ADDRESS : the IP address, for example 192.168.1.11 , for this request Delete an external address To delete an external address using the Google Cloud console, Google Cloud CLI or VMware Engine API, do the following: Console To delete an external address using the Google Cloud console, do the following: In the Google Cloud console, go to the External IP addresses page.
- Click the Delete delete icon at the end of a row and select Delete . gcloud To delete an external address using the Google Cloud console, use the gcloud vmware private-clouds external-addresses delete command : gcloud vmware private-clouds external-addresses delete EXTERNAL ADDRESS NAME \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: EXTERNAL ADDRESS NAME : the external IP address ID for this request PRIVATE CLOUD ID : the name for this private cloud ZONE : the zone for this request API To delete an external addresses using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /externalAddresses/ EXTERNAL IP ADDRESS " Replace the following: PROJECT ID : the project for this request ZONE : the zone for this request PRIVATE CLOUD ID : the name for this private cloud EXTERNAL ADDRESS NAME : the name of the external IP for this request Outbound traffic configuration Outbound traffic from the external IP address is allowed.
- Go to External IP addresses gcloud If you want to list all external IP addresses, use the gcloud vmware private-clouds external-addresses list command : gcloud vmware private-clouds external-addresses list \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: PRIVATE CLOUD ID : the name for this private cloud ZONE : the zone for this request API If you want to list all external IP addresses using the VMware Engine API, make a GET request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /externalAddresses" Replace the following: PROJECT ID : the project for this request ZONE : the zone for this request PRIVATE CLOUD ID : the name for this private cloud Edit an external address You can only edit the description and the internal IP attached to an existing external IP resource.

### "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules](https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage external access rules Google Cloud VMware Engine uses firewall rules to control access to external IP addresses.
- Values can be IP addresses or all External IP addresses that have been allocated.
- Go to External access rules Click the More more vert icon at the end of a row and select Edit . gcloud To edit an external access rule using the Google Cloud CLI, use the gcloud vmware network-policies update command : gcloud vmware network-policies external-access-rules update RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION \ --action= ACTION \ --ip-protocol UDP \ --priority 999 Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To edit an external access rule using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME ?update mask=action,ip protocol,priority" '{ "action": " ACTION ", "ip protocol": "udp", "priority": 999 }' Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule ACTION : the action to take, such as ACCESS or DENY .
- Go to External access rules Click the Delete delete icon at the end of a row and select Delete . gcloud To delete an external access rule using the Google Cloud CLI, use˜ the gcloud vmware network-policies external-access-rules delete command : gcloud vmware network-policies external-access-rules delete RULE NAME \ --network-policy= NETWORK POLICY NAME \ --location= REGION Replace the following: RULE NAME : the name for this rule NETWORK POLICY NAME : the network policy for this request REGION : the region for this request API To delete an external access rule using the VMware Engine API, make a DELETE request: DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /networkPolicies/ NETWORK POLICY NAME /externalAccessRules/ RULE NAME " Replace the following: PROJECT ID : the ID for this project REGION : the region for this request NETWORK POLICY NAME : the network policy for this request RULE NAME : the name for this rule Firewall rule properties Firewall rules have the following properties: Rule name A name that uniquely identifies the firewall rule and its purpose.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } dns bind permission path dns bind permission path ( project : str , location : str ) - > str Returns a fully-qualified dns bind permission string. dns forwarding path dns forwarding path ( project : str , location : str , private cloud : str ) - > str Returns a fully-qualified dns forwarding string. external access rule path external access rule path ( project : str , location : str , network policy : str , external access rule : str ) - > str Returns a fully-qualified external access rule string. external address path external address path ( project : str , location : str , private cloud : str , external address : str ) - > str Returns a fully-qualified external address string. fetch network policy external addresses fetch network policy external addresses ( request : typing .
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses Iterating over this object will yield results and resolve additional pages automatically. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

