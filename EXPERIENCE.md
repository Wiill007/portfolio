# Experiencia laboral
Estos últimos 3 años he estado trabajando en Tafco Metawireless, una PYME que se encuentra en Ansoáin. En ella, mi trabajo se ha centrado principalmente en el desarrollo de sistemas locales de IA que puedan hacer uso de la información disponible dentro de la propia empresa para asistir a los técnicos que trabajamos en ella.

Así pues, mi trabajo se ha centrado principalmente en el desarrollo de una aplicación local de IA para la cual he tenido que hacer uso principalmente de Python y del ecosistema de librerías Open Source que existen para el despliegue de este tipo de sistemas.

## *Servicios que he desplegado en Tafco*

### **Sistema de IA personalizado para la compañía**
La complejidad de un sistema de este tipo es muy elevada, ya que he tenido que hacer despliegue de múltiples servicios para dar vida a esta aplicación, que listaré a continuación

#### 1. Sistema RAG avanzado
Un sistema [RAG (Retrieval Augmented Generation)](https://www.promptingguide.ai/techniques/rag) avanzado no es únicamente la aplicación de un embedder + cross-encoder sobre un corpus de documentación. El sistema que he desplegado para Tafco consta de las siguientes features:

- Extracción de información a partir de transcripciones
- Extracción de información a partir de documentos markdown o PDF mediante el uso de sistemas OCR
- Filtrado de información relevante/irrelevante.
- Actualizaciones automáticas a la base de datos vectorial.
- Búsqueda de documentos importantes previo al proceso RAG en extracción.

Todas estas features, fueron programadas por mí mismo para el despliegue en Tafco.

#### 2. Sistema de Context Window Management
La importancia de este proceso está muy infravalorada cuando se trata de este tipo de sistemas. Context Window Management se podría definir como "prompt engineering" pero llevado múltiples niveles más allá.
> Un sistema adecuado de Context Window Management mejora la precisión del modelo mucho, ya que busca controlar que la información que el modelo lee antes de contestar al usuario sea lo más relevante y útil posible. De lo contrario, el modelo se encuentra en una situación de búsqueda de una "aguja en un pajar", haciendo que su precisión se reduzca drásticamente.
De hecho, mi implementación, incorpora la adaptación rápida de servidores MCP y llamada a herramientas.

#### 3. Fine Tunes de múltiples tipos de modelos de lenguaje (LMs), ya sean grandes (LLMs) o encoders.
El proceso de [Fine Tuning](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)) permite a un developer sin acceso a millones de euros o dólares poder hacer un entrenamiento que adapte un modelo cualquiera a la tarea específica que el developer quiera. Por ejemplo, uno de mis múltiples Fine Tunes consistía en usar un modelo de lenguaje pequeño para estánderes actuales (2 billones de parámetros) a convertir peticiones naturales de un usuario a queries de extracción de información de una base de datos PostgreSQL.

#### 4. Despliegue de estos modelos
Mi librería favorita para el despliegue de modelos de lenguaje es [VLLM](https://vllm.ai/). Mediante esta librería, uno puede desplegar modelos de lenguaje open source y utilizar sus propios adaptadores LoRA para aplicar sus Fine Tunes personales. De esta forma, usando esta librería, se puede utilizar múltiples Fine Tunes desarrollados mientras también se dispone también de un modelo base ya existente

#### 5. Uso de LMs para la extracción dinámica de información a tiempo real de múltiples bases de datos.
Ya he mencionado el caso de un Fine Tune para la extracción de datos de una base de datos SQL. Sin embargo, esta no fue la única implementación que apliqué en el desarrollo de la aplicación. Entre otras técnicas apliqué BerTopic para hacer una extracción similar a RAG sobre una base de datos de incidencias existente en uno de los servicios de Tafco (Soporte Voz), o algo tan simple como prompt engineering para hacer que un modelo base pudiera crear queries de extracción sobre una base de datos MongoDB.

#### 6. Sistema de Frontend para acceder a la aplicación.
Principalmente utilicé OpenWebui. Una librería Open Source también la cual usé casi exclusivamente para los sistemas de login, mostrar imágenes y subida de archivos/documentos de parte del usuario. Sin embargo, hice que llamara un backend personalizado para la gestión de la Context Window ya que me parece que el servicio de openwebui era pobre en este departamento.

### **Sistema de Chat Center para otras compañías**
Esta otra aplicación consistía en crear un Chat Center para otra empresa. Enfocado en Whatsapp, permitía el uso de bots para la resolución de incidencias simples mientras también si el bot no podía asistir al cliente, se le enviaba este chat a un miembro del equipo de Atención al Cliente.

### Otros
En Tafco he llegado a desarrollar múltiples aplicaciones, pero los desarrollos de estas dos fueron los más importantes. Sin embargo, mencionaré a continuación otros sistemas que hice:

- Instancia local de Gitlab Runners para soporte de pipelines CI/CD en red local
- Sistema de transcripciones de audios
- Varios sistemas ASR para hablar con un LLM. Una vez usé PJSIP con C++ y otra vez usamos Asterisk

## Conclusiones
Mi trayectoria profesional ha sido muy centrada en el desarrollo y despliegue de sistemas de IA, pero para poder hacer esto, tuve que aprender mucho también sobre sistemas Linux y despliegue de aplicaciones. Por ello soy un ingeniero de LLMs.