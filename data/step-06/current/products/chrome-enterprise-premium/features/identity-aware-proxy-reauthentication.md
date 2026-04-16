---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:10:45.847Z"
product_name: "Chrome Enterprise Premium"
product_slug: "chrome-enterprise-premium"
feature_name: "Identity-Aware Proxy reauthentication"
feature_slug: "identity-aware-proxy-reauthentication"
latest_feature_date: "2022-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector"
  - "https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps"
keywords:
  - "reauthentication"
  - "reauthenticate"
  - "requiring"
  - "adds"
  - "users"
  - "identity"
  - "proxy"
  - "aware"
---

# Identity-Aware Proxy reauthentication

Product: Chrome Enterprise Premium
Coverage: MEDIUM

## Step 02 Summary

Identity-Aware Proxy reauthentication adds support for requiring users to reauthenticate during an active session.

## Extended Definition

Identity-Aware Proxy reauthentication adds support for requiring users to reauthenticate during an active session.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)

## Supporting Pages

### "Secure access to SaaS applications \_|\_ Chrome Enterprise Premium \_|\_\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a zero trust access framework and delivering granular, context-aware control over who accesses your SaaS applications.
- To create, save your settings and create the application, click Create . gcloud To create a SaaS application using gcloud, run the following command: gcloud beyondcorp security-gateways applications create APPLICATION ID \ --project = PROJECT ID \ --security-gateway = SECURITY GATEWAY ID \ --location = global \ --display-name = " APPLICATION DISPLAY NAME " \ --endpoint-matchers = "hostname= HOST NAME ,ports= 443 " REST To create a SaaS application using the REST API, run the following command: curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d "{ \"display name\": \" APPLICATION DISPLAY NAME \", \"endpoint matchers\": [{hostname: \" HOST NAME \", ports: 443 }] }" \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications?application id= APPLICATION ID " Configure Google Chrome proxy mode You can route application traffic through the secure gateway by applying a PAC file in the Chrome settings in the Google Admin console.
- Search for the following extension, and then require it to be installed for all of the users in the organization unit or group: ekajlcmdfcigmdbphhifahdfjbkciflj Click the installed extension, and in the Policy for extensions field, enter the following JSON value: { "securityGateway" : { "Value" : { "authentication" : {}, "context" : { "resource" : "projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID " } } } } Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway To save the configuration, click Save .
- Update your existing pac config.js file and add the domains of your new application to the sites array, as shown in the following example PAC file. function FindProxyForURL ( url , host ) { const PROXY = "HTTPS via.prod.securegateway.goog: 443 " ; const sites = [ " HOST NAME " ]; for ( const site of sites ) { if ( shExpMatch ( url , 'https://' + site + '/ ' ) shExpMatch ( url , ' .' + site + '/ ' )) { return PROXY ; } } return 'DIRECT' ; } Replace HOST NAME with the hostname of your application—for example, myapp.example.com .

### "Secure access to private web applications \_|\_ Chrome Enterprise Premium\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Chrome Enterprise Premium secure gateway functions as a forward proxy, enforcing a zero trust access framework and delivering granular, context-aware control over who accesses your private web applications.
- Search for the following extension, and then require it to be installed for all of the users in the organization unit or group: ekajlcmdfcigmdbphhifahdfjbkciflj Click the installed extension, and in the Policy for extensions field, enter the following JSON value: { "securityGateway" : { "Value" : { "authentication" : {}, "context" : { "resource" : "projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID " } } } } Replace the following: PROJECT ID : the ID of the project where the secure gateway is configured SECURITY GATEWAY ID : the ID of the secure gateway To save the configuration, click Save .
- Update your existing pac config.js file and add the domains of your new application to the sites array, as shown in the following example PAC file. function FindProxyForURL ( url , host ) { const PROXY = "HTTPS via.prod.securegateway.goog: 443 " ; const sites = [ " HOST NAME " ]; for ( const site of sites ) { if ( shExpMatch ( url , 'https://' + site + '/ ' ) shExpMatch ( url , ' .' + site + '/ ' )) { return PROXY ; } } return 'DIRECT' ; } Replace HOST NAME with the hostname of your application—for example, myapp.example.com .
- Call the Create API method. curl \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -X POST \ -d @application.json \ "https://beyondcorp.googleapis.com/v1/projects/ PROJECT ID /locations/global/securityGateways/ SECURITY GATEWAY ID /applications?application id= APPLICATION ID " Configure Google Chrome proxy mode You can route application traffic through the secure gateway by applying a PAC file in the Chrome settings in the Google Admin console.

