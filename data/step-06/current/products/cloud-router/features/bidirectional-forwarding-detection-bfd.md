---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:54.315Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Bidirectional Forwarding Detection (BFD)"
feature_slug: "bidirectional-forwarding-detection-bfd"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview"
keywords:
  - "bidirectional"
  - "forwarding"
  - "detection"
  - "bfd"
  - "improves"
  - "failure"
  - "for"
  - "router"
---

# Bidirectional Forwarding Detection (BFD)

Product: Cloud Router
Coverage: MEDIUM

## Step 02 Summary

Bidirectional Forwarding Detection improves failure detection for Cloud Router BGP sessions; Bidirectional Forwarding Detection improves failure detection for Cloud Router BGP sessions.

## Extended Definition

Bidirectional Forwarding Detection improves failure detection for Cloud Router BGP sessions; Bidirectional Forwarding Detection improves failure detection for Cloud Router BGP sessions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details)
- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices)
- [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages)
- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview)

## Supporting Pages

### View router details \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/viewing-router-details)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View router details This page describes how to view the following Cloud Router details: The status of the Cloud Router's BGP sessions The Cloud Router BGP timers Bidirectional Forwarding Detection (BFD) settings Route advertisement mode The base advertised route priority that Cloud Router uses for calculating route metrics All routes for a BGP session use the same base advertised route priority.
- The command returns the router's status, advertised routes, and learned routes. gcloud compute routers get-status ROUTER NAME \ --project= PROJECT ID \ --region= REGION Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project that contains your Cloud Router REGION : the region that contains your Cloud Router The output is similar to the following: kind: compute#routerStatusResponse result: bestRoutes: — creationTimestamp: '2019-04-17T07:16:12.789-07:00' destRange: 192.168.1.0/24 kind: compute#route nextHopIp: 169.254.0.2 priority: 100 — creationTimestamp: '2019-04-17T07:16:12.789-07:00' destRange: 192.168.2.0/24 kind: compute#route nextHopIp: 169.254.0.2 priority: 338 bestRoutesForRouter: — creationTimestamp: '2019-04-17T07:15:42.012-07:00' destRange: 192.168.1.0/24 kind: compute#route nextHopIp: 169.254.0.2 priority: 100 — creationTimestamp: '2019-04-17T07:15:42.014-07:00' destRange: 192.168.2.0/24 kind: compute#route nextHopIp: 169.254.0.2 priority: 338 bgpPeerStatus: — advertisedRoutes: — destRange: 10.0.1.0/24 kind: compute#route nextHopIp: 169.254.0.1 priority: 100 — destRange: 10.0.2.0/24 kind: compute#route nextHopIp: 169.254.0.1 priority: 340 bfdStatus: bfdSessionInitializationMode: ACTIVE configUpdateTimestampMicros: '1615561369012381' controlPacketCounts: numRx: 64014 numRxRejected: 0 numRxSuccessful: 64014 numTx: 63994 controlPacketIntervals: — avgMs: '263' duration: MINUTE maxMs: '299' minMs: '225' numIntervals: '227' type: TRANSMIT — avgMs: '262' duration: MAX maxMs: '4467' minMs: '0' numIntervals: '63993' type: TRANSMIT — avgMs: '261' duration: MINUTE maxMs: '1000' minMs: '176' numIntervals: '228' type: RECEIVE localDiagnostic: NO DIAGNOSTIC localState: UP negotiatedLocalControlTxIntervalMs: 1000 rxPacket: authenticationPresent: false controlPlaneIndependent: false demand: false diagnostic: NO DIAGNOSTIC final: false length: 24 minEchoRxIntervalMs: 0 minRxIntervalMs: 1000 minTxIntervalMs: 1000 multiplier: 5 multipoint: false myDiscriminator: 313496190 poll: false state: UP version: 1 yourDiscriminator: 369987665 txPacket: authenticationPresent: false controlPlaneIndependent: false demand: false diagnostic: NO DIAGNOSTIC final: false length: 24 minEchoRxIntervalMs: 0 minRxIntervalMs: 1000 minTxIntervalMs: 1000 multiplier: 5 multipoint: false myDiscriminator: 369987665 poll: false state: UP version: 1 yourDiscriminator: 313496190 uptimeMs: '16812601' enableIpv6: true ipAddress: 169.254.0.1 ipv6NexthopAddress: 2600:2d00:0:0:0:0:1:5 linkedVpnTunnel: https://www.googleapis.com/compute/projects/ PROJECT ID /regions/us-central1/vpnTunnels/vpn-1-tunnel-1 name: mysession2 numLearnedRoutes: 2 peerIpAddress: 169.254.0.2 peerIpv6NexthopAddress: 2600:2d00:0:0:0:0:1:4 state: Established status: UP uptime: 2 days, 3 hours, 37 minutes, 0 seconds uptimeSeconds: '185820' network: https://www.googleapis.com/compute/kind: compute#routerStatusResponse result.bestRoutes lists the best dynamic routes for this Cloud Router's VPC network in the same region as this Cloud Router.
- View the BGP sessions section to see the details of your Cloud Router's BGP sessions. gcloud Run the describe command and pass the name of the Cloud Router. gcloud compute routers describe ROUTER NAME \ --project PROJECT ID \ --region REGION Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project that contains your Cloud Router REGION : the region where the Cloud Router is located In the output, view the bgpPeers section: bgp: advertiseMode: DEFAULT asn: 65001 keepaliveInterval: 120 bgpPeers: — advertiseMode: DEFAULT bfd: minReceiveInterval: 1000 minTransmitInterval: 1000 mode: ACTIVE multiplier: 5 enable: 'TRUE' enableIpv6: true interfaceName: if-mysession2 ipAddress: 169.254.0.1 ipv6NexthopAddress: 2600:2d00:0:0:0:0:1:5 name: mysession2 peerAsn: 65002 peerIpAddress: 169.254.0.2 peerIpv6NexthopAddress: 2600:2d00:0:0:0:0:1:6 creationTimestamp: '2019-03-15T13:48:12.433-07:00' description: '' id: '1234567890123456789' interfaces: — ipRange: 169.254.0.1/30 linkedVpnTunnel: https://www.googleapis.com/compute/projects/ PROJECT ID /regions/us-central1/vpnTunnels/vpn-1-tunnel-1 name: if-mysession2 kind: compute#router name: ROUTER NAME network: https://www.googleapis.com/compute/projects/ PROJECT ID /global/networks/network-a region: https://www.googleapis.com/compute/projects/ PROJECT ID /regions/us-central1 selfLink: https://www.googleapis.com/compute/projects/ PROJECT ID /regions/us-central1/routers/ ROUTER NAME selfLinkWithId: https://www.googleapis.com/compute/projects/ PROJECT ID /regions/us-central1/routers/7114728016518951267 API Use the routers.get method: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME Replace the following: PROJECT ID : the project that contains the Cloud Router REGION : the region where the Cloud Router is located ROUTER NAME : the name of the Cloud Router The bgpPeers[] field in the output contains the configuration for each BGP session.
- API Use the routers.getRouterStatus method: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers/ ROUTER NAME /getRouterStatus Replace the following: PROJECT ID : the project that contains the Cloud Router REGION : the region where the Cloud Router is located ROUTER NAME : the name of the Cloud Router View BGP session configuration To view the configuration for an existing BGP session, follow these steps.

