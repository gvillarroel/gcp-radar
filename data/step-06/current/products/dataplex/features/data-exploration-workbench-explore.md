---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.613Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data exploration workbench (Explore)"
feature_slug: "data-exploration-workbench-explore"
latest_feature_date: "2022-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/support/getting-support"
  - "https://docs.cloud.google.com/dataplex/docs/develop-custom-connector"
keywords:
  - "exploration"
  - "workbench"
  - "explore"
  - "provides"
  - "fully"
  - "managed"
  - "serverless"
  - "environment"
---

# Data exploration workbench (Explore)

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Data exploration workbench provides a fully managed, serverless environment for governed collaboration, scheduling, and interactive querying with Spark SQL and Jupyter notebooks; Data exploration workbench provides a fully managed, serverless environment for querying data with Spark SQL and Jupyter notebooks.

## Extended Definition

Data exploration workbench provides a fully managed, serverless environment for governed collaboration, scheduling, and interactive querying with Spark SQL and Jupyter notebooks; Data exploration workbench provides a fully managed, serverless environment for querying data with Spark SQL and Jupyter notebooks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Explore provides a fully-managed, serverless data exploration experience powered by fully-governed collaboration, one-click scheduling, and interactive querying using Spark SQL scripts and Jupyter notebooks.
- February 17, 2022 Feature Dataplex Explore provides a fully-managed, serverless data exploration experience that enables you to query your data using Apache SparkSQL queries and Jupyter notebooks.
- October 20, 2022 Feature Data exploration workbench (Explore) is generally available ( GA ).
- The lightweight mode provides low-latency profile scans that return results in seconds, making it ideal for grounding AI agent responses and interactive data exploration.

### Customer Care | Google Cloud

- URL: [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See all security and identity products Serverless Cloud Run Fully managed environment for running containerized apps.
- Go Serverless Fully managed environment for developing, deploying and scaling apps.
- Data Analytics Generate instant insights from data at any scale with a serverless, fully managed analytics platform that significantly simplifies analytics.
- Cloud Run Fully managed environment for running containerized apps.

### "Develop a custom connector for metadata import \_|\_ Knowledge Catalog \_\

- URL: [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Managed Service for Apache Spark provides a serverless Spark execution environment.
- In a production environment, you run the connector as part of a managed connectivity pipeline, by using an orchestration platform like Workflows.
- Update the src/entry builder.py file with shared methods for applying Spark transformations. """Creates entries with PySpark.""" import pyspark.sql.functions as F from pyspark.sql.types import StringType from src.constants import EntryType , SOURCE TYPE from src import name builder as nb @F . udf ( returnType = StringType ()) def choose metadata type udf ( data type : str ): """Choose the metadata type based on Oracle native type.""" if data type . startswith ( "NUMBER" ) or data type in [ "FLOAT" , "LONG" ]: return "NUMBER" if data type . startswith ( "VARCHAR" ) or data type . startswith ( "NVARCHAR2" ): return "STRING" if data type == "DATE" : return "DATETIME" return "OTHER" def create entry source ( column ): """Create Entry Source segment.""" return F . named struct ( F . lit ( "display name" ), column , F . lit ( "system" ), F . lit ( SOURCE TYPE )) def create entry aspect ( entry aspect name ): """Create aspect with general information (usually it is empty).""" return F . create map ( F . lit ( entry aspect name ), F . named struct ( F . lit ( "aspect type" ), F . lit ( entry aspect name ), F . lit ( "data" ), F . create map () ) ) def convert to import items ( df , aspect keys ): """Convert entries to import items.""" entry columns = [ "name" , "fully qualified name" , "parent entry" , "entry source" , "aspects" , "entry type" ] Puts entry to "entry" key, a list of keys from aspects in "aspects keys" and "aspects" string in "update mask" return df . withColumn ( "entry" , F . struct ( entry columns )) \ . withColumn ( "aspect keys" , F . array ([ F . lit ( key ) for key in aspect keys ])) \ . withColumn ( "update mask" , F . array ( F . lit ( "aspects" ))) \ . drop ( entry columns ) def build schemas ( config , df raw schemas ): """Create a dataframe with database schemas from the list of usernames.
- Fields are becoming a part of a schema struct There is also an entry aspect that is repeats entry type as aspect type entry aspect name = nb . create entry aspect name ( config , entry type ) df = df . withColumn ( "schema" , F . create map ( F . lit ( schema key ), F . named struct ( F . lit ( "aspect type" ), F . lit ( schema key ), F . lit ( "data" ), F . create map ( F . lit ( "fields" ), F . col ( "fields" ))) ) ) \ . withColumn ( "entry aspect" , create entry aspect ( entry aspect name )) \ . drop ( "fields" ) Merge separate aspect columns into the one map called 'aspects' df = df . select ( F . col ( "TABLE NAME" ), F . map concat ( "schema" , "entry aspect" ) . alias ( "aspects" )) Define user-defined functions to fill the general information and hierarchy names create name udf = F . udf ( lambda x : nb . create name ( config , entry type , db schema , x ), StringType ()) create fqn udf = F . udf ( lambda x : nb . create fqn ( config , entry type , db schema , x ), StringType ()) parent name = nb . create parent name ( config , entry type , db schema ) full entry type = entry type . value . format ( project = config [ "target project id" ], location = config [ "target location id" ]) Fill the top-level fields column = F . col ( "TABLE NAME" ) df = df . withColumn ( "name" , create name udf ( column )) \ . withColumn ( "fully qualified name" , create fqn udf ( column )) \ . withColumn ( "entry type" , F . lit ( full entry type )) \ . withColumn ( "parent entry" , F . lit ( parent name )) \ . withColumn ( "entry source" , create entry source ( column )) \ . drop ( column ) df = convert to import items ( df , [ schema key , entry aspect name ]) return df Note the following: The methods build the metadata resources that the connector creates for your Oracle resources.

