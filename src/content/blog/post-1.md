---
title: Manejar contenido Astro 6.0
date: 2026-04-27
description: Como manejar el contenido de nuestro sitio estatico con la version 6.0 de Astro.
---

Astro permite manejar el contenido de una forma facil y estructura con el uso de _colecciones_ o _collections_. Estas pueden trabajarse con archivos .md, .mdx o incluso .json y .yml.

## Crear la carpeta _Content_

Lo primero que se debe hacer es crear la carpeta content en el src del projecto.

## Archivo content.config.ts

El archivo content.config.ts es el archivo mas importante en este caso. Aqui definieremos los esquemas, es decir, las propiedades que tiene nuestra coleccion.

Este archivo debe ir fuera de cualqueir carpeta, justo en el src del proyecto.
