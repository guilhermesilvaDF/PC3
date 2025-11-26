import "./LabelTitle.css";                         // (1) Importa o CSS para o título
import React, {useState} from 'react';              // (2) Importa React e o Hook useState

export default function LabelTitle({ texto }) {     // (3) Componente funcional para títulos
  const [valor, setValor] = useState(texto);        // (4) Estado inicial com o valor recebido

  return (                                          // (5) Retorno JSX
    <label className='labelTitle'>                  // (6) Aplica a classe CSS 'labelTitle' para destaque visual
      {valor}                                       // (7) Exibe o título armazenado no estado
    </label>                                        // (8) Fecha a tag
  );
}
