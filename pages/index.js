import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  ListGroup,
  ListGroupItem,
  Row,
  Stack,
} from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import api from "../services/api";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    api.listarTodasAsTarefas().then((resultado) => {
      setLista(resultado);
    });
  }, []);

  function adicionarNaLista() {
    if (lista.includes(tarefa)) {
      alert("Tarefa repetida");
    } else if (tarefa !== "") {
      const listaAuxiliar = lista;
      listaAuxiliar.push(tarefa);
      setLista(listaAuxiliar);
      setTarefa("");
    } else {
      alert("Tarefa vazia");
    }
  }

  function removerDaLista(tarefa) {
    const listaAuxiliar = lista.filter((e) => e !== tarefa);
    setLista(listaAuxiliar);
  }

  return (
    <Container>
      <h1>Tarefas</h1>
      <Stack gap={3}>
        <FormControl
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Insira sua tarefa"
        ></FormControl>
        <Button onClick={adicionarNaLista}>Adicionar</Button>
        <ListGroup>
          {lista.map((tarefa) => (
            <ListGroupItem key={tarefa.id}>
              <Row>
                <Col>{tarefa.title}</Col>
                <Col className="text-end">
                  <Link href={"/tarefas/" + tarefa.id}>
                    <Eye style={{cursor: "pointer"}}></Eye>
                  </Link>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Stack>
    </Container>
  );
}
