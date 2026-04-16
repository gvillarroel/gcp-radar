---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.060Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Earth Engine Cloud API support"
feature_slug: "earth-engine-cloud-api-support"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/client_server"
  - "https://developers.google.com/earth-engine/guides/auth"
  - "https://developers.google.com/earth-engine/guides/python_install"
keywords:
  - "earth"
  - "engine"
  - "adds"
  - "javascript"
  - "client"
  - "library"
  - "enables"
  - "default"
---

# Earth Engine Cloud API support

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Adds Cloud API support to the JavaScript client library and enables it by default for the Python client library.

## Extended Definition

Adds Cloud API support to the JavaScript client library and enables it by default for the Python client library.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)

## Supporting Pages

### Client vs. Server \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Earth Engine client libraries for Python and JavaScript translate complex geospatial analyses to Earth Engine requests, allowing code to contain a mix of client-side and server-side objects.
- Earth Engine client libraries for Python and JavaScript translate complex geospatial analyses to Earth Engine requests.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-01 UTC."],[],["Earth Engine uses client libraries to send geospatial analyses to its servers.
- List ( client list ) Realize that client-side processing is done in your notebook or browser, the host machine's CPU, so it can be less efficient than using Earth Engine to do the work on the server.

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python and Command Line Prior to using the Earth Engine Python client library, you need to authenticate (verify your identity) and use the resultant credentials to initialize the Python client.
- Before you can make requests to Earth Engine through a client library , you must authenticate and use the resultant credentials to initialize the Earth Engine client.
- Page Summary outlined flag Authentication and initialization are required to make requests to Earth Engine through a client library.
- Project Needed Scopes Settable Local CLI Needed Project Owner localhost local Y Y N N colab remote Y N N N gcloud both Y Y N N notebook both Y Y N Y Credentials for Service Accounts and Compute Engine ee.Initialize() will use Earth Engine credentials (which ee.Authenticate() stores in /.config/earthengine/credentials ) or retrieve credentials from google.auth.default() , but if necessary you can pass a credentials= argument to use credentials from elsewhere, bypassing these defaults.

### Python Installation \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Keep your client library up to date by running the command for the package manager you used to install earthengine-api : Conda Package Manager : conda update -c conda-forge earthengine-api Python Package Installer : pip install earthengine-api --upgrade Python support The Earth Engine Python client library is compatible with Python versions supported by Google Cloud .
- Try the following notebook to get started with Earth Engine and Colab: Run in Google Colab View source on GitHub If you don't use Colab, the Earth Engine client library can be manually installed and updated on your system using conda (recommended) or pip : Install with conda Install with pip expand more Install the API to an arbitrary Python environment using pip .
- It must be imported and initialized for each new Python session and script: import ee Authentication and Initialization Prior to using the Earth Engine Python client library, you need to authenticate and use the resultant credentials to initialize the Python client.
- String ( 'Hello from the Earth Engine servers!' ) . getInfo ()) Syntax Both the Python and JavaScript APIs access the same server-side functionality, but client-side expressions ( learn more about client vs. server ) can vary because of language syntax differences.

