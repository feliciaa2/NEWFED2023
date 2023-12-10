# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
Felicia Augustine 

  #### Je startniveau:
Blauwe piste 

  #### Je focus:
Surface

</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
https://animalcrossing.nintendo.com/new-horizons/explore/

  #### Screenshot(s) van de eerste pagina (small screen): 
Explore
  <img src="./readme-images/websiteimg1.png" width="375px" alt="de explore pagina van de website">

  #### Screenshot(s) van de tweede pagina (small screen):
Artikelen
  <img src="./readme-images/" width="375px" alt="de artikel pagina van de website">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:
kleurenblindheid (geel)
- De tekst en plaatjes zijn nog duidelijk te zien, de kleuren wijken wel af van het orgineel. 
Combined loss diabetic eye disease 
- Het is lastig om tekst te lezen, vooral de kleine teksten zin lastig.
- Omdat veel dingen dichtbij elkaar staan kun je ze moeilijk zien. 

Screenreader test
- Bij de links geeft het bij buy now en learn more niet aan wat je kan leren of kopen.
- het geeft niet aan waar je naar toe gaat op de homepage.
- bepaalde link naar andere websites hebben geen goede beschrijving.
- de pagina kondigt de video op de homepage niet aan en heeft geen discriptie.

WCAG CHECKLIST
Test gedaan met Nathalie.
Wat zijn onze bevindingen?
<em>Content</em>
- de links, buttons en labels hebben geen unieke discriptie, bijvoorbeeld een knopje met koop nu, terwijl er geen titel is (h2) die aangeeft wat je gaat kopen. 
<em>Global code</em>
- tijdens het valideren van de code kreeg ik 2 foutmeldingen op de website ook is de html vol met Divs waar eigenlijk andere selectoren gebruikt konden worden.
<em>Images</em>
- niet alle afbeeldingen hebben een alt tekst!!!
<em>Media en Audio</em>
- De voorkant van de pagina heeft autoplay, je kunt de video niet pauzeren. en Bij andere videos spelen deze ook automatisch af, maar heb je de mogelijkheid om ze te pauzeren.
- Er zijn ook geen video captions...
<em>Controls</em>
- Niet alle links hebben een a 
- Niet alle controls hebben een focus state, zoals bijvoorbeeld bij de videos
- je kan ook moeilijk identificeren welke link je naar een andere pagina neemt omdat buttons en links hetzelfde lijken.
<em>Appearance</em>
- er is geen dark mode en geen high contrast mode!!

Extra over de artikel pagina.
- De artikel pagina is voor zowel mensen met een beperking en zonder beperking moeilijk om te navigeren en te lezen. Links en titels(h1,H2,H3) hebben dezelfde kleur. er zijn meerdere links die allemaal naar dezelfde pagina lijden en dit niet goed aangeven. 
- Bepaalde tekst die in de footer hoort (*blablabla) zit meteen onder de tekst waardoor het moeilijk te lezen is. Het is vooral een lap tekst waar je moeilijk uit kan halen wat het belangrijkste op de pagina is.


</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="./readme-images/brekdownschets2.pdf" width="375px" alt="breakdown van de hele explore pagina">

   <img src="./readme-images/breakdowns3chets-100.jpg" width="375px" alt="breakdown van de hele artikel pagina.">

  ### dynamisch deel van pagina: 


</details>


## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Ik heb vorige week mijn html skelet gemaakt (alle plaatjes, tekst etc. zitten er in ik moet alleen nog de videos er inzetten.). Deze week ben ik bezig geweest met de start van de opmaak. 
  - Ik heb alle h1,h2 en p's een kleur gegeven met css variables
  - Ik het het overgrootte gedeelte van de navigatie bar gemaakt.

<img src="./readme-images/voortgang1.png" width="375px" alt="screenshot van animal crossing explore pagina">
<img src="./readme-images/voortgang.png" width="375px" alt="screenshot van animal crossing menu">

  ### Agenda voor meeting
  samen met je groepje opstellen

