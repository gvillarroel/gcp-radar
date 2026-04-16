---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.950Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Target SSL proxy support"
feature_slug: "target-ssl-proxy-support"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/overview"
  - "https://docs.cloud.google.com/certificate-manager/docs/maps"
keywords:
  - "Certificate Manager target SSL proxy"
  - "target SSL proxy support"
  - "SSL proxy integration"
  - "target SSL proxy"
  - "proxy certificate attachment"
  - "SSL proxy certificate support"
---

# Target SSL proxy support

Product: Certificate Manager
Coverage: HIGH

## Step 02 Summary

Certificate Manager adds support for target SSL proxies.

## Extended Definition

Certificate Manager supports target SSL proxies as a supported load balancer resource type used by proxy Network Load Balancers. It enables attaching a Certificate Manager certificate map to a target SSL proxy (and detaching it) via the `targetSslProxies` setCertificateMap method and corresponding `gcloud` update commands. This attachment is used so TLS certificates can be associated with target SSL proxies.

## Evidence Summary

The overview page confirms target SSL proxy support, and the certificate maps page provides the concrete API and `gcloud` procedures for attaching or clearing certificate maps on those proxies.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/overview](https://docs.cloud.google.com/certificate-manager/docs/overview)
- [https://docs.cloud.google.com/certificate-manager/docs/maps](https://docs.cloud.google.com/certificate-manager/docs/maps)

## Supporting Pages

### Certificate Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/overview](https://docs.cloud.google.com/certificate-manager/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists Target SSL proxies as supported load-balancer resources for Certificate Manager and describes their use with proxy Network Load Balancer types.

Evidence snippets:
- Certificate Manager supports the following load balancer resources: Target HTTPS proxies used by Application Load Balancers Target SSL proxies used by proxy Network Load Balancers Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer For more information about the differences between target HTTPS and target SSL proxy types, see Target proxies .
- Supported load balancers Google Cloud load balancers that refer to a target HTTPS proxy or a target SSL proxy ( TargetSslProxy ) use TLS certificates to encrypt information sent over the network.

### Manage certificate maps \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/maps](https://docs.cloud.google.com/certificate-manager/docs/maps)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- API To attach the certificate map to the target HTTPS proxy, make a POST request to the targetHttpsProxies method: POST /projects/ PROJECT ID /global/targetHttpsProxies/ PROXY NAME /setCertificateMap { certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT ID /locations/global/certificateMaps/ CERTIFICATE MAP NAME ", } To attach the certificate map to the target SSL proxy, make a POST request to the targetSslProxies method: POST /projects/ PROJECT ID /global/targetSslProxies/ PROXY NAME /setCertificateMap { certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT ID /locations/global/certificateMaps/ CERTIFICATE MAP NAME ", } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Note: If you aren't assigned the required roles, contact the IAM Administrator who has the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles. gcloud To attach the certificate map to the target HTTPS proxy, use the gcloud compute target-https-proxies update command : gcloud compute target-https-proxies update PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " To attach the certificate map to the target SSL proxy, use the gcloud compute target-ssl-proxies update command : gcloud compute target-ssl-proxies update PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " Replace the following: PROXY NAME : the name of the target proxy.
- Note: If you aren't assigned the required roles, contact the IAM Administrator who has the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles. gcloud To detach any attached certificate map from the target HTTPS proxy, use the gcloud compute target-https-proxies update command : gcloud compute target-https-proxies update PROXY NAME \ --clear-certificate-map To detach any attached certificate map from the target SSL proxy, use the gcloud compute target-ssl-proxies update command : gcloud compute target-ssl-proxies update PROXY NAME \ --clear-certificate-map Replace the following: PROXY NAME : the name of the target proxy.
- API To detach any attached certificate map from the target HTTPS proxy, make a POST request to the targetHttpsProxies method: POST /projects/ PROJECT ID /global/targetHttpsProxies/ PROXY NAME /setCertificateMap { certificateMap: "", } To detach any attached certificate map from the target SSL proxy, make a POST request to the targetSslProxies method: POST /projects/ PROJECT ID /global/targetSslProxies/ PROXY NAME /setCertificateMap { certificateMap: "", } Replace the following: PROJECT ID : the ID of the Google Cloud project.

### "Deploy a global Google-managed certificate with Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Although it mentions deployment via a target HTTPS proxy and proxy load balancer types, it does not specifically define support for target SSL proxy resources.

