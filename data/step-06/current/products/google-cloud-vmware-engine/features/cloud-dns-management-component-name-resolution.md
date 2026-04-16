---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.726Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Cloud DNS management component name resolution"
feature_slug: "cloud-dns-management-component-name-resolution"
latest_feature_date: "2021-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises"
keywords:
  - "dns"
  - "management"
  - "component"
  - "name"
  - "resolution"
  - "can"
  - "resolve"
  - "domain"
---

# Cloud DNS management component name resolution

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS can resolve management component domain names across multiple private clouds in the same or different regions.

## Extended Definition

Cloud DNS can resolve management component domain names across multiple private clouds in the same or different regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises)

## Supporting Pages

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. update external access rule update external access rule ( request : typing .
- This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. get external access rule get external access rule ( request : typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksAsyncPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- CreateManagementDnsZoneBindingRequest ( parent="parent value", management dns zone binding=management dns zone binding, management dns zone binding id="management dns zone binding id value", ) Make the request operation = client. create management dns zone binding (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.vmwareengine v1.types.CreateManagementDnsZoneBindingRequest , dict]] The request object.

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. update external access rule update external access rule ( request : typing .
- This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. get external access rule get external access rule ( request : typing .
- Returns Type Description google.cloud.vmwareengine v1.services.vmware engine.pagers.ListVmwareEngineNetworksPager Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically. logging server path logging server path ( project : str , location : str , private cloud : str , logging server : str ) - > str Returns a fully-qualified logging server string. management dns zone binding path management dns zone binding path ( project : str , location : str , private cloud : str , management dns zone binding : str ) - > str Returns a fully-qualified management dns zone binding string. network path network path ( project : str , network : str ) - > str Returns a fully-qualified network string. network peering path network peering path ( project : str , location : str , network peering : str ) - > str Returns a fully-qualified network peering string. network policy path network policy path ( project : str , location : str , network policy : str ) - > str Returns a fully-qualified network policy string. node path node path ( project : str , location : str , private cloud : str , cluster : str , node : str ) - > str Returns a fully-qualified node string. node type path node type path ( project : str , location : str , node type : str ) - > str Returns a fully-qualified node type string. parse cluster path parse cluster path ( path : str ) - > typing .
- CreateManagementDnsZoneBindingRequest ( parent="parent value", management dns zone binding=management dns zone binding, management dns zone binding id="management dns zone binding id value", ) Make the request operation = client. create management dns zone binding (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.vmwareengine v1.types.CreateManagementDnsZoneBindingRequest , dict] The request object.

### "Configuring on-premises DNS for management appliance access \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-dns-on-premises)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use one of the following options for the DNS configuration: Create a zone on the DNS server for gve.goog Create a conditional forwarder on your on-premises DNS server to resolve gve.goog Create a zone on the DNS server for gve.goog You can set up a zone as a stub zone and point to the DNS servers on the private cloud for name resolution.
- To do so, you must configure DNS address resolution so that management appliances can be addressed by their hostnames and IP addresses.
- Global address resolution using Cloud DNS VMware Engine lets you use a Cloud DNS zone in your project as a single DNS resolution endpoint for all connected management appliances in a peered Virtual Private Cloud (VPC) network.
- Address resolution without using Cloud DNS To resolve addresses without using Cloud DNS, get the IP address of your private cloud's DNS server and configure the DNS: In the Google Cloud console, go to the Private clouds page.

