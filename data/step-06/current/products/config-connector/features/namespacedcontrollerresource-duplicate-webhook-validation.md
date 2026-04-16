---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.042Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "NamespacedControllerResource duplicate webhook validation"
feature_slug: "namespacedcontrollerresource-duplicate-webhook-validation"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
keywords:
  - "namespacedcontrollerresource"
  - "duplicate"
  - "webhooks"
  - "validation"
  - "webhook"
  - "added"
---

# NamespacedControllerResource duplicate webhook validation

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added validation for duplicate webhooks in the spec.webhooks list of customizable NamespacedControllerResource CRDs.

## Extended Definition

Config Connector added validation for duplicate webhooks in the spec.webhooks list of customizable NamespacedControllerResource CRDs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)

## Supporting Pages

### Configure container resources and replicas | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `feature-recovery-direct-http`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .
- Configure container resources and replicas | Config Connector | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Config Connector Start free Overview Guides API and reference Resources Technology areas More Overview Guides API and reference Resources Cross-product tools More Console Discover Product overview Get started Install Choose an installation type Install Config Connector manually Install Config Controller Install Config Connector with the GKE add-on Install v1alpha1 CRDs Quickstart: Create and manage a Pub/Sub topic Configure Set up namespaces and projects Overview Configure your kubectl client Organize your resources Overview Project-scoped resources Folder-scoped resources Organization-scoped resources Configure system parameters Configure container resources and replicas Configure webhook timeouts Configure the controller manager rate limit Manage Manage resources About Config Connector CRDs Create, acquire, and delete resources Manage resources with the resourceID field Create resource references Manage conflicts with multiple resources Reconcile resources Manage fields Manage fields externally Ignore unspecified fields Import and export Install the CLI tool Import and export resources Bulk import and export resources Secure and control access Access control with IAM Secure access to resources Use Secrets to store sensitive data Monitor Monitor your resources Monitor with Prometheus Best practices Best practices for Config Connector Troubleshoot Known issues Troubleshoot Config Connector AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Access and resource management Config Connector Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure timeout for validating webhooks You can configure the following validating webhooks: deny-immutable-field-updates.cnrm.cloud.google.com deny-unknown-fields.cnrm.cloud.google.com iam-validation.cnrm.cloud.google.com resource-validation.cnrm.cloud.google.com abandon-on-uninstall.cnrm.cloud.google.com For example, you can configure the timeout of validating webhooks deny-immutable-field-updates.cnrm.cloud.google.com and deny-unknown-fields.cnrm.cloud.google.com by creating and applying the following example YAML file.
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.

### Webhook タイムアウトを構成する | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `feature-recovery-direct-http`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Webhook タイムアウトを構成する | Config Connector | Google Cloud Documentation メイン コンテンツにスキップ テクノロジー分野 close AI と ML アプリケーション開発 アプリケーションのホスティング コンピューティング データ分析とパイプライン データベース 分散型クラウド、ハイブリッド クラウド、マルチクラウド 業種別ソリューション 移行 ネットワーキング オブザーバビリティとモニタリング セキュリティ Storage プロダクト横断型のツール close アクセスとリソースの管理 費用と使用量の管理 Infrastructure as code SDK、言語、フレームワーク、ツール / コンソール English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 ログイン Config Connector 無料で利用開始 概要 ガイド API とリファレンス リソース テクノロジー分野 その他 概要 ガイド API とリファレンス リソース プロダクト横断型のツール その他 コンソール Discover サービスの概要 使ってみる インストール インストール タイプを選択する Config Connector を手動でインストールする Config Controller をインストールする GKE アドオンを使用して Config Connector をインストールする v1alpha1 CRD をインストールする クイックスタート: Pub/Sub トピックの作成と管理 構成 名前空間とプロジェクトを設定する 概要 kubectl クライアントの構成 リソースを整理する 概要 プロジェクトを対象にしたリソース フォルダを対象にしたリソース 組織を対象にしたリソース システム パラメータを設定する コンテナ リソースとレプリカを構成する Webhook タイムアウトを構成する コントローラ マネージャーのレート制限を構成する 管理 リソースの管理 Config Connector CRD について リソースの作成、取得、削除を行う resourceID フィールドを使用してリソースを管理する リソース参照を作成する 複数のリソースとの競合を管理する リソースを調整する フィールドの管理 外部でのフィールドの管理 未指定のフィールドを無視する インポートとエクスポート CLI ツールをインストールする リソースをインポートおよびエクスポートする リソースを一括でインポートおよびエクスポートする アクセスを保護および制御する IAM によるアクセス制御 リソースへの安全なアクセス Secret を使用して機密データを保存する モニタリング リソースをモニタリングする Prometheus でモニタリングする おすすめの方法 Config Connector のベスト プラクティス トラブルシューティング 既知の問題 Config Connector のトラブルシューティング AI と ML アプリケーション開発 アプリケーションのホスティング コンピューティング データ分析とパイプライン データベース 分散型クラウド、ハイブリッド クラウド、マルチクラウド 業種別ソリューション 移行 ネットワーキング オブザーバビリティとモニタリング セキュリティ Storage アクセスとリソースの管理 費用と使用量の管理 Infrastructure as code SDK、言語、フレームワーク、ツール Home Documentation Access and resource management Config Connector ガイド フィードバックを送信 コレクションでコンテンツを整理 必要に応じて、コンテンツの保存と分類を行います。 Webhook タイムアウトを構成する このページでは、Config Connector の Webhook タイムアウトを構成する方法について説明します。これらの Webhook は、Config Connector バージョン 1.110 以降で構成できます。 検証用 Webhook のタイムアウトを構成する 次の検証用 Webhook を構成できます。 deny-immutable-field-updates.cnrm.cloud.google.com deny-unknown-fields.cnrm.cloud.google.com iam-validation.cnrm.cloud.google.com resource-validation.cnrm.cloud.google.com abandon-on-uninstall.cnrm.cloud.google.com たとえば、次のサンプル YAML ファイルを作成して適用することで、検証用 Webhook deny-immutable-field-updates.cnrm.cloud.google.com と deny-unknown-fields.cnrm.cloud.google.com のタイムアウトを構成できます。これらの Webhook は、 validating-webhook.cnrm.cloud.google.com 検証用 Webhook の構成 の構成の一部です。 configure-validating-webhook-timeout.yaml という名前のファイルを作成して、次の YAML ファイルをコピーします。 apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 注: Webhook 構成の名前と YAML ファイル内の Webhook の名前を指定する場合は、 .cnrm.cloud.google.com サフィックスを含めないでください。 kubectl apply を使用して、Webhook タイムアウトのカスタマイズをクラスタに適用します。 kubectl apply -f configure-validating-webhook-timeout.yaml 次のコマンドを実行して、構成が正常であることを確認します。 kubectl get validatingwebhookconfigurationcustomizations validating-webhook -o jsonpath='{.status.healthy}{"\n"}' true に設定された status.healthy フィールドが表示されます。 新しいカスタム タイムアウトがターゲット Webhook に適用されたことを確認します。 kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' カスタマイズの適用には数分かかることがあります。 変更用 Webhook のタイムアウトを構成する 次の変更用 Webhook を構成できます。 container-annotation-handler.cnrm.cloud.google.com generic-defaulter.cnrm.cloud.google.com iam-defaulter.cnrm.cloud.google.com management-conflict-annotation-defaulter.cnrm.cloud.google.com たとえば、次のサンプル YAML ファイルを作成して適用することで、変更用 Webhook container-annotation-handler.cnrm.cloud.google.com のタイムアウトを構成できます。Webhook は、 mutating-webhook.cnrm.cloud.google.com 変更用 Webhook の構成 の構成の一部です。 configure-mutating-webhook-timeout.yaml という名前のファイルを作成して、次の YAML ファイルをコピーします。 apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 注: Webhook 構成の名前と YAML ファイル内の Webhook の名前を指定する場合は、 .cnrm.cloud.google.com サフィックスを含めないでください。 kubectl apply を使用して、Webhook タイムアウトのカスタマイズをクラスタに適用します。 kubectl apply -f configure-mutating-webhook-timeout.yaml 次のコマンドを実行して、構成が正常であることを確認します。 kubectl get mutatingwebhookconfigurationcustomizations mutating-webhook -o jsonpath='{.status.healthy}{"\n"}' true に設定された status.healthy フィールドが表示されます。 新しいカスタム タイムアウトがターゲット Webhook に適用されたことを確認します。 kubectl get mutatingwebhookconfigurations mutating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="container-annotation-handler.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' カスタマイズの適用には数分かかることがあります。 フィードバックを送信 特に記載のない限り、このページのコンテンツは クリエイティブ・コモンズの表示 4.0 ライセンス により使用許諾されます。コードサンプルは Apache 2.0 ライセンス により使用許諾されます。詳しくは、 Google Developers サイトのポリシー をご覧ください。Java は Oracle および関連会社の登録商標です。 最終更新日 2026-04-11 UTC。 ご意見をお聞かせください [[["わかりやすい","easyToUnderstand","thumb-up"],["問題の解決に役立った","solvedMyProblem","thumb-up"],["その他","otherUp","thumb-up"]],[["わかりにくい","hardToUnderstand","thumb-down"],["情報またはサンプルコードが不正確","incorrectInformationOrSampleCode","thumb-down"],["必要な情報 / サンプルがない","missingTheInformationSamplesINeed","thumb-down"],["翻訳に関する問題","translationIssue","thumb-down"],["その他","otherDown","thumb-down"]],["最終更新日 2026-04-11 UTC。"],[],[]] プロダクトと料金 すべてのプロダクトを見る Google Cloud の料金 Google Cloud Marketplace お問い合わせ サポート コミュニティ フォーラム サポート リリースノート システム ステータス リソース GitHub Google Cloud の概要 コードサンプル Cloud アーキテクチャ センター トレーニングと認定資格 つながる ブログ イベント X（Twitter） YouTube の Google Cloud チャンネル YouTube の Google Cloud Tech チャンネル Google について プライバシー サイトの利用規約 Google Cloud 利用規約 Manage cookies Google の 30 年の気候変動対策: ご参加ください Google Cloud ニュースレターに登録 購読 English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어

