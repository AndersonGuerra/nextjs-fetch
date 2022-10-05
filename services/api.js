const baseUrl = "http://localhost:3001/todos/";

export default {
  async listarTodasAsTarefas() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
  },

  async obterTarefa(id) {
    const response = await fetch(baseUrl + id);
    const result = await response.json();
    return result;
  },
};
