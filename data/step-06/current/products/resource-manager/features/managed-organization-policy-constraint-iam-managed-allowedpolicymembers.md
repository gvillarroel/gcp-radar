---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.060Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Managed organization policy constraint iam.managed.allowedPolicyMembers"
feature_slug: "managed-organization-policy-constraint-iam-managed-allowedpolicymembers"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
keywords:
  - "managed"
  - "organization"
  - "policy"
  - "constraint"
  - "iam"
  - "allowedpolicymembers"
  - "implements"
  - "domain"
---

# Managed organization policy constraint iam.managed.allowedPolicyMembers

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This managed organization policy constraint implements domain restricted sharing by controlling allowed policy members.

## Extended Definition

This managed organization policy constraint implements domain restricted sharing by controlling allowed policy members.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)

## Supporting Pages

### Organization policy constraints | Organization Policy | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- Source ID: `feature-recovery-http`
- Final score: 356
- Re-rank relevance: N/A

Evidence snippets:
- The following organization policy constraints have a Google-managed default behavior that restricts operations: Organization policy constraint Constraint type constraints/appengine.runtimeDeploymentExemption Managed (legacy) constraints/cloudbuild.disableCreateDefaultServiceAccount Managed (legacy) constraints/cloudbuild.useBuildServiceAccount Managed (legacy) constraints/cloudbuild.useComputeServiceAccount Managed (legacy) constraints/commerceorggovernance.marketplaceServices Managed (legacy) constraints/compute.managed.blockPreviewFeatures Managed constraints/compute.sharedReservationsOwnerProjects Managed (legacy) constraints/container.managed.autopilotPrivilegedAdmission Managed constraints/iam.allowServiceAccountCredentialLifetimeExtension Managed (legacy) constraints/iam.disableCrossProjectServiceAccountUsage Managed (legacy) constraints/iam.managed.disableServiceAccountApiKeyCreation Managed constraints/iam.serviceAccountKeyExposureResponse Managed (legacy) constraints/resourcemanager.allowedExportDestinations Managed (legacy) constraints/resourcemanager.allowedImportSources Managed (legacy) constraints/resourcemanager.allowEnabledServicesForExport Managed (legacy) constraints/vertexai.allowedPartnerModelFeatures Managed (legacy) Available constraints You can create organization policies using the following constraints.
- Enforcing this constraint can block folder resource creation due to automatic Folder Admin and Folder Editor role grants, and can block project resource creation due to automatic Owner role grants. constraints/iam.managed.allowedPolicyMembers Identity and Access Management Block service account API key bindings When enforced, disables creation of API Keys bound to service accounts, unless the API Key's API targets are non-empty and exclusively limited to the allowedServices.
- This constraint is managed by Google. constraints/iam.managed.workloadIdentityPoolProviders Google Cloud Managed Service for Apache Kafka Disable Kafka Connect Cluster Create And Update When this boolean constraint is enforced, creating andupdating Kafka Connect clusters will be disabled. constraints/managedkafka.managed.disableKafkaConnectClusterCreateAndUpdate Pub/Sub Disables Subscription Single Message Transforms (SMTs) Do not configure or modify this policy.
- To learn which roles to grant to each service account, see https://cloud.google.com/iam/help/service-accounts/troubleshoot-roles-default. constraints/iam.managed.preventPrivilegedBasicRolesForDefaultServiceAccounts Identity and Access Management Allowed AWS accounts that can be configured for workload identity federation in Cloud IAM List of AWS account IDs that can be configured for workload identity federation in Cloud IAM. constraints/iam.managed.workloadIdentityPoolAwsAccounts Identity and Access Management Allowed external Identity Providers for workloads in Cloud IAM Identity Providers that can be configured for workload authentication within Cloud IAM, specified by URI/URLs.

