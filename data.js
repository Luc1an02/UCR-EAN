const cursos = [
  {
    "codigo": "DN-0101",
    "nombre": "Introducción a la administración",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-0001",
    "nombre": "Precálculo",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-1021",
    "nombre": "Cálculo para ciencias económicas I",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": [
      "MA-0001"
    ]
  },
  {
    "codigo": "EG-",
    "nombre": "Curso de Arte",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "RP-",
    "nombre": "Repertorio",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "EG-1",
    "nombre": "Curso Integrado de Humanidades I",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "PC-0200",
    "nombre": "Contabilidad Básica ",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0101"
    ]
  },
  {
    "codigo": "DN-0102",
    "nombre": "Aplicaciones Ofimáticas para la toma de decisiones",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-1022",
    "nombre": "Cálculo para ciencias económicas II",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "MA-1021"
    ]
  },
  {
    "codigo": "EF-",
    "nombre": "Actividad deportiva",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "EG-2",
    "nombre": "Curso Integrado de Humanidades II",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "EG-1"
    ]
  },
  {
    "codigo": "PC-0202",
    "nombre": "Contabilidad Intermedia I",
    "anio": 2,
    "ciclo": 3,
    "prerrequisitos": [
      "PC-0200"
    ]
  },
  {
    "codigo": "DN-0103",
    "nombre": "Administración de proyectos y herramientas para el análisis de datos",
    "anio": 2,
    "ciclo": 3,
    "prerrequisitos": [
      "DN-0102"
    ]
  },
  {
    "codigo": "PC-0240",
    "nombre": "Matemática financiera",
    "anio": 2,
    "ciclo": 3,
    "prerrequisitos": [
      "DN-0102"
      "MA-1022"
    ]
  },
  {
    "codigo": "XS-0276",
    "nombre": "Estadística general I",
    "anio": 2,
    "ciclo": 3,
    "prerrequisitos": [
      "MA-1021"
    ]
  },
  {
    "codigo": "XE-0156",
    "nombre": "Introducción a la economía",
    "anio": 2,
    "ciclo": 3,
    "prerrequisitos": []
  },
  {
    "codigo": "PC-0304",
    "nombre": "Contabilidad Intermedia II",
    "anio": 2,
    "ciclo": 4,
    "prerrequisitos": [
      "PC-0202"
      "PC-0240"
    ]
  },
  {
    "codigo": "DN-0104",
    "nombre": "Elementos fundamentales de la legislación empresarial",
    "anio": 2,
    "ciclo": 4,
    "prerrequisitos": [
      "DN-0101"
    ]
  },
  {
    "codigo": "DN-0119",
    "nombre": "Gerencia de calidad",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0120",
    "nombre": "Emprendimiento y creación de empresas",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0121",
    "nombre": "Administración financiera I",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0102",
      "DN-0113"
    ]
  },
  {
    "codigo": "DN-0122",
    "nombre": "Ventas y distribución",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0117"
    ]
  },
  {
    "codigo": "DN-0123",
    "nombre": "Liderazgo gerencial",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0118"
    ]
  },
  {
    "codigo": "DN-0124",
    "nombre": "Gerencia estratégica",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0125",
    "nombre": "Administración financiera II",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0121"
    ]
  },
  {
    "codigo": "DN-0126",
    "nombre": "Auditoría administrativa",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0127",
    "nombre": "Administración de la producción",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0116"
    ]
  },
  {
    "codigo": "DN-0128",
    "nombre": "Administración mediada por tecnologías de la información",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0129",
    "nombre": "Formulación y evaluación de proyectos II",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0115"
    ]
  },
  {
    "codigo": "DN-0130",
    "nombre": "Ética profesional",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0131",
    "nombre": "Mercados bursátiles",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0125"
    ]
  },
  {
    "codigo": "DN-0132",
    "nombre": "Administración pública",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0508",
    "nombre": "Seminario integrado de alta gerencia",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0117"
    ]
  },
  {
    "codigo": "OPT-01",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-02",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-03",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-04",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-05",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-06",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-07",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-08",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-09",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-10",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-11",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-12",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-13",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  }
];
