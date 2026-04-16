---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.996Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Network contexts"
feature_slug: "network-contexts"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/about-url-filtering"
  - "https://docs.cloud.google.com/firewall/docs/about-security-profiles"
  - "https://docs.cloud.google.com/firewall/docs/reference/network-security/rest"
  - "https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles"
keywords:
  - "network"
  - "contexts"
  - "help"
  - "meet"
  - "security"
  - "goals"
  - "using"
  - "fewer"
---

# Network contexts

Product: Cloud NGFW
Coverage: MEDIUM

## Step 02 Summary

Network contexts help meet security goals using fewer firewall policy rules more efficiently; Network contexts help meet security goals using fewer firewall policy rules more efficiently.

## Extended Definition

Network contexts help meet security goals using fewer firewall policy rules more efficiently; Network contexts help meet security goals using fewer firewall policy rules more efficiently.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles)
- [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest)
- [https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles)

## Supporting Pages

### "URL filtering service overview \_|\_ Cloud Next Generation Firewall \_|\_\

- URL: [https://docs.cloud.google.com/firewall/docs/about-url-filtering](https://docs.cloud.google.com/firewall/docs/about-url-filtering)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of using the URL filtering service The URL filtering service helps you reduce required maintenance that is caused by frequently changing IP addresses, by DNS changes, and by other time-consuming IP address-based firewall changes.
- A firewall policy rule references a security profile group to enable either the URL filtering service or the intrusion detection and prevention service, or both, for the network traffic.
- You can build on any segmentation that you have set up by using tags in your network, and enhance the traffic inspection logic to include the URL filtering service.
- To restrict the firewall rule to match internet-bound traffic, use network contexts set to INTERNET .

### "Security profile overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\

- URL: [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View details about the security profile in an organization Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) View all of the security profiles in an organization Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Compute Network Viewer ( roles/compute.networkViewer ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) Use a security profile in a security profile group Any of the following roles for the organization: Compute Network Admin ( roles/compute.networkAdmin ) Compute Network User ( roles/compute.networkUser ) Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) Quotas To view quotas associated with security profiles, see Quotas and limits .
- Identity and Access Management roles Identity and Access Management (IAM) roles govern the following security profiles actions: Creating a security profile in an organization Modifying or deleting a security profile Viewing details of a security profile Viewing a list of security profiles in an organization Using a security profile in a security profile group The following table describes the roles that are necessary for each step.
- Ability Necessary role Create a security profile Compute Network Admin ( roles/compute.networkAdmin ) and Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) roles on the organization where the security profile is created.
- Modify a security profile Compute Network Admin ( roles/compute.networkAdmin ) and Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) roles on the organization where the security profile is created.

### "Network Security API \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://networksecurity.googleapis.com REST Resource: v1beta1.organizations.locations.addressGroups Methods addItems POST /v1beta1/{addressGroup=organizations/ /locations/ /addressGroups/ }:addItems Adds items to an address group. cloneItems POST /v1beta1/{addressGroup=organizations/ /locations/ /addressGroups/ }:cloneItems Clones items from one address group to another. create POST /v1beta1/{parent=organizations/ /locations/ }/addressGroups Creates a new address group in a given project and location. delete DELETE /v1beta1/{name=organizations/ /locations/ /addressGroups/ } Deletes an address group. get GET /v1beta1/{name=organizations/ /locations/ /addressGroups/ } Gets details of a single address group. list GET /v1beta1/{parent=organizations/ /locations/ }/addressGroups Lists address groups in a given project and location. listReferences GET /v1beta1/{addressGroup=organizations/ /locations/ /addressGroups/ }:listReferences Lists references of an address group. patch PATCH /v1beta1/{addressGroup.name=organizations/ /locations/ /addressGroups/ } Updates parameters of an address group. removeItems POST /v1beta1/{addressGroup=organizations/ /locations/ /addressGroups/ }:removeItems Removes items from an address group.
- This service provides the following discovery documents: https://networksecurity.googleapis.com/$discovery/rest?version=v1 https://networksecurity.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Networking Cloud NGFW Reference Send feedback Network Security API Stay organized with collections Save and categorize content based on your preferences.
- Service: networksecurity.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### "Create and manage URL filtering security profiles \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles](https://docs.cloud.google.com/firewall/docs/configure-urlf-security-profiles)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create the URL filtering security profile, run the gcloud network-security security-profiles import command : gcloud network-security security-profiles import NAME \ --location LOCATION \ --source FILE NAME \ --organization ORGANIZATION ID Alternatively, you can create a URL filtering security profile without a YAML file by using the gcloud network-security security-profiles url-filtering create command : gcloud network-security security-profiles url-filtering create NAME \ --location LOCATION \ --organization ORGANIZATION ID \ --description DESCRIPTION Replace the following: NAME : the name of the URL filtering security profile; you can specify the name as a string or as a unique URL identifier.
- Permissions networksecurity.securityProfiles.create networksecurity.securityProfiles.update (required only if a profile with the same name already exists) Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To import a URL filtering security profile from a YAML file, use the gcloud network-security security-profiles import command : gcloud network-security security-profiles import NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --source FILE NAME Replace the following: NAME : the name of the security profile of type url-filtering that you want to import; you can specify the name as a string or as a unique URL identifier.
- Permissions networksecurity.securityProfiles.describe Roles Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) gcloud To export a URL filtering security profile to a YAML file, use the gcloud network-security security-profiles export command : gcloud network-security security-profiles export NAME \ --organization ORGANIZATION ID \ --location LOCATION \ --destination FILE NAME Replace the following: NAME : the name of the security profile of type url-filtering that you want to export; you can specify the name as a string or as a unique URL identifier.
- Click a security profile of type URL filtering to view the profile details. gcloud To view the details of a URL filtering security profile, use the gcloud network-security security-profiles url-filtering describe command : gcloud network-security security-profiles url-filtering describe NAME \ --organization ORGANIZATION ID \ --location LOCATION \ Replace the following: NAME : the name of the security profile of type url-filtering that you want to describe; you can specify the name as a string or as a unique URL identifier.

