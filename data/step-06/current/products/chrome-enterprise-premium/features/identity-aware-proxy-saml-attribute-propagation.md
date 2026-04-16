---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.848Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Identity-Aware Proxy SAML attribute propagation"
feature_slug: "identity-aware-proxy-saml-attribute-propagation"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
keywords:
  - "propagation"
  - "attribute"
  - "saml"
  - "identity"
  - "proxy"
  - "enables"
  - "aware"
---

# Identity-Aware Proxy SAML attribute propagation

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

IAP SAML attribute propagation enables SAML attributes to be passed through Identity-Aware Proxy authentication flows.

## Extended Definition

IAP SAML attribute propagation enables SAML attributes to be passed through Identity-Aware Proxy authentication flows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection](https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources](https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)

## Supporting Pages

### "Chrome Enterprise Premium access protection overview \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection](https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chrome Enterprise Premium works by leveraging four Google Cloud offerings: Identity-Aware Proxy (IAP) : A service that enables employees to access corporate apps and resources from untrusted networks without the use of a VPN.
- Access levels restrict access based on the following attributes: IP subnetworks Regions Principals Device policy When you create a device-based access level, Access Context Manager references the inventory of devices created by Endpoint Verification.
- When to use Chrome Enterprise Premium Use Chrome Enterprise Premium when you want to establish fine-grained access control based on a wide range of attributes and conditions including what device is being used and from what IP address.
- Based on the BeyondCorp security model, Chrome Enterprise Premium is an approach that utilizes a variety of Google Cloud offerings to enforce granular access control based on a user's identity and context of the request.

### "Quickstart: Apply Chrome Enterprise Premium to cloud resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources](https://docs.cloud.google.com/chrome-enterprise-premium/docs/apply-resources)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Securing your apps and resources with IAP Identity-Aware Proxy (IAP) establishes a central identity awareness layer for apps and resources accessed by HTTPS and TCP.
- Before you begin Before you make your apps and resources context-aware, you'll need to: If you don't already have Cloud Identity user accounts in your organization, create a few Cloud Identity accounts .
- What's next Learn how to view Context-Aware Access logs in Cloud Audit Logs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access levels can limit access based on the following attributes: IP subnetworks Regions Access level dependency Principals Device policy (Note that Endpoint Verification must be set up.) Create an access level by following the Creating an access levels guide.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Enabling Identity-Aware Proxy Follow the Identity-Aware Proxy (IAP) documentation for setting up Identity-Aware Proxy .
- Overview You can use the Chrome Enterprise Premium app connector to provide identity and Context-Aware Access to HTTPS applications running in non-Google Cloud environments.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.

