import { c as create_ssr_component, i as escape } from "../../../chunks/ssr.js";
const privacyText = {
  title: "Datenschutzerklärung",
  content: `
        <section>
    <h2 class="text-2xl font-bold mb-4">Einleitung</h2>
    <p>Die UMR, Diefenbachgasse 53/1, 1150 Wien die in ihrer Funktion als die für die Verarbeitung Verantwortliche (die „Gesellschaft“) handelt, stellt diese Datenschutzerklärung („Erklärung“) bezüglich der Verarbeitung Ihrer personenbezogenen Bewerberdaten als eine betroffene Person (weitere Details siehe unten) für die in dieser Erklärung beschriebenen Zwecke zur Verfügung. Diese Erklärung gilt auch für die Standorte der Gesellschaft in Deutschland und in der Schweiz.</p>
    <p>Aufgrund geschäftlicher Erfordernisse und Initiativen ist es in bestimmten Fällen möglich, dass die Gesellschaft UMR und ihre verbundenen Unternehmen im Zusammenhang mit den in dieser Erklärung aufgeführten Aktivitäten als gemeinsam für die Verarbeitung Verantwortliche handeln. In einem solchen Fall können Sie sich an UMR oder ein anderes in Anhang I aufgeführtes verbundenes Unternehmen wenden. Wenn ein solcher Fall eintritt, werden wir Sie rechtzeitig über die gemeinsame Verantwortlichkeit und die Aufteilung der von der jeweiligen Partei wahrgenommenen Aufgaben informieren.</p>
    <p>Wir bitten Sie, diese Erklärung sorgfältig zu lesen. Falls Sie Fragen zu Ihren Rechten und Pflichten im Zusammenhang mit dem Schutz personenbezogener Daten haben, können Sie uns unter der hier angegebenen E-Mail-Adresse erreichen: dataprotection-germany@nttdata.com</p>
    <p>Sofern in diesem Dokument nichts anderes festgelegt ist, haben die in dieser Erklärung verwendeten Begriffe dieselbe Bedeutung wie in den jeweils anwendbaren datenschutzrechtlichen Regelungen.</p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Für wen gilt diese Erklärung?</h2>
    <p>Die Erklärung gilt für alle Bewerberinnen und Bewerber, die sich einem Auswahlprozess durch die Gesellschaft unterziehen. Eine Bewerberin/ ein Bewerber ist eine natürliche Person, die sich auf eine offene Stelle bei der Gesellschaft beworben hat, um danach Mitarbeiterin/ Mitarbeiter der Gesellschaft zu werden.</p>
    <p>„Bewerberinnen“ und „Bewerber“ werden nachfolgend auch als „Sie“ oder die „betroffene Person“ bezeichnet.</p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Welche Daten werden gemäß dieser Erklärung verarbeitet?</h2>
    <p>Bevor Sie einen Arbeitsvertrag abschließen, und während des Auswahlprozesses kann es passieren, dass die Gesellschaft Daten über Sie erfasst. Diese Informationen bezeichnen wir als „personenbezogene Daten“. Dazu zählen:</p>
    <ul class="list-disc ml-6">
        <li><strong>Persönliche Angaben:</strong> Name, Kontaktdaten der Bewerberin/ des Bewerbers (z. B. E-Mail, Telefonnummer, Anschrift), gesprochene Sprache(n), Geschlecht, Geburtsdatum und -ort, nationale Identifikationsnummer, Sozialversicherungsnummer, Familienstand/ Lebenspartnerschaft, Familienangehörige, Kontaktinformationen für Notfälle sowie Fotos.</li>
        <li><strong>Nach Ausländerrecht erforderliche Unterlagen:</strong> Nationalität, Passdaten, Ausweisdaten, Angaben zur Aufenthalts- oder Arbeitserlaubnis.</li>
        <li><strong>Berufliche Informationen:</strong> Angaben aus dem Bewerbungsschreiben und Lebenslauf, Beurteilungen sowie vom Personalsachbearbeiter während der Vorstellungsgespräche gemachte Notizen, berufliche Laufbahn und Qualifikationen, Empfehlungen durch Dritte.</li>
    </ul>
    <p>Die Gesellschaft kann auch besondere Kategorien von Daten verarbeiten, wie z. B. Hintergrundprüfungen (sofern zulässig und erforderlich), Gesundheits-/ medizinische Informationen oder Grad einer Behinderung, Informationen über die Mitgliedschaft in einer Gewerkschaft, Daten, aus denen die Rasse oder ethnische Herkunft, die politische Meinung oder religiöse Überzeugungen hervorgehen, sowie biometrische Daten, wenn dies erforderlich, gerechtfertigt und dem Zweck angemessen ist.</p>
    <p>Bitte beachten Sie, dass es sich bei der vorstehenden Aufzählung um Beispiele handelt. Sollte die Verarbeitung anderer personenbezogener Daten erforderlich sein, werden Sie von der Gesellschaft informiert.</p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Woher stammen die Daten?</h2>
    <p>Ihre personenbezogenen Daten können u. a. auf folgende Weise erfasst werden:</p>
    <ul class="list-disc ml-6">
        <li>Direkt von Ihnen durch Ihre Bewerbung/ Ihren Lebenslauf;</li>
        <li>Dritte, wie z. B. Stellenportale, berufliche soziale Netzwerke, Personalagenturen, Personalberater oder Headhunter sowie Bildungseinrichtungen oder Universitäten, Behörden (z. B. Hintergrundprüfungen, Gesundheits-/ medizinische Informationen usw.).</li>
    </ul>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Auf welcher Rechtsgrundlage und zu welchem Zweck verarbeitet die Gesellschaft Ihre personenbezogenen Daten?</h2>
    <p>Die Verarbeitung Ihrer personenbezogenen Daten ist erforderlich, um Ihre Anfrage als betroffene Person vor dem Abschluss eines Arbeitsvertrags zu analysieren und zu bearbeiten. Eine Weigerung, uns Ihre personenbezogenen Daten zur Verfügung zu stellen, würde es unmöglich machen, das Auswahlverfahren durchzuführen und abzuschließen.</p>
    <p>Die Gesellschaft verarbeitet die personenbezogenen Daten unter Einhaltung der datenschutzrechtlichen Regelungen für die folgenden Zwecke:</p>
    <ul class="list-disc ml-6">
        <li><strong>Zur Bearbeitung der Bewerbung:</strong> Prüfung Ihrer Berufsausbildung/ Ihrer Erfahrung, Durchführung von Hintergrundprüfungen, Ermöglichung der Kommunikation mit Ihnen.</li>
        <li><strong>Zur Erfüllung gesetzlicher Pflichten:</strong> Umgang mit Rechtsansprüchen, Einhaltung von Vorschriften und Sicherheitsanforderungen.</li>
        <li><strong>Im Rahmen des berechtigten Interesses:</strong> Sicherstellung der Geschäftsfortführung und Sicherheitsmaßnahmen.</li>
    </ul>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Durch welche Sicherheitsmaßnahmen schützen wir Ihre personenbezogenen Daten?</h2>
    <p>Ihre personenbezogenen Daten werden durch angemessene administrative, technische und physische Maßnahmen geschützt, um Missbrauch, unbefugte Zugriffe oder Verluste zu verhindern. Zu den Sicherheitsmaßnahmen gehören:</p>
    <ul class="list-disc ml-6">
        <li>Pseudonymisierung und Verschlüsselung personenbezogener Daten;</li>
        <li>Kontinuierliche Sicherstellung der Vertraulichkeit und Resilienz der Verarbeitungssysteme;</li>
        <li>Regelmäßige Prüfungen der Sicherheitsmaßnahmen.</li>
    </ul>
</section>
<section>
    <h2 class="text-2xl font-bold mb-4">Welche Daten werden gemäß dieser Erklärung verarbeitet?</h2>
    <p>
        Bevor Sie einen Arbeitsvertrag abschließen, und während des Auswahlprozesses kann es passieren, dass die Gesellschaft Daten über Sie erfasst. Diese Informationen bezeichnen wir als „personenbezogene Daten“. Dazu zählen:
    </p>
    <ul class="list-disc pl-8">
        <li>
            <strong>Persönliche Angaben:</strong> Name, Kontaktdaten der Bewerberin/ des Bewerbers (z. B. E-Mail, Telefonnummer, Anschrift), gesprochene Sprache(n), Geschlecht, Geburtsdatum und -ort, nationale Identifikationsnummer, Sozialversicherungsnummer, Familienstand/ Lebenspartnerschaft, Familienangehörige, Kontaktinformationen für Notfälle sowie Fotos.
        </li>
        <li>
            <strong>Nach Ausländerrecht erforderliche Unterlagen:</strong> Nationalität, Passdaten, Ausweisdaten, Angaben zur Aufenthalts- oder Arbeitserlaubnis.
        </li>
        <li>
            <strong>Berufliche Informationen:</strong> Angaben aus dem Bewerbungsschreiben und Lebenslauf, Beurteilungen sowie vom Personalsachbearbeiter während der Vorstellungsgespräche gemachte Notizen, berufliche Laufbahn und Qualifikationen, Empfehlungen durch Dritte.
        </li>
    </ul>
    <p>
        Die Gesellschaft kann auch besondere Kategorien von Daten verarbeiten. Zu diesen Daten gehören Hintergrundprüfungen (in dem Umfang, in dem diese zulässig und nach lokalen Gesetzen unbedingt erforderlich sind), Gesundheits-/ medizinische Informationen oder Grad einer Behinderung, Informationen über die Mitgliedschaft in einer Gewerkschaft, Daten, aus denen die Rasse oder ethnische Herkunft, die politische Meinung oder religiöse Überzeugungen hervorgehen, sowie biometrische Daten, wenn dies erforderlich, gerechtfertigt und dem verfolgten Zweck angemessen ist.
    </p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Woher stammen die Daten?</h2>
    <p>
        Ihre personenbezogenen Daten können u. a. auf folgende Weise erfasst werden:
    </p>
    <ul class="list-disc pl-8">
        <li>Direkt von Ihnen durch Ihre Bewerbung/ Ihren Lebenslauf;</li>
        <li>
            Dritte, wie z. B.: Stellenportale, berufliche soziale Netzwerke, Personalagenturen, Personalberater oder Headhunter sowie Bildungseinrichtungen oder Universitäten, Behörden (z. B. Hintergrundprüfungen, Gesundheits-/ medizinische Informationen usw.). In diesem Fall handelt der Dritte als eigenständig Verantwortlicher für die Verarbeitung und wir gehen davon aus, dass Sie Ihre Einwilligung zur Weitergabe der in der Bewerbung enthaltenen personenbezogenen Daten gegeben haben.
        </li>
    </ul>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Auf welcher Rechtsgrundlage und zu welchem Zweck verarbeitet die Gesellschaft Ihre personenbezogenen Daten?</h2>
    <p>
        Die Verarbeitung Ihrer personenbezogenen Daten ist erforderlich, um Ihre Anfrage als betroffene Person vor dem Abschluss eines Arbeitsvertrags zu analysieren und zu bearbeiten. Eine Weigerung, uns Ihre personenbezogenen Daten zur Verfügung zu stellen, würde es uns unmöglich machen, das Auswahlverfahren durchzuführen und abzuschließen, was auch bedeutet, dass wir keine Möglichkeit hätten, Ihnen ein Beschäftigungsangebot zu machen.
    </p>
    <p>Die Gesellschaft verarbeitet die personenbezogenen Daten unter Einhaltung der datenschutzrechtlichen Regelungen für die folgenden Zwecke und auf folgender Rechtsgrundlage:</p>
    <ul class="list-disc pl-8">
        <li><strong>Zur Bearbeitung der Bewerbung:</strong> Bearbeitung Ihrer Bewerbung/ Ihres Lebenslaufs, Prüfung der Berufserfahrung, Durchführung von Hintergrundprüfungen (soweit gesetzlich zulässig), Einholung von Referenzen.</li>
        <li><strong>Zur Erfüllung gesetzlicher Pflichten:</strong> Umgang mit Rechtsansprüchen, Einhaltung von Gesundheits- und Sicherheitsanforderungen.</li>
        <li><strong>Im Rahmen des berechtigten Interesses:</strong> Sicherstellung der Unternehmensfortführung, Sicherheitsmaßnahmen wie Videoüberwachung bei Vorstellungsgesprächen vor Ort.</li>
    </ul>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Durch welche Sicherheitsmaßnahmen schützen wir Ihre personenbezogenen Daten?</h2>
    <p>
        Ihre personenbezogenen Daten werden elektronisch und manuell verarbeitet und durch angemessene Sicherheitsmaßnahmen geschützt. Dazu gehören:
    </p>
    <ul class="list-disc pl-8">
        <li>Pseudonymisierung und Verschlüsselung personenbezogener Daten;</li>
        <li>Fortlaufende Sicherstellung der Vertraulichkeit, Integrität und Verfügbarkeit der Verarbeitungssysteme;</li>
        <li>Regelmäßige Überprüfung der Sicherheitsmaßnahmen.</li>
    </ul>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Zugriff auf Ihre personenbezogenen Daten</h2>
    <p>
        Die Gesellschaft kann Ihre personenbezogenen Daten an andere Unternehmen der NTT Data Group weitergeben, um Berichtszwecke, administrative und konzernorganisatorische Zwecke zu erfüllen. Diese Unternehmen können sich innerhalb oder außerhalb des EWR befinden.
    </p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Übermittlung personenbezogener Daten</h2>
    <p>
        Die Gesellschaft kann personenbezogene Daten in andere Länder außerhalb des Europäischen Wirtschaftsraums übermitteln, unter Einhaltung von Maßnahmen wie den Standardvertragsklauseln, um ein angemessenes Datenschutzniveau zu gewährleisten.
    </p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Ihre Rechte bezüglich der Verarbeitung personenbezogener Daten</h2>
    <p>
        Sie haben das Recht, Auskunft über Ihre gespeicherten personenbezogenen Daten zu verlangen, deren Richtigkeit zu überprüfen, Berichtigungen vorzunehmen, die Löschung oder Einschränkung der Verarbeitung zu beantragen oder der Verarbeitung zu widersprechen. Wenden Sie sich dazu an: <a href="mailto:dataprotection-germany@nttdata.com" class="text-blue-600">dataprotection-germany@nttdata.com</a>.
    </p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Aufbewahrungsfristen</h2>
    <p>
        Die personenbezogenen Daten werden für die Dauer des Bewerbungsverfahrens und ggf. für weitere 6 Monate (in der Schweiz: 3 Monate) gespeichert. Daten können länger aufbewahrt werden, wenn gesetzlich erforderlich, oder mit ausdrücklicher Einwilligung für zukünftige Stellenangebote.
    </p>
</section>

<section>
    <h2 class="text-2xl font-bold mb-4">Aktualisierung der Datenschutzerklärung</h2>
    <p>
        Die Gesellschaft behält sich vor, diese Erklärung zu ändern oder zu aktualisieren. Änderungen treten in Kraft, wenn die überarbeitete Erklärung veröffentlicht wird, sofern nichts anderes vorgeschrieben ist.
    </p>
</section>

    `
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-4xl mx-auto px-4 py-16"><div class="bg-white rounded-xl shadow-lg p-8"><h1 class="text-3xl font-bold text-gray-900 mb-8">${escape(privacyText.title)}</h1> <div class="prose prose-lg max-w-none"><!-- HTML_TAG_START -->${privacyText.content}<!-- HTML_TAG_END --></div></div></div>`;
});
export {
  Page as default
};
