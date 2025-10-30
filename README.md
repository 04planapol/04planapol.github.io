# Currículum Online — Pol Plana

## Anàlisi del projecte — Perfil d’usuari (User Persona)

**Nom:** Júlia Serra  
**Edat:** 28 anys  
**Professió:** Reclutadora júnior en una empresa tecnològica de Barcelona  

### Objectius principals
- Poder veure ràpidament el resum, habilitats i experiència de Pol per valorar si encaixa amb un perfil júnior o de pràctiques.  
- Poder descarregar o imprimir el CV fàcilment en PDF.  
- Tenir accés directe al seu LinkedIn o a altres projectes personals.  

### Necessitats i frustracions
- No vol perdre temps buscant la informació important.  
- No li agraden les webs que no són clares o que no s’adapten bé al mòbil.  
- Prefereix un disseny net i senzill que no distregui de la informació real.  

### Context d’ús
Normalment revisa els CV des de l’ordinador de l’oficina o el mòbil mentre fa entrevistes.  
Vol una pàgina ràpida, fàcil de llegir i amb tota la informació a mà.

---

## Anàlisi del projecte — Arquitectura de la informació

El projecte està plantejat com una **pàgina única** on tota la informació està organitzada per seccions clares: **Resum**, **Experiència**, **Habilitats**, **Idiomes** i **Projectes**.  
A la part superior hi ha una **barra de navegació fixa** amb botons que permeten saltar directament a cada secció. Això fa que la lectura sigui molt més àgil i evita que l’usuari hagi de fer molt scroll.

Cada apartat té un títol destacat i una estructura coherent:

- El **Resum** ofereix una descripció breu i personal del perfil.  
- L’**Experiència** mostra els llocs on he treballat amb les funcions més importants.  
- Les **Habilitats** i **Idiomes** es mostren com a etiquetes per identificar-los ràpidament.  
- Els **Projectes** mostren exemples pràctics del que he fet.  

També hi ha opcions com el **botó per imprimir el CV** i un **botó per canviar de tema (clar/fosc)**.  
Tot el contingut està pensat perquè sigui fàcil de llegir tant des d’un ordinador com des d’un mòbil, i també perquè s’imprimeixi correctament en PDF, amagant la navegació i deixant només la informació principal.  
Així, la pàgina serveix tant com a **CV web** com a **CV descarregable en format professional**.

---

## Anàlisi del projecte — Disseny visual

He buscat un **disseny net, modern i funcional**, amb colors suaus i una bona llegibilitat.  
La pàgina utilitza una **paleta clara amb tons blaus** com a color principal per donar sensació de professionalitat i calma.  
Els botons i enllaços utilitzen aquest color per indicar interacció sense saturar el disseny.

La tipografia és senzilla i fàcil de llegir, prioritzant fonts del sistema per assegurar compatibilitat i velocitat de càrrega.  
Les seccions tenen prou espai entre elles per facilitar la lectura i no donar sensació d’amuntegament.

S’ha afegit un **mode fosc** que canvia automàticament els colors amb una variable CSS, mantenint el contrast necessari per no perdre llegibilitat.  
També s’ha cuidat la versió per **mòbil**, fent que els elements s’adaptin a una sola columna i que la barra superior es pugui desplaçar horitzontalment si cal.

Per a la impressió, s’han fet **estils específics** que amaguen la navegació i els botons, eliminant les ombres i ajustant els marges perquè el resultat en PDF sigui net i professional.  
El resultat final és un **CV web senzill, ordenat i coherent** amb els coneixements bàsics de HTML, CSS i JavaScript.

---

## Enllaç públic al projecte
https://github.com/04planapol/04planapol.github.io

## Enllaç al projecte de Figma

[Figma - Disseny del CV](https://www.figma.com/make/YIFG9ihtybq54uTmWSouu5/Convert-HTML-to-Figma?node-id=0-1&p=f&t=1viFHK9BQzj3md9V-0&fullscreen=1)

---

## Estructura i tecnologies utilitzades

- **HTML semàntic** amb seccions (`header`, `nav`, `section`, `article`, etc.)  
- **CSS** amb variables, disseny responsive, barra fixa, targetes i mode fosc  
- **JavaScript** per al canvi de tema, botó d’imprimir i millores d’accessibilitat
