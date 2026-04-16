---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.454Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory private network access"
feature_slug: "service-directory-private-network-access"
latest_feature_date: "2022-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access"
  - "https://docs.cloud.google.com/service-directory/docs/private-network-access-overview"
  - "https://docs.cloud.google.com/service-directory/docs/access-control"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone"
keywords:
  - "directory"
  - "private"
  - "network"
  - "access"
  - "enables"
  - "supported"
  - "services"
  - "to"
---

# Service Directory private network access

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory Private Network Access enables supported Google Cloud services to connect directly to VPC networks; Service Directory now supports private network access.

## Extended Definition

Service Directory Private Network Access enables supported Google Cloud services to connect directly to VPC networks; Service Directory now supports private network access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- [https://docs.cloud.google.com/service-directory/docs/private-network-access-overview](https://docs.cloud.google.com/service-directory/docs/private-network-access-overview)
- [https://docs.cloud.google.com/service-directory/docs/access-control](https://docs.cloud.google.com/service-directory/docs/access-control)
- [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone)

## Supporting Pages

### "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- Source ID: `site-docs-root`
- Final score: 359
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you configure private network access, complete the following steps: For each project, in the Google Cloud console, on the APIs & Services page, click add Enable APIs and services to enable the APIs that you want to use, including the Service Directory API.
- Grant the following IAM roles to the service agent of the Google Cloud product that will call the endpoint: Service Directory Viewer role ( roles/servicedirectory.viewer ) in the Service Directory project Private Service Connect Authorized Service role ( roles/servicedirectory.pscAuthorizedService ) in the network project If you're using VPC Service Controls, the VPC Service Controls perimeter enables Service Directory to connect to both the Google Cloud service project and the Service Directory project.
- Permissions servicedirectory.services.resolve servicedirectory.networks.access servicedirectory.networks.attach Roles servicedirectory.editor servicedirectory.viewer servicedirectory.pscAuthorizedService servicedirectory.networkAttacher Note: Grant the IAM roles to per-product per-project service accounts.
- Create an endpoint with private network access Note: If the principal performing this operation does not already have broad permissions in the network project, then grant it the Service Directory Network Attacher role ( roles/servicedirectory.networkAttacher ) there.

### "Private network access overview \_|\_ Service Directory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-directory/docs/private-network-access-overview](https://docs.cloud.google.com/service-directory/docs/private-network-access-overview)
- Source ID: `site-iam-reference`
- Final score: 357
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private network access enables supported Google Cloud products to send HTTP requests to a customer Virtual Private Cloud (VPC) network resource.
- Service Directory pricing applies for calls from Google Cloud services that use private network access.
- Home Documentation Distributed, hybrid, and multicloud Service Directory Guides Send feedback Private network access overview Stay organized with collections Save and categorize content based on your preferences.
- For information about how you can use Service Directory private network access with Dialogflow, see Using Service Directory for private network access .

### Roles and permissions \_|\_ Service Directory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/access-control](https://docs.cloud.google.com/service-directory/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- Roles Role Permissions Service Directory Admin ( roles/ servicedirectory.admin ) Full control of all Service Directory resources and permissions. resourcemanager.projects.get resourcemanager.projects.list servicedirectory.endpoints. servicedirectory. endpoints. create servicedirectory. endpoints. delete servicedirectory.endpoints.get servicedirectory. endpoints. getIamPolicy servicedirectory. endpoints. list servicedirectory. endpoints. setIamPolicy servicedirectory. endpoints. update servicedirectory.locations. servicedirectory.locations.get servicedirectory. locations. list servicedirectory.namespaces. servicedirectory. namespaces. associatePrivateZone servicedirectory. namespaces. create servicedirectory. namespaces. delete servicedirectory. namespaces. get servicedirectory. namespaces. getIamPolicy servicedirectory. namespaces. list servicedirectory. namespaces. setIamPolicy servicedirectory. namespaces. update servicedirectory. networks. attach servicedirectory.services. servicedirectory.services.bind servicedirectory. services. create servicedirectory. services. delete servicedirectory.services.get servicedirectory. services. getIamPolicy servicedirectory.services.list servicedirectory. services. resolve servicedirectory. services. setIamPolicy servicedirectory. services. update Service Directory Editor ( roles/ servicedirectory.editor ) Edit Service Directory resources. resourcemanager.projects.get resourcemanager.projects.list servicedirectory. endpoints. create servicedirectory. endpoints. delete servicedirectory.endpoints.get servicedirectory. endpoints. getIamPolicy servicedirectory. endpoints. list servicedirectory. endpoints. update servicedirectory.locations. servicedirectory.locations.get servicedirectory. locations. list servicedirectory. namespaces. associatePrivateZone servicedirectory. namespaces. create servicedirectory. namespaces. delete servicedirectory. namespaces. get servicedirectory. namespaces. getIamPolicy servicedirectory. namespaces. list servicedirectory. namespaces. update servicedirectory. networks. attach servicedirectory.services.bind servicedirectory. services. create servicedirectory. services. delete servicedirectory.services.get servicedirectory. services. getIamPolicy servicedirectory.services.list servicedirectory. services. resolve servicedirectory. services. update Service Directory Viewer ( roles/ servicedirectory.viewer ) View Service Directory resources. resourcemanager.projects.get resourcemanager.projects.list servicedirectory.endpoints.get servicedirectory. endpoints. getIamPolicy servicedirectory. endpoints. list servicedirectory.locations. servicedirectory.locations.get servicedirectory. locations. list servicedirectory. namespaces. get servicedirectory. namespaces. getIamPolicy servicedirectory. namespaces. list servicedirectory.services.get servicedirectory. services. getIamPolicy servicedirectory.services.list servicedirectory. services. resolve Service Directory Network Attacher ( roles/ servicedirectory.networkAttacher ) Gives access to attach VPC Networks to Service Directory Endpoints resourcemanager.projects.get resourcemanager.projects.list servicedirectory. networks. attach Private Service Connect Authorized Service ( roles/ servicedirectory.pscAuthorizedService ) Gives access to VPC Networks via Service Directory resourcemanager.projects.get resourcemanager.projects.list servicedirectory. networks. access Service agent roles Service agent roles should only be granted to service agents .
- Warning: Do not grant service agent roles to any principals except service agents . container.clusters.get gkehub.features.get gkehub.gateway.delete gkehub. gateway. generateCredentials gkehub.gateway.get gkehub.gateway.patch gkehub.gateway.post gkehub.gateway.put gkehub.locations. gkehub.locations.get gkehub.locations.list gkehub.memberships.get gkehub.memberships.list resourcemanager.projects.get resourcemanager.projects.list servicedirectory. endpoints. create servicedirectory. endpoints. delete servicedirectory.endpoints.get servicedirectory. endpoints. getIamPolicy servicedirectory. endpoints. list servicedirectory. endpoints. update servicedirectory.locations. servicedirectory.locations.get servicedirectory. locations. list servicedirectory. namespaces. associatePrivateZone servicedirectory. namespaces. create servicedirectory. namespaces. delete servicedirectory. namespaces. get servicedirectory. namespaces. getIamPolicy servicedirectory. namespaces. list servicedirectory. namespaces. update servicedirectory. networks. attach servicedirectory.services.bind servicedirectory. services. create servicedirectory. services. delete servicedirectory.services.get servicedirectory. services. getIamPolicy servicedirectory.services.list servicedirectory. services. resolve servicedirectory. services. update Access Control using the Google Cloud console You can use the Google Cloud console to manage access control for your registry.
- Service Directory zones override IAM restrictions When assigning a namespace to a Service Directory zone, the service names become visible to all clients on any networks that are authorized to query the private zone.
- Google Cloud offers Identity and Access Management (IAM), which enables you to give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.

### Configure a DNS zone \_|\_ Service Directory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once you have attached a Service Directory zone to the namespace, all services and endpoints within the namespace become available over DNS on the private network.
- Click Create . gcloud gcloud dns managed-zones create SD ZONE \ --dns-name DNS NAME \ --description DESCRIPTION \ --visibility private \ --networks https://www.googleapis.com/compute/v1/projects/ project ID /global/networks/ network \ --service-directory-namespace https://servicedirectory.googleapis.com/v1/projects/ project ID /locations/ region /namespaces/ namespace-name Replace the following values: SD ZONE : the name of the Service Directory zone that you are creating.
- DESCRIPTION : a description of the zone, such as this zone is backed by Service Directory . https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK : the FQDN of the networks that can use the zone. https://www.servicedirectory.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /registries/ NAMESPACE NAME : the FQDN of the namespace that you are linking.
- Permissions servicedirectory.namespaces.associatePrivateZone Roles servicedirectory.admin servicedirectory.editor Note: Service visibility ( who is authorized to look up a service) changes once a Service Directory private zone is assigned to a namespace.

