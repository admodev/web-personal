const profile = {
  fullName: "Adolfo Moyano",
  description: "FULL-STACK DEVELOPER",
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: "foto.jpg",
  about: {
    title: `Adolfo Moyano 
    Developer & CEO Digital Solutions Argentina`,
    description: `Desde muy pequeño me encantaba estar rodeado de cosas relacionadas a la tecnología y la ciencia, hoy en día sigo teniendo la misma pasión por el mundo IT y demás areas relacionadas, lo lleve a lo laboral, me convertí en freelancer para despues ser CEO de mi propia agencia, con mi ayuda y la de mi equipo podemos llevar tu negocio al mundo digital.`,
    findMeOn: [
      {
        iconName: "location",
        text: "Buenos Aires, Argentina",
        url: "",
        hoverColor: "#546e7a",
      },
      {
        iconName: "twitter",
        text: "@admodev",
        url: "https://twitter.com/admodev",
        hoverColor: "#1da1f2",
      },
      {
        iconName: "email",
        text: "adolfohectormoyano@gmail.com",
        url: "mailto://adolfohectormoyano@gmail.com",
        hoverColor: "#546e7a",
      },
      {
        iconName: "lock",
        text: "@admodev",
        url: "https://keybase.io/admodev",
        hoverColor: "#e9641c",
      },
    ],
  },
  social: [
    {
      iconName: "twitter",
      url: "https://twitter.com/admodev",
      text: "I'm on Twitter",
      hoverColor: "#1da1f2",
    },
    {
      iconName: "telegram",
      url: "https://t.me/admodev",
      text: "I'm on Telegram",
      hoverColor: "#0088cc",
    },
    {
      iconName: "github",
      url: "https://github.com/admodev",
      text: "I'm on Github",
      hoverColor: "#000",
    },
    {
      iconName: "email",
      url: "mailto:adolfohectormoyano@gmail.com",
      text: "Send me an email",
      hoverColor: "#000",
    },
  ],
};

const projects = [
  {
    title: "Generate Argentina",
    img: "",
    description:
      "Sitio web que reune emprendedores con inversionistas, todo en un esquema piramidal, el mismo está desarrollado en PHP7, con Golang para encriptación y blockchain, SASS para los estilos y MySQL para base de datos.",
    categories: ["Full Stack", "LAMP", "Go"],
    siteUrl: "https://blooming-coast-24528.herokuapp.com/",
    sourceCodeUrl: "https://github.com/admodev/generate-argentina",
  },
  {
    title: "HaciaDentro Coaching",
    img: "",
    description:
      "Web de coaching y desarrollo personal, donde se encuentran alojados cursos y charlas de motivación y coach, a los cuales se puede obtener acceso mediante un pago online con tarjeta o presencial en rapipago, ya que cuenta con la api de Mercado Pago la misma está desarrollada en PHP7, el frontend está hecho con REACT, REACT Boostrap, SCSS y cómo base de datos utilicé MySQL.",
    categories: ["PHP", "MySQL", "React"],
    siteUrl: "https://haciadentrocoaching.now.sh",
    sourceCodeUrl: "https://github.com/admodev/hacia-dentro-coaching",
  },
  {
    title: "Buen Provecho",
    img: "",
    description:
      "SPA de delivery de comida, la cual cuenta con la posibilidad de elegir donde se va a enviar la comida, pedir la comida aclarando alergias y gustos personales para los condimentos y la opción de elegir como pagar, cuenta con la api de Mercado Pago, esta web está desarrollada con Angular9, utilizando routing para las views y que se mantenga cómo single page application, tiene angular powered bootstrap para los estilos y SASS para preprocesar el CSS, en esta web ya que fue desarrollada en angular utilicé typescript para los componentes, utilicé directivas estructurales y en esta web utilicé el stack MEAN completo (MongoDB, Express, Angular y Nodejs).",
    categories: ["Angular", "MongoDB", "Node"],
    siteUrl: "https://buenprovechocomida.now.sh",
    sourceCodeUrl: "https://github.com/admodev/buen-provecho-spa",
  },
  {
    title: "Digital Solutions Argentina",
    img: "",
    description:
      "Sitio web de mi agencia, está desarrollado de manera simple, eficaz y totalmente accesible, hecha con HTML, CSS y Javascript, esta web es la que utilizamos para trabajar, a la hora de encontrarnos en Google o cualquier otro motor de búsqueda, la gente llega a esta web y nos contacta.",
    categories: ["CSS", "Javascript"],
    siteUrl: "https://digitalsolutionsargentina.now.sh/",
    sourceCodeUrl:
      "https://github.com/admodev/digital-solutions-argentina-oficial",
  },
];
const formUrl = "http://localhost:4000";
const ReCAPTCHAKey = "6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu";
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = "no-work-icon.jpg";

export { profile, projects, formUrl, ReCAPTCHAKey, missingProjectIcon };
