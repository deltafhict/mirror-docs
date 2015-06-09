<?php
  include_once('util/header.php');
  include_once('util/menu.php');
?>

<h1> Product Documentatie</h1>
<ul>
  <li>
    <a href="">Gemaakte ontwerpen</a>
    <ul>
      <li><a href="">Systeemarchitectuur</a></li>
      <li><a href="">Communicatieprotocol</a></li>
    </ul>
  </li>
  <li><a href="">Documentatie van code</a></li>
  <li><a href="">Documentatie van gebruikte hardware</a></li>
  <li><a href="">Documentatie van de deelonderzoeken</a></li>
</ul>

<h2>Gemaakte ontwerpen</h2>
<hr  />

<h3>Systeemarchitectuur</h3>
<img src="images/architectuur.png" class="image" />
<p>‘View’ is het scherm zoals het gepresenteerd wordt aan gebruiker, ‘server’ is waar alle data binnenkomt en verwerkt wordt (tevens wordt hier een selectie van deze data bewaard in de database) en alle sensoren die er onder hangen voorzien de server van input van de gebruiker.
  Omdat alles op hetzelfde punt binnenkomt bij de server, is het makkelijk om deze uit te breiden met extra sensoren.
  Omdat het systeem netjes verdeeld is in aparte delen, is het makkelijker om elk deel op zich te testen. Eén deel werkt onafhankelijk van de anderen en kan dus apart getest worden. Om dezelfde reden is het makkelijker om delen te vervangen of eventueel compleet weg te halen.
</p>

<h3>Communicatieprotocol</h3>
<p>Alle communicatie tussen de sensoren en de server zal in JSON gebeuren. Hierbij wordt gebruik gemaakt van websockets om de JSON naar de server te verzenden.
  Het default adres van de websocket waarnaar de JSON gestuurd moet worden is: ws://127.0.0.1:1337
  De server draait op localhost, dit omdat de sensoren aan dezelfde PC gekoppeld zijn als de server.
  Hieronder zie je een voorbeeld van wat de sensoren naar de server sturen:
</p>
<pre><code>{
    "app": "application name",
    "type": "voice | gesture",
    "action": "open | close",
    "person": "unknown | personId",
    "appointment": {
        "title": "titel of appointment",
        "desc": "description of appointment",
        "datetime": 1432105259
    }
}</pre></code>

<h2>Documentatie van code</h2>
<hr  />
<p>Op plekken waar het nuttig is is in de code zelf commentaar en documentatie (in de vorm van xml docstrings) toegevoegd. In principe heeft elke methode zijn eigen xml docstring die uitlegt wat de methode doet en waarom. Overige code heeft exra commentaar tussen de regels door om uit te leggen wat de code doet en waarom, indien dit nog niet duidelijk genoeg is aan de hand van de code zelf. Wij streven ernaar om code zo te schrijven dat er zo min mogelijk extra commentaar nodig is om het uit te leggen.</p>

<h2>Documentatie van hardware</h2>
<hr  />
<p>De gebruikte hardware (en ook sommige andere systeemcomponenten) hebben een eigen map met bijhorende informatie zoals
<ul>
  <li>‘waarom hebben we deze hardware gekozen’</li>
  <li>relevant onderzoek</li>
  <li>‘waar zijn we tegenaan gelopen, welke problemen hebben we gehad en hoe hebben we die opgelost’.</li>
</ul>
Deze informatie is niet inbegrepen in dit document maar is apart.
</p>

<h2>Documentatie van deelonderzoeken</h2>
<hr  />
<p>Zoals hierboven al uitgelegd, deelonderzoeken zijn apart bijgesloten bij elk systeemcomponent waar wij een deelonderzoek voor hebben gedaan.</p>

<?php include_once('util/footer.php'); ?>
