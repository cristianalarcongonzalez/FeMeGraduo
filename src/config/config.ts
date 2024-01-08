export const config= {
    url:'http://localhost:4200',

    menuComponent:[
        {nombre: "PROGRAMA", url:'/programa'},
        {nombre: "1. INFORMACIÓN GENERAL", url:'/inf-general'},
        {nombre: "2. INFORMACIÓN ESPECÍFICA", url:'/inf-especifica'},
        {nombre: "3. PLANTEAMIENTO Y FORMULACIÓN", url:'/planteamiento-form'},
        {nombre: "4. JUSTIFICACIÓN", url:'/justificacion'},
        {nombre: "5. OBJETIVO GENERAL", url:'/objetivos'},
        {nombre: "6. OBJETIVOS ESPECÍFICOS", url:'/objetivosE'},
        {nombre: "7. BIBLIOGRAFÍA", url:'/bibliografia'},
        {nombre: "8. ADJUNTAR DOCUMENTOS", url:'/anexos'},
    ],
    

    menuComponentPracticas:[
        {nombre: "VER ESTADO DE PRACTICAS", url:'/practicas'},
        {nombre: "ANEXOS AVAL PRACTICAS", url:'/faseinitial'},
        {nombre: "ANEXOS FASE I", url:'/faseone'},
        {nombre: "ANEXOS FASE II", url:'/fasetwo'},
        {nombre: "SUBIR ANEXOS AVAL PRACTICAS", url:'/uploadsfilesfaseinitial'},
        {nombre: "SUBIR ANEXOS FASE I", url:'/uploadfilesfaseone'},
        {nombre: "SUBIR ANEXOS FASE II", url:'/uploadfilesfasetwo'},
        {nombre: "VER CRONOGRAMA", url:'/seeschedule'},
        {nombre: "ESTABLECER & VER CONVENIOS", url:'/establishmentagreement'},
    ]
};