### "Secure non-Google Cloud applications using the app connector \_|\_ Chrome\

- URL: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enabling Identity-Aware Proxy Follow the Identity-Aware Proxy (IAP) documentation for setting up Identity-Aware Proxy .
- Overview You can use the Chrome Enterprise Premium app connector to provide identity and Context-Aware Access to HTTPS applications running in non-Google Cloud environments.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices \ -d "{ \ 'name': '${LB PREFIX}-backend-service', \ 'service protocol': 'HTTPS', \ 'port name': 'https', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" gcurl -X PATCH https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service \ -d "{ \ 'backends': \ [{ \ 'group': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/regions/${REGION}/networkEndpointGroups/${LB PREFIX}-neg' \ }] \ }" Create a Google managed certificate for your domain by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses \ -d "{ \ 'name': '${LB PREFIX}-static-ip', \ 'ip version': 'IPV4' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates \ -d "{ \ 'name': '${LB PREFIX}-ssl-cert', \ 'managed': \ { \ 'domains': '${DOMAIN NAME}' \ }, \ 'type': 'MANAGED' \ }" LB IP=$(gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/addresses/${LB PREFIX}-static-ip jq -r '.address') Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps \ -d "{ \ 'name': '${LB PREFIX}-map-https', \ 'default service': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/backendServices/${LB PREFIX}-backend-service' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies \ -d "{ \ 'name': '${LB PREFIX}-https-lb-proxy', \ 'url map': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/urlMaps/${LB PREFIX}-map-https', \ 'ssl certificate': 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/sslCertificates/${LB PREFIX}-ssl-cert' \ }" gcurl https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/forwardingRules \ -d "{ \ 'name': '${LB PREFIX}-https-lb-forwarding-rule', \ target: 'https://www.googleapis.com/compute/v1/projects/${PROJECT NUMBER}/global/targetHttpsProxies/${LB PREFIX}-https-lb-proxy', \ 'ip address': '${LB IP}', \ 'port range': '443-443', \ 'load balancing scheme': 'EXTERNAL MANAGED' \ }" After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.
- Create an NEG based backend service and connect it to a Private Service Connect service attachment by running the following commands: gcloud beta compute backend-services create $LB PREFIX-backend-service \ --global \ --protocol=HTTPS \ --load-balancing-scheme=EXTERNAL MANAGED gcloud beta compute backend-services add-backend $LB PREFIX-backend-service \ --global \ --network-endpoint-group=$LB PREFIX-neg \ --network-endpoint-group-region=$REGION Create a Google managed certificate for your domain by running the following commands: gcloud compute addresses create $LB PREFIX-static-ip \ --ip-version=IPV4 \ --global gcloud compute ssl-certificates create $LB PREFIX-ssl-cert \ --domains=$DOMAIN NAME \ --global LB IP="$(gcloud compute addresses describe $LB PREFIX-static-ip --global --format='value(address)')" Create an external Application Load Balancer based on the backend from the previous step by running the following commands: gcloud compute url-maps create $LB PREFIX-map-https \ --default-service=$LB PREFIX-backend-service gcloud compute target-https-proxies create $LB PREFIX-https-lb-proxy \ --url-map=$LB PREFIX-map-https \ --ssl-certificates=$LB PREFIX-ssl-cert gcloud beta compute forwarding-rules create "$LB PREFIX-https-lb-forwarding-rule" \ --global \ --target-https-proxy=$LB PREFIX-https-lb-proxy \ --address=$LB IP \ --ports=443 \ --load-balancing-scheme=EXTERNAL MANAGED After the external Application Load Balancer is created, your application is accessible over the internet by that IP address.

