import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | Chris Fitness",
  description: "Cómo tratamos tus datos personales en Chris Fitness.",
  robots: "noindex",
};

export default function PoliticaPrivacidad() {
  return (
    <PolicyLayout title="Política de Privacidad" lastUpdated="14 de junio de 2026">
      <p>
        En <strong>Chris Fitness</strong> (Cristian Fandos) nos comprometemos a proteger tu privacidad y a
        tratar tus datos personales con total transparencia, de conformidad con el Reglamento (UE) 2016/679
        del Parlamento Europeo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> Cristian Fandos</li>
        <li><strong>Nombre comercial:</strong> Chris Fitness</li>
        <li><strong>NIF:</strong> [NIF del titular]</li>
        <li><strong>Domicilio:</strong> [Dirección postal]</li>
        <li><strong>Contacto:</strong> a través del formulario de WhatsApp habilitado en la web</li>
      </ul>

      <h2>2. Datos personales que recopilamos</h2>
      <p>Dependiendo de cómo interactúes con nosotros, podemos tratar los siguientes datos:</p>
      <ul>
        <li><strong>Datos de contacto:</strong> nombre y número de teléfono cuando nos escribes por WhatsApp.</li>
        <li>
          <strong>Datos de salud y condición física:</strong> información que compartes voluntariamente sobre
          tu estado físico, objetivos de entrenamiento, lesiones o condiciones médicas relevantes, necesaria
          para prestar el servicio de entrenamiento personalizado.
        </li>
        <li>
          <strong>Datos de navegación:</strong> dirección IP, tipo de navegador y páginas visitadas, recogidos
          a través de cookies técnicas y analíticas (ver Política de Cookies).
        </li>
      </ul>

      <h2>3. Finalidades y base jurídica del tratamiento</h2>
      <table>
        <thead>
          <tr>
            <th>Finalidad</th>
            <th>Base jurídica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gestionar la relación contractual y prestar el servicio de entrenamiento</td>
            <td>Ejecución de un contrato (art. 6.1.b RGPD)</td>
          </tr>
          <tr>
            <td>Responder a consultas y solicitudes de información</td>
            <td>Interés legítimo del responsable (art. 6.1.f RGPD)</td>
          </tr>
          <tr>
            <td>Envío de comunicaciones comerciales sobre servicios propios</td>
            <td>Consentimiento del interesado (art. 6.1.a RGPD)</td>
          </tr>
          <tr>
            <td>Cumplimiento de obligaciones legales (fiscales, contables)</td>
            <td>Obligación legal (art. 6.1.c RGPD)</td>
          </tr>
          <tr>
            <td>Análisis de uso del sitio web (cookies analíticas)</td>
            <td>Consentimiento del interesado (art. 6.1.a RGPD)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Datos de salud</h2>
      <p>
        Los datos relativos a tu salud y condición física constituyen una categoría especial de datos personales
        conforme al art. 9 del RGPD. Los tratamos únicamente sobre la base de tu <strong>consentimiento
        explícito</strong>, que prestas al facilitárnoslos voluntariamente para la prestación del servicio de
        entrenamiento personalizado.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Conservaremos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron
        recogidos y, en todo caso, durante los plazos legalmente exigidos:
      </p>
      <ul>
        <li>Datos de clientes activos: durante la vigencia de la relación contractual.</li>
        <li>Tras la finalización del servicio: máximo 5 años por obligaciones fiscales y comerciales.</li>
        <li>Datos de consultas sin contratación: 1 año desde el último contacto.</li>
        <li>Datos de cookies: según se especifica en la Política de Cookies.</li>
      </ul>

      <h2>6. Comunicación de datos a terceros</h2>
      <p>
        No cedemos tus datos personales a terceros, salvo en los siguientes supuestos:
      </p>
      <ul>
        <li>
          <strong>WhatsApp (Meta Platforms Ireland Ltd.):</strong> la comunicación a través de WhatsApp está
          sujeta a la política de privacidad de Meta. Te recomendamos consultarla en su sitio oficial.
        </li>
        <li>
          <strong>Proveedores de servicios tecnológicos:</strong> plataformas de entrenamiento, almacenamiento
          en la nube o herramientas de gestión, que actúan como encargados del tratamiento bajo contrato
          conforme al art. 28 RGPD.
        </li>
        <li>
          <strong>Obligaciones legales:</strong> cuando sea requerido por la ley o autoridades competentes.
        </li>
      </ul>
      <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>

      <h2>7. Tus derechos</h2>
      <p>
        Como interesado, puedes ejercer en cualquier momento los siguientes derechos reconocidos por el RGPD:
      </p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos («derecho al olvido»).</li>
        <li><strong>Limitación:</strong> restringir el tratamiento en determinadas circunstancias.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
        <li>
          <strong>Retirada del consentimiento:</strong> sin que ello afecte a la licitud del tratamiento
          anterior a su retirada.
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, contacta con nosotros a través de WhatsApp o la vía de contacto indicada
        en el Aviso Legal, indicando tu nombre, el derecho que deseas ejercer y adjuntando copia de tu DNI u
        otro documento identificativo.
      </p>
      <p>
        Si consideras que el tratamiento no se ajusta a la normativa, tienes derecho a presentar una reclamación
        ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>:{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado
        al riesgo, de conformidad con el art. 32 del RGPD, incluyendo el uso de conexiones cifradas (HTTPS)
        y el acceso restringido a los datos.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        Podemos actualizar esta Política de Privacidad para adaptarla a novedades legislativas o cambios en
        nuestros servicios. La versión vigente estará siempre disponible en esta página con la fecha de
        última actualización.
      </p>
    </PolicyLayout>
  );
}
