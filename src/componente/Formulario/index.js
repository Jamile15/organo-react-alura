import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSupensa';
import "./Formulario.css";
const Formulario = () => {
  const times = [
    'Programação',
    'front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'

  ]
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os campos pra criar o car do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" item={times}/>
      </form>
    </section>
  );
};
export default Formulario;