Felicia
-Vragen over gebruik van h1,h2,h3. er zijn bepaalde stukjes in de tekst waar het niet helemaal duidelijk is of het een h2 of h3 moet zijn.
-Moet ik ook zelf dingen toevoegen of moet ik alleen de pagina na coderen?
-hoe programeer ik dat items na 1s tevoorschijn komen?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - maak gebruik later van intersect voor die pop up animatie ding
  -je hoeft niet verplicht zelf nog code toe te voegen aan je pagina
  - doe het stap voor stap begin met html
  - die breakdownschets moet nog dynamische delen er in.


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  ik ben niet heel veel verder gekomen deze week. Ik ben nu bezig met het maken van een image slider, maar dit is vrij lastig. Ook wil ik nog de videos in mijn website zetten want dit heb ik ook nog niet gedaan.

  ### Agenda voor meeting
Vragen
Felicia:
- Hoe maak ik een imageslider...
- Hoe krijg ik de background image van de site ACNH met het bewegende beeld...
- Hoe zorg ik dat mijn videos correct werken in html zonder dat het andere elemeten weghaalt
- kan ik de sections wel gebruiken aangezien niet in alle sections een directe h2 is?



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

- Maak van de sections articles dit past er beter bij.
- om achtergrond te laten bewegen gebruik background positions en dan kan je hem bewegen met cijfers.
- vier afbeeldingen naast elkaar zetten en dan van links naar recht scrollen. overflow x-scroll op de parent.
- toegankelijkheid videos: captions erbij zetten.
- html code netter maken, is nu erg rommelig.
- alles wat puur voor styling is kan je een div gebruiken
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

WCAG CHECKLIST en Screenreader test
Test alleen gedaan (ik was die dag ziek)
Wat zijn mijn bevindingen?
Controls
- verbetering van de omschrijving van de buttons, links en labels
Global code 
- Html is dit keer wel valide vergeleken met de test bij de officele website.
Keyboard
- De focus stijl moet nog beter uitgewerkt worden. Nu is hij nog niet goed zichtbaar en past nog niet helemaal bij de layout (behalve kleur), hier ga ik de komende dagen dus nog verder aan werken. 
- De focus stijl bij de video controls kan ik niet veranderen, ik ga nog onderzoeken hoe dit wel moet.
<img src="./readme-images/voorbeeldfocus.png" width="375px" alt="focus opmaak bij een plaatje">
<img src="./readme-images/Voorbeeldfucs2.png" width="375px" alt="Focus opmaak bij de video controls">

Headings
- Alle heading elementen worden opgenoemd en zijn op een goede volgorde. 
- Ik weet dit niet zeker maar misschien moeten sommige H2 verandered worden in een h3 omdat deze nog bij dezelfde sectie horen (ik zal dit bij de volgende feedbacksesie vragen)
Buttons
- Tijdens het voorlezen van de navigatie leest de screenreader eerst het hidden menu voor van het hamburger menu en niet het zichtbare tweede menu. dit komt misscien omdat het buttons zijn en geen links. Hopelijk kan ik dit probleem oplossen bij de feedback sessies.
- Je kunt de buttons in het menu wel aanklikken door te tabben 
<img src="./readme-images/nietvoorgelezenmenu.png" width="375px" alt="Dit menu wordt niet voorgelezen door de screenreader">

Links
- alle linkjes worden voorgelezen 
Images
- Ik moet sommige decorative images nog veranderen naar null empty alts, alle images hebben nu een alt discriptie terwijl voor sommige images dat misschien niet nodig is.
<img src="./readme-images/decarativeimgvb.png" width="375px" alt="voorbeeld van decorative image">

- Bij het laatste plaatje op de pagina staat in het plaatje animal crossing geschreven, dit heb ik niet in de alt tekst gezet, dit moet ik er dus nog bij zetten.
<img src="./readme-images/img3333.png" width="375px" alt="Image met tekst die niet in de alt tekst is weergegeven">

