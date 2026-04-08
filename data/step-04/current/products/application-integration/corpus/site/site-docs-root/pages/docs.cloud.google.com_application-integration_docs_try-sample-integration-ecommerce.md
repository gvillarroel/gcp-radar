---
title: "Try the sample integration | Application Integration | Google Cloud Documentation"
url: "https://docs.cloud.google.com/application-integration/docs/try-sample-integration-ecommerce"
knowledge_key: "corpus"
source_id: "site-docs-root"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Try the sample integration | Application Integration | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/application-integration/docs/try-sample-integration-ecommerce

Click the expander arrow (&gt;) next to the executed integration to view an expanded list of tasks and variables in the integration, along with task status and variable payloads. Note: The following test cases use curl, which typically comes pre-installed for Linux and macOS operating systems. If you don&#x27;t have curl, you can download it from the curl releases and downloads page. curl -X POST -H &quot;Content-Type: application/json&quot; -d &#x27;{&quot;trigger_id&quot;:&quot;api_trigger/ecom-order-processing_API_1&quot;}&#x27; &#x27;https://integrations.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/integrations/INTEGRATION_NAME:execute&#x27; -H &quot;Authorization: Bearer $(gcloud auth print-access-token)&quot;
