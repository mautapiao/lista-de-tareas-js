# Lista de Tareas JS Grupo 7

Aplicación web simple de lista de tareas desarrollada en **JavaScript**, con integración a **Azure DevOps** para control de versiones, gestión de tareas y automatización de despliegues.

## 📋 Descripción
Este proyecto permite:
- Agregar, marcar y eliminar tareas.
- Guardar el estado de la lista en el navegador usando **LocalStorage**.
- Mantener un flujo de trabajo controlado con **Azure Boards**.
- Automatizar la construcción y validación con **Azure Pipelines**.

## 🛠️ Tecnologías utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Azure DevOps**
  - Azure Repos (Git)
  - Azure Boards
  - Azure Pipelines (YAML)

## ⚙️ Configuración del Pipeline
El proyecto incluye el archivo `azure-pipelines.yml`, el cual:
1. Se ejecuta en cada **push** a la rama `master`.
2. Utiliza un agente con `ubuntu-latest`.
3. Ejecuta comandos para validar y preparar la aplicación.

Ejemplo básico:
```yaml
trigger:
- master

pool:
  vmImage: ubuntu-latest

steps:
- script: echo "Compilando y validando Lista de Tareas"
  displayName: 'Validar proyecto'

