---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.751Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Model export to Cloud Storage for online prediction"
feature_slug: "model-export-to-cloud-storage-for-online-prediction"
latest_feature_date: "2020-11-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "model"
  - "export"
  - "storage"
  - "online"
  - "prediction"
  - "bigquery"
  - "ml"
  - "models"
---

# Model export to Cloud Storage for online prediction

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML models can be exported to Cloud Storage and used for online prediction.

## Extended Definition

BigQuery ML models can be exported to Cloud Storage and used for online prediction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the exported model files to a temporary directory mkdir tmp dir gcloud storage cp gs://some/gcs/path/iris model tmp dir --recursive Create a version subdirectory This step sets a version number (1 in this case) for the model. mkdir -p serving dir/iris model/1 cp -r tmp dir/iris model/ serving dir/iris model/1 rm -r tmp dir Pull the Docker image docker pull tensorflow/serving Run the Docker container docker run - p 8500 : 8500 -- network = "host" -- mount type = bind , source = pwd / serving dir / iris model , target =/ models / iris model - e MODEL NAME = iris model - t tensorflow / serving & Run the prediction curl -d '{"instances": [{"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0}]}' -X POST http://localhost:8501/v1/models/iris model:predict Online deployment and serving This section uses the Google Cloud CLI to deploy and run predictions against the exported model.
- Copy exported model files to a local directory mkdir automl serving dir gcloud storage cp gs://some/gcs/path/automl iris model/ automl serving dir/ --recursive Pull AutoML Docker image docker pull gcr.io/cloud-automl-tables-public/model server Start Docker container docker run - v pwd / automl serving dir :/ models / default / 0000001 - p 8080 : 8080 - it gcr . io / cloud - automl - tables - public / model server Run the prediction 1) Create a newline-delimited JSON file for inputs.
- Home Documentation Data analytics BigQuery Guides Send feedback Export a BigQuery ML model for online prediction Stay organized with collections Save and categorize content based on your preferences.
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime: '2020-02-28T16:30:45Z' deploymentUri: gs://your bucket name framework: TENSORFLOW machineType: mls1-c1-m2 name: projects/[YOUR-PROJECT-ID]/models/IRIS MODEL/versions/v1 pythonVersion: '2.7' runtimeVersion: '1.15' state: READY Online prediction For more information about running online predictions against a deployed model, see Get online inferences from a custom trained model .

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- You can use remote models when a model is too large to import into BigQuery.
- Click the Vertex AI Models: BigQuery Federation solution card.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.
- For more information, see EXPORT MODEL and Export a BigQuery ML model for online prediction .
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.

