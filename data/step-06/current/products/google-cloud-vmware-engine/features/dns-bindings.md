---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.687Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "DNS bindings"
feature_slug: "dns-bindings"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsPager"
keywords:
  - "dns"
  - "bindings"
  - "provide"
  - "bidirectional"
  - "integration"
  - "so"
  - "administrators"
  - "can"
---

# DNS bindings

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

DNS bindings provide bidirectional Cloud DNS integration so Cloud DNS administrators can bind VMware Engine networks like other VPCs.

## Extended Definition

DNS bindings provide bidirectional Cloud DNS integration so Cloud DNS administrators can bind VMware Engine networks like other VPCs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsPager)

## Supporting Pages

### "Configure DNS bindings \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Locate the VMware Engine Network, click the Action option and select Copy Intranet VPC network URL . gcloud gcloud vmware networks describe VMWARE ENGINE NETWORK \ --project= PROJECT ID Replace the following: VMWARE ENGINE NETWORK : the network to describe PROJECT ID : the project ID for this request API Make a GET request to the vmwareEngineNetworks resource and provide the name of the network: curl -X GET -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/vmwarenEngineNetworks/ NETWORK ID Replace the following: PROJECT ID : the project for this request NETWORK ID : the network to describe Binding The intended workflow, once bind permissions are configured, is to add a DNS peering to the VMware Engine network intranet VPC into your standard Cloud DNS zone management process for each zone. gcloud gcloud dns managed-zones create peering- DOMAIN \ --dns-name=" DOMAIN " \ --visibility="private" \ --networks=" INTRANET VPC URL " \ --target-project=" PROJECT ID " \ --target-network=" EXISTING VPC " \ --description=" DESCRIPTION " Replace the following: DOMAIN : the domain to extended, example zone1.example.com INTRANET VPC URL : the intranet VPC URL for the VMware Engine network EXISTING VPC : the URL of the existing VPC network that the DOMAIN is already bound to PROJECT ID : the project ID for this request API Make a PATCH request to the managedZones resource and provide the name of the zone: curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://dns.googleapis.com/v1/projects/ PROJECT ID /managedZones -d "{ "name": "peering- DOMAIN ", "description": "", "dnsName": DOMAIN , "peeringConfig": { "targetNetwork": { "networkUrl": EXISTING VPC } }, "privateVisibilityConfig": { "networks": [ { "networkUrl": INTRANET VPC URL } ] } }" Replace the following: PROJECT ID : the project ID for this request DOMAIN : the domain to extended, example zone1.example.com INTRANET VPC URL : the intranet VPC URL for the VMware Engine network.
- Revoke DNS Bind Permission Revokes the DNS Bind Permission that was previously granted to the user. gcloud gcloud vmware dns-bind-permission revoke \ --user= USER \ --project= PROJECT ID Replace the following: USER : the email of the user for whom you want to revoke permissions; for example, example1@gmail.com PROJECT ID : the project ID for this request API Make a POST request to dnsBindPermissions:revoke and provide the user email address in the request body. curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/dnsBindPermission:revoke -d ' { "principal": { "user": " USER " } }' Replace the following: PROJECT ID : the project for this request.
- To do so, you need to: Get the IP address of the Private Cloud's DNS server Set up DNS bind permissions to allow a user principal to bind to the intranet VPC Configure DNS for your VMware workloads or NSX segment DHCP DNS setting Before you begin You can only configure DNS bindings using the gcloud tool or the API. gcloud and API requirements To use the gcloud command line tool or the API to manage your VMware Engine resources, we recommend configuring the tools as described below. gcloud Set your default project ID: gcloud config set project PROJECT ID Set a default region and zone: gcloud config set compute/region REGION gcloud config set compute/zone ZONE For more information on the gcloud vmware tool, see the Cloud SDK reference docs .
- API Make a POST request to dnsBindPermissions:grant method and provide the user email address in the request body. curl -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/dnsBindPermission:grant -d ' { "principal": { "user": " USER " } }' Replace the following: PROJECT ID : the project for this request.

### "Class ListManagementDnsZoneBindingsAsyncPager (1.11.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This class thinly wraps an initial ListManagementDnsZoneBindingsResponse object, and provides an aiter method to iterate through its management dns zone bindings field.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.vmwareengine v1.types.ListManagementDnsZoneBindingsRequest The initial request object. response google.cloud.vmwareengine v1.types.ListManagementDnsZoneBindingsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListManagementDnsZoneBindingsAsyncPager (1.11.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListManagementDnsZoneBindings requests and continue to iterate through the management dns zone bindings field on the corresponding responses.

### "Class ListManagementDnsZoneBindingsPager (1.11.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsPager](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsPager)
- Source ID: `site-python-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This class thinly wraps an initial ListManagementDnsZoneBindingsResponse object, and provides an iter method to iterate through its management dns zone bindings field.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.vmwareengine v1.types.ListManagementDnsZoneBindingsRequest The initial request object. response google.cloud.vmwareengine v1.types.ListManagementDnsZoneBindingsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListManagementDnsZoneBindingsPager (1.11.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListManagementDnsZoneBindings requests and continue to iterate through the management dns zone bindings field on the corresponding responses.

