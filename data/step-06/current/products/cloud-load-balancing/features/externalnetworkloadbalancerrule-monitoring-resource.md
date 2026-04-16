---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.785Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "ExternalNetworkLoadBalancerRule monitoring resource"
feature_slug: "externalnetworkloadbalancerrule-monitoring-resource"
latest_feature_date: "2022-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
  - "https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring"
keywords:
  - "externalnetworkloadbalancerrule"
  - "monitoring"
  - "resource"
  - "network"
  - "load"
  - "balancing"
  - "provides"
  - "loadbalancing"
---

# ExternalNetworkLoadBalancerRule monitoring resource

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Network Load Balancing provides the loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule monitoring resource for visibility across supported protocols.

## Extended Definition

Network Load Balancing provides the loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule monitoring resource for visibility across supported protocols.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring)

## Supporting Pages

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 477
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also group results by these values. metric.label.<var>LABEL KEY</var>: label key Type Description client country string The country of the client that initiated the connection to the regional external passthrough Network Load Balancer. client continent string The continent of the client that initiated the connection to the regional external passthrough Network Load Balancer. protocol string The protocol in the connection for the loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule resource.
- Replace PROJECT ID with your project ID and BACKEND SERVICE NAME with the name of your backend service. resource.type="loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule" logName="projects/ PROJECT ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend service name=" BACKEND SERVICE NAME " Click Run query .
- Replace PROJECT ID with your project ID and BACKEND GROUP NAME with the name of the instance group. resource.type="loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule" logName="projects/ PROJECT ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend group name=" BACKEND GROUP NAME " Click Run query .
- Resource types Regional external passthrough Network Load Balancers use the following resource types: tcp lb rule udp lb rule loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule A regional external passthrough Network Load Balancer can support TCP, UDP, ESP, GRE, ICMP, and ICMPv6 traffic.

