const cursos = [
  {
    "codigo": "DN-0101",
    "nombre": "Introducción a la administración",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0102",
    "nombre": "Matemática financiera",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0103",
    "nombre": "Contabilidad I",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0104",
    "nombre": "Fundamentos de economía",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0105",
    "nombre": "Estadística I",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0106",
    "nombre": "Contabilidad II",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0103"
    ]
  },
  {
    "codigo": "DN-0107",
    "nombre": "Microeconomía",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0104"
    ]
  },
  {
    "codigo": "DN-0108",
    "nombre": "Comportamiento organizacional",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0109",
    "nombre": "Estadística II",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0105"
    ]
  },
  {
    "codigo": "DN-0110",
    "nombre": "Macroeconomía",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0107"
    ]
  },
  {
    "codigo": "DN-0111",
    "nombre": "Contabilidad Intermedia I",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0106"
    ]
  },
  {
    "codigo": "DN-0112",
    "nombre": "Derecho empresarial",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0113",
    "nombre": "Contabilidad Intermedia II",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0111"
    ]
  },
  {
    "codigo": "DN-0114",
    "nombre": "Matemática aplicada",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0115",
    "nombre": "Formulación y evaluación de proyectos I",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0116",
    "nombre": "Gerencia de operaciones",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "DN-0117",
    "nombre": "Investigación de mercados",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0109"
    ]
  },
  {
    "codigo": "DN-0118",
    "nombre": "Gerencia de recursos humanos",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0108"
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