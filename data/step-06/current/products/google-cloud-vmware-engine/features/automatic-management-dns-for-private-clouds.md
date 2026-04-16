---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.685Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Automatic management DNS for private clouds"
feature_slug: "automatic-management-dns-for-private-clouds"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
keywords:
  - "automatic"
  - "management"
  - "dns"
  - "private"
  - "clouds"
  - "bindings"
  - "zone"
  - "can"
---

# Automatic management DNS for private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

DNS bindings for the private cloud management zone can be viewed and managed.

## Extended Definition

DNS bindings for the private cloud management zone can be viewed and managed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)

## Supporting Pages

### "Configure Management DNS for private clouds \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-private-cloud-management-dns)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a new private cloud management DNS zone binding by binding a VPC or a VMware Engine network using the Google Cloud CLI or VMware Engine API, do the following: gcloud To bind a VPC using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vpc-network=projects/ VPC PROJECT ID /global/networks/ VPC NETWORK To bind a VMware Engine network, use the gcloud vmware private-clouds management-dns-zone-bindings create command : gcloud vmware private-clouds management-dns-zone-bindings create DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --vmware-engine-network=projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ NETWORK ID Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID.
- API To bind a VPC using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vpc network": "projects/ VPC PROJECT ID /global/networks/ VPC NETWORK " }' To bind a VMware Engine network using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /managementDnsZoneBindings?management dns zone binding id= DNS ZONE BINDING ID " -d '{ "vmware engine network" : " NETWORK ID " }' Replace the following: PROJECT ID : the project for your private cloud.
- Edit management DNS zone binding You can edit a management DNS zone binding description using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to edit the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings update command : gcloud vmware private-clouds management-dns-zone-bindings update DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE \ --description=" DESCRIPTION " Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.
- Describe management DNS zone binding You can get the description of a management DNS zone binding to verify updates using the Google Cloud CLI or VMware Engine API by doing the following: gcloud If you want to get the description of a management DNS zone binding using the Google Cloud CLI, use the gcloud vmware private-clouds management-dns-zone-bindings describe command : gcloud vmware private-clouds management-dns-zone-bindings describe DNS ZONE BINDING ID \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: DNS ZONE BINDING ID : the DNS zone binding ID for this request.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksAsyncPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .

