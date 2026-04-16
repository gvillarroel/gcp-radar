---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.542Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Python 2.7 runtime migration to gVisor sandbox"
feature_slug: "python-2-7-runtime-migration-to-gvisor-sandbox"
latest_feature_date: "2018-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "python"
  - "runtime"
  - "migration"
  - "gvisor"
  - "sandbox"
  - "app"
  - "engine"
  - "applications"
---

# Python 2.7 runtime migration to gVisor sandbox

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Python 2.7 App Engine applications now run in the gVisor sandbox.

## Extended Definition

Python 2.7 App Engine applications now run in the gVisor sandbox.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Index Applications (interface) AuthorizedCertificates (interface) AuthorizedDomains (interface) DomainMappings (interface) Firewall (interface) Instances (interface) Services (interface) Versions (interface) ApiConfigHandler (message) ApiEndpointHandler (message) Application (message) Application.DatabaseType (enum) Application.FeatureSettings (message) Application.IdentityAwareProxy (message) Application.ServingStatus (enum) AuthFailAction (enum) AuthorizedCertificate (message) AuthorizedCertificateView (enum) AuthorizedDomain (message) AutomaticScaling (message) BasicScaling (message) BatchUpdateIngressRulesRequest (message) BatchUpdateIngressRulesResponse (message) CertificateRawData (message) CloudBuildOptions (message) ContainerInfo (message) CpuUtilization (message) CreateApplicationRequest (message) CreateAuthorizedCertificateRequest (message) CreateDomainMappingRequest (message) CreateIngressRuleRequest (message) CreateVersionMetadataV1 (message) CreateVersionRequest (message) DebugInstanceRequest (message) DeleteAuthorizedCertificateRequest (message) DeleteDomainMappingRequest (message) DeleteIngressRuleRequest (message) DeleteInstanceRequest (message) DeleteServiceRequest (message) DeleteVersionRequest (message) Deployment (message) DiskUtilization (message) DomainMapping (message) DomainOverrideStrategy (enum) EndpointsApiService (message) EndpointsApiService.RolloutStrategy (enum) Entrypoint (message) ErrorHandler (message) ErrorHandler.ErrorCode (enum) FileInfo (message) FirewallRule (message) FirewallRule.Action (enum) FlexibleRuntimeSettings (message) GetApplicationRequest (message) GetAuthorizedCertificateRequest (message) GetDomainMappingRequest (message) GetIngressRuleRequest (message) GetInstanceRequest (message) GetServiceRequest (message) GetVersionRequest (message) HealthCheck (message) InboundServiceType (enum) Instance (message) Instance.Availability (enum) Instance.Liveness (message) Instance.Liveness.LivenessState (enum) Library (message) ListAuthorizedCertificatesRequest (message) ListAuthorizedCertificatesResponse (message) ListAuthorizedDomainsRequest (message) ListAuthorizedDomainsResponse (message) ListDomainMappingsRequest (message) ListDomainMappingsResponse (message) ListIngressRulesRequest (message) ListIngressRulesResponse (message) ListInstancesRequest (message) ListInstancesResponse (message) ListServicesRequest (message) ListServicesResponse (message) ListVersionsRequest (message) ListVersionsResponse (message) LivenessCheck (message) LocationMetadata (message) LoginRequirement (enum) ManagedCertificate (message) ManagementStatus (enum) ManualScaling (message) Network (message) NetworkSettings (message) NetworkSettings.IngressTrafficAllowed (enum) NetworkUtilization (message) OperationMetadataV1 (message) ReadinessCheck (message) RepairApplicationRequest (message) RequestUtilization (message) ResourceRecord (message) ResourceRecord.RecordType (enum) Resources (message) ScriptHandler (message) SecurityLevel (enum) Service (message) ServingStatus (enum) SslSettings (message) SslSettings.SslManagementType (enum) StandardSchedulerSettings (message) StaticFilesHandler (message) TrafficSplit (message) TrafficSplit.ShardBy (enum) UpdateApplicationRequest (message) UpdateAuthorizedCertificateRequest (message) UpdateDomainMappingRequest (message) UpdateIngressRuleRequest (message) UpdateServiceRequest (message) UpdateVersionRequest (message) UrlDispatchRule (message) UrlMap (message) UrlMap.RedirectHttpResponseCode (enum) Version (message) VersionView (enum) Volume (message) VpcAccessConnector (message) VpcAccessConnector.EgressSetting (enum) ZipInfo (message) Applications Manages App Engine applications.
- Defaults to the default channel. threadsafe bool Whether multiple requests can be dispatched to this version at once. vm bool Whether to deploy this version in a container on a virtual machine. flexible runtime settings FlexibleRuntimeSettings Settings for App Engine flexible runtimes. app engine apis bool Allows App Engine second generation runtimes to access the legacy bundled services. beta settings map<string, string> Metadata settings that are supplied to this version to enable beta runtime features. env string App Engine execution environment for this version.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.get view AuthorizedCertificateView Controls the set of fields returned in the LIST response. page size int32 Maximum results to return per page. page token string Continuation token for fetching the next page of results.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.update domain mapping DomainMapping Domain mapping configuration. override strategy DomainOverrideStrategy Whether the domain creation should override any existing mappings for this domain.

### Crear una aplicación Python en App Engine | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- Source ID: `site-docs-reference-http`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Crear una aplicación Python en App Engine | App Engine standard environment | Google Cloud Documentation Ir al contenido principal Áreas tecnológicas close IA y aprendizaje automático Desarrollo de aplicaciones Alojamiento de aplicaciones Computación Analíticas y flujos de datos Bases de datos Tecnologías distribuidas, híbridas y multinube IA generativa Soluciones por sector Redes Observabilidad y monitorización Seguridad Storage Herramientas para varios productos close Gestión de accesos y recursos Gestión de costes y uso Infraestructura como código Migración SDK, lenguajes, frameworks y herramientas / Consola English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Acceder Application hosting App Engine Standard environment Empezar gratis Introducción Guías Referencia Recursos Entornos de App Engine Entorno estándar de App Engine Información sobre el entorno estándar Entorno flexible de App Engine Información sobre el entorno flexible Centro de migraciones de App Engine Consulta cómo migrar a las versiones compatibles más recientes Áreas tecnológicas Más Introducción Guías Referencia Recursos Entornos de App Engine Más Herramientas para varios productos Más Consola Entorno estándar de App Engine Página principal de App Engine Descripción general del entorno estándar Elegir un idioma y un entorno Descubrir los entornos de ejecución del entorno estándar Entorno de ejecución de Go Introducción Crear una aplicación Actualizar una aplicación Migrar de los runtimes de primera generación a los de segunda generación Tiempo de ejecución Java Introducción Crear una aplicación Introducción Crear el proyecto Escribir un servicio web Desplegar un servicio web Actualizar una aplicación Volver a empaquetar un archivo WAR Migrar de los runtimes de primera generación a los de segunda generación Entorno de ejecución de Node.js Introducción Crear una aplicación Introducción Crear el proyecto Escribir un servicio web Desplegar un servicio web Actualizar un servicio web Ver registros Entorno de ejecución de PHP Introducción Crear una aplicación Actualizar una aplicación Migrar de los runtimes de primera generación a los de segunda generación Entorno de ejecución de Python Introducción Crear una aplicación Introducción Crear el proyecto Escribir un servicio web Desplegar un servicio web Gestionar datos Añadir Firebase Autenticar usuarios Personalizar datos Limpieza Actualizar una aplicación Introducción Migrar de los runtimes de primera generación a los de segunda generación Migrar al entorno de ejecución de Python 3 Migrar servicios agrupados antiguos Preparar archivos de configuración para el entorno de Python 3 Probar y desplegar una aplicación Entorno de ejecución de Ruby Introducción Crear una aplicación Empezar Configurar un entorno Configurar un entorno de desarrollo Configurar herramientas opcionales para Java Apache Maven Usar Maven y el complemento de App Engine Objetivos y parámetros del complemento de Maven Gradle Usar el complemento de App Engine Tareas y propiedades Configurar un proyecto de Cloud Dar acceso Configurar control de acceso Ver roles que conceden acceso a App Engine Configurar cuentas de servicio Agente de servicio gestionado por Google Diseñar una aplicación Estructurar los servicios web Alojar un sitio web estático Comunicarse entre los servicios Gestionar solicitudes Enrutar solicitudes Definir archivos de configuración Go Definir configuración del entorno de ejecución Especificar dependencias Java Definir configuración del entorno de ejecución Especificar dependencias Node.js Definir configuración del entorno de ejecución Especificar dependencias Ejecutar un paso de compilación personalizado PHP Definir configuración del entorno de ejecución Especificar dependencias Python Definir configuración del entorno de ejecución Especificar dependencias Ruby Definir configuración del entorno de ejecución Especificar dependencias Probar y desplegar una aplicación Probar en el servidor de desarrollo local Utilizar el servidor de desarrollo local Opciones de comandos Usar el servidor de desarrollo local después de que finalice el periodo de asistencia Configurar la aplicación Configurar redes Asignar dominios personalizados Proteger dominios personalizados con SSL Proteger una aplicación con TLS mínimo Nube privada virtual (VPC) Conectarse a una red de VPC Conectarse a una red de VPC compartida VPC compartida con conectores en proyectos de servicio VPC compartida con conectores en el proyecto host Configurar una dirección IP de salida estática Almacenar datos y archivos Introducción Usar Cloud Firestore en el modo Datastore Usar Cloud SQL Usar Cloud Storage (alojamiento de archivos en la nube) Almacenar y servir archivos estáticos Leer y escribir archivos temporales Almacenar datos en caché con Memorystore Cree activadores.
- Escribir y ver registros Monitorizar latencia y crear alertas Información sobre el rendimiento con Cloud Profiler Acceder a servicios agrupados antiguos Introducción Go 1.12 y versioines posteriores Java 11 o versiones posteriores PHP 7/8 Python 3 Introducción Información general sobre Blobstore Descripción general de Deferred Información general sobre el correo API disponibles Introducción Identidad de la aplicación Blobstore Funciones almacén de datos Introducción Conceptos de las bibliotecas de cliente Descripción general de la API Operación asíncrona Retrollamadas Crear, extraer, actualizar y eliminar entidades Crear y usar claves de entidad Entidades, propiedades y claves Referencia de propiedades de entidades Índices Metadatos Consultas de proyección Consultas Cursores de consultas Coherencia de los datos de consultas Restricciones de las consultas Extraer resultados de consultas Estadísticas Estructurar datos para conseguir una coherencia inmediata Transacciones Gestionar Datastore desde la consola Introducción Ver las estadísticas de Datastore Configurar índices de Datastore Imágenes Correo Información general sobre la API Mail Directrices para el correo masivo Enviar correo Recibir correo Recibir notificación de rebote Correo con encabezados o archivos adjuntos Memcache Información general sobre Memcache Usar Memcache Ejemplos de Memcache Registros de auditoría de Memcache Módulos API Namespaces Información general sobre la API Namespaces Arquitectura multicliente con espacios de nombres Biblioteca de cliente NDB para Cloud Datastore Introducción Administración Operación asíncrona Almacenamiento en caché Crear, extraer, actualizar y eliminar entidades Crear modelos de entidad Crear y usar claves de entidad Configurar índices de Datastore Consultas de proyección Consultas Transacciones Escribir subclases de propiedades Referencia de biblioteca de cliente NDB Referencia de propiedades de entidades Contexto Excepciones Funciones Futuro Clave Metadatos Modelo PolyModel Consulta Buscar Documentos e índices Cadenas de consulta Opciones de consulta y ordenación Gestionar resultados de búsqueda Búsqueda por facetas Prácticas recomendadas Utilizar el servidor de desarrollo local Referencia de Python Cursor Documento Clases Facet FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Clases Field FieldExpression GeoPoint GetResponse Índice MatchScorer Consulta QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Funciones Excepciones Colas de tareas Información general sobre las colas de tareas Utilizar colas de salida Utilizar colas de salida Crear colas de salida Crear tareas de salida Crear controladores de tareas Eliminar tareas y colas Reintentar tareas de salida fallidas Probar colas de salida en el servidor de desarrollo Utilizar colas para tareas extraídas Utilizar colas para tareas extraídas Crear colas para tareas extraídas Crear tareas extraídas Asignar tareas extraídas Obtención de URL Solicitudes salientes Emitir solicitudes HTTP(S) Usuarios Introducción Objetos de usuario URLs de acceso Usuarios administradores Centro de migración Recursos para la migración Solucionar problemas Introducción Implementación Activo Latencia elevada Conectividad Recursos de la comunidad IA y aprendizaje automático Desarrollo de aplicaciones Alojamiento de aplicaciones Computación Analíticas y flujos de datos Bases de datos Tecnologías distribuidas, híbridas y multinube IA generativa Soluciones por sector Redes Observabilidad y monitorización Seguridad Storage Gestión de accesos y recursos Gestión de costes y uso Infraestructura como código Migración SDK, lenguajes, frameworks y herramientas Entorno estándar de App Engine Entorno flexible de App Engine Centro de migraciones de App Engine Home Documentation Application hosting App Engine Standard environment Guías Enviar comentarios Crear una aplicación Python en App Engine Organízate con las colecciones Guarda y clasifica el contenido según tus preferencias.
- En esta guía se explican los conceptos básicos para desarrollar y desplegar servicios web de Python en el entorno estándar de App Engine .
- Desplegar el servicio web en App Engine Aprende a desplegar tu código Python y, a continuación, consulta tu servicio web en App Engine.

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Metadata server Each instance of your application can use the App Engine metadata server to query information about the instance and your project.