### Best practices for Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your on-premises Border Gateway Protocol (BGP) router supports Bidirectional Forwarding Detection (BFD) , enable it on your on-premises BGP device and on the Cloud Router to provide a high-availability network link that can respond faster to link failures.
- With graceful restart, traffic between networks isn't disrupted in the event of a Cloud Router or on-premises BGP device failure as long as the BGP session is re-established within the graceful restart period.
- If you don't configure two separate on-premises devices, Cloud VPN tunnel traffic can be disrupted in the event of a Cloud Router or an on-premises BGP device failure.
- For example, you can use the metrics for learned routes to create alerting policies for the unique Cloud Router dynamic route prefixes quotas .

### Troubleshoot Cloud Router log messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages](https://docs.cloud.google.com/network-connectivity/docs/router/support/troubleshoot-log-messages)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For information about diagnostic messages and session states related to Bidirectional Forwarding Detection (BFD), see BFD diagnostic messages and session states .
- For a BFD-enabled BGP session, the BFD control detection timer on the Cloud Router has expired.
- For additional troubleshooting information, see the following: Troubleshoot BGP sessions Troubleshoot BGP peering Troubleshoot BGP routes and route selection NOTIFICATION RECEIVED message appears in Cloud Router logs A NOTIFICATION RECEIVED message appears in the Cloud Router logs when the Cloud Router has received a NOTIFICATION message from the BGP peer.
- LINK DOWN message appears in Cloud Router logs A LINK DOWN message appears in the Cloud Router logs when the link between the Google peering edge router and your VLAN attachment for Cloud Interconnect is down.

### Cloud Router overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key features Cloud Router offers the following features: BGP session management, including support for Bidirectional Forwarding Detection (BFD) and MD5 authentication .
- Andromeda handles all packet routing and forwarding capabilities, and Cloud Routers manage corresponding BGP sessions.
- Cloud Routers don't provide packet routing or forwarding capability.
- Google Cloud products that use Cloud Router The following table describes products that use Cloud Router: Product Dynamic routing with Cloud Router Documentation Dedicated Interconnect Required Create VLAN attachments Cross-Cloud Interconnect Required Cross-Cloud Interconnect overview AWS: Create VLAN attachments Azure: Create VLAN attachments OCI: Create VLAN attachments Alibaba Cloud: Create VLAN attachments Partner Interconnect Required Create VLAN attachments Router appliances Required Creating Router appliance instances HA VPN Required Creating an HA VPN gateway to a peer VPN gateway Creating an HA VPN between Google Cloud networks Classic VPN Optional Creating a Classic VPN using static routing Cloud NAT relies on Cloud Routers for control plane capabilities, but not for BGP session management.

