const appData = {
  demoNote: "Los GIFs son demos visuales cortas generadas para mostrar el patrón del movimiento sin salir de la app.",
  warmup: [
    {
      name: "Movilidad lumbar tumbada boca arriba (rotaciones)",
      prescription: "1 serie · 10 repeticiones",
      note: "Demo visual orientativa.",
      media: "assets/gifs/movilidad_lumbar_rotaciones.gif"
    },
    {
      name: "Movilidad dorsal en cajón",
      prescription: "1 serie · 10 a cada lado",
      note: "Demo visual orientativa.",
      media: "assets/gifs/movilidad_dorsal_cajon.gif"
    },
    {
      name: "Movilidad dorsolumbar tumbado de lado",
      prescription: "1 serie · 10 a cada lado",
      note: "Demo visual orientativa.",
      media: "assets/gifs/movilidad_dorsolumbar_lado.gif"
    },
    {
      name: "Movilidad de caderas 90-90 sin manos",
      prescription: "1 serie · 10 repeticiones",
      note: "Demo visual orientativa.",
      media: "assets/gifs/movilidad_caderas_9090.gif"
    },
    {
      name: "Tocar pies con rodillas extendidas",
      prescription: "1 serie · 10 repeticiones",
      note: "Demo visual orientativa.",
      media: "assets/gifs/tocar_pies_rodillas_extendidas.gif"
    }
  ],
  days: [
    {
      key: "lunes",
      short: "Lun",
      title: "Lunes · Sesión 1",
      summary: "Tabla 1 según el orden exacto de capturas que me enviaste.",
      exercises: [
        { name: "Zancada lateral en copa", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en el nombre y la miniatura.", media: "assets/gifs/zancada_lateral_copa.gif" },
        { name: "Flexiones en silla de pie", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/flexiones_silla_pie.gif" },
        { name: "Peso muerto con mancuernas", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa.", media: "assets/gifs/peso_muerto_mancuernas.gif" },
        { name: "Remo unilateral apoyo abajo y pies asimétrico", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/remo_unilateral_apoyo_abajo.gif" },
        { name: "Dead Bug", prescription: "3 series · 10 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/dead_bug.gif" }
      ]
    },
    {
      key: "martes",
      short: "Mar",
      title: "Martes · Sesión 2",
      summary: "Tabla 2 según el orden exacto de capturas: se repite de forma intencional.",
      exercises: [
        { name: "Zancada lateral en copa", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en el nombre y la miniatura.", media: "assets/gifs/zancada_lateral_copa.gif" },
        { name: "Flexiones en silla de pie", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/flexiones_silla_pie.gif" },
        { name: "Peso muerto con mancuernas", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa.", media: "assets/gifs/peso_muerto_mancuernas.gif" },
        { name: "Remo unilateral apoyo abajo y pies asimétrico", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/remo_unilateral_apoyo_abajo.gif" },
        { name: "Dead Bug", prescription: "3 series · 10 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/dead_bug.gif" }
      ]
    },
    {
      key: "miercoles",
      short: "Mié",
      title: "Miércoles · Sesión 3",
      summary: "Tabla 3 según el orden exacto de capturas que me enviaste.",
      exercises: [
        { name: "Hip thrust unilateral con peso", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/hip_thrust_unilateral_peso.gif" },
        { name: "Press militar con 2 mancuernas y apoyo simétrico", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa.", media: "assets/gifs/press_militar_2_mancuernas.gif" },
        { name: "Zancada con mancuernas", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/zancada_mancuernas.gif" },
        { name: "Remo renegado", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/remo_renegado.gif" },
        { name: "Dead Bug", prescription: "3 series · 10 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/dead_bug.gif" }
      ]
    },
    {
      key: "jueves",
      short: "Jue",
      title: "Jueves · Sesión 4",
      summary: "Tabla 4 según el orden exacto de capturas que me enviaste.",
      exercises: [
        { name: "Arrancada con mancuerna", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/arrancada_mancuerna.gif" },
        { name: "Sentadilla + Zancada hacia delante", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/sentadilla_zancada_delante.gif" },
        { name: "Thruster", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/thruster.gif" },
        { name: "Sentadilla con salto", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa.", media: "assets/gifs/sentadilla_con_salto.gif" },
        { name: "Escalador", prescription: "3 series · 10 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/escalador.gif" }
      ]
    },
    {
      key: "viernes",
      short: "Vie",
      title: "Viernes · Sesión 5",
      summary: "Tabla 5 según el orden exacto de capturas: se repite de forma intencional.",
      exercises: [
        { name: "Hip thrust unilateral con peso", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa basada en la miniatura.", media: "assets/gifs/hip_thrust_unilateral_peso.gif" },
        { name: "Press militar con 2 mancuernas y apoyo simétrico", prescription: "3 series · 15 repeticiones", note: "Demo visual orientativa.", media: "assets/gifs/press_militar_2_mancuernas.gif" },
        { name: "Zancada con mancuernas", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/zancada_mancuernas.gif" },
        { name: "Remo renegado", prescription: "3 series · 15 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/remo_renegado.gif" },
        { name: "Dead Bug", prescription: "3 series · 10 a cada lado", note: "Demo visual orientativa.", media: "assets/gifs/dead_bug.gif" }
      ]
    }
  ]
};
