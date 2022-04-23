import "./Casa.css";

interface Props {
  imagem?: string;
  numero: number;
}

export default function Casa({ numero, imagem }: Props) {
  if (numero % 2 === 0) {
    return (
      <div className="casa casa-preta">
        {imagem && <div style={{backgroundImage: `url(${imagem})`}} className="peca"></div>}
      </div>
    );
  } else {
    return (
      <div className="casa casa-branca">
        {imagem && <div style={{backgroundImage: `url(${imagem})`}} className="peca"></div>}
      </div>
    );
  }
}