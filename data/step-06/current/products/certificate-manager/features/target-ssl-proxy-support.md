---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.495Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Target SSL proxy support"
feature_slug: "target-ssl-proxy-support"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/maps"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed"
  - "https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps"
keywords:
  - "proxies"
  - "target"
  - "proxy"
  - "ssl"
  - "adds"
  - "certificate"
  - "manager"
  - "for"
---

# Target SSL proxy support

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager adds support for target SSL proxies.

## Extended Definition

Certificate Manager adds support for target SSL proxies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/maps](https://docs.cloud.google.com/certificate-manager/docs/maps)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed](https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed)
- [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps)

## Supporting Pages

### Manage certificate maps \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/maps](https://docs.cloud.google.com/certificate-manager/docs/maps)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- API To attach the certificate map to the target HTTPS proxy, make a POST request to the targetHttpsProxies method: POST /projects/ PROJECT ID /global/targetHttpsProxies/ PROXY NAME /setCertificateMap { certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT ID /locations/global/certificateMaps/ CERTIFICATE MAP NAME ", } To attach the certificate map to the target SSL proxy, make a POST request to the targetSslProxies method: POST /projects/ PROJECT ID /global/targetSslProxies/ PROXY NAME /setCertificateMap { certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT ID /locations/global/certificateMaps/ CERTIFICATE MAP NAME ", } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Note: If you aren't assigned the required roles, contact the IAM Administrator who has the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles. gcloud To attach the certificate map to the target HTTPS proxy, use the gcloud compute target-https-proxies update command : gcloud compute target-https-proxies update PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " To attach the certificate map to the target SSL proxy, use the gcloud compute target-ssl-proxies update command : gcloud compute target-ssl-proxies update PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " Replace the following: PROXY NAME : the name of the target proxy.
- Note: If you aren't assigned the required roles, contact the IAM Administrator who has the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles. gcloud To detach any attached certificate map from the target HTTPS proxy, use the gcloud compute target-https-proxies update command : gcloud compute target-https-proxies update PROXY NAME \ --clear-certificate-map To detach any attached certificate map from the target SSL proxy, use the gcloud compute target-ssl-proxies update command : gcloud compute target-ssl-proxies update PROXY NAME \ --clear-certificate-map Replace the following: PROXY NAME : the name of the target proxy.
- API To detach any attached certificate map from the target HTTPS proxy, make a POST request to the targetHttpsProxies method: POST /projects/ PROJECT ID /global/targetHttpsProxies/ PROXY NAME /setCertificateMap { certificateMap: "", } To detach any attached certificate map from the target SSL proxy, make a POST request to the targetSslProxies method: POST /projects/ PROJECT ID /global/targetSslProxies/ PROXY NAME /setCertificateMap { certificateMap: "", } Replace the following: PROJECT ID : the ID of the Google Cloud project.

### "Deploy a global self-managed certificate \_|\_ Certificate Manager \_|\_\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed](https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform To create a certificate map entry with a root domain, use a google certificate manager certificate map entry resource . resource "google certificate manager certificate map entry" "first entry" { name = "${local.name}-first-entry-${random id.tf prefix.hex}" description = "example certificate map entry" map = google certificate manager certificate map.certificate map.name labels = { "terraform" : true } certificates = [google certificate manager certificate.root cert.id] hostname = local.domain } To create a certificate map entry with a wildcard domain, use a google certificate manager certificate map entry resource . resource "google certificate manager certificate map entry" "second entry" { name = "${local.name}-second-entity-${random id.tf prefix.hex}" description = "example certificate map entry" map = google certificate manager certificate map.certificate map.name labels = { "terraform" : true } certificates = [google certificate manager certificate.root cert.id] hostname = " .${local.domain}" } Verify that the certificate map entry is active Verify that the certificate map entry is active before attaching its corresponding certificate map to the target proxy.
- If you don't know the name of the existing target proxy, go to the Target proxies page and note the name of the target proxy. gcloud compute target-https-proxies update PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " \ --global After creating or updating the target proxy, run the following command to verify it: gcloud compute target-https-proxies list Terraform To attach the certificate map to the target proxy, you can use a google compute target https proxy resource .
- The output is similar to the following: certificates: createTime: '2021-09-06T10:01:56.229472109Z' hostname: example.com name: projects/my-project/locations/global/certificateMaps/myCertMap/certificateMapEntries/myCertMapEntry state: ACTIVE updateTime: '2021-09-06T10:01:58.277031787Z' Attach the certificate map to the target proxy You can attach the certificate map to a new target proxy or an existing target proxy. gcloud To attach the certificate map to a new target proxy, use the gcloud compute target-https-proxies create command : gcloud compute target-https-proxies create PROXY NAME \ --certificate-map=" CERTIFICATE MAP NAME " \ --url-map=" URL MAP " \ --global Replace the following: PROXY NAME : the name of the target proxy.
- When configuring a target proxy, if you attach TLS (SSL) certificates directly and also through a certificate map, the proxy uses the certificates referenced by the certificate map and ignores the directly attached TLS (SSL) certificates.

### "REST Resource: projects.locations.certificateMaps \_|\_ Certificate Manager\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- This field returns the resource name in the following format: //compute.googleapis.com/projects/ /global/targetHttpsProxies/ . targetSslProxy string Output only.
- JSON representation { "ipConfigs" : [ { object ( IpConfig ) } ] , // Union field target proxy can be only one of the following: "targetHttpsProxy" : string , "targetSslProxy" : string // End of list of possible types for union field target proxy . } Fields ipConfigs[] object ( IpConfig ) Output only.
- This field returns the resource name in the following format: //compute.googleapis.com/projects/ /global/targetSslProxies/ .
- IP configurations for this Target Proxy where the Certificate Map is serving.

