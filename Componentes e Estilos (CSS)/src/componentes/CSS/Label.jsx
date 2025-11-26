import "./Label.css";                             // (1) Importa o arquivo de estilos CSS do Label
import React, {useState} from 'react';             // (2) Importa React e o Hook useState

export default function Label({ texto }) {         // (3) Cria o componente funcional Label com a prop "texto"
  const [valor, setValor] = useState(texto);       // (4) Estado interno inicializado com a prop

  return (                                         // (5) Retorno JSX
    <label className='label'>                      // (6) Aplica a classe CSS 'label' para estilização
      {valor}                                      // (7) Renderiza o valor armazenado no estado
    </label>                                       // (8) Fecha a tag label
  );                                               // (9) Finaliza o retorno
}
