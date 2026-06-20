import type { Metadata } from "next";
import PolicyLayout from "@/components/ui/PolicyLayout";

export const metadata: Metadata = {
  title: "Aviso Legal | Chris Fitness",
  description: "Información legal del sitio web de Chris Fitness.",
  robots: "noindex",
};

export default function AvisoLegal() {
  return (
    <PolicyLayout title="Aviso Legal" lastUpdated="14 de junio de 2026">
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSICE), se informa de los siguientes datos identificativos:
      </p>
      <ul>
        <li><strong>Titular:</strong> Cristian Fandos</li>
        <li><strong>Nombre comercial:</strong> Chris Fitness</li>
        <li><strong>NIF:</strong> [NIF del titular]</li>
        <li><strong>Domicilio:</strong> [Dirección postal]</li>
        <li><strong>Sitio web:</strong> chrisfitness.online</li>
        <li><strong>Contacto:</strong> a través de WhatsApp en el enlace habilitado en la web</li>
      </ul>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio web <strong>chrisfitness.online</strong> (en adelante,
        «el Sitio»), titularidad de Cristian Fandos, que ofrece servicios de entrenamiento personal online.
      </p>
      <p>
        El acceso al Sitio implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este
        Aviso Legal. Si el usuario no está de acuerdo con alguna de estas condiciones, deberá abstenerse de utilizar
        el Sitio.
      </p>

      <h2>3. Condiciones de acceso y uso</h2>
      <p>
        El usuario se compromete a hacer un uso correcto del Sitio conforme a la ley, la moral y el orden público.
        Queda expresamente prohibido:
      </p>
      <ul>
        <li>Reproducir, distribuir o modificar los contenidos del Sitio sin autorización expresa del titular.</li>
        <li>Utilizar el Sitio con fines ilícitos, fraudulentos o contrarios a la buena fe.</li>
        <li>Introducir o difundir virus informáticos o cualquier otro sistema dañino.</li>
        <li>Suplantar la identidad de otros usuarios o del propio titular.</li>
      </ul>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio —incluyendo textos, imágenes, logotipos, diseño gráfico, código fuente y
        cualquier otro elemento— son propiedad de Cristian Fandos o de terceros que han autorizado su uso, y están
        protegidos por la normativa española e internacional sobre propiedad intelectual e industrial.
      </p>
      <p>
        Se autoriza la visualización y descarga privada de los contenidos únicamente para uso personal y no comercial,
        siempre que se mantengan intactos los avisos sobre propiedad intelectual. Cualquier otro uso requiere
        autorización previa y por escrito del titular.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no garantiza la disponibilidad continua del Sitio ni se hace responsable de interrupciones,
        errores técnicos o virus informáticos ajenos a su control. Asimismo, no responde por los daños derivados
        del uso indebido del Sitio por parte del usuario.
      </p>
      <p>
        Los contenidos del Sitio tienen carácter meramente informativo. Los resultados del entrenamiento personal
        dependen de factores individuales de cada usuario y no pueden garantizarse de forma genérica. El usuario
        debe consultar con un profesional sanitario antes de iniciar cualquier programa de ejercicio físico.
      </p>
      <p>
        El Sitio puede contener enlaces a páginas externas (p. ej. WhatsApp, redes sociales). El titular no controla
        dichos sitios y no se responsabiliza de su contenido ni de su política de privacidad.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Este Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada
        del acceso o uso del Sitio, las partes se someten, con renuncia expresa a cualquier otro fuero, a los
        Juzgados y Tribunales del domicilio del titular.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        El titular se reserva el derecho a modificar el presente Aviso Legal en cualquier momento. Los cambios
        serán efectivos desde su publicación en el Sitio. Se recomienda al usuario revisar periódicamente este
        documento.
      </p>
    </PolicyLayout>
  );
}
