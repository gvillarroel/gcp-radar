---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.301Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Chrome DLP rule custom warning messages"
feature_slug: "chrome-dlp-rule-custom-warning-messages"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs"
keywords:
  - "chrome"
  - "dlp"
  - "rule"
  - "custom"
  - "warning"
  - "messages"
  - "based"
  - "let"
---

# Chrome DLP rule custom warning messages

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

Rule-based custom warning messages let administrators define custom text shown to users when a Chrome DLP rule blocks an action.

## Extended Definition

Rule-based custom warning messages let administrators define custom text shown to users when a Chrome DLP rule blocks an action.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)

## Supporting Pages

### Chrome Enterprise Premium release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : Rule-based custom messages for Chrome Enterprise Premium You can now specify a custom warning message when creating Chrome DLP rules.
- July 11, 2024 Feature Generally available : Chrome Enterprise Premium watermarking You can now display a custom watermark on web pages that match the data protection rules that you set.
- Feature Generally Available : Generative AI URL Category for Chrome Enterprise Premium You can now use the Generative AI URL category when creating Chrome DLP rules.
- These messages are shown to end users when their actions are blocked as a result of a rule triggering in Chrome.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Secure non-Google Cloud applications using the app connector Stay organized with collections Save and categorize content based on your preferences.
- Set up the app connector using the Google Cloud console Complete the procedures in this section to deploy the Chrome Enterprise Premium app connector by using the Google Cloud console.

### "Create and assign custom access levels using Falcon ZTA data \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs](https://docs.cloud.google.com/chrome-enterprise-premium/docs/create-access-levels-cs)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Create and assign custom access levels using Falcon ZTA data Stay organized with collections Save and categorize content based on your preferences.
- This document shows you how to create device-based custom access levels using Falcon ZTA data and assign those access levels to your organizational resources.
- Examples The following CEL expression creates a rule that allows access only from Falcon ZTA-managed devices with an OS assessment score higher than 50: device.vendors["CrowdStrike"].is managed device == true && device.vendors["CrowdStrike"].data["assessment.os"] > 50.0 The following CEL expression creates a rule that allows access only from devices that Falcon ZTA assessed in the last two days.
- Ensure that you have one of the following Identity and Access Management roles: Access Context Manager Admin ( roles/accesscontextmanager.policyAdmin ) Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Understand the objects and attributes that are used to build the Common Expression Language (CEL) expressions for custom access levels.