### 내부 패스 스루 네트워크 부하 분산기 로깅 및 모니터링 | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring)
- Source ID: `feature-recovery-http`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT_ID 를 프로젝트 ID로, BACKEND_GROUP_NAME 을 인스턴스 그룹 또는 NEG의 이름으로 바꿉니다. resource.type="loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule" logName="projects/ PROJECT_ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend_group_name=" BACKEND_GROUP_NAME " 쿼리 실행 을 클릭합니다. 로그 필드 로그 레코드에는 모든 로그 레코드의 기본 필드인 필수 필드와 추가 정보를 추가하는 선택적 필드가 있습니다. 선택적 필드를 생략하여 스토리지 비용을 절감할 수 있습니다. 일부 로그 필드는 한 필드에 두 가지 이상의 데이터를 포함하는 다중 필드 형식입니다. 예를 들어 connection 필드는 IpConnection 형식이며 소스 및 대상 IP 주소, 포트, 프로토콜이 단일 필드에 포함됩니다. 이러한 다중 필드 형식의 필드는 다음 레코드 형식 표에 설명되어 있습니다. 모니터링 리소스는 loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule 입니다. 필드 필드 형식 필드 유형: 필수 또는 선택적 설명 연결 IpConnection 필수 이 연결을 설명하는 5-튜플. startTime 문자열 필수 집계된 시간 간격 동안 처음 관찰된 패킷의 타임스탬프(RFC 3339 날짜 문자열 형식) endTime 문자열 필수 집계된 시간 간격 동안 마지막으로 관찰된 패킷의 타임스탬프(RFC 3339 날짜 문자열 형식) bytesSent 문자열 필수 서버에서 클라이언트로 보낸 바이트 수입니다. bytesReceived int64 필수 클라이언트로부터 서버가 수신한 바이트 수입니다. packetsSent int64 필수 서버에서 클라이언트로 보낸 패킷 수입니다. packetsReceived int64 필수 클라이언트로부터 서버에서 수신한 패킷 수입니다. rtt 문자열 필수 지연 시간은 TCP 연결에 대해서만 측정됩니다. 지연 시간은 예상 네트워크 왕복 시간(RTT)과 클라이언트의 VM 운영체제 내의 패킷을 처리하는 데 소요된 시간의 합계입니다. 샘플링된 패킷의 경우 RTT는 TCP 세그먼트를 전송하는 백엔드와 전송된 세그먼트의 시퀀스 번호에 대한 TCP 확인을 수신하는 백엔드 간의 시간 차이를 측정하여 부하 분산된 백엔드의 관점에서 계산됩니다. 지연 시간은 숫자(초)로 시작하고 초를 나타내기 위해 's'로 끝나는 문자열로 형식이 지정됩니다. 나노초는 소수점 이하 초로 표현됩니다. 예를 들어 지연 시간 250밀리초는 '0.250000000s'로 지정됩니다. clientInstance InstanceDetails 선택사항 클라이언트의 VM 인스턴스 세부정보입니다. 클라이언트의 VM 인스턴스가 동일한 프로젝트에 있는 경우에만 사용할 수 있습니다. serverInstance InstanceDetails 선택사항 백엔드 VM의 VM 인스턴스 세부정보입니다. clientVpc VpcDetails 선택사항 클라이언트의 VPC 네트워크 세부정보입니다. 클라이언트가 동일한 프로젝트에 있는 VPC 네트워크 내의 엔드포인트인 경우에만 사용할 수 있습니다. clientGkeDetails GkeDetails 선택사항 클라이언트의 GKE 메타데이터입니다. 클라이언트가 동일한 프로젝트의 GKE 엔드포인트인 경우에만 사용할 수 있습니다. serverGkeDetails GkeDetails 선택사항 서버 백엔드의 GKE 메타데이터입니다. 백엔드가 GKE 엔드포인트인 경우에만 사용할 수 있습니다.
- PROJECT_ID 를 프로젝트 ID로, BACKEND_SERVICE_NAME 을 백엔드 서비스 이름으로 바꿉니다. resource.type="loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule" logName="projects/ PROJECT_ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend_service_name=" BACKEND_SERVICE_NAME " 쿼리 실행 을 클릭합니다. 백엔드 인스턴스 그룹 로그 보기 엔드포인트가 GCE_VM_IP 인 특정 백엔드 인스턴스 그룹 또는 네트워크 엔드포인트 그룹(NEG)의 내부 패스 스루 네트워크 부하 분산기 로그를 보려면 다음 단계를 따르세요. 콘솔 쿼리 Google Cloud 콘솔에서 로그 탐색기 페이지로 이동합니다. 로그 탐색기로 이동 쿼리 표시 전환을 클릭합니다. 다음을 쿼리 필드에 붙여넣습니다.
- PROJECT_ID 를 프로젝트 ID로 바꿉니다. resource.type="loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule" logName="projects/ PROJECT_ID /logs/loadbalancing.googleapis.com%2Fflows" 쿼리 실행 을 클릭합니다. 백엔드 서비스 로그 보기 특정 백엔드 서비스의 내부 패스 스루 네트워크 부하 분산기 로그를 보려면 다음 안내를 따르세요. 콘솔 쿼리 Google Cloud 콘솔에서 로그 탐색기 페이지로 이동합니다. 로그 탐색기로 이동 쿼리 표시 전환을 클릭합니다. 다음을 쿼리 필드에 붙여넣습니다.
- Google Cloud 콘솔에서 notifications 알림 페이지로 이동합니다. 알림 으로 이동 검색창을 사용하여 이 페이지를 찾은 경우 부제목이 Monitoring 인 결과를 선택합니다. 알림 채널을 만들지 않고 알림을 받으려면 알림 채널 수정 을 클릭하고 알림 채널을 추가합니다. 채널을 추가한 후 알림 페이지로 돌아갑니다. 알림 페이지에서 정책 만들기 를 클릭합니다. 측정항목을 선택하려면 측정항목 선택 메뉴를 확장한 후 다음을 수행합니다. 메뉴를 관련 항목으로 제한하려면 필터 표시줄에 Google Cloud TCP Load Balancer 또는 Google Cloud UDP Load Balancer 를 입력합니다. 메뉴를 필터링한 후 결과가 없으면 활성 리소스 및 측정항목만 표시 전환을 중지합니다. 리소스 유형 에 Google Cloud TCP 부하 분산기 또는 Google Cloud UDP 부하 분산기 를 선택합니다. 측정항목 카테고리 와 측정항목 을 선택한 후 적용 을 선택합니다. 다음 을 클릭합니다. 알림 트리거 구성 페이지의 설정에 따라 알림이 트리거되는 시점이 결정됩니다. 조건 유형을 선택하고 필요한 경우 기준점을 지정합니다. 자세한 내용은 측정항목 기준점 알림 정책 만들기 를 참조하세요. 다음 을 클릭합니다. (선택사항) 알림 정책에 알림을 추가하려면 알림 채널 을 클릭합니다. 대화상자의 메뉴에서 하나 이상의 알림 채널을 선택한 다음 확인 을 클릭합니다. (선택사항) 이슈 자동 종료 기간 을 업데이트합니다. 이 필드는 측정항목 데이터가 없어 Monitoring에서 이슈를 닫을 시간을 결정합니다. (선택사항) 문서 를 클릭한 후 알림 메시지에 포함할 정보를 추가합니다. 알림 이름 을 클릭하고 알림 정책 이름을 입력합니다. 정책 만들기 를 클릭합니다. 자세한 내용은 알림 개요 를 참조하세요. 내부 패스 스루 네트워크 부하 분산기 측정항목 다음은 Monitoring에 보고되는 내부 패스 스루 네트워크 부하 분산기의 측정항목입니다. 측정항목 metric_name 설명 수신 처리량 loadbalancing.googleapis.com/l3/internal/ingress_bytes_count 클라이언트에서 내부 패스 스루 네트워크 부하 분산기 백엔드로 전송된 바이트 수입니다.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Load balancer type Access type Region Classic proxy Network Load Balancer Network (Proxy classic) External Global external proxy Network Load Balancer Network (Proxy) External Regional external proxy Network Load Balancer Network (Proxy) External Specifies a region gcloud Use the gcloud compute forwarding-rules describe command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Load balancer mode Load balancing scheme Forwarding rule Network tier Classic proxy Network Load Balancer EXTERNAL Global Standard or Premium Global external proxy Network Load Balancer EXTERNAL MANAGED Global Premium Regional external proxy Network Load Balancer EXTERNAL MANAGED Regional Standard or Premium Important: After you create a load balancer, you can't edit its mode.
- Load balancer mode Network Service Tier Forwarding rule, IP address, and load balancing scheme Routing from the internet to the load balancer frontend Classic proxy Network Load Balancer Premium Tier Global external forwarding rule Global external IP address Load balancing scheme: EXTERNAL Requests routed to the GFEs that are closest to the client on the internet.
- How connections are distributed A global external proxy Network Load Balancer can be configured as a global load balancing service with Premium Tier The balancing mode and choice of target determine backend fullness from the perspective of each zonal GCE VM IP PORT NEG, or zonal instance group.