### 도메인별 ID 제한 | Resource Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains)
- Source ID: `feature-recovery-http`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace 고객 ID는 id 입니다. 도메인으로 제한된 공유의 예외 구성 일부 Google Cloud 서비스는 서비스 계정, 서비스 에이전트, 기타 계정을 사용하여 사용자를 대신하여 작업을 실행합니다. 도메인 제한 공유로 인해 이러한 계정에 필요한 IAM 역할이 자동으로 부여되지 않아 특정 작업이 실패할 수 있습니다. 다음 표에는 도메인 제한 공유의 영향을 받을 수 있는 Google Cloud 작업이 나와 있습니다. 또한 이러한 작업이 성공하려면 역할이 자동으로 부여되어야 하는 계정도 나열됩니다. 맞춤 조직 정책 또는 iam.managed.allowedPolicyMembers 관리 제약 조건을 사용하여 도메인 제한 공유를 구현하는 경우 이러한 계정을 도메인 제한 공유 제약 조건의 예외로 추가하는 것이 좋습니다. 계정을 예외로 추가하려면 허용된 구성원 목록에 계정의 주 구성원 식별자를 추가합니다. iam.allowedPolicyMemberDomains 기존 관리 제약 조건을 사용하여 도메인 제한 공유를 구현하는 경우 이러한 계정이 나열된 작업을 수행하려면 계정 액세스를 강제 해야 할 수 있습니다. 작업 주 구성원 식별자 결제 계정에 BigQuery 로그 싱크 사용 설정 serviceAccount:b UNIQUE_ID @gcp-sa-logging.iam.gserviceaccount.com 스토리지 액세스 로깅 사용 설정 serviceAccount:cloud-storage-analytics@google.com Pub/Sub를 Google Chat 앱의 엔드포인트로 사용 serviceAccount:chat-api-push@system.gserviceaccount.com Pub/Sub를 사용하여 Google Play에서 실시간 개발자 알림 수신 serviceAccount:google-play-developer-notifications@system.gserviceaccount.com Cloud CDN으로 서명된 URL 사용 serviceAccount:service- PROJECT_NUMBER @cloud-cdn-fill.iam.gserviceaccount.com Cloud CDN을 사용한 비공개 원본 인증 serviceAccount:service- PROJECT_NUMBER @https-lb.iam.gserviceaccount.com Cloud Run 공개 서비스 Cloud Run을 사용하면 서비스를 공개 할 수 있습니다. 하지만 도메인 제한 공유를 구현하면 조직 외부 사용자가 공개 Cloud Run 서비스에 액세스할 수 없습니다. 사용자가 공개 Cloud Run 서비스에 액세스하도록 허용하려면 Cloud Run 서비스의 Cloud Run 호출자 IAM 검사를 사용 중지해야 합니다. 자세한 내용은 서비스의 Cloud Run 호출자 사용 중지 를 참고하세요. 기타 데이터를 공개적으로 공유 맞춤 조직 정책 을 사용하여 도메인 제한 공유를 구현하는 경우 조직 정책에 예외를 추가하여 공개 데이터 공유를 허용할 수 있습니다. 데이터를 공개적으로 공유하려면 특수 주 구성원인 allUsers 및 allAuthenticatedUsers 이 필요합니다. 도메인 제한 공유를 사용하는 동안 데이터를 공개적으로 공유해야 하는 경우 이러한 주체에 대한 예외를 추가해야 합니다. 예외 추가는 도메인 제한 공유를 구현하기 위해 맞춤 조직 정책을 사용하는 경우에만 가능합니다. allUsers 및 allAuthenticatedUsers 에 대한 예외를 추가하려면 리소스 태그 를 기반으로 조건부 커스텀 조직 정책을 만드세요. 조직 리소스에 태그 키를 만듭니다. gcloud resource-manager tags keys create allUsersIngress \ --parent = organizations/ ORGANIZATION_ID ORGANIZATION_ID 를 조직 ID 로 바꿉니다. 만든 태그 키의 태그 값을 만듭니다. gcloud resource-manager tags values create True \ --parent = ORGANIZATION_ID /allUsersIngress \ --description = "Allow allUsers to access internal Cloud Run services" 공개적으로 공유하려는 리소스에 태그를 연결 합니다. 제약 조건의 조건 표현식에서 memberSubjectMatches CEL 함수를 사용하여 커스텀 제약 조건을 만듭니다. 예를 들어 다음 조건 표현식은 조직의 구성원, allUsers , allAuthenticatedUsers 에 대한 역할 부여를 제한합니다. name : organizations/ ORGANIZATION_ID /customConstraints/custom.allowInternalAndSpecialIdentitiesOnly resourceTypes : iam.googleapis.com/AllowPolicy methodTypes : - CREATE - UPDATE condition : "resource.bindings.all( binding, binding.members.all(member, ( MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/ ORG_ID ']) || MemberSubjectMatches(member, ['allUsers', 'allAuthenticatedUsers']) ) ) )" actionType : ALLOW displayName : Only allow organization members, allusers, and allAuthenticatedUsers to be granted roles 커스텀 제약조건을 시행하는 조직 정책을 만듭니다. name : organizations/ ORGANIZATION_ID /policies/iam.allowedPolicyMemberDomains spec : rules : - allowAll : true condition : expression : resource.matchTag(" ORGANIZATION_ID /allUsersIngress", "True") title : allowAllUsersIngress 조직 정책을 적용합니다. gcloud org-policies set-policy POLICY_PATH POLICY_PATH 을 조직 정책의 경로와 파일 이름으로 바꿉니다. 조건부 조직 정책을 사용하면 allUsersIngress: true 태그가 지정된 리소스에 대한 allUsers ID에 권한을 부여할 수 있습니다. 계정 액세스 강제 적용 도메인 제약조건을 위반하여 프로젝트에 대한 계정 액세스를 강제로 적용해야 하는 경우 다음 방법을 사용하세요. 도메인 제한 제약조건을 포함하는 조직 정책을 삭제합니다. 프로젝트에 대한 액세스 권한을 계정에 부여합니다. 도메인 제한 제약조건으로 조직 정책을 다시 구현합니다. 또는 관련 서비스 계정이 포함된 Google 그룹에 대한 액세스 권한을 부여할 수 있습니다. 허용 도메인 내에 Google 그룹을 만듭니다.
- 도메인별 ID 제한 | Resource Manager | Google Cloud Documentation 기본 콘텐츠로 건너뛰기 기술 영역 close AI 및 ML 애플리케이션 개발 애플리케이션 호스팅 컴퓨팅 데이터 분석 및 파이프라인 데이터베이스 분산, 하이브리드, 멀티 클라우드 업종별 솔루션 이전 네트워킹 모니터링 가능성 및 모니터링 보안 Storage 크로스 프로덕트 도구 close 액세스 및 리소스 관리 비용 및 사용량 관리 코드형 인프라 SDK, 언어, 프레임워크, 도구 / 콘솔 English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 로그인 Resource Manager 무료로 시작하기 기술 영역 더보기 크로스 프로덕트 도구 더보기 콘솔 AI 및 ML 애플리케이션 개발 애플리케이션 호스팅 컴퓨팅 데이터 분석 및 파이프라인 데이터베이스 분산, 하이브리드, 멀티 클라우드 업종별 솔루션 이전 네트워킹 모니터링 가능성 및 모니터링 보안 Storage 액세스 및 리소스 관리 비용 및 사용량 관리 코드형 인프라 SDK, 언어, 프레임워크, 도구 Home Documentation Security Resource Manager 의견 보내기 도메인별 ID 제한 컬렉션을 사용해 정리하기 내 환경설정을 기준으로 콘텐츠를 저장하고 분류하세요. 도메인 제한 공유를 사용하면 도메인 또는 조직 리소스를 기반으로 리소스 공유를 제한할 수 있습니다. 도메인 제한 공유가 활성화된 경우 허용된 도메인 또는 조직에 속한 주 구성원에게만 Google Cloud 조직에서 IAM 역할을 부여할 수 있습니다. 참고 : 2024년 5월 3일 또는 그 이후에 조직을 만든 경우 iam.allowedPolicyMemberDomains 기존 관리 제약 조건이 기본적으로 적용되며 도메인이 유일하게 허용되는 값으로 표시됩니다. 도메인별로 ID를 제한하는 데 사용할 수 있는 조직 정책에는 세 가지 유형이 있습니다. iam.managed.allowedPolicyMembers 관리형 제약 조건 iam.googleapis.com/AllowPolicy 리소스를 참조하는 커스텀 조직 정책 iam.allowedPolicyMemberDomains 기존 관리형 제약 조건 시작하기 전에 도메인 제한 공유를 구현하는 데 사용할 방법을 선택합니다. 각 방법의 장단점에 대해 자세히 알아보려면 도메인별 공유 제한 방법 을 참고하세요. 필요한 역할 도메인 제한 공유를 적용하는 데 필요한 권한을 얻으려면 관리자에게 조직에 대한 조직 정책 관리자 ( roles/orgpolicy.policyAdmin ) IAM 역할을 부여해 달라고 요청하세요. 역할 부여에 대한 자세한 내용은 프로젝트, 폴더, 조직에 대한 액세스 관리 를 참조하세요. 커스텀 역할 이나 다른 사전 정의된 역할 을 통해 필요한 권한을 얻을 수도 있습니다. iam.managed.allowedPolicyMembers 제약 조건을 사용하여 도메인 제한 공유 구현 콘솔 Google Cloud 콘솔에서 조직 정책 페이지로 이동합니다. 조직 정책으로 이동 프로젝트 선택 도구에서 조직 정책을 수정하려는 프로젝트, 폴더, 조직을 선택합니다. 표시되는 조직 정책 페이지에 이 리소스에 사용 가능한 조직 정책 제약조건의 필터링 가능한 목록이 표시됩니다. 목록에서 IAM 허용 정책에서 허용된 정책 구성원 제한 관리 제약 조건을 선택합니다. 정책 세부정보 페이지에서 정책 관리 를 클릭합니다. 정책 수정 페이지에서 상위 정책 재정의 를 선택합니다. 규칙 추가 를 선택한 다음 조직 정책 규칙을 업데이트합니다. 시행 에서 사용 을 선택합니다. 필요에 따라 태그로 조직 정책을 조건부로 만들려면 조건 추가 를 클릭합니다. 조건부 규칙을 조직 정책에 추가하는 경우 비조건부 규칙을 최소 하나 이상 추가해야 합니다. 그렇지 않으면 정책을 저장할 수 없습니다. 자세한 내용은 태그를 사용하여 조직 정책 설정 을 참조하세요. 매개변수 섹션에서 조직에 역할을 부여할 구성원 및 주 구성원 집합을 구성한 다음 저장 을 클릭합니다. 선택적으로 조직 정책 변경사항이 적용되기 전에 그 효과를 미리 보려면 변경사항 테스트 를 클릭합니다. 조직 정책 변경사항 테스트에 대한 자세한 내용은 정책 시뮬레이터로 조직 정책 변경사항 테스트 를 참고하세요. 테스트 실행 모드의 조직 정책을 적용하려면 테스트 실행 정책 설정 을 클릭합니다. 자세한 내용은 테스트 실행 모드의 조직 정책 만들기 를 참조하세요. 테스트 실행 모드의 조직 정책이 의도한 대로 작동하는지 확인한 후 정책 설정 을 클릭하여 라이브 정책을 설정합니다. gcloud 조직 정책을 정의하는 YAML 파일을 만듭니다. name : organizations/ ORG_ID /policies/iam.managed.allowedPolicyMembers spec : rules : - enforce : true parameters : allowedMemberSubjects : - ALLOWED_MEMBER_1 - ALLOWED_MEMBER_2 allowedPrincipalSets : - ALLOWED_PRINCIPAL_SET_1 - ALLOWED_PRINCIPAL_SET_2 다음을 바꿉니다.
- ALLOWED_PRINCIPAL_SET_1 , ALLOWED_PRINCIPAL_SET_2 : 조직에서 역할을 부여할 주 구성원 집합입니다. 예를 들면 //cloudresourcemanager.googleapis.com/organizations/0123456789012 입니다. 필요에 따라 태그에 따라 조직 정책을 조건부로 설정하려면 condition 블록을 rules 에 추가합니다. 조건부 규칙을 조직 정책에 추가하는 경우 비조건부 규칙을 최소 하나 이상 추가해야 합니다. 그렇지 않으면 정책을 저장할 수 없습니다. 자세한 내용은 태그를 사용하여 조직 정책 설정 을 참조하세요. 정책을 적용하기 전에 테스트 실행 모드에서 정책을 테스트하는 방법을 알아보려면 테스트 실행 모드의 조직 정책 만들기 를 참고하세요. 정책을 적용하기 전에 시뮬레이션하는 방법을 알아보려면 정책 시뮬레이터로 조직 정책 변경사항 테스트 를 참고하세요. 커스텀 조직 정책을 사용하여 도메인 제한 공유 구현 조직에서 역할을 부여받을 수 있는 주 구성원을 제한하는 커스텀 제약조건을 만듭니다. 조직 구성원에게만 역할 부여를 제한하도록 조직 주 구성원이 설정된 memberInPrincipalSet CEL 함수 를 사용합니다. 조직 ID를 찾는 방법은 조직 주 구성원 집합 가져오기 를 참고하세요. 예를 들어 다음 제약 조건은 조직의 구성원에게만 역할 부여를 제한합니다. name : organizations/ ORG_ID /customConstraints/custom.allowInternalIdentitiesOnly resourceTypes : iam.googleapis.com/AllowPolicy methodTypes : - CREATE - UPDATE condition : "resource.bindings.all( binding, binding.members.all(member, MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/ ORG_ID ']) ) )" actionType : ALLOW displayName : Only allow organization members to be granted roles 원하는 경우 논리 연산자 ( && , || , ! )로 결합된 추가 CEL 함수를 추가하여 제약 조건을 구체화합니다. 다음 함수를 추가할 수 있습니다. memberInPrincipalSet memberTypeMatches memberSubjectMatches 예를 들어 다음 제약 조건은 역할 부여를 조직의 구성원과 admin@example.com 로 제한합니다. name : organizations/ ORG_ID /customConstraints/custom.allowInternalIdentitiesOnly resourceTypes : iam.googleapis.com/AllowPolicy methodTypes : - CREATE - UPDATE condition : "resource.bindings.all( binding, binding.members.all(member, ( MemberInPrincipalSet(member, ['//cloudresourcemanager.googleapis.com/organizations/ ORG_ID ']) || MemberSubjectMatches(member, ['user:admin@example.com']) ) ) )" actionType : ALLOW displayName : Only allow organization members and service agents to be granted roles 커스텀 제약조건을 설정합니다. 콘솔 커스텀 제약 조건을 만들려면 다음을 수행합니다.
- PROJECT_ID : 제약 조건을 적용할 프로젝트 CONSTRAINT_NAME : 커스텀 제약 조건에 정의한 이름. 예를 들면 custom.allowInternalIdentitiesOnly 입니다. 테스트 실행 모드 의 조직 정책을 적용하려면 dryRunSpec 플래그와 함께 다음 명령어를 실행합니다. gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec POLICY_PATH 를 조직 정책 YAML 파일의 전체 경로로 바꿉니다. 정책이 적용되는 데 최대 15분이 소요됩니다. 테스트 실행 모드의 조직 정책이 의도한 대로 작동하는지 확인한 후 org-policies set-policy 명령어와 spec 플래그를 사용하여 실시간 정책을 설정합니다. gcloud org-policies set-policy POLICY_PATH --update-mask = spec POLICY_PATH 를 조직 정책 YAML 파일의 전체 경로로 바꿉니다. 정책이 적용되는 데 최대 15분이 소요됩니다. iam.allowedPolicyMemberDomains 제약 조건을 사용하여 도메인 제한 공유 구현 도메인 제한 제약조건은 목록 constraint_type 이 있는 기존 관리 제약조건입니다. 도메인 제한 제약 조건의 allowed_values 목록에 조직 주 구성원 세트 또는 Google Workspace 고객 ID를 지정할 수 있습니다. 자세한 내용은 조직 주 구성원 집합과 Google Workspace 고객 ID 비교 를 참고하세요. 조직 주 구성원 세트와 Google Workspace ID는 자동으로 허용되지 않습니다. 조직의 주 구성원이 조직의 리소스에 액세스하도록 허용하려면 조직 주 구성원 집합 또는 Google Workspace ID가 허용된 주 구성원 집합으로 포함되어야 합니다. 도메인 제한 제약조건은 값 거부를 지원하지 않으며 조직 정책을 denied_values 목록에 ID로 저장할 수 없습니다. 지원되는 리소스 목록 에 포함된 모든 리소스에 도메인 제한 제약조건을 조건부로 적용하는 조직 정책을 만들 수 있습니다. 예를 들면 Cloud Storage 버킷, BigQuery 데이터 세트 또는 Compute Engine VM입니다. 콘솔 도메인 제한 제약조건을 포함하여 조직 정책을 설정하려면 다음을 수행합니다.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Disable service account key upload constraints/iam.managed.disableServiceAccountKeyUpload Prevent the upload of external public keys to service accounts.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- Restrict identities by domain constraints/iam.allowedPolicyMemberDomains Limit resource sharing to identities that belong to a particular organization resource or Google Workspace customer ID.