Media
- De videos bevatten geen captions, Ik heb het zojuist opgezocht en dit kan gedaan worden met een het "track" element. Ik ga dit hierna toevoegen.
- Verder is er op de website nu geen autoplay meer en kan alle media gepauzeerd worden.

Controls
- Alle links hebben nu aan a element
- en alle controls hebben een :focus state
- Er is nogsteeds geen skip link aanwezig, deze moet ik nog toevoegen.
- Bij de linkjes is nu wel duidelijk aangegeven of je een nieuwe tab opent of niet.
Appearence
- Er is nu wel een dark/light mode en highcontrast mode
<img src="./readme-images/darkmode.png" width="375px" alt="voorbeeld van darkmode op de website">


Foto's van de WCAG CHECKLIST
<img src="./readme-images/" width="375px" alt="Pagina 1 WCAG CHECKLIST">
<img src="./readme-images/" width="375px" alt="Pagina 2 WCAG CHECKLIST">
<img src="./readme-images/" width="375px" alt="Pagina 3 WCAG CHECKLIST">
<img src="./readme-images/" width="375px" alt="Pagina 4 WCAG CHECKLIST">
<img src="./readme-images/" width="375px" alt="Pagina 5 WCAG CHECKLIST">

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

- Tijdens het voorlezen van de navigatie leest de screenreader eerst het hidden menu voor van het hamburger menu en niet het zichtbare tweede menu. dit komt misscien omdat het buttons zijn en geen links. hoe los ik dit op?

- Vragen of de h2's verandered moeten worden naar h3's
- Als je tabt, tabt het ook op het hidden menu voordat je uberhaupt op het menu hebt geklikt, hoe verbeter ik dit?

- In mijn high contrast modus is er 1 h2 die niet van kleur veranderd , hoe los ik dit op?
- Ik heb classes gebruik in css en javascript voor bepaalde functies maar geen enkele in mijn html mag idt?
- Ik heb ook een Id gebruikt voor een accesability functie, mag ik deze gebruiken op twee verschillende html pagina's?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen


  - footer veranderen in section en stylen 
  - H2 veranderde door bepaalde kleur die was toegepast, opgelost.
  - Kopie bestand maken en sections veranderen in divs en articles.
  - Het voorlezen en tabben in het hidden menu is helaas niet opgelost... Ik ga kijken of ik op het internet dit probleem kan oplossen. 


</details>


## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
Het is mij uiteindelijk helaas niet gelukt op het menu tab probleem op te lossen, wat best een groot probleem is voor accsesability. Nu zie je als gebruiker niet waar de tab naar toe is gegaan omdat het naar het hidden menu is gesprongen. heel jammer 

 <video controls width="350">
	  <source src="./videos/misluktmenu.mov"/>
	</video>
</details>


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  Bron images:
  https://animalcrossing.nintendo.com/new-horizons/explore/
  
  Achtergrond website
  https://steamcommunity.com/sharedfiles/filedetails/?id=2210729580


  Bronnen code:
  Hoe gebruik je attribute selectors >>
  https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

  Dropshadows --> filter: drop-shadow(0 0 0.75rem crimson); {code is wel aangepast}
  https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow

  Dit stukje code:    -webkit-font-smoothing: antialiased; 
  = van https://animalcrossing.nintendo.com/new-horizons/explore/
  hierbij worden de gekartelde randen van rondingen en diagonale lijnen verzacht zodat het er beter uit ziet.

Outline ridge voor de focus mode.
  https://developer.mozilla.org/en-US/docs/Web/CSS/outline

Skip navigatie link maken
  https://www.w3schools.com/accessibility/accessibility_skip_links.php

  bronnen fonts: 
  https://fonts.google.com/specimen/Libre+Franklin?query=libre+franklin
  https://fonts.google.com/specimen/Zilla+Slab
</details>