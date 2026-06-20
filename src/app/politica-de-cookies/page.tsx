import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Política de Cookies | Chris Fitness",
  description: "Información sobre el uso de cookies en chrisfitness.online.",
  robots: "noindex",
};

export default function PoliticaCookies() {
  return (
    <PolicyLayout title="Política de Cookies" lastUpdated="14 de junio de 2026">
      <p>
        Este sitio web, <strong>chrisfitness.online</strong>, utiliza cookies y tecnologías similares para
        mejorar la experiencia de navegación. A continuación te explicamos qué son, qué tipos usamos y cómo
        puedes gestionarlas, en cumplimiento del artículo 22.2 de la LSSICE y la Directiva 2009/136/CE.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
        web. Permiten que el sitio recuerde información sobre tu visita, como las preferencias de idioma o la
        sesión iniciada, con el objetivo de que tu experiencia sea más eficiente y personalizada.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>2.1 Cookies técnicas (necesarias)</h3>
      <p>
        Son imprescindibles para el correcto funcionamiento del sitio. No requieren tu consentimiento previo,
        ya que sin ellas el sitio no funcionaría correctamente.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Propósito</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>__next_*</td>
            <td>Necesarias para el funcionamiento del framework Next.js (renderizado, enrutamiento)</td>
            <td>Sesión</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Cookies analíticas (previa aceptación)</h3>
      <p>
        Nos permiten conocer cómo los usuarios navegan por el sitio para mejorar su funcionamiento y
        contenidos. Solo se activan si das tu consentimiento.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Proveedor</th>
            <th>Propósito</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics</td>
            <td>Distingue usuarios únicos y registra sesiones de navegación</td>
            <td>2 años / 24 meses</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Google Analytics</td>
            <td>Distingue usuarios (sesión)</td>
            <td>24 horas</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Cookies de terceros</h3>
      <p>
        Al hacer clic en el botón de WhatsApp o al acceder a contenidos externos enlazados, podrías recibir
        cookies de terceros (como Meta Platforms) fuera de nuestro control. Estas plataformas disponen de
        sus propias políticas de privacidad y cookies.
      </p>

      <h2>3. ¿Cómo puedo gestionar las cookies?</h2>
      <p>
        Puedes configurar las cookies en cualquier momento a través del panel de preferencias que aparece
        en tu primera visita al Sitio. Además, puedes gestionarlas directamente desde tu navegador:
      </p>
      <ul>
        <li>
          <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de
          sitios
        </li>
        <li>
          <strong>Mozilla Firefox:</strong> Configuración → Privacidad y seguridad → Cookies y datos del
          sitio
        </li>
        <li>
          <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web
        </li>
        <li>
          <strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio
        </li>
      </ul>
      <p>
        Ten en cuenta que bloquear o eliminar cookies técnicas puede afectar al funcionamiento del Sitio.
        Bloquear las cookies analíticas no afectará a tu navegación, pero nos impedirá mejorar el servicio
        basándonos en estadísticas de uso.
      </p>

      <h2>4. Retirada del consentimiento</h2>
      <p>
        Puedes retirar tu consentimiento para el uso de cookies analíticas en cualquier momento accediendo
        al panel de preferencias de cookies disponible en el pie de página del Sitio, o eliminando las
        cookies almacenadas en tu navegador siguiendo los pasos indicados anteriormente.
      </p>

      <h2>5. Más información</h2>
      <p>
        Para más información sobre el tratamiento de tus datos, consulta nuestra{" "}
        <a href="/politica-de-privacidad">Política de Privacidad</a>. Si tienes cualquier pregunta sobre
        el uso de cookies, puedes contactarnos a través del canal de WhatsApp habilitado en la web.
      </p>
      <p>
        También puedes obtener más información sobre las cookies y su gestión en la web de la{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          Agencia Española de Protección de Datos (AEPD)
        </a>.
      </p>

      <h2>6. Actualización de esta política</h2>
      <p>
        Podemos actualizar esta Política de Cookies cuando incorporemos nuevas funcionalidades al Sitio o
        cuando cambien las cookies utilizadas por nuestros proveedores. La versión vigente estará siempre
        publicada en esta página con su fecha de actualización.
      </p>
    </PolicyLayout>
  );
}
