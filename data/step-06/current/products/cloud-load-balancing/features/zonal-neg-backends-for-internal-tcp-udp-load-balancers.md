---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.788Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Zonal NEG backends for internal TCP/UDP load balancers"
feature_slug: "zonal-neg-backends-for-internal-tcp-udp-load-balancers"
latest_feature_date: "2021-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg"
  - "https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring"
keywords:
  - "zonal"
  - "neg"
  - "backends"
  - "internal"
  - "tcp"
  - "udp"
  - "load"
  - "balancers"
---

# Zonal NEG backends for internal TCP/UDP load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP load balancers can use zonal network endpoint groups with GCE_VM_IP endpoints as backends.

## Extended Definition

Internal TCP/UDP load balancers can use zonal network endpoint groups with GCE_VM_IP endpoints as backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg)
- [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring)

## Supporting Pages

### Internal passthrough Network Load Balancer overview | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `feature-recovery-http`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Zonal NEG backends and network interfaces When you create a new zonal NEG with GCE_VM_IP endpoints, you must explicitly associate the NEG with a subnetwork of a VPC network before you can add any endpoints to the NEG.
- Backends are either instance groups or zonal NEGs with GCE_VM_IP endpoints located in the same region as the backend service and forwarding rule.
- To distribute load-balanced traffic to a non- nic0 network interface, we recommend you use zonal NEGs with GCE_VM_IP endpoints.
- When adding zonal NEG backends with GCE_VM_IP endpoints, the NEG's VPC network must match the backend service's VPC network.

### Configurar um balanceador de carga de rede de passagem interna com NEGs zonais | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg)
- Source ID: `feature-recovery-http`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- O conteúdo do script é o mesmo para as quatro VMs. [VM-NAME] de vm-a1 e [ZONE] de us-west1-a [VM-NAME] de vm-a2 e [ZONE] de us-west1-a [VM-NAME] de vm-c1 e [ZONE] de us-west1-c [VM-NAME] de vm-c2 e [ZONE] de us-west1-c gcloud compute instances create VM-NAME \ --zone= ZONE \ --image-family=debian-12 \ --image-project=debian-cloud \ --tags=allow-ssh,allow-health-check \ --subnet=lb-subnet \ --metadata=startup-script='#! /bin/bash if [ -f /etc/startup_script_completed ]; then exit 0 fi apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl file_ports="/etc/apache2/ports.conf" file_http_site="/etc/apache2/sites-available/000-default.conf" file_https_site="/etc/apache2/sites-available/default-ssl.conf" http_listen_prts="Listen 80\nListen 8008\nListen 8080\nListen 8088" http_vh_prts="*:80 *:8008 *:8080 *:8088" https_listen_prts="Listen 443\nListen 8443" https_vh_prts="*:443 *:8443" vm_hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" echo "Page served from: $vm_hostname" | \ tee /var/www/html/index.html prt_conf="$(cat "$file_ports")" prt_conf_2="$(echo "$prt_conf" | sed "s|Listen 80|${http_listen_prts}|")" prt_conf="$(echo "$prt_conf_2" | sed "s|Listen 443|${https_listen_prts}|")" echo "$prt_conf" | tee "$file_ports" http_site_conf="$(cat "$file_http_site")" http_site_conf_2="$(echo "$http_site_conf" | sed "s|*:80|${http_vh_prts}|")" echo "$http_site_conf_2" | tee "$file_http_site" https_site_conf="$(cat "$file_https_site")" https_site_conf_2="$(echo "$https_site_conf" | sed "s|_default_:443|${https_vh_prts}|")" echo "$https_site_conf_2" | tee "$file_https_site" systemctl restart apache2 touch /etc/startup_script_completed' Criar GCE_VM_IP NEGs zonais Os NEGs ( neg-a e neg-c ) precisam ser criados nas mesmas zonas que as VMs criadas na etapa anterior.
- Clique em Criar . gcloud Crie um NEG zonal GCE_VM_IP chamado neg-a em us-west1-a usando o comando gcloud compute network-endpoint-groups create : gcloud compute network-endpoint-groups create neg-a \ --network-endpoint-type=gce-vm-ip \ --zone=us-west1-a \ --network=lb-network \ --subnet=lb-subnet Adicione endpoints a neg-a : gcloud compute network-endpoint-groups update neg-a \ --zone=us-west1-a \ --add-endpoint='instance=vm-a1' \ --add-endpoint='instance=vm-a2' Crie um NEG zonal GCE_VM_IP chamado neg-c em us-west1-c usando o comando gcloud compute network-endpoint-groups create : gcloud compute network-endpoint-groups create neg-c \ --network-endpoint-type=gce-vm-ip \ --zone=us-west1-c \ --network=lb-network \ --subnet=lb-subnet Adicione endpoints a neg-c : gcloud compute network-endpoint-groups update neg-c \ --zone=us-west1-c \ --add-endpoint='instance=vm-c1' \ --add-endpoint='instance=vm-c2' Configurar componentes do balanceador de carga Estas etapas configuram todos os componentes do balanceador de carga de rede de passagem interna : Serviço de back-end : para este exemplo, você precisa transmitir o tráfego HTTP por meio do balanceador de carga.
- Permissões Para seguir este guia, você precisa criar instâncias e modificar uma rede em um projeto. É necessário ser proprietário ou editor de um projeto ou ter todos os seguintes papéis de IAM do Compute Engine : Tarefa Papel necessário Criar componentes do balanceador de carga, sub-redes e redes Administrador de rede Adicionar e remover regras de firewall Administrador de segurança Criar instâncias Administrador da instância da computação Para mais informações, consulte estes guias: Controle de acesso Condições do IAM Visão geral da configuração Neste guia, mostramos como configurar e testar um balanceador de carga de rede de passagem interna com back-ends de NEG zonal GCE_VM_IP .
- Antes de seguir as instruções deste guia, familiarize-se com os itens abaixo: Visão geral do balanceador de carga de rede de passagem interna Visão geral do NEG por zona Os balanceadores de carga de rede de passagem interna são compatíveis apenas com NEGs zonais com endpoints GCE_VM_IP .

