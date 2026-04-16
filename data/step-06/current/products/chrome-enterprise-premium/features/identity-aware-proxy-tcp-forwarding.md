---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.851Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Identity-Aware Proxy TCP forwarding"
feature_slug: "identity-aware-proxy-tcp-forwarding"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "forwarding"
  - "secure"
  - "identity"
  - "proxy"
  - "enables"
  - "aware"
---

# Identity-Aware Proxy TCP forwarding

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

IAP TCP forwarding enables secure tunnel access to endpoints using private IPs or hostnames, including resources connected through Interconnect or VPN.

## Extended Definition

IAP TCP forwarding enables secure tunnel access to endpoints using private IPs or hostnames, including resources connected through Interconnect or VPN.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabling Identity-Aware Proxy Follow the Identity-Aware Proxy (IAP) documentation for setting up Identity-Aware Proxy .
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- After you publish your application and you receive the Securely published application confirmation, you must create a DNS record to point your external facing application URL to the IP address of the proxy.

### "Securing Compute Engine apps and resources with IAP \_|\_ Chrome Enterprise\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page explains how to secure a Compute Engine instance with Identity-Aware Proxy (IAP) .
- Go to the Identity-Aware Proxy page Select the project you want to secure with IAP.
- Turning on IAP On the Identity-Aware Proxy page, under APPLICATIONS , find the load balancer that serves the instance group you want to restrict access to.
- Setting up IAP access Go to the Identity-Aware Proxy page .

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a zero trust access framework and delivering granular, context-aware control over who accesses your private web applications.
- Update your existing pac config.js file and add the domains of your new application to the sites array, as shown in the following example PAC file. function FindProxyForURL ( url , host ) { const PROXY = "HTTPS via.prod.securegateway.goog: 443 " ; const sites = [ " HOST NAME " ]; for ( const site of sites ) { if ( shExpMatch ( url , 'https://' + site + '/ ' ) shExpMatch ( url , ' .' + site + '/ ' )) { return PROXY ; } } return 'DIRECT' ; } Replace HOST NAME with the hostname of your application—for example, myapp.example.com .
- Call the Create API method. curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d @application.json \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications?application id= APPLICATION ID " Configure Google Chrome proxy mode You can route application traffic through the secure gateway by applying a PAC file in the Chrome settings in the Google Admin console.
- How securing access to private web applications works By establishing a secure tunnel and enforcing context-aware access policies, the secure gateway keeps private applications private and shielded from public internet exposure.

