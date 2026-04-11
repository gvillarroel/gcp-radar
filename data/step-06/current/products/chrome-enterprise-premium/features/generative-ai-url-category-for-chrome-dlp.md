---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.306Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Generative AI URL category for Chrome DLP"
feature_slug: "generative-ai-url-category-for-chrome-dlp"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs"
keywords:
  - "generative"
  - "ai"
  - "url"
  - "category"
  - "for"
  - "chrome"
  - "dlp"
  - "the"
---

# Generative AI URL category for Chrome DLP

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

The Generative AI URL category can be used in Chrome DLP rules to classify websites that generate AI-created content.

## Extended Definition

The Generative AI URL category can be used in Chrome DLP rules to classify websites that generate AI-created content.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs](https://docs.cloud.google.com/chrome-enterprise-premium/docs)

## Supporting Pages

### Chrome Enterprise Premium release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes](https://docs.cloud.google.com/chrome-enterprise-premium/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Generally Available : Generative AI URL Category for Chrome Enterprise Premium You can now use the Generative AI URL category when creating Chrome DLP rules.
- Feature Generally Available : Rule-based custom messages for Chrome Enterprise Premium You can now specify a custom warning message when creating Chrome DLP rules.
- July 29, 2022 Feature The following Identity-Aware Proxy (IAP) enhancements are generally available ( GA ): IAP TCP forwarding for non-Google Cloud environments IAP reauthentication IAP allowed domains Feature Identity-Aware Proxy (IAP) SAML attribute propagation is available in Preview .
- July 18, 2024 Feature Generally Available : Chrome OCR for Chrome Enterprise Premium You can now scan text in image (BMP, GIF, JPEG, PNG, and TIFF) files and images in PDFs for sensitive content with optical character recognition (OCR).

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Run the following command on the remote agent VM to install the remote agent: curl https://raw.githubusercontent.com/GoogleCloudPlatform/beyondcorp-applink/main/bash-scripts/install-beyondcorp-runtime -o ./install-beyondcorp-runtime && chmod +x ./install-beyondcorp-runtime && ./install-beyondcorp-runtime To add the bce-connctl alias to your shell, run the following command: source /.bce alias Set the required environment variables by running the following commands: PROJECT ID= my-project REGION= us-central1 CONNECTOR NAME= my-connector Replace the following: my-project : the Google Cloud project ID. us-central1 : the region in which to deploy the connection and gateways. my-connector : the name of the connector.
- Set up a convenient alias to use your access token: alias gcurl="curl -H 'Authorization: Bearer ${ACCESS TOKEN}' -H 'Content-Type: application/json'" Enable the API by running the following command: gcurl https://serviceusage.googleapis.com/v1/projects/${PROJECT NUMBER}/services/beyondcorp.googleapis.com:enable -d "{}" Installing an app connector remote agent You must deploy an app connector remote agent VM for every network environment that hosts an application that you want to protect with Chrome Enterprise Premium.

### Chrome Enterprise Premium documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs](https://docs.cloud.google.com/chrome-enterprise-premium/docs)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Training Training and tutorials Manage generative AI in the browser Strategies and policies for enabling productive use of generative AI tools while preventing sensitive data leaks using Chrome.
- Defend against real-time phishing and malware, prevent data exfiltration with granular Data Loss Prevention (DLP) policies, and enforce Context-Aware Access to any app (SaaS, cloud, or on-prem) from any device, directly in Chrome.
- Training Training and tutorials Video deep dive: Chrome Enterprise Premium An overview of Chrome Enterprise Premium's vision, architecture, and core security capabilities for threat, data, and access protection.
- Use case Use cases Snap Inc. reduces GenAI data transfers by 50% See how Snap Inc. used Chrome Enterprise Premium's DLP to control data flow to AI tools, significantly reducing sensitive data transfers.