### 내부 패스 스루 네트워크 부하 분산기 로깅 및 모니터링 | Cloud Load Balancing | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring)
- Source ID: `feature-recovery-http`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT_ID 를 프로젝트 ID로, BACKEND_SERVICE_NAME 을 백엔드 서비스 이름으로 바꿉니다. resource.type="loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule" logName="projects/ PROJECT_ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend_service_name=" BACKEND_SERVICE_NAME " 쿼리 실행 을 클릭합니다. 백엔드 인스턴스 그룹 로그 보기 엔드포인트가 GCE_VM_IP 인 특정 백엔드 인스턴스 그룹 또는 네트워크 엔드포인트 그룹(NEG)의 내부 패스 스루 네트워크 부하 분산기 로그를 보려면 다음 단계를 따르세요. 콘솔 쿼리 Google Cloud 콘솔에서 로그 탐색기 페이지로 이동합니다. 로그 탐색기로 이동 쿼리 표시 전환을 클릭합니다. 다음을 쿼리 필드에 붙여넣습니다.
- TCP 트래픽에서만 지원됩니다. 내부 패스 스루 네트워크 부하 분산기 측정항목용 필터링 측정기준 측정항목은 내부 패스 스루 네트워크 부하 분산기별로 집계됩니다. 집계된 측정항목은 다음과 같은 측정기준에 따라 세분화할 수 있습니다. 속성 설명 백엔드 이름 엔드포인트가 GCE_VM_IP 인 인스턴스 그룹 또는 네트워크 엔드포인트 그룹(NEG)의 이름입니다. 백엔드 범위 연결을 수신한 백엔드의 범위( 리전 또는 영역 )입니다. 백엔드 영역 영역 인스턴스 그룹 및 네트워크 엔드포인트 그룹의 경우 연결을 제공한 백엔드의 영역 입니다. 클라이언트 네트워크 내부 패스 스루 네트워크 부하 분산기에 연결된 클라이언트 인스턴스의 네트워크입니다. 클라이언트 서브네트워크 내부 패스 스루 네트워크 부하 분산기에 연결된 클라이언트 인스턴스의 서브네트워크입니다. 클라이언트 영역 전달 규칙에 연결된 인스턴스의 Google Cloud 영역 입니다. 전달 규칙 내부 패스 스루 네트워크 부하 분산기의 전달 규칙 이름입니다. 측정항목 보고 빈도 및 보관 내부 패스 스루 네트워크 부하 분산기의 측정항목은 1분 단위로 일괄적으로 Monitoring으로 내보내집니다. 모니터링 데이터는 6주간 보관됩니다. 측정항목은 샘플링된 트래픽을 기반으로 합니다. 샘플링 레이트는 동적이며 조정할 수 없습니다. 대시보드는 1시간(1H), 6시간(6H), 1일(1D), 1주(1W), 6주(6W)의 기본 주기로 데이터 분석을 제공합니다.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /backendServices 모든 선택적인 필드 제외 { "name": " BACKEND_SERVICE ", "loadBalancingScheme": "INTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE_RATE , "optionalMode": "EXCLUDE_ALL_OPTIONAL" } } 모든 선택적인 필드 포함 { "name": " BACKEND_SERVICE ", "loadBalancingScheme": "INTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE_RATE , "optionalMode": "INCLUDE_ALL_OPTIONAL" } } 선택적 필드의 커스텀 목록 포함 { "name": " BACKEND_SERVICE ", "loadBalancingScheme": "INTERNAL", "logConfig": { "enable": true, "sampleRate": SAMPLE_RATE , "optionalMode": "CUSTOM", "optionalFields": ["field1","field2",...] } } 기존 백엔드 서비스에 로깅 사용 설정 콘솔 Google Cloud 콘솔에서 부하 분산 페이지로 이동합니다. 부하 분산으로 이동 부하 분산기의 이름을 클릭합니다. edit 수정 을 클릭한 다음 백엔드 구성 을 클릭합니다. 백엔드 서비스 옆에 있는 edit 수정 을 클릭합니다. 로깅 사용 설정 을 클릭합니다. 샘플링 레이트 비율을 설정합니다. 비율을 0.0 ~ 1.0 (기본값)으로 설정할 수 있습니다. 선택사항: 로그에 모든 선택적 필드를 포함하려면 선택적 필드 섹션에서 모든 선택적 필드 포함 을 클릭하세요. 고급 기능 팁: 커스텀 옵션을 지정하려면 gcloud CLI 및 REST API를 사용하세요. 백엔드 서비스 수정을 완료하려면 업데이트 를 클릭합니다. 부하 분산기 수정을 완료하려면 업데이트 를 클릭합니다. gcloud gcloud compute backend-services update 명령어 를 사용하여 기존 백엔드 서비스에 로깅을 사용 설정하세요. gcloud compute backend-services update BACKEND_SERVICE \ --region= REGION \ --enable-logging \ --logging-sample-rate= SAMPLE_RATE \ --logging-optional= LOGGING_OPTIONAL \ --logging-optional-fields= OPTIONAL_FIELDS 다음을 바꿉니다.
- PROJECT_ID 를 프로젝트 ID로, BACKEND_GROUP_NAME 을 인스턴스 그룹 또는 NEG의 이름으로 바꿉니다. resource.type="loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule" logName="projects/ PROJECT_ID /logs/loadbalancing.googleapis.com%2Fflows" resource.labels.backend_group_name=" BACKEND_GROUP_NAME " 쿼리 실행 을 클릭합니다. 로그 필드 로그 레코드에는 모든 로그 레코드의 기본 필드인 필수 필드와 추가 정보를 추가하는 선택적 필드가 있습니다. 선택적 필드를 생략하여 스토리지 비용을 절감할 수 있습니다. 일부 로그 필드는 한 필드에 두 가지 이상의 데이터를 포함하는 다중 필드 형식입니다. 예를 들어 connection 필드는 IpConnection 형식이며 소스 및 대상 IP 주소, 포트, 프로토콜이 단일 필드에 포함됩니다. 이러한 다중 필드 형식의 필드는 다음 레코드 형식 표에 설명되어 있습니다. 모니터링 리소스는 loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule 입니다. 필드 필드 형식 필드 유형: 필수 또는 선택적 설명 연결 IpConnection 필수 이 연결을 설명하는 5-튜플. startTime 문자열 필수 집계된 시간 간격 동안 처음 관찰된 패킷의 타임스탬프(RFC 3339 날짜 문자열 형식) endTime 문자열 필수 집계된 시간 간격 동안 마지막으로 관찰된 패킷의 타임스탬프(RFC 3339 날짜 문자열 형식) bytesSent 문자열 필수 서버에서 클라이언트로 보낸 바이트 수입니다. bytesReceived int64 필수 클라이언트로부터 서버가 수신한 바이트 수입니다. packetsSent int64 필수 서버에서 클라이언트로 보낸 패킷 수입니다. packetsReceived int64 필수 클라이언트로부터 서버에서 수신한 패킷 수입니다. rtt 문자열 필수 지연 시간은 TCP 연결에 대해서만 측정됩니다. 지연 시간은 예상 네트워크 왕복 시간(RTT)과 클라이언트의 VM 운영체제 내의 패킷을 처리하는 데 소요된 시간의 합계입니다. 샘플링된 패킷의 경우 RTT는 TCP 세그먼트를 전송하는 백엔드와 전송된 세그먼트의 시퀀스 번호에 대한 TCP 확인을 수신하는 백엔드 간의 시간 차이를 측정하여 부하 분산된 백엔드의 관점에서 계산됩니다. 지연 시간은 숫자(초)로 시작하고 초를 나타내기 위해 's'로 끝나는 문자열로 형식이 지정됩니다. 나노초는 소수점 이하 초로 표현됩니다. 예를 들어 지연 시간 250밀리초는 '0.250000000s'로 지정됩니다. clientInstance InstanceDetails 선택사항 클라이언트의 VM 인스턴스 세부정보입니다. 클라이언트의 VM 인스턴스가 동일한 프로젝트에 있는 경우에만 사용할 수 있습니다. serverInstance InstanceDetails 선택사항 백엔드 VM의 VM 인스턴스 세부정보입니다. clientVpc VpcDetails 선택사항 클라이언트의 VPC 네트워크 세부정보입니다. 클라이언트가 동일한 프로젝트에 있는 VPC 네트워크 내의 엔드포인트인 경우에만 사용할 수 있습니다. clientGkeDetails GkeDetails 선택사항 클라이언트의 GKE 메타데이터입니다. 클라이언트가 동일한 프로젝트의 GKE 엔드포인트인 경우에만 사용할 수 있습니다. serverGkeDetails GkeDetails 선택사항 서버 백엔드의 GKE 메타데이터입니다. 백엔드가 GKE 엔드포인트인 경우에만 사용할 수 있습니다.

