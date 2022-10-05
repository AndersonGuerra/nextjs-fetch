import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import api from "../../services/api";

export default function DetalheTarefa() {
  const router = useRouter();
  const [tarefa, setTarefa] = useState();

  useEffect(() => {
    const { id } = router.query;
    if (id !== undefined) {
      api.obterTarefa(id).then((resultado) => {
        setTarefa(resultado);
      });
    }
  }, [router.isReady]);

  return (
    <Container>
      <h1>Detalhes da Tarefa</h1>
      {tarefa !== undefined ? (
        <Stack>
          <>{tarefa.title}</>
          <Link href="/">
            <Button>Voltar</Button>
          </Link>
        </Stack>
      ) : (
        "Sem dados"
      )}
    </Container>
  );
}
