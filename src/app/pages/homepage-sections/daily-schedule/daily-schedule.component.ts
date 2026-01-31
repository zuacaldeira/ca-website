import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  timeRange: string;
  icon: string;
  title: string;
  longDescription: string;
}

interface DailySchedule {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  activities: Activity[];
  footer: {
    title: string;
    description: string;
  };
}

@Component({
  selector: 'app-daily-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.css'
})
export class DailyScheduleComponent {
  scheduleData: DailySchedule = {
    hero: {
      title: "Unser Tagesablauf - Ein bunter Tag voller Entdeckungen! 🌈",
      subtitle: "Jeden Tag ein neues Abenteuer!",
      description: "Bei uns erlebt dein Kind einen strukturierten und abwechslungsreichen Tag voller Spiel, Spaß und Lernen. Unser Tagesablauf bietet die perfekte Balance zwischen freiem Spielen, gemeinsamen Aktivitäten und wichtigen Ruhepausen. So können sich alle Kinder wohlfühlen und in ihrem eigenen Tempo entwickeln."
    },
    activities: [
      {
        timeRange: "7:00 - 9:00 Uhr",
        icon: "🌅",
        title: "Ankommen & Freispiel",
        longDescription: "Die Kinder werden herzlich begrüßt und können in Ruhe ankommen. Beim Freispiel entscheiden sie selbst, womit und mit wem sie spielen möchten. Dies fördert Selbstständigkeit und soziale Kompetenzen. In den verschiedenen Spielbereichen wie der Bauecke, Puppenecke oder beim Malen können die Kinder ihre eigene Welt erschaffen und erste Kontakte zu anderen Kindern knüpfen."
      },
      {
        timeRange: "9:00 - 9:30 Uhr",
        icon: "🍎",
        title: "Gemeinsames Frühstück",
        longDescription: "Wir starten gemeinsam in den Tag! Beim gesunden Frühstück lernen die Kinder Tischkultur und genießen die Gemeinschaft. Gemeinsam am Tisch sitzen, plaudern und genießen – hier werden Freundschaften gestärkt und der Tag beginnt mit voller Energie. Die Kinder lernen verschiedene gesunde Lebensmittel kennen und entwickeln ein Gefühl für ausgewogene Ernährung."
      },
      {
        timeRange: "9:30 - 11:30 Uhr",
        icon: "🎨",
        title: "Morgenkreis & Projektzeit",
        longDescription: "Im Morgenkreis singen, erzählen und planen wir gemeinsam. Danach warten kreative Angebote, Ausflüge oder spannende Projekte auf die Kinder. Jedes Kind wird gesehen und gehört. Ob beim Experimentieren in der Forscherecke, kreativem Gestalten mit bunten Farben, Turnen in der Halle oder auf Entdeckungsreise im Garten – hier können die Kinder ihre Talente entfalten und Neues ausprobieren."
      },
      {
        timeRange: "11:30 - 12:00 Uhr",
        icon: "🌳",
        title: "Garten & Bewegung",
        longDescription: "Raus an die frische Luft! Ob Klettern, Rennen oder Entdecken – hier können sich alle nach Herzenslust bewegen. Im Garten, auf dem Spielplatz oder bei Spaziergängen erleben die Kinder die Natur hautnah. Sie können im Sandkasten bauen, auf Bäume klettern, Verstecken spielen oder kleine Käfer beobachten. Bewegung an der frischen Luft stärkt das Immunsystem und fördert die motorische Entwicklung."
      },
      {
        timeRange: "12:00 - 12:45 Uhr",
        icon: "🍝",
        title: "Mittagessen",
        longDescription: "Zeit für eine leckere, ausgewogene Mahlzeit. Gemeinsam schmeckt es am besten! Bei unserem frisch zubereiteten Mittagessen probieren die Kinder neue Geschmäcker und lernen verschiedene Gerichte kennen. In gemütlicher Atmosphäre üben sie Tischmanieren und genießen das gemeinsame Essen. Jedes Kind darf in seinem eigenen Tempo essen und wird respektvoll begleitet."
      },
      {
        timeRange: "12:45 - 14:00 Uhr",
        icon: "💤",
        title: "Mittagsruhe",
        longDescription: "Die jüngeren Kinder machen Mittagsschlaf, während die größeren Kinder bei ruhigen Aktivitäten entspannen können. Nach dem actionreichen Vormittag ist Ruhe wichtig, damit neue Abenteuer beginnen können. Die Kleinen schlummern in kuscheligen Bettchen mit ihren Lieblingskuscheltieren, begleitet von sanfter Musik. Die Größeren können bei Geschichten lauschen, leise puzzeln oder malen."
      },
      {
        timeRange: "14:00 - 15:30 Uhr",
        icon: "🎭",
        title: "Nachmittagsangebot",
        longDescription: "Freies Spielen, Basteln, Vorlesen oder kleine Projekte – der Nachmittag bietet Raum für individuelle Interessen. Die Kinder können ihren Hobbys nachgehen, neue Dinge ausprobieren oder einfach entspannt spielen. Ob Rollenspiele in der Puppenecke, Konstruieren mit Bauklötzen oder kreatives Basteln – hier entstehen die schönsten Ideen. Der Nachmittag gibt Zeit für vertieftes Spiel und besondere Projekte."
      },
      {
        timeRange: "15:30 - 17:00 Uhr",
        icon: "🏠",
        title: "Abholzeit & Ausklang",
        longDescription: "Der Tag klingt entspannt aus. Die Kinder können beim Freispiel den Tag Revue passieren lassen, bis sie abgeholt werden. In ruhiger Atmosphäre spielen sie weiter, erzählen den Eltern stolz von ihren Erlebnissen und freuen sich schon auf morgen. Die Erzieher nehmen sich Zeit für einen kurzen Austausch mit den Eltern über besondere Momente des Tages. Bis bald!"
      }
    ],
    footer: {
      title: "Flexibel & Individuell",
      description: "Unser Tagesablauf bietet Struktur und Sicherheit, bleibt aber flexibel genug, um auf die Bedürfnisse der Kinder einzugehen. Besondere Ereignisse, das Wetter oder spontane Ideen der Kinder können den Tag auch mal verändern – denn Lernen passiert oft in den unerwarteten Momenten!"
    }
  };
}
