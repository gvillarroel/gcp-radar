---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:56.802Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Default credential reuse and forced refresh"
feature_slug: "default-credential-reuse-and-forced-refresh"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/auth"
  - "https://developers.google.com/earth-engine/guides/app_engine_intro"
  - "https://developers.google.com/earth-engine/guides/python_install"
keywords:
  - "refresh"
  - "forced"
  - "reuse"
  - "credential"
  - "default"
  - "makes"
  - "authenticate"
---

# Default credential reuse and forced refresh

Product: Earth Engine Python Client Library
Coverage: MEDIUM

## Step 02 Summary

Makes ee.Authenticate() reuse existing credentials by default while allowing force=True to refresh them.

## Extended Definition

Makes ee.Authenticate() reuse existing credentials by default while allowing force=True to refresh them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)

## Supporting Pages

### Authentication and Initialization | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-reference-required-3-http`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in ~/.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.
- Details on modes auth_mode=colab . ee.Authenticate() will create or obtain the default credentials supported by Colab, by running colab.auth.authenticate_user() if necessary.
- The initialization step verifies that valid credentials exist, either created from ee.Authenticate() or pre-existing as Google default credentials.
- If credentials already exist, they are automatically reused - run ee.Authenticate(force=True) to create new credentials.

### App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- Source ID: `site-docs-root-2-http`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- If installation fails, check that a recent version of Node.js is installed . const ee = require ( '@google/earthengine' ); ee . data . authenticateViaPrivateKey ( '.private-key.json' ); ee . initialize (); OAuth 2.0 Client ID If you want users to authenticate as themselves (rather than using a service account), you need to set up an OAuth Client ID from your Cloud Project.
- Run locally Once your service account is registered for Earth Engine access , you can use it to authenticate (see config.py ) when you test the examples.
- Typically, your App Engine code includes the Earth Engine Python client library and makes requests to the Earth Engine backend using a service account .
- The benefit of this approach is that requests to Earth Engine are made using the end user's credentials, so you are less likely to hit usage limits.

### Python Installation | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-reference-required-5-http`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- It must be imported and initialized for each new Python session and script: import ee Authentication and Initialization Prior to using the Earth Engine Python client library, you need to authenticate and use the resultant credentials to initialize the Python client.
- From a terminal or command prompt: pip install earthengine-api Once installed, you can import, authenticate and initialize the Earth Engine API as described here .
- After installation, import the API with `import ee`, authenticate using `ee.Authenticate()`, and initialize with `ee.Initialize(project='my-project')`.
- Authenticate () This will select the best authentication mode for your environment, and prompt you to confirm access for your scripts.

