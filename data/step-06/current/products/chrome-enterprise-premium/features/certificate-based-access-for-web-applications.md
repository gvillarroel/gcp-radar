---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:30:05.313Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Certificate-based access for web applications"
feature_slug: "certificate-based-access-for-web-applications"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps"
keywords:
  - "certificate"
  - "based"
  - "access"
  - "for"
  - "web"
  - "applications"
  - "secures"
  - "from"
---

# Certificate-based access for web applications

Product: Chrome Enterprise Premium
Coverage: LOW

## Step 02 Summary

Certificate-based access secures access from trusted devices to enterprise web applications running on Google Cloud.

## Extended Definition

Certificate-based access secures access from trusted devices to enterprise web applications running on Google Cloud.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)

## Supporting Pages

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How securing access to private web applications works By establishing a secure tunnel and enforcing context-aware access policies, the secure gateway keeps private applications private and shielded from public internet exposure.
- A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a zero trust access framework and delivering granular, context-aware control over who accesses your private web applications.
- Home Documentation Security Chrome Enterprise Premium Guides Send feedback Secure access to private web applications Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to set up a Chrome Enterprise Premium secure gateway for securing access to your private web applications.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Run the following command to check the provisioning status: Show the IP address to set up in the DNS provider: echo "Load Balancer ip address - $LB IP" After you set the DNS, check whether or not the domain name resolves to the IP address by running the following command: dig $DOMAIN NAME Get the provisioning status by running the following command: gcloud compute ssl-certificates describe $LB PREFIX-ssl-cert \ --global \ --format="get(name,managed.status, managed.domainStatus)" After the SSL Certificate is provisioned, you should be able to access your application by using the DNS name.
- To allow users access to your application, you must grant them the IAP-secured Web App User role for the project by completing the following steps: Select the $LB PREFIX-backend-service checkbox.

### "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This command uses the etag from your file to ensure that you update the correct version. jq '{policy: .}' policy.json curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @- \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications/ APPLICATION ID :setIamPolicy" Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway APPLICATION ID : the ID of the application resource Add a conditional access policy You can also set access policies with conditions.
- You can specify the following regions: africa-south1 asia-east1 asia-south1 asia-south2 asia-southeast1 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west2 europe-west3 europe-west4 europe-west8 europe-west9 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-west1 Configure a SaaS application After you create a secure gateway, you can configure your SaaS applications to use the secure gateway for secure access. console To configure SaaS egress hubs, do the following: In the Google Cloud console, go to the SaaS Egress Hubs page.
- This command uses the etag from your file to ensure that you update the correct version. gcloud beta beyondcorp security-gateways applications set-iam-policy APPLICATION ID policy.json \ --security-gateway = SECURITY GATEWAY ID \ --project = PROJECT ID \ --location = global Replace the following: APPLICATION ID : the ID of the application resource SECURITY GATEWAY ID : the ID of the secure gateway PROJECT ID : the ID of the project where the secure gateway is configured Add a conditional access policy You can also set access policies with conditions.
- For the hubs flag, specify one or more regions from the following list. curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d '{ "display name": " SECURITY GATEWAY DISPLAY NAME ", "hubs": { "us-central1": {} } }' \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways?security gateway id= SECURITY GATEWAY ID " The hubs flag represents the regional resources required for enabling egress connectivity to the target application.

