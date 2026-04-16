---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.045Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "pyproject.toml dependency management support"
feature_slug: "pyproject-toml-dependency-management-support"
latest_feature_date: "2026-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/python"
keywords:
  - "pyproject"
  - "toml"
  - "dependency"
  - "management"
  - "run"
  - "functions"
  - "source"
  - "deployments"
---

# pyproject.toml dependency management support

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies; Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies.

## Extended Definition

Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies; Cloud Run and Cloud Run functions source deployments support pyproject.toml for managing Python dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)

## Supporting Pages

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example pyproject.toml file: [project] name = "demo-app" version = "0.1.0" description = "" requires-python = ">=3.10" dependencies = [ "flask>=3.1.1" , "gunicorn>=23.0.0" , ] [build-system] requires = [ "setuptools>=61.0" ] build-backend = "setuptools.build meta" Package manager If you manage your dependencies using a requirements.txt file , the default package manager varies based on the Python version you configure.
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- The buildpack searches for an entrypoint in the following order of precedence: If a Procfile exists in your root directory, or you configure the GOOGLE ENTRYPOINT environment variable, these configurations always override any entrypoint determined by pyproject.toml scripts.
- A pyproject.toml file is present and you don't include other high-precedence lock files such as poetry.lock , uv.lock , or configurations such as [tool.poetry] , and you don't set the GOOGLE PYTHON PACKAGE MANAGER environment variable.

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported values: true , True , or 1 Additional Cloud Run functions environment variables The following configurations are only available for source code built as functions that use Functions Framework and Cloud Run functions.
- Supported values: true , True , 1 GOOGLE CLEAR SOURCE For functions and Go or Java applications: Clears source after the application is built.
- The Python buildpack sets the default entrypoint for Cloud Run source deployments .
- Examples: Cloud Run source deploy Java: java -jar target/myjar.jar PHP: php -S 0.0.0.0:8080 index.php Python: Preview — Default entrypoint for Cloud Run source deploys This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### AI and ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/ai-ml](https://docs.cloud.google.com/docs/ai-ml)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data and features description Vertex AI datasets Use a managed dataset to provide the source data used to train AutoML and custom models on Vertex AI. description Vertex AI Feature Store Streamline your ML feature management and online serving processes by managing your feature data in a BigQuery table or view and serving features online directly from the BigQuery data source.
- Explore AI and ML in Google Cloud Read documentation and Cloud Architecture Center articles about AI and ML products, capabilities, and procedures. description Introduction to machine learning on Vertex AI Support data engineering, data science, and ML engineering workflows on a unified platform, enabling you to train ML models and deploy AI solutions. account tree AI and ML architecture resources Plan your approach with architecture center resources across a wide variety of AI & ML subjects. (Goes to Architecture Center.) account tree Best practices for implementing ML Plan for implementing ML, with a focus on custom-trained models based on your data and code. (Goes to Architecture Center.) Training, blog articles, and more Go to training courses, blog articles, and other related resources. school Applied AI summit learning path Study Vertex AI and Gemini in Google Cloud. (Goes to Google Cloud Skills Boost.) school Machine learning engineer learning path Study designing, building, productionalizing, optimizing, operating, and maintaining ML systems. (Goes to Google Cloud Skills Boost.) AI and ML products by use case Expand sections or use the filter to find products and guides for typical use cases.
- Vertex AI Model Monitoring Provide model monitoring of feature skew and drift in the model's prediction input data for tabular AutoML and tabular custom-trained models. description Vertex AI model evaluation Determine the performance of your models with model evaluation metrics, such as precision and recall.
- Google Cloud Contact Center as a Service Queue and route customer interactions across voice and digital channels to the appropriate resource pools, including allowing a seamless transition to human agents.